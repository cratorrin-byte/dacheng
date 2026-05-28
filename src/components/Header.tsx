import React, { useState } from 'react';
import { Globe, Menu, X, ClipboardCheck, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: 'en' | 'zh-Hant';
  setLang: (lang: 'en' | 'zh-Hant') => void;
  quoteCartSize: number;
  openQuoteModal: () => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  quoteCartSize,
  openQuoteModal
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Translations
  const t = {
    en: {
      equipment: 'Tire Equipment',
      training: 'Academy & Training',
      maintenance: 'Maintenance & Oils',
      about: 'About Us',
      contact: 'Contact Us',
      requestQuote: 'Request Quote',
      langLabel: '繁體中文',
    },
    'zh-Hant': {
      equipment: '輪胎特工機械',
      training: '教育學院',
      maintenance: '保修精品與油品',
      about: '關於大城',
      contact: '聯絡總部',
      requestQuote: '線上預約估價',
      langLabel: 'English',
    }
  };

  const navItems = [
    { id: 'tire-equipment', label: t[lang].equipment },
    { id: 'training', label: t[lang].training },
    { id: 'maintenance', label: t[lang].maintenance },
    { id: 'about', label: t[lang].about },
    { id: 'contact', label: t[lang].contact }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(255,180,170,0.02)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setCurrentTab('tire-equipment')}
          id="header-brand-logo"
        >
          <img 
            alt="Da Cheng Logo" 
            className="w-auto h-10 object-contain group-hover:brightness-110 transition-all"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujR8oFaHsjhnUBTgL4FqSia_wt2U2e1a7608cVh1n6FRlhggZuRO4dKVIqAYbsoBL0Pspax_g4dKNdpbS9n_NkZN1lUrw_aGzsfsvpzNG-EPqLOpoLdMV9bASA2uaYvow0w9MVOhQqsM_RgFsVikTXxo2e5YkP76Y2xu-2Zq-b7hPTsDAdwoh99bOATVnPVDY-VUBJmvf65FOnCi31GjJLrsnIqEAEBwGMD9gXdsUvLqTsVsSkvfHb_fntT"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:block">
            <h1 className="text-sm font-display font-extrabold tracking-wider text-white leading-tight uppercase">
              DA CHENG
            </h1>
            <p className="text-[10px] font-mono text-on-surface-variant font-medium tracking-widest uppercase">
              TIRES &amp; MACHINERY
            </p>
          </div>
        </div>

        {/* Desktop Navigation Link Blocks */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => setCurrentTab(item.id)}
              className={`text-[13px] font-mono font-semibold uppercase tracking-wider transition-all duration-300 py-2 border-b-2 hover:text-white cursor-pointer ${
                currentTab === item.id 
                  ? 'text-primary border-primary font-bold' 
                  : 'text-on-surface-variant border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Dynamic Actions Center */}
        <div className="flex items-center gap-3">
          {/* Quote Cart Button */}
          <button
            id="quote-cart-trigger"
            onClick={openQuoteModal}
            className="relative px-4 py-2 bg-gradient-to-r from-primary-container to-[#ff3b30] text-white font-mono text-xs font-bold leading-normal uppercase rounded-lg shadow-md hover:scale-[1.03] transition-all cursor-pointer flex items-center gap-2"
          >
            <ClipboardCheck className="w-4 h-4" />
            <span className="hidden sm:inline">{t[lang].requestQuote}</span>
            {quoteCartSize > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-white ring-2 ring-surface animate-bounce shadow">
                {quoteCartSize}
              </span>
            )}
          </button>

          {/* Language Cycler Selector */}
          <button
            id="lang-selector"
            onClick={() => setLang(lang === 'zh-Hant' ? 'en' : 'zh-Hant')}
            className="flex items-center gap-1.5 text-xs font-mono border border-white/20 px-3 py-1.5 rounded-full cursor-pointer hover:bg-surface-bright/35 hover:border-white/40 transition-all text-on-surface ml-1"
          >
            <Globe className="w-3.5 h-3.5 text-tertiary" />
            <span className="font-semibold uppercase text-[11px]">
              {lang === 'zh-Hant' ? 'EN' : '繁中'}
            </span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Slick Expandable Mobile Menu Panels */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-6 py-6 absolute top-full left-0 w-full shadow-xl space-y-4 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-mono font-semibold uppercase py-2.5 px-4 rounded-lg tracking-wider transition-colors ${
                  currentTab === item.id 
                    ? 'bg-primary/10 text-primary font-bold' 
                    : 'text-on-surface-variant hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5 flex justify-between items-center">
            <button
              onClick={() => {
                setLang(lang === 'zh-Hant' ? 'en' : 'zh-Hant');
              }}
              className="flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-white px-2 py-1"
            >
              <Globe className="w-4 h-4 text-tertiary" />
              <span>{lang === 'zh-Hant' ? 'Switch to English' : '切換為繁體中文'}</span>
            </button>
            <span className="text-[10px] font-mono text-white/40">TAICHUNG, TW</span>
          </div>
        </div>
      )}
    </header>
  );
}
