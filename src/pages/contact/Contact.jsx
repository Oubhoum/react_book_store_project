import { useState } from "react";
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (name.trim() === "") return toast.error('Name is required');
        if (subject.trim() === "") return toast.error('Subject is required');
        if (email.trim() === "") return toast.error('Email is required');
        if (message.trim() === "") return toast.error('Message is required');
    };
    return (
        <section className="contact">
            <div className="contact-wrapper">
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-house-fill"></i>
                        Address
                    </div>
                    <p className="contact-item-text">Morocco -- Sous Massa</p>
                </div>

                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-telephone-fill"></i>
                        Phone
                    </div>
                    <p className="contact-item-text">00-123-456-789</p>
                </div>

                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-envelope-fill"></i>
                        Email
                    </div>
                    <p className="contact-item-text">info@fake_email.com</p>
                </div>
            </div>

            <form onSubmit={formSubmitHandler} className="contact-form">
                <ToastContainer theme="colored"/>

                <h2 className="contact-form-title">Contact Us Form</h2>
                <div className="contact-input-wrapper">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name *"
                        />
                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        placeholder="Subject *"
                        />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email *"
                        />
                </div>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-textarea"
                    placeholder="Your Message *"
                    rows="5"
                    ></textarea>
                <button className="contact-btn">Send</button>
            </form>
        </section>
    );
}

export default Contact;