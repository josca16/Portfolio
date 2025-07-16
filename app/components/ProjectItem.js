"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ProjectItem component
 * Displays a project with image, title, description, and technologies.
 */
export default function ProjectItem({ project }) {
    const { image, domain, title, description, technologies } = project;

    // Extract just the domain name part from the full URL for display
    const displayName = domain.replace(/^https?:\/\//, "").split("/")[0]; // Removes protocol and path

    return (
        <div className="group relative">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                {/* Project Image */}
                <div className="relative mb-6">
                    <Link
                        href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block transition-all duration-300 hover:scale-110"
                    >
                        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg border border-gray-600/30 group-hover:border-cyan-500/30 transition-all duration-300">
                            {/* Background for logo consistency */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
                            
                            {/* Logo container with consistent sizing */}
                            <div className="relative w-full h-full flex items-center justify-center p-4">
                                <Image
                                    src={image}
                                    alt={title || displayName}
                                    width={140}
                                    height={140}
                                    className="object-contain max-w-full max-h-full transition-all duration-300"
                                    style={{
                                        maxWidth: '80%',
                                        maxHeight: '80%'
                                    }}
                                />
                            </div>
                            
                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                <span className="text-white text-sm font-semibold bg-cyan-500/90 px-4 py-2 rounded-full backdrop-blur-sm">
                                    Ver Detalles →
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
                
                {/* Project Content */}
                <div className="space-y-4">
                    {/* Project Title */}
                    {title && (
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {title}
                        </h3>
                    )}
                    
                    {/* Project Description */}
                    {description && (
                        <p className="text-base text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    )}
                    
                    {/* Technologies */}
                    {technologies && technologies.length > 0 && (
                        <div className="space-y-2">
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                Tecnologías utilizadas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white px-3 py-1 rounded-full border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
        </div>
    );
}
