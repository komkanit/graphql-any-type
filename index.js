const { GraphQLScalarType } = require('graphql')

const GraphQLAny = new GraphQLScalarType({
  name: 'Object',
  description: 'Can be anything',
  parseValue(value) {
    return value
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    return ast
  }
})

module.exports = {
  GraphQLAny
}
