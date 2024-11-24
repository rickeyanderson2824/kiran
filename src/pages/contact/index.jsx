import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import emailjs from "@emailjs/browser";

const service_id = import.meta.env.REACT_APP_SERVICE_ID;
const template_id = import.meta.env.REACT_APP_TEMPLATE_ID;
const public_key = import.meta.env.REACT_APP_PUBLIC_KEY;
const receiver_name = import.meta.env.REACT_APP_NAME;
const receiver_mail = import.meta.env.REACT_APP_MAIL;
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        service_id,
        template_id,
        {
          from_name: form.name,
          to_name: receiver_name,
          from_email: form.email,
          to_email: receiver_mail,
          message: form.message,
        },
        public_key
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <main>
      <div
        className="relative h-[60vh] md:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
          <Navbar />
          <div className="flex pb-20  items-end justify-center h-full z-30 absolute top-0 left-0 right-0">
            <span className="md:font-semibold text-lg font-normal md:text-4xl text-white animate-slide-fade">
              "Communication is the bridge between confusion{" "}
              <span className="md:font-semibold text-lg font-normal md:text-4xl text-[#FFBA0A] animate-slide-fade">
                &nbsp;and clarity." – Nat Turner
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <div className="contact-container border-2 border-[#FFBA0A] rounded-3xl p-10 shadow-lg bg-gray-500">
          <h3 className="head-text pt-2">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're aiming to craft an impactful film, develop a unique
            narrative, or collaborate on an innovative project, I'm here to help
            transform your ideas into reality.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>
            <button className="field-btn " type="submit">
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
