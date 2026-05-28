import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TireEquipmentView from './components/TireEquipmentView';
import TrainingView from './components/TrainingView';
import MaintenanceView from './components/MaintenanceView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import QuoteModal from './components/QuoteModal';
import { Product } from './types';
import { BadgeInfo, X, ChevronRight, Check } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('tire-equipment');
  const [lang, setLang] = useState<'en' | 'zh-Hant'>('zh-Hant');
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);

  // Load initial quote from localstorage to satisfy stability and premium persistence guidelines
  useEffect(() => {
    const saved = localStorage.getItem('dacheng_quote_bag');
    if (saved) {
      try {
        setSelectedProductIds(JSON.parse(saved));
      } catch (err) {
        // Safe check
      }
    }
  }, []);

  const saveToLocalStorage = (list: string[]) => {
    localStorage.setItem('dacheng_quote_bag', JSON.stringify(list));
  };

  const handleAddProductToQuote = (productId: string) => {
    if (!selectedProductIds.includes(productId)) {
      const updated = [...selectedProductIds, productId];
      setSelectedProductIds(updated);
      saveToLocalStorage(updated);
    }
  };

  const handleRemoveProductFromQuote = (productId: string) => {
    const updated = selectedProductIds.filter(id => id !== productId);
    setSelectedProductIds(updated);
    saveToLocalStorage(updated);
  };

  const handleResetQuoteCart = () => {
    setSelectedProductIds([]);
    saveToLocalStorage([]);
  };

  return (
    <div className="min-h-screen bg-[#020217] text-[#e1e0ff] font-sans selection:bg-primary/30 flex flex-col justify-between">
      {/* Global Navigation Bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
        quoteCartSize={selectedProductIds.length}
        openQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Main Multi-Screen Layout Switch */}
      <main className="flex-grow">
        {currentTab === 'tire-equipment' && (
          <TireEquipmentView
            lang={lang}
            onAddProductToQuote={handleAddProductToQuote}
            onRemoveProductFromQuote={handleRemoveProductFromQuote}
            selectedProductIds={selectedProductIds}
            openQuoteModal={() => setQuoteModalOpen(true)}
            setSelectedDetailProduct={setSelectedDetailProduct}
          />
        )}

        {currentTab === 'training' && (
          <TrainingView lang={lang} />
        )}

        {currentTab === 'maintenance' && (
          <MaintenanceView
            lang={lang}
            onAddProductToQuote={handleAddProductToQuote}
            onRemoveProductFromQuote={handleRemoveProductFromQuote}
            selectedProductIds={selectedProductIds}
          />
        )}

        {currentTab === 'about' && (
          <AboutView lang={lang} />
        )}

        {currentTab === 'contact' && (
          <ContactView
            lang={lang}
            onAddProductToQuote={handleAddProductToQuote}
            selectedProductIds={selectedProductIds}
          />
        )}
      </main>

      {/* High-Fidelity Professional Product Detail Spec-Sheet Modal */}
      {selectedDetailProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0d0d26] w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border border-primary/25 p-6 md:p-8 relative text-left">
            <button
              onClick={() => setSelectedDetailProduct(null)}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Custom specification categories */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono text-primary bg-primary/15 border border-primary/25 px-2.5 py-1 rounded uppercase tracking-wider font-extrabold inline-block">
                  {selectedDetailProduct.brand} {selectedDetailProduct.origin} AUTHORIZED MACHINERY
                </span>
                
                <h3 className="text-xl md:text-2xl font-display font-black text-white mt-4">
                  {selectedDetailProduct.name}
                </h3>
                {selectedDetailProduct.chineseName && (
                  <h4 className="text-sm font-sans text-on-surface-variant font-medium mt-1">
                    {selectedDetailProduct.chineseName}
                  </h4>
                )}
                
                <p className="text-xs text-on-surface-variant leading-relaxed mt-3">
                  {selectedDetailProduct.description}
                </p>
              </div>

              {/* Grid of specifications and special characteristics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Physical Specifications list */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-white/40 uppercase font-black tracking-widest block">
                    Product Specification parameters
                  </span>
                  
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {Object.entries(selectedDetailProduct.detailedSpecs).map(([key, val]) => (
                      <div key={key} className="bg-surface p-2.5 rounded border border-white/5 text-[11px] font-mono flex justify-between items-center text-left">
                        <span className="text-white/50">{key}</span>
                        <span className="text-primary font-bold text-right pl-2">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Characteristics and Certifications list */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase font-black tracking-widest block">
                      Manufacturer Certifications
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedDetailProduct.certifications?.map((c, i) => (
                        <span key={i} className="text-[9px] font-mono bg-[#1a2333] border border-white/10 rounded px-2 py-0.5 text-white/80">
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase font-black tracking-widest block">
                      Core Functional Attributes
                    </span>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {selectedDetailProduct.features?.map((f, i) => (
                        <div key={i} className="text-[11px] font-sans text-on-surface-variant leading-relaxed flex items-start gap-1.5">
                          <span className="text-primary shrink-0 font-bold mt-0.5">•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Recommended utility details block */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-xs leading-relaxed text-left flex gap-3">
                <BadgeInfo className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase text-[10px] font-mono tracking-wider block">
                    Best Applied Recommendation
                  </span>
                  <p className="text-[11px] text-on-surface-variant font-medium mt-0.5">
                    {selectedDetailProduct.bestFor}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-3 justify-end">
                <button
                  onClick={() => setSelectedDetailProduct(null)}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase rounded cursor-pointer"
                >
                  Return to Catalogue
                </button>
                <button
                  onClick={() => {
                    const alreadyIn = selectedProductIds.includes(selectedDetailProduct.id);
                    if (alreadyIn) {
                      handleRemoveProductFromQuote(selectedDetailProduct.id);
                    } else {
                      handleAddProductToQuote(selectedDetailProduct.id);
                    }
                    setSelectedDetailProduct(null);
                  }}
                  className="px-6 py-2.5 bg-primary text-surface-deep font-mono text-xs font-extrabold uppercase rounded shadow hover:scale-[1.01] cursor-pointer"
                >
                  {selectedProductIds.includes(selectedDetailProduct.id) 
                    ? (lang === 'zh-Hant' ? '已卡入估價單 (點按移除)' : 'Already Placed in Quote Folder')
                    : (lang === 'zh-Hant' ? '將此裝備卡入估價單' : 'Add to Quotation Folder')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Quote Configurators Dialog Popup */}
      <QuoteModal
        lang={lang}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProductIds={selectedProductIds}
        onRemoveProductFromQuote={handleRemoveProductFromQuote}
        onResetQuoteCart={handleResetQuoteCart}
      />

      {/* Global Multi-Column Footer block */}
      <Footer setCurrentTab={setCurrentTab} lang={lang} />
    </div>
  );
}
