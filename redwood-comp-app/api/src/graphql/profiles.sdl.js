export const schema = gql`
  type Profile {
    id: Int!
    bio: String!
    userId: Int!
    user: User!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    bio: String!
    userId: Int!
  }

  input UpdateProfileInput {
    bio: String
    userId: Int
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
