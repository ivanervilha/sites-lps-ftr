'use client';

import { XCircle } from 'lucide-react';

const PainPoints = () => {
    const thoughts = [
        "E se eu comprar uma bomba?",
        "Não entendo nada de mecânica",
        "Vendedor vai me enrolar",
        "E se o km for adulterado?",
        "E se for carro batido?",
        "Vou pagar caro demais?"
    ];

    const checklistItems = [
        "Ter medo de abrir o capô porque não sabe o que procurar",
        "Achar que todo vendedor vai te passar a perna",
        "Ver várias versões do mesmo carro e não fazer ideia qual escolher",
        "Depender de 'amigo mecânico' que nem sempre está disponível",
        "Pagar mais caro por não saber negociar direito",
        "Acordar pensando 'será que eu fiz um bom negócio?'"
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-garage-dark border-y border-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl text-slate-200 mb-4">
                        A cada dia que passa, você adia a compra do carro por medo de ser enganado — e sofre com pensamentos do tipo:
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
                    {thoughts.map((thought, idx) => (
                        <div key={idx} className="bg-slate-800 rounded-2xl p-4 md:p-6 text-center border border-slate-700 relative shadow-lg">
                            <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-slate-800 border-b border-r border-slate-700 transform rotate-45 -translate-x-1/2"></div>
                            <p className="text-slate-300 font-medium italic">&quot;{thought}&quot;</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto bg-slate-800/30 rounded-xl p-8 border border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-garage-red/20 rounded-full">
                            <XCircle className="text-garage-red" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase font-display">Isso acontece com você?</h3>
                    </div>

                    <div className="space-y-4">
                        {checklistItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded border border-slate-500 mt-0.5 shrink-0 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-slate-600"></div>
                                </div>
                                <p className="text-slate-300">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                        <p className="text-xl font-display font-bold text-white mb-2">Marcou 3 ou mais?</p>
                        <p className="text-slate-400">É horrível viver assim, né? Mas o problema não é você...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
