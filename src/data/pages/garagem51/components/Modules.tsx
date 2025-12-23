'use client';

import { Check } from 'lucide-react';

const Modules = () => {
    const modules = [
        { title: "VÍDEO 0: AS 3 PERGUNTAS DECISIVAS", desc: "Antes de ver qualquer carro, você precisa responder: Pra quê? Por quê? Como? Isso define qual carro procurar — e evita comprar o errado." },
        { title: "BLOCO 1: MOTOR E FLUIDOS", desc: "Vazamentos, cor do óleo, nível de água, ruídos. Onde olhar e o que cada sinal significa. Simples e visual." },
        { title: "BLOCO 2: ESTRUTURA EXTERNA", desc: "O 'teste da mão' pra identificar batida. Alinhamento de portas. Diferença de pintura. Aprendi isso em anos de funilaria." },
        { title: "BLOCO 3: CHASSI E IDENTIFICAÇÃO", isCritical: true, desc: "O bloco mais importante. Número do chassi, etiquetas nos vidros, gravações originais. É aqui que golpistas mais fraudam." },
        { title: "BLOCO 4: RODAGEM E CARGA", desc: "Pneus, suspensão, porta-malas, estepe. Sinais que revelam como o carro foi tratado pelo dono anterior." },
        { title: "BLOCO 5: INTERIOR E COERÊNCIA", desc: "Desgaste interno vs KM declarada. Cheiros que indicam problema. Sinais de km adulterada que você vai aprender a identificar." },
        { title: "BLOCO 6: DOCUMENTAÇÃO E DECISÃO FINAL", desc: "Consultas obrigatórias, preço de mercado, como tomar a decisão final com segurança. O passo que faltava." }
    ];

    return (
        <section className="py-20 bg-garage-dark">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase">Tudo que você recebe no curso</h2>
                </div>
                <div className="space-y-4">
                    {modules.map((mod, i) => (
                        <div key={i} className={`p-6 rounded-lg border ${mod.isCritical ? 'bg-garage-red/10 border-garage-red/50' : 'bg-slate-800 border-slate-700'}`}>
                            <div className="flex items-start gap-4">
                                <div className={`mt-1 p-1 rounded-full ${mod.isCritical ? 'bg-garage-red text-white' : 'bg-slate-700 text-slate-300'}`}>
                                    <Check size={16} />
                                </div>
                                <div>
                                    <h3 className={`text-lg md:text-xl font-bold font-display uppercase mb-2 ${mod.isCritical ? 'text-garage-red' : 'text-white'}`}>
                                        {mod.title} {mod.isCritical && <span className="ml-2 text-xs bg-garage-red text-white px-2 py-0.5 rounded">CRÍTICO</span>}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">{mod.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modules;
