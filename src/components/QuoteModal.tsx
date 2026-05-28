import React, { useState } from 'react';
import { X, ClipboardCheck, PlayCircle, Loader2, Sparkles, Check, Trash } from 'lucide-react';
import { Product, MaintenanceItem, QuoteRequest } from '../types';
import { PRODUCTS, MAINTENANCE_ITEMS } from '../data';

interface QuoteModalProps {
  lang: 'en' | 'zh-Hant';
  isOpen: boolean;
  onClose: () => void;
  selectedProductIds: string[];
  onRemoveProductFromQuote: (productId: string) => void;
  onResetQuoteCart: () => void;
}

export default function QuoteModal({
  lang,
  isOpen,
  onClose,
  selectedProductIds,
  onRemoveProductFromQuote,
  onResetQuoteCart
}: QuoteModalProps) {
  // Quotation Submission state
  const [bName, setBName] = useState('');
  const [cPerson, setCPerson] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [wSize, setWSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [power, setPower] = useState<'220V Single Phase' | '380V Three Phase'>('380V Three Phase');
  const [notes, setNotes] = useState('');
  
  // Submit actions
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  // Search items from PRODUCTS & MAINTENANCE_ITEMS combined
  const allAvailableItems = [...PRODUCTS, ...MAINTENANCE_ITEMS];
  const selectedItems = allAvailableItems.filter(item => selectedProductIds.includes(item.id));

  // Simulated Pricing calculator (adds high value realistic details)
  const getEstimatedPrice = (item: any) => {
    // Hidden internal price references for quote summary estimation
    const priceMap: Record<string, number> = {
      'sice-s226': 280000,
      'rav-g4': 195000,
      'dacheng-liftpro': 350000,
      'hofmann-geoliner670': 680000,
      'lube-premium-01': 12000,
      'paste-bead-02': 4500,
      'gauge-pres-03': 3800
    };
    return priceMap[item.id] || 5000;
  };

  const totalPrice = selectedItems.reduce((acc, current) => acc + getEstimatedPrice(current), 0);

  const t = {
    en: {
      title: "Custom Machinery Quotation Configurator",
      sub: "Detail your workshop context, power grid tolerances, and selected premium machinery below to generate an exact proposal estimate.",
      emptyCart: "Your quote folder is currently empty. Re-visit our product catalog or workshop planner to include signature machinery.",
      cartHeadline: "Your Requested Machinery Selection",
      bName: "Registered Company / Garage Name",
      cPerson: "Primary Contact Representative",
      email: "Business Communication Email",
      phone: "Representative Phone Line",
      powerLabel: "Available Power Supply Grid",
      notesLabel: "Specialized Requests / Facility Elevation Blues",
      submit: "Transmit Formal Quotation Config Project",
      submitting: "Simulating automated pneumatic optimization and logistics calculation...",
      successTitle: "Quotation Config Transmission Established!",
      successDesc: "Your custom quotation project has been archived. A workshop layout engineer as well as local logistics managers will prepare your contract blueprint PDF and dispatch a price quote proposal to your inbox.",
      totalEst: "Simulated Custom Setup Price Estimate",
      currency: "NT$"
    },
    'zh-Hant': {
      title: "大城專屬智慧車間估價系統",
      sub: "請填寫您的企業登記名稱、預計車間用电電壓（單相/三相）等關鍵屬性，系統將自適應為您產生正式硬體配置報告與建議書。",
      emptyCart: "您的估價單目前沒有挑選任何裝備耗材。您可以至「輪胎特工機械」或「智慧保修車間空間精算器」點按加入，開始配置智慧車BAY。",
      cartHeadline: "本次預計估價大城代表性設備名冊",
      bName: "保修廠登記公司全名",
      cPerson: "保修廠負責人或主要聯絡代表",
      email: "負責人公務信箱",
      phone: "負責人聯絡電話",
      powerLabel: "保修車間現場可用電壓",
      notesLabel: "特殊土木鑽孔需求 / 地坪傾斜度 / 需要舊機折抵或 ADAS 擴充",
      submit: "正式發送估價規劃案",
      submitting: "大城估算系統正在對接最新歐元匯差、自動氣壓配管及運輸倉儲計費...",
      successTitle: "估價規劃大卷發送成功！",
      successDesc: "專屬您的保修廠配管線圖、出廠機油及耗材搭贈建議書已建檔。大城台中總部規劃課將於下一個工作日中午前，依您留下的信箱寄發 pdf 定稿專案與首期估價定價合約。",
      totalEst: "預估本次成廠基礎裝備總計 (不含未計耗材)",
      currency: "NT$"
    }
  };

  const selectT = t[lang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bName || !cPerson || !cEmail || !cPhone) {
      alert(lang === 'zh-Hant' ? '請填寫完備聯絡諮詢資訊！' : 'Please complete all business contact fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate smart computation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFinished(true);
      // Clean state
      onResetQuoteCart();
    }, 2800);
  };

  const handleFinishClose = () => {
    setIsFinished(false);
    setBName('');
    setCPerson('');
    setCEmail('');
    setCPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0d0d26] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-primary/20 p-6 md:p-8 flex flex-col justify-between relative text-left">
        
        {/* Close Button Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-on-surface-variant hover:text-white cursor-pointer bg-white/5 active:bg-white/10 p-2 rounded"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-1.5 text-primary text-xs font-mono font-bold uppercase tracking-widest">
                <ClipboardCheck className="w-4 h-4" />
                <span>DA CHENG PREVENTATIVE OPTIMIZER</span>
              </div>
              <h2 className="text-xl md:text-2xl font-display font-black text-white">
                {selectT.title}
              </h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {selectT.sub}
              </p>
            </div>

            {/* If Cart empty, show warnings */}
            {selectedItems.length === 0 ? (
              <div className="bg-surface/30 p-8 text-center rounded-lg border border-dashed border-white/10 my-6">
                <p className="text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  {selectT.emptyCart}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Product selections list (takes 5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[10px] font-mono text-white/40 uppercase block font-bold tracking-widest">
                    {selectT.cartHeadline}
                  </span>

                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-2">
                    {selectedItems.map((item) => (
                      <div key={item.id} className="bg-surface p-3 rounded border border-white/5 flex justify-between items-center text-xs">
                        <div className="text-left font-mono">
                          <span className="font-bold text-white block">{item.name}</span>
                          <span className="text-[10px] text-white/40 block">Origin: {item.brand}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-primary font-bold">
                            {selectT.currency} {getEstimatedPrice(item).toLocaleString()}
                          </span>
                          <button
                            onClick={() => onRemoveProductFromQuote(item.id)}
                            className="text-on-surface-variant hover:text-red-400 p-1 bg-white/5 hover:bg-white/10 rounded cursor-pointer"
                            title="Remove item"
                          >
                            <Trash className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Estimator Sum */}
                  <div className="p-4 bg-surface rounded border border-primary/20 space-y-1">
                    <span className="text-[10px] font-mono text-primary uppercase block font-bold">
                      {selectT.totalEst}
                    </span>
                    <p className="text-2xl font-mono font-black text-white">
                      {selectT.currency} {totalPrice.toLocaleString()}
                    </p>
                    <span className="text-[9px] font-sans text-on-surface-variant block">
                      * Values are approximate estimations for proposal simulation. Real contracts vary.
                    </span>
                  </div>
                </div>

                {/* Company Setup Form Request Parameters (takes 7 Cols) */}
                <form onSubmit={handleFormSubmit} className="lg:col-span-7 space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                        {selectT.bName}
                      </label>
                      <input
                        type="text"
                        required
                        value={bName}
                        onChange={(e) => setBName(e.target.value)}
                        placeholder="e.g. Speed Automotive Ltd"
                        className="w-full bg-surface-container border border-white/10 p-2.5 rounded text-xs text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                        {selectT.cPerson}
                      </label>
                      <input
                        type="text"
                        required
                        value={cPerson}
                        onChange={(e) => setCPerson(e.target.value)}
                        placeholder="e.g. Master Mechanic Lin"
                        className="w-full bg-surface-container border border-white/10 p-2.5 rounded text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                        {selectT.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        placeholder="e.g. shop@example.com"
                        className="w-full bg-surface-container border border-white/10 p-2.5 rounded text-xs text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                        {selectT.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        placeholder="e.g. 04-2350-1971"
                        className="w-full bg-surface-container border border-white/10 p-2.5 rounded text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Power parameters toggle */}
                  <div>
                    <span className="text-[10px] font-mono text-on-surface-variant uppercase font-semibold block mb-1">
                      {selectT.powerLabel}
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {['220V Single Phase', '380V Three Phase'].map((p_opt) => (
                        <button
                          key={p_opt}
                          type="button"
                          onClick={() => setPower(p_opt as any)}
                          className={`p-2 rounded text-[11px] font-mono text-center transition-all border cursor-pointer ${
                            power === p_opt 
                              ? 'bg-primary/10 border-primary text-white font-bold' 
                              : 'bg-surface border-white/5 text-on-surface-variant'
                          }`}
                        >
                          {p_opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-on-surface-variant block mb-1 uppercase font-semibold">
                      {selectT.notesLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Ground slope, civil engineering requirements, ADAS modularities..."
                      className="w-full bg-surface-container border border-white/10 p-2.5 rounded text-xs text-white focus:outline-none resize-none"
                    />
                  </div>

                  {isSubmitting ? (
                    <div className="p-4 bg-primary/5 rounded border border-primary/20 flex items-center gap-3">
                      <Loader2 className="w-5 h-5 text-primary animate-spin" />
                      <p className="text-[11px] font-mono text-primary leading-snug">
                        {selectT.submitting}
                      </p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#ff3b30] text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md hover:scale-[1.01] active:scale-95 transition-all text-center cursor-pointer"
                    >
                      {selectT.submit}
                    </button>
                  )}
                </form>

              </div>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center py-12 max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-success-green/10 border border-success-green/30 text-success-green rounded-full flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            
            <h3 className="text-2xl font-display font-black text-white">
              {selectT.successTitle}
            </h3>

            <p className="text-xs text-on-surface-variant leading-relaxed font-sans font-medium">
              {selectT.successDesc}
            </p>

            <button
              onClick={handleFinishClose}
              className="px-8 py-3 bg-white text-surface-deep font-display font-extrabold text-xs uppercase rounded hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              Close Configurator Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
