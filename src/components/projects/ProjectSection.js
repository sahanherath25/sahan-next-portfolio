import {AnimatePresence,motion} from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";


const THEME = {
    bg: 'bg-zinc-900',
    card: 'bg-white/5',
    accent: 'from-purple-500 to-pink-500',
    neon: 'shadow-[0_8px_30px_rgba(168,85,247,0.18)]',
};

const ProjectSection = ({ title, projects }) => {
    return (
        <section className="w-full ">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-10 rounded-sm bg-gradient-to-b from-purple-400 to-pink-500" />
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>


            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {projects.map((p) => (
                        <ProjectCard project={p} key={p.id} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default ProjectSection