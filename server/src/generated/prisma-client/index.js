"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Hero",
    embedded: false
  },
  {
    name: "HeroType",
    embedded: false
  },
  {
    name: "HeroTypeType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/izaak-prats-f0191a/tft-db/dev`
});
exports.prisma = new exports.Prisma();
