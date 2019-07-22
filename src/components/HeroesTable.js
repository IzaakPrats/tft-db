// @flow

import * as React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import HeroRow from './HeroRow';

export type HeroesTableProps = {}

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

export default function HeroesTable(props: HeroesTableProps) {
    return <Query query={HEROES_QUERY}>
      {({ loading, error, data}) => {
        if (loading) return <div>Fetching</div>
        if (error) {
          console.error(error)
          return <div>Error</div>
        }

        const heroesToRender = data.heroes

        let rows = heroesToRender.map((hero) => {
          return <HeroRow key={hero.id} hero={hero}></HeroRow>
        })

        return(
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center">
                <thead>
                  <tr key="header">
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Name</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Tier</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Origin</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Class</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Tertiary Type</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {rows}
                </tbody>
              </table>
            </div>
          </div>
        )
      }}
    </Query>
}
