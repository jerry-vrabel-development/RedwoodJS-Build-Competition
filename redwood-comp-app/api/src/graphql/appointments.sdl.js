export const schema = gql`
  type Appointment {
    id: Int!
    date: DateTime!
    userId: Int!
    user: User!
  }

  type Query {
    appointments: [Appointment!]! @requireAuth
    appointment(id: Int!): Appointment @requireAuth
  }

  input CreateAppointmentInput {
    date: DateTime!
    userId: Int!
  }

  input UpdateAppointmentInput {
    date: DateTime
    userId: Int
  }

  type Mutation {
    createAppointment(input: CreateAppointmentInput!): Appointment! @requireAuth
    updateAppointment(id: Int!, input: UpdateAppointmentInput!): Appointment!
      @requireAuth
    deleteAppointment(id: Int!): Appointment! @requireAuth
  }
`
