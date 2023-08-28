// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private, useLocation } from '@redwoodjs/router'
import { useTransition, animated } from 'react-spring'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { useAuth } from './auth'

function MainRoutes() {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={DefaultLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="login">
          <Route path="/admin" page={AdminPage} name="admin" />
        </Private>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
}

function AnimatedRoutes() {
  const { pathname } = useLocation();
  const transitions = useTransition(pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return transitions((style, item) => (
    <animated.div style={style}>
      <MainRoutes />
    </animated.div>
  ));
}

export default AnimatedRoutes;

