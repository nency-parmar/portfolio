export default function About() {
    return (
        <section id="about" className="about-section">
            {/* Background glow */}
            <div className="about-glow about-glow-one" />
            <div className="about-glow about-glow-two" />

            <div className="about-container">
                {/* Section Heading */}
                <div className="about-heading">
                    <span className="section-eyebrow">
                        01 / ABOUT ME
                    </span>

                    <h2>
                        Building with
                        <span className="gradient-text"> purpose.</span>
                    </h2>

                    <p className="section-subtitle">
                        A developer who enjoys turning ideas into real,
                        useful and scalable digital products.
                    </p>
                </div>

                {/* Main About Content */}
                <div className="about-grid">
                    {/* Left — Introduction */}
                    <div className="about-main">
                        <div className="about-card">
                            <div className="about-card-top">
                                <span className="about-card-label">
                                    WHO I AM
                                </span>

                                <span className="about-card-number">
                                    01
                                </span>
                            </div>

                            <h3>
                                Hi, I'm Nency.
                            </h3>

                            <p>
                                I'm a Computer Science & Engineering student
                                and an aspiring Software Developer who loves
                                building applications across different
                                technologies.
                            </p>

                            <p>
                                My interests span across Full Stack
                                Development, Java, Artificial Intelligence
                                & Machine Learning, and Flutter development.
                                I enjoy learning new technologies and turning
                                concepts into working applications.
                            </p>

                            <p>
                                I'm currently looking for opportunities where
                                I can contribute to real-world projects,
                                strengthen my engineering skills and grow as
                                a software developer.
                            </p>

                            <div className="about-highlight">
                                <span className="highlight-icon">✦</span>

                                <span>
                                    Always learning. Always building.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Quick Facts */}
                    <div className="about-side">
                        <div className="about-fact-card">
                            <span className="fact-icon">
                                &lt;/&gt;
                            </span>

                            <div>
                                <span className="fact-label">
                                    CURRENT FOCUS
                                </span>

                                <h4>
                                    Software Development
                                </h4>
                            </div>
                        </div>

                        <div className="about-fact-card">
                            <span className="fact-icon">
                                ⚡
                            </span>

                            <div>
                                <span className="fact-label">
                                    INTERESTED IN
                                </span>

                                <h4>
                                    Web • Java • AI/ML • Mobile
                                </h4>
                            </div>
                        </div>

                        <div className="about-fact-card">
                            <span className="fact-icon">
                                ◉
                            </span>

                            <div>
                                <span className="fact-label">
                                    LOOKING FOR
                                </span>

                                <h4>
                                    Software Developer Opportunities
                                </h4>
                            </div>
                        </div>

                        {/* Mini Code Card */}
                        <div className="about-code-card">
                            <div className="about-code-header">
                                <span className="code-dot" />
                                <span className="code-dot" />
                                <span className="code-dot" />

                                <span className="about-code-file">
                                    about.ts
                                </span>
                            </div>

                            <div className="about-code-content">
                                <p>
                                    <span className="code-purple">
                                        const
                                    </span>{" "}
                                    <span className="code-blue">
                                        mindset
                                    </span>{" "}
                                    =
                                </p>

                                <p className="code-indent">
                                    <span className="code-green">
                                        "Learn → Build → Improve"
                                    </span>
                                </p>

                                <p>
                                    <span className="code-purple">
                                        export default
                                    </span>{" "}
                                    mindset;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="about-stats">
                    <div className="about-stat">
                        <span className="stat-number">04+</span>

                        <span className="stat-text">
                            Development Areas
                        </span>
                    </div>

                    <div className="stat-divider" />

                    <div className="about-stat">
                        <span className="stat-number">10+</span>

                        <span className="stat-text">
                            Technologies
                        </span>
                    </div>

                    <div className="stat-divider" />

                    <div className="about-stat">
                        <span className="stat-number">∞</span>

                        <span className="stat-text">
                            Curiosity to Learn
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}