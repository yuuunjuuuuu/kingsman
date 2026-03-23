import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { createPortal } from 'react-dom';
import foodProgramImg1 from '../assets/food_program.jpg';
import foodProgramImg3 from '../assets/food_program_3.png';
import foodProgramImg4 from '../assets/food_program_4.png';
import craftProgramImgNew from '../assets/craft_program_new.png';
import craftProgramImg2 from '../assets/craft_program_2.jpg';
import craftProgramImg3 from '../assets/craft_program_3.jpg';
import craftProgramImg4 from '../assets/craft_program_4.jpg';
import snapProg1 from '../assets/snap_program_1.jpg';
import snapProg2 from '../assets/snap_program_2.png';
import snapProg3 from '../assets/snap_program_3.png';
import snapProg4 from '../assets/snap_program_4.jpg';


// EmailJS keys hardcoded for easier deployment (No Netlify env vars needed)
const SERVICE_ID = "service_i410u9x";
const TEMPLATE_ID = "template_n7ba9z6";
const PUBLIC_KEY = "vIZp2f_TQMTfvbkbX";

const programs = [
    {
        id: "snap",
        tag: "#SnapPulse",
        title: "찰나의 수집가: 일상 스냅 & 포트레이트 마스터",
        subtitle: "찰나의 기록, 영원의 조각",
        desc: "단순히 셔터를 누르는 것이 아니라, 마음의 파동을 인화합니다.",
        instructor: "'감성 기록가(Visual Storyteller)'. 뻔한 기술 강의가 아닌, 빛의 방향과 구도 속에 담긴 '이야기'를 찾아주는 다정하고 섬세한 멘토.",
        curriculum: [
            "1주: 카메라와 친해지기 (노출의 3요소 ISO, 셔터스피드, 조리개를 활용한 감성 조절)",
            "2주: 시선의 확장 (일상적인 사물을 비일상적으로 바라보는 구도의 미학)",
            "3주: 빛의 마법 (자연광과 조명을 활용해 피사체의 입체감 살리기)",
            "4주: 후보정의 미학 (라이트룸/모바일 앱을 활용한 나만의 시그니처 색감 찾기)"
        ],
        price: "200,000원 (회당 7만원 / 소수 정예 밀착 코칭 포함)",
        image: [snapProg1, snapProg2, snapProg3, snapProg4]
    },
    {
        id: "delight",
        tag: "#DelightPulse",
        title: "식탁 위의 큐레이션: 런치 박스 & 푸드 스타일링",
        subtitle: "맛의 온기, 멋의 미학",
        desc: "매일 먹는 한 끼가 예술이 되는 순간을 경험하세요.",
        instructor: "'미식 라이프스타일러'. \"보기 좋은 떡이 먹기도 좋다\"는 철학 아래, 실용적인 도시락 레시피와 상업용 잡지 수준의 연출법을 동시에 전수하는 트렌드 세터.",
        curriculum: [
            "1주: 도시락의 기초 (영양 밸런스를 고려한 5색 식재료 구성과 기본 조리법)",
            "2주: 공간의 배치 (도시락 용기 안에서 면과 선을 활용한 입체적 배치 기술)",
            "3주: 소품의 조화 (패브릭, 커틀러리, 배경지를 활용한 '인스타그래머블' 연출법)",
            "4주: 실전 스타일링 (테마별 푸드 촬영 및 스마트폰 푸드 사진 보정 팁)",
            "※ [프리미엄 식재료 및 패키징 키트 제공]"
        ],
        price: "480,000원 (재료비 포함 / 프리미엄 식재료 및 패키징 키트 제공)",
        image: [foodProgramImg1, foodProgramImg4, foodProgramImg3]
    },
    {
        id: "word",
        tag: "#WordPulse",
        title: "심야 문장실: 나만의 장르를 찾는 사유의 글쓰기",
        subtitle: "문장의 맥박, 사유의 심연",
        desc: "당신이 꺼내지 못한 문장들이 이곳에서 파형을 그리기 시작합니다.",
        instructor: "'사유의 동반자'. 등단 작가 출신으로, 수강생의 내면에 숨겨진 문장을 끄집어내는 날카롭지만 따뜻한 통찰력을 가진 조력자.",
        curriculum: [
            "1주: 관찰과 묘사 (사물을 보고 감각 형용사를 사용하여 구체적으로 묘사하기)",
            "2주: 감정의 서사 (나의 기억 한 조각을 소설이나 수필의 한 장면으로 치환하기)",
            "3주: 리듬의 미학 (시적 허용과 문장의 호흡을 통한 운율 형성하기)",
            "4주: 딥 토크 & 합평 (서로의 글을 읽고 사유를 나누는 프라이빗 북토크)"
        ],
        price: "210,000원 (워크북 제공 및 소책자 제작 지원)",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop"
    },
    {
        id: "art",
        tag: "#ArtPulse",
        title: "손끝의 온도: 오브제 공예 & 마이크로 월드",
        subtitle: "손끝의 숨결, 작은 세계",
        desc: "고사리손으로 빚어내는 세상에 단 하나뿐인 나의 우주.",
        instructor: "'공예 아티스트'. 손으로 무언가를 만드는 행위가 곧 명상이 될 수 있음을 알려주는 침착하고 세심한 장인 스타일.",
        curriculum: [
            "1주: 소재의 이해 (점토, 레진, 우드 중 주력 소재 선택 및 도구 사용법)",
            "2주: 형태의 구축 (머릿속 구상을 3차원 입체물로 구체화하는 모델링)",
            "3주: 색의 입힘 (채색과 질감 표현을 통해 생명력 불어넣기)",
            "4주: 전시와 마무리 (완성된 오브제를 위한 전용 쇼케이스 제작 및 패키징)"
        ],
        price: "220,000원 (기본 도구 대여 및 고급 재료비 포함)",
        image: [craftProgramImgNew, craftProgramImg2, craftProgramImg3, craftProgramImg4]
    },
    {
        id: "rhythm",
        tag: "#RhythmPulse",
        title: "스테이지 온: 현직 프로에게 배우는 실전 보컬 & 악기",
        subtitle: "선율의 박동, 현장의 에너지",
        desc: "프로의 호흡을 직접 보고 듣고, 당신의 소리로 만듭니다.",
        instructor: "'현역 뮤지션'. 실제 공연 세션이나 앨범 참여 경력이 화려한 프로페셔널. \"이론보다 실전, 테크닉보다 감성\"을 강조하는 열정적인 멘토.",
        curriculum: [
            "1주: 나만의 톤 찾기 (보컬/악기 진단을 통해 본인에게 가장 잘 어울리는 음역대와 톤 설정)",
            "2주: 그루브의 이해 (장르별 기본 리듬 패턴과 '맛'을 살리는 리듬감 익히기)",
            "3주: 프로의 테크닉 (바이브레이션, 밴딩 등 연주의 퀄리티를 높이는 고급 스킬)",
            "4주: 라이브 세션 (소규모 합주 또는 레코딩 경험을 통한 실전 감각 완성)"
        ],
        price: "450,000원 (개인 레슨 중심 / 스튜디오 대관료 포함)",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function Programs() {
    const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});
    const formRef = useRef<HTMLFormElement>(null);

    const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        // Debug: Log key presence (not the full keys for security)
        console.log('EmailJS Config Check:', {
            hasService: !!SERVICE_ID,
            hasTemplate: !!TEMPLATE_ID,
            hasPublic: !!PUBLIC_KEY
        });

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('EmailJS keys are missing. Ensure VITE_ prefix is used in .env and Netlify.');
            setFormStatus('error');
            return;
        }

        setFormStatus('sending');

        try {
            // v4 recommended syntax with options object
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                { publicKey: PUBLIC_KEY }
            );

            setFormStatus('success');
            // Reset date/time on success
            setSelectedDate('');
            setSelectedTime('');

            setTimeout(() => {
                setFormStatus('idle');
                setSelectedProgram(null);
            }, 2500);
        } catch (err: any) {
            console.error('EmailJS Submit Error:', err);
            const errorMsg = err?.text || err?.message || 'Check EmailJS dashboard and browser console.';
            console.warn('Error Detail:', errorMsg);

            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section className="pt-52 pb-24 px-6 bg-stone-50" id="program">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="block text-stone-400 font-bold tracking-[0.2em] uppercase mb-4 text-xs">Curriculum</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">프로그램</h2>

                </motion.div>

                <div className="flex md:block md:space-y-24 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 pb-12 scrollbar-none no-scrollbar">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="snap-center shrink-0 w-[85vw] md:w-full flex flex-col md:flex-row gap-8 md:gap-16 items-start mr-8 md:mr-0"
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-5/12 relative group md:sticky md:top-24">
                                <div 
                                    className={`aspect-[3/4] overflow-hidden rounded-sm bg-stone-200 relative ${Array.isArray(program.image) ? 'cursor-pointer group/image' : ''}`}
                                    onClick={() => {
                                        if (Array.isArray(program.image)) {
                                            setCurrentImageIndices(prev => ({
                                                ...prev,
                                                [program.id]: ((prev[program.id] || 0) + 1) % program.image.length
                                            }));
                                        }
                                    }}
                                >
                                    <img
                                        src={Array.isArray(program.image) ? program.image[currentImageIndices[program.id] || 0] : program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />

                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-widest text-ink uppercase pointer-events-none">
                                    {program.tag}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-7/12 py-4">
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink leading-tight mb-2">
                                        {program.title.split(':').map((part, i, arr) => (
                                            <span key={i}>
                                                {part}
                                                {i < arr.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </h3>
                                    <p className="text-stone-500 font-serif italic text-lg">{program.subtitle}</p>
                                </div>

                                <p className="text-stone-600 leading-relaxed mb-8 text-lg font-light break-keep">{program.desc}</p>

                                <div className="space-y-6 border-t border-stone-200 pt-8 mb-8">
                                    <div className="flex items-start gap-4">
                                        <span className="w-24 font-bold text-ink text-sm uppercase tracking-wide shrink-0 mt-1">강사</span>
                                        <span className="text-stone-600">{program.instructor}</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="w-24 font-bold text-ink text-sm uppercase tracking-wide shrink-0 mt-1">커리큘럼</span>
                                        <ul className="text-stone-600 space-y-1 text-sm">
                                            {program.curriculum.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="w-24 font-bold text-ink text-sm uppercase tracking-wide shrink-0">수강료</span>
                                        <span className="text-xl font-serif font-bold text-ink">{program.price}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => { setSelectedProgram(program); setFormStatus('idle'); }}
                                    className="w-full md:w-auto px-8 py-3 bg-ink text-white font-bold hover:bg-stone-700 transition-colors uppercase tracking-widest text-sm"
                                >
                                    신청하기
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Application Modal — rendered via portal so it sits above the fixed navbar */}
            {createPortal(
                <AnimatePresence>
                    {selectedProgram && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                            {/* Backdrop — absolute so DOM order (modal after) wins without z-index conflict */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProgram(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative bg-white w-full max-w-xl max-h-[90vh] flex flex-col rounded-lg shadow-2xl overflow-hidden"
                            >
                                {/* Success */}
                                {formStatus === 'success' ? (
                                    <div className="p-12 text-center">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-ink mb-2">신청이 완료되었습니다!</h3>
                                        <p className="text-stone-500">담당자가 확인 후 빠르게 연락드리겠습니다.</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Header — shrink-0 keeps it always visible */}
                                        <div className="shrink-0 bg-stone-100 px-8 py-6 border-b border-stone-200 flex justify-between items-center">
                                            <div>
                                                <span className="text-xs font-bold text-stone-500 tracking-widest uppercase block mb-1">Application</span>
                                                <h3 className="text-xl font-serif font-bold text-ink">{selectedProgram.title}</h3>
                                            </div>
                                            <button
                                                onClick={() => setSelectedProgram(null)}
                                                className="text-stone-400 hover:text-ink transition-colors p-1"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Scrollable form body */}
                                        <div className="flex-1 overflow-y-auto">
                                            <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-5">
                                                <input type="hidden" name="program_name" value={selectedProgram.title} />
                                                <input type="hidden" name="selected_date" value={selectedDate} />
                                                <input type="hidden" name="selected_time" value={selectedTime} />

                                                {/* Date Selection */}
                                                <div>
                                                    <label className="block text-sm font-bold text-stone-700 mb-2">날짜 선택</label>
                                                    <input
                                                        type="date"
                                                        required
                                                        value={selectedDate}
                                                        onChange={(e) => setSelectedDate(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-stone-300 rounded focus:outline-none focus:border-ink bg-transparent text-base"
                                                        min={new Date().toISOString().split('T')[0]}
                                                    />
                                                </div>

                                                {/* Time Selection */}
                                                <div>
                                                    <label className="block text-sm font-bold text-stone-700 mb-2">시간 선택</label>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        {timeSlots.map((time) => (
                                                            <button
                                                                key={time}
                                                                type="button"
                                                                onClick={() => setSelectedTime(time)}
                                                                className={`py-2.5 text-sm font-bold border transition-all ${selectedTime === time
                                                                    ? 'bg-ink text-white border-ink'
                                                                    : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
                                                                    }`}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-bold text-stone-700 mb-1">이름</label>
                                                        <input type="text" name="name" required autoFocus
                                                            className="w-full px-4 py-2.5 border border-stone-300 rounded focus:outline-none focus:border-ink bg-transparent text-base"
                                                            placeholder="홍길동" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-stone-700 mb-1">연락처</label>
                                                        <input type="tel" name="phone" required
                                                            className="w-full px-4 py-2.5 border border-stone-300 rounded focus:outline-none focus:border-ink bg-transparent text-base"
                                                            placeholder="010-0000-0000" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-bold text-stone-700 mb-1">이메일</label>
                                                    <input type="email" name="email" required
                                                        className="w-full px-4 py-2.5 border border-stone-300 rounded focus:outline-none focus:border-ink bg-transparent text-base"
                                                        placeholder="email@example.com" />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-bold text-stone-700 mb-1">남기실 말씀</label>
                                                    <textarea name="message" required rows={3}
                                                        className="w-full px-4 py-2.5 border border-stone-300 rounded focus:outline-none focus:border-ink bg-transparent resize-none text-base"
                                                        placeholder="자유롭게 작성해주세요." />
                                                </div>

                                                {/* Refund Policy */}
                                                <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm">
                                                    <h4 className="text-xs font-bold text-ink uppercase tracking-widest mb-3 flex items-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                                        </svg>
                                                        취소 / 환불 규정
                                                    </h4>
                                                    <div className="text-[11px] leading-relaxed text-stone-500 space-y-1.5">
                                                        <div className="flex justify-between border-b border-stone-200 pb-1.5">
                                                            <span>이용 6일 전까지</span>
                                                            <span className="text-ink font-bold">결제금액에 대한 취소 수수료 없음</span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-stone-200 pb-1.5">
                                                            <span>이용 5일 전</span>
                                                            <span className="text-red-500">결제금액의 5% 차감</span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-stone-200 pb-1.5">
                                                            <span>이용 4일 전</span>
                                                            <span className="text-red-500">결제금액의 10% 차감</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>이용 당일</span>
                                                            <span className="text-red-500 font-bold">환불 불가</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {formStatus === 'error' && (
                                                    <p className="text-red-500 text-sm text-center">
                                                        전송에 실패했습니다. 잠시 후 다시 시도하거나<br />
                                                        artepulse.official@gmail.com으로 직접 문의해 주세요.
                                                    </p>
                                                )}

                                                <div className="pt-2">
                                                    <button type="submit" disabled={formStatus === 'sending'}
                                                        className="w-full py-4 bg-ink text-white font-bold hover:bg-stone-800 transition-colors uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                                                    >
                                                        {formStatus === 'sending' ? (
                                                            <>
                                                                <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                                </svg>
                                                                전송 중...
                                                            </>
                                                        ) : '신청 완료'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
