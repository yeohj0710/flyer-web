"use client";

import { useEffect, useState } from "react";

const serviceItems = [
  {
    title: "개인맞춤 영양제 제공",
    bullets: [
      "건강 설문 기반 개인별 영양 설계",
      "약국 소분 1개월분 패키지 제공",
    ],
  },
  {
    title: "매월 건강 설문 & 구성 조정",
    bullets: ["월 1회 건강 설문", "상태 변화에 따른 영양 성분·용량 조정"],
  },
  {
    title: "개인 건강관리 레포트 제공",
    bullets: ["이번 달 건강 요약", "관리 포인트 및 실천 가이드"],
  },
  {
    title: "약사 방문 상담 (분기 1회)",
    bullets: ["3개월 1회 전문 약사 직접 방문", "대면 건강·복용 상담 진행"],
  },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", onEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <main className="min-h-screen bg-stone-100 px-3 py-6 text-slate-800 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-[210mm] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14 md:w-[210mm] md:min-h-[297mm]">
        <header className="border-b border-slate-200 pb-7">
          <div className="text-2xl font-semibold tracking-tight text-slate-900">
            Wellnessbox
          </div>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            임직원 건강을 데이터 기반으로 관리하는 프리미엄 복지 솔루션
          </p>
        </header>

        <section className="pt-10">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-teal-700">
            Price Guide
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            임직원 개인맞춤 건강관리 복지 프로그램
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            개인맞춤 영양제 + 정기 관리 + 약사 방문 상담 포함
          </p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 shadow-inner shadow-teal-100/60 sm:p-8">
            <p className="text-sm font-medium text-teal-800 sm:text-base">
              직원 1인 기준
            </p>
            <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-2 text-slate-900">
              <span className="text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">
                60,000
              </span>
              <span className="pb-1 text-lg font-semibold sm:text-2xl">원 / 월</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">VAT 별도</p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-900">제공 서비스 내용</h2>
          <div className="mt-6 space-y-4">
            {serviceItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">핵심 운영 항목</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700 sm:text-base">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-900">운영 방식</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700 sm:text-base">
            <li>월 단위 정기 운영</li>
            <li>임직원 수에 따라 유연한 도입 가능</li>
            <li>기업 복지 예산(복리후생비)으로 처리 가능</li>
            <li>ESG 보고서 내 임직원 건강관리 프로그램으로 활용 가능</li>
          </ul>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-900">적합한 기업</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700 sm:text-base">
            <li>형식적인 복지가 아닌 실제 체감되는 복지를 원하는 기업</li>
            <li>
              단발성 지원이 아닌 지속 관리형 건강 프로그램을 도입하고 싶은 기업
            </li>
            <li>임직원 만족도와 ESG 성과를 함께 고려하는 기업</li>
          </ul>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="sr-only">문의 및 제안서 요청</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {["견적/도입 문의하기", "가격 제안서 PDF 요청"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:text-lg"
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4"
          onClick={() => setIsModalOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <h3 id="contact-modal-title" className="text-2xl font-bold text-slate-900">
              문의
            </h3>
            <div className="mt-5 space-y-3 text-slate-700">
              <p>
                이메일:{" "}
                <a
                  href="mailto:wellnessbox.me@gmail.com"
                  className="font-medium text-teal-700 underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  wellnessbox.me@gmail.com
                </a>
              </p>
              <p>
                전화:{" "}
                <a
                  href="tel:02-6241-5530"
                  className="font-medium text-teal-700 underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  02-6241-5530
                </a>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
