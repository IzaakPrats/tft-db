// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

export type HeaderProps = {}

export const Header = withRouter(
    (props: HeaderProps) => {
    return (
      <nav className="pa3 pa4-ns justify-between nowrap blue">
        <div className="link dim black b f6 f5-ns dib mr3">TFT DB</div>
      </nav>
    )
  }
)
