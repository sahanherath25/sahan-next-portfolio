// components/ContactFormClient.jsx
"use client";



import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import "../styles/components/Contact.css"

const ContactSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactFormClient() {

    const [status, setStatus] = useState({ type: "", message: "" });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(ContactSchema),
        mode: "onTouched",
    });

    async function onSubmit(data) {
        setStatus({ type: "loading", message: "Sending..." });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                throw new Error(json.error || "Server error");
            }

            setStatus({ type: "success", message: "Message sent — thank you!" });
            reset();
        } catch (err) {
            setStatus({ type: "error", message: err.message || "Failed to send message" });
        } finally {
            // hide loading after a moment
            setTimeout(() => {
                if (status.type === "loading") setStatus({ type: "", message: "" });
            }, 1000);
        }
    }

    return (
        <section className="contact-grid">
            <motion.form
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                noValidate
            >
                <div className="form-row">
                    <label className="label">
                        Your name
                        <input className={`input ${errors.name ? "invalid" : ""}`} placeholder="Jane Doe" {...register("name")} />
                        {errors.name && <p className="field-error">{errors.name.message}</p>}
                    </label>

                    <label className="label">
                        Email
                        <input className={`input ${errors.email ? "invalid" : ""}`} placeholder="you@company.com" {...register("email")} />
                        {errors.email && <p className="field-error">{errors.email.message}</p>}
                    </label>
                </div>

                <label className="label">
                    Subject
                    <input className={`input ${errors.subject ? "invalid" : ""}`} placeholder="Project / Question" {...register("subject")} />
                    {errors.subject && <p className="field-error">{errors.subject.message}</p>}
                </label>

                <label className="label">
                    Message
                    <textarea className={`input textarea ${errors.message ? "invalid" : ""}`} rows="6" placeholder="Tell me about your project..." {...register("message")} />
                    {errors.message && <p className="field-error">{errors.message.message || errors.message}</p>}
                </label>

                <div className="form-actions">
                    <motion.button
                        type="submit"
                        className="btn-primary"
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>

                    <div className="status-area" aria-live="polite">
                        {status.type === "success" && <p className="status success">{status.message}</p>}
                        {status.type === "error" && <p className="status error">{status.message}</p>}
                        {status.type === "loading" && <p className="status loading">{status.message}</p>}
                    </div>
                </div>
            </motion.form>

            {/* Decorative / info card */}
            <motion.aside
                className="contact-card"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="card-hero">
                    {/* using uploaded image as decorative asset (replace or remove if you prefer) */}
                    {/*<img src="/mnt/data/f6eaf7da-ab4a-4bb7-a536-21b0ac855c0a.png" alt="decorative" className="card-visual" />*/}
                </div>
                <div className="card-body">
                    <h3>Prefer a call?</h3>
                    <p>Book a 15-minute chat or share project details here — I’ll reply quickly with next steps.</p>
                    <a className="card-link" href="mailto:hello@example.com">hello@example.com</a>
                </div>
            </motion.aside>
        </section>
    );
}
