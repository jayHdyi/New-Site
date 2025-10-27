import React from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Home = () => {
    return (
        <div className="bg-slate-900 text-white min-h-screen font-sans">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
                    Welcome to Sample Site
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                    Discover amazing things. We build modern, responsive, and beautiful web experiences that your users will love.
                </p>
                <button data-aos="fade-up" data-aos-delay="400" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300">
                    Get Started
                </button>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    Our Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-slate-800 p-8 rounded-xl shadow-lg" data-aos="fade-right">
                        <h3 className="text-2xl font-bold mb-3 text-cyan-400">Responsive Design</h3>
                        <p className="text-slate-400">
                            Our layouts work on any device, big or small. We ensure a seamless experience everywhere.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-slate-800 p-8 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-bold mb-3 text-cyan-400">Modern Animations</h3>
                        <p className="text-slate-400">
                            Engage your users with smooth, performant animations that bring your content to life.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-slate-800 p-8 rounded-xl shadow-lg" data-aos="fade-left" data-aos-delay="400">
                        <h3 className="text-2xl font-bold mb-3 text-cyan-400">Blazing Fast</h3>
                        <p className="text-slate-400">
                            Performance is key. We optimize for speed to deliver the best user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home