'use client';

import { AlertTriangle } from 'lucide-react';

const TopBar = () => (
    <div className="bg-garage-red text-white py-2.5 px-4 text-center relative z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-wide">
            <AlertTriangle size={16} className="shrink-0 animate-pulse" />
            <span className="drop-shadow-sm">⚠️ Cada dia sem saber avaliar = R$ 5.000 a R$ 45.000 de prejuízo</span>
        </div>
    </div>
);

export default TopBar;
