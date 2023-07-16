// interface testObj {
//   name: string
// }
import { useState } from "react";

const ProxyDemo: React.FC = () => {
  const proxyObj = new Proxy({
    name: '名称'
  }, {
    get: function (target, propKey) {
      console.log(target, propKey, 'get');
      if (propKey in target) {
        return target[propKey]
      } else {
        throw new ReferenceError(`未找到${propKey}属性`)
      }
    },
    set: function (target, propKey, value) {
      console.log(target, propKey, value, 'set')
      target[propKey] = `属性${value}`
      return true
    }
  })

  let [obj, setObj] = useState(proxyObj)

  return (
    <div>
      <div onClick={() => {
        proxyObj.name = '123222'
        setObj((e) => {
          console.log(e, 999)
          return proxyObj
        })
      }}>
        {`proxy测试，name：${obj.name},${proxyObj.name}`}
      </div>
    </div>
  )
}
export default ProxyDemo