import { XStream } from '@ant-design/x-sdk';
import { useRef, useState } from 'react';

export const fetchTheme = async (
  prompt: string,
  update, // TODO-luokun: stream回显
  {
    onToken,
    onDone,
    onError,
  }: {
    onToken: (component: string, token: string) => void;
    onDone: (component: string, styles: any) => void;
    onError?: (component: string, message: string) => void;
  },
  abortSignal?: AbortSignal,
) => {
  console.log('prompt===luokun===', prompt);
  const response = await fetch(
    'http://localhost:3000/api/theme/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // components: ['picker', 'input', 'switch'],
        components: ['input'],
        description: '暗色主题，主色调蓝色，选中项加粗' || prompt,
      }),
      signal: abortSignal,
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (!response.body) {
    throw new Error('Response body is null');
  }

  for await (const chunk of XStream({
    readableStream: response.body,
  })) {
    const content = JSON.parse(chunk?.data)?.choices?.[0]?.delta?.content;

    console.log('content===luokun===', content,chunk);

    if (!content || content === '[DONE]') continue;

    let parsed;

    try {
      parsed = JSON.parse(content);
    } catch {
      continue;
    }

    switch (parsed.type) {
      case 'token':
        update(parsed.component, parsed.token);
        break;

      case 'done':
        onDone(parsed.component, parsed.styles);
        break;

      case 'error':
        onError?.(parsed.component, parsed.message);
        break;

      default:
        break;
    }
  }
};

// Parse the JSON response
function getJsonText(raw: string, rmComment = false): string {
  let jsonStr = raw.trim();
  
  // 如果包含 markdown 代码块标记，移除它们
  jsonStr = jsonStr.replace(/^```json\s*|\s*```$/g, '');
  
  if (rmComment) {
    jsonStr = jsonStr.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '').trim();
  }
  
  return jsonStr;
}

export default function usePromptTheme(
  onThemeChange?: (themeConfig: any) => void,
) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resText, setResText] = useState('');
  const abortControllerRef = useRef<AbortController | null>(null);

  const submitPrompt = async (nextPrompt: string) => {
    if (!nextPrompt.trim()) {
      return;
    }

    setPrompt(nextPrompt);

    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    setLoading(true);
    setResText('');

    try {
      const data = await fetchTheme(
        nextPrompt,
        (currentContent) => {
          setResText(currentContent);
        },
        abortController.signal,
      );

      // Handle the response
      if (data && onThemeChange) {
        const nextConfig = JSON.parse(getJsonText(data, true));
        onThemeChange(nextConfig);
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.warn('Request was aborted');
      } else {
        console.error('Failed to generate theme:', error);
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setLoading(false);
    }
  };

  return [submitPrompt, loading, prompt, getJsonText(resText), cancelRequest] as const;
}
