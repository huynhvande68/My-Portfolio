import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const reForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_i2tk9rp',
        'template_v6dmh79',
        reForm.current,
        'OI4WB0O45duC5cQgv'
      )
      .then(
        (result) => {
          alert('Message successfully sent!')
          window.location.reload(false)
          console.log(result.text)
        },
        (error) => {
          alert('Failed to send the message, please try again')
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact</h1>
          <p>
            If you want to talk to me, don't hesitate to call me or send me a
            message.
          </p>
        </div>
        <div className="btn-contact">
          <Link to="tel:+84828983419">
            <button>
              <FontAwesomeIcon icon={faPhone} />
              +84828983419
            </button>
          </Link>
          <Link to="mailto:huynhvande2k2@gmail.com">
            <button>
              <FontAwesomeIcon icon={faEnvelope} /> huynhvande2k2@gmail.com
            </button>
          </Link>
        </div>
        <div className="contact-form">
          <form ref={reForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" placeholder="Email" name="email" required />
              </li>
              <li className="half">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Leave your message"
                  name="message"
                  required
                ></textarea>
              </li>

              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
