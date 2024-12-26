import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/xnnnjbwo", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            setPopupMessage("Message sent successfully!");
            setShowPopup(true); // Show the popup
            form.reset(); // Clear the form fields
        } else {
            setPopupMessage("Oops! Something went wrong.");
            setShowPopup(true); // Show the popup
        }
    };

    const closePopup = () => {
        setShowPopup(false); // Close the popup
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
                Feel free to reach out to me using the form below.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>

            {/* Popup Notification */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>{popupMessage}</p>
                        <button onClick={closePopup} className="close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
