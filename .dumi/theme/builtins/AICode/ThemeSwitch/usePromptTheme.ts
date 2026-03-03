import { XStream } from '@ant-design/x-sdk'
import { useRef, useState } from 'react'

export const fetchTheme = async (
  components: string[],
  prompt: string,
  update: (fullObj: {}, count: number) => void,
  abortSignal?: AbortSignal,
) => {
  const response = await fetch('http://localhost:3000/api/theme/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      components,
      description: prompt,
    }),
    signal: abortSignal,
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  if (!response.body) {
    throw new Error('Response body is null')
  }

  let fullContent = {} as any // { [component]: "\n\n styles \n\n" }

  let count = 0

  for await (const chunk of XStream({
    readableStream: response.body,
  })) {
    const data = JSON.parse(chunk.data) as {
      component: string
      payload: string
    }

    if (fullContent[data.component]) {
      fullContent[data.component] += data.payload
    } else {
      fullContent[data.component] = data.payload
    }

    count += 1

    update(fullContent, count)
  }
}

export default function usePromptTheme(components: string[]) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [resObj, setResObj] = useState({}) // {component:string}
  const [count, setCoount] = useState(0) // {component:string}
  const abortControllerRef = useRef<AbortController | null>(null)

  const submitPrompt = async (nextPrompt: string) => {
    if (!nextPrompt.trim()) {
      return
    }

    setPrompt(nextPrompt)

    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new AbortController for this request
    const abortController = new AbortController()
    abortControllerRef.current = abortController

    setLoading(true)
    setResObj({})

    try {
      await fetchTheme(
        components,
        nextPrompt,
        (fullContentObj, count) => {
          setResObj(fullContentObj)
          setCoount(count)
        },
        abortController.signal,
      )
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.warn('Request was aborted')
      } else {
        console.error('Failed to generate theme:', error)
      }
    } finally {
      setLoading(false)
      abortControllerRef.current = null
    }
  }

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
      setLoading(false)
    }
  }

  return [submitPrompt, loading, prompt, resObj, count, cancelRequest] as const
}
