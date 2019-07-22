// @flow
import type {HeroType} from './HeroType';

export type Hero = {
  id: string,
  name: string,
  tier: number,
  origin: HeroType,
  clazz: HeroType,
  tertiaryType: HeroType
}
