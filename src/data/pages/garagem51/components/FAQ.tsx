'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-700">
            <button className="w-full py-4 flex justify-between items-center text-left focus:outline-none group" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors pr-4">{question}</span>
                {isOpen ? <ChevronUp className="text-garage-red shrink-0" /> : <ChevronDown className="text-slate-500 shrink-0" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-400 leading-relaxed whitespace-pre-line">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { q: "💳 Quais são as formas de pagamento?", a: "Cartão de crédito (até 12x), PIX (aprovação instantânea), boleto bancário e dois cartões diferentes. \n\nPagamento 100% seguro processado pela Hotmart com criptografia bancária." },
        { q: "✅ Tem garantia?", a: "SIM! Você tem 7 dias de garantia incondicional. \n\nSe por qualquer motivo você achar que o conteúdo não vale o investimento, é só pedir reembolso. Sem perguntas. Sem burocracia. O risco é 100% meu." },
        { q: "📧 Como recebo o acesso?", a: "O produto é 100% digital. Assim que o pagamento for aprovado (em minutos no cartão/PIX, ou até 3 dias úteis no boleto), você recebe um email com acesso imediato. \n\nPode assistir do celular, tablet ou computador. Acesso vitalício." },
        { q: "🎯 Funciona mesmo sem entender nada de carro?", a: "SIM! Foi feito EXATAMENTE pra isso. Eu mostro ONDE olhar e O QUE procurar de forma simples, visual, sem termos técnicos complicados. \n\nSe você sabe abrir um capô e passar a mão na lataria, já consegue aplicar 100% do método." },
        { q: "🚗 Funciona pra carros mais baratos, tipo até R$ 30 mil?", a: "Funciona pra QUALQUER faixa de preço! \n\nNa verdade, quanto mais barato o carro, MAIS importante é saber avaliar — porque os riscos são maiores. O método serve de R$ 15 mil até R$ 150 mil. Os princípios são os mesmos." },
        { q: "💬 Tem suporte se eu tiver dúvidas?", a: "Sim! Você tem suporte por email por 30 dias. \n\nE quando a IA Garagem 51 lançar em Janeiro/2026, você vai poder tirar dúvidas específicas sobre modelos na hora, 24 horas por dia. Seus 15 créditos grátis já estão garantidos." },
        { q: "😰 E se eu for muito tímido pra questionar o vendedor?", a: "Por isso existem os SCRIPTS PRONTOS no Bônus #3! Você não precisa inventar nada — só usar as frases que eu já testei. \n\nE sabe o que mais? O checklist impresso já faz o trabalho pesado. Quando o vendedor vê você marcando item por item numa folha, ele JÁ SABE que você entende do assunto." },
        { q: "🔧 Por que você pode ensinar isso melhor que outros?", a: "Porque eu passei por TODOS os lados do mercado automotivo: \n\n• Fui mecânico de oficina (sei consertar)\n• Trabalhei em funilaria (sei identificar batida)\n• Fui perito de seguradora (vi todos os golpes)\n• Fui gerente de concessionária (conheço os vícios)\n• Fui vendedor de carros (sei como agem)\n\nSão 27 anos vendo o mercado de DENTRO. Não é teoria de YouTube." }
    ];

    return (
        <section className="py-20 bg-garage-dark">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-display font-bold text-white text-center mb-10 uppercase">Tire suas últimas dúvidas</h2>
                <div className="space-y-1 bg-slate-800/30 rounded-xl p-2 md:p-6 border border-slate-700">
                    {faqs.map((faq, i) => (<FAQItem key={i} question={faq.q} answer={faq.a} />))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
