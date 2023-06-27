import { useState } from 'react'
import './App.scss'
//引入scss对象
import scssTest from './test.module.scss'
import { Link, Routes, Route } from 'react-router-dom'
import About from '@/views/about/about.tsx'
import User from '@/views/user/user.tsx'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  // const counter = useSelector((state: any) => state)
  // console.log(counter,123123);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <div onClick={() => handleAdd()}>{counter}</div> */}
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
