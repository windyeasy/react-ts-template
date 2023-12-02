import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const test = '123'
  return (
    <div className="App">
      aaa
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
