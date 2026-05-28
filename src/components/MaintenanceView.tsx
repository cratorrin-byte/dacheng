import React, { useState } from 'react';
import { Mail, Shield, Check, FileDown, Layers, Search, AlertCircle, ShoppingCart } from 'lucide-react';
import { MaintenanceItem } from '../types';
import { MAINTENANCE_ITEMS } from '../data';

interface MaintenanceViewProps {
  lang: 'en' | 'zh-Hant';
  onAddProductToQuote: (productId: string) => void;
  onRemoveProductFromQuote: (productId: string) => void;
  selectedProductIds: string[];
}

export default function MaintenanceView({
  lang,
  onAddProductToQuote,
  onRemoveProductFromQuote,
  selectedProductIds
}: MaintenanceViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchString, setSearchString] = useState('');
  const [selectedSpecItemId, setSelectedSpecItemId] = useState<string | null>(MAINTENANCE_ITEMS[0].id);

  const t = {
    en: {
      headline: "Aftermarket Care & Consumables",
      sub: "Ensure maximum operating lifetime of heavy pneumatics and dynamic systems with custom lubricants and genuine accessories.",
      categList: {
        all: "All Maintenance Supplies",
        oils: "Pneumatic Oils & Lubes",
        consumables: "Bead Pastes & Consumables",
        tools: "Tools & Handheld Gauges"
      },
      searchPlaceholder: "Search chemical name, viscosity grade, ISO standard...",
      cardSpecs: "Specs Readout",
      specHeadline: "Live Viscosity & Composition Data",
      addToCart: "Include in Service Plan",
      added: "Added to Quote Cart"
    },
    'zh-Hant': {
      headline: "精密保修耗材與化合精品系列",
      sub: "專為極端高壓氣動閥、密封環與自動拆裝導輪調配，有效極大化您的歐美重裝汽修設備使用年限。",
      categList: {
        all: "全部保修資材",
        oils: "極壓潤滑油與氣動專用油",
        consumables: "原裝輪胎貼片、安裝密封膏",
        tools: "手持充氣測量特工儀器"
      },
      searchPlaceholder: "搜尋化學配方、黏度等級、ISO認證標準...",
      cardSpecs: "技術屬性快顯",
      specHeadline: "原廠授權化學成份特性報告",
      addToCart: "納入本次設備保修計劃",
      added: "已順利增列至預估清單"
    }
  };

  const selectedTrans = t[lang];

  // Filtering Logic
  const filteredItems = MAINTENANCE_ITEMS.filter(item => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = searchString === '' || 
      item.name.toLowerCase().includes(searchString.toLowerCase()) || 
      item.chineseName.toLowerCase().includes(searchString.toLowerCase()) || 
      item.brand.toLowerCase().includes(searchString.toLowerCase()) ||
      item.description.toLowerCase().includes(searchString.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono text-secondary font-bold tracking-widest bg-secondary/10 border border-secondary/25 px-3.5 py-1.5 rounded-full uppercase">
            RELIABLE LIFETIME SUPPORT
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            {selectedTrans.headline}
          </h1>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            {selectedTrans.sub}
          </p>
        </div>

        {/* Dynamic Quick Searches controls */}
        <div className="bg-surface-elevated p-4 rounded-xl border border-white/5 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {Object.entries(selectedTrans.categList).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setSearchString('');
                }}
                className={`px-4 py-1.5 rounded text-xs font-mono font-bold tracking-wider transition-all cursor-pointer select-none ${
                  activeCategory === key 
                    ? 'bg-secondary text-surface-deep' 
                    : 'bg-surface border border-white/5 text-on-surface-variant hover:border-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
            <input
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              placeholder={selectedTrans.searchPlaceholder}
              className="w-full bg-surface border border-white/10 pl-10 pr-4 py-2.5 rounded text-xs text-white focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        {/* Dynamic products list and live viscosity specifications side check */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Items lists grid (takes 2 columns) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredItems.map((item) => {
              const inQuoteCart = selectedProductIds.includes(item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedSpecItemId(item.id)}
                  className={`bg-surface-elevated p-6 rounded-lg border transition-all cursor-pointer flex flex-col justify-between text-left ${
                    selectedSpecItemId === item.id 
                      ? 'border-secondary/40 ring-1 ring-secondary/20' 
                      : 'border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Visual and Pack indicator */}
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded uppercase">
                        {item.packSize}
                      </span>
                      <span className="text-[9px] font-mono text-white/5w bg-white/5 px-2 py-0.5 rounded uppercase">
                        {item.brand}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-display font-black text-white leading-normal">
                        {item.name}
                      </h3>
                      <h4 className="text-xs font-sans text-on-surface-variant font-medium mt-1">
                        {item.chineseName}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        inQuoteCart ? onRemoveProductFromQuote(item.id) : onAddProductToQuote(item.id);
                      }}
                      className={`flex-1 py-1.5 rounded font-mono text-[10px] font-bold uppercase transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        inQuoteCart 
                          ? 'bg-success-green/10 border border-success-green/40 text-success-green hover:bg-success-green/20' 
                          : 'bg-secondary/10 border border-secondary/40 text-secondary hover:bg-secondary hover:text-surface-deep font-extrabold'
                      }`}
                    >
                      {inQuoteCart ? <Check className="w-3.5 h-3.5" /> : null}
                      {inQuoteCart ? selectedTrans.added : selectedTrans.addToCart}
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSpecItemId(item.id);
                      }}
                      className="px-3 py-1.5 border border-white/10 hover:bg-white/5 hover:border-white/20 rounded text-[10px] font-mono uppercase text-on-surface-variant"
                    >
                      Info
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="col-span-full border border-dashed border-white/10 p-12 rounded-xl text-center">
                <AlertCircle className="w-10 h-10 text-on-surface-variant/40 mx-auto mb-2" />
                <p className="text-xs font-mono text-on-surface-variant">
                  No matching consumables found. Try resetting custom criteria.
                </p>
              </div>
            )}
          </div>

          {/* Detailed Property specifications panel (takes 1 column) */}
          <div className="lg:col-span-1 bg-surface-elevated p-6 rounded-lg border border-white/5 flex flex-col justify-between text-left h-fit sticky top-28">
            {selectedSpecItemId ? (() => {
              const specItem = MAINTENANCE_ITEMS.find(i => i.id === selectedSpecItemId)!;
              return (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-white/5">
                    <span className="text-[10px] font-mono text-secondary bg-secondary/10 px-2 py-0.5 rounded uppercase">
                      QC SPEC REPORT ACTIVE
                    </span>
                    <h3 className="text-lg font-display font-black text-white mt-3">
                      {specItem.name}
                    </h3>
                    <p className="text-xs font-mono text-white/50 uppercase mt-0.5">
                      Brand Origin Authority: {specItem.brand}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-white/30 uppercase font-bold tracking-wider block">
                      {selectedTrans.specHeadline}
                    </span>

                    <div className="space-y-2.5">
                      {Object.entries(specItem.specs).map(([specKey, specVal]) => (
                        <div key={specKey} className="bg-surface/50 p-3 rounded border border-white/5 text-xs flex justify-between items-center font-mono">
                          <span className="text-white/50">{specKey}</span>
                          <span className="text-secondary font-semibold">{specVal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-secondary/5 border border-secondary/10 p-4 rounded-lg text-xs leading-relaxed space-y-1 text-on-surface-variant">
                    <span className="text-[10px] font-mono font-bold text-secondary uppercase block">
                      Safety & Operational Notes
                    </span>
                    <p className="text-[11px]">
                      Pneumatic valves require direct ISO-VG lubrications every 10,000 alignment cycles. Keep barrel stored in cool, dry space away from moisture.
                    </p>
                  </div>
                </div>
              );
            })() : (
              <div className="text-center py-20 text-on-surface-variant">
                Select an accessory to view raw molecular/ISO viscosity specifications data live.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
