"use client";

import { useState } from "react";

type Category =
    | "All"
    | "Full Stack"
    | "Next.js"
    | "JavaScript"
    | "Flutter"
    | "Java"
    | "AI/ML";

type Project = {
    number: string;
    title: string;
    category: Exclude<Category, "All">;
    description: string;
    technologies: string[];
    github: string;
    status?: "Ongoing";
    featured?: boolean;
};

const categories: Category[] = [
    "All",
    "Full Stack",
    "Next.js",
    "JavaScript",
    "Flutter",
    "Java",
    "AI/ML",
];

const projects: Project[] = [
    {
        number: "01",
        title: "Travel Website",
        category: "Full Stack",
        description:
            "A full-stack travel platform built with the MERN stack, combining an interactive frontend with backend services to create a complete web application experience.",
        technologies: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
        ],
        github:
            "https://github.com/nency-parmar/MiniProject_WT.git",
        featured: true,
    },

    {
        number: "02",
        title: "Clinic Queue Management",
        category: "Full Stack",
        description:
            "A practical MERN-based application designed to digitally organize clinic queues and provide a structured approach to managing the patient waiting process.",
        technologies: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
        ],
        github:
            "https://github.com/nency-parmar/clinic-queue-management.git",
        featured: true,
    },

    {
        number: "03",
        title: "Smart MoM System",
        category: "Next.js",
        description:
            "A modern meeting management system focused on organizing meetings, recording important discussions and streamlining Minutes of Meeting management.",
        technologies: [
            "Next.js",
            "React.js",
            "TypeScript",
        ],
        github:
            "https://github.com/nency-parmar/mom-management.git",
        featured: true,
    },

    {
        number: "04",
        title: "Tic Tac Toe",
        category: "JavaScript",
        description:
            "A classic interactive browser game developed with JavaScript to demonstrate DOM manipulation, game logic, user interaction and responsive interface design.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        github:
            "https://github.com/nency-parmar/TicTacToe.git",
    },

    {
        number: "05",
        title: "MatchNest",
        category: "Flutter",
        description:
            "A cross-platform mobile application developed with Flutter, focusing on mobile interface development, application flow and an engaging user experience.",
        technologies: [
            "Flutter",
            "Dart",
        ],
        github:
            "https://github.com/nency-parmar/MatchNest-Application.git",
        featured: true,
    },

    {
        number: "06",
        title: "Chem Earth",
        category: "Flutter",
        description:
            "A Flutter-based mobile application created to explore cross-platform development, mobile UI design and application functionality.",
        technologies: [
            "Flutter",
            "Dart",
        ],
        github:
            "https://github.com/nency-parmar/Chem_Earth.git",
    },

    {
        number: "07",
        title: "Java Quiz",
        category: "Java",
        description:
            "A Java-based quiz application built to practice core programming concepts, conditional logic and interactive question-and-answer functionality.",
        technologies: [
            "Java",
        ],
        github:
            "https://github.com/nency-parmar/java-quiz_mini-project.git",
    },

    {
        number: "08",
        title: "LoanGuard AI",
        category: "AI/ML",
        description:
            "A machine learning project focused on loan risk analysis, exploring how predictive models can support data-driven assessment and decision-making.",
        technologies: [
            "Python",
            "Machine Learning",
        ],
        github:
            "https://github.com/nency-parmar/loanguard-ai.git",
        featured: true,
    },

    {
        number: "09",
        title: "CaptionCraft AI",
        category: "AI/ML",
        description:
            "An ongoing AI project exploring automatic image caption generation through machine learning and deep learning techniques.",
        technologies: [
            "Python",
            "Machine Learning",
            "Deep Learning",
        ],
        github:
            "https://github.com/nency-parmar/CaptionCraft-AI.git",
        status: "Ongoing",
        featured: true,
    },

    {
        number: "10",
        title: "Task - Flow",
        category: "Full Stack",
        description:
            "TaskFlow is a simple and modern Task Management System built using the MERN Stack.",
        technologies: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
        ],
        github:
            "https://github.com/nency-parmar/TaskFlow.git",
        featured: true,
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] =
        useState<Category>("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeCategory
            );

    return (
        <section
            id="projects"
            className="projects-section"
        >
            {/* Background */}
            <div className="projects-glow projects-glow-one" />
            <div className="projects-glow projects-glow-two" />

            <div className="projects-container">

                {/* =================================================
            HEADER
        ================================================= */}

                <div className="projects-heading">

                    <div>
                        <span className="section-eyebrow">
                            05 / PROJECTS
                        </span>

                        <h2>
                            Things I've{" "}
                            <span className="gradient-text">
                                built.
                            </span>
                        </h2>
                    </div>

                    <p>
                        A collection of applications and experiments
                        built across full-stack development, mobile
                        development, Java and AI/ML.
                    </p>

                </div>

                {/* =================================================
            CATEGORY FILTER
        ================================================= */}

                <div className="project-filters">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setActiveCategory(category)
                            }
                            className={`project-filter ${activeCategory === category
                                ? "project-filter-active"
                                : ""
                                }`}
                        >
                            {category}
                        </button>
                    ))}

                </div>

                {/* =================================================
            PROJECT COUNT
        ================================================= */}

                <div className="projects-meta">

                    <span>
                        {String(filteredProjects.length).padStart(
                            2,
                            "0"
                        )}{" "}
                        PROJECTS
                    </span>

                    <span className="projects-meta-line" />

                    <span>
                        {activeCategory === "All"
                            ? "ALL WORK"
                            : activeCategory.toUpperCase()}
                    </span>

                </div>

                {/* =================================================
            PROJECT GRID
        ================================================= */}

                <div className="projects-grid">

                    {filteredProjects.map((project) => (
                        <article
                            key={project.title}
                            className={`project-card ${project.featured
                                ? "project-card-featured"
                                : ""
                                }`}
                        >

                            {/* Top */}
                            <div className="project-card-top">

                                <span className="project-number">
                                    {project.number}
                                </span>

                                <div className="project-badges">

                                    {project.status && (
                                        <span className="project-status">
                                            {project.status}
                                        </span>
                                    )}

                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                </div>

                            </div>

                            {/* Visual */}
                            <div className="project-visual">

                                <div className="project-visual-grid" />

                                <div className="project-visual-content">

                                    <span className="project-code-symbol">
                                        {"< / >"}
                                    </span>

                                    <span className="project-visual-label">
                                        {project.category}
                                    </span>

                                </div>

                                <span className="project-visual-number">
                                    {project.number}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="project-content">

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="project-technologies">

                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="project-tech"
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                                {/* Bottom */}
                                <div className="project-card-footer">

                                    <span className="project-type">
                                        {project.featured
                                            ? "FEATURED PROJECT"
                                            : "PROJECT"}
                                    </span>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-github"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <span>
                                            GitHub
                                        </span>

                                        <span>
                                            ↗
                                        </span>
                                    </a>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

                {/* =================================================
            FOOTER
        ================================================= */}

                <div className="projects-footer">

                    <div>
                        <span className="projects-footer-label">
                            MORE ON GITHUB
                        </span>

                        <p>
                            Explore my repositories, experiments
                            and ongoing work.
                        </p>
                    </div>

                    <a
                        href="https://github.com/nency-parmar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-github-button"
                    >
                        <span>
                            View GitHub
                        </span>

                        <span>
                            ↗
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}