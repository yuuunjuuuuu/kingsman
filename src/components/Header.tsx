import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo_final_v3.png';

const NAV_ITEMS = ['소개', 'Shop', '프로그램', '공지사항'];
const NAV_PATHS = ['/intro', '/shop', '/program', '/notice'];

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useState(() => {
        if (typeof window !== 'undefined') {
            if (location.pathname !== '/') {
                setHidden(false);
                setScrolled(true);
            } else {
                const isTop = window.scrollY < 140;
                setHidden(isTop);
                setScrolled(!isTop);
            }
        }
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (location.pathname !== '/') {
            setHidden(false);
            setScrolled(true);
            return;
        }
        const previous = scrollY.getPrevious() ?? 0;
        if (latest < 140) {
            setHidden(true);
            setScrolled(false);
            return;
        }
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const handleNav = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
        setMobileOpen(false);
    };

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleNav('/')}
                    >
                        <img
                            src={logo}
                            alt="ArtePulse Logo"
                            className="h-24 md:h-32 w-auto object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const span = e.currentTarget.parentElement!.querySelector('span');
                                if (span) span.style.display = 'block';
                            }}
                        />
                        <span className="hidden text-xl font-black tracking-tighter text-ink">ARTEPULSE</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {NAV_ITEMS.map((item, index) => (
                            <button
                                key={item}
                                onClick={() => handleNav(NAV_PATHS[index])}
                                className={`text-sm font-sans font-semibold transition-colors tracking-widest ${location.pathname === NAV_PATHS[index]
                                    ? 'text-ink border-b-2 border-ink'
                                    : 'text-gray-500 hover:text-ink'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNav('/contact')}
                            className="px-5 py-2 rounded-full bg-ink text-white text-sm font-sans font-semibold hover:bg-stone-700 transition-colors"
                        >
                            문의하기
                        </button>
                    </nav>

                    {/* Mobile Hamburger — hidden on mobile here; the floating button below handles it */}
                    <div className="md:hidden w-10 h-10" />
                </div>
            </motion.header>

            {/* ── Floating Mobile Hamburger (always visible) ── */}
            <button
                className="md:hidden fixed top-4 right-4 z-[60] w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-md text-ink"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="메뉴 열기/닫기"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    {mobileOpen
                        ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    }
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
                    >
                        {/* Close button at top right */}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-5 right-5 text-ink p-2"
                            aria-label="메뉴 닫기"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {NAV_ITEMS.map((item, index) => (
                            <button
                                key={item}
                                onClick={() => handleNav(NAV_PATHS[index])}
                                className={`text-2xl font-sans font-semibold tracking-wider transition-colors ${location.pathname === NAV_PATHS[index]
                                    ? 'text-ink'
                                    : 'text-stone-500 hover:text-ink'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNav('/contact')}
                            className="mt-4 px-8 py-3 rounded-full bg-ink text-white text-lg font-sans font-semibold hover:bg-stone-700 transition-colors"
                        >
                            문의하기
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
