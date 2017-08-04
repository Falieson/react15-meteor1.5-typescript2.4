import * as React from 'react'
import {Link} from 'react-router-dom'

import {Routing} from '0-ui'
import Router, {IRoute} from './Router'

const {Route} = Routing

const Navigation = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
  </ul>
)

const LayoutContainer = ({routes}: { routes: IRoute[]}): React.ReactElement<{}> => {
  return (
    <div className='react-layout'>
      <Navigation />
      {routes.map((r: IRoute, i: number) => Route(r, i))}
    </div>
  )
}

export default function Root({
  children,
}: {
  children: React.ReactElement<{}>,
}): React.ReactElement<{}> {
  if (!children) {
    return (
      <div>
        App error...
      </div>
    )
  }
  return (
    <div className='react-root'>
      {Router(LayoutContainer)}
    </div>
  )
}
