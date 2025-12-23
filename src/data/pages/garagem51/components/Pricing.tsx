'use client';

import { Check, ShieldCheck, Lock } from 'lucide-react';

interface PricingProps {
    isRepeated?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isRepeated }) => (
    <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
            {!isRepeated && (
                <div className="max-w-md mx-auto mb-10 text-slate-400 text-sm md:text-base">
                    <h3 className="text-center font-display font-bold text-xl text-white mb-4 uppercase">Quanto vale tudo isso?</h3>
                    <div className="space-y-2 mb-6 px-6 py-4 bg-slate-800 rounded-lg">
                        <div className="flex justify-between"><span>Curso completo</span> <span className="line-through">R$ 197</span></div>
                        <div className="flex justify-between"><span>Checklist profissional</span> <span className="line-through">R$ 47</span></div>
                        <div className="flex justify-between"><span>Guia dos 10 golpes</span> <span className="line-through">R$ 47</span></div>
                        <div className="flex justify-between"><span>Scripts de negociação</span> <span className="line-through">R$ 67</span></div>
                        <div className="flex justify-between"><span>IA Garagem 51 (Acesso Antecipado)</span> <span className="line-through">R$ 49</span></div>
                        <div className="border-t border-slate-600 pt-2 flex justify-between font-bold text-white"><span>TOTAL</span> <span className="line-through">R$ 504</span></div>
                    </div>
                    <p className="text-center text-lg text-white">Mas você NÃO vai pagar R$ 504...</p>
                </div>
            )}
            <div className="max-w-lg mx-auto bg-white text-slate-900 rounded-xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 bg-garage-red text-white text-xs font-bold px-3 py-1 uppercase rounded-bl-lg z-10">Oferta Especial</div>
                <div className="bg-slate-100 p-6 border-b border-slate-200 text-center">
                    <h3 className="font-display font-bold text-3xl uppercase text-garage-dark">Compra Segura</h3>
                    <p className="text-slate-500">Acesso Vitalício + Bônus</p>
                </div>
                <div className="p-8 text-center bg-white">
                    <div className="text-slate-400 text-lg line-through mb-2">De R$ 504</div>
                    <div className="flex justify-center items-end gap-1 mb-2">
                        <span className="text-xl font-bold text-slate-700 mb-2">Por apenas</span>
                        <span className="text-6xl font-display font-bold text-garage-green">67</span>
                    </div>
                    <div className="text-slate-500 font-medium mb-8">ou 12x de <span className="font-bold text-slate-900">R$ 6,70</span></div>
                    <a href="https://pay.hotmart.com/S103327101R" className="w-full bg-garage-green hover:bg-green-600 text-garage-dark font-bold text-xl py-4 rounded shadow-lg transform hover:-translate-y-1 transition-all uppercase font-display flex items-center justify-center gap-2">
                        Sim, Quero Comprar com Segurança
                        <ShieldCheck size={24} />
                    </a>
                    <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Lock size={12} /> Compra 100% Segura</span>
                        <span className="flex items-center gap-1"><Check size={12} /> Entrega Imediata</span>
                        <span className="flex items-center gap-1"><Check size={12} /> 🤖 IA incluída</span>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-200">
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-center gap-2"><Check className="text-garage-green" size={16} /> Método de 27 anos de experiência</li>
                        <li className="flex items-center gap-2"><Check className="text-garage-green" size={16} /> Checklist para usar na hora</li>
                        <li className="flex items-center gap-2"><Check className="text-garage-green" size={16} /> IA Garagem 51 (lança Jan/26)</li>
                        <li className="flex items-center gap-2"><Check className="text-garage-green" size={16} /> Garantia de 7 dias sem risco</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default Pricing;
