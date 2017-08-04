import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'

import RouteMap from '../imports/register-routes'

const Router = (Layout: React.ReactElement<{}>) => (
  <BrowserRouter>
    <div className='react-router'>
      <Layout
        routes={RouteMap}
      />
    </div>
  </BrowserRouter>
)

export default Router
