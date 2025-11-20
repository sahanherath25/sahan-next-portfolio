'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roadmaps = {
    JavaScript: ['React', 'Next.js', 'React Native', 'Express', 'MongoDB'],
    OS: ['Ubuntu', 'Ubuntu Server', 'Kali Linux',"Windows","Windows Server"],
    Cybersecurity: [
        'Information Security',
        'Network Security',
        'Web Security',
        'Data Security',
    ],
};

const roadmapColors = {
    JavaScript: 'bg-purple-600',
    OS: 'bg-indigo-600',
    Cybersecurity: 'bg-green-600',
};

const Roadmap = () => {
    const [activeMap, setActiveMap] = useState(null);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 bg-zinc-900 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Passionate About Full-Stack Development , Cyber Security and Cloud Technologies
            </h2>

            {/* Top-level categories */}
            <div className="flex gap-6 mb-12">
                {Object.keys(roadmaps).map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveMap(category)}
                        className={`px-6 py-3 rounded-xl font-semibold ${roadmapColors[category]} hover:brightness-125 transition-all`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Skills for active roadmap */}
            <AnimatePresence mode="wait">
                {activeMap && (
                    <motion.div
                        key={activeMap}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
                    >
                        {roadmaps[activeMap].map((skill, idx) => (
                            <motion.div
                                key={skill}
                                className="p-4 rounded-2xl border border-zinc-700 bg-white/10 text-center cursor-pointer hover:bg-white/20 transition-all"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}

                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer-style navigation */}
            {activeMap && (
                <div className="mt-12 text-center text-gray-400">
                    Click another category to explore a different roadmap.
                </div>
            )}
        </section>
    );
};

export default Roadmap;
