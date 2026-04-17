/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft,
  Trophy,
  Activity,
  User,
  LogOut,
  Calendar
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from './lib/utils';
import { QUIZ_DATA } from './data/quizData';
import { PracticeTest, Passage, Question } from './types';

type View = 'HOME' | 'PASSAGES' | 'QUIZ' | 'RESULT';

export default function App() {
  const [view, setView] = useState<View>('HOME');
  const [selectedPracticeId, setSelectedPracticeId] = useState<number | null>(null);
  const [selectedPassageId, setSelectedPassageId] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  // Derived state
  const selectedPractice = selectedPracticeId ? QUIZ_DATA[selectedPracticeId] : null;
  const selectedPassage = (selectedPractice && selectedPassageId) ? selectedPractice.passages[selectedPassageId] : null;

  // Handlers
  const handleSelectPractice = (id: number) => {
    setSelectedPracticeId(id);
    setView('PASSAGES');
  };

  const handleStartQuiz = (passageId: number) => {
    const passage = selectedPractice?.passages[passageId];
    if (!passage || passage.questions.length === 0) return;
    
    setSelectedPassageId(passageId);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(passage.questions.length).fill(null));
    setView('QUIZ');
  };

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedPassage && currentQuestionIndex < selectedPassage.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setView('RESULT');
  };

  const score = useMemo(() => {
    if (!selectedPassage) return 0;
    return selectedPassage.questions.reduce((acc, q, i) => {
      return acc + (userAnswers[i] === q.correct ? 1 : 0);
    }, 0);
  }, [selectedPassage, userAnswers]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex justify-between items-center">
          <button 
            onClick={() => setView('HOME')}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand/20">
              <BookOpen size={20} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-gray-900 tracking-tight">Reading Hub</span>
          </button>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-gray-600">
               <User size={14} />
               <span>user.learning</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {view === 'HOME' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Reading Practice</h1>
                <p className="text-gray-500 text-lg">A diverse system of reading exercises to help you improve your skills quickly.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(QUIZ_DATA).map((practice) => (
                  <motion.div
                    key={practice.id}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectPractice(practice.id)}
                    className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand/30 cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        practice.badgeColor
                      )}>
                        {practice.badge}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold">
                        <Activity size={12} />
                        <span>{practice.questionCount} Câu</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {practice.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                        <Calendar size={14} />
                        <span>Updated on April 16</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand group-hover:text-white transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'PASSAGES' && selectedPractice && (
            <motion.div
              key="passages"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <button 
                onClick={() => setView('HOME')}
                className="group flex items-center gap-2 text-brand font-bold hover:translate-x-[-4px] transition-transform"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </button>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-2">
                <h2 className="text-3xl font-black text-gray-900">{selectedPractice.title}</h2>
                <p className="text-gray-500">Choose a passage to start. Each passage takes approximately 20 minutes.</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {Object.entries(selectedPractice.passages).map(([key, passage]) => {
                  const hasQuestions = passage.questions.length > 0;
                  return (
                    <motion.div
                      key={key}
                      whileHover={hasQuestions ? { x: 4 } : {}}
                      onClick={() => hasQuestions && handleStartQuiz(Number(key))}
                      className={cn(
                        "p-6 rounded-2xl border transition-all flex items-center justify-between",
                        hasQuestions 
                          ? "bg-white border-gray-100 shadow-sm cursor-pointer hover:border-brand/50 hover:shadow-md" 
                          : "bg-gray-50 border-transparent opacity-60 cursor-not-allowed"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center font-bold",
                          hasQuestions ? "bg-brand-light text-brand" : "bg-gray-200 text-gray-400"
                        )}>
                          #{key}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{passage.title}</h4>
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-none">
                            {hasQuestions ? `${passage.questions.length} Questions` : "Coming soon"}
                          </span>
                        </div>
                      </div>
                      
                      {hasQuestions && (
                        <div className="bg-gray-50 p-2 rounded-lg text-gray-400 group-hover:bg-brand group-hover:text-white transition-colors">
                          <ChevronRight size={20} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {view === 'QUIZ' && selectedPassage && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div>
                    <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">{selectedPassage.title}</span>
                    <h2 className="text-2xl font-black text-gray-900">Question {selectedPassage.startNum + currentQuestionIndex}</h2>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-sm font-bold text-gray-600">Progress</span>
                    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-brand"
                        initial={{ width: 0 }}
                        animate={{ width: `${((userAnswers.filter(a => a !== null).length) / selectedPassage.questions.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-black text-brand">
                      {userAnswers.filter(a => a !== null).length}/{selectedPassage.questions.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-12">
                   <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-10 min-h-[400px] flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 max-w-3xl">
                      {selectedPassage.questions[currentQuestionIndex].q}
                    </h3>

                    <div className="flex flex-col gap-4 w-full">
                      {selectedPassage.questions[currentQuestionIndex].opts.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelectAnswer(i)}
                          className={cn(
                            "flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all",
                            userAnswers[currentQuestionIndex] === i
                              ? "bg-brand-light border-brand shadow-md transform scale-[1.02]"
                              : "bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50"
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm",
                            userAnswers[currentQuestionIndex] === i
                              ? "bg-brand text-white"
                              : "bg-gray-100 text-gray-500"
                          )}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span className={cn(
                            "font-semibold text-sm leading-snug",
                            userAnswers[currentQuestionIndex] === i ? "text-brand" : "text-gray-600"
                          )}>
                            {opt}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pb-10">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={handlePrevQuestion}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-gray-500 bg-white border border-gray-100 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span>Back</span>
                </button>

                <div className="flex gap-2">
                   {currentQuestionIndex < selectedPassage.questions.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      className="group flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-white bg-brand shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all"
                    >
                      <span>Next</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="group flex items-center gap-2 px-10 py-3 rounded-2xl font-black text-white bg-gray-900 shadow-xl hover:bg-black transition-all"
                    >
                      <span>Finish Test</span>
                      <CheckCircle2 size={20} className="text-teal-400" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'RESULT' && selectedPassage && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto space-y-10"
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-yellow-400 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl shadow-yellow-200 animate-bounce">
                  <Trophy size={40} strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Great job, congratulations!</h1>
                <p className="text-gray-500 font-medium">You have completed the test <span className="text-brand font-bold">{selectedPassage.title}</span></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-40 h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { value: score },
                            { value: selectedPassage.questions.length - score }
                          ]}
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          <Cell fill="#0d9488" />
                          <Cell fill="#f1f5f9" />
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-3xl font-black text-gray-900">{Math.round((score / selectedPassage.questions.length) * 100)}%</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Correct</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Score</p>
                    <p className="text-4xl font-black text-brand">{score}<span className="text-gray-200 mx-1">/</span>{selectedPassage.questions.length}</p>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                       <CheckCircle2 size={18} className="text-teal-600" />
                       Review your work
                    </h4>
                    
                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {selectedPassage.questions.map((q, i) => {
                        const isCorrect = userAnswers[i] === q.correct;
                        return (
                          <div key={i} className={cn(
                            "group p-4 rounded-2xl border transition-all",
                            isCorrect ? "bg-teal-50 border-teal-100" : "bg-red-50 border-red-100"
                          )}>
                             <div className="flex gap-3">
                                <span className="font-black text-sm text-gray-400 mt-0.5">#{selectedPassage.startNum + i}</span>
                                <div className="space-y-2">
                                  <p className="text-sm font-bold text-gray-800 leading-snug">{q.q}</p>
                                  <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
                                    <span className={cn(
                                       "px-2 py-0.5 rounded-md",
                                       isCorrect ? "bg-teal-600 text-white" : "bg-red-600 text-white"
                                    )}>
                                      You: {userAnswers[i] !== null ? String.fromCharCode(65 + (userAnswers[i] as number)) : '?'}
                                    </span>
                                    <span className="px-2 py-0.5 rounded-md bg-white border border-teal-200 text-teal-700">
                                      Correct: {String.fromCharCode(65 + q.correct)}
                                    </span>
                                  </div>
                                </div>
                             </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => setView('PASSAGES')}
                      className="flex-1 px-6 py-4 rounded-2xl font-bold bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 transition-all"
                    >
                      Try another
                    </button>
                    <button 
                      onClick={() => setView('HOME')}
                      className="flex-1 px-6 py-4 rounded-2xl font-bold bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white py-12 border-t">
         <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-brand/10 text-brand rounded-lg flex items-center justify-center">
                <BookOpen size={12} strokeWidth={2} />
              </div>
              <span className="font-bold text-gray-900 text-sm">Reading Quiz Hub</span>
            </div>
            <p className="text-gray-400 text-xs font-medium max-w-sm mx-auto leading-relaxed">
              Leading the way in online Reading practice with rich and continuously updated data.
            </p>
            <div className="pt-6 border-t border-gray-50 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
              Built by Khoa Le &copy; 2026
            </div>
         </div>
      </footer>
    </div>
  );
}

