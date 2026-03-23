import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_final_v3.png';
import babysBreath from '../assets/babys_breath.jpg';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen w-full bg-paper overflow-x-hidden flex flex-col" id="hero">

            {/* ── Desktop Grid Lines ── */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
                <div className="absolute left-[15%] top-0 h-full border-r border-stone-200" />
                <div className="absolute right-[15%] top-0 h-full border-l border-stone-200" />
                <div className="absolute top-[140px] left-0 w-full border-b border-stone-200" />
                <div className="absolute bottom-[60px] left-0 w-full border-t border-stone-200" />
            </div>

            {/* ── Desktop Layout ── */}
            <div className="relative z-10 w-full h-full flex-1 hidden md:flex flex-row">

                {/* Left Sidebar */}
                <div className="flex flex-col w-[15%] h-full text-center">
                    <div className="h-[140px] flex items-center justify-center p-4">
                        <img src={logo} alt="Logo" className="h-10 w-auto opacity-80" />
                    </div>
                    <div className="flex-1" />
                    <div className="h-[60px]" />
                </div>

                {/* Center */}
                <div className="flex-1 flex flex-col">
                    {/* Top Nav */}
                    <div className="h-[140px] flex items-center justify-end px-12 gap-24">
                        {['소개', 'Shop', '프로그램', '공지사항'].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    const paths = ['/intro', '/shop', '/program', '/notice'];
                                    navigate(paths[index]);
                                    window.scrollTo(0, 0);
                                }}
                                className="text-sm font-sans font-semibold text-ink hover:text-stone-500 transition-colors tracking-widest"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Main Content — title overlaps image by ~30% */}
                    <div className="flex-1 flex flex-col items-center justify-center relative px-12 pt-20">

                        {/* Overlapping wrapper: image + floating title */}
                        <div className="relative w-full max-w-sm md:max-w-md flex flex-col items-center">

                            {/* Arch Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full aspect-[3/4]"
                            >
                                <div className="w-full h-full rounded-t-[12rem] overflow-hidden shadow-2xl bg-stone-100">
                                    <img
                                        src={babysBreath}
                                        alt="Baby's Breath"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>

                            {/* Title — floats above, overlapping top ~30% of image */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute top-0 inset-x-0 flex justify-center pointer-events-none z-10"
                                style={{ transform: 'translateY(-55%)' }}
                            >
                                <h1 className="font-dancing font-bold text-8xl md:text-[11rem] text-ink tracking-wide select-none leading-none drop-shadow-sm whitespace-nowrap">
                                    Artepulse
                                </h1>
                            </motion.div>

                        </div>
                    </div>

                    <div className="h-[60px]" />
                </div>

                {/* Right Sidebar */}
                <div className="flex flex-col w-[15%] h-full text-center">
                    <div className="h-[140px]" />
                    <div className="flex-1" />
                    <div className="h-[60px]" />
                </div>
            </div>

            {/* ── Mobile Layout ── */}
            <div className="md:hidden flex flex-col min-h-screen items-center justify-center px-6 pt-20 pb-12 text-center gap-0">

                {/* Overlapping wrapper for mobile */}
                <div className="relative w-full max-w-xs flex flex-col items-center mt-24">

                    {/* Arch Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full aspect-[3/4] rounded-t-[50%] overflow-hidden shadow-2xl"
                    >
                        <img
                            src={babysBreath}
                            alt="Brand Mood"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Title overlapping top of image */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-0 inset-x-0 flex justify-center pointer-events-none z-10"
                        style={{ transform: 'translateY(-55%)' }}
                    >
                        <h1 className="font-dancing font-bold text-8xl text-ink tracking-wide leading-none drop-shadow-sm whitespace-nowrap">
                            Artepulse
                        </h1>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-sans text-stone-500 text-sm tracking-widest mt-8"
                >
                    예술의 맥박을 느끼세요
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-4 mt-6"
                >
                    {['소개', 'Shop', '프로그램', '공지사항'].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const paths = ['/intro', '/shop', '/program', '/notice'];
                                navigate(paths[index]);
                                window.scrollTo(0, 0);
                            }}
                            className="px-4 py-2 border border-stone-300 rounded-full text-sm font-sans text-stone-600 hover:bg-ink hover:text-white hover:border-ink transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
