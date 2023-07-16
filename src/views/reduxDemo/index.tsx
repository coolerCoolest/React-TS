import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/store'
import { Button } from 'antd'


const ReduxDemo: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: any) => state.counter)
  return (
    <>
      <div>
        value:{counter}
        <Button type="primary" onClick={() => {
          dispatch(increment())
        }}>+</Button>
        <Button type="primary" onClick={() => { console.log('-'); dispatch(decrement()) }}>-</Button>

      </div >
    </>
  )
}

export default ReduxDemo




