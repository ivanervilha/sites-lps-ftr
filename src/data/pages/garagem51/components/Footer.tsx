'use client';

import { Shield, ShieldCheck } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-950 pt-16 pb-24 md:pb-8 border-t border-slate-900">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-slate-900 border border-garage-green/30 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <Shield className="text-garage-green w-16 h-16 shrink-0" />
                <div>
                    <h4 className="text-xl font-display font-bold text-white uppercase mb-2">Garantia Incondicional de 7 Dias</h4>
                    <p className="text-slate-400 text-sm">Se em 7 dias você achar que o conteúdo não vale o investimento, é só pedir reembolso. O risco é todo meu.</p>
                </div>
            </div>
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-6">Não deixe seu próximo carro virar pesadelo</h3>
                <div className="text-slate-400 text-lg mb-8 space-y-2">
                    <p>27 anos de experiência em 1 hora de vídeo.</p>
                    <p>Checklist pra usar na hora.</p>
                    <p className="text-white font-bold">E em Janeiro/2026, o Eloir no seu bolso com a IA Garagem 51.</p>
                    <p>Garantia de 7 dias.</p>
                </div>
                <a href="https://pay.hotmart.com/S103327101R?sck=HOTMART_PRODUCT_PAGE&off=axxej2qv&hotfeature=32&bid=1766460571234" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-garage-dark transition-all duration-200 bg-garage-green font-display uppercase tracking-wider rounded shadow-lg hover:bg-green-600 hover:-translate-y-1 gap-2">
                    QUERO O COMPRA SEGURA POR R$ 67
                    <ShieldCheck size={20} />
                </a>
            </div>
            <div className="text-center border-t border-slate-900 pt-8">
                <h3 className="font-display text-2xl font-bold text-white mb-2">GARAGEM 51</h3>
                <p className="text-slate-500 italic mb-8">&quot;27 anos de garagem. Pra você.&quot;</p>
                <div className="text-xs text-slate-700 space-y-2">
                    <p>&copy; 2025 Garagem 51. Todos os direitos reservados.</p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="hover:text-slate-500">Política de Privacidade</a>
                        <a href="#" className="hover:text-slate-500">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
