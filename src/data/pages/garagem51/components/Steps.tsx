'use client';

import { PlayCircle, Printer, Eye, Bot } from 'lucide-react';

const Steps = () => {
    const steps = [
        { icon: <PlayCircle size={32} />, title: "PASSO 1: ASSISTA AS AULAS", desc: "Vídeos curtos e diretos. Você aprende os 10 pontos de verificação em menos de 1 hora.", meta: "⏱️ ~1 hora total" },
        { icon: <Printer size={32} />, title: "PASSO 2: IMPRIMA O CHECKLIST", desc: "2 páginas com TUDO que você precisa verificar. Leva junto e marca cada item.", meta: "📋 2 páginas" },
        { icon: <Eye size={32} />, title: "PASSO 3: AVALIE COM CONFIANÇA", desc: "Na hora de ver o carro, você sabe exatamente onde olhar. Vendedor percebe que você entende.", meta: "🔍 Na hora" },
        { icon: <Bot size={32} />, title: "PASSO 4: TENHA O ELOIR AO SEU LADO", desc: "Na hora de avaliar, você não está sozinho. O Garagem 51 IA é como ter o Eloir no bolso — pronto pra tirar qualquer dúvida. 24/7.", meta: "🚀 Lança em Jan/26" }
    ];

    return (
        <section className="py-20 bg-slate-900 border-b border-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase">Como funciona o <span className="text-garage-green">Compra Segura</span></h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-700 z-0"></div>
                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 bg-garage-dark p-6 rounded-xl border border-slate-700 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-garage-green mb-6 mx-auto border-4 border-slate-900 shadow-lg">{step.icon}</div>
                            <h3 className="text-lg font-bold font-display text-white mb-3 text-center uppercase">{step.title}</h3>
                            <p className="text-slate-400 text-sm text-center flex-grow mb-4">{step.desc}</p>
                            <div className="text-center text-xs font-bold text-garage-gold bg-garage-gold/10 py-1 px-2 rounded self-center">{step.meta}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
