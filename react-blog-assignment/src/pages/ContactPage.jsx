function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="post-card contact-page">
      <h1>Contact</h1>
      <p className="post-content">Send a message using the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="6" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default ContactPage
