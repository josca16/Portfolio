import Image from "next/image";
import Link from "next/link";

export default function TaxiDayPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <header className="relative py-8 px-6 border-b border-yellow-500/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors">
                        <span className="text-2xl">←</span>
                        <span className="text-lg font-semibold">Volver al Portfolio</span>
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                        TaxiDay
                    </h1>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-12 border border-yellow-500/20 backdrop-blur-sm">
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-6">
                            Plataforma de Gestión de Taxis
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Aplicación completa para la gestión diaria de taxistas, con control de jornadas, 
                            registro de carreras y estadísticas detalladas de rendimiento.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                                React Native
                            </span>
                            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                                Spring Boot
                            </span>
                            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                                Java
                            </span>
                            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                                MariaDB
                            </span>
                            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                                Docker
                            </span>
                            <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
                                Adminer
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <a 
                                href="https://github.com/josca16/TaxiDay" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:scale-105"
                            >
                                <span>📁</span>
                                <span>Ver Código en GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Project Context */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-12 border border-yellow-500/20 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-6 text-center">
                            ¿Por qué TaxiDay?
                        </h3>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                Esta aplicación surge de una <strong className="text-yellow-400">necesidad real</strong> de los taxistas de hoy en día. 
                                Muchos profesionales del taxi necesitan una herramienta moderna y eficiente para llevar a cabo su 
                                <strong className="text-yellow-400"> gestión económica diaria</strong> de manera sencilla y organizada.
                            </p>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                TaxiDay nace para solucionar los problemas que enfrentan los taxistas: falta de control sobre sus jornadas, 
                                dificultad para llevar un registro de carreras, y la necesidad de tener estadísticas claras sobre su rendimiento 
                                y rentabilidad.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/20">
                                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">🎯 Objetivo Principal</h4>
                                    <p className="text-gray-300">
                                        Simplificar la gestión económica diaria de los taxistas, proporcionando una herramienta intuitiva 
                                        que permita un control total sobre sus ingresos y gastos.
                                    </p>
                                </div>
                                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/20">
                                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">💡 Solución</h4>
                                    <p className="text-gray-300">
                                        Una aplicación móvil completa con backend robusto, desarrollada con tecnologías modernas 
                                        y desplegada en contenedores Docker para máxima flexibilidad.
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
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Dashboard Intuitivo</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Panel principal con métricas en tiempo real: jornadas activas, número de carreras y recaudación diaria.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📅</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Gestión de Jornadas</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Sistema completo para crear, gestionar y cerrar jornadas de trabajo con registro detallado de actividades.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Estadísticas Detalladas</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Visualización de rendimiento diario y mensual con análisis de tendencias y métricas de productividad.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🔐</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Sistema de Autenticación</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Login seguro con licencia de taxista y contraseña, con opciones de inicio de sesión social.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Aplicación Móvil</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Interfaz responsive optimizada para dispositivos móviles, permitiendo gestión desde cualquier lugar.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">💾</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Base de Datos Robusta</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Almacenamiento seguro de datos con MariaDB, garantizando integridad y rendimiento óptimo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Capturas de Pantalla
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm">
                            <h4 className="text-xl font-semibold text-white mb-4 text-center">Dashboard Principal</h4>
                            <div className="relative w-full rounded-xl overflow-hidden border border-yellow-500/30">
                                <Image
                                    src="/projects/taxiday/dashboard.png"
                                    alt="Dashboard de TaxiDay"
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-gray-300 mt-4 text-center text-sm">
                                Panel principal con métricas, calendario y gestión de jornadas
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm">
                            <h4 className="text-xl font-semibold text-white mb-4 text-center">Página de Login</h4>
                            <div className="relative w-full rounded-xl overflow-hidden border border-yellow-500/30">
                                <Image
                                    src="/projects/taxiday/login.png"
                                    alt="Login de TaxiDay"
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-gray-300 mt-4 text-center text-sm">
                                Interfaz de autenticación con opciones de login social
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
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm">
                            <h4 className="text-2xl font-semibold text-white mb-6">Frontend</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>React Native:</strong> Aplicación móvil multiplataforma
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Interfaz moderna:</strong> Diseño oscuro con acentos amarillos
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Componentes reutilizables:</strong> Arquitectura modular
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Navegación intuitiva:</strong> UX optimizada para taxistas
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm">
                            <h4 className="text-2xl font-semibold text-white mb-6">Backend</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Spring Boot:</strong> Framework Java para API REST
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>MariaDB:</strong> Base de datos relacional robusta
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Autenticación:</strong> Sistema seguro de login
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>APIs RESTful:</strong> Comunicación cliente-servidor
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="mt-8">
                        <h4 className="text-2xl font-semibold text-white mb-6 text-center">DevOps & Herramientas</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm">
                                <h5 className="text-xl font-semibold text-white mb-4">🐳 Docker</h5>
                                <p className="text-gray-300 mb-4">
                                    Todo el proyecto está containerizado con Docker, facilitando el despliegue y 
                                    asegurando consistencia entre diferentes entornos de desarrollo y producción.
                                </p>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Contenedores para frontend, backend y base de datos</li>
                                    <li>• Docker Compose para orquestación</li>
                                    <li>• Entorno de desarrollo reproducible</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm">
                                <h5 className="text-xl font-semibold text-white mb-4">🗄️ Adminer</h5>
                                <p className="text-gray-300 mb-4">
                                    Interfaz web ligera para gestión de base de datos, alternativa eficiente a DBeaver 
                                    que permite visualizar y gestionar datos de forma rápida y sencilla.
                                </p>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• Acceso web directo a MariaDB</li>
                                    <li>• Interfaz intuitiva y responsive</li>
                                    <li>• Gestión de datos sin software adicional</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Demo en Video
                    </h3>
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm">
                        <div className="relative w-full rounded-xl overflow-hidden border border-yellow-500/30">
                            <video
                                className="w-full h-auto object-contain"
                                controls
                                poster="/projects/taxiday/video-poster.png"
                            >
                                <source src="/projects/taxiday/demo.mp4" type="video/mp4" />
                                <source src="/projects/taxiday/demo.webm" type="video/webm" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                        <p className="text-gray-300 mt-4 text-center">
                            Demostración completa de las funcionalidades de la aplicación
                        </p>
                    </div>
                </section>

                {/* Back to Portfolio */}
                <section className="text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 hover:scale-105"
                    >
                        <span>←</span>
                        <span>Volver al Portfolio</span>
                    </Link>
                </section>
            </div>
        </div>
    );
} 