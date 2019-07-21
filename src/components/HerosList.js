// @flow

import * as React from 'react';
import HeroCard from './HeroCard';
import type {Hero} from '../models/Hero';

export type HerosListProps = {
  heros: [Hero]
}

function HerosList(props: HerosListProps) {
  const heroCards = props.heros.map((hero) =>
    <HeroCard hero={hero}/>
  )

  return <div>props.heros</div>
}
