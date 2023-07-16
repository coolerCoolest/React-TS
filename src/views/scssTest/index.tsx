import variable from './test.module.scss'
function ScssTest() {

  return (
    <div style={{ color: variable.color }}>
      模块化导入scss变量
    </div>
  )
}

export default ScssTest
