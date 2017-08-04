import About from './about/'
import Home from './home/'

export interface IRoute {
  path: string,
  component: React.ReactNode,
  exact?: boolean,
}

export class Route {
  public path: string
  public component: React.ReactNode
  public exact?: boolean

  constructor({
    path,
    component,
    exact= false,
  }) {
    this.path = path
    this.component = component
    this.exact = exact
  }
}

export const RouteFactory = (
  path: string,
  component: React.ReactNode,
  exact= false,
) => ({
  component, exact, path,
})
const RouteMap = [
  RouteFactory('/', Home, true),
  RouteFactory('/about', About),
]

export default RouteMap
