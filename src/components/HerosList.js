// @flow

import * as React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import HeroCard from './HeroCard';
import type {Hero} from '../models/Hero';
import type {HeroType} from '../models/HeroType';

export type HerosListProps = {
  heros: [Hero]
}

const HEROES_QUERY = gql`
  {
    heroes {
      name
      tier
      origin {
        name
      }
      clazz {
        name
      }
      tertiaryType {
        name
      }
    }
  }
`

function HerosList(props: HerosListProps) {
  const heroCards = props.heros.map((hero) =>
    <Query query={HEROES_QUERY}>
      {({ loading, error, data}) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        const heroesToRender = data.heroes

        return (
          heroesToRender.map((hero) => {
            return <li>
              <HeroCard hero={hero}></HeroCard>
            </li>
          })
        )
      }}
    </Query>
  )

  return (
    <ul>heroCards</ul>
  )
}
