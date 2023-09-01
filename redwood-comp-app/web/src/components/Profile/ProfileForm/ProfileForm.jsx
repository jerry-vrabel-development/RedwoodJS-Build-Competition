import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ProfileForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.profile?.id)
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <Form onSubmit={onSubmit} error={props.error} className="space-y-4">
        <FormError
          error={props.error}
          wrapperClassName="bg-red-50 p-4 rounded-md"
          titleClassName="text-red-600 font-bold"
          listClassName="list-disc pl-5 text-red-500"
        />

        <div className="space-y-2">
          <Label
            name="bio"
            className="block text-sm font-medium text-gray-700"
            errorClassName="text-red-600"
          >
            Bio
          </Label>
          <TextField
            name="bio"
            defaultValue={props.profile?.bio}
            className="mt-1 p-2 w-full border rounded-md"
            errorClassName="border-red-600"
            validation={{ required: true }}
          />
          <FieldError name="bio" className="text-red-600 text-sm" />
        </div>

        <div className="flex justify-end">
          <Submit
            disabled={props.loading}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProfileForm
