'use client';

import { X, Check, ArrowRight } from 'lucide-react';

const Decision = () => (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-2">Agora você tem duas opções</h2>
                <p className="text-xl text-slate-400">É com você. Qual caminho escolhe?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 relative grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-slate-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider border border-slate-700">Opção 1</div>
                    <div className="text-center mb-8 mt-4">
                        <div className="text-4xl mb-2">😔</div>
                        <h3 className="text-2xl font-display font-bold text-slate-300 uppercase">Continuar como está</h3>
                    </div>
                    <ul className="space-y-4">
                        {["Adiar a compra por medo de ser enganado", "Depender de terceiros pra avaliar carro", "Arriscar perder R$ 5.000 a R$ 45.000 em golpe", "Pagar mais caro por não saber negociar", "Acordar pensando \"será que fiz besteira?\"", "Continuar vulnerável aos golpistas profissionais"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-500"><X className="shrink-0 text-garage-red mt-1" size={18} /><span>{item}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="bg-garage-dark border-2 border-garage-green/50 rounded-xl p-8 relative shadow-[0_0_30px_rgba(46,204,113,0.1)] transform md:-translate-y-4 z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-garage-green text-garage-dark px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">Opção 2</div>
                    <div className="text-center mb-8 mt-4">
                        <div className="text-4xl mb-2">😎</div>
                        <h3 className="text-2xl font-display font-bold text-white uppercase">Aprender Agora</h3>
                    </div>
                    <ul className="space-y-4">
                        {["Avaliar qualquer carro com segurança total", "Identificar golpes ANTES de cair neles", "Negociar com argumentos técnicos reais", "Comprar com confiança e dormir tranquilo", "Ter 27 anos de experiência no seu bolso", "E em Janeiro, ter o Eloir 24/7 com a IA"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-white font-medium"><div className="bg-garage-green/20 rounded-full p-0.5 mt-0.5"><Check className="shrink-0 text-garage-green" size={14} /></div><span>{item}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-slate-300 text-lg mb-6">O que separa você de uma compra segura são apenas <span className="text-garage-green font-bold text-2xl">R$ 67</span>.<br /><span className="text-sm text-slate-500 mt-2 block">Quanto custa o prejuízo de comprar errado? R$ 5.000? R$ 15.000? R$ 45.000?</span></p>
                <a href="https://pay.hotmart.com/S103327101R" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-garage-dark transition-all duration-200 bg-garage-green hover:bg-green-600 font-display uppercase tracking-wider rounded shadow-lg hover:-translate-y-1 gap-2 w-full md:w-auto">QUERO A OPÇÃO 2 — COMPRAR COM SEGURANÇA <ArrowRight size={20} /></a>
            </div>
        </div>
    </section>
);

export default Decision;
