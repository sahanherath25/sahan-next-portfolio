"use client"
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiStyledcomponents, SiTailwindcss, SiGit } from "react-icons/si";

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  overflow: hidden;
`;

/* Floating Background Orbs (Same as Footer Style) */
const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.25;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
  }
`;

const Orb1 = styled(Orb)`
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ff6b6b, #ffa726);
  top: 10%;
  left: 10%;
`;

const Orb2 = styled(Orb)`
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #4ecdc4, #556cd6);
  bottom: 10%;
  right: 10%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: auto;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 2rem 1rem;
  backdrop-filter: blur(12px);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const techStack = [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "React", icon: <SiReact color="#61dafb" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#3c873a" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
    { name: "Styled Components", icon: <SiStyledcomponents color="#f472b6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
    { name: "Git", icon: <SiGit color="#f14e32" /> },
];

export default function TechStackSection() {
    return (
        <Section>
            {/* Background Orbs */}
            <Orb1 />
            <Orb2 />

            <Title>My Tech Stack</Title>

            <Grid>
                {techStack.map((item, i) => (
                    <Card
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        {item.icon}
                        <h3 style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                            {item.name}
                        </h3>
                    </Card>
                ))}
            </Grid>
        </Section>
    );
}
