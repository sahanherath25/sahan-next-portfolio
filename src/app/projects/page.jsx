"use client"

import {useMemo, useState} from "react";
import ProjectTabs from "@/components/projects/ProjectTabs";
import ProjectSection from "@/components/projects/ProjectSection";
import Link from "next/link";

const THEME = {
    bg: 'bg-zinc-900',
    card: 'bg-white/5',
    accent: 'from-purple-500 to-pink-500',
    neon: 'shadow-[0_8px_30px_rgba(168,85,247,0.18)]',
};

const projectsData = [
    {
        id: 'next-1',
        type: 'Next.js',
        title: 'Insight Blog (Next.js)',
        desc: 'SSR storefront with incremental static regeneration, cart, and Stripe checkout.',
        tech: ['Next.js', 'React', 'Tailwind', 'Stripe', 'Vercel'],
        image: 'https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//next_project_blogpost.png',
        github: '#',
        live: 'https://insight-blog.vercel.app/',
        caseStudy: '#',
    }, {
        id: 'next-2',
        type: 'Next.js',
        title: 'Portfolio — (Next.js)',
        desc: 'SSR storefront with incremental static regeneration, cart, and Stripe checkout.',
        tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
        image: 'https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//next2.jpeg',
        github: '#',
        live: 'https://diana-25-portfolio.netlify.app/',
        caseStudy: '#',
    },
    {
        id: 'next-3',
        type: 'Next.js',
        title: 'Crave Crust (React)',
        desc: 'Responsive single page app showcasing projects .' ,
        tech: ['React', 'Framer Motion', 'Tailwind'],
        image: 'https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects//code-snippet.png',
        github: '#',
        live: 'https://advanced-code-snippet.vercel.app',
        caseStudy: '#',
    },
    {
        id: 'react-1',
        type: 'React',
        title: 'Crave Crust (React)',
        desc: 'Responsive single page app showcasing projects .' ,
        tech: ['React', 'Framer Motion', 'Tailwind'],
        image: 'https://mtuxinxjrxvkdupfsauk.supabase.co/storage/v1/object/public/projects/Project1.jpeg',
        github: '#',
        live: 'https://crave-crust-sahan.netlify.app/',
        caseStudy: '#',
    },
    {
        id: 'api-1',
        type: 'REST APIs',
        title: 'Travel API (Node.js + Express)',
        desc: 'RESTful API with JWT auth, validation and MongoDB persistence.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        image: '/mnt/data/df1aa8f2-a993-4d67-bffe-a792f10889bc.png',
        github: '#',
        live: '#',
        caseStudy: '#',
    },
    {
        id: 'rn-1',
        type: 'React Native',
        title: 'Ecommerce App for Restaurant (React Native)',
        desc: 'A social app for campus communities built with React Native & Firebase.',
        tech: ['React Native', 'Firebase', 'Expo'],
        image: '/mnt/data/df1aa8f2-a993-4d67-bffe-a792f10889bc.png',
        github: '#',
        live: '#',
        caseStudy: '#',
    },
// Add more items as needed
];

const categoriesDefault = ['All', 'Next.js', 'React', 'REST APIs', 'React Native',"Docker","DevOps"];

export default function ProjectsPage() {


    const [activeCategory, setActiveCategory] = useState('All');
    const categories = useMemo(() => categoriesDefault, []);


    const filtered = useMemo(() => {
        if (activeCategory === 'All') return projectsData;
        return projectsData.filter((p) => p.type === activeCategory);
    }, [activeCategory]);


    return (
            <div className={`${THEME.bg} w-full min-h-screen text-white p-8 z-11 relative z-10`}>

                {/* Hero */}
                <header className="max-w-6xl mx-auto mb-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Projects
                    </h1>
                    <p className="mt-3 text-lg text-gray-300 max-w-2xl">
                        A curated selection of projects: Next.js, React, REST APIs, Node.js and React Native.
                        Click any category to filter. Each card includes demo, code and case studies.
                    </p>
                </header>


                {/* Tabs */}
                <div className="max-w-6xl mx-auto mb-8">
                    <ProjectTabs categories={categories} active={activeCategory} onChange={setActiveCategory}/>
                </div>


                {/* Sections */}
                <div className="max-w-6xl mx-auto space-y-10">
                    <ProjectSection title={activeCategory === 'All' ? 'All Projects' : activeCategory + ' Projects'}
                                    projects={filtered}/>
                </div>



            </div>
    );
}