import { useState } from "react";

const ACC = "#2563eb";
const ACC_L = "#eff6ff";
const ACC_B = "#bfdbfe";

const data = {
  name: "Min-Jong Bong",
  title: "Ph.D. Candidate in Advanced Inorganic Materials Chemistry",
  affiliation: "Korea University · Advisor: Prof. Ho-Jin Son",
  updated: "2026-04-22",
  email: "bong1464@korea.ac.kr",
  github: "github.com/M-JBong",
  scholar: "https://scholar.google.com/citations?hl=ko&user=5ujZumkAAAAJ",
  orcid: "https://orcid.org/0009-0000-7738-1321",
  about: `Ph.D. candidate in Inorganic Chemistry at Korea University (expected February 2027), specializing in the design of single-molecule Mn(I) catalysts for selective CO₂ reduction. Research centers on secondary coordination sphere engineering of well-defined molecular complexes — inspired by formate dehydrogenase enzymes — integrating experimental (operando FTIR, CV, XRD) and computational (DFT; ORCA) approaches with Python-based automation of computational workflows. Key results include a TON of ~300 with >94% formate selectivity, published in Chemical Science (2026, co-first author).`,
  keywords: ["Organometallic Synthesis","CO₂ Reduction","Photocatalysis","Secondary Coordination Sphere","Operando FTIR","DFT"],
  publications: [
    { title:"A secondary-sphere proton channel accelerating metal–hydride formation in Mn(I) catalysts for selective CO₂-to-formate conversion", authors:"Min-Jong Bong†, Wonjung Lee†, Daehan Lee, Hyunuk Kim, Junhyeok Seo, Ho-Jin Son", journal:"Chemical Science", year:"2026", doi:"10.1039/D5SC09412G", note:"co-first author †", highlight:true },
    { title:"Efficient and Durable Photochemical CO₂ Reduction by TiO₂-Immobilized Metal Porphyrin Catalysts", authors:"Hyeongu Kang, Daehan Lee, Sangheon Jeong, Seunghwan Cha, Min-Jong Bong, Myung Jae Lee, Won-Jo Jung, Ho-Jin Son", journal:"ChemSusChem", year:"2026", vol:"19, e202501889", doi:"10.1002/cssc.202501889", note:"", highlight:false },
    { title:"Organic phosphorescence in Pt(II)-complexes linked to organic chromophores for blue-emitting organic light-emitting diodes", authors:"Seong Woon Jeong‡, Hyung Joo Lee‡, Bum June Park, Min-Jong Bong, Daehan Lee, Taekyung Kim, Chul Hoon Kim, Ho-Jin Son", journal:"Communications Chemistry", year:"2025", vol:"8, 140", doi:"10.1038/s42004-025-01533-y", note:"", highlight:false },
  ],
  projects: [
    { title:"Tether Length Modulation of Secondary Coordination Layer", period:"2024 – Present", status:"ongoing", desc:"Systematic variation of –OH/–OMe pendant length at 6,6′-bipy positions of Mn(I) complexes. Best performer Mn-DiMeOMe: TON 368, formate selectivity 97.8%.", tags:["Photocatalysis","CV","Operando FTIR","DFT","XRD"] },
    { title:"Proton Relay Engineering in Mn(I) Complexes", period:"2022 – 2025", status:"published", desc:"Ethylene-bridged pendants mimic formate dehydrogenase. Mn-bpydiOMe: TON ~300, formate selectivity >94%. Published in Chem. Sci. 2026.", tags:["CO₂ Reduction","Operando FTIR","DFT","Mechanistic Study"] },
  ],
  education: [
    { degree:"Ph.D. candidate, Advanced Inorganic Materials Chemistry", institution:"Korea University", dept:"Department of Advanced Materials Chemistry", period:"Mar 2024 – Present", advisor:"Prof. Ho-Jin Son" },
    { degree:"M.S., Advanced Inorganic Materials Chemistry", institution:"Korea University", dept:"Department of Advanced Materials Chemistry", period:"Mar 2022 – Feb 2024", advisor:"Prof. Ho-Jin Son" },
    { degree:"B.S., Advanced Materials Chemistry", institution:"Korea University (Sejong)", dept:"", period:"Mar 2018 – Feb 2022", advisor:"" },
  ],
  skills: {
    "Technical":["Organic & organometallic synthesis","Glovebox & Schlenk techniques","Air-sensitive compound handling","Photocatalysis","3D Graphic Design (Adobe Dimension)"],
    "Instrumental":["Operando FTIR","Cyclic Voltammetry","UV-Vis Spectroscopy","Quantum Yield Measurement","Single-crystal XRD","NMR","GC-TCD, HPLC"],
    "Computational":["DFT (ORCA, Gaussian)","CPCM solvation","NBO analysis","Reaction pathway mapping"],
  },
  teaching: [
    { type:"Mentoring", activity:"CURT Undergraduate Research", period:"Feb – Jul 2024", desc:"Mentored undergraduates in research design and execution." },
    { type:"TA", activity:"General Chemistry Laboratory 1", period:"Spring 2022, 2023, 2024, 2025", desc:"Supervised lab sessions for general chemistry." },
    { type:"TA", activity:"General Chemistry Laboratory 2", period:"Fall 2022, 2024", desc:"Supervised lab sessions for general chemistry." },
    { type:"TA", activity:"Inorganic Chemistry Laboratory", period:"Fall 2023, 2024, 2025", desc:"Instructed inorganic synthesis experiments." },
    { type:"Lecturer", activity:"General Chemistry Laboratory 1", period:"Spring 2026", desc:"Serving as course instructor for general chemistry laboratory." },
  ],
  awards:[
    { name:"Excellence in Poster Presentation Award", institution:"Inorganic Chemistry Division, Korean Chemical Society (대한화학회 무기분과회)", year:"2025", detail:"Second Coordination Sphere Engineering for Efficient and Selective CO₂-to-Formate Conversion of Mn(I) Bipyridyl Complexes: Steric and Brønsted Acidity/Basicity Influence of Alcohol and Alkyloxy Pendants and Its Mechanistic Investigation" },
    { name:"Excellent Research Report Award", institution:"CURT Research Program, Korea University", year:"2021", detail:"" },
  ],
  gallery:[
    { title:"A secondary-sphere proton channel accelerating metal–hydride formation in Mn(I) catalysts for selective CO₂-to-formate conversion", tag:"Chem. Sci. 2026", desc:"TOC graphic for proton relay engineering in Mn(I) catalysts", hue:"210", img:"/CV/TOC_graphic.png" },
  ],
};

const TABS = ["CV (Web)","Gallery","CV (PDF)"];

// ── 컴포넌트들을 App 밖으로 ──

const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const ScholarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
);
const OrcidIcon = () => (
  <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
    <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
    <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.5 10.1 10.1z" fill="white"/>
  </svg>
);

const PdfSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom:16 }}>
    <p style={{ fontSize:11, fontWeight:700, color:"#1a2744", textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 5px", paddingBottom:3, borderBottom:"1px solid #c8d0e8", fontFamily:"Georgia,serif" }}>{title}</p>
    {children}
  </div>
);

const boldName = (str: string) => str.replace(/Min-Jong Bong[†‡]?/g, (m: string) => `<strong>${m}</strong>`);

// ── 색상 의존 컴포넌트는 props로 색상을 받음 ──

interface CardProps { children: React.ReactNode; bg: string; bord: string; dark: boolean }
const Card = ({ children, bg, bord, dark }: CardProps) => (
  <div style={{ background:bg, border:`1px solid ${bord}`, borderRadius:14, padding:"1.4rem 1.6rem", marginBottom:14, boxShadow:dark?"0 2px 12px #00000030":"0 2px 12px #1d4ed808" }}>{children}</div>
);

interface SecTitleProps { icon?: string; children: React.ReactNode; textS: string; bord: string }
const SecTitle = ({ icon, children, textS, bord }: SecTitleProps) => (
  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:"1.1rem", paddingBottom:"0.7rem", borderBottom:`1px solid ${bord}` }}>
    {icon && <span style={{ fontSize:14 }}>{icon}</span>}
    <p style={{ fontSize:11, fontWeight:700, color:textS, textTransform:"uppercase", letterSpacing:"0.09em", margin:0 }}>{children}</p>
  </div>
);

interface PillProps { v: string; bord: string; bgS: string; textS: string }
const Pill = ({ v, bord, bgS, textS }: PillProps) => (
  <span style={{ fontSize:11, padding:"3px 10px", borderRadius:20, border:`1px solid ${bord}`, background:bgS, color:textS, whiteSpace:"nowrap" }}>{v}</span>
);

interface BadgeProps { v: string; green?: boolean; dark: boolean; accLC: string; accC: string; accBC: string }
const Badge = ({ v, green, dark, accLC, accC, accBC }: BadgeProps) => {
  const isLecturer = v === "Lecturer";
  const bg = isLecturer ? (dark?"#2d1b00":"#fff7ed") : green ? (dark?"#052e16":"#f0fdf4") : accLC;
  const color = isLecturer ? (dark?"#fb923c":"#c2410c") : green ? (dark?"#4ade80":"#15803d") : accC;
  const border = isLecturer ? (dark?"#92400e":"#fed7aa") : green ? (dark?"#166534":"#bbf7d0") : accBC;
  return <span style={{ fontSize:10, padding:"2px 9px", borderRadius:20, fontWeight:600, background:bg, color, border:`1px solid ${border}` }}>{v}</span>;
};

interface HrProps { bord: string }
const Hr = ({ bord }: HrProps) => <div style={{ height:"1px", background:bord, margin:"1rem 0" }} />;

export default function App() {
  const [tab, setTab] = useState("CV (Web)");
  const [dark, setDark] = useState(false);

  const bgS  = dark ? "#16161d" : "#f8f9fc";
  const bgC  = dark ? "#1c1c26" : "#ffffff";
  const text = dark ? "#e2e4f0" : "#0f1117";
  const textS= dark ? "#7b7f99" : "#6b7280";
  const bord = dark ? "#2a2a3a" : "#e8eaf0";
  const accC = dark ? "#60a5fa" : ACC;
  const accLC= dark ? "#1e2d4a" : ACC_L;
  const accBC= dark ? "#1e3a6e" : ACC_B;
  const hdrBg= dark
    ? "linear-gradient(160deg,#0a0618 0%,#0f0a2e 20%,#0d1a3a 45%,#1a0a3e 65%,#0a1628 85%,#150a2e 100%)"
    : "linear-gradient(160deg,#c7d9ff 0%,#deeaff 25%,#ffffff 55%,#e0ecff 80%,#ccd8f8 100%)";

  const contactLinks = [
    { label:data.email,       href:`mailto:${data.email}`,   icon:<EmailIcon /> },
    { label:data.github,      href:`https://${data.github}`, icon:<GithubIcon /> },
    { label:"Google Scholar", href:data.scholar,             icon:<ScholarIcon /> },
    { label:"ORCID",          href:data.orcid,               icon:<OrcidIcon /> },
  ];

  const cardProps = { bg:bgC, bord, dark };
  const stProps   = { textS, bord };
  const pillProps = { bord, bgS, textS };
  const badgeProps= { dark, accLC, accC, accBC };
  const hrProps   = { bord };

  return (
    <div style={{ fontFamily:"var(--font-sans,system-ui,sans-serif)", background:bgS, color:text, minHeight:"100vh", fontSize:14 }}>
      <button onClick={() => setDark(d=>!d)} style={{ position:"fixed", top:14, right:16, zIndex:300, background:bgC, border:`1px solid ${bord}`, borderRadius:8, padding:"5px 13px", fontSize:12, color:textS, cursor:"pointer" }}>{dark?"☀ Light":"☾ Dark"}</button>

      {/* Header */}
      <div style={{ background:hdrBg, borderBottom:`1px solid ${bord}`, textAlign:"center", padding:"3rem 1.5rem 0" }}>
        <h1 style={{ fontSize:30, fontWeight:700, margin:"0 0 6px", letterSpacing:"-0.02em", color:text }}>{data.name}</h1>
        <p style={{ fontSize:14, color:accC, margin:"0 0 4px", fontWeight:500 }}>{data.title}</p>
        <p style={{ fontSize:12, color:textS, margin:"0 0 20px" }}>{data.affiliation}</p>
        <div style={{ display:"inline-flex", flexWrap:"wrap", gap:"0.5rem 1.5rem", justifyContent:"center", background:dark?"#ffffff0a":"#ffffff90", backdropFilter:"blur(8px)", border:`1px solid ${bord}`, borderRadius:12, padding:"0.65rem 1.6rem", marginBottom:"1.4rem" }}>
          {contactLinks.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, color:textS, textDecoration:"none" }}>
              <span style={{ display:"flex", alignItems:"center", opacity:0.75 }}>{c.icon}</span>{c.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize:11, color:textS, margin:"0 0 1.4rem" }}>Last updated: {data.updated}</p>
        <div style={{ display:"flex", justifyContent:"center", gap:2 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background:tab===t?bgC:"transparent", border:`1px solid ${tab===t?bord:"transparent"}`, borderBottom:tab===t?`1px solid ${bgC}`:"1px solid transparent", borderRadius:"10px 10px 0 0", padding:"9px 24px", fontSize:13, cursor:"pointer", color:tab===t?accC:textS, fontWeight:tab===t?600:400, marginBottom:-1 }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:740, margin:"0 auto", padding:"1.75rem 1.5rem 5rem" }}>

        {/* CV Web */}
        {tab === "CV (Web)" && <>
          <Card {...cardProps}>
            <SecTitle icon="🔬" {...stProps}>Research Interest</SecTitle>
            <p style={{ fontSize:13, color:textS, lineHeight:1.9, margin:"0 0 14px" }}>{data.about}</p>
            <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>{data.keywords.map(k => <Pill key={k} v={k} {...pillProps} />)}</div>
          </Card>

          <Card {...cardProps}>
            <SecTitle icon="⚗️" {...stProps}>Skills & Methods</SecTitle>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:18 }}>
              {Object.entries(data.skills).map(([cat, items]) => (
                <div key={cat}>
                  <p style={{ fontSize:11, fontWeight:700, color:accC, margin:"0 0 8px", textTransform:"uppercase", letterSpacing:"0.07em" }}>{cat}</p>
                  {items.map(item => <p key={item} style={{ fontSize:12, color:textS, margin:"0 0 4px", lineHeight:1.6, display:"flex", gap:6 }}><span style={{ color:accBC }}>—</span>{item}</p>)}
                </div>
              ))}
            </div>
          </Card>

          <Card {...cardProps}>
            <SecTitle icon="🧪" {...stProps}>Research Projects</SecTitle>
            {data.projects.map((p, i) => (
              <div key={i}>
                {i > 0 && <Hr {...hrProps} />}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                    <span style={{ fontWeight:600, fontSize:13, color:text }}>{p.title}</span>
                    <Badge v={p.status} green={p.status==="ongoing"} {...badgeProps} />
                  </div>
                  <span style={{ fontSize:11, color:textS, whiteSpace:"nowrap", marginLeft:10 }}>{p.period}</span>
                </div>
                <p style={{ fontSize:13, color:textS, lineHeight:1.8, margin:"0 0 10px" }}>{p.desc}</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>{p.tags.map(t => <Pill key={t} v={t} {...pillProps} />)}</div>
              </div>
            ))}
          </Card>

          <Card {...cardProps}>
            <SecTitle icon="🎓" {...stProps}>Education</SecTitle>
            <div style={{ position:"relative", paddingLeft:20 }}>
              <div style={{ position:"absolute", left:3, top:6, bottom:6, width:"1px", background:dark?"#2a2a3a":"#e0e7ff" }} />
              {data.education.map((e, i) => (
                <div key={i} style={{ position:"relative", marginBottom:i<data.education.length-1?18:0 }}>
                  <div style={{ position:"absolute", left:-17, top:4, width:8, height:8, borderRadius:"50%", background:i===0?accC:bord, boxShadow:i===0?`0 0 0 3px ${accLC}`:"none" }} />
                  <p style={{ fontWeight:600, fontSize:13, color:text, margin:"0 0 2px" }}>{e.degree}</p>
                  <p style={{ fontSize:12, color:accC, margin:"0 0 2px", fontWeight:500 }}>{e.institution}{e.dept?` · ${e.dept}`:""}</p>
                  <p style={{ fontSize:12, color:textS, margin:0 }}>{e.period}{e.advisor?` · Advisor: ${e.advisor}`:""}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card {...cardProps}>
            <SecTitle icon="📄" {...stProps}>Publications</SecTitle>
            {data.publications.map((pub, i) => (
              <div key={i}>
                {i > 0 && <Hr {...hrProps} />}
                <div style={{ display:"flex", gap:10 }}>
                  <span style={{ fontSize:12, color:textS, minWidth:22, paddingTop:2, flexShrink:0, fontWeight:600 }}>[{i+1}]</span>
                  <div>
                    <p style={{ fontSize:13, fontWeight:600, color:text, margin:"0 0 4px", lineHeight:1.65 }}>{pub.title}</p>
                    <p style={{ fontSize:12, color:textS, margin:"0 0 3px", lineHeight:1.6 }} dangerouslySetInnerHTML={{ __html: boldName(pub.authors) }} />
                    <p style={{ fontSize:12, color:textS, margin:"0 0 8px" }}>
                      <em style={{ color:dark?"#a5b4fc":ACC }}>{pub.journal}</em>{pub.vol?`, ${pub.vol}`:""}{" · "}{pub.year}
                    </p>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
                      {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" style={{ fontSize:11, color:accC, textDecoration:"none", borderBottom:`1px dashed ${accBC}` }}>DOI: {pub.doi}</a>}
                      {pub.note && <span style={{ fontSize:11, padding:"2px 9px", borderRadius:20, background:dark?"#052e16":"#f0fdf4", color:dark?"#4ade80":"#15803d", border:`1px solid ${dark?"#166534":"#bbf7d0"}`, fontWeight:600 }}>{pub.note}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <Card {...cardProps}>
            <SecTitle icon="📖" {...stProps}>Teaching & Mentoring</SecTitle>
            {data.teaching.map((t, i) => (
              <div key={i}>
                {i > 0 && <Hr {...hrProps} />}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <div style={{ display:"flex", gap:9, alignItems:"flex-start" }}>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:2 }}>
                        <p style={{ fontSize:13, fontWeight:600, color:text, margin:0 }}>{t.activity}</p>
                        <Badge v={t.type} green={t.type==="Mentoring"} {...badgeProps} />
                      </div>
                      <p style={{ fontSize:12, color:textS, margin:0 }}>{t.desc}</p>
                    </div>
                  </div>
                  <span style={{ fontSize:11, color:textS, whiteSpace:"nowrap", marginLeft:10 }}>{t.period}</span>
                </div>
              </div>
            ))}
          </Card>

          <Card {...cardProps}>
            <SecTitle icon="🏆" {...stProps}>Honors & Awards</SecTitle>
            {data.awards.map((a, i) => (
              <div key={i}>
                {i > 0 && <Hr {...hrProps} />}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12 }}>
                  <div>
                    <p style={{ fontSize:13, fontWeight:600, color:text, margin:"0 0 2px" }}>{a.name}</p>
                    <p style={{ fontSize:12, color:textS, margin:"0 0 4px" }}>{a.institution}</p>
                    {a.detail && <p style={{ fontSize:11, color:textS, margin:0, lineHeight:1.6, fontStyle:"italic" }}>{a.detail}</p>}
                  </div>
                  <span style={{ fontSize:12, fontWeight:700, color:dark?"#fcd34d":"#92400e", background:dark?"#451a03":"#fefce8", padding:"3px 13px", borderRadius:20, border:`1px solid ${dark?"#78350f":"#fde68a"}`, whiteSpace:"nowrap", flexShrink:0 }}>{a.year}</span>
                </div>
              </div>
            ))}
          </Card>
        </>}

        {/* CV PDF */}
        {tab === "CV (PDF)" && (
          <div style={{ display:"flex", justifyContent:"center" }}>
            <div style={{ width:740, background:"#f0f0f0", padding:"32px 0", borderRadius:12, boxShadow:"0 4px 24px #00000018" }}>
              <div style={{ width:595, margin:"0 auto", background:"#fff", boxShadow:"0 2px 16px #00000020", padding:"56px 60px 64px", fontFamily:"Georgia,serif", color:"#111", fontSize:10.5, lineHeight:1.6 }}>
                <div style={{ textAlign:"center", marginBottom:18, borderBottom:"2px solid #1a2744", paddingBottom:14 }}>
                  <h1 style={{ fontSize:26, fontWeight:700, margin:"0 0 4px", fontFamily:"Georgia,serif", color:"#1a2744" }}>MIN-JONG BONG</h1>
                  <p style={{ fontSize:10, color:"#555", margin:"0 0 6px" }}>{data.title} · {data.affiliation}</p>
                  <p style={{ fontSize:9.5, color:"#777", margin:0, display:"flex", justifyContent:"center", gap:16, flexWrap:"wrap" }}>
                    <span>{data.email}</span><span>|</span><span>{data.github}</span><span>|</span><span>ORCID: 0009-0000-7738-1321</span>
                  </p>
                  <p style={{ fontSize:9, color:"#aaa", margin:"6px 0 0" }}>Last updated: {data.updated}</p>
                </div>
                <PdfSection title="Research Interest">
                  <p style={{ margin:0, fontSize:10, color:"#333", lineHeight:1.75 }}>{data.about}</p>
                  <p style={{ margin:"6px 0 0", fontSize:10, color:"#333" }}><strong>Keywords: </strong>{data.keywords.join(", ")}</p>
                </PdfSection>
                <PdfSection title="Skills & Methods">
                  {Object.entries(data.skills).map(([cat, items]) => (
                    <div key={cat} style={{ marginBottom:4, display:"flex", gap:6 }}>
                      <p style={{ margin:0, fontWeight:700, fontSize:10, color:"#111", minWidth:90, flexShrink:0 }}>{cat}:</p>
                      <p style={{ margin:0, fontSize:10, color:"#444" }}>{items.join(", ")}</p>
                    </div>
                  ))}
                </PdfSection>
                <PdfSection title="Research Projects">
                  {data.projects.map((p,i) => (
                    <div key={i} style={{ marginBottom:i<data.projects.length-1?8:0 }}>
                      <div style={{ display:"flex", justifyContent:"space-between" }}>
                        <p style={{ margin:0, fontWeight:700, fontSize:10, color:"#111" }}>{p.title}</p>
                        <p style={{ margin:0, fontSize:9.5, color:"#777", whiteSpace:"nowrap", marginLeft:12 }}>{p.period}</p>
                      </div>
                      <p style={{ margin:"2px 0", fontSize:10, color:"#444", lineHeight:1.65 }}>{p.desc}</p>
                      <p style={{ margin:0, fontSize:9.5, color:"#2e4fa3" }}>{p.tags.join(" · ")}</p>
                    </div>
                  ))}
                </PdfSection>
                <PdfSection title="Education">
                  {data.education.map((e,i) => (
                    <div key={i} style={{ marginBottom:i<data.education.length-1?8:0, display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                      <div>
                        <p style={{ margin:0, fontWeight:700, fontSize:10, color:"#111" }}>{e.degree}</p>
                        <p style={{ margin:0, fontSize:10, color:"#2e4fa3" }}>{e.institution}{e.dept?` · ${e.dept}`:""}{e.advisor?` · Advisor: ${e.advisor}`:""}</p>
                      </div>
                      <p style={{ margin:0, fontSize:9.5, color:"#777", whiteSpace:"nowrap", marginLeft:12 }}>{e.period}</p>
                    </div>
                  ))}
                </PdfSection>
                <PdfSection title="Publications">
                  {data.publications.map((pub,i) => (
                    <div key={i} style={{ marginBottom:i<data.publications.length-1?8:0, display:"flex", gap:8 }}>
                      <span style={{ fontSize:10, color:"#888", minWidth:18 }}>[{i+1}]</span>
                      <div>
                        <p style={{ margin:"0 0 1px", fontSize:10, color:"#111", lineHeight:1.6 }}>{pub.title}</p>
                        <p style={{ margin:0, fontSize:9.5, color:"#555" }} dangerouslySetInnerHTML={{ __html: boldName(pub.authors) + ` · <em>${pub.journal}</em>${pub.vol?`, ${pub.vol}`:""} (${pub.year})${pub.doi?` · DOI: ${pub.doi}`:""}` }} />
                      </div>
                    </div>
                  ))}
                </PdfSection>
                <PdfSection title="Teaching & Mentoring">
                  {data.teaching.map((t,i) => (
                    <div key={i} style={{ marginBottom:i<data.teaching.length-1?6:0, display:"flex", justifyContent:"space-between" }}>
                      <div>
                        <p style={{ margin:0, fontWeight:700, fontSize:10, color:"#111" }}>{t.activity} <span style={{ fontWeight:400, color:"#888" }}>({t.type})</span></p>
                        <p style={{ margin:0, fontSize:9.5, color:"#555" }}>{t.desc}</p>
                      </div>
                      <p style={{ margin:0, fontSize:9.5, color:"#777", whiteSpace:"nowrap", marginLeft:12 }}>{t.period}</p>
                    </div>
                  ))}
                </PdfSection>
                <PdfSection title="Honors & Awards">
                  {data.awards.map((a,i) => (
                    <div key={i} style={{ marginBottom:i<data.awards.length-1?8:0 }}>
                      <div style={{ display:"flex", justifyContent:"space-between" }}>
                        <p style={{ margin:0, fontWeight:700, fontSize:10, color:"#111" }}>{a.name}</p>
                        <p style={{ margin:0, fontSize:10, fontWeight:700, color:"#2e4fa3", whiteSpace:"nowrap", marginLeft:12 }}>{a.year}</p>
                      </div>
                      <p style={{ margin:0, fontSize:9.5, color:"#555" }}>{a.institution}</p>
                      {a.detail && <p style={{ margin:"2px 0 0", fontSize:9.5, color:"#777", fontStyle:"italic", lineHeight:1.6 }}>{a.detail}</p>}
                    </div>
                  ))}
                </PdfSection>
              </div>
            </div>
          </div>
        )}

        {/* Gallery */}
        {tab === "Gallery" && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:14 }}>
            {data.gallery.map((g, i) => (
              <div key={i} style={{ background:bgC, border:`1px solid ${bord}`, borderRadius:14, overflow:"hidden", boxShadow:dark?"0 2px 12px #00000030":"0 2px 12px #1d4ed808" }}>
                <div style={{ background:g.img?"none":`linear-gradient(135deg,hsl(${g.hue},70%,${dark?"20%":"75%"}) 0%,hsl(${g.hue},55%,${dark?"30%":"90%"}) 100%)`, overflow:"hidden" }}>
                  {g.img ? <img src={g.img} alt={g.title} style={{ width:"100%", height:"auto", display:"block" }} /> : "⬡"}
                </div>
                <div style={{ padding:"1rem 1.1rem" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                    <p style={{ fontSize:13, fontWeight:600, color:text, margin:0 }}>{g.title}</p>
                    <span style={{ fontSize:10, color:accC, background:accLC, padding:"2px 9px", borderRadius:20, border:`1px solid ${accBC}`, fontWeight:600 }}>{g.tag}</span>
                  </div>
                  <p style={{ fontSize:12, color:textS, margin:0, lineHeight:1.6 }}>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ textAlign:"center", borderTop:`1px solid ${bord}`, padding:"1.25rem 0 2rem", background:bgC }}>
        <p style={{ fontSize:11, color:textS, margin:0 }}>Min-Jong Bong · Korea University · {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
