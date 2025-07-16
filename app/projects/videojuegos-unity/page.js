import Image from "next/image";
import Link from "next/link";

export default function UnityGamesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <header className="relative py-8 px-6 border-b border-white/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                        <span className="text-2xl">←</span>
                        <span className="text-lg font-semibold">Volver al Portfolio</span>
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Unity Games
                    </h1>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                            Miniproyectos Unity
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Colección de miniproyectos desarrollados para entender la tecnología Unity y el lenguaje C#, 
                            explorando diferentes mecánicas de juego y conceptos de programación orientada a objetos.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20">
                                Unity
                            </span>
                            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20">
                                C#
                            </span>
                            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20">
                                Game Development
                            </span>
                            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20">
                                Object-Oriented Programming
                            </span>
                            <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20">
                                Physics Engine
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <a 
                                href="https://github.com/josca16/Unity-Games" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 text-black px-8 py-4 rounded-full font-semibold hover:from-gray-200 hover:to-gray-400 transition-all duration-300 hover:scale-105"
                            >
                                <span>📁</span>
                                <span>Ver Código en GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Project Context */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
                        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 text-center">
                            ¿Por qué Miniproyectos?
                        </h3>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                Estos <strong className="text-white">miniproyectos</strong> fueron desarrollados como parte de mi aprendizaje en Unity y C#, 
                                con el objetivo de comprender la tecnología, el framework y el lenguaje de programación 
                                de manera práctica y progresiva. <strong className="text-white">Me apasionan mucho los videojuegos</strong>, 
                                por lo que aprender Unity y desarrollo de juegos ha sido una experiencia muy gratificante.
                            </p>
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                Cada proyecto se enfoca en diferentes aspectos: física, input del usuario, programación orientada a objetos, 
                                y la integración entre C# y el motor de Unity, permitiendo un aprendizaje estructurado y efectivo.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                    <h4 className="text-lg font-semibold text-white mb-3">🎯 Objetivo de Aprendizaje</h4>
                                    <p className="text-gray-300">
                                        Comprender Unity como framework, C# como lenguaje de programación y su integración 
                                        para crear experiencias interactivas.
                                    </p>
                                </div>
                                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                    <h4 className="text-lg font-semibold text-white mb-3">💡 Enfoque Práctico</h4>
                                    <p className="text-gray-300">
                                        Aprendizaje basado en proyectos reales, explorando diferentes mecánicas 
                                        y conceptos de desarrollo de videojuegos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Game 1: Ball Game */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            🏀 Juego de la Bola
                        </h3>
                        
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Video */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4">Demo en Video</h4>
                                <div className="relative w-full rounded-xl overflow-hidden border border-white/30">
                                    <video
                                        className="w-full h-auto object-contain"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/projects/videojuegos-unity/ball-game.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4">Descripción</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Juego simple donde controlas una bola que rebota en el entorno. El objetivo es 
                                    explorar la física básica de Unity, el sistema de colisiones y el movimiento de objetos.
                                </p>
                                <div className="space-y-2">
                                    <h5 className="text-lg font-semibold text-white">Características:</h5>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Física realista con rebotes</li>
                                        <li>• Control de movimiento suave</li>
                                        <li>• Sistema de colisiones</li>
                                        <li>• Efectos visuales básicos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Code Section */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">Código Principal</h4>
                            <div className="bg-gray-900/50 rounded-xl p-6 border border-white/20 overflow-x-auto">
                                <pre className="text-sm text-gray-300">
{`using UnityEngine;

public class BallController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpForce = 10f;
    
    private Rigidbody rb;
    
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }
    
    void Update()
    {
        // Input horizontal
        float horizontalInput = Input.GetAxis("Horizontal");
        Vector3 movement = new Vector3(horizontalInput, 0, 0) * moveSpeed;
        
        // Aplicar movimiento
        rb.velocity = new Vector3(movement.x, rb.velocity.y, 0);
        
        // Salto
        if (Input.GetKeyDown(KeyCode.Space))
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
    }
    
    void OnCollisionEnter(Collision collision)
    {
        // Efecto de rebote
        if (collision.gameObject.CompareTag("Wall"))
        {
            // Lógica de rebote
        }
    }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Game 2: Flappy Bird Clone */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            🐦 Flappy Bird Clone
                        </h3>
                        
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Video */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4">Demo en Video</h4>
                                <div className="relative w-full rounded-xl overflow-hidden border border-white/30">
                                    <video
                                        className="w-full h-auto object-contain"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/projects/videojuegos-unity/flappy-bird.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4">Descripción</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Clon del clásico Flappy Bird que explora la generación procedural de obstáculos, 
                                    el sistema de puntuación y la gestión del estado del juego.
                                </p>
                                <div className="space-y-2">
                                    <h5 className="text-lg font-semibold text-white">Características:</h5>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Generación procedural de obstáculos</li>
                                        <li>• Sistema de puntuación</li>
                                        <li>• Física de gravedad</li>
                                        <li>• Estados de juego (jugando, game over)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Code Section */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">Código Principal</h4>
                            <div className="bg-gray-900/50 rounded-xl p-6 border border-white/20 overflow-x-auto">
                                <pre className="text-sm text-gray-300">
{`using UnityEngine;

public class FlappyBird : MonoBehaviour
{
    [SerializeField] private float jumpForce = 5f;
    [SerializeField] private float gravity = -9.8f;
    
    private Rigidbody2D rb;
    private bool isDead = false;
    private int score = 0;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    
    void Update()
    {
        if (isDead) return;
        
        // Input de salto
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Jump();
        }
        
        // Aplicar gravedad
        rb.velocity = new Vector2(0, rb.velocity.y + gravity * Time.deltaTime);
    }
    
    void Jump()
    {
        rb.velocity = new Vector2(0, jumpForce);
    }
    
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Pipe"))
        {
            GameOver();
        }
        else if (other.CompareTag("Score"))
        {
            score++;
            // Actualizar UI
        }
    }
    
    void GameOver()
    {
        isDead = true;
        // Lógica de game over
    }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Game 3: Shooting Game */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            🔫 Juego de Disparos
                        </h3>
                        
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Video */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4">Demo en Video</h4>
                                <div className="relative w-full rounded-xl overflow-hidden border border-white/30">
                                    <video
                                        className="w-full h-auto object-contain"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/projects/videojuegos-unity/shooting-game.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-white mb-4">Descripción</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Juego de disparos en primera persona que explora el sistema de raycasting, 
                                    la gestión de munición, el spawn de enemigos y la programación orientada a objetos.
                                </p>
                                <div className="space-y-2">
                                    <h5 className="text-lg font-semibold text-white">Características:</h5>
                                    <ul className="text-gray-300 space-y-1">
                                        <li>• Sistema de raycasting para disparos</li>
                                        <li>• Gestión de munición</li>
                                        <li>• Spawn procedural de enemigos</li>
                                        <li>• Sistema de salud y daño</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Code Section */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">Código Principal</h4>
                            <div className="bg-gray-900/50 rounded-xl p-6 border border-white/20 overflow-x-auto">
                                <pre className="text-sm text-gray-300">
{`using UnityEngine;

public class PlayerShooter : MonoBehaviour
{
    [SerializeField] private float damage = 25f;
    [SerializeField] private float range = 100f;
    [SerializeField] private Camera playerCamera;
    [SerializeField] private int maxAmmo = 30;
    
    private int currentAmmo;
    private bool isReloading = false;
    
    void Start()
    {
        currentAmmo = maxAmmo;
    }
    
    void Update()
    {
        if (isReloading) return;
        
        if (currentAmmo <= 0)
        {
            StartReload();
            return;
        }
        
        if (Input.GetButtonDown("Fire1"))
        {
            Shoot();
        }
        
        if (Input.GetKeyDown(KeyCode.R))
        {
            StartReload();
        }
    }
    
    void Shoot()
    {
        currentAmmo--;
        
        RaycastHit hit;
        if (Physics.Raycast(playerCamera.transform.position, 
                           playerCamera.transform.forward, out hit, range))
        {
            Enemy enemy = hit.transform.GetComponent<Enemy>();
            if (enemy != null)
            {
                enemy.TakeDamage(damage);
            }
        }
    }
    
    void StartReload()
    {
        if (isReloading) return;
        
        isReloading = true;
        Invoke("FinishReload", 2f);
    }
    
    void FinishReload()
    {
        currentAmmo = maxAmmo;
        isReloading = false;
    }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learning Outcomes */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
                        <h3 className="text-3xl font-bold text-white text-center mb-8">
                            🎓 Resultados del Aprendizaje
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3">🔧 Unity Framework</h4>
                                <p className="text-gray-300 text-sm">
                                    Comprensión profunda del motor de Unity, sus componentes, 
                                    el sistema de escenas y el flujo de trabajo de desarrollo.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3">💻 C# Programming</h4>
                                <p className="text-gray-300 text-sm">
                                    Dominio del lenguaje C#, programación orientada a objetos, 
                                    herencia, interfaces y patrones de diseño en Unity.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3">🎮 Game Mechanics</h4>
                                <p className="text-gray-300 text-sm">
                                    Implementación de mecánicas de juego, sistemas de input, 
                                    física y lógica de juego interactiva.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3">⚡ Performance</h4>
                                <p className="text-gray-300 text-sm">
                                    Optimización de código, gestión de memoria y buenas prácticas 
                                    para el desarrollo de videojuegos.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3">🎨 UI/UX</h4>
                                <p className="text-gray-300 text-sm">
                                    Creación de interfaces de usuario, sistemas de puntuación 
                                    y experiencia de jugador intuitiva.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <h4 className="text-lg font-semibold text-white mb-3">🔄 Iteration</h4>
                                <p className="text-gray-300 text-sm">
                                    Proceso de iteración y mejora continua, testing de mecánicas 
                                    y refinamiento de la experiencia de juego.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Portfolio */}
                <section className="text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 text-black px-8 py-4 rounded-full font-semibold hover:from-gray-200 hover:to-gray-400 transition-all duration-300 hover:scale-105"
                    >
                        <span>←</span>
                        <span>Volver al Portfolio</span>
                    </Link>
                </section>
            </div>
        </div>
    );
} 