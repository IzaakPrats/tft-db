// @flow

import * as React from 'react';
import type {Hero} from '../models/Hero';
import type {HeroType} from '../models/HeroType';

export type HeroCardProps = {
  hero: Hero
}

export default function HeroCard(props: HeroCardProps) {
  return <div>{props.hero.name}</div>
}
