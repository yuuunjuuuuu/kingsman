import { motion } from 'framer-motion';



export default function Values() {
    return (
        <section className="pt-52 pb-24 px-6 bg-stone-50" id="history">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                {/* Content */}
                <div className="space-y-40">
                    {/* Philosophy & Vision Container */}
                    <div className="space-y-32 relative">
                        {/* Decorative Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent -ml-px hidden md:block opacity-30"></div>

                        {/* Philosophy */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center relative z-10"
                        >
                            <div className="inline-block relative mb-8">
                                <span className="relative z-10 text-ink font-bold tracking-[0.1em] text-lg md:text-xl bg-stone-50 px-4">
                                    ◆ 아르떼펄스 이념
                                </span>
                                <div className="absolute top-1/2 left-0 w-full h-px bg-stone-300 -z-0"></div>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold text-ink mb-8 leading-tight break-keep">
                                "예술적 가치의 민주화,<br />
                                <span className="block mt-3">지속 가능한 창작 생태계"</span>
                            </h3>
                            <p className="text-stone-600 leading-relaxed text-lg md:text-xl break-keep max-w-2xl mx-auto">
                                아르떼펄스는 파편화된 예술 시장의 비효율을 개선하고,<br className="hidden md:block" />
                                누구나 <span className="font-semibold text-ink">'예술가'</span>로서 자립할 수 있는 기틀을 마련하는 것을 목표로 합니다.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center relative z-10"
                        >
                            <div className="inline-block relative mb-8">
                                <span className="relative z-10 text-ink font-bold tracking-[0.1em] text-lg md:text-xl bg-stone-50 px-4">
                                    ◆ 아르떼펄스 비전
                                </span>
                                <div className="absolute top-1/2 left-0 w-full h-px bg-stone-300 -z-0"></div>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold text-ink mb-8 leading-tight break-keep">
                                "넥스트 제너레이션<br />
                                <span className="block mt-3">No.1 액셀러레이팅 플랫폼"</span>
                            </h3>
                            <p className="text-stone-600 leading-relaxed text-lg md:text-xl break-keep max-w-2xl mx-auto">
                                단순한 기획사를 넘어, 문화예술 IP의 발굴부터 수익화까지<br className="hidden md:block" />
                                전 과정을 리드하는 <span className="font-semibold text-ink">'예술계의 유니콘'</span>을 지향합니다.
                            </p>
                        </motion.div>
                    </div>

                    {/* Core Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Removed English Background Text 'VALUES' */}

                        <div className="text-center mb-16 relative z-10">
                            <div className="inline-block relative mb-8">
                                <span className="relative z-10 text-ink font-bold tracking-[0.1em] uppercase text-lg md:text-xl bg-stone-50 px-4">
                                    ◆ 아르떼펄스 가치
                                </span>
                                <div className="absolute top-1/2 left-0 w-full h-px bg-stone-300 -z-0"></div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Agility */}
                            <div className="group bg-white p-10 rounded-xl border border-stone-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <h4 className="text-2xl font-bold text-ink mb-4 text-center">Agility</h4>
                                <p className="text-stone-500 leading-relaxed text-center break-keep">
                                    시장의 흐름에 민감하게 반응하여<br />
                                    트렌디한 예술 콘텐츠를<br />
                                    신속하게 기획하고 공급합니다.
                                </p>
                            </div>

                            {/* Synergy */}
                            <div className="group bg-white p-10 rounded-xl border border-stone-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <h4 className="text-2xl font-bold text-ink mb-4 text-center">Synergy</h4>
                                <p className="text-stone-500 leading-relaxed text-center break-keep">
                                    1인 크리에이터들의 재능을 결합하여<br />
                                    대형 기획사 이상의 퍼포먼스를 창출하는<br />
                                    강력한 조직력을 발휘합니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
