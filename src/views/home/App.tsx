import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
//引入scss对象
import scssTest from './test.module.scss'
import { Link, Routes, Route } from 'react-router-dom'

import About from '@/views/about/about.tsx'
import User from '@/views/user/user.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className={scssTest.test} style={{ color: scssTest.color }}>scss引入测试</div>
      <Link to={{
        pathname: '/about',
      }}>about</Link>
      <Link to={{
        pathname: '/user',
      }}>user</Link>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}

export default App
