import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9] as any, // Cast to any to avoid tuple/array type mismatch
        },
    }),
};

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3 + 0.5, // Stagger after title
            duration: 1,
            ease: "easeOut" as any
        }
    })
};

export default function Vision() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Parallax for images

    // Split text for animation
    const titleText1 = "넥스트 제너레이션 예술가를 위한".split("");
    const titleText2 = "넘버원 액셀러레이팅 플랫폼".split("");

    return (
        <section ref={containerRef} className="py-40 px-6 bg-paper relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse duration-700" />

            <motion.div
                style={{ y }}
                className="max-w-6xl mx-auto z-10 relative"
            >
                <div className="text-center mb-32" ref={titleRef}>
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "1em" }}
                        animate={isTitleInView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="block text-accent font-bold tracking-widest uppercase mb-6 text-sm"
                    >
                        Corporate Vision
                    </motion.span>

                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-ink mb-8 leading-tight tracking-tight">
                        <div className="flex justify-center flex-wrap gap-x-2 md:gap-x-3 text-shimmer">
                            {titleText1.map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={textVariant}
                                    initial="hidden"
                                    animate={isTitleInView ? "visible" : "hidden"}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="flex justify-center flex-wrap gap-x-2 md:gap-x-3 mt-2 text-shimmer">
                            {titleText2.map((char, i) => (
                                <motion.span
                                    key={`line2-${i}`}
                                    custom={i + titleText1.length}
                                    variants={textVariant}
                                    initial="hidden"
                                    animate={isTitleInView ? "visible" : "hidden"}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto font-serif"
                    >
                        문화예술 IP의 발굴부터 수익화까지 리드하는 '예술계의 유니콘'
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        custom={0}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative border border-gray-100 rounded-[3rem] bg-white shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-[32rem]"
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                            <motion.img
                                style={{ y: parallaxY }}
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                alt="Diversification"
                                className="w-full h-[120%] object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out grayscale -mt-10"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                        </div>
                        <div className="relative p-12 h-full flex flex-col justify-end z-10">
                            <span className="absolute top-8 left-8 text-9xl font-brand text-gray-50 opacity-50 group-hover:opacity-100 group-hover:text-blue-50 transition-all duration-500 scale-150 origin-top-left">01</span>

                            <h3 className="text-3xl font-bold text-ink mb-6 font-serif relative">
                                <span className="relative z-10">콘텐츠 포트폴리오의 다각화</span>
                                <span className="absolute bottom-1 left-0 w-0 h-3 bg-blue-100 -z-10 group-hover:w-full transition-all duration-500 delay-100"></span>
                            </h3>
                            <p className="text-gray-600 leading-loose font-medium text-lg">
                                외주 제작(<span className="text-primary font-bold">B2B</span>)과 자체 오리지널 콘텐츠(<span className="text-secondary font-bold">B2C</span>)를 병행하는 하이브리드 비즈니스 모델.<br />
                                안정적인 캐시카우 확보 및 독창적 세계관 확장.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative border border-gray-100 rounded-[3rem] bg-white shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden h-[32rem] mt-0 md:mt-24"
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                            <motion.img
                                style={{ y: parallaxY }}
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                                alt="Digital System"
                                className="w-full h-[120%] object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out grayscale -mt-10"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                        </div>
                        <div className="relative p-12 h-full flex flex-col justify-end z-10">
                            <span className="absolute top-8 left-8 text-9xl font-brand text-gray-50 opacity-50 group-hover:opacity-100 group-hover:text-purple-50 transition-all duration-500 scale-150 origin-top-left">02</span>

                            <h3 className="text-3xl font-bold text-ink mb-6 font-serif relative">
                                <span className="relative z-10">예술 시장의 디지털 및 시스템 전환</span>
                                <span className="absolute bottom-1 left-0 w-0 h-3 bg-purple-100 -z-10 group-hover:w-full transition-all duration-500 delay-100"></span>
                            </h3>
                            <p className="text-gray-600 leading-loose font-medium text-lg">
                                '진입 장벽' 문제를 커뮤니티 기반의 협업 시스템으로 해결.<br />
                                예술계의 새로운 <span className="text-accent text-2xl">표준(Standard)</span>을 제시합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div >
        </section >
    );
}
