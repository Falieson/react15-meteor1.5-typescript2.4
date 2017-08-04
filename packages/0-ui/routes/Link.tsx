import * as React from 'react'
import {
  Link as BrowserLink,
} from 'react-router-dom'

export interface ILink {
  href?: string,
  to?: string,
  message: string,
}
export const Link = (props: ILink) => {
  const {
    href,
    to,
    message,
  } = props

  const target = (props.href ? props.href : props.to) || '/'

  return (
    <BrowserLink
      to={target}
    >
      {message}
    </BrowserLink>
  )
}
