export default `
  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    address: String
    city: String
    gender: String
    phoneNumber: String
    createDate: String
    updateDate: String
    receiveNotification: Boolean,
    receiveNewsletters: Boolean,
    receiveSpecialOffer: Boolean,
    participateBetaProgramme: Boolean
  }
  type Query {
    user(id: String!): User
    users: [User]
    loginUser(email: String!, password: String!): User
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String!, address: String, city: String, gender: String, phoneNumber: String): User
    editUser(id: String!, name: String, email: String, password: String, address: String, city: String, gender: String, phoneNumber: String): User
    deleteUser(id: String, email: String): User
    changePasswordUser(id: String!, currentPassword: String!, newPassword: String!): User
    changeUserService(id: String!, receiveNotification: Boolean, receiveNewsletters: Boolean, receiveSpecialOffer: Boolean, participateBetaProgramme: Boolean): User
  }
`;