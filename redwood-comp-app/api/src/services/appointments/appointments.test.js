import {
  appointments,
  appointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from './appointments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('appointments', () => {
  scenario('returns all appointments', async (scenario) => {
    const result = await appointments()

    expect(result.length).toEqual(Object.keys(scenario.appointment).length)
  })

  scenario('returns a single appointment', async (scenario) => {
    const result = await appointment({ id: scenario.appointment.one.id })

    expect(result).toEqual(scenario.appointment.one)
  })

  scenario('creates a appointment', async (scenario) => {
    const result = await createAppointment({
      input: {
        date: '2023-08-30T17:02:59.061Z',
        userId: scenario.appointment.two.userId,
      },
    })

    expect(result.date).toEqual(new Date('2023-08-30T17:02:59.061Z'))
    expect(result.userId).toEqual(scenario.appointment.two.userId)
  })

  scenario('updates a appointment', async (scenario) => {
    const original = await appointment({
      id: scenario.appointment.one.id,
    })
    const result = await updateAppointment({
      id: original.id,
      input: { date: '2023-08-31T17:02:59.061Z' },
    })

    expect(result.date).toEqual(new Date('2023-08-31T17:02:59.061Z'))
  })

  scenario('deletes a appointment', async (scenario) => {
    const original = await deleteAppointment({
      id: scenario.appointment.one.id,
    })
    const result = await appointment({ id: original.id })

    expect(result).toEqual(null)
  })
})
