import * as React from 'react'
import {
  BrowserRouter,
  Link as BrowserLink,
  Route as BrowserRoute,
} from 'react-router-dom'

import RouteMap from '../imports/register-routes'

export interface IRoute {
  path: string,
  component: React.ReactNode,
  exact?: boolean,
}
export const Route = (props: IRoute, index: number) => (
  <BrowserRoute key={`r_${index}`} {...props} />
)

{/* <Route exact path='/' component={Home}/>
<Route path='/about' component={About}/> */}

const Router = (Layout: React.ReactElement<{}>) => (
  <BrowserRouter>
    <div className='react-router'>
      <Layout
        routes={RouteMap}
        routeComponent={Route}
      />
    </div>
  </BrowserRouter>
)

export default Router
