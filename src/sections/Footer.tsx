export default function Footer() {
    return (
        <footer className="py-20 bg-gray-50 text-center border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <h2 className="text-3xl font-black text-ink mb-6 tracking-tight">ARTEPULSE</h2>
                <p className="mb-8 text-gray-500 max-w-lg mx-auto font-medium leading-relaxed">
                    "예술가들을 가르치거나 고용하는 곳이 아니라,<br />
                    예술가들의 재능을 결합하여 시장에서의 협상력을 극대화하는<br />
                    <span className="text-ink font-bold">크리에이티브 얼라이언스 (Creative Alliance)</span>입니다"
                </p>
                <div className="text-sm text-gray-400 font-medium">
                    &copy; {new Date().getFullYear()} ArtePulse. All rights reserved.
                </div>
                <div className="mt-2 text-sm text-gray-400 font-medium">
                    <a href="https://www.instagram.com/arete_pulse?igsh=MWdvOHZhMzZtemJ2YQ==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                        Instagram @arete_pulse
                    </a>
                </div>
            </div>
        </footer>
    );
}
