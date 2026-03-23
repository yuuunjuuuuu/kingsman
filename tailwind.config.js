/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#fdfbf7", // Warm Paper
                ink: "#1c1917",   // Charcoal
                stone: {
                    50: "#fafaf9",
                    100: "#f5f5f4",
                    200: "#e7e5e4",
                    300: "#d6d3d1",
                    400: "#a8a29e",
                    500: "#78716c",
                    600: "#57534e",
                    700: "#44403c",
                    800: "#292524",
                    900: "#1c1917",
                },
                warm: {
                    50: "#fdfbf7",
                    100: "#f8f4eb",
                    200: "#e8e0d5",
                    300: "#d6cbbd",
                    900: "#4a4036",
                },
                gray: {
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    800: "#1f2937",
                },
                primary: "#44403c",
                secondary: "#d6d3d1",
                accent: "#78716c",
            },
            fontFamily: {
                // All font utilities map to Pretendard for unified Korean/English rendering
                sans: ["Pretendard Variable", "Pretendard", "sans-serif"],
                serif: ["Pretendard Variable", "Pretendard", "sans-serif"],
                brand: ["Pretendard Variable", "Pretendard", "sans-serif"],
                pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
                cormorant: ["Cormorant Garamond", "serif"],
                dancing: ["Dancing Script", "cursive"],
                fancy: ["Pretendard Variable", "Pretendard", "sans-serif"],
                marker: ["Pretendard Variable", "Pretendard", "sans-serif"],
                handwriting: ["Pretendard Variable", "Pretendard", "sans-serif"],
                song: ["Pretendard Variable", "Pretendard", "sans-serif"],
                brush: ["Pretendard Variable", "Pretendard", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #fdfbf7 0%, #f8f4eb 100%)',
                'warm-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 200, 150, 0.15) 0%, transparent 70%)',
            },
        },
    },
    plugins: [],
}
