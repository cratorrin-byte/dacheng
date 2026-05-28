import React, { useState } from 'react';
import { Calendar, Users, Award, BookOpen, Clock, ChevronDown, Check, UserCheck, AlertCircle } from 'lucide-react';
import { Course } from '../types';
import { COURSES } from '../data';

interface TrainingViewProps {
  lang: 'en' | 'zh-Hant';
}

export default function TrainingView({ lang }: TrainingViewProps) {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(COURSES[0].id);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [selectedCourseRegisterId, setSelectedCourseRegisterId] = useState(COURSES[0].id);
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState<string | null>(null);

  // Interactive Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [diplomaName, setDiplomaName] = useState('');

  const t = {
    en: {
      academyHeadline: "Da Cheng Training Academy",
      academySub: "Elevating local mechanic workshops to international master standards with certified technical curriculum program.",
      stats: [
        { label: "Active Trainers", value: "8 Master Lecturers" },
        { label: "Graduated Technicians", value: "2,400+ Since 1998" },
        { label: "Certified Shops", value: "350+ Garages" }
      ],
      courseDirectory: "Course Director Directory",
      level: "Required Experience Level",
      duration: "Duration",
      audience: "Target Audience",
      upcomingDates: "Upcoming Sessions",
      registeredBadge: "Registered Capacity Status",
      accordionTitle: "Step-by-Step Training Syllabus",
      registrationTitle: "Fast-Track Seat Registration",
      regName: "Applicant Full Name",
      regPhone: "Mobile Contact Phone",
      regEmail: "Business Email Address",
      selectCourse: "Select Course Core Program",
      submitReg: "Reserve Seat & Send Dispatch",
      regDone: "Success! Technical dispatch reservation transmitted. Our coordinator will contact you shortly.",

      // Tool Quiz
      knowledgeTestTitle: "Interactive Certified Specialist Challenge",
      knowledgeTestSubtitle: "Test your chassis steering geometry knowledge and earn your online Specialist Diploma.",
      quizStartBtn: "Begin Specialist Quiz",
      quizNext: "Next Question",
      quizRetake: "Retake Quiz",
      quizSuccess: "Congratulations! You have scored 100% and unlocked your Certification Diploma.",
      quizFail: "Score: [SCORE]%. You need 100% to qualify for the Academy credential. Review alignment guides and try again!",
      printDiploma: "Generate Authorized Diploma Certificate",
      diplomaLabelPlaceholder: "Enter Certificate Print Name",
      diplomaAwardedTo: "This certifies that",
      diplomaText: "has successfully demonstrated advanced proficiency in Steering Kinematics, 3D Camera Target Calibration and Mechanical Load Alignments according to Da Cheng Academy Standards.",
      quizQuestions: [
        {
          q: "Which angle describes the forward or backward tilt of the steering axis when viewed from the side?",
          a: ["Camber", "Caster", "Toe-In", "Steering Axis Inclination"],
          correct: 1
        },
        {
          q: "What is the primary visual symptom of excessive Toe-In on passenger vehicle tires?",
          a: ["Feathered tire tread wear pattern", "Heavy shoulder wear on one side only", "Cupping wear along the middle tread", "Bald spots across random spots"],
          correct: 0
        },
        {
          q: "Why is roll-back dynamic compensation executed on 3D alignment target systems?",
          a: ["To calibrate the camera lasers output", "To eliminate run-out error caused by target clamps or wheel rims eccentricity", "To lift the vehicle up to maximum lift capacity safely", "To measure the tire pressure automatically"],
          correct: 1
        }
      ]
    },
    'zh-Hant': {
      academyHeadline: "大城實務培訓學院 (Da Cheng Academy)",
      academySub: "台灣第一家系統化引進歐美最高規四輪定位、ADAs校正實車教室。50年經驗傳承，培育保修廠技師晉身卓越大師階級。",
      stats: [
        { label: "原廠授權金牌講師", value: "8 位總師資" },
        { label: "累計結業技術人才", value: "2,400 人+ 創校迄今" },
        { label: "輔導升級定位車間", value: "350 間保修廠" }
      ],
      courseDirectory: "核心技術培訓課程指南表",
      level: "技術經驗門檻級別",
      duration: "訓練總時數",
      audience: "培訓對象與資格",
      upcomingDates: "近期開課班別日期",
      registeredBadge: "學員招募與註冊狀態",
      accordionTitle: "核心階段技術實戰大綱 (單擊查看)",
      registrationTitle: "核心課程學員席次線上預約",
      regName: "學員法定中文姓名",
      regPhone: "行動電話 (聯絡電話)",
      regEmail: "保修廠電子郵件地址",
      selectCourse: "選取欲培訓專業學科",
      submitReg: "傳送派訓席次預約",
      regDone: "派訓名額傳送成功！大城教育協調員將於48小時內致電核對公司名稱與教材派送。",

      // Tool Quiz
      knowledgeTestTitle: "大城技術專家知識在線考核",
      knowledgeTestSubtitle: "測試您對底盤測量、四向推力角與定位幾何的認知，通過可取得大城卓越證書！",
      quizStartBtn: "開始考核挑戰",
      quizNext: "下一題考核",
      quizRetake: "重新考核",
      quizSuccess: "滿分！您已完美通過考核，正式授權下載卓越學術資格執照！",
      quizFail: "您的得分為 [SCORE]%。未達 100% 滿分門檻。請重新研讀定位規範，再次挑戰！",
      printDiploma: "列印授權技師卓越證書",
      diplomaLabelPlaceholder: "輸入證書印製姓名 (中文或 English)",
      diplomaAwardedTo: "大城實務培訓學院特此證明",
      diplomaText: "於本在線考核中，針對車輛轉向幾何、3D 光學感應定位補償以及全向重載定位校正，具備完備的專業底盤診斷與調整理論技能，成績及格特此發給證書證章以茲證明。",
      quizQuestions: [
        {
          q: "從車輛側面觀察時，轉向銷（或避震支柱）向後或向前的傾斜角度稱為什麼？",
          a: ["外傾角 (Camber)", "後傾角 (Caster)", "前束角 (Toe)", "轉向軸內傾角 (SAI)"],
          correct: 1
        },
        {
          q: "當輪胎出現「羽毛狀 (Feathered) 磨損」時，通常代表底盤哪一項測量數值過大？",
          a: ["前束值過大或過小 (Toe Error)", "外傾角嚴重誤差 (Camber Error)", "胎壓嚴重不足", "避震器完全漏油失效"],
          correct: 0
        },
        {
          q: "在 3D 電腦定位作業中，為什麼技師必須推動車輛進行「滾動補償（Roll-Back Compensation）」？",
          a: ["用以清除車體表面的靜電干擾", "用以消除夾具、鋁圈偏擺誤差，確保取得真實車輪中軸旋轉面", "用來測試煞車力道是否足夠", "用以自動充氣至原廠標準值"],
          correct: 1
        }
      ]
    }
  };

  const selectedTrans = t[lang];

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone || !studentEmail) {
      alert(lang === 'zh-Hant' ? '請填寫所有欄位資料！' : 'Please fill all field details.');
      return;
    }
    setRegisterSuccessMessage(selectedTrans.regDone);
    setTimeout(() => {
      setRegisterSuccessMessage(null);
      setStudentName('');
      setStudentPhone('');
      setStudentEmail('');
    }, 5000);
  };

  const handleAnswerClick = (index: number) => {
    const nextAnswers = [...quizAnswers, index];
    setQuizAnswers(nextAnswers);

    if (quizStep + 1 < selectedTrans.quizQuestions.length) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate total correctness
      let correctCount = 0;
      selectedTrans.quizQuestions.forEach((q, qidx) => {
        if (nextAnswers[qidx] === q.correct) {
          correctCount++;
        }
      });
      const score = Math.round((correctCount / selectedTrans.quizQuestions.length) * 100);
      setQuizScore(score);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(true);
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizScore(null);
  };

  return (
    <div className="pt-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Banner with modern dark colors */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono text-tertiary font-bold tracking-widest bg-tertiary/10 border border-tertiary/25 px-3.5 py-1.5 rounded-full uppercase">
            EST. 1998 &bull; TAICHUNG
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            {selectedTrans.academyHeadline}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {selectedTrans.academySub}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {selectedTrans.stats.map((stat, idx) => (
              <div key={idx} className="bg-surface-elevated p-4 rounded-lg border border-white/5">
                <div className="text-lg font-display font-black text-tertiary">{stat.value}</div>
                <div className="text-[10px] font-mono text-on-surface-variant uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Directory Listings and syllabus details splits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* List group tab directory */}
          <div className="lg:col-span-1 space-y-3 text-left">
            <span className="text-[10px] font-mono text-white/40 uppercase font-bold tracking-widest block px-2">
              {selectedTrans.courseDirectory}
            </span>
            {COURSES.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 border cursor-pointer ${
                  activeCourseId === course.id 
                    ? 'bg-tertiary/10 border-tertiary text-white shadow-md' 
                    : 'bg-surface-elevated border-white/5 hover:border-white/10 text-on-surface-variant hover:text-white'
                }`}
              >
                <span className="text-[9px] font-mono bg-white/5 px-2 py-0.5 rounded text-white/60 mr-2 uppercase">
                  {course.level}
                </span>
                <span className="text-[10px] font-mono text-white/40 block mt-1">{course.duration}</span>
                <h4 className="text-xs sm:text-sm font-display font-extrabold mt-1">
                  {lang === 'zh-Hant' ? course.chineseTitle : course.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Expanded active selection syllabus display */}
          <div className="lg:col-span-2 bg-surface-elevated p-6 rounded-lg border border-white/5 flex flex-col justify-between text-left">
            {activeCourseId ? (() => {
              const currentCourse = COURSES.find(c => c.id === activeCourseId)!;
              return (
                <div className="space-y-6">
                  {/* Title block */}
                  <div className="pb-4 border-b border-white/5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono bg-tertiary/10 border border-tertiary/20 text-tertiary px-2 py-0.5 rounded">
                        {selectedTrans.level}: {currentCourse.level}
                      </span>
                      <span className="text-[10px] font-mono bg-white/5 text-on-surface-variant px-2 py-0.5 rounded">
                        {selectedTrans.duration}: {currentCourse.duration}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-black text-white">
                      {lang === 'zh-Hant' ? currentCourse.chineseTitle : currentCourse.title}
                    </h2>
                    <p className="text-xs text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                      {currentCourse.description}
                    </p>
                  </div>

                  {/* Syllabus lists inside Accordion */}
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase font-bold tracking-widest block mb-3">
                      {selectedTrans.accordionTitle}
                    </span>
                    <div className="space-y-2 max-h-52 overflow-y-auto pr-2">
                      {currentCourse.syllabus.map((syll, index) => (
                        <div key={index} className="bg-surface/40 p-3 rounded border border-white/5 text-xs flex gap-2.5 items-start">
                          <span className="font-mono text-tertiary font-bold">0{index+1}</span>
                          <span className="text-on-surface font-medium">{syll}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata labels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-white/30 block uppercase">{selectedTrans.audience}</span>
                      <p className="text-xs font-semibold text-on-surface">{currentCourse.audience}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-white/30 block uppercase">{selectedTrans.upcomingDates}</span>
                      <div className="flex gap-2">
                        {currentCourse.upcomingDates.map((date) => (
                          <span key={date} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-white font-medium border border-white/5">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })() : null}
          </div>
        </div>

        {/* Dynamic application booking program and Certified Specialist test interactive module */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Applicants Dispatch Form Registration Panel counts as 2 Cols */}
          <div className="lg:col-span-2 bg-surface-elevated p-6 rounded-lg border border-white/5 items-start flex flex-col text-left">
            <h3 className="text-lg font-display font-extrabold text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-tertiary" />
              {selectedTrans.registrationTitle}
            </h3>
            <p className="text-xs text-on-surface-variant mb-6">
              Reserve a seat for your key technicians and start receiving diagnostic certification benefits.
            </p>

            <form onSubmit={handleRegisterSubmit} className="w-full space-y-4">
              <div>
                <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase tracking-wide font-semibold">
                  {selectedTrans.selectCourse}
                </label>
                <select
                  value={selectedCourseRegisterId}
                  onChange={(e) => setSelectedCourseRegisterId(e.target.value)}
                  className="w-full bg-surface border border-white/10 p-3 rounded text-xs select-none focus:outline-none focus:border-tertiary text-on-surface"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id} className="bg-surface-deep text-on-surface text-xs">
                      {lang === 'zh-Hant' ? course.chineseTitle : course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase tracking-wide font-semibold">
                  {selectedTrans.regName}
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Lin Da-Cheng"
                  className="w-full bg-surface border border-white/10 p-3 rounded text-xs focus:outline-none focus:border-tertiary text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase tracking-wide font-semibold">
                    {selectedTrans.regPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    placeholder="e.g. +886 912-345-678"
                    className="w-full bg-surface border border-white/10 p-3 rounded text-xs focus:outline-none focus:border-tertiary text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase tracking-wide font-semibold">
                    {selectedTrans.regEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="e.g. shop@gmail.com"
                    className="w-full bg-surface border border-white/10 p-3 rounded text-xs focus:outline-none focus:border-tertiary text-white"
                  />
                </div>
              </div>

              {registerSuccessMessage && (
                <div className="p-3 bg-success-green/10 border border-success-green/20 rounded text-xs text-success-green flex gap-2">
                  <UserCheck className="w-4 h-4 shrink-0" />
                  <span>{registerSuccessMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-tertiary text-on-tertiary font-display font-extrabold text-xs uppercase rounded hover:scale-[1.01] active:scale-95 transition-all text-center cursor-pointer"
              >
                {selectedTrans.submitReg}
              </button>
            </form>
          </div>

          {/* Golden Knowledge Diploma Quiz Challenge (3 columns) */}
          <div className="lg:col-span-3 bg-surface-elevated p-6 rounded-lg border border-white/5 items-start flex flex-col text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] pointer-events-none"></div>

            <h3 className="text-lg font-display font-extrabold text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-gold" />
              {selectedTrans.knowledgeTestTitle}
            </h3>
            <p className="text-xs text-on-surface-variant mb-6">
              {selectedTrans.knowledgeTestSubtitle}
            </p>

            {!quizStarted && quizScore === null && (
              <div className="bg-surface/30 border border-white/5 p-6 rounded-lg w-full text-center py-10">
                <p className="text-xs text-on-surface-variant mb-4 max-w-md mx-auto leading-relaxed">
                  Prove your skills in core suspension systems. A perfect score of 100% awards a personalized credentials certificate signed by Da Cheng.
                </p>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="px-6 py-2.5 bg-gradient-to-r from-brand-gold to-yellow-500 text-surface-deep font-mono text-xs font-extrabold uppercase rounded shadow hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  {selectedTrans.quizStartBtn}
                </button>
              </div>
            )}

            {quizStarted && quizScore === null && (() => {
              const currentQ = selectedTrans.quizQuestions[quizStep];
              return (
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono text-white/40 pb-2 border-b border-white/5">
                    <span>ASSESSMENT IN PROGRESS</span>
                    <span>QUESTION {quizStep + 1} OF {selectedTrans.quizQuestions.length}</span>
                  </div>

                  <p className="text-sm font-display font-bold text-white mb-4">
                    {currentQ.q}
                  </p>

                  <div className="space-y-2.5">
                    {currentQ.a.map((option, opIdx) => (
                      <button
                        key={opIdx}
                        onClick={() => handleAnswerClick(opIdx)}
                        className="w-full p-3 bg-surface border border-white/10 hover:border-brand-gold hover:bg-white/5 rounded text-xs text-left transition-colors font-medium text-on-surface cursor-pointer"
                      >
                        <span className="font-mono text-brand-gold mr-2 font-black">{['A', 'B', 'C', 'D'][opIdx]}.</span> {option}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}

            {quizScore !== null && (() => {
              const isPerfect = quizScore === 100;
              return (
                <div className="w-full space-y-6">
                  <div className={`p-4 rounded border text-xs leading-relaxed ${isPerfect ? 'bg-success-green/5 border-success-green text-success-green' : 'bg-red-500/5 border-red-500/20 text-red-400'}`}>
                    <div className="flex items-center gap-2 mb-1.5 font-bold">
                      <AlertCircle className="w-4 h-4" />
                      <span>{isPerfect ? selectedTrans.quizSuccess : selectedTrans.quizFail.replace('[SCORE]', quizScore.toString())}</span>
                    </div>
                  </div>

                  {isPerfect ? (
                    <div className="space-y-4 bg-surface p-4 rounded border border-white/5">
                      <div>
                        <label className="text-[10px] font-mono text-white/50 block mb-1 uppercase font-semibold">
                          {selectedTrans.diplomaLabelPlaceholder}
                        </label>
                        <input
                          type="text"
                          value={diplomaName}
                          onChange={(e) => setDiplomaName(e.target.value)}
                          placeholder="Print Name on Certificate"
                          className="w-full bg-surface-container border border-white/10 p-2.5 rounded text-xs text-white uppercase font-mono tracking-widest"
                        />
                      </div>

                      {diplomaName && (
                        <div className="border-4 border-double border-brand-gold/60 p-6 rounded text-center relative pointer-events-none mt-4 animate-fadeIn select-none">
                          <div className="absolute inset-2 border border-brand-gold/10 pointer-events-none"></div>
                          
                          <span className="text-[10px] font-mono text-brand-gold/80 block uppercase tracking-widest font-extrabold mb-1">
                            DA CHENG TIRES &amp; MACHINERY ACADEMY
                          </span>
                          <span className="text-[8px] font-mono text-white/30 block mb-4 uppercase">
                            TAICHUNG EST. 1998
                          </span>

                          <p className="text-xs italic text-on-surface-variant mb-1">
                            {selectedTrans.diplomaAwardedTo}
                          </p>
                          <h4 className="text-lg font-display font-black text-white uppercase tracking-widest border-b border-brand-gold/30 pb-2 mb-2 max-w-sm mx-auto">
                            {diplomaName}
                          </h4>
                          <p className="text-[9px] leading-relaxed text-on-surface-variant max-w-md mx-auto">
                            {selectedTrans.diplomaText}
                          </p>

                          <div className="flex justify-between items-center text-[8px] font-mono text-white/30 mt-6 pt-2 border-t border-white/5">
                            <span>REGISTRATION #DC-{Math.floor(Math.random()*900000)+100000}</span>
                            <span>VERIFIED 100% SCORE SUCCESSFUL IN PROGRESS</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <button
                    onClick={resetQuiz}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold uppercase rounded cursor-pointer text-center block"
                  >
                    {selectedTrans.quizRetake}
                  </button>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </div>
  );
}
