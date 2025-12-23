import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            colors: {
                garage: {
                    dark: '#0f1419', // Dark Graphite
                    red: '#e63946',  // Urgency
                    gold: '#f4a426', // Premium/Warning
                    green: '#2ecc71', // Success
                    gray: '#1e293b',
                },
            },
        },
    },
    plugins: [],
};

export default config;
