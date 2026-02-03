import React from 'react'
import IndexBar from '../index'

class IndexBarExample extends React.Component {
  render() {
    const sections = Array.from({ length: 26 }, (_, index) => {
      const key = String.fromCharCode(65 + index)
      const randomCount = Math.floor(Math.random() * 3) + 3
      const data = Array.from(
        { length: randomCount },
        (_, index) => `Content ${key}${index}`,
      )
      return {
        key,
        title: `Title ${key}`,
        data,
      }
    })
    return <IndexBar sections={sections} />
  }
}

export default IndexBarExample
