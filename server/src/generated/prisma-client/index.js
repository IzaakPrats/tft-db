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
  endpoint: `http://tft-d-publi-1fa7je5wrouy1-629981023.us-west-2.elb.amazonaws.com/server/dev`
});
exports.prisma = new exports.Prisma();
