import ReduxDemo from '@/views/reduxDemo'
import ScssTest from '@/views/scssTest'
import RectAnimation from '@/views/rectAnimation'
import DingdingDemo from '@/views/dingdingDemo'
import ProxyDemo from '@/views/proxyDemo'

interface route {
  name: string,
  path: string,
  component: JSX.Element
}

const routes: route[] = [
  { name: 'ScssTest', path: '/ScssTest', component: <ScssTest /> },
  { name: 'ReduxDemo', path: '/ReduxDemo', component: <ReduxDemo /> },
  { name: 'RectAnimation', path: '/RectAnimation', component: <RectAnimation /> },
  { name: 'DingdingDemo', path: '/DingdingDemo', component: <DingdingDemo /> },
  { name: 'ProxyDemo', path: '/ProxyDemo', component: <ProxyDemo /> }
]

export default routes