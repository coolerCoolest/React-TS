import './App.scss'
import { Link, Routes, Route } from 'react-router-dom'

import routes from '@/router'

import { Button } from 'antd'

const App: React.FC = () => {
  return (
    <>
      <div className="nav">
        {
          routes.map(item => (<Link className='link' to={{
            pathname: item.path,
          }} key={item.name}><Button type="primary">{item.name}</Button></Link>))
        }
      </div>
      <Routes>
        {
          routes.map(item => (<Route key={item.name} path={item.path} element={item.component} />))
        }
      </Routes>
    </>
  )
}

export default App
