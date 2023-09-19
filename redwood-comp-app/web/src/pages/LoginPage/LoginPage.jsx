import { useRef, useEffect } from 'react'
import { Form, Label, TextField, PasswordField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn, currentUser } = useAuth()

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.roles && currentUser.roles.includes('admin')) {
        navigate(routes.admin())
      } else if (currentUser.profile) {  // This assumes you have a 'profile' field to check.
        navigate(routes.profile({ id: currentUser.id }))
      } else if (!currentUser) {
        navigate(routes.newProfile())
      }
    }
  }, [isAuthenticated, currentUser])


  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="min-h-screen flex items-center justify-center bg-blue-100 px-4 sm:px-6 lg:px-8">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">Sign in to your account</h2>
          </div>
          <div className="bg-white p-8 rounded shadow-lg">
            <Form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label name="username" className="block text-sm font-medium text-blue-700">Username</Label>
                <TextField
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md"
                  ref={usernameRef}
                  validation={{
                    required: {
                      value: true,
                      message: 'Username is required',
                    },
                  }}
                />
                <FieldError name="username" className="text-red-600 mt-1" />
              </div>

              <div>
                <Label name="password" className="block text-sm font-medium text-blue-700">Password</Label>
                <PasswordField
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />
                <FieldError name="password" className="text-red-600 mt-1" />

                <div className="text-right">
                  <Link to={routes.forgotPassword()} className="text-sm text-blue-500 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div>
                <Submit className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Login
                </Submit>
              </div>
            </Form>
          </div>
          <div className="text-center">
            <span className="text-gray-600">Don&apos;t have an account?</span>
            <Link to={routes.signup()} className="ml-1 text-blue-500 hover:underline">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
