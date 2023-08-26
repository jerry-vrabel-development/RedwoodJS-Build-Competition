import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { FieldError, Form, FormError, Label, Submit, TextField, TextAreaField, useForm } from '@redwoodjs/forms'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({mode: 'onBlur'})
  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <div className="container mx-auto mt-6 p-4">
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
          className="bg-white p-6 shadow-md rounded"
        >
          <FormError error={error} wrapperClassName="form-error mb-4 text-red-500" />

          <div className="mb-4">
            <Label name="name" errorClassName="text-red-500">Name</Label>
            <TextField 
              name="name"
              validation={{required: true}}
              className="mt-1 p-2 w-full border rounded"
              errorClassName="border-red-500" 
            />
            <FieldError name="name" errorClassName="mt-1 text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <Label name="email" errorClassName="text-red-500">Email</Label>
            <TextField
              name="email"
              validation={{
                required: true,
                pattern: {
                  value: /^[^@]+@[^.]+\..+$/,
                  message: 'Please enter a valid email address',
                },
              }}
              className="mt-1 p-2 w-full border rounded"
              errorClassName="border-red-500"
            />
            <FieldError name="email" errorClassName="mt-1 text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <Label name="message" errorClassName="text-red-500">Message</Label>
            <TextAreaField
              name="message"
              validation={{required: true}}
              className="mt-1 p-2 w-full border rounded"
              errorClassName="border-red-500"
            />
            <FieldError name="message" errorClassName="mt-1 text-red-500 text-sm"/>
          </div>

          <Submit disable={loading} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Save
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default ContactPage
