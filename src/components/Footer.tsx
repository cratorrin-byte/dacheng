import React from 'react';
import { Mail, Shield, ShieldCheck, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  lang: 'en' | 'zh-Hant';
}

export default function Footer({ setCurrentTab, lang }: FooterProps) {
  const t = {
    en: {
      desc: "Taiwan's premier distributor of professional tire equipment, heavy automotive diagnostic systems, and technician training services since 1971.",
      solutions: "Solutions",
      resources: "Resources",
      hq: "Headquarters",
      eqList: ["Automatic Changers", "Precision Balancers", "3D Wheel Alignment", "Low Platform Lifts"],
      resList: ["Da Cheng Academy", "Technical Helpdesk", "Catalog Download", "Warranty Policies"],
      address: "Taichung Industrial Park, No. 1234, Taichung City, Taiwan",
      copyright: "© 2026 Da Cheng Tires & Machinery. Industrial Grade Precision.",
      privacy: "Privacy Policy",
      terms: "Warranty Terms",
    },
    'zh-Hant': {
      desc: "大城輪胎機械創立於1971年，為台灣深具信譽之頂級歐美進口拆胎機、平衡機、四輪定位儀及專業汽修技術培訓與售後服務之領導供應商。",
      solutions: "專業系統商",
      resources: "資源中心",
      hq: "品牌總部",
      eqList: ["全自動氣動拆胎機", "精密微電腦平衡機", "豪華型 3D 四輪定位儀", "超薄型剪式頂高平台"],
      resList: ["大城實務培訓學院", "全天候線上技術客服", "原廠電子目錄下載", "產品保固與條約"],
      address: "中華民國臺灣臺中市工業區 1234 號 (臺中工業區)",
      copyright: "© 2026 大城輪胎機械股份有限公司。工業級高精度與50載匠心傳承。",
      privacy: "隱私政策保密協定",
      terms: "設備保固與售後條約",
    }
  };

  const selectedTranslation = t[lang];

  return (
    <footer className="w-full bg-surface-deep border-t border-white/10 px-6 sm:px-12 pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Information Module */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              alt="Da Cheng Logo" 
              className="h-9 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujR8oFaHsjhnUBTgL4FqSia_wt2U2e1a7608cVh1n6FRlhggZuRO4dKVIqAYbsoBL0Pspax_g4dKNdpbS9n_NkZN1lUrw_aGzsfsvpzNG-EPqLOpoLdMV9bASA2uaYvow0w9MVOhQqsM_RgFsVikTXxo2e5YkP76Y2xu-2Zq-b7hPTsDAdwoh99bOATVnPVDY-VUBJmvf65FOnCi31GjJLrsnIqEAEBwGMD9gXdsUvLqTsVsSkvfHb_fntT"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="text-xs font-display font-extrabold tracking-wider text-white">DA CHENG</h4>
              <p className="text-[9px] font-mono text-on-surface-variant tracking-widest">EST. 1971 TAIWAN</p>
            </div>
          </div>
          <p className="text-sm font-sans leading-relaxed text-on-surface-variant">
            {selectedTranslation.desc}
          </p>
          <div className="flex gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentTab('contact'); }}
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/45 transition-all text-on-surface-variant hover:text-white"
              title="Locate Headquarters"
            >
              <MapPin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:service@dacheng1971.com.tw" 
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/45 transition-all text-on-surface-variant hover:text-white"
              title="Customer Support Mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div 
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-success-green bg-success-green/5"
              title="Authorized Official Partner"
            >
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Column 2: Solutions Grid */}
        <div>
          <h5 className="text-sm font-display font-bold text-white mb-6 uppercase tracking-wider border-l-2 border-primary pl-3">
            {selectedTranslation.solutions}
          </h5>
          <ul className="space-y-3.5 text-xs font-mono text-on-surface-variant">
            {selectedTranslation.eqList.map((item, idx) => (
              <li key={idx}>
                <a 
                  href="#catalog"
                  onClick={(e) => { e.preventDefault(); setCurrentTab('tire-equipment'); }}
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="text-primary/70">▶</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h5 className="text-sm font-display font-bold text-white mb-6 uppercase tracking-wider border-l-2 border-tertiary pl-3">
            {selectedTranslation.resources}
          </h5>
          <ul className="space-y-3.5 text-xs font-mono text-on-surface-variant">
            <li>
              <a 
                href="#academy"
                onClick={(e) => { e.preventDefault(); setCurrentTab('training'); }}
                className="hover:text-tertiary transition-colors flex items-center gap-1.5"
              >
                <span className="text-tertiary/70">▶</span> {selectedTranslation.resList[0]}
              </a>
            </li>
            <li>
              <a 
                href="#support"
                onClick={(e) => { e.preventDefault(); setCurrentTab('contact'); }}
                className="hover:text-tertiary transition-colors flex items-center gap-1.5"
              >
                <span className="text-tertiary/70">▶</span> {selectedTranslation.resList[1]}
              </a>
            </li>
            <li>
              <a 
                href="#catalog"
                onClick={(e) => { e.preventDefault(); setCurrentTab('tire-equipment'); }}
                className="hover:text-tertiary transition-colors flex items-center gap-1.5"
              >
                <span className="text-tertiary/70">▶</span> {selectedTranslation.resList[2]}
              </a>
            </li>
            <li>
              <a 
                href="#terms"
                onClick={(e) => { e.preventDefault(); setCurrentTab('about'); }}
                className="hover:text-tertiary transition-colors flex items-center gap-1.5"
              >
                <span className="text-tertiary/70">▶</span> {selectedTranslation.resList[3]}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Location Address */}
        <div>
          <h5 className="text-sm font-display font-bold text-white mb-6 uppercase tracking-wider border-l-2 border-brand-gold pl-3">
            {selectedTranslation.hq}
          </h5>
          <p className="text-xs font-sans leading-relaxed text-on-surface-variant mb-4">
            {selectedTranslation.address}
          </p>
          <div className="bg-surface-elevated p-3 border border-white/5 rounded-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-gold block font-semibold mb-1">
              Direct Service Channel
            </span>
            <a 
              href="mailto:service@dacheng1971.com.tw" 
              className="text-xs font-mono font-bold text-primary hover:underline break-all"
            >
              service@dacheng1971.com.tw
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <span className="text-xs font-mono text-on-surface-variant text-center md:text-left">
          {selectedTranslation.copyright}
        </span>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-[11px] font-mono text-on-surface-variant hover:text-white transition-colors">
            {selectedTranslation.privacy}
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-[11px] font-mono text-on-surface-variant hover:text-white transition-colors">
            {selectedTranslation.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
