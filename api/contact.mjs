import { sendEmail } from '../server/email-service.js'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, message } = request.body ?? {}
  const cleanName = typeof name === 'string' ? name.trim() : ''
  const cleanEmail = typeof email === 'string' ? email.trim() : ''
  const cleanMessage = typeof message === 'string' ? message.trim() : ''

  if (
    !cleanName || cleanName.length > 200 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) || cleanEmail.length > 320 ||
    !cleanMessage || cleanMessage.length > 10_000
  ) {
    return response.status(400).json({ ok: false, error: 'Please provide a valid name, email, and message.' })
  }

  try {
    await sendEmail({ name: cleanName, email: cleanEmail, message: cleanMessage })
    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email failed:', error?.message || error)
    return response.status(500).json({ ok: false, error: 'Message could not be sent.' })
  }
}
