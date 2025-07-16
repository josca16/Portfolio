import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
        {
            title: "Desarrollador en Prácticas",
            company: "CodeArts Solutions",
            period: "2024 - 2025",
            description: "Prácticas profesionales en desarrollo web con Drupal y PHP, participando en proyectos reales para clientes corporativos. Desarrollo de la página oficial de la Confederación Andaluza de Federaciones Deportivas (CAFD) desde cero.",
            projects: [
                "Rediseño completo de la web oficial de CAFD",
                "Desarrollo web con Drupal y PHP",
                "Gestión de bases de datos relacionales",
                "Metodología Scrum en entorno empresarial",
            ],
            technologies: ["Drupal", "PHP", "SQL", "Scrum", "HTML5", "CSS3"],
            image: "/company_logo/codearts.png",
        },
        {
            title: "Estudiante de Grado Superior",
            company: "Cesur",
            period: "Sep. 2023 - Jun. 2025",
            description: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma con GPA de 8.2/10. Formación integral en desarrollo web, móvil, bases de datos y herramientas modernas de desarrollo.",
            projects: [
                "Programación orientada a objetos con Java y C#",
                "Desarrollo web con HTML5, CSS3, JavaScript y PHP",
                "Desarrollo móvil con React Native y aplicaciones nativas",
                "Bases de datos relacionales y NoSQL (SQL, MariaDB, MongoDB)",
                "Desarrollo de videojuegos con Unity y C#",
                "Administración de sistemas Windows y Linux",
                "Metodologías ágiles y control de versiones con Git",
                "Despliegue y contenedores con Docker y Azure"
            ],
            technologies: [
                "Java", 
                "JavaScript", 
                "C#", 
                "Unity", 
                ".NET", 
                "React Native",
                "Docker",
                "Azure",
                "HTML5",
                "CSS3",
                "PHP",
                "SQL",
                "MariaDB",
                "MongoDB",
                "Git"
            ],
            image: "/company_logo/cesur.png",
        },
    ];

    // Sample project data
    const projects = [
        {
            title: "TaxiDay",
            description: "Plataforma de gestión de taxis con React Native + Spring Boot",
            image: "/projects_logo/LOGOtaxiday.png",
            domain: "/projects/taxiday",
            technologies: ["React Native", "Spring Boot", "Java", "MariaDB"],
        },
        {
            title: "TaxiDay Mobile",
            description: "Aplicación móvil nativa para gestión de servicios de taxi",
            image: "/projects_logo/LOGOtaxiday_mobile.png",
            domain: "/projects/taxiday-mobile",
            technologies: ["React Native", "Mobile Development", "JavaScript", "APIs"],
        },
        {
            title: "CAFD",
            description: "Rediseño completo de la web oficial de la Confederación Andaluza de Federaciones Deportivas",
            image: "/projects_logo/logoCAFD.png",
            domain: "/projects/cafd",
            technologies: ["Drupal", "PHP", "SQL", "HTML5", "CSS3", "Docker"],
        },
        {
            title: "Videojuegos Unity",
            description: "Miniproyectos desarrollados para aprender Unity, C# y mecánicas de videojuegos",
            image: "/projects_logo/unityLogo.png",
            domain: "/projects/videojuegos-unity",
            technologies: ["Unity", "C#", "Game Development", "OOP"],
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <Header />

            {/* About Me Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Sobre mí
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl">💻</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Desarrollador Multiplataforma</h3>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                Programador junior titulado en <strong>Desarrollo de Aplicaciones Multiplataforma</strong>, con experiencia en entorno profesional tras mis prácticas en Codearts.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Enfoque Metódico</h3>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                Me distingo por un enfoque <strong>meticuloso y estructurado</strong>, con especial atención al orden, la lógica y el análisis de cada proceso.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Soluciones Efectivas</h3>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                Busco comprender a fondo las tecnologías con las que trabajo para aportar <strong>soluciones eficaces, estables y con sentido</strong>.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Trabajo Colaborativo</h3>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-300">
                                Disfruto aprendiendo de otros y <strong>sumando claridad en entornos colaborativos</strong>, siempre buscando mejorar y crecer profesionalmente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Habilidades
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Technical Skills */}
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl">⚙️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Habilidades Técnicas</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Java", "Spring Boot", "JavaScript", "React Native", "C#", "SQL", "MariaDB", "Git", "APIs REST", "POO", "Metodología Scrum", "Drupal", "PHP", "Unity", ".NET", "Docker", "Azure", "HTML5", "CSS3", "MongoDB"].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white px-3 py-1 rounded-full border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Personal Skills */}
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Habilidades Personales</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Pensamiento estructurado", "Enfoque en resultados reales", "Aprendizaje profundo", "Autonomía responsable", "Atención al detalle", "Trabajo en equipo", "Comunicación efectiva"].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-white px-3 py-1 rounded-full border border-blue-600/30 hover:border-blue-600/50 transition-all duration-300 hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Mis Proyectos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>



                    {/* Projects grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null;
                            }
                            return (
                                <div key={index} className="group">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Work Experience Section*/}
            <section id="experience" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Experiencia Laboral
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {experiences.map((experience, index) => (
                            <div key={index} className="group">
                                <ExperienceItem
                                    experience={experience}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Certificaciones y Cursos
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="flex items-start p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <span className="text-cyan-500 text-lg">📜</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Certificados de OpenWebinars</h3>
                                    <p className="text-base text-gray-300">Git | Odoo | Python | PHP</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start p-4 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105">
                                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <span className="text-blue-600 text-lg">🔄</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Curso de metodología Scrum</h3>
                                    <p className="text-base text-gray-300">Impartido en el entorno empresarial de CodeArts Solutions</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <span className="text-cyan-500 text-lg">🌐</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Curso de Drupal</h3>
                                    <p className="text-base text-gray-300">Introducción práctica al desarrollo web con el CMS Drupal, aplicado directamente al proyecto CAFD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center py-8 px-6 border-t border-cyan-500/20">
                <div className="max-w-7xl mx-auto">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Jose Carlos Membrive Martinez. Todos los derechos
                        reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
