import Image from "next/image";

/**
 * ExperienceItem component
 * Displays a single work experience block with image, title, description and technologies
 */
export default function ExperienceItem({ experience }) {
    const {
        title,
        company,
        period,
        description,
        projects,
        technologies,
        image,
    } = experience;

    return (
        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
            {/* Company/Job image */}
            <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-cyan-500/30 mr-4">
                    <Image
                        src={image}
                        alt={`${company} logo`}
                        fill
                        className="object-contain p-2"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-lg text-gray-300">{company}</p>
                    <p className="text-sm text-cyan-400 font-semibold">
                        {period}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="mb-6 text-base text-gray-300 leading-relaxed">
                {description}
            </p>

            {/* Projects list */}
            {projects && projects.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-white">
                        Experiencias aprendidas:
                    </h4>
                    <ul className="space-y-2">
                        {projects.map((project, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-cyan-400 mr-2 mt-1">•</span>
                                <span className="text-base text-gray-300">{project}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technologies list */}
            <div>
                <h4 className="text-sm font-semibold mb-3 text-white">
                    Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white px-3 py-1 rounded-full border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
