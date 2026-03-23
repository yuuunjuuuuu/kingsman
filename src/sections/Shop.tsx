import { motion } from 'framer-motion';
import bookGiyoul from '../assets/book_giyoul.png';
import bookOhu from '../assets/book_ohu.png';

const books = [
    {
        id: 1,
        image: bookGiyoul,
        label: 'ESSAY · 에세이',
        title: '기울어진 계절을 걷는 법',
        author: '서진 지음',
        desc: '다정함이 생략된 문장들 사이로 비로소 선명해지는 삶의 윤곽.\n삶이 조금 기울었다고 해서 걷는 일 자체가 멈추는 것은 아니었다.',
        reverse: false,
        soldOut: true,
    },
    {
        id: 2,
        image: bookOhu,
        label: 'ESSAY · 에세이',
        title: '오후 세 시의 안부',
        author: '이권선 에세이집',
        desc: '아무도 묻지 않는 시간, 스스로에게 건네는 조용한 안부.\n하루 중 가장 한가롭고, 가장 솔직해지는 그 순간의 기록.',
        reverse: true,
        soldOut: true,
    },
];

export default function Shop() {
    return (
        <section className="pt-40 pb-24 px-4 md:px-6 bg-paper border-t border-stone-200" id="shop">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="block text-stone-400 font-sans font-semibold tracking-[0.2em] uppercase mb-4 text-xs">COLLECTION</span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-ink mb-4">Shop</h2>
                    <p className="text-base text-stone-500 font-sans">당신의 감각을 채울 특별한 큐레이션.</p>
                </motion.div>

                <div className="flex flex-col gap-24 md:gap-36">

                    {/* ── Coming Soon Book ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    >
                        <div className="w-full max-w-xs md:w-5/12 flex-shrink-0">
                            <div className="relative aspect-[3/4] rounded-sm shadow-2xl overflow-hidden bg-stone-50 border border-stone-100">
                                {/* Paper texture */}
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
                                />
                                {/* Design elements */}
                                <div className="absolute inset-x-0 top-[20%] h-px bg-stone-200" />
                                <div className="absolute inset-x-0 bottom-[20%] h-px bg-stone-200" />
                                <div className="absolute left-[15%] inset-y-0 w-px bg-stone-200" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-stone-300 tracking-tighter leading-tight mb-4">
                                        곧 새로운 이야기가<br />찾아옵니다
                                    </h3>
                                    <div className="w-8 h-px bg-stone-200 mb-4" />
                                    <p className="text-[10px] tracking-[0.4em] text-stone-300 uppercase font-sans">Coming Soon</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 text-center md:text-left">
                            <span className="text-ink font-sans font-semibold tracking-widest text-xs uppercase mb-4 block underline decoration-stone-200 decoration-2 underline-offset-8">COMING SOON</span>
                            <h3 className="text-2xl md:text-3xl font-sans font-bold text-ink mb-3 break-keep leading-snug">
                                준비 중인 세 번째 도서
                            </h3>
                            <p className="text-stone-600 font-sans text-sm mb-6 pb-2 border-b border-stone-100 inline-block uppercase tracking-wider">2026 COLLECTION · PRE-SEASON TEASER</p>
                            <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed break-keep mb-8">
                                아르떼펄스 에세이팀이 준비하고 있는<br />
                                2026년 새로운 감성의 에세이 컬렉션을 기대해 주세요.<br />
                                곧 여러분의 일상에 닿을 수 있도록 준비하고 있습니다.
                            </p>
                            <button className="px-7 py-2.5 border border-ink text-ink text-xs font-sans font-semibold tracking-widest uppercase cursor-wait">
                                입고 예정
                            </button>
                        </div>
                    </motion.div>

                    {/* ── Live / Sold Out Books ── */}
                    {books.map((book, i) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`group flex flex-col ${book.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
                        >
                            <div className="w-full max-w-xs md:w-5/12 flex-shrink-0">
                                <div className={`relative aspect-[3/4] overflow-hidden shadow-2xl rounded-sm transform transition-all duration-700 group-hover:scale-[1.02] ${book.soldOut ? 'group-hover:grayscale group-hover:opacity-75' : ''}`}>
                                    <img src={book.image} alt={book.title} className="w-full h-full object-cover" />

                                    {book.soldOut && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <span
                                                className="border-[3px] border-stone-600 text-stone-600 font-sans font-black text-xl px-4 py-1.5 tracking-widest uppercase bg-white/10 backdrop-blur-[2px]"
                                                style={{ transform: 'rotate(-14deg)' }}
                                            >
                                                Sold Out
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={`w-full md:w-7/12 ${book.reverse ? 'md:text-right' : 'md:text-left'} text-center transition-all duration-700 ${book.soldOut ? 'group-hover:opacity-70' : ''}`}>
                                <span className={`text-stone-400 font-sans font-semibold tracking-widest text-xs uppercase mb-4 block ${book.soldOut ? 'group-hover:line-through decoration-stone-300' : ''}`}>{book.label}</span>
                                <h3 className={`text-2xl md:text-3xl font-sans font-bold text-ink mb-3 break-keep leading-snug transition-colors duration-700 ${book.soldOut ? 'group-hover:text-stone-400' : ''}`}>{book.title}</h3>
                                <p className={`text-stone-400 font-sans text-sm mb-6 transition-colors duration-700 ${book.soldOut ? 'group-hover:text-stone-300' : ''}`}>{book.author}</p>
                                <div
                                    className="w-10 h-px bg-stone-300 mb-6"
                                    style={book.reverse
                                        ? { marginLeft: 'auto', marginRight: '0' }
                                        : { marginLeft: '0', marginRight: 'auto' }}
                                />
                                <p className={`font-sans text-stone-500 text-sm md:text-base leading-relaxed whitespace-pre-line break-keep mb-8 transition-colors duration-700 ${book.soldOut ? 'group-hover:text-stone-400' : ''}`}>{book.desc}</p>

                                {book.soldOut ? (
                                    <button disabled className="px-7 py-2.5 bg-stone-100 text-stone-300 text-xs font-sans font-semibold tracking-widest uppercase cursor-not-allowed">
                                        Sold Out
                                    </button>
                                ) : (
                                    <button className="px-7 py-2.5 border border-ink text-ink text-xs font-sans font-semibold tracking-widest uppercase hover:bg-ink hover:text-white transition-colors duration-300">
                                        자세히 보기
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
