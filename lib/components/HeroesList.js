import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HeroCard from './HeroCard';
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
`;
export default function HeroesList(props) {
  return React.createElement(Query, {
    query: HEROES_QUERY
  }, ({
    loading,
    error,
    data
  }) => {
    if (loading) return React.createElement("div", null, "Fetching");
    if (error) return React.createElement("div", null, "Error");
    const heroesToRender = data.heroes;
    let heroCards = heroesToRender.map(hero => {
      return React.createElement("li", {
        key: hero.id
      }, React.createElement(HeroCard, {
        hero: hero
      }));
    });
    return React.createElement("ul", null, heroCards);
  });
}