import { motion } from 'framer-motion';


export default function Contact() {
    return (
        <section className="pt-52 pb-24 px-6 bg-paper border-t border-stone-200" id="contact">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="block text-stone-400 font-bold tracking-[0.2em] uppercase mb-4 text-xs">CONTACT US</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">문의하기</h2>
                    <p className="text-lg text-stone-600 font-serif italic">"(협업·외주 문의)"</p>
                </motion.div>

                <div className="space-y-6 font-serif text-lg bg-white p-12 rounded-[2rem] border border-ink/10 shadow-sm text-center">
                    <div className="flex flex-col gap-2 items-center">
                        <span className="font-bold text-sm text-stone-400 uppercase tracking-widest mb-1">Email</span>
                        <a href="mailto:artepulse.official@gmail.com" className="text-xl md:text-2xl text-ink hover:text-primary transition-colors border-b border-transparent hover:border-primary">
                            artepulse.official@gmail.com
                        </a>
                    </div>

                    <div className="w-12 h-px bg-stone-200 mx-auto my-6"></div>

                    <div className="flex flex-col gap-2 items-center">
                        <span className="font-bold text-sm text-stone-400 uppercase tracking-widest mb-1">Instagram</span>
                        <a
                            href="https://www.instagram.com/arete_pulse?igsh=MWdvOHZhMzZtemJ2YQ%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl md:text-2xl text-ink hover:text-primary transition-colors border-b border-transparent hover:border-primary"
                        >
                            @arete_pulse
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
