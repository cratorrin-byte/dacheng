import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Calculator, ClipboardCopy, CheckCircle, HelpCircle } from 'lucide-react';

interface ContactViewProps {
  lang: 'en' | 'zh-Hant';
  onAddProductToQuote: (productId: string) => void;
  selectedProductIds: string[];
}

export default function ContactView({ lang, onAddProductToQuote, selectedProductIds }: ContactViewProps) {
  // Config state
  const [wLength, setWLength] = useState<number>(12);
  const [wWidth, setWWidth] = useState<number>(8);
  const [bayType, setBayType] = useState<'align' | 'tire' | 'full'>('align');
  const [estimationSaved, setEstimationSaved] = useState(false);

  // Form contact state
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cMessage, setCMessage] = useState('');
  const [formDoneMessage, setFormDoneMessage] = useState<string | null>(null);

  const t = {
    en: {
      headline: "Establish Direct Communications",
      sub: "Our premium technician engineers and workshop layout designers operate directly from Taichung central headquarters.",
      hqTitle: "Taichung Industrial Hub",
      address: "Taichung Industrial Park, No. 1234, Taichung City, Taiwan",
      salesLine: "+886-4-2350-1971",
      customerMail: "service@dacheng1971.com.tw",
      hoursLabel: "Operations Business Hours",
      hoursVal: "Monday &bull; Friday: 08:30 - 18:00 (UTC+8)",
      contactFormTitle: "Pneumatic Integration Request",
      contactFormSub: "Send direct engineering inquiries to our dispatch headquarters.",
      nameLabel: "Your Name",
      mailLabel: "Email Address",
      msgLabel: "Workshop Layout Objectives / Technical Questions",
      sendInquiry: "Dispatch Inquiry Message",
      inquirySentOk: "Success! Inquiry transmitted. Technical specialists will review your blueprints.",

      // Workspace Layout Calculator
      calcTitle: "Smart Workshop Space Plan Estimator",
      calcSub: "Input your intended garage area measurements to auto-generate recommendable machinery packages.",
      lengthLabel: "Garage Available Length (Meters)",
      widthLabel: "Garage Available Width (Meters)",
      squareMet: "Total Estimated Operational Area",
      bayLabel: "Chassis Intention Bay Specialty Focus",
      bayAlign: "3D Wheel Alignment & Steering Hub",
      bayTire: "UHP Tire Services & Balanced Dismount Speed Bay",
      bayFull: "Integrated Dual-alignment Mega Diagnostic Workshop Center",
      pricingLabel: "Suggested Equipment Allocation Setup",
      buttonAddPack: "Add Pack Recommendations to Quote Cart"
    },
    'zh-Hant': {
      headline: "聯絡大城特工與品牌總部",
      sub: "我們的頂尖定位工程顧問與智慧車間佈局工程師團隊，週一至週五隨時為您規劃最高品質底盤調校空間。",
      hqTitle: "大城品牌總部與實車展示中心",
      address: "中華民國臺灣臺中市工業區 1234 號 (臺中工業區)",
      salesLine: "+886-4-2350-1971",
      customerMail: "service@dacheng1971.com.tw",
      hoursLabel: "大城實體營業與客服時間",
      hoursVal: "星期一 至 星期五: 08:30 - 18:00 (國定例假日休息)",
      contactFormTitle: "線上即時留言與技術諮詢",
      contactFormSub: "若有特殊大型客製卡車設備、工廠基座鑽孔等需求，歡送傳送即時評估。",
      nameLabel: "聯絡人姓名",
      mailLabel: "聯絡信箱地址",
      msgLabel: "保修廠目前經營項目 / 現有起重機品牌與諮詢細節",
      sendInquiry: "送出諮詢大批派發",
      inquirySentOk: "諮詢表單已指派成功！大城規劃課專員即將依您提供的信箱寄發規劃規格書。",

      // Workspace Layout Calculator
      calcTitle: "大城智慧保修車間配置空間精算器",
      calcSub: "輸入您的預計店面或新廠房長寬尺寸，系統自適應為您推估最合適的頂尖裝備配套。",
      lengthLabel: "店面或工位預計「長度」(公尺)",
      widthLabel: "店面或工位預計「寬度」(公尺)",
      squareMet: "車間可用總作業坪效面積",
      bayLabel: "預計發展核心業務項目",
      bayAlign: "專供高階 3D 精密四輪定位工位 (高效高客單)",
      bayTire: "專供超大防爆胎極速拆裝與微電腦平衡工位",
      bayFull: "頂級 3D 定位 + 極速防爆拆裝複合型旗艦保修車間 (最推薦)",
      pricingLabel: "專家推薦配置大城主力設備配套",
      buttonAddPack: "一鍵將專家推薦設備包存入估價車"
    }
  };

  const selectedTrans = t[lang];

  // Logic Calculations
  const sqMeters = wLength * wWidth;
  const tP坪 = (sqMeters * 0.3025).toFixed(1);

  // Recommendations Generation
  const getPackageRecommendations = () => {
    switch (bayType) {
      case 'align':
        return {
          title: lang === 'zh-Hant' ? '豪華定位大師配套包' : 'Elite Alignment Diagnostic Pack',
          items: ['Geoliner 670 Imaging', 'Industrial Lift Pro'],
          ids: ['hofmann-geoliner670', 'dacheng-liftpro'],
          minSpace: 35,
          desc: lang === 'zh-Hant' ? '適用於大中型保修車間，主攻賓士、寶馬、保時捷跑胎及一般房車極速定位校正。' : 'Perfect for premium sports wheel repair centers seeking elite steering axis diagnostics.'
        };
      case 'tire':
        return {
          title: lang === 'zh-Hant' ? '極速跑胎裝卸平衡包' : 'UHP Demounting & Balancing Pack',
          items: ['SICE S-226 Tire Changer', 'RAV Wheel Balancer G4'],
          ids: ['sice-s226', 'rav-g4'],
          minSpace: 20,
          desc: lang === 'zh-Hant' ? '專為大車流量、運動改裝店調配，極大速裝配12寸至26寸高端鋁圈輪胎而不安裝刮傷。' : 'Built for speedy turnover. Maximum safety and speed for alloy rims up to 26".'
        };
      case 'full':
      default:
        return {
          title: lang === 'zh-Hant' ? '大城全方位旗艦車間全配套' : 'Comprehensive Mega Workshop Suite',
          items: ['SICE S-226 Tire Changer', 'RAV Wheel Balancer G4', 'Industrial Lift Pro', 'Geoliner 670 Imaging'],
          ids: ['sice-s226', 'rav-g4', 'dacheng-liftpro', 'hofmann-geoliner670'],
          minSpace: 60,
          desc: lang === 'zh-Hant' ? '集大城50載智慧之大成，滿足台灣保修車間頂級旗艦建置規模，產值效率最快翻倍。' : 'Combining the top products into an ultimate automated diagnostic workshop ecosystem.'
        };
    }
  };

  const recommendedPack = getPackageRecommendations();
  const spaceWarning = sqMeters < recommendedPack.minSpace;

  const handlePushPackToCart = () => {
    recommendedPack.ids.forEach(id => {
      onAddProductToQuote(id);
    });
    setEstimationSaved(true);
    setTimeout(() => setEstimationSaved(false), 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName || !cEmail || !cMessage) {
      alert(lang === 'zh-Hant' ? '請填寫完備欄位！' : 'Please fill all message details.');
      return;
    }
    setFormDoneMessage(selectedTrans.inquirySentOk);
    setTimeout(() => {
      setFormDoneMessage(null);
      setCName('');
      setCEmail('');
      setCMessage('');
    }, 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono text-primary font-bold tracking-widest bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full uppercase">
            DIRECT LIAISON CENTRE
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            {selectedTrans.headline}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {selectedTrans.sub}
          </p>
        </div>

        {/* Info modules with visual map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 text-left">
          
          {/* Address contacts modules */}
          <div className="space-y-6">
            <div className="bg-surface-elevated p-6 rounded-lg border border-white/5 space-y-4">
              <h3 className="text-lg font-display font-extrabold text-white">
                {selectedTrans.hqTitle}
              </h3>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5 items-start text-xs">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">Headquarters Destination</span>
                    <p className="font-semibold text-on-surface">{selectedTrans.address}</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start text-xs">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">Hotline Call Service</span>
                    <p className="font-mono font-bold text-lg text-primary">{selectedTrans.salesLine}</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start text-xs">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">Blueprints Inquiry Mailbox</span>
                    <p className="font-mono font-bold text-on-surface hover:underline break-all">
                      {selectedTrans.customerMail}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start text-xs">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase block">
                      {selectedTrans.hoursLabel}
                    </span>
                    <p className="font-sans text-on-surface-variant" dangerouslySetInnerHTML={{ __html: selectedTrans.hoursVal }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vector schematic map reflecting Da Cheng precision */}
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-white/5 relative overflow-hidden h-52 flex flex-col justify-between">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px]"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-mono text-white/40 uppercase">Gps Vector Signal Calibration</span>
                <span className="text-[10px] font-mono text-success-green font-bold">● STATION COLD_ST</span>
              </div>

              {/* Vector schema map decoration lines */}
              <div className="w-full h-16 relative flex items-center justify-center pointer-events-none opacity-40">
                <div className="absolute w-full h-[1px] bg-primary/20"></div>
                <div className="absolute h-full w-[1px] bg-primary/20"></div>
                {/* Visual target center */}
                <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end text-[9px] font-mono text-white/50">
                <span>COORD: 24.1612° N, 120.6015° E</span>
                <span>TAICHUNG INDUSTRIAL AREA</span>
              </div>
            </div>
          </div>

          {/* Form message layout submission */}
          <div className="bg-surface-elevated p-6 rounded-lg border border-white/5">
            <h3 className="text-xl font-display font-black text-white mb-2">
              {selectedTrans.contactFormTitle}
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              {selectedTrans.contactFormSub}
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                  {selectedTrans.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                  placeholder="e.g. Lin Da-Cheng"
                  className="w-full bg-surface border border-white/10 p-3 rounded text-xs focus:outline-none focus:border-primary text-white"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                  {selectedTrans.mailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={cEmail}
                  onChange={(e) => setCEmail(e.target.value)}
                  placeholder="e.g. service@dacheng.com"
                  className="w-full bg-surface border border-white/10 p-3 rounded text-xs focus:outline-none focus:border-primary text-white"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                  {selectedTrans.msgLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={cMessage}
                  onChange={(e) => setCMessage(e.target.value)}
                  placeholder="Describe your blueprint challenges or request calibration setup services..."
                  className="w-full bg-surface border border-white/10 p-3 rounded text-xs focus:outline-none focus:border-primary text-white resize-none"
                />
              </div>

              {formDoneMessage && (
                <div className="p-3 bg-success-green/10 border border-success-green/20 rounded text-xs text-success-green flex gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{formDoneMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-primary text-on-primary font-display font-extrabold text-xs uppercase rounded hover:scale-[1.01] active:scale-95 transition-all text-center cursor-pointer"
              >
                {selectedTrans.sendInquiry}
              </button>
            </form>
          </div>

        </div>

        {/* Space config calculator layout planner */}
        <div className="bg-surface-elevated p-6 sm:p-8 rounded-xl border border-white/5 text-left mb-12">
          
          <div className="max-w-xl mb-10">
            <h3 className="text-xl font-display font-black text-white mb-2 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-secondary" />
              {selectedTrans.calcTitle}
            </h3>
            <p className="text-xs text-on-surface-variant">
              {selectedTrans.calcSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input fields slider (takes 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-on-surface-variant font-semibold">{selectedTrans.lengthLabel}</span>
                  <span className="text-secondary font-bold">{wLength} Meters</span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={25}
                  value={wLength}
                  onChange={(e) => setWLength(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-on-surface-variant font-semibold">{selectedTrans.widthLabel}</span>
                  <span className="text-secondary font-bold">{wWidth} Meters</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={20}
                  value={wWidth}
                  onChange={(e) => setWWidth(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              {/* Computed Readouts */}
              <div className="p-4 bg-surface rounded border border-white/5 space-y-1 text-center">
                <span className="text-[10px] font-mono text-white/40 uppercase block">
                  {selectedTrans.squareMet}
                </span>
                <p className="text-2xl font-mono font-black text-white">
                  {sqMeters} m² <span className="text-xs text-on-surface-variant font-sans font-medium">({tP坪} {lang === 'zh-Hant' ? '坪' : 'Ping'})</span>
                </p>
              </div>

              {/* Bay Selection Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase font-bold tracking-wider block">
                  {selectedTrans.bayLabel}
                </span>

                <div className="space-y-2">
                  {[
                    { key: 'align', label: selectedTrans.bayAlign },
                    { key: 'tire', label: selectedTrans.bayTire },
                    { key: 'full', label: selectedTrans.bayFull }
                  ].map((bay) => (
                    <button
                      key={bay.key}
                      onClick={() => setBayType(bay.key as any)}
                      className={`w-full text-left p-3 rounded text-xs transition-all border cursor-pointer ${
                        bayType === bay.key 
                          ? 'bg-secondary/10 border-secondary text-white font-bold' 
                          : 'bg-surface border-white/5 text-on-surface-variant hover:text-white'
                      }`}
                    >
                      {bay.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated recommend item pack blueprint layout outcome (takes 7 cols) */}
            <div className="lg:col-span-1 border-l border-white/10 h-72 hidden lg:block mx-auto"></div>

            <div className="lg:col-span-6 bg-surface p-6 rounded-lg border border-white/5 space-y-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono text-secondary uppercase font-extrabold tracking-wider block mb-1">
                  {selectedTrans.pricingLabel}
                </span>
                
                <h4 className="text-lg font-display font-black text-white">
                  {recommendedPack.title}
                </h4>

                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed font-sans font-medium">
                  {recommendedPack.desc}
                </p>

                {/* Target warning for space constraints */}
                {spaceWarning && (
                  <div className="mt-3 p-3 bg-red-500/10 border border-red-500/25 rounded text-[11px] font-semibold text-red-400">
                    ⚠️ Space caution: Recommend allocation requires at least {recommendedPack.minSpace}m² space. Currently {sqMeters}m². Consider layout shifts.
                  </div>
                )}

                <div className="space-y-2 pt-4 border-t border-white/5 mt-4">
                  <span className="text-[9px] font-mono text-white/30 uppercase block font-semibold">Component items in package</span>
                  {recommendedPack.items.map((it_p, iidx) => (
                    <div key={iidx} className="flex justify-between items-center bg-surface-container p-2.5 rounded text-xs font-mono text-white border border-white/5">
                      <span>{it_p}</span>
                      <span className="text-[9px] font-mono text-secondary border border-secondary/20 px-1.5 py-0.5 rounded font-bold uppercase">
                        ACTIVE
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {estimationSaved ? (
                <div className="mt-6 p-2.5 bg-success-green/10 border border-success-green/20 rounded text-center">
                  <p className="text-xs font-mono text-success-green font-bold">
                    ✓ Layout package items appended to quotation requests index!
                  </p>
                </div>
              ) : (
                <button
                  onClick={handlePushPackToCart}
                  className="mt-6 w-full py-3 bg-secondary text-surface-deep font-display font-bold text-xs uppercase rounded hover:scale-[1.01] active:scale-95 transition-all text-center cursor-pointer"
                >
                  {selectedTrans.buttonAddPack}
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
