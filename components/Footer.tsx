"use client";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/nency-parmar",
    },
    {
        name: "LinkedIn",
        href: "YOUR_LINKEDIN_URL",
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer-section">

            {/* Background glow */}
            <div className="footer-glow" />

            <div className="footer-container">

                {/* =================================================
            TOP CTA
        ================================================= */}

                <div className="footer-cta">

                    <div className="footer-cta-content">

                        <span className="footer-eyebrow">
                            HAVE AN OPPORTUNITY?
                        </span>

                        <h2>
                            Let's build something{" "}
                            <span className="gradient-text">
                                meaningful.
                            </span>
                        </h2>

                    </div>

                    <a
                        href="mailto:nencyy0808@gmail.com"
                        className="footer-cta-button"
                    >
                        <span>
                            Get in touch
                        </span>

                        <span>
                            ↗
                        </span>
                    </a>

                </div>

                {/* =================================================
            MAIN FOOTER
        ================================================= */}

                <div className="footer-main">

                    {/* Brand */}

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                        >
                            NENCY
                            <span>.</span>
                        </a>

                        <p>
                            Full Stack Developer building modern,
                            scalable and user-focused applications.
                        </p>

                        <div className="footer-availability">

                            <span className="footer-status-dot" />

                            <span>
                                Open to opportunities
                            </span>

                        </div>

                    </div>

                    {/* Navigation */}

                    <div className="footer-column">

                        <span className="footer-column-title">
                            NAVIGATION
                        </span>

                        <div className="footer-links">

                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                >
                                    {link.name}
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* Social */}

                    <div className="footer-column">

                        <span className="footer-column-title">
                            CONNECT
                        </span>

                        <div className="footer-links">

                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.name}
                                    <span>↗</span>
                                </a>
                            ))}

                            <a href="mailto:nencyy0808@gmail.com">
                                Email
                                <span>↗</span>
                            </a>

                        </div>

                    </div>

                    {/* Back to top */}

                    <div className="footer-top-wrapper">

                        <button
                            onClick={scrollToTop}
                            className="footer-top-button"
                            aria-label="Back to top"
                        >
                            <span>
                                ↑
                            </span>
                        </button>

                        <span>
                            BACK TO TOP
                        </span>

                    </div>

                </div>

                {/* =================================================
            BOTTOM
        ================================================= */}

                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} Nency Parmar
                    </span>

                    <span className="footer-bottom-line" />

                    <span>
                        Designed & Built with Next.js
                    </span>

                    <span className="footer-code">
                        {"</>"}
                    </span>

                </div>

            </div>
        </footer>
    );
}