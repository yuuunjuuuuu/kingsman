import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import contestPoster from '../assets/contest_poster.png';


const notices = [
    {
        id: 1,
        title: "[공지] 당신의 에세이가 그림이 되는 순간, '그림책 아이디어 공모전' 개최",
        date: "2025.12.10",
        views: 204,
        pinned: true,
        content: `
안녕하세요, 아르떼펄스(ArtePulse) 에세이팀입니다.

우리는 누구나 마음속에 한 권의 책을 품고 산다고 믿습니다.
혼자만 간직하기엔 너무나 반짝이는 당신의 일상과 기록들, 이제는 글을 넘어 '그림책' 이라는 따뜻한 그릇에 담아보려 합니다.

글이 주는 깊이와 그림이 주는 위로를 연결할 열정적인 예비 작가님들의 많은 참여를 기다립니다!


📍 공모 분야
• 에세이 기반 그림책 기획: 직접 작성한 에세이나 일기, 기록 등을 바탕으로 한 그림책 스토리보드 및 기획안

📍 응모 일정
• 접수 기간: 2025년 12월 10일 ~ 2026년 1월 10일
• 결과 발표: 1월 중 수상자 개별 통보

📍 접수 방법
• 아르떼펄스 공식 홈페이지 내 [공모전 접수] 폼 제출

📍 제출 양식
  1. 기획 의도 및 시놉시스 (A4 1장 내외)
  2. 그림책 구성 콘티
  3. (선택) 분위기를 표현한 이미지나 스케치

📍 심사 기준
• 진정성: 에세이적 요소가 얼마나 진솔하게 녹아 있는가?
• 독창성: 기존 그림책과 차별화된 신선한 시각을 가졌는가?
• 시각화 가능성: 그림으로 구현되었을 때의 전달력이 있는가?

"당신의 사소한 이야기가 누군가에게는 커다란 울림이 됩니다."

아르떼펄스 에세이팀과 함께 첫 페이지를 넘길 주인공은 바로 당신입니다. 지금 바로 도전하세요!


신청 및 문의
: artepulse.official@gmail.com
        `
    },
    {
        id: 11,
        title: "[수강 후기 이벤트 진행 중]",
        date: "2026.03.20",
        views: 45,
        content: `클래스를 수강하고 후기를 남겨주시면 추첨을 통해 다양한 혜택을 드립니다.
참여 방법: 수강 후 네이버 블로그에 후기 작성
혜택: 포인트 지급 / 기프티콘
여러분의 소중한 의견을 기다립니다.`
    },
    {
        id: 10,
        title: "[신규 클래스 오픈 안내]",
        date: "2026.03.18",
        views: 68,
        content: `안녕하세요, 아르떼펄스 홍보팀입니다.
이번 주 새로운 클래스가 오픈되었습니다. 다양한 분야의 실무 경험을 담은 콘텐츠로 구성되어 있으니 많은 관심과 참여 부탁드립니다.
지금 바로 확인해보세요!`
    },
    {
        id: 9,
        title: "[서비스 점검 안내]",
        date: "2026.03.16",
        views: 84,
        content: `보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 점검이 진행됩니다.
일정: 03월 24일 (화요일) 18:00 ~ 20:00
내용: 서버 안정화 및 기능 개선
점검 시간 동안 서비스 이용이 제한될 수 있으니 양해 부탁드립니다.`
    },
    {
        id: 7,
        title: "[SnapPulse 클래스 강사 모집 안내]",
        date: "2026.03.09",
        views: 124,
        content: `예술을 더 쉽고 가깝게 경험할 수 있도록 다양한 클래스를 운영하고 있는 아르떼펄스에서 새로운 클래스를 함께 만들어갈 크리에이터를 모집합니다.
자신만의 노하우와 창작 과정을 다른 사람들과 나누고 싶은 분이라면 누구나 지원하실 수 있습니다.
아르떼펄스는 예술을 단순히 감상하는 것을 넘어, 누구나 직접 경험하고 배울 수 있는 환경을 만들고자 합니다. 회화, 드로잉, 공예, 사진, 디자인, 글쓰기 등 다양한 문화예술 분야에서 활동 중인 창작자분들의 경험과 이야기를 클래스로 담아 많은 사람들과 공유해 보세요.
선정된 크리에이터에게는 클래스 기획부터 촬영, 콘텐츠 제작, 플랫폼 업로드까지 전반적인 과정에 대한 운영 지원이 제공됩니다. 또한 플랫폼을 통해 더 많은 수강생과 만나고 자신의 작업 세계를 확장할 수 있는 기회를 얻을 수 있습니다.

모집 대상
촬영 분야에서 활동 중인 창작자
자신의 창작 과정이나 노하우를 클래스로 공유하고 싶은 분
온라인 또는 오프라인 클래스 운영에 관심이 있는 분

모집 분야
스냅 및 카메라 촬영

모집 기간
03월 16일 ~ 04월 21일 24시 마감

지원 방법
지원서는 아래 내용을 포함하여 제출해 주세요.
간단한 자기소개 및 활동 이력
개설을 희망하는 클래스 주제
클래스 커리큘럼 (간단한 구성)
포트폴리오 또는 작업물
접수된 지원서는 내부 검토 후 개별 연락을 통해 안내드릴 예정입니다.
자신만의 창작 경험을 나누고, 더 많은 사람들과 예술을 연결하고 싶은 분들의 많은 관심과 지원을 기다립니다. 

지원 및 문의
artepulse.official@gmail.com`
    },
    {
        id: 8,
        title: "[고객센터 운영 시간 안내]",
        date: "2026.03.03",
        views: 89,
        content: `[고객센터 운영 시간 변경 안내]
고객센터 운영 시간이 아래와 같이 변경됩니다.
운영 시간: 평일 10:00 ~ 18:00
점심 시간: 12:00 ~ 13:00

문의는 1:1 문의 또는 이메일을 통해 접수해 주세요.`
    },
    {
        id: 6,
        title: "[공지] 개인정보 처리방침 개정 안내 (정보 파기 및 마케팅 활용 안내)",
        date: "2026.03.01",
        views: 52,
        content: `안녕하세요, 일상에 예술의 숨결을 더하는아르떼펄스(ArtePulse)입니다.

아르떼펄스를 아껴주시는 여러분께 감사드리며, 클래스 신청 시 수집되는 개인정보의 관리 체계 강화 및 마케팅 활용 안내를 위해 아래와 같이 개인정보 처리방침을 개정하게 되었습니다.

저희는 회원 시스템 없이 신청서 기반으로 운영되는 만큼, 여러분의 연락처 정보를 더욱 소중하고 투명하게 관리하고자 합니다.

1. 주요 개정 내용
① 개인정보 파기 절차 강화
회원님의 연락처 정보는 클래스 운영 목적이 달성되면 지체 없이 파기하여 유출 위험을 원천 차단합니다.
 * 보유 항목: 성함, 연락처
 * 보유 기간: 클래스 신청 시점 ~ 클래스 종료 후 [7일] 이내
 * 파기 방법: 복구 불가능한 기술적 방법으로 즉시 파기 (단, 결제 기록 등 법정 보관 의무 데이터 제외)

② 마케팅 활용 및 홍보 안내 (신설)
아르떼펄스의 새로운 원데이 클래스나 전시 소식을 꾸준히 받고 싶어 하시는 분들을 위해 마케팅 활용 항목을 신설합니다.
 * 활용 목적: 신규 클래스 오픈 안내, 이벤트 및 프로모션 정보 제공 (문자/알림톡 등)
 * 대상자: 클래스 신청 시 '마케팅 정보 수신'에 직접 동의하신 분에 한함
 * 보유 기간: 동의 철회 시 또는 서비스 종료 시까지 (동의하지 않으셔도 클래스 신청에는 제한이 없습니다.)

2. 개정 및 시행 일정
 * 공지 기간: 2026년 3월 1일 ~ 2026년 3월 7일
 * 시행 일자: 2026년 3월 8일 (시행일 이후 신청 건부터 적용)
3. 안내 사항
 * 이번 개정 이후 진행되는 클래스 신청 폼에는 [개인정보 수집 동의(필수)]와 [마케팅 수신 동의(선택)] 항목이 분리되어 운영됩니다.
 * 이미 신청하신 클래스 정보나 마케팅 수신 철회에 관한 문의는 아르떼펄스 고객센터([artepulse.official@gmail.com])로 연락 주시면 즉시 조치해 드리겠습니다.

아르떼펄스는 여러분이 개인정보 걱정 없이 오직 창작의 즐거움에만 몰입하실 수 있도록 최선을 다하겠습니다.
감사합니다.

아르떼펄스 팀 드림`
    }
];

export default function Notice() {
    const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedNotice) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Lock html as well
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [selectedNotice]);

    return (
        <section className="pt-52 pb-24 px-6 bg-white border-t border-stone-200" id="notice">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="block text-stone-400 font-bold tracking-[0.2em] uppercase mb-4 text-xs">NOTICE</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-4">공지사항</h2>
                    <p className="text-lg text-stone-600 font-serif italic">"아르떼펄스의 새로운 소식을 전해드립니다."</p>
                </motion.div>

                <div className="border-t-2 border-ink">
                    {/* Header Row - Hidden on mobile, visible on desktop */}
                    <div className="hidden md:flex py-4 border-b border-stone-200 text-sm font-bold text-ink bg-stone-50">
                        <div className="w-16 text-center">번호</div>
                        <div className="flex-1 text-center">제목</div>
                        <div className="w-32 text-center">날짜</div>
                        <div className="w-24 text-center">조회수</div>
                    </div>

                    {/* Notice Items */}
                    {notices.map((notice, index) => (
                        <div key={notice.id} className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedNotice(notice)}
                                className={`flex flex-col md:flex-row py-5 md:py-4 border-b border-stone-100 transition-colors cursor-pointer group ${
                                    // @ts-ignore
                                    notice.pinned ? 'bg-stone-50 hover:bg-stone-100' : 'hover:bg-stone-50'
                                    }`}
                            >
                                <div className="w-16 text-center text-stone-400 font-serif text-sm hidden md:flex items-center justify-center">
                                    {/* @ts-ignore */}
                                    {notice.pinned ? (
                                        <span className="text-lg">📌</span>
                                    ) : (
                                        notices.length - index
                                    )}
                                </div>
                                <div className="flex-1 px-4 text-ink font-medium group-hover:text-primary transition-colors hover:underline underline-offset-4 flex items-center gap-2">
                                    {/* @ts-ignore */}
                                    {notice.pinned && (
                                        <span className="md:hidden inline-block align-middle mr-1">📌</span>
                                    )}
                                    <span className={/* @ts-ignore */ notice.pinned ? "font-bold" : ""}>{notice.title}</span>
                                </div>
                                <div className="w-32 text-center text-stone-400 text-sm mt-2 md:mt-0">
                                    {notice.date}
                                </div>
                                <div className="w-24 text-center text-stone-300 text-sm hidden md:block">
                                    {notice.views}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {/* Modal */}
            {createPortal(
                <AnimatePresence>
                    {selectedNotice && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedNotice(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative bg-paper w-full max-w-2xl max-h-[90vh] flex flex-col rounded-lg shadow-2xl overflow-hidden"
                            >
                                {/* Fixed Header with Close Button */}
                                <div className="flex items-center justify-end p-4 shrink-0 bg-white z-10 border-b border-stone-100">
                                    <button
                                        onClick={() => setSelectedNotice(null)}
                                        className="p-2 text-stone-400 hover:text-ink transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Scrollable Body */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12 pb-32 overscroll-contain">
                                    <span className="text-sm font-bold text-primary mb-2 block">{selectedNotice.date}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-8 border-b border-stone-200 pb-4">
                                        {selectedNotice.title}
                                    </h3>
                                    {/* Contest poster — shown only for notice id:1 */}
                                    {selectedNotice.id === 1 && (
                                        <div className="mb-8">
                                            <img
                                                src={contestPoster}
                                                alt="제 1회 그림책 아이디어 공모전 포스터"
                                                className="w-full rounded-md shadow-md"
                                            />
                                        </div>
                                    )}
                                    <div className="prose prose-stone max-w-none whitespace-pre-wrap font-serif text-stone-700 leading-relaxed">
                                        {selectedNotice.content}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
