import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2mvtxqu",      // ✅ your service ID
        "template_r1sc15d",     // ✅ your template ID
        form.current,           // ✅ form reference
        "l69z1bCcdEsolf_l5"     // ✅ your public key
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in Touch</span>

      <div className="contact_container container grid">
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="contact_inputs">
            {/* ✅ Make sure names match your EmailJS template variables */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};
