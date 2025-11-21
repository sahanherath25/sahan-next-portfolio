"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
    {
        id: 1,
        question: "How do I get started with your services?",
        answer: "Getting started is simple! Sign up for an account, complete your profile, and you'll have access to all our features within minutes. Our onboarding process guides you through every step."
    },
    {
        id: 2,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cryptocurrency. All payments are securely processed with encryption."
    },
    {
        id: 3,
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time without any hidden fees. You'll continue to have access until the end of your billing period."
    },
    {
        id: 4,
        question: "Do you offer custom solutions for enterprises?",
        answer: "Absolutely! We provide tailored enterprise solutions with dedicated support, custom integrations, and advanced features. Contact our sales team for a personalized demo."
    },
    {
        id: 5,
        question: "How secure is my data with your platform?",
        answer: "We take security seriously. Your data is encrypted end-to-end, stored in SOC 2 compliant data centers, and we regularly undergo third-party security audits."
    }
];

export default function ModernFAQ() {
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (id) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about our platform, features, and services.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                            >
                                <motion.h3
                                    className="text-xl font-semibold text-white pr-4"
                                    layout
                                >
                                    {item.question}
                                </motion.h3>

                                <motion.div
                                    initial={false}
                                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                                >
                                    {openItems.includes(item.id) ? (
                                        <FiMinus className="w-6 h-6 text-white" />
                                    ) : (
                                        <FiPlus className="w-6 h-6 text-white" />
                                    )}
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openItems.includes(item.id) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ y: -10 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-8 pb-6"
                                        >
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Our support team is here to help you get the answers you need.
                        </p>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                            Contact Support
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}