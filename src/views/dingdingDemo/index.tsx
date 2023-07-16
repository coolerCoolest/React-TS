import { useEffect } from 'react'
import './style.scss'

const DingdingDemo: React.FC = () => {

  useEffect(() => {
    const items = document.querySelectorAll('.list-item')
    console.log(items, '列表');
  }, [])
  return (
    <div className='dingding'>
      <div className="header">HEADER</div>
      <div className="animation-container">
        <div className="list">
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
          <div className="list-item"></div>
        </div>
      </div>

    </div>
  )
}

export default DingdingDemo

