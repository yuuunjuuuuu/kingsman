import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.85, 1], [0, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-paper">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
                {/* Title */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute top-24 text-center z-10"
                >
                    <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Corporate Philosophy</span>
                    <h2 className="text-3xl md:text-5xl font-black text-ink leading-tight">
                        예술적 가치의 민주화와<br />
                        지속 가능한 창작 생태계 조성
                    </h2>
                </motion.div>

                {/* Content Blocks */}
                <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                    {/* Inclusivity */}
                    <motion.div style={{ opacity: opacity1 }} className="absolute text-center bg-white/90 p-12 md:p-16 rounded-[2rem] backdrop-blur-md border border-warm-100 shadow-2xl max-w-2xl">
                        <h3 className="text-4xl md:text-6xl font-brand text-ink mb-8 tracking-[0.1em]">Inclusivity</h3>
                        <p className="text-lg md:text-xl text-gray-500 leading-loose font-serif italic break-keep">
                            혈연, 지연, 학벌 중심의 폐쇄적인 예술 네트워크를 타파하고,<br />
                            오직 <span className="text-ink font-bold not-italic font-sans border-b border-warm-300 mx-1">'실력'</span>과 <span className="text-ink font-bold not-italic font-sans border-b border-warm-300 mx-1">'콘텐츠'</span>만으로 평가받는<br />
                            공정한 진입로를 구축합니다.
                        </p>
                    </motion.div>

                    {/* Creator Economy */}
                    <motion.div style={{ opacity: opacity2 }} className="absolute text-center bg-white/90 p-12 md:p-16 rounded-[2rem] backdrop-blur-md border border-warm-100 shadow-2xl max-w-2xl">
                        <h3 className="text-4xl md:text-6xl font-brand text-ink mb-8 tracking-[0.1em]">Creator Economy</h3>
                        <p className="text-lg md:text-xl text-gray-500 leading-loose font-serif italic break-keep">
                            1인 예술가가 단순한 창작자를 넘어<br />
                            하나의 기업(<span className="text-secondary font-bold not-italic font-sans">Solopreneur</span>)으로 성장할 수 있도록<br />
                            비즈니스 인프라를 제공합니다.
                        </p>
                    </motion.div>

                    {/* Cultural Bridge */}
                    <motion.div style={{ opacity: opacity3 }} className="absolute text-center bg-white/90 p-12 md:p-16 rounded-[2rem] backdrop-blur-md border border-warm-100 shadow-2xl max-w-2xl">
                        <h3 className="text-4xl md:text-6xl font-brand text-ink mb-8 tracking-[0.1em]">Cultural Bridge</h3>
                        <p className="text-lg md:text-xl text-gray-500 leading-loose font-serif italic break-keep">
                            고답적인 예술 형식을 현대적 감각으로 재해석하여,<br />
                            대중이 일상에서 소비할 수 있는<br />
                            <span className="text-accent font-bold not-italic font-sans border-b border-accent/20">고부가가치 콘텐츠</span>를 공급합니다.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
