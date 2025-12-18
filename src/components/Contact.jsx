import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      // Replace these with your EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="pt-24 pb-24 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-sm font-semibold text-purple-300 hover:border-purple-400 hover:bg-purple-950/60 transition-all duration-200">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-xs">Let&apos;s talk</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <p className="text-base text-gray-300 max-w-md leading-relaxed">
              Whether you have an opportunity, a project idea, or just want to say hi, feel free to
              reach out. I&apos;ll get back to you as soon as I can.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 ease-out hover:scale-105"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 group-hover:translate-y-[-2px] group-hover:bg-purple-900/60 group-hover:scale-110 transition-all duration-200">
                  {/* mail icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m5 8 7 5 7-5" />
                  </svg>
                </span>
                <span className="text-base font-medium">your.email@example.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 ease-out hover:scale-105"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 group-hover:translate-y-[-2px] group-hover:bg-purple-900/60 group-hover:scale-110 transition-all duration-200">
                  {/* GitHub icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.74 0 0 .84-.27 2.75 1.05A9.21 9.21 0 0 1 12 6.15c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.48.1 2.74.64.72 1.02 1.64 1.02 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </span>
                <span className="text-base font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 ease-out hover:scale-105"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/30 group-hover:translate-y-[-2px] group-hover:bg-purple-900/60 group-hover:scale-110 transition-all duration-200">
                  {/* LinkedIn icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path d="M6.09 6.75A2.34 2.34 0 1 1 6.1 2a2.34 2.34 0 0 1-.01 4.75ZM4.26 8.42h3.67V22H4.26V8.42ZM10.2 8.42h3.52v1.84h.05c.49-.93 1.7-1.9 3.5-1.9 3.75 0 4.44 2.47 4.44 5.68V22h-3.66v-6.64c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H10.2V8.42Z" />
                  </svg>
                </span>
                <span className="text-base font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-black/40 border border-purple-500/20 rounded-2xl p-6 sm:p-7 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-200">
            <h3 className="text-2xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-950/60 text-purple-400 border border-purple-500/30">
                {/* message icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 5h14a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-5.5L9 21v-4.5H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <span>Send a Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 ease-out rounded-lg hover:border-purple-400/40"
                />
                {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 ease-out rounded-lg hover:border-purple-400/40"
                />
                {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 ease-out rounded-lg hover:border-purple-400/40"
                />
                {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 ease-out resize-none rounded-lg hover:border-purple-400/40"
                />
                {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 border border-purple-500 text-white text-base font-semibold tracking-wide hover:from-purple-500 hover:to-violet-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-full"
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                {!isSubmitting && (
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-purple-700 text-white">
                    {/* send icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m4 4 16 8-16 8 3-8-3-8Z" />
                      <path d="M7 12h5" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
