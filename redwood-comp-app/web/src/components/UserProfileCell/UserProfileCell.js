// web/src/components/UserProfileCell/UserProfileCell.js

export const QUERY = gql`
  query FindUserById($id: Int!) {
    user: user(id: $id) {
      id
      name
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      roles
    }
  }
`

export const LoadingCell = () => <div>Loading...</div>

export const EmptyCell = () => <div>User not found.</div>

export const FailureCell = ({ error }) => <div>Error: {error.message}</div>

export const SuccessCell = ({ user }) => {
  return (
    <div>
      <h2>{user.name || "Anonymous"}</h2>
      <p>Email: {user.email}</p>
      <p>Roles: {user.roles}</p>
      {/* Display other user details but skip sensitive ones */}
    </div>
  )
}
