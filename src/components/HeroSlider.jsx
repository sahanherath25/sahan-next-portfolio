"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomButton from "@/components/CustomButton";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        title: "AI Image Generator",
        description: "An AI-powered tool to generate images using the latest ML models with real-time processing and advanced customization features.",
        link: "https://github.com/sahan/ai-image-generator",
        image: "https://images.unsplash.com/photo-1763393434899-bd2837aab221?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tech: ["React", "TensorFlow", "Node.js", "Python"],
        gradient: "from-purple-600/20 to-blue-600/20",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "My personal portfolio built using React + Supabase with seamless animations and optimized performance.",
        link: "https://sahan-portfolio-vite.netlify.app/",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
        tech: ["Next.js", "Tailwind", "Supabase", "Framer Motion"],
        gradient: "from-emerald-600/20 to-cyan-600/20",
    },
    {
        id: 3,
        title: "Chat Application",
        description: "A realtime chat application using Firebase with voice messages and file sharing capabilities.",
        link: "",
        image: "https://www.verdict.co.uk/wp-content/uploads/2018/09/shutterstock_552746107.jpg",
        tech: ["React", "Firebase", "WebRTC", "Material-UI"],
        gradient: "from-orange-600/20 to-red-600/20",
    },
];

const SlideContent = ({ project, isActive }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <div className="relative h-[600px] rounded-2xl overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Content Container */}
            <div ref={ref} className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="border sm:mt-2   lg:ml-9  "
                        >
                            <motion.h2
                                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {project.title}
                            </motion.h2>

                            <motion.p
                                className="text-xl text-gray-200 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {project.description}
                            </motion.p>

                            {/* Tech Stack */}
                            <motion.div
                                className="flex flex-wrap gap-3 mt-2"
                                initial={{ opacity: 0 }}
                                animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                                    >
                    {tech}
                  </span>
                                ))}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0 }}
                            >

                                <CustomButton>
                                    View Project
                                </CustomButton>


                            </motion.div>
                        </motion.div>

                        {/* Image Container */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50, rotateY: 15 }}
                            animate={isActive ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 15 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full max-w-2xl rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-xl backdrop-blur-sm border border-blue-400/30"
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.2
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-1/4 -left-20 w-40 h-40 bg-white/5 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-20 w-60 h-60 bg-white/5 rounded-full blur-xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    );
};

export default function HeroSlider() {
    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-4 relative z-50">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1",
                    bulletActiveClass: "swiper-pagination-bullet-active !bg-white !w-8 !rounded-full",
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                className="rounded-2xl shadow-2xl"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={project.id}>
                        {({ isActive }) => (
                            <SlideContent project={project} isActive={isActive} />
                        )}
                    </SwiperSlide>
                ))}

                {/* Custom Navigation */}
                {/*<div className="custom-next !text-white !right-8 after:!text-2xl after:!font-bold after:!content-['→'] after:!bg-white/20 after:!backdrop-blur-sm after:!rounded-full after:!w-14 after:!h-14 after:!flex after:!items-center after:!justify-center hover:after:!bg-white/30 transition-all duration-300" />*/}
                {/*<div className="custom-prev !text-white !left-8 after:!text-2xl after:!font-bold after:!content-['←'] after:!bg-white/20 after:!backdrop-blur-sm after:!rounded-full after:!w-14 after:!h-14 after:!flex after:!items-center after:!justify-center hover:after:!bg-white/30 transition-all duration-300" />*/}

                {/* Custom Navigation Only */}
                <div className="custom-next absolute top-1/2 right-4 z-50 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                    →
                </div>
                <div className="custom-prev absolute top-1/2 left-4 z-50 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                    ←
                </div>

            </Swiper>
        </div>
    );
}