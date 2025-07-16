import Image from "next/image";
import Link from "next/link";

/**
 * Header component for the portfolio website
 * Displays the developer's name, profile picture, and social media links
 */
export default function Header() {
    // Developer information
    const developerName = "Jose Carlos Membrive Martinez";
    const jobTitle = "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma";

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/social/linkedin.svg",
            url: "https://www.linkedin.com/in/jose-carlos-membrive/",
            alt: "LinkedIn Profile",
        },
        {
            name: "GitHub",
            icon: "/social/github.svg",
            url: "https://github.com/josca16",
            alt: "GitHub Profile",
        },
    ];

    return (
        <header className="relative py-12 px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-cyan-900/30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-20 right-20 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                {/* Left section: Profile picture and name */}
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
                            <Image
                                src="/social/profile.png"
                                alt="Profile picture"
                                width={160}
                                height={200}
                                className="w-auto h-32 md:h-40"
                                priority
                            />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl animate-pulse"></div>
                    </div>
                    
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-5xl font-bold leading-tight text-white mb-2">
                            {developerName}
                        </h1>
                        <p className="text-base md:text-xl text-gray-300 mb-3">
                            {jobTitle}
                        </p>
                        <div className="hidden md:flex flex-col text-sm text-gray-400 space-y-1">
                            <span className="flex items-center">
                                <span className="mr-2">📧</span>
                                josecarlosmartinez98@outlook.com
                            </span>
                            <span className="flex items-center">
                                <span className="mr-2">📱</span>
                                +34 618927313
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right section: Social media links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group transition-all duration-300 hover:scale-110"
                            aria-label={link.alt}
                        >
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:bg-cyan-500/30 transition-all duration-300"></div>
                            
                            {/* Icon container */}
                            <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                                <Image
                                    src={link.icon}
                                    alt={link.alt}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Bottom border with gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </header>
    );
}
