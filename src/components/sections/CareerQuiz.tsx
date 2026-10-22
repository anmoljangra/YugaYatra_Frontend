"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, CheckCircle } from "lucide-react";
import { quizQuestions, quizResults } from "@/data/quiz";

interface CareerQuizProps {
  onOpenApplyModal: (trackId?: string) => void;
}

export function CareerQuiz({ onOpenApplyModal }: CareerQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleSelectOption = (track: string) => {
    const nextAnswers = [...answers, track];
    setAnswers(nextAnswers);

    if (currentStep + 1 < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate top track
      const counts: Record<string, number> = {};
      nextAnswers.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
      let bestTrack = "web-development";
      let maxCount = 0;
      Object.entries(counts).forEach(([t, count]) => {
        if (count > maxCount) {
          maxCount = count;
          bestTrack = t;
        }
      });
      setResult(bestTrack);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQuestion = quizQuestions[currentStep];

  return (
    <section id="quiz" className="section-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="section-container">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="eyebrow mb-3">— Interactive Assessment —</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-[#0a0a0a]">
            Find Your Ideal Tech Career Path
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600">
            Unsure which internship track fits your interests best? Answer 4 quick questions to get a
            personalized track recommendation.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="max-w-2xl mx-auto bg-[#f8f9fb] border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg">
          {!result ? (
            <div>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>
                    Question {currentStep + 1} of {quizQuestions.length}
                  </span>
                  <span>{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold transition-all duration-300 rounded-full"
                    style={{
                      width: `${((currentStep + 1) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.track)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-gold hover:shadow-md hover:bg-gold/5 transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-sm font-medium text-slate-800 group-hover:text-black">
                      {opt.text}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-slate-400 group-hover:text-gold-dark group-hover:translate-x-1 transition-all shrink-0 ml-3"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto mb-4 border border-gold/40">
                <Sparkles size={32} />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-1">
                Your Ideal Path Match
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {quizResults[result]?.title || "Web Development"}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto mb-8">
                {quizResults[result]?.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenApplyModal(result)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-gold text-[#0a0a0a] hover:bg-gold-light px-8 py-3.5 text-sm shadow-md transition-all cursor-pointer"
                >
                  Apply for {quizResults[result]?.title}
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium rounded-xl border border-slate-300 hover:border-slate-400 bg-white px-6 py-3.5 text-sm text-slate-700 transition-all cursor-pointer"
                >
                  <RotateCcw size={15} /> Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
