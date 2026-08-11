"use client";

import { useEffect, useState } from "react";

const roles = [
    "Full Stack Developer",
    "Java Developer",
    "AI/ML Developer",
    "Flutter Developer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const typingSpeed = isDeleting ? 45 : 85;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));

                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1400);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="hero">
            {/* Background */}
            <div className="hero-background">
                <div className="hero-glow hero-glow-one" />
                <div className="hero-glow hero-glow-two" />

                <div className="hero-grid" />

                <div className="hero-orb orb-one" />
                <div className="hero-orb orb-two" />
            </div>

            <div className="hero-container">
                {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

                <div className="hero-content">
                    {/* Availability Badge */}
                    <div className="availability-badge">
                        <span className="availability-dot" />
                        <span>Open to Software Opportunities</span>
                    </div>

                    {/* Small intro */}
                    <p className="hero-intro">
                        <span className="intro-line" />
                        HELLO, I'M
                    </p>

                    {/* Main Heading */}
                    <h1 className="hero-title">
                        Nency
                        <br />
                        <span className="hero-title-gradient">Parmar.</span>
                    </h1>

                    {/* Typing Role */}
                    <div className="hero-role">
                        <span className="role-symbol">&lt;</span>

                        <span className="typing-role">{displayText}</span>

                        <span className="typing-cursor">|</span>

                        <span className="role-symbol">/&gt;</span>
                    </div>

                    {/* Description */}
                    <p className="hero-description">
                        I build modern, scalable and user-focused web applications
                        with clean interfaces, robust backend systems and thoughtful
                        user experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-actions">
                        <a href="#projects" className="hero-primary-button">
                            <span>View My Work</span>

                            <span className="button-arrow">↗</span>
                        </a>

                        <a
                            href="/resume/FullStackDeveloper.pdf"
                            className="hero-secondary-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="download-icon">↓</span>
                            <span>Download Resume</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="hero-social-area">
                        <span className="social-label">FIND ME ON</span>

                        <div className="hero-socials">
                            <a
                                href="https://github.com/nency-parmar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social"
                                aria-label="GitHub"
                            >
                                GH
                            </a>

                            <a
                                href="https://linkedin.com/in/nency16/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social"
                                aria-label="LinkedIn"
                            >
                                in
                            </a>

                            <a
                                href="https://leetcode.com/u/Nency_parmar-0707"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social"
                                aria-label="LeetCode"
                            >
                                LC
                            </a>
                        </div>
                    </div>
                </div>

                {/* =====================================================
            RIGHT CODE VISUAL
        ===================================================== */}

                <div className="hero-visual">
                    {/* Purple glow behind card */}
                    <div className="code-glow" />

                    {/* Floating decorative rings */}
                    <div className="visual-ring visual-ring-one" />
                    <div className="visual-ring visual-ring-two" />

                    {/* Code Editor */}
                    <div className="code-card">
                        {/* Window Header */}
                        <div className="code-card-header">
                            <div className="window-dots">
                                <span className="window-dot dot-red" />
                                <span className="window-dot dot-yellow" />
                                <span className="window-dot dot-green" />
                            </div>

                            <span className="code-file">
                                nency.tsx
                            </span>

                            <span className="code-status">
                                ●
                            </span>
                        </div>

                        {/* Code */}
                        <div className="code-body">
                            <div className="code-line">
                                <span className="line-number">01</span>
                                <span>
                                    <span className="code-purple">const</span>{" "}
                                    <span className="code-white">developer</span>{" "}
                                    <span className="code-purple">=</span>{" "}
                                    <span className="code-orange">{"{"}</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">02</span>
                                <span className="code-indent">
                                    <span className="code-blue">name</span>
                                    <span className="code-white">:</span>{" "}
                                    <span className="code-green">
                                        "Nency Parmar"
                                    </span>
                                    <span className="code-white">,</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">03</span>
                                <span className="code-indent">
                                    <span className="code-blue">role</span>
                                    <span className="code-white">:</span>{" "}
                                    <span className="code-green">
                                        "Full Stack Developer"
                                    </span>
                                    <span className="code-white">,</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">04</span>
                                <span className="code-indent">
                                    <span className="code-blue">stack</span>
                                    <span className="code-white">:</span>{" "}
                                    <span className="code-orange">{"["}</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">05</span>
                                <span className="code-indent-double">
                                    <span className="code-green">"React"</span>
                                    <span className="code-white">,</span>{" "}
                                    <span className="code-green">"Next.js"</span>
                                    <span className="code-white">,</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">06</span>
                                <span className="code-indent-double">
                                    <span className="code-green">"Node.js"</span>
                                    <span className="code-white">,</span>{" "}
                                    <span className="code-green">"MongoDB"</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">07</span>
                                <span className="code-indent">
                                    <span className="code-orange">{"],"}</span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">08</span>
                                <span className="code-indent">
                                    <span className="code-blue">passion</span>
                                    <span className="code-white">:</span>{" "}
                                    <span className="code-green">
                                        "Building"
                                    </span>
                                </span>
                            </div>

                            <div className="code-line">
                                <span className="line-number">09</span>
                                <span>
                                    <span className="code-orange">{"}"}</span>
                                </span>
                            </div>

                            <div className="code-line code-empty">
                                <span className="line-number">10</span>
                                <span />
                            </div>

                            <div className="code-line">
                                <span className="line-number">11</span>
                                <span>
                                    <span className="code-purple">export default</span>{" "}
                                    <span className="code-blue">developer</span>
                                    <span className="code-white">;</span>
                                </span>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="code-card-footer">
                            <span>
                                <span className="footer-dot" />
                                Available for work
                            </span>

                            <span>UTF-8</span>
                        </div>
                    </div>

                    {/* Floating Tech Tags */}
                    <div className="floating-tech tech-react">
                        React
                    </div>

                    <div className="floating-tech tech-node">
                        Node.js
                    </div>

                    <div className="floating-tech tech-next">
                        Next.js
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a href="#about" className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>

                <span className="scroll-line">
                    <span />
                </span>
            </a>
        </section>
    );
}