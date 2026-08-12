const skillGroups = [
    {
        number: "01",
        title: "Frontend",
        description: "Building modern and responsive user interfaces.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Bootstrap",
        ],
    },

    {
        number: "02",
        title: "Backend",
        description: "Developing APIs and server-side applications.",
        skills: [
            "Node.js",
            "Express.js",
            "NestJS",
        ],
    },

    {
        number: "03",
        title: "Programming",
        description: "Strong foundation in programming and problem solving.",
        skills: [
            "Java",
            "Python",
            "C",
        ],
    },

    {
        number: "04",
        title: "Database",
        description: "Working with databases and application data.",
        skills: [
            "MongoDB", "MSSQL", "MySQL"
        ],
    },

    {
        number: "05",
        title: "AI / ML",
        description: "Exploring intelligent systems and machine learning.",
        skills: [
            "Machine Learning", "Deep Learning"
        ],
    },

    {
        number: "06",
        title: "Mobile",
        description: "Building cross-platform mobile applications.",
        skills: [
            "Flutter",
        ],
    },
];

const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Docker",
    "Azure Studio"
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            {/* Background */}
            <div className="skills-glow skills-glow-one" />
            <div className="skills-glow skills-glow-two" />

            <div className="skills-container">

                {/* =================================================
            HEADING
        ================================================= */}

                <div className="skills-heading">

                    <span className="section-eyebrow">
                        02 / SKILLS
                    </span>

                    <h2>
                        Software I use to{" "}
                        <span className="gradient-text">
                            build.
                        </span>
                    </h2>

                    <p className="section-subtitle">
                        A growing toolkit built through projects,
                        experimentation and continuous learning.
                    </p>

                </div>

                {/* =================================================
            SKILL GRID
        ================================================= */}

                <div className="skills-grid">

                    {skillGroups.map((group) => (
                        <div
                            className="skill-card"
                            key={group.title}
                        >

                            {/* Card top */}
                            <div className="skill-card-top">

                                <span className="skill-number">
                                    {group.number}
                                </span>

                                <span className="skill-arrow">
                                    ↗
                                </span>

                            </div>

                            {/* Icon */}
                            <div className="skill-icon">
                                &lt;/&gt;
                            </div>

                            {/* Content */}
                            <h3>
                                {group.title}
                            </h3>

                            <p>
                                {group.description}
                            </p>

                            {/* Skills */}
                            <div className="skill-tags">

                                {group.skills.map((skill) => (
                                    <span
                                        className="skill-tag"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

                {/* =================================================
            TOOLS
        ================================================= */}

                <div className="tools-card">

                    <div className="tools-heading">

                        <span className="tools-icon">
                            ⚡
                        </span>

                        <div>
                            <span className="tools-label">
                                DEVELOPMENT TOOLS
                            </span>

                            <h3>
                                My everyday toolkit
                            </h3>
                        </div>

                    </div>

                    <div className="tools-list">

                        {tools.map((tool) => (
                            <div
                                className="tool-item"
                                key={tool}
                            >
                                <span className="tool-dot" />
                                {tool}
                            </div>
                        ))}

                    </div>

                </div>

                {/* =================================================
            LEARNING STRIP
        ================================================= */}

                <div className="learning-strip">

                    <div className="learning-left">

                        <span className="learning-symbol">
                            {"{ }"}
                        </span>

                        <div>

                            <span className="learning-label">
                                CURRENTLY LEARNING
                            </span>

                            <p>
                                Improving my software engineering,
                                backend and problem-solving skills.
                            </p>

                        </div>

                    </div>

                    <span className="learning-status">
                        IN PROGRESS
                    </span>

                </div>

            </div>
        </section>
    );
}