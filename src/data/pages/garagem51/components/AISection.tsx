'use client';

import { Bot, Sparkles, Target, Handshake, MessageSquare, Car, Wrench, FileSearch, Calculator, ShieldCheck, BarChart3 } from 'lucide-react';

const AISection = () => {
    const specialists = [
        { number: "01", icon: <Car size={24} />, title: "Identificação Visual", desc: "Analisa fotos e vídeos do veículo" },
        { number: "02", icon: <Wrench size={24} />, title: "Diagnóstico Técnico", desc: "Interpreta sintomas e ruídos" },
        { number: "03", icon: <FileSearch size={24} />, title: "Histórico Documental", desc: "Verifica chassi e documentação" },
        { number: "04", icon: <Calculator size={24} />, title: "Precificação", desc: "Avalia preço justo de mercado" },
        { number: "05", icon: <ShieldCheck size={24} />, title: "Verificação de Golpes", desc: "Identifica sinais de fraude" },
        { number: "06", icon: <BarChart3 size={24} />, title: "Custo de Reparo", desc: "Estima gastos de manutenção" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-garage-dark via-slate-900 to-garage-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-garage-gold/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-garage-gold/20 text-garage-gold px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-garage-gold/30">
                        <Bot size={18} /> Lançamento Janeiro 2026
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mb-6">IA Garagem 51: <span className="text-garage-gold">6 Especialistas em 1</span></h2>
                    <p className="text-slate-300 text-lg">Imagine ter 6 especialistas diferentes disponíveis 24 horas por dia, 7 dias por semana, prontos pra te ajudar a avaliar qualquer carro.</p>
                </div>

                <div className="max-w-5xl mx-auto mb-20">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                        {specialists.map((spec, i) => (
                            <div key={i} className="bg-slate-800 border border-slate-700 hover:border-garage-gold transition-colors p-5 rounded-xl flex items-center gap-4 group shadow-lg relative overflow-hidden">
                                <div className="absolute -right-4 -bottom-6 text-6xl font-display font-bold text-white/5 pointer-events-none select-none group-hover:text-garage-gold/10 transition-colors">{spec.number}</div>
                                <div className="bg-slate-900 w-14 h-14 rounded-lg flex items-center justify-center shrink-0 border border-slate-700 text-garage-gold group-hover:scale-110 transition-transform">{spec.icon}</div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold text-garage-gold/50 uppercase tracking-widest">{spec.number}</span>
                                        <h4 className="font-bold text-white font-display text-lg uppercase group-hover:text-garage-gold transition-colors">{spec.title}</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-snug">{spec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center max-w-2xl mx-auto">
                        <p className="italic text-slate-400 text-lg">&quot;O Garagem 51 IA não te conduz por um funil genérico. São <span className="text-white font-bold">6 especialistas independentes</span> que você chama quando precisa.&quot;</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl max-w-md mx-auto w-full">
                        <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-garage-gold to-orange-600 flex items-center justify-center text-white font-bold">G51</div>
                            <div>
                                <div className="font-bold text-white text-sm">Garagem 51 IA</div>
                                <div className="text-xs text-garage-green flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-garage-green animate-pulse"></span> Online 24/7</div>
                            </div>
                        </div>
                        <div className="p-4 space-y-4 text-sm font-sans min-h-[300px]">
                            <div className="flex justify-end">
                                <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tr-sm max-w-[85%]">Estou vendo um Gol G5 2011, o óleo tá com cheiro de queimado. O que isso significa?</div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-slate-900 border border-garage-red/30 text-slate-300 p-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
                                    <div className="flex items-center gap-2 text-garage-red font-bold mb-2 uppercase text-xs"><MessageSquare size={12} /> Atenção: Problema Potencial</div>
                                    <p className="mb-2"><strong className="text-white">INTERPRETAÇÃO:</strong><br />Óleo com cheiro de queimado pode indicar:</p>
                                    <ul className="list-disc list-inside mb-2 pl-1 space-y-1 text-slate-400 text-xs">
                                        <li>Superaquecimento do motor</li>
                                        <li>Vazamento interno</li>
                                        <li>Óleo muito velho e degradado</li>
                                    </ul>
                                    <div className="bg-garage-dark p-2 rounded border border-slate-700 my-2">
                                        <span className="text-garage-gold font-bold text-xs block mb-1">CUSTO ESTIMADO:</span>
                                        <span className="text-white font-mono">R$ 800 - R$ 2.000</span>
                                    </div>
                                    <p className="text-xs mt-2 italic text-slate-400">💡 <strong>Dica do Eloir:</strong> Esse cheiro forte geralmente indica que o dono rodou com motor quente e não cuidou.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-garage-gold rounded-xl p-8 shadow-[0_0_30px_rgba(244,164,38,0.1)] relative">
                            <div className="absolute -top-4 right-8 bg-garage-gold text-garage-dark font-bold px-3 py-1 text-sm uppercase rounded">Acesso Antecipado</div>
                            <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Você está comprando no <span className="text-garage-gold">momento certo</span></h3>
                            <p className="text-slate-300 mb-6">A IA Garagem 51 será lançada oficialmente em <strong>JANEIRO DE 2026</strong>. Mas quem comprar o Compra Segura <strong>HOJE</strong> ganha:</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-garage-gold/20 flex items-center justify-center mt-0.5 text-garage-gold shrink-0"><Sparkles size={14} /></div>
                                    <span className="text-slate-200"><strong>15 créditos GRÁTIS</strong> pra usar assim que lançar</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-garage-gold/20 flex items-center justify-center mt-0.5 text-garage-gold shrink-0"><Target size={14} /></div>
                                    <span className="text-slate-200">Acesso prioritário <strong>ANTES</strong> do público geral</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-garage-gold/20 flex items-center justify-center mt-0.5 text-garage-gold shrink-0"><Handshake size={14} /></div>
                                    <span className="text-slate-200">Condições especiais vitalícias nos pacotes de créditos</span>
                                </li>
                            </ul>
                            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center">
                                <p className="text-sm text-slate-400">Você aprende o método agora. Em Janeiro, faz suas primeiras análises <span className="text-garage-green font-bold uppercase">100% Grátis</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;
