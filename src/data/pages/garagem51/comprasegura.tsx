'use client';

import { Tenant } from '@/data/tenants';

// Import all sections in order
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import PainPoints from './components/PainPoints';
import VillainReveal from './components/VillainReveal';
import Steps from './components/Steps';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import AISection from './components/AISection';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import Authority from './components/Authority';
import Decision from './components/Decision';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

interface CompraSeguraProps {
    tenant: Tenant;
    slug: string;
}

export default function CompraSegura({ tenant }: CompraSeguraProps) {
    return (
        <div className="min-h-screen bg-garage-dark text-slate-100 font-sans overflow-x-hidden">
            <TopBar />
            <Hero />
            <SocialProof />
            <PainPoints />
            <VillainReveal />
            <Steps />
            <Modules />
            <Bonuses />
            <AISection />
            <Audience />
            <div id="pricing-anchor">
                <Pricing />
            </div>
            <Authority />
            <Decision />
            <Pricing isRepeated />
            <FAQ />
            <Footer />
            <StickyCTA />
        </div>
    );
}
