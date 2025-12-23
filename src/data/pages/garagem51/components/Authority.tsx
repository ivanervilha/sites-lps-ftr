'use client';

import { Wrench, Car, Briefcase, Users, Store, Settings, Search, ShieldCheck } from 'lucide-react';

const ELOIR_IMAGE_URL = "/assets/garagem51/eloir-profile-final.jpg";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";

const Authority = () => {
    const experiences = [
        { icon: <Wrench size={16} />, label: "Oficina Mecânica", sub: "Aprendi a consertar" },
        { icon: <Car size={16} />, label: "Funilaria", sub: "Aprendi a identificar batida" },
        { icon: <Search size={16} />, label: "Perito de Seguradora", sub: "Vi fraudes e golpes" },
        { icon: <Settings size={16} />, label: "Mecânico Concessionária", sub: "Vícios de cada marca" },
        { icon: <ShieldCheck size={16} />, label: "Chefe de Oficina", sub: "Gestão técnica" },
        { icon: <Briefcase size={16} />, label: "Gerente Pós-vendas", sub: "Ouvi todas reclamações" },
        { icon: <Users size={16} />, label: "Vendedor de Carros", sub: "Como vendedor pensa" },
        { icon: <Store size={16} />, label: "Dono de Garagem", sub: "Mercado por dentro" },
        { icon: <Wrench size={16} />, label: "Auto Center", sub: "Milhares de atendimentos" },
    ];

    return (
        <section className="py-20 bg-garage-dark border-y border-slate-800">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mb-4">Quem criou esse método</h2>
                    <div className="inline-block bg-garage-gold text-garage-dark font-bold px-3 py-1 rounded uppercase tracking-wider text-sm">27 Anos de Experiência</div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-garage-gold to-garage-red rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="aspect-[4/5] rounded-xl overflow-hidden border border-slate-700 bg-slate-800 relative shadow-2xl">
                            <img src={ELOIR_IMAGE_URL} alt="Eloir" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }} />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20">
                                <h3 className="text-white font-display text-3xl font-bold uppercase">Eloir</h3>
                                <p className="text-garage-gold font-medium">Fundador Garagem 51</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-xl font-bold text-white mb-4">COM 14 ANOS EU JÁ ERA MECÂNICO FORMADO.</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">Naquela época não existia carro com injeção eletrônica. Era tudo carburador. Aprendi no braço, com graxa na mão. Quando a tecnologia mudou, eu mudei junto. Fiz especialização em injeção, elétrica, eletrônica.</p>
                        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-8">
                            <h4 className="text-garage-red font-bold font-display text-lg uppercase mb-4 border-b border-slate-700 pb-2">O ciclo completo — Meu Diferencial</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {experiences.map((exp, i) => (
                                    <div key={i} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-garage-gold font-bold text-xs uppercase">{exp.icon} {exp.label}</div>
                                        <div className="text-slate-500 text-xs leading-tight pl-6">{exp.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-l-4 border-garage-gold pl-6 py-4 bg-garage-gold/5 rounded-r my-6">
                            <p className="text-xl md:text-2xl font-display font-bold text-white italic leading-tight">&quot;Eu sei exatamente como você é enganado — porque eu já estive do outro lado.&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
