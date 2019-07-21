// @flow

import * as React from 'react';
import type {Hero} from '../models/Hero';

export type HeroCardProps = {
  hero: Hero
}

export default function HeroCard(props: HeroCardProps) {
  return <div>{props.hero.name}</div>
}
