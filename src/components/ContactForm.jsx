"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import "../styles/components/ContactForm.css";
import {FaArrowRight} from "react-icons/fa";

// 💜 ZOD VALIDATION SCHEMA
const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email format").min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
});

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema), // <-- ZOD connected!
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    return (
        <section className="contact-section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="contact-title"
            >
                Get in Touch 💬
            </motion.h2>

            <div className="contact-container">
                {/* LEFT SIDE: FORM */}
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="contact-form"
                >
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register("firstName")}
                            className={errors.firstName ? "input error" : "input"}
                        />
                        {errors.firstName && (
                            <p className="error-text">{errors.firstName.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("lastName")}
                            className={errors.lastName ? "input error" : "input"}
                        />
                        {errors.lastName && (
                            <p className="error-text">{errors.lastName.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className={errors.email ? "input error" : "input"}
                        />
                        {errors.email && (
                            <p className="error-text">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            {...register("message")}
                            className={errors.message ? "input error" : "input"}
                        ></textarea>
                        {errors.message && (
                            <p className="error-text">{errors.message.message}</p>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="submit-btn"
                    >

                        <div className={"flex items-center justify-center "}>
                            <span className={"mr-5"}> Send Message </span>
                            <FaArrowRight color={"#ae4949"}/>
                        </div>

                    </motion.button>
                </motion.form>

                {/* RIGHT SIDE: ANIMATED BLOB */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="blob-container"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="blob"
                    >
                        <h3>
                            Contact
                            <br />
                            Me
                        </h3>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
