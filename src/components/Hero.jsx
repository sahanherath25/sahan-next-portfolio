"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../styles/components/Hero.css";

// use your uploaded image (local path)
const AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgX9CNFLSCR9km6ucO48FuXob1wOCSkVhcPnN2661YKYRVQmUKElQsTZiVk35KZzBOi2c&usqp=CAU";

export default function Hero() {
    const containerRef = useRef(null);

    // parallax reactive values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [ -200, 200 ], [ 10, -10 ]);
    const rotateY = useTransform(mouseX, [ -200, 200 ], [ -10, 10 ]);
    const blobX = useTransform(mouseX, (v) => `${v / 12}px`);
    const blobY = useTransform(mouseY, (v) => `${v / 10}px`);

    function handleMove(e) {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        mouseX.set(x);
        mouseY.set(y);
    }

    // Title letters for staggered animation
    const title = "Hi, I'm Sahan";
    const titleWords = title.split(" ");

    const titleVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.6, ease: [0.2,0.9,0.3,1] },
        }),
    };

    return (
        <section
            className="hero-dark"
            ref={containerRef}
            onMouseMove={handleMove}
            onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
            }}
        >
            {/* subtle noise + vignette overlay */}
            <div className="hero-overlay" />

            {/* animated floating gradient blob (parallax) */}
            <motion.div
                className="hero-blob"
                style={{ x: blobX, y: blobY, rotateX, rotateY }}
                animate={{ scale: [1, 1.03, 1], rotate: [0, 6, -4, 0] }}
                transition={{ duration: 9, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />

            <div className="hero-inner">
                <div className="hero-left">
                    <div className="intro-meta">
                        <span className="meta-pill">System Administration and IT Support </span>
                        <span className="meta-pill alt">Linux Windows Networking</span>
                    </div>

                    <motion.h1
                        className="hero-title"
                        initial="hidden"
                        animate="visible"
                        aria-label={title}
                    >
                        {/* split into spans for stagger + hover inner brightness effect */}
                        {titleWords.map((w, idx) => (
                            <motion.span
                                className={`title-word ${idx === titleWords.length - 1 ? "accent-word" : ""}`}
                                key={w + idx}
                                custom={idx}
                                variants={titleVariants}
                            >
                                {w}
                                {idx < titleWords.length - 1 ? "\u00A0" : ""}
                            </motion.span>
                        ))}

                        {/* decorative shimmer layer (absolutely positioned in CSS) */}
                        <span className="title-shimmer" aria-hidden />
                    </motion.h1>

                    <motion.p
                        className="hero-lead"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Focused on IT support and system administration with hands-on experience in Linux and Windows environments.
                        Skilled in troubleshooting hardware, software, and network issues while ensuring system reliability and user support.

                    </motion.p>

                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        <a className="cta-primary" href="#projects">
                            See Projects
                            <span className="cta-glow" />
                        </a>

                        <a className="cta-ghost" href="#contact">
                            Let's Talk
                        </a>
                    </motion.div>
                </div>

                <div className="hero-right" aria-hidden>
                    {/* avatar inside morphing blob */}
                    <motion.div
                        className="avatar-wrap"
                        style={{ rotateX, rotateY }}
                        animate={{ scale: [0.98, 1.02, 1], rotate: [0, 5, -3, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="avatar-blob">
                            <img src={`${AVATAR}`}
                                 alt="Sahan avatar" className="avatar-img" />
                        </div>

                        {/* micro-info card */}
                        <motion.div
                            className="mini-card"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="card-title">Cyber security enthusiast</div>
                            <div className="card-meta">Open to: Part time · Freelance</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
