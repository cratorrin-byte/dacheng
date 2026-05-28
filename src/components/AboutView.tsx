import React, { useState } from 'react';
import { Award, Compass, Heart, Users, CheckCircle, Shield, History } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data';

interface AboutViewProps {
  lang: 'en' | 'zh-Hant';
}

export default function AboutView({ lang }: AboutViewProps) {
  const [activeTimelineYear, setActiveTimelineYear] = useState<string>(TIMELINE_EVENTS[TIMELINE_EVENTS.length - 1].year);

  const t = {
    en: {
      aboutHeadline: "Over 50 Years of Engineering Pride",
      aboutSub: "Tracing our roots from a humble local supplier in Taichung (1971) to Taiwan's foremost distributor of state-of-the-art European tire equipment and professional instruction.",
      valuesTitle: "Core Values of Da Cheng",
      values: [
        {
          title: "Industrial Grade Precision",
          desc: "We reject approximations. Every alignment target and balancing sensor represents absolute, verified calibration standards.",
          icon: Shield
        },
        {
          title: "Sustained Mechanical Lifetime",
          desc: "Providing genuine gaskets, components, and ISO-100 lubricants to prevent friction and maximize work-hours of heavy assemblies.",
          icon: Compass
        },
        {
          title: "Integrity & Training Culture",
          desc: "We raise the baseline of local technicians by training thousands of operators inside our specialized academy annually.",
          icon: Heart
        }
      ],
      historyHeadline: "Our Journeys Timeline",
      historySub: "Click any milestone node to view corporate breakthroughs and history detail.",
      showDetail: "Breakthrough Achievement Info"
    },
    'zh-Hant': {
      aboutHeadline: "精準工控跨越 50 載：全面實現智慧車間與自適應調校",
      aboutSub: "大城輪胎機械股份有限公司創立於1971年。半世紀以來，我們扮演著連結世界最頂尖歐美維護科技與台灣在地保修車間的橋樑。從草創時期的氣動配管耗材，到今日主導台灣高精度四輪定位及大專師資培育，大城一直守護著行車安全的第一防線。",
      valuesTitle: "大城的四大核心執念",
      values: [
        {
          title: "無懈可擊的萬分之一精度",
          desc: "我們拒絕妥協。大城供應之定位儀與感應反射板，出廠均經過美國 NIST 國家標準認證，保證調校精確無瑕。",
          icon: Shield
        },
        {
          title: "永續運行的極致安心感",
          desc: "我們不僅售出設備，更進口原裝極壓密封油、黏度潤滑劑，輔以全天候二十四小時工程團隊，守護設備滿載運行。",
          icon: Compass
        },
        {
          title: "大師級技術傳承文化",
          desc: "提昇台灣整體汽修執照水準。大城實務學院每年輔助數百名新一代技師完成學科與高階實操，取得官方證書核發。",
          icon: Heart
        }
      ],
      historyHeadline: "大城半世紀璀璨發展史",
      historySub: "單擊下方里程碑年分節點，重溫大城跨越輝煌半世紀的關鍵歷史。",
      showDetail: "歷史發展里程碑詳情報告"
    }
  };

  const selectedTrans = t[lang];

  return (
    <div className="pt-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* About Headline Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 text-left">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-mono text-primary font-bold tracking-widest bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full uppercase">
              SINCE 1971 &bull; BRAND HERITAGE
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
              {selectedTrans.aboutHeadline}
            </h1>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-sans">
              {selectedTrans.aboutSub}
            </p>
          </div>
          
          <div className="lg:col-span-5 relative">
            {/* Visual Decorative badge of 1971 */}
            <div className="aspect-video bg-gradient-to-br from-surface-elevated to-surface-deep p-8 rounded-xl border border-white/5 flex flex-col justify-between relative shadow-xl overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-44 h-44 bg-primary/5 blur-[45px] pointer-events-none"></div>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-white/40">TAICHUNG HEADQUARTERS</span>
                <span className="text-[9px] font-mono text-success-green bg-success-green/10 px-2 py-0.5 rounded font-bold uppercase">
                  ACTIVE 50Y
                </span>
              </div>
              <div>
                <span className="text-7xl font-display font-black text-white/10 select-none block leading-none">
                  1971
                </span>
                <h4 className="text-sm font-display font-extrabold text-white mt-2">
                  Da Cheng Tires &amp; Machinery Co., Ltd.
                </h4>
                <p className="text-[11px] text-on-surface-variant font-mono uppercase mt-1">
                  Machina Slate Industrial Corp. &bull; Taiwan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Core Values */}
        <div className="mb-24">
          <h2 className="text-2xl font-display font-black text-white text-center mb-12 uppercase tracking-wider">
            {selectedTrans.valuesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedTrans.values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-surface-elevated p-6 rounded-lg border border-white/5 text-left flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-display font-bold text-white">
                      {val.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Historic Timeline Interactivity */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-white/5 text-left mb-12">
          <div className="max-w-xl mb-10">
            <h3 className="text-xl font-display font-black text-white mb-2 flex items-center gap-2">
              <History className="w-5 h-5 text-primary" />
              {selectedTrans.historyHeadline}
            </h3>
            <p className="text-xs text-on-surface-variant">
              {selectedTrans.historySub}
            </p>
          </div>

          {/* Timeline Nodes Row */}
          <div className="relative pb-8 mb-8 border-b border-white/5 overflow-x-auto">
            <div className="absolute top-[34px] left-0 w-full h-[2px] bg-white/5 pointer-events-none"></div>
            <div className="min-w-[600px] flex justify-between pr-4">
              {TIMELINE_EVENTS.map((evt) => (
                <button
                  key={evt.year}
                  onClick={() => setActiveTimelineYear(evt.year)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none cursor-pointer"
                >
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-4 transition-colors ${
                    activeTimelineYear === evt.year 
                      ? 'text-primary' 
                      : 'text-white/40 group-hover:text-white'
                  }`}>
                    {evt.year}
                  </span>
                  
                  <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-mono transition-all duration-300 ${
                    activeTimelineYear === evt.year 
                      ? 'bg-primary border-primary text-surface-deep font-bold scale-110 shadow-lg ring-4 ring-primary/20' 
                      : 'bg-surface border-white/15 text-white/60 group-hover:border-white/40'
                  }`}>
                    •
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active node detail report */}
          {activeTimelineYear ? (() => {
            const activeEvt = TIMELINE_EVENTS.find(e => e.year === activeTimelineYear)!;
            return (
              <div className="bg-surface p-6 rounded-lg border border-primary/20 animate-fadeIn text-left max-w-3xl">
                <span className="text-[10px] font-mono text-primary uppercase font-extrabold block mb-1 tracking-wider">
                  {selectedTrans.showDetail} ({activeEvt.year})
                </span>
                
                <h4 className="text-lg font-display font-black text-white">
                  {lang === 'zh-Hant' ? activeEvt.chineseTitle : activeEvt.title}
                </h4>

                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  {activeEvt.description}
                </p>
              </div>
            );
          })() : null}
        </div>

      </div>
    </div>
  );
}
