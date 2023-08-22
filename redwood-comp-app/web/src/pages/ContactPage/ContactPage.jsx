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
      <Form
         onSubmit={onSubmit}
         config={{ mode: 'onBlur' }}
         error={error}
         formMethods={formMethods}
      >
      <FormError error={error} wrapperClassName="form-error" />

      <Label name="name" errorClassName="error">Name</Label>
        <TextField 
          name="name" 
          validation={{required: true}}
          errorClassName="error" 
        />
        <FieldError name="name" errorClassName="error" />

        <Label name="email">Email</Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" errorClassName="error" />

        <Label name="message">Message</Label>
        <TextAreaField
          name="message"
          validation={{required: true}}
          errorClassName="error"
        />
        <FieldError name="message" errorClassName="error"/>

        <Submit disable={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
