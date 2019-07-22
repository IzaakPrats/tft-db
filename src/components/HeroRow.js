// @flow

import * as React from 'react'
import type {Hero} from '../models/Hero'

export type HeroRowProps = {
  hero: Hero
}

export default function HeroRow(props: HeroRowProps) {
  return <tr key={props.hero.id}>
      <td className="pv3 pr3 bb b--black-20">{props.hero.name}</td>
      <td className="pv3 pr3 bb b--black-20">{props.hero.tier}</td>
      <td className="pv3 pr3 bb b--black-20">{props.hero.origin.name}</td>
      <td className="pv3 pr3 bb b--black-20">{props.hero.clazz.name}</td>
      <td className="pv3 pr3 bb b--black-20">{props.hero.tertiaryType ? props.hero.tertiaryType.name : ""}</td>
  </tr>
}
