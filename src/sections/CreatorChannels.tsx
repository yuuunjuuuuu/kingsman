import { motion } from 'framer-motion';

const channels = [
    {
        id: "snap",
        title: "Snap & Photo",
        subtitle: "Capture the Moment",
        desc: "감각적인 시선으로 일상을 포착하는 포토그래퍼들의 갤러리",
        color: "group-hover:shadow-blue-500/30",
        textAccent: "text-blue-900",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2238&auto=format&fit=crop"
    },
    {
        id: "food",
        title: "Food Styling",
        subtitle: "Taste of Art",
        desc: "테이블 위에서 피어나는 예술, 푸드 스타일리스트들의 공간",
        color: "group-hover:shadow-orange-500/30",
        textAccent: "text-orange-900",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "craft",
        title: "Craft & Atlier",
        subtitle: "Handmade Soul",
        desc: "도예, 가죽, 공예 등 장인정신이 깃든 핸드메이드 작품",
        color: "group-hover:shadow-amber-700/30",
        textAccent: "text-amber-900",
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop"
    },
    {
        id: "vocal",
        title: "Vocal & Music",
        subtitle: "Voice of Heart",
        desc: "마음을 움직이는 목소리, 보컬리스트들의 라이브 채널",
        color: "group-hover:shadow-purple-500/30",
        textAccent: "text-purple-900",
        image: "" // No image needed
    },
    {
        id: "publishing",
        title: "Publishing",
        subtitle: "Forest of Text",
        desc: "독립출판, 에세이, 시. 작가들의 내면을 담은 텍스트의 향연",
        color: "group-hover:shadow-emerald-500/30",
        textAccent: "text-emerald-900",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2428&auto=format&fit=crop"
    }
];

export default function CreatorChannels() {
    return (
        <section className="py-20 md:py-32 px-6 bg-warm-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="font-serif italic text-2xl text-warm-900 opacity-60 block mb-2">Curated by ArtePulse</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-ink mb-6">Creator Channels</h2>
                    <div className="w-24 h-[1px] bg-ink mx-auto opacity-20"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-10">
                    {channels.map((channel, index) => (
                        <motion.div
                            key={channel.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`col-span-1 md:col-span-12 lg:col-span-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 group`}
                        >
                            {/* Image/Visual Section */}
                            <div className="w-full md:w-3/5 relative transform transition-transform duration-700 group-hover:scale-[1.02]">
                                <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />

                                {/* Decorative Frame */}
                                <div className="absolute -inset-4 border border-warm-200/50 rounded-sm z-0 hidden md:block" />

                                <div className={`relative aspect-[16/9] md:aspect-[21/9] overflow-hidden shadow-xl transition-shadow duration-500 ${channel.color} bg-gray-100`}>

                                    {/* Render Content Based on Category */}
                                    {channel.id === 'vocal' ? (
                                        <div className="w-full h-full bg-black flex items-center justify-center gap-2">
                                            {[...Array(20)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                                                    initial={{ height: 10 }}
                                                    animate={{
                                                        height: [15, 30 + Math.random() * 50, 15],
                                                        opacity: [0.5, 1, 0.5]
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        repeat: Infinity,
                                                        repeatType: "mirror",
                                                        delay: i * 0.05,
                                                        ease: "easeInOut"
                                                    }}
                                                    style={{ height: 20 }}
                                                />
                                            ))}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <span className="text-white/20 font-black text-6xl tracking-widest uppercase blur-[2px] group-hover:blur-0 group-hover:text-white transition-all duration-500">MUSIC ON</span>
                                            </div>
                                        </div>

                                    ) : channel.id === 'snap' ? (
                                        // Snap: Viewfinder Effect
                                        <div className="relative w-full h-full">
                                            <img src={channel.image} alt={channel.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                                            <div className="absolute inset-4 border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between flex-col">
                                                <div className="flex justify-between p-2">
                                                    <span className="text-white text-xs font-mono">REC</span>
                                                    <span className="text-white text-xs font-mono">ISO 800</span>
                                                </div>
                                                <div className="flex justify-center items-center h-full">
                                                    <div className="w-12 h-12 border border-white/80 rounded-full" />
                                                </div>
                                                <div className="flex justify-between p-2">
                                                    <span className="text-white text-xs font-mono">F 2.8</span>
                                                    <span className="text-white text-xs font-mono">1/500</span>
                                                </div>
                                            </div>
                                        </div>

                                    ) : channel.id === 'food' ? (
                                        // Food: Warm Glow & Sparkles
                                        <div className="relative w-full h-full overflow-hidden">
                                            <img src={channel.image} alt={channel.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                            {/* Simple CSS Sparkles (Dots) */}
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div key={i} className="absolute bg-white rounded-full w-1 h-1 shadow-[0_0_10px_white]"
                                                    initial={{ opacity: 0, y: 0 }}
                                                    whileHover={{ opacity: [0, 1, 0], y: -50 }} // This acts weird inside map, let's use variants on parent hover
                                                    animate={{ opacity: [0, 0.8, 0], y: [0, -30], x: [0, Math.random() * 20 - 10] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                    style={{ left: `${20 + Math.random() * 60}%`, top: `${60 + Math.random() * 20}%` }}
                                                />
                                            ))}
                                        </div>

                                    ) : channel.id === 'craft' ? (
                                        // Craft: Golden Frame Draw
                                        <div className="relative w-full h-full">
                                            <img src={channel.image} alt={channel.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                                            <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] pointer-events-none overflow-visible">
                                                <motion.rect
                                                    width="100%" height="100%"
                                                    fill="none"
                                                    stroke="rgba(255,215,0,0.8)"
                                                    strokeWidth="1"
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    whileInView={{ pathLength: 0 }} // Reset
                                                    animate={{ pathLength: 1, opacity: 1 }} // We want this on hover
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                    // Controlling via CSS classes is hard with framer pathLength, simulating via opacity/group hover
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                />
                                                {/* Fallback simple border for easier hover effect if framer path animation is tricky on hover state without dedicated component */}
                                                <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="rgba(217, 119, 6, 0.6)" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-all duration-1000 origin-center scale-95 group-hover:scale-100" />
                                            </svg>
                                        </div>

                                    ) : channel.id === 'publishing' ? (
                                        // Publishing: Floating Text
                                        <div className="relative w-full h-full">
                                            <img src={channel.image} alt={channel.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:blur-[2px]" />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                {['Essays', 'Poetry', 'Thoughts'].map((word, i) => (
                                                    <motion.span
                                                        key={word}
                                                        className="text-white font-serif text-2xl md:text-3xl italic drop-shadow-lg"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        whileInView={{ y: 0, opacity: 1 }} // Trigger on hover is handled by css parent mostly, but here we animate continuously
                                                        animate={{ y: [0, -5, 0] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                                    >
                                                        "{word}"
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <img src={channel.image} alt={channel.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                                    )}

                                </div>
                            </div>

                            {/* Text Section (Unchanged) */}
                            <div className="w-full md:w-2/5 text-center md:text-left relative z-10 px-4">
                                <div className="overflow-hidden mb-2">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${channel.textAccent}`}
                                    >
                                        {channel.subtitle}
                                    </motion.span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-serif text-ink mb-6 leading-tight group-hover:italic transition-all duration-300">
                                    {channel.title}
                                </h3>

                                <p className="text-lg text-gray-500 font-light leading-relaxed break-keep font-sans opacity-80 group-hover:opacity-100 transition-opacity">
                                    {channel.desc}
                                </p>

                                {/* Sparkling Divider */}
                                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-warm-900 to-transparent opacity-30 mt-8 mx-auto md:mx-0 group-hover:w-24 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
