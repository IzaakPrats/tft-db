function heroes(parent, args, context, info) {
  return context.prisma.heroes()
}

function heroTypes(parent, args, context, info) {
  return context.prisma.heroTypes()
}

function origins(parent, args, context, info) {
  return context.prisma.heroTypes({
    where: {
      heroTypeType: "ORIGIN"
    }
  })
}

function clazzes(parent, args, context, info) {
  return context.prisma.heroTypes({
    where: {
      heroTypeType: "CLASS"
    }
  })
}

function findHeroByName(parent, args, context, info) {
  return context.prisma.hero({
    where: {
      name: args.name
    }
  })
}

module.exports = {
  heroes,
  heroTypes,
  origins,
  clazzes,
  findHeroByName
}
