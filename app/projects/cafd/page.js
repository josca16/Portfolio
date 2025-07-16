import Image from "next/image";
import Link from "next/link";

export default function CAFDPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <header className="relative py-8 px-6 border-b border-yellow-400/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 text-yellow-300 hover:text-yellow-200 transition-colors">
                        <span className="text-2xl">←</span>
                        <span className="text-lg font-semibold">Volver al Portfolio</span>
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-blue-700 bg-clip-text text-transparent">
                        CAFD
                    </h1>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-12 border border-yellow-400/30 backdrop-blur-sm">
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-blue-700 bg-clip-text text-transparent mb-6">
                            Confederación Andaluza de Federaciones Deportivas
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Rediseño completo de la página web oficial desde cero, desarrollado durante mis prácticas 
                            profesionales en CodeArts Solutions con Drupal y PHP.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full border border-yellow-400/30">
                                Drupal
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full border border-yellow-400/30">
                                PHP
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full border border-yellow-400/30">
                                HTML5
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full border border-yellow-400/30">
                                CSS3
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full border border-yellow-400/30">
                                Docker
                            </span>
                            <span className="bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full border border-yellow-400/30">
                                SQL
                            </span>
                        </div>
                        <div className="flex justify-center gap-4">
                            <a 
                                href="https://cafd.es" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-blue-800 transition-all duration-300 hover:scale-105"
                            >
                                <span>🌐</span>
                                <span>Ver Página Oficial</span>
                            </a>
                            <a 
                                href="https://github.com/josca16/CAFD" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-800 hover:to-yellow-500 transition-all duration-300 hover:scale-105"
                            >
                                <span>📁</span>
                                <span>Ver Código en GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Project Context */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-12 border border-yellow-400/30 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-blue-700 bg-clip-text text-transparent mb-6 text-center">
                            ¿Qué es CAFD?
                        </h3>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                La <strong className="text-yellow-300">Confederación Andaluza de Federaciones Deportivas (CAFD)</strong> es la entidad que agrupa 
                                y coordina todas las federaciones deportivas de Andalucía, promoviendo el deporte y la actividad física en la región.
                            </p>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                Este proyecto consistió en el <strong className="text-yellow-300">rediseño completo desde cero</strong> de su página web oficial, 
                                desarrollado durante mis prácticas profesionales en CodeArts Solutions, aplicando metodologías ágiles y 
                                tecnologías modernas de desarrollo web.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/30">
                                    <h4 className="text-lg font-semibold text-yellow-300 mb-3">🎯 Objetivo del Proyecto</h4>
                                    <p className="text-gray-300">
                                        Crear una web moderna, responsive y funcional que sirva como punto de encuentro 
                                        para todas las federaciones deportivas andaluzas y sus usuarios.
                                    </p>
                                </div>
                                <div className="bg-blue-700/10 rounded-xl p-6 border border-blue-700/30">
                                    <h4 className="text-lg font-semibold text-blue-300 mb-3">💡 Solución Implementada</h4>
                                    <p className="text-gray-300">
                                        Desarrollo completo con Drupal, PHP y tecnologías web modernas, 
                                        desplegado en contenedores Docker para máxima flexibilidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Características Principales
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-400/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Diseño Moderno</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Interfaz completamente rediseñada con los colores corporativos amarillo y azul, 
                                siguiendo las mejores prácticas de UX/UI.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-400/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Responsive Design</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Diseño completamente adaptativo que funciona perfectamente en dispositivos móviles, 
                                tablets y ordenadores.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-400/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">⚙️</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">CMS Drupal</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Sistema de gestión de contenidos robusto que permite a los administradores 
                                gestionar fácilmente el contenido del sitio.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-blue-700/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🔧</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Desarrollo PHP</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Backend desarrollado con PHP, implementando funcionalidades personalizadas 
                                y módulos específicos para las necesidades de CAFD.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-blue-700/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🐳</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Containerización</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Despliegue en contenedores Docker para facilitar el desarrollo, 
                                testing y producción con máxima flexibilidad.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-blue-700/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Gestión de Contenido</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Sistema completo para gestionar noticias, eventos, federaciones 
                                y toda la información relacionada con el deporte andaluz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Captura de Pantalla
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-400/30 backdrop-blur-sm">
                            <h4 className="text-xl font-semibold text-white mb-4 text-center">Página Principal</h4>
                            <div className="relative w-full rounded-xl overflow-hidden border border-yellow-400/30">
                                <Image
                                    src="/projects/cafd/CapturaCAFDinicio.png"
                                    alt="Página principal de CAFD"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-gray-300 mt-4 text-center text-sm">
                                Diseño moderno con los colores corporativos amarillo y azul de CAFD
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Details */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Detalles Técnicos
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-400/30 backdrop-blur-sm">
                            <h4 className="text-2xl font-semibold text-white mb-6">Frontend</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-yellow-300 mr-3">•</span>
                                    <strong>HTML5:</strong> Estructura semántica moderna
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-300 mr-3">•</span>
                                    <strong>CSS3:</strong> Estilos avanzados y responsive
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-300 mr-3">•</span>
                                    <strong>Diseño Responsive:</strong> Adaptable a todos los dispositivos
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-300 mr-3">•</span>
                                    <strong>Colores Corporativos:</strong> Amarillo y azul de CAFD
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-blue-700/30 backdrop-blur-sm">
                            <h4 className="text-2xl font-semibold text-white mb-6">Backend</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-blue-300 mr-3">•</span>
                                    <strong>Drupal:</strong> CMS robusto y flexible
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-300 mr-3">•</span>
                                    <strong>PHP:</strong> Desarrollo de módulos personalizados
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-300 mr-3">•</span>
                                    <strong>SQL:</strong> Base de datos relacional
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-300 mr-3">•</span>
                                    <strong>Módulos Drupal:</strong> Funcionalidades específicas
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="mt-8">
                        <h4 className="text-2xl font-semibold text-white mb-6 text-center">DevOps & Herramientas</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-400/30 backdrop-blur-sm">
                                <h5 className="text-xl font-semibold text-white mb-4">🐳 Docker</h5>
                                <p className="text-gray-300 mb-4">
                                    Containerización completa del proyecto para facilitar el desarrollo, 
                                    testing y despliegue en diferentes entornos.
                                </p>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Contenedores para Drupal, PHP y base de datos</li>
                                    <li>• Docker Compose para orquestación</li>
                                    <li>• Entorno de desarrollo reproducible</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-blue-700/30 backdrop-blur-sm">
                                <h5 className="text-xl font-semibold text-white mb-4">🔄 Metodología Scrum</h5>
                                <p className="text-gray-300 mb-4">
                                    Desarrollo ágil con sprints, reuniones diarias y entregas incrementales, 
                                    aplicado en entorno empresarial real.
                                </p>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Sprints de 2 semanas</li>
                                    <li>• Daily standups</li>
                                    <li>• Retrospectivas y mejora continua</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Demo Completa en Video
                    </h3>
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-400/30 backdrop-blur-sm">
                        <div className="relative w-full rounded-xl overflow-hidden border border-yellow-400/30">
                            <video
                                className="w-full h-auto object-contain"
                                controls
                                preload="metadata"
                            >
                                <source src="/projects/cafd/VideoCAFD.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        <p className="text-gray-300 mt-6 text-center text-lg">
                            Demostración completa del sitio web de CAFD, incluyendo la navegación por todas las secciones, 
                            gestión de federaciones deportivas, equipos y la lógica de datos implementada con Drupal y PHP.
                        </p>
                    </div>
                </section>

                {/* Back to Portfolio */}
                <section className="text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-blue-800 transition-all duration-300 hover:scale-105"
                    >
                        <span>←</span>
                        <span>Volver al Portfolio</span>
                    </Link>
                </section>
            </div>
        </div>
    );
} 