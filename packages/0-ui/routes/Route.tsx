import * as React from 'react'
import {Route as BrowserRoute} from 'react-router-dom'

export interface IRoute {
  path: string,
  component: React.ReactNode,
  exact?: boolean,
}
export const Route = (props: IRoute, index: number) => (
  <BrowserRoute key={`r_${index}`} {...props} />
)
