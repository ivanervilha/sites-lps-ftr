'use client';

import { Target, Search, BookX, Zap } from 'lucide-react';

const VillainReveal = () => (
    <section className="py-20 bg-garage-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-garage-red/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block bg-garage-red px-3 py-1 rounded text-white text-sm font-bold uppercase tracking-wider mb-4">A verdade que ninguém te conta</div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase">O problema <span className="text-garage-red decoration-4 underline decoration-garage-red underline-offset-4">NÃO</span> é você</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-garage-red/50 transition-colors">
                        <Target className="text-garage-gold mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase font-display">Vendedor sabe que você não sabe</h3>
                        <p className="text-slate-400">E eles usam isso contra você. Eles identificam sua insegurança no primeiro &quot;bom dia&quot;.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-garage-red/50 transition-colors">
                        <BookX className="text-garage-gold mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase font-display">Ninguém te ensinou um método</h3>
                        <p className="text-slate-400">Você tem informação solta do YouTube, não um sistema passo-a-passo profissional.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-garage-red/50 transition-colors">
                        <Search className="text-garage-gold mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase font-display">Golpistas são profissionais</h3>
                        <p className="text-slate-400">Você é um amador tentando identificar fraude contra pessoas que fazem isso todo dia.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-garage-red/50 transition-colors">
                        <Zap className="text-garage-gold mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase font-display">Sem método, você é alvo</h3>
                        <p className="text-slate-400">Cada modelo tem vícios específicos que não estão nos vídeos genéricos da internet.</p>
                    </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-xl border border-garage-green/30 text-center">
                    <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">✅ Você só precisa do <span className="text-garage-green">Compra Segura</span></h3>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-6">Um método em 10 passos simples que te ensina EXATAMENTE onde olhar, o que perguntar e quando desistir. Baseado em 27 anos de experiência de quem já viu esse mercado de TODOS os ângulos.</p>
                    <p className="font-display text-xl text-white">E já esteve do lado de quem vende.</p>
                </div>
            </div>
        </div>
    </section>
);

export default VillainReveal;
