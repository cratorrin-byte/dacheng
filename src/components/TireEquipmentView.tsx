import React, { useState } from 'react';
import { Play, Check, ChevronRight, Activity, Cpu, ShieldAlert, BadgeInfo, FileDown } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface TireEquipmentViewProps {
  lang: 'en' | 'zh-Hant';
  onAddProductToQuote: (productId: string) => void;
  onRemoveProductFromQuote: (productId: string) => void;
  selectedProductIds: string[];
  openQuoteModal: () => void;
  setSelectedDetailProduct: (product: Product | null) => void;
}

export default function TireEquipmentView({
  lang,
  onAddProductToQuote,
  onRemoveProductFromQuote,
  selectedProductIds,
  openQuoteModal,
  setSelectedDetailProduct
}: TireEquipmentViewProps) {
  const [activeBrandFilter, setActiveBrandFilter] = useState<string>('ALL');
  const [calibrationConsoleOpen, setCalibrationConsoleOpen] = useState(false);
  const [calibrationStep, setCalibrationStep] = useState(0);
  const [simulatedAngle, setSimulatedAngle] = useState({ toe: 0.15, camber: -0.85 });

  const t = {
    en: {
      badge: "ESTABLISHED 1971",
      titlePre: "Precision",
      titleHighlight: "Tire Tech",
      titlePost: "For The Industrial Era",
      subtitle: "大城輪胎機械 — Leading the automotive maintenance industry for over 50 years with premium European machinery and professional technician training.",
      exploreBtn: "Explore Catalog",
      watchBtn: "Watch Showcase",
      stats: [
        { label: "Years Experience", value: "50+" },
        { label: "Workshops Equipped", value: "1000+" },
        { label: "Tech Support", value: "24/7" },
        { label: "Industry Standard", value: "GOLD" }
      ],
      ecosystemTitle: "Industrial Ecosystem",
      ecosystemSubtitle: "Comprehensive hardware & software solutions built for the modern smart workshop.",
      ecoSpecsLabel: "Specialized Hardware",
      ecoSpecsTitle: "Tire Service Equipment",
      ecoSpecsSubtitle: "拆胎機 & 平衡機",
      ecoSpecsBullets: ["3D Wheel Alignment", "Scissor & Post Lifts", "Heavy-duty Balancers"],
      ecoAcadLabel: "Professional Education",
      ecoAcadTitle: "Da Cheng Academy",
      ecoAcadSubtitle: "大城學院",
      ecoAcadDesc: "Intensive training courses for automotive mechanics using global diagnostic calibrations.",
      ecoAcadBtn: "View Courses",
      ecoMaintLabel: "Aftermarket Care",
      ecoMaintTitle: "Maintenance & Consumables",
      ecoMaintSubtitle: "汽修百貨 & 油品",
      ecoAuthLabel: "Authorized Partnership",
      ecoAuthTitle: "European Engineering Systems",
      brandsDesc: "Importing world-pinnacle tooling systems directly from Italy, Germany, and USA.",
      sigTitle: "Signature Equipment",
      addQuote: "Select for Quote",
      removeQuote: "Remove from Quote",
      viewSpecs: "VIEW SPECS",
      calibrationHeadline: "Simulated Calibration Showcase",
      calibrationSub: "Experience Hofmann direct camera target diagnostics in action.",
      calibrateBtn: "Start Automated Alignment Run",
      calibrateStep0: "Place XD digital targets onto 4 wheels",
      calibrateStep1: "Automated camera height alignment setup",
      calibrateStep2: "Thrust angle laser reflection tracking",
      calibrateStep3: "Live Toe/Camber feedback optimization",
      done: "Optimized alignment established with 100% precision."
    },
    'zh-Hant': {
      badge: "深耕台灣 • 創始於 1971 年",
      titlePre: "極致精準的",
      titleHighlight: "汽修特工機械",
      titlePost: "引領智慧汽修新紀元",
      subtitle: "大城輪胎機械 — 50餘載專注於引進歐美頂級拆胎機、平衡機與高精度定位設備，為台灣輪胎行與大型保修廠提供全方位規劃及核心師資培訓。",
      exploreBtn: "瀏覽產品型錄",
      watchBtn: "觀看動態校正展示",
      stats: [
        { label: "永續經營歷史", value: "50 載+" },
        { label: "已簽約保修車間", value: "1000 間+" },
        { label: "全方位原廠客服", value: "24h 全天" },
        { label: "原廠授權代理", value: "GOLD" }
      ],
      ecosystemTitle: "頂級車間工藝生態系",
      ecosystemSubtitle: "全面整合工控硬體與專業大數據校正軟體，打造高收益智慧維修廠床。",
      ecoSpecsLabel: "特種重型裝備",
      ecoSpecsTitle: "輪胎拆裝平衡系統",
      ecoSpecsSubtitle: "拆胎機 & 平衡機",
      ecoSpecsBullets: ["3D 複合幾何定位儀", "頂高大/中剪式起重機", "重型卡客車拆胎裝備"],
      ecoAcadLabel: "專業技術學院",
      ecoAcadTitle: "大城實務培訓學院",
      ecoAcadSubtitle: "大城學院",
      ecoAcadDesc: "由原廠授權認證之頂尖講師，親自傳授底盤幾何定位及實操作業課程。",
      ecoAcadBtn: "查看最新課程",
      ecoMaintLabel: "售後原廠保修精品",
      ecoMaintTitle: "精化保修耗材與精品",
      ecoMaintSubtitle: "汽修百貨 & 油品",
      ecoAuthLabel: "官方獨家首要經銷商",
      ecoAuthTitle: "歐洲與美國頂尖工程系統",
      brandsDesc: "原裝代理義大利、德國與美國精良工藝廠牌，提供最高壽命回饋。",
      sigTitle: "旗艦代表性重裝",
      addQuote: "加入預約估價車",
      removeQuote: "移出估價車",
      viewSpecs: "詳細規格數據",
      calibrationHeadline: "實機智慧校正平台模擬",
      calibrationSub: "親自體驗 Hofmann 3D 鏡頭光學目標追蹤診斷流程。",
      calibrateBtn: "啟動四向自動化四輪定位檢測",
      calibrateStep0: "將 XD 數位感應反射板卡入四輪輪緣",
      calibrateStep1: "光學校正塔高自適應偵測高度與軸距",
      calibrateStep2: "即時推力角/傾角雷射微調訊號追蹤評估",
      calibrateStep3: "左/右前輪偏擺與外傾角即時優化最佳化",
      done: "定位調校校正完畢，精度保證符合萬分之一度！"
    }
  };

  const selectedTrans = t[lang];

  // Brand logos / listings matching HTML layout
  const brands = ['ALL', 'SICE', 'RAV', 'HOFMANN', 'DA CHENG'];

  const filteredProducts = activeBrandFilter === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.brand.toUpperCase() === activeBrandFilter.toUpperCase());

  const handleStartCalibration = () => {
    setCalibrationConsoleOpen(true);
    setCalibrationStep(0);
    setSimulatedAngle({ toe: 0.15, camber: -0.85 });

    const intervalIds: any[] = [];
    const step1 = setTimeout(() => {
      setCalibrationStep(1);
    }, 1500);
    const step2 = setTimeout(() => {
      setCalibrationStep(2);
      setSimulatedAngle({ toe: 0.04, camber: -0.92 });
    }, 3200);
    const step3 = setTimeout(() => {
      setCalibrationStep(3);
      setSimulatedAngle({ toe: 0.00, camber: -1.00 });
    }, 5000);
    const step4 = setTimeout(() => {
      setCalibrationStep(4);
    }, 7000);

    // If section closes, clean timeouts automatically (simulated)
  };

  return (
    <div className="pt-16">
      {/* Immersive Hero Section with background Machinery Image */}
      <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden bg-surface-deep">
        {/* Background Image with Dark Linear Overlays */}
        <div className="absolute inset-0 z-0 opacity-45">
          <img 
            alt="Industrial Excellence" 
            className="w-full h-full object-cover grayscale opacity-75"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhrzJeur2bf9B_51UzXG51_kuyCghmCg5FAy0aAqv8OSXQBWHJdcG2rsGSnP5mOiuIwo4-Y22pwg0XpkZyIqHXJqD0ln48Gbv28eV4nuzLEIRh-oAorPfV3wN61UTVhT1iINDCD5T4q06mpVh9q1TfnXLjg6hzZMLUO61nAfAaYfuPeL9fG4y0vRhlMBf_9zNld1D2_UgDLkIjL4AhlJv0OzOHpO0P_NfeKDkdiGVwsfEzX5frsUulQb__O"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020217] via-[#020217]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020217] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/25 rounded-full select-none">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-primary absolute"></span>
              <span className="text-[11px] font-mono text-primary font-bold tracking-widest uppercase">
                {selectedTrans.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-[1.12] tracking-tight">
              {selectedTrans.titlePre} <span className="text-gradient-red">{selectedTrans.titleHighlight}</span> <br className="hidden sm:inline" />
              {selectedTrans.titlePost}
            </h1>

            <p className="text-base md:text-lg text-on-surface-variant font-sans leading-relaxed text-balance">
              {selectedTrans.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a
                href="#catalog"
                className="px-8 py-4 bg-primary-container text-on-primary-container font-display text-base font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all glow-red cursor-pointer"
              >
                {selectedTrans.exploreBtn}
              </a>
              <button
                id="hero-watch-showcase"
                onClick={handleStartCalibration}
                className="group flex items-center gap-3 text-white font-mono text-xs font-bold leading-normal uppercase cursor-pointer"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full group-hover:bg-primary group-hover:border-primary transition-all shadow-inner bg-surface/40">
                  <Play className="w-5 h-5 fill-current text-white" />
                </span>
                {selectedTrans.watchBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Industrial Stats Drawer */}
        <div className="absolute bottom-0 left-0 w-full glass-panel border-t-0 border-x-0">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {selectedTrans.stats.map((stat, idx) => (
              <div key={idx} className="border-l border-white/10 pl-4 first:border-l-0">
                <div className="text-2xl md:text-3xl font-display font-black text-primary leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Simulation Calibration View Console */}
      {calibrationConsoleOpen && (
        <section className="bg-surface-container-lowest border-y border-white/10 py-12 px-6">
          <div className="max-w-4xl mx-auto glass-panel p-6 rounded-xl border border-primary/25 relative overflow-hidden">
            <button
              onClick={() => setCalibrationConsoleOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-white font-mono text-xs cursor-pointer bg-white/5 active:bg-white/10 px-2.5 py-1 rounded"
            >
              Close Simulator ✕
            </button>

            <div className="flex items-center gap-2 mb-2 text-primary font-mono text-xs uppercase tracking-wide">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>Diagnostic Control Console Active</span>
            </div>

            <h3 className="text-xl font-display font-bold text-white">
              {selectedTrans.calibrationHeadline}
            </h3>
            <p className="text-xs text-on-surface-variant mb-6">
              {selectedTrans.calibrationSub}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Technical readout dashboard */}
              <div className="md:col-span-2 bg-surface-deep p-4 rounded border border-white/5 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-[11px] font-mono text-white/50">Target Scanning Model</span>
                  <span className="text-[11px] font-mono text-tertiary">GEOLINER-670-LIVE</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface/30 p-3 rounded border border-white/5 text-center">
                    <span className="text-[10px] font-mono uppercase text-on-surface-variant block">Toe Angle</span>
                    <span className={`text-2xl font-mono font-black ${simulatedAngle.toe === 0 ? 'text-success-green' : 'text-brand-gold animate-pulse'}`}>
                      {simulatedAngle.toe === 0 ? '0.00° PERFECT' : `+${simulatedAngle.toe.toFixed(2)}°`}
                    </span>
                  </div>
                  <div className="bg-surface/30 p-3 rounded border border-white/5 text-center">
                    <span className="text-[10px] font-mono uppercase text-on-surface-variant block">Camber Alignment</span>
                    <span className={`text-2xl font-mono font-black ${simulatedAngle.camber === -1 ? 'text-success-green' : 'text-primary'}`}>
                      {simulatedAngle.camber.toFixed(2)}°
                    </span>
                  </div>
                </div>

                {/* Simulated diagnostic chart lines */}
                <div className="h-20 bg-surface/50 rounded p-2 relative flex items-end overflow-hidden border border-white/5">
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-white/30">Target Reflective Waves Signal</div>
                  <div className="w-full flex justify-around items-end h-10">
                    <div className="w-6 bg-red-500/30 rounded-t transition-all" style={{ height: calibrationStep >= 1 ? '70%' : '20%' }}></div>
                    <div className="w-6 bg-yellow-500/30 rounded-t transition-all" style={{ height: calibrationStep >= 2 ? '85%' : '35%' }}></div>
                    <div className="w-6 bg-blue-500/30 rounded-t transition-all" style={{ height: calibrationStep >= 3 ? '95%' : '45%' }}></div>
                    <div className="w-6 bg-success-green/40 rounded-t transition-all animate-pulse" style={{ height: calibrationStep >= 4 ? '100%' : '15%' }}></div>
                  </div>
                </div>
              </div>

              {/* Step indicator timeline */}
              <div className="bg-surface-container p-4 rounded border border-white/5 flex flex-col justify-between">
                <div className="space-y-3.5">
                  <span className="text-[10px] font-mono text-white/40 uppercase block">Operation Steps</span>
                  <div className="space-y-2.5">
                    {[
                      selectedTrans.calibrateStep0,
                      selectedTrans.calibrateStep1,
                      selectedTrans.calibrateStep2,
                      selectedTrans.calibrateStep3
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-2 items-start text-xs">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono mt-0.5 ${
                          calibrationStep > idx 
                            ? 'bg-success-green text-surface font-bold' 
                            : calibrationStep === idx 
                              ? 'bg-primary text-surface-deep font-bold animate-ping' 
                              : 'bg-white/10 text-white/40'
                        }`}>
                          {calibrationStep > idx ? '✓' : idx + 1}
                        </span>
                        <span className={calibrationStep === idx ? 'text-white font-semibold' : 'text-on-surface-variant'}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {calibrationStep === 4 ? (
                  <div className="mt-4 p-2 bg-success-green/10 border border-success-green/20 rounded text-center">
                    <p className="text-[11px] font-mono text-success-green font-semibold">
                      {selectedTrans.done}
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={handleStartCalibration}
                    className="mt-4 w-full py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-surface-deep transition-all font-mono text-xs font-bold rounded cursor-pointer"
                  >
                    Restart Process Run
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industrial Ecosystem Bento Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="ecosystem">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              {selectedTrans.ecosystemTitle}
            </h2>
            <p className="text-sm font-sans text-on-surface-variant leading-relaxed">
              {selectedTrans.ecosystemSubtitle}
            </p>
          </div>
        </div>

        {/* Bento grid layout mirroring image structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tire Equipment card - spans 2 columns */}
          <div className="md:col-span-2 group relative min-h-[460px] rounded-xl overflow-hidden bg-surface-elevated border border-white/10 hover:border-primary/50 transition-all duration-550 flex flex-col justify-between p-8 md:p-10">
            {/* Background Equipment Visual */}
            <img 
              alt="Tire Equipment" 
              className="absolute right-0 bottom-0 w-3/4 md:w-2/3 opacity-30 group-hover:opacity-75 group-hover:scale-[1.04] transition-all duration-700 pointer-events-none object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ui1aIVUb6p0-6JJ7vsL8Hc-7NoxDo-wZCx9e9iyhBaxGzH1d-n1ppOlJnJi7zs9YDeF7nVbTARN2Smsyfw6YphDPkwoC34NBRMwLtn9LWninigWCsh8blMfmOR3cDwONPEklVLRuwQZIjVnrmY-YcSsOklKT2tKx7xfFRZ3vqtCRZml9zhAFN_aI8REoJJH_2cLpVVSuHinyXxQk0xfAp4veYeo_WWe1h7s_oSyhGgO-11QtLeQoAFRevMO"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-4 max-w-md relative z-10 text-left">
              <span className="text-[10px] font-mono text-primary tracking-[0.2em] font-extrabold uppercase bg-primary/5 border border-primary/20 px-2.5 py-1 rounded">
                {selectedTrans.ecoSpecsLabel}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-white leading-snug">
                {selectedTrans.ecoSpecsTitle}<br />
                <span className="text-on-surface-variant font-medium text-lg md:text-xl">
                  {selectedTrans.ecoSpecsSubtitle}
                </span>
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs font-mono text-white/70 relative z-10 text-left">
              {selectedTrans.ecoSpecsBullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Card - spans 1 column */}
          <div className="group relative min-h-[460px] rounded-xl overflow-hidden bg-surface-elevated border border-white/10 hover:border-tertiary transition-all duration-550 flex flex-col justify-between p-8 md:p-10">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono text-tertiary tracking-[0.2em] font-extrabold uppercase bg-tertiary/10 border border-tertiary/25 px-2.5 py-1 rounded">
                {selectedTrans.ecoAcadLabel}
              </span>
              <h3 className="text-2xl font-display font-black text-white leading-snug">
                {selectedTrans.ecoAcadTitle}<br />
                <span className="text-on-surface-variant font-medium text-lg">
                  {selectedTrans.ecoAcadSubtitle}
                </span>
              </h3>
            </div>

            <div className="space-y-6 text-left">
              <p className="text-xs text-on-surface-variant leading-relaxed font-sans font-medium">
                {selectedTrans.ecoAcadDesc}
              </p>
              <a 
                href="#academy"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-tertiary hover:underline cursor-pointer bg-tertiary/5 border border-tertiary/20 px-4 py-2.5 rounded"
              >
                {selectedTrans.ecoAcadBtn} <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Maintenance Items Card - 1 Column */}
          <div className="group relative min-h-[400px] rounded-xl overflow-hidden bg-surface-elevated border border-white/10 hover:border-secondary transition-all flex flex-col justify-between p-8 md:p-10">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono text-secondary tracking-[0.2em] font-extrabold uppercase bg-secondary/5 border border-secondary/20 px-2.5 py-1 rounded">
                {selectedTrans.ecoMaintLabel}
              </span>
              <h3 className="text-2xl font-display font-black text-white leading-snug">
                {selectedTrans.ecoMaintTitle}<br />
                <span className="text-on-surface-variant font-medium text-lg">
                  {selectedTrans.ecoMaintSubtitle}
                </span>
              </h3>
            </div>

            <img 
              alt="Maintenance Component" 
              className="w-28 self-end group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500 pointer-events-none object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhDiHxbDp_UxWQQDdWH8iEnh8hhWS7pNNVbtLAPJTlF3mM_2n8GhvV-I2twiFnL7OsF_OvZYwyXyZTKWzrKBVBoboXxDhcprfs4EbfEctAD6adeFFOeOaPLm9IbX2KI0NTiXY_5P-KMWBJTlwrbw7NpT7yOuqI1a4K-xjg4xYhemedDmmnXAXvtXbhxVMM4GlCwy5q4YzydpafNJEB3jR5lXFxhrmy-Eh_fUF3c4NvymvKbmZ7gtFla9R8"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Authorized Partnerships - spans 2 columns */}
          <div className="md:col-span-2 group relative min-h-[400px] rounded-xl overflow-hidden bg-surface-elevated border border-white/10 p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono text-on-surface-variant tracking-[0.2em] font-bold uppercase block">
                {selectedTrans.ecoAuthLabel}
              </span>
              <h3 className="text-2xl font-display font-black text-white">
                {selectedTrans.ecoAuthTitle}
              </h3>
              <p className="text-xs text-on-surface-variant w-11/12">
                {selectedTrans.brandsDesc}
              </p>
            </div>

            {/* Gray Interactive Brands Grid represented exactly as requested */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {['SICE', 'RAV', 'HOFMANN', 'ROTARY'].map((brandName) => (
                <div 
                  key={brandName}
                  onClick={() => setActiveBrandFilter(brandName)}
                  className={`flex flex-col items-center justify-center p-5 border rounded cursor-pointer transition-all duration-300 select-none ${
                    activeBrandFilter === brandName 
                      ? 'bg-primary/10 border-primary text-white font-bold' 
                      : 'bg-white/5 border-white/5 text-on-surface-variant hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="font-display font-black tracking-widest text-sm text-center">
                    {brandName}
                  </span>
                  <span className="text-[8px] font-mono mt-1 text-white/50">AUTHORITY</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Equipment Listing with filters, detailed comparisons */}
      <section className="py-24 bg-surface-container-lowest" id="catalog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
              {selectedTrans.sigTitle}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>

            {/* Interactive Filters row inside Signature Equipment to update view live */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 pt-4">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBrandFilter(b)}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeBrandFilter === b 
                      ? 'bg-primary text-surface-deep font-bold shadow-md' 
                      : 'bg-surface border border-white/10 text-on-surface-variant hover:border-white/20'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Products Cards grid matching the wireframe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredProducts.map((p) => {
              const inQuoteCart = selectedProductIds.includes(p.id);
              return (
                <div 
                  key={p.id}
                  id={`product-card-${p.id}`}
                  className="group bg-surface-elevated p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Photo Area */}
                    <div className="aspect-square mb-6 overflow-hidden rounded bg-black/20 flex items-center justify-center p-6 relative">
                      <img 
                        alt={p.name} 
                        className="w-full h-auto object-contain max-h-[160px] group-hover:scale-110 transition-transform duration-500" 
                        src={p.image}
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-tertiary font-bold bg-tertiary/10 border border-tertiary/30 px-2 py-0.5 rounded">
                        {p.origin}
                      </span>
                    </div>

                    {/* Metadata indicators */}
                    <span className="text-[10px] font-mono font-bold tracking-wider text-on-surface-variant block mb-1 uppercase">
                      {p.brand} &bull; {p.origin}
                    </span>
                    <h4 className="text-lg font-display font-black text-white leading-tight mb-3">
                      {p.name}
                      {lang === 'zh-Hant' && p.chineseName && (
                        <span className="block text-xs font-sans text-on-surface-variant font-medium mt-1">
                          {p.chineseName}
                        </span>
                      )}
                    </h4>
                  </div>

                  <div className="space-y-2 mt-4 pt-2 border-t border-white/5">
                    {/* Select for Request quote */}
                    <button
                      onClick={() => inQuoteCart ? onRemoveProductFromQuote(p.id) : onAddProductToQuote(p.id)}
                      className={`w-full py-2.5 font-mono text-[11px] font-extrabold uppercase rounded tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        inQuoteCart 
                          ? 'bg-success-green/10 border border-success-green text-success-green hover:bg-success-green/20' 
                          : 'bg-primary-container/10 border border-primary-container/40 text-primary hover:bg-primary-container hover:text-white'
                      }`}
                    >
                      {inQuoteCart ? <Check className="w-3.5 h-3.5" /> : null}
                      {inQuoteCart ? selectedTrans.removeQuote : selectedTrans.addQuote}
                    </button>

                    {/* VIEW SPECS callback */}
                    <button 
                      onClick={() => setSelectedDetailProduct(p)}
                      className="w-full py-2.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-on-surface hover:bg-white hover:text-surface-deep hover:border-white transition-all cursor-pointer uppercase"
                    >
                      {selectedTrans.viewSpecs}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
              <BadgeInfo className="w-12 h-12 text-on-surface-variant/40 mx-auto mb-3" />
              <p className="text-sm font-semibold text-on-surface-variant">
                No products found in this category filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
