import {motion} from "framer-motion";

const ProjectTabs = ({ categories, active, onChange }) => {
    return (
        <div className="w-full overflow-x-auto">
            <nav className="flex gap-4 items-center whitespace-nowrap py-2 px-1">
                {categories.map((c) => {
                    const isActive = c === active;
                    return (
                        <button
                            key={c}
                            onClick={() => onChange(c)}
                            className={`relative px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'text-white scale-105' : 'text-gray-300 hover:text-white'}`}
                        >
                            {c}
                            {isActive && (
                                <motion.span
                                    layoutId="tab-underline"
                                    className="absolute left-1 right-1 bottom-[-6px] h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                    style={{ height: 4 }}
                                />
                            )}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default ProjectTabs