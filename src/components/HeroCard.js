// @flow

import * as React from 'react'
import type {Hero} from '../models/Hero'
import '../styles/HeroCard.css'

export type HeroCardProps = {
  hero: Hero
}

export default function HeroCard(props: HeroCardProps) {
  return <div>
      <p>{props.hero.name}</p>
      <p>{props.hero.tier}</p>
      <p>{props.hero.origin.name}</p>
      <p>{props.hero.clazz.name}</p>
      <p>{props.hero.tertiaryType ? props.hero.tertiaryType.name : ""}</p>
  </div>
}
