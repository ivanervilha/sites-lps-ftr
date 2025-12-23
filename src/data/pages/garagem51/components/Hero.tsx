import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Wrench } from 'lucide-react';

const Hero = () => {
    // Updated to use the jpg file uploaded by user
    const ELOIR_IMAGE_URL = "/assets/garagem51/eloir-profile-final.jpg";

    return (
        <section className="relative w-full pt-0 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-garage-dark border-b border-slate-800">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">

                {/* === MOBILE HERO IMAGE (Cinematic Style) === */}
                {/* Visible only on lg screens and below */}
                <div className="lg:hidden relative w-full max-w-[500px] mx-auto z-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-b-[3rem] shadow-2xl"
                    >
                        <img
                            src={ELOIR_IMAGE_URL}
                            alt="Eloir"
                            className="w-full h-full object-cover object-top scale-100"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                            }}
                        />

                        {/* Heavy Gradient Fade to blend into background and support text overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-b from-transparent via-garage-dark/70 to-garage-dark"></div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20 -mt-32 lg:mt-0">
                    {/* Text Column */}
                    <div className="text-center lg:text-left order-1 px-2 md:px-0">

                        {/* PRODUCT NAME BRANDING */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="mb-4 relative z-10"
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-garage-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-2">
                                <Wrench size={14} /> Garagem 51 Apresenta
                            </div>
                            <h2 className="font-display text-garage-green text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-none tracking-tight drop-shadow-[0_0_25px_rgba(46,204,113,0.3)]">
                                Compra Segura
                            </h2>
                        </motion.div>

                        {/* Headline (PROMISE) */}
                        <div className="mb-8 relative z-10">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-white mb-6"
                            >
                                O método de 10 passos para avaliar <br className="hidden md:block" />
                                <span className="text-slate-200">qualquer carro usado com segurança</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                            >
                                <p className="mb-2">Aprenda em 1 hora o que eu levei 27 anos pra dominar.</p>
                                <p className="text-white font-medium italic border-l-2 border-garage-gold pl-3 ml-4 lg:ml-0">
                                    &quot;Sei como você é enganado — porque já estive do outro lado.&quot;
                                </p>
                            </motion.div>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-lg mx-auto lg:mx-0 mb-8 border-y border-slate-800 py-4">
                            {[
                                { label: "de Experiência", value: "27 ANOS" },
                                { label: "do Mercado", value: "9 SETORES" },
                                { label: "do Método", value: "10 PASSOS" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-xl md:text-2xl font-display font-bold text-garage-gold">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Bullets */}
                        <div className="flex flex-col gap-3 max-w-xl mx-auto lg:mx-0 mb-10">
                            {[
                                { text: "O 'teste da mão' que revela batida", origin: "aprendi na funilaria" },
                                { text: "Os 10 golpes mais comuns", origin: "vi como perito" },
                                { text: "Scripts de negociação prontos", origin: "tática de vendedor" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-3 text-left"
                                >
                                    <CheckCircle2 className="text-garage-green shrink-0 w-5 h-5 mt-0.5" />
                                    <span className="text-sm md:text-base font-medium text-slate-200">
                                        {item.text} <span className="text-slate-500 text-xs uppercase ml-1">— {item.origin}</span>
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center lg:items-start gap-4"
                        >
                            <a href="https://pay.hotmart.com/S103327101R?sck=HOTMART_PRODUCT_PAGE&off=axxej2qv&hotfeature=32&bid=1766460571234" className="group relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 text-lg md:text-xl font-bold text-garage-dark transition-all duration-200 bg-garage-green font-display uppercase tracking-wider rounded shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.6)] hover:bg-green-600 hover:-translate-y-1 w-full md:w-auto text-shadow-sm">
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                <span className="relative flex items-center justify-center gap-2">
                                    QUERO COMPRAR COM SEGURANÇA
                                    <ShieldCheck className="w-6 h-6" />
                                </span>
                            </a>
                            <p className="text-slate-400 text-xs md:text-sm flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4 px-3 py-1.5 rounded-full">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-garage-green" />
                                    Acesso imediato
                                </span>
                                <span className="hidden md:inline text-slate-700">|</span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-garage-green" />
                                    IA Garagem 51 (lança Jan/26)
                                </span>
                                <span className="hidden md:inline text-slate-700">|</span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 size={12} className="text-garage-green" />
                                    Garantia 7 dias
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* DESKTOP ONLY: Large Image Column */}
                    <div className="hidden lg:flex order-2 justify-end relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative w-full"
                        >
                            {/* Glow Effect behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-garage-gold/10 blur-[60px] rounded-full pointer-events-none"></div>

                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-gradient-to-b from-slate-800 to-garage-dark">
                                <img
                                    src={ELOIR_IMAGE_URL}
                                    alt="Eloir - Criador do Método"
                                    className="w-full h-auto object-cover object-top"
                                    style={{ objectPosition: 'center 20%' }}
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                                    }}
                                />

                                {/* Overlay Gradient at bottom */}
                                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-garage-dark via-garage-dark/80 to-transparent"></div>

                                {/* Name Badge on Image */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                                        <p className="text-garage-gold font-bold text-xs uppercase tracking-widest mb-1">Mecânico & Perito</p>
                                        <p className="text-white font-display text-2xl font-bold uppercase leading-none">Eloir</p>
                                        <p className="text-slate-300 text-sm mt-1">27 Anos de Garagem</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute top-10 -right-10 bg-garage-red text-white p-4 rounded-lg shadow-lg rotate-3"
                            >
                                <p className="font-display font-bold text-2xl leading-none">27</p>
                                <p className="text-xs font-bold uppercase tracking-wider">Anos de<br />Experiência</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;