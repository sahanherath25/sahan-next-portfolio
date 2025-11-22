import {motion} from "framer-motion";
import Link from "next/link";

const THEME = {
    bg: 'bg-zinc-900',
    card: 'bg-white/5',
    accent: 'from-purple-500 to-pink-500',
    neon: 'shadow-[0_8px_30px_rgba(168,85,247,0.18)]',
};

const ProjectCard = ({ project }) => {
return (
    <motion.article
        layout
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ translateY: -8 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        className={` z-30 relative  overflow-hidden rounded-2xl border border-white/6 ${THEME.card} p-0 ${THEME.neon}`}
    >
        {/* image */}
        <div className=" z-10 relative h-44 w-full overflow-hidden rounded-t-2xl">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/40" />
        </div>


        {/* content */}
        <div className="p-5 ">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{project.desc}</p>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-white/6 text-gray-200">{project.type}</div>
            </div>


            <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/6">{t}</span>
                ))}
            </div>


            <div className="mt-5 flex gap-3">
                <a target="_blank" href={project.live} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg hover:bg-white/20  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Live Demo
                </a>
                {/*<a aria-disabled={true} target="_blank"  href={project.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm border border-white/8 text-gray-100 hover:bg-white/3 transition">*/}
                {/*    GitHub*/}
                {/*</a>*/}
                {/*<a href={project.caseStudy} className="ml-auto text-sm text-gray-300 hover:underline">Case Study</a>*/}
            </div>
        </div>
    </motion.article>
);
};

export default ProjectCard