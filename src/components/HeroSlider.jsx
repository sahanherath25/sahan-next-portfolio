"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomButton from "@/components/CustomButton";

const projects = [
    {
        id: 1,
        title: "AI Image Generator",
        description: "An AI-powered tool to generate images using the latest ML models.",
        link: "https://github.com/sahan/ai-image-generator",
        image: "https://images.unsplash.com/photo-1763393434899-bd2837aab221?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "My personal portfolio built using React + Supabase.",
        link: "https://sahan-portfolio-vite.netlify.app/",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 3,
        title: "Chat App",
        description: "A realtime chat application using Firebase.",
        link: "",
        image: "https://images.unsplash.com/photo-1599153066743-08810dc8a419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QVdTfGVufDB8fDB8fHww",
    },
];


export default function HeroSlider() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-20 z-50">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{delay: 3500}}
                pagination={{clickable: true}}
                navigation={true}
                className="rounded-2xl"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div
                            className="relative bg-zinc-400 border border-red-900 text-white p-20 rounded-2xl h-[400px] flex flex-col justify-center">

                            <div className={"p-10"}>
                                <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                                <p className="text-zinc-300 mb-6 max-w-lg">{project.description}</p>


                                <CustomButton>View Project</CustomButton>


                                <div className={"mr-5"}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute right-5 bottom-10 mr-10 w-64 rounded-xl shadow-xl"
                                    />
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
