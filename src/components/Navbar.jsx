'use client';

import React, { useState } from "react";
import {Menu, X, Crown, Sparkles, GraduationCap, Code} from "lucide-react";
import Link from "next/link"

import "../styles/components/Navbar.css"

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="navbar">
            {/* Floating Background Orbs */}
            <div className="navbar-bg">
                <div className="nav-orb orb-a"></div>
                <div className="nav-orb orb-b"></div>
            </div>

            <div className="nav-container">
                {/* Logo Section */}
                <div className="nav-logo">
                    <GraduationCap className="logo-icon" color={"#A7E399"} size={22} />

                    <Link href={"/"}><span className="brand-name">DevSahan</span> </Link>
                        <Code className="sparkle-icon" size={18}/>

                </div>

                {/* Desktop Links */}
                <div className="nav-links">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="nav-link"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="mobile-menu">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="mobile-link"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
