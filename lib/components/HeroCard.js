import * as React from 'react';
import '../styles/HeroCard.css';
export default function HeroCard(props) {
  return React.createElement("div", null, React.createElement("p", null, props.hero.name), React.createElement("p", null, props.hero.tier), React.createElement("p", null, props.hero.origin.name), React.createElement("p", null, props.hero.clazz.name), React.createElement("p", null, props.hero.tertiaryType ? props.hero.tertiaryType.name : ""));
}