const education = [
    {
        period: "2023 — 2027",
        degree: "B.Tech — Computer Science & Engineering",
        institute: "Darshan University",
        status: "Currently in 7th Semester",
        description:
            "Pursuing Computer Science & Engineering with a focus on software development, programming, web technologies and emerging technologies.",
        current: true,
    },

    {
        period: "2021 — 2023",
        degree: "Higher Secondary Education — Science",
        institute: "Sardar Vallabhbhai Patel Science School",
        status: "Gujarat Board",
        description:
            "Completed higher secondary education with a science background.",
        current: false,
    },

    {
        period: "2020 — 2021",
        degree: "Secondary School Certificate",
        institute: "Gujarat Board",
        status: "SSC",
        description:
            "Completed secondary education with a strong foundation in mathematics and science.",
        current: false,
    },
];

export default function Education() {
    return (
        <section id="education" className="education-section">

            {/* Background glow */}
            <div className="education-glow education-glow-one" />
            <div className="education-glow education-glow-two" />

            <div className="education-container">

                {/* =================================================
            HEADING
        ================================================= */}

                <div className="education-heading">

                    <span className="section-eyebrow">
                        03 / EDUCATION
                    </span>

                    <h2>
                        Learning that{" "}
                        <span className="gradient-text">
                            shaped me.
                        </span>
                    </h2>

                    <p className="section-subtitle">
                        My academic journey and the foundation
                        behind my technical skills.
                    </p>

                </div>

                {/* =================================================
            TIMELINE
        ================================================= */}

                <div className="education-timeline">

                    {education.map((item, index) => (
                        <div
                            className={`education-item ${item.current
                                    ? "education-current"
                                    : ""
                                }`}
                            key={item.degree}
                        >

                            {/* Timeline */}
                            <div className="timeline">

                                <div className="timeline-dot">
                                    {item.current && (
                                        <span className="timeline-dot-inner" />
                                    )}
                                </div>

                                {index !== education.length - 1 && (
                                    <div className="timeline-line" />
                                )}

                            </div>

                            {/* Card */}
                            <div className="education-card">

                                <div className="education-card-top">

                                    <span className="education-period">
                                        {item.period}
                                    </span>

                                    {item.current && (
                                        <span className="education-status">
                                            CURRENT
                                        </span>
                                    )}

                                </div>

                                <h3>
                                    {item.degree}
                                </h3>

                                <h4>
                                    {item.institute}
                                </h4>

                                <span className="education-board">
                                    {item.status}
                                </span>

                                <p>
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

                {/* =================================================
            CURRENT JOURNEY
        ================================================= */}

                <div className="education-footer">

                    <div className="education-footer-icon">
                        {"</>"}
                    </div>

                    <div>
                        <span>
                            CURRENT JOURNEY
                        </span>

                        <p>
                            Preparing for the transition from
                            university to professional software development.
                        </p>
                    </div>

                    <div className="education-footer-arrow">
                        ↗
                    </div>

                </div>

            </div>
        </section>
    );
}