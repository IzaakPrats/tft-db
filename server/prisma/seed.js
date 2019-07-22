const { prisma } = require('../src/generated/prisma-client')

const origins = [
  "Demon",
  "Dragon",
  "Exile",
  "Glacial",
  "Imperial",
  "Ninja",
  "Noble",
  "Phantom",
  "Pirate",
  "Robot",
  "Void",
  "Wild",
  "Yordle"
]

const clazzes = [
"Assassin",
"Blademaster",
"Brawler",
"Elementalist",
"Gaurdian",
"Gunslinger",
"Knight",
"Ranger",
"Shapeshifter",
"Sorcerer"
]

let heroes = [
  {
    name: "Darius",
    tier:	1,
    origin:	"Imperial",
    clazz:	"Knight",
    tertiaryType: null
  },
  {
    name: "Fiora",
    tier:	1,
    origin:	"Noble",
    clazz:	"Blademaster",
    tertiaryType: null
  },
  {
    name: "Garen",
    tier:	1,
    origin:	"Noble",
    clazz:	"Knight",
    tertiaryType: null
  },
  {
    name: "Vayne",
    tier:	1,
    origin:	"Noble",
    clazz:	"Ranger",
    tertiaryType: null
  },
  {
    name: "Mordekaiser",
    tier:	1,
    origin:	"Phantom",
    clazz:	"Knight",
    tertiaryType: null
  },
  {
    name: "Graves",
    tier:	1,
    origin:	"Pirate",
    clazz:	"Gunslinger",
    tertiaryType: null
  },
  {
    name: "Kassadin",
    tier:	1,
    origin:	"Void",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Kha'Zix",
    tier:	1,
    origin:	"Void",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Nidalee",
    tier:	1,
    origin:	"Wild",
    clazz:	"Shapeshifter",
    tertiaryType: null
  },
  {
    name: "Warwick",
    tier:	1,
    origin:	"Wild",
    clazz:	"Brawler",
    tertiaryType: null
  },
  {
    name: "Tristana",
    tier:	1,
    origin:	"Yordle",
    clazz:	"Gunslinger",
    tertiaryType: null
  },
  {
    name: "Elise",
    tier:	2,
    origin:	"Demon",
    clazz:	"Shapeshifter",
    tertiaryType: null
  },
  {
    name: "Varus",
    tier:	2,
    origin:	"Demon",
    clazz:	"Ranger",
    tertiaryType: null
  },
  {
    name: "Braum",
    tier:	2,
    origin:	"Glacial",
    clazz:	"Gaurdian",
    tertiaryType: null
  },
  {
    name: "Lissandra",
    tier:	2,
    origin:	"Glacial",
    clazz:	"Elementalist",
    tertiaryType: null
  },
  {
    name: "Shen",
    tier:	2,
    origin:	"Ninja",
    clazz:	"Blademaster",
    tertiaryType: null
  },
  {
    name: "Zed",
    tier:	2,
    origin:	"Ninja",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Lucian",
    tier:	2,
    origin:	"Noble",
    clazz:	"Gunslinger",
    tertiaryType: null
  },
  {
    name: "Pyke",
    tier:	2,
    origin:	"Pirate",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Blitzcrank",
    tier:	2,
    origin:	"Robot",
    clazz:	"Brawler",
    tertiaryType: null
  },
  {
    name: "Rek'sai",
    tier:	2,
    origin:	"Void",
    clazz:	"Brawler",
    tertiaryType: null
  },
  {
    name: "Ahri",
    tier:	2,
    origin:	"Wild",
    clazz: "Sorcerer",
    tertiaryType: null
  },
  {
    name: "Lulu",
    tier:	2,
    origin:	"Yordle",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Aatrox",
    tier:	3,
    origin:	"Demon",
    clazz:	"Blademaster",
    tertiaryType: null
  },
  {
    name: "Evelynn",
    tier:	3,
    origin:	"Demon",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Morgana",
    tier:	3,
    origin:	"Demon",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Shyvana",
    tier:	3,
    origin:	"Dragon",
    clazz:	"Shapeshifter",
    tertiaryType: null
  },
  {
    name: "Ashe",
    tier:	3,
    origin:	"Glacial",
    clazz:	"Ranger",
    tertiaryType: null
  },
  {
    name: "Volibear",
    tier:	3,
    origin:	"Glacial",
    clazz:	"Brawler",
    tertiaryType: null
  },
  {
    name: "Katarina",
    tier:	3,
    origin:	"Imperial",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Rengar",
    tier:	3,
    origin:	"Wild",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Poppy",
    tier:	3,
    origin:	"Yordle",
    clazz:	"Knight",
    tertiaryType: null
  },
  {
    name: "Veigar",
    tier:	3,
    origin:	"Yordle",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Brand",
    tier:	4,
    origin:	"Demon",
    clazz:	"Elementalist",
    tertiaryType: null
  },
  {
    name: "Aurelion Sol",
    tier:	4,
    origin:	"Dragon",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Sejuani",
    tier:	4,
    origin:	"Glacial",
    clazz:	"Knight",
    tertiaryType: null
  },
  {
    name: "Draven",
    tier:	4,
    origin:	"Imperial",
    clazz:	"Blademaster",
    tertiaryType: null
  },
  {
    name: "Akali",
    tier:	4,
    origin:	"Ninja",
    clazz:	"Assassin",
    tertiaryType: null
  },
  {
    name: "Leona",
    tier:	4,
    origin:	"Noble",
    clazz:	"Gaurdian",
    tertiaryType: null
  },
  {
    name: "Kindred",
    tier:	4,
    origin:	"Phantom",
    clazz:	"Ranger",
    tertiaryType: null
  },
  {
    name: "Cho'Gath",
    tier:	4,
    origin:	"Void",
    clazz:	"Brawler",
    tertiaryType: null
  },
  {
    name: "Yasuo",
    tier:	5,
    origin:	"Exile",
    clazz:	"Blademaster",
    tertiaryType: null
  },
  {
    name: "Anivia",
    tier:	5,
    origin:	"Glacial",
    clazz:	"Elementalist",
    tertiaryType: null
  },
  {
    name: "Kayle",
    tier:	5,
    origin:	"Noble",
    clazz:	"Knight",
    tertiaryType: null
  },
  {
    name: "Karthus",
    tier:	5,
    origin:	"Phantom",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Miss Fortune",
    tier:	5,
    origin:	"Pirate",
    clazz:	"Gunslinger",
    tertiaryType: null
  },
  {
    name: "Twisted Fate",
    tier:	2,
    origin:	"Pirate",
    clazz:	"Sorcerer",
    tertiaryType: null
  },
  {
    name: "Swain",
    tier:	5,
    origin:	"Imperial",
    clazz:	"Demon",
    tertiaryType:	"Shapeshifter"
  },
  {
    name: "Gnar",
    tier:	4,
    origin:	"Yordle",
    clazz:	"Wild",
    tertiaryType:	"Shapeshifter"
  },
  {
    name: "Gangplank",
    tier:	3,
    origin:	"Pirate",
    clazz:	"Gunslinger",
    tertiaryType:	"Blademaster"
  },
  {
    name: "Kennen",
    tier:	3,
    origin:	"Yordle",
    clazz:	"Ninja",
    tertiaryType:	"Elementalist"
  }
]

async function main() {
  // console.log(origins)
  // console.log(clazzes)
  // console.log(heroes)

  for (var i = 0; i < origins.length; i++) {
    await prisma.createHeroType({
      name: origins[i],
      heroTypeType: "ORIGIN"
    })
  }

  for (var i = 0; i < clazzes.length; i++) {
    await prisma.createHeroType({
      name: clazzes[i],
      heroTypeType: "CLASS"
    })
  }

  for (var i = 0; i < heroes.length; i++) {
    let hero = heroes[i]

    if (hero.tertiaryType == null) {
      await prisma.createHero({
        name: hero.name,
        tier: hero.tier,
        origin: {
          connect: {
            name: hero.origin
          }
        },
        clazz: {
          connect: {
            name: hero.clazz
          }
        }
      })
    } else {
      await prisma.createHero({
        name: hero.name,
        tier: hero.tier,
        origin: {
          connect: {
            name: hero.origin
          }
        },
        clazz: {
          connect: {
            name: hero.clazz
          }
        },
        tertiaryType: {
          connect: {
            name: hero.tertiaryType
          }
        }
      })
    }
  }
}

main().catch(e => {
  console.error(e)
})
