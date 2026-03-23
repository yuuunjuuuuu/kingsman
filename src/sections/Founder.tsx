import { motion } from 'framer-motion';

export default function Founder() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-paper border-t border-stone-200" id="ceo">
            <div className="max-w-4xl mx-auto">


                {/* ── History ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-32"
                >
                    {/* Section Label */}
                    <span className="block text-stone-400 font-pretendard font-semibold tracking-[0.2em] uppercase mb-8 text-xs">
                        History
                    </span>

                    {/* Brand Tagline */}
                    <p className="text-xl md:text-2xl font-pretendard font-semibold text-ink mb-10 leading-relaxed">
                        "To bring art closer to life."
                    </p>

                    {/* Main Intro Block */}
                    <div className="space-y-5 text-stone-600 font-pretendard text-base md:text-lg leading-[1.9] break-keep">
                        <p className="text-stone-700 font-pretendard font-medium">
                            예술은 일부의 특권이 아니라,<br />
                            모두의 가능성이다.
                        </p>


                        <p>
                            문득 마음 한구석이 텅 빈 것처럼 느껴질 때<br />
                            익숙한 일상 속에서 '나, 지금 뭐 하고 싶지?'라는 질문이 스친다면
                        </p>

                        <p>
                            폐쇄적인 예술 네트워크로부터의 탈출에서 출발한 아르떼펄스는,<br className="hidden md:block" />
                            사람과 예술을 이어주는 맥박처럼 지속가능하고 알찬 아트 클래스를 만들어내는 창작소입니다.
                        </p>

                        <p>
                            실력 넘치는 5가지 분야의 크리에이터들이 만들 아르테펄스만의 다양한 콘텐츠를 기대해 주세요.
                        </p>

                        <p className="text-ink font-pretendard font-semibold pt-2">
                            내 안의 '언젠가'를 '지금'으로 바꾸는 곳, 아르떼펄스
                        </p>
                    </div>

                    {/* Founder Name */}
                    <div className="mt-12 flex items-baseline gap-3">
                        <h2 className="text-3xl md:text-4xl font-pretendard font-bold text-ink">
                            송진영
                        </h2>
                        <span className="text-stone-500 font-pretendard text-base">대표</span>
                    </div>
                </motion.div>

                {/* ── Divider ── */}
                <div className="border-t border-stone-200 mb-20 md:mb-32" />

                {/* ── Collaboration / Contact ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Tagline */}
                    <p className="text-xl md:text-2xl font-pretendard font-semibold text-ink mb-8 leading-relaxed">
                        Arte Pulse connects.
                    </p>

                    <div className="space-y-5 text-stone-600 font-pretendard text-base md:text-lg leading-[1.9] break-keep mb-12">
                        <p className="font-pretendard font-medium text-stone-700">
                            당신의 브랜드에 예술의 맥박을 더하세요
                        </p>
                        <p>
                            5가지 분야의 전문 크리에이터 그룹이 귀사의 가치를
                            대중에게 더 매력적으로 전달합니다.
                        </p>
                        <p>
                            새로운 가능성을 함께 설계할 기업의 연락을 기다립니다.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center">
                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-pretendard font-semibold tracking-widest uppercase text-stone-400 mb-1">
                                Email
                            </span>
                            <a
                                href="mailto:artepulse.official@gmail.com"
                                className="font-pretendard text-ink text-base hover:text-stone-500 transition-colors border-b border-stone-300 hover:border-stone-500 pb-0.5"
                            >
                                artepulse.official@gmail.com
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-pretendard font-semibold tracking-widest uppercase text-stone-400 mb-1">
                                Instagram
                            </span>
                            <a
                                href="https://www.instagram.com/arete_pulse?igsh=MWdvOHZhMzZtemJ2YQ%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-pretendard text-ink text-base hover:text-stone-500 transition-colors border-b border-stone-300 hover:border-stone-500 pb-0.5"
                            >
                                @arete_pulse
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
