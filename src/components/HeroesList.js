// @flow

import * as React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import HeroCard from './HeroCard';

export type HerosListProps = {}

const HEROES_QUERY = gql`
  {
    heroes {
      id
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

export default function HeroesList(props: HerosListProps) {
    return <Query query={HEROES_QUERY}>
      {({ loading, error, data}) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        const heroesToRender = data.heroes

        let heroCards = heroesToRender.map((hero) => {
          return <li key={hero.id}>
            <HeroCard hero={hero}></HeroCard>
          </li>
        })

        return <ul>{heroCards}</ul>
      }}
    </Query>
}
