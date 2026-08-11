const contactInfo = [
    {
        label: "EMAIL",
        value: "nencyy0808@gmail.com",
        href: "mailto:nencyy0808@gmail.com",
    },
    {
        label: "PHONE",
        value: "+91 9033190716",
        href: "tel:+919033190716",
    },
    {
        label: "LOCATION",
        value: "Gujarat, India",
        href: "#",
    },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/nency-parmar",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/nency16",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="contact-section">

            {/* Background glow */}
            <div className="contact-glow contact-glow-one" />
            <div className="contact-glow contact-glow-two" />

            <div className="contact-container">

                {/* =================================================
            HEADING
        ================================================= */}

                <div className="contact-heading">

                    <span className="section-eyebrow">
                        08 / GET IN TOUCH
                    </span>

                    <h2>
                        Let's build something{" "}
                        <span className="gradient-text">
                            great.
                        </span>
                    </h2>

                    <p>
                        I'm open to software development opportunities,
                        internships and projects where I can learn,
                        contribute and create meaningful solutions.
                    </p>

                </div>

                {/* =================================================
            CONTACT CONTENT
        ================================================= */}

                <div className="contact-grid">

                    {/* LEFT */}
                    <div className="contact-left">

                        <div className="contact-message-card">

                            <span className="contact-card-label">
                                HAVE A PROJECT OR OPPORTUNITY?
                            </span>

                            <h3>
                                Let's start a conversation.
                            </h3>

                            <p>
                                Whether you have an opportunity, a project
                                idea or simply want to connect, feel free
                                to reach out.
                            </p>

                            <a
                                href="mailto:nencyy0808@gmail.com"
                                className="contact-primary-button"
                            >
                                <span>
                                    Send me a message
                                </span>

                                <span className="contact-button-arrow">
                                    ↗
                                </span>
                            </a>

                        </div>

                        {/* SOCIALS */}

                        <div className="contact-socials">

                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <span>
                                        {social.name}
                                    </span>

                                    <span>
                                        ↗
                                    </span>
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="contact-details">

                        {contactInfo.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="contact-detail-card"
                            >

                                <div className="contact-detail-icon">
                                    {item.label === "EMAIL" && "@"}
                                    {item.label === "PHONE" && "⌕"}
                                    {item.label === "LOCATION" && "⌖"}
                                </div>

                                <div className="contact-detail-content">

                                    <span>
                                        {item.label}
                                    </span>

                                    <h4>
                                        {item.value}
                                    </h4>

                                </div>

                                <span className="contact-detail-arrow">
                                    ↗
                                </span>

                            </a>
                        ))}

                    </div>

                </div>

                {/* =================================================
            AVAILABILITY
        ================================================= */}

                <div className="contact-availability">

                    <span className="availability-dot" />

                    <span>
                        Open to opportunities
                    </span>

                    <span className="availability-line" />

                    <span className="availability-text">
                        Software Development • Full Stack • Java • AI/ML
                    </span>

                </div>

            </div>
        </section>
    );
}