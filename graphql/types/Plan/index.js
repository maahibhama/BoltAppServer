export default `
  type Plan {
    name : String!,
    description: String!,
    price: Number!,
    rating:String,
    rating_comments: [String]
  }
  type Query {
    plan(name: String!): Plan
    plans: [Plan]
    }
  type Mutation {
    addPlan(name : String!,
      description: String!,
      price: Number!,
      rating:String,
      rating_comments: [String]): Plan

    editPlan(name : String!,
      description: String!,
      price: Number!,
      rating:String,
      rating_comments: [String]) : Plan

    deletePlan(name : String!,
      description: String!,
      price: Number!,
      rating:String,
      rating_comments: [String]): Plan
  }
`;
