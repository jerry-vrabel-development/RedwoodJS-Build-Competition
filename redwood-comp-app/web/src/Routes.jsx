// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private, useLocation } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { useAuth } from './auth'


const Routes = () => {
  return (
    <Router useAuth={useAuth}>
    <Private unauthenticated="login" roles="admin">
    <Set wrap={DefaultLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
    <Route path="/users/new" page={UserNewUserPage} name="newUser" />
    <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
    <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
    <Route path="/users" page={UserUsersPage} name="users" />
    </Set>
    </Private>
    <Set wrap={DefaultLayout}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="login" roles="admin">
        <Route path="/admin" page={AdminPage} name="admin" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
