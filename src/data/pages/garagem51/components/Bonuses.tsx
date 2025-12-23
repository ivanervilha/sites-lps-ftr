'use client';

import { Gift, FileText, MessageSquare, Bot, Sparkles } from 'lucide-react';

const Bonuses = () => (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <p className="text-garage-gold font-bold uppercase tracking-widest mb-2">Potencialize seus resultados</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-4">Bônus Exclusivos Inclusos no Pacote</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">Ferramentas profissionais que eu uso no dia a dia. Agora na sua mão.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-garage-dark p-6 rounded-xl border border-slate-700 hover:border-garage-gold/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="text-garage-gold group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-xl font-bold text-white font-display uppercase">Bônus #1: Checklist Completo</h3>
                    </div>
                    <p className="text-slate-400 mb-3">Imprime e leva junto. Todos os 10 pontos pra você marcar enquanto avalia. O vendedor percebe que você sabe o que tá fazendo.</p>
                    <div className="text-garage-green font-semibold text-sm">→ Você parece um profissional.</div>
                </div>
                <div className="bg-garage-dark p-6 rounded-xl border border-slate-700 hover:border-garage-gold/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                        <Gift className="text-garage-gold group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-xl font-bold text-white font-display uppercase">Bônus #2: PDF &quot;10 Golpes Comuns&quot;</h3>
                    </div>
                    <p className="text-slate-400 mb-3">Chassi adulterado, km rodada, carro de leilão, sinistro maquiado... Vi TODOS esses golpes de perto como perito.</p>
                    <div className="text-garage-green font-semibold text-sm">→ Proteção que vale milhares de reais.</div>
                </div>
                <div className="bg-garage-dark p-6 rounded-xl border border-slate-700 hover:border-garage-gold/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                        <MessageSquare className="text-garage-gold group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-xl font-bold text-white font-display uppercase">Bônus #3: Scripts de Negociação</h3>
                    </div>
                    <p className="text-slate-400 mb-3">Fui vendedor de concessionária. Sei exatamente como vendedor pensa. Uso essas frases exatas contra eles. Agora são suas.</p>
                    <div className="text-garage-green font-semibold text-sm">→ Economize R$ 2.000-5.000 em cada compra.</div>
                </div>
                <div className="relative bg-gradient-to-br from-garage-dark to-slate-900 p-8 rounded-xl border-2 border-garage-gold/50 hover:border-garage-gold transition-all group shadow-[0_0_30px_rgba(244,164,38,0.15)] overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-garage-gold/10 blur-[60px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-garage-gold/20 p-2 rounded-lg">
                                <Bot className="text-garage-gold group-hover:rotate-12 transition-transform" size={32} />
                            </div>
                            <div>
                                <span className="text-garage-gold font-bold text-xs uppercase tracking-wider block mb-1">Acesso Antecipado</span>
                                <h3 className="text-2xl font-bold text-white font-display uppercase leading-none">IA Garagem 51</h3>
                            </div>
                        </div>
                        <p className="text-slate-300 mb-4 leading-relaxed">A inteligência artificial que vai revolucionar a compra de carros usados. Lançamento oficial em <strong>Janeiro/2026</strong>.</p>
                        <div className="bg-garage-gold/10 rounded-lg p-3 border border-garage-gold/20 mb-4">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-white"><Sparkles size={14} className="text-garage-gold" /> <strong>15 créditos GRÁTIS</strong> pra usar no lançamento</li>
                                <li className="flex items-center gap-2 text-sm text-white"><Sparkles size={14} className="text-garage-gold" /> É como ter o Eloir no seu bolso 24h</li>
                            </ul>
                        </div>
                        <div className="text-garage-gold font-bold text-sm flex items-center gap-2 mt-2">
                            <span className="w-2 h-2 rounded-full bg-garage-gold animate-pulse"></span>
                            Bônus mais valioso do pacote
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Bonuses;
