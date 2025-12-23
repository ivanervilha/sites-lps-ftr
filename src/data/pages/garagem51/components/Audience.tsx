'use client';

import { ArrowRight } from 'lucide-react';

const Audience = () => {
    const list = [
        "Está pensando em comprar um carro usado nos próximos meses",
        "Já foi enganado antes e NÃO QUER passar por isso de novo",
        "Não entende nada de mecânica mas quer comprar com segurança",
        "Está cansado de depender de 'amigo mecânico'",
        "Quer economizar na negociação tendo argumentos técnicos",
        "Tem MEDO de cair em golpe ou comprar carro batido/maquiado",
        "Vai ajudar filho(a) ou familiar a comprar o primeiro carro",
        "É motorista de app e precisa de um carro confiável e barato",
        "Quer ter CERTEZA antes de fechar qualquer negócio"
    ];

    return (
        <section className="py-20 bg-garage-dark">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase text-center mb-12">O Compra Segura é para <span className="text-garage-red">você</span> que...</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded hover:bg-slate-800/50 transition-colors">
                            <ArrowRight className="text-garage-red shrink-0 mt-1" size={20} />
                            <p className="text-slate-200 text-lg">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <p className="text-xl font-bold text-white mb-2">Se identificou com 2 ou mais itens?</p>
                    <p className="text-slate-400">Então o Compra Segura foi feito EXATAMENTE pra você. E você não encontra isso em nenhum outro lugar.</p>
                </div>
            </div>
        </section>
    );
};

export default Audience;
