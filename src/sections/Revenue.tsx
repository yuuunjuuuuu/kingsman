import { motion } from 'framer-motion';

export default function Revenue() {
    return (
        <section className="py-40 px-6 bg-paper">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-ink mb-4">Business Structure</h2>
                    <p className="text-xl text-gray-500 font-medium">지속 가능한 예술 생태계를 위한 수익 모델</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 1: Co-Creation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2 p-12 rounded-[2.5rem] bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-2">Co-Creation & Lean Project</h3>
                        <p className="text-gray-400 font-bold mb-8 uppercase tracking-wider">B2B Outsourcing</p>
                        <div className="space-y-6 text-gray-700 font-medium">
                            <p>
                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded md:inline-block mr-2 text-sm font-bold">전략</span>
                                개별로는 따낼 수 없는 프로젝트를 '아르떼펄스' 법인 격을 활용해 수주하고, 참여 아티스트들이 수익과 커리어를 공유합니다.
                            </p>
                            <p>
                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded md:inline-block mr-2 text-sm font-bold">효과</span>
                                기업은 고정비 부담 없이 프로젝트를 수행하며, 아티스트는 실무 레퍼런스를 확보합니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: IP Aggregator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 p-12 rounded-[2.5rem] bg-gray-50 hover:bg-white border border-gray-100 hover:border-pink-200 transition-all shadow-sm hover:shadow-xl"
                    >
                        <h3 className="text-3xl font-bold text-secondary mb-2">IP Aggregator</h3>
                        <p className="text-gray-400 font-bold mb-8 uppercase tracking-wider">Original Content</p>
                        <div className="space-y-6 text-gray-700 font-medium">
                            <p>
                                아티스트의 고유 콘텐츠(그림, 음악 등)를 공동 소유하거나 매니지먼트하여 유튜브, 전시, 굿즈 등으로 수익화합니다.
                            </p>
                            <p>단순 홍보를 넘어 '수익 모델의 프로토타입'을 함께 만듭니다.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: COP */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 lg:col-span-3 p-12 rounded-[2.5rem] bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="relative z-10 max-w-4xl">
                            <h3 className="text-3xl font-bold text-white mb-2">Knowledge Sharing Community (COP)</h3>
                            <p className="text-white/60 font-bold mb-8 uppercase tracking-wider">Workshop Business</p>
                            <p className="text-lg text-white/90 leading-relaxed font-medium">
                                기획자, 연출가, 작가가 서로 공유하며 오리지널 콘텐츠를 완성해가는 '워크숍' 형태의 비즈니스.<br />
                                제작 과정 자체를 콘텐츠화(메이킹 필름, 기록지)하여 또 하나의 수익원으로 창출합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
