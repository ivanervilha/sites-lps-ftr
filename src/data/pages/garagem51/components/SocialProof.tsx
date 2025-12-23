'use client';

import { Newspaper, Quote } from 'lucide-react';

const SocialProof = () => (
    <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-display uppercase font-bold text-slate-200">No Brasil, comprar carro usado virou <span className="text-garage-red">Roleta Russa</span></h2>
            </div>
            <div className="bg-slate-100 text-slate-900 rounded-lg shadow-xl p-6 md:p-8 transform rotate-1 mb-12 border-l-8 border-garage-red relative">
                <div className="absolute top-4 right-4 text-slate-300"><Newspaper size={40} /></div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-4 uppercase text-garage-dark">Família perde R$ 45 mil em golpe</h3>
                <p className="italic text-slate-700 mb-4 text-lg">&quot;Compramos um HB20 que parecia perfeito. Três semanas depois, descobrimos: chassi adulterado, motor trocado, carro de leilão vendido como particular. O vendedor sumiu. A polícia disse que é caso comum.&quot;</p>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">— Caso real reportado em 2024</div>
            </div>
            <div className="relative pl-10 md:pl-16">
                <Quote className="absolute left-0 top-0 text-garage-gold opacity-30 transform -scale-x-100" size={48} />
                <blockquote className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">&quot;Eu vi isso acontecer dezenas de vezes quando trabalhei como <strong className="text-white">perito de seguradora</strong>. Os golpes são sofisticados. Chassi remarcado, km adulterada, repintura perfeita. <span className="text-garage-red font-semibold">Só quem conhece sabe identificar. E a maioria das pessoas não conhece.</span>&quot;</blockquote>
                <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-garage-gray border border-slate-600 overflow-hidden">
                        <img src="/assets/garagem51/eloir-profile-final.jpg" alt="Eloir" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="font-display font-bold text-white">ELOIR <span className="text-slate-500 text-sm font-sans font-normal ml-2">Criador do Método Compra Segura</span></div>
                </div>
            </div>
        </div>
    </section>
);

export default SocialProof;
