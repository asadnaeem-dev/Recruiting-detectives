
export default function Page() {
  return (
    <>
      <div className="grain-overlay"></div>
{/*  TopAppBar  */}
<header className="bg-stone-900 dark:bg-black border-b-4 border-black sticky top-0 z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center w-full px-6 py-4 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-yellow-400" data-icon="timer">timer</span>
<h1 className="text-yellow-400 font-['Spline_Sans'] font-black uppercase tracking-widest text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] italic">THE COLD CASE CASEFILE</h1>
</div>
<div className="flex items-center gap-6">
<button className="text-stone-400 hover:text-yellow-300 hover:skew-x-2 transition-transform active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
</div>
</header>
<main className="max-w-[1200px] mx-auto px-6 py-12 pb-32">
{/*  Countdown Section  */}
<section className="mb-12 flex flex-col items-center">
<div className="bg-surface-container-lowest rubber-hose-border p-8 inline-flex flex-col items-center gap-4 skew-slight relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
<span className="text-primary font-headline-md uppercase tracking-tighter z-10">Time Until Evidence Destroyed</span>
<div className="flex gap-4 z-10">
{/*  Flip Clock Style  */}
<div className="bg-black text-yellow-400 font-headline-lg px-6 py-4 border-2 border-stone-700 rounded-lg shadow-inner flex items-center justify-center relative">
<div className="absolute w-full h-[2px] bg-stone-800 top-1/2 left-0 -translate-y-1/2"></div>
            02
          </div>
<div className="text-yellow-400 font-headline-lg py-4 flex items-center">:</div>
<div className="bg-black text-yellow-400 font-headline-lg px-6 py-4 border-2 border-stone-700 rounded-lg shadow-inner flex items-center justify-center relative">
<div className="absolute w-full h-[2px] bg-stone-800 top-1/2 left-0 -translate-y-1/2"></div>
            14
          </div>
<div className="text-yellow-400 font-headline-lg py-4 flex items-center">:</div>
<div className="bg-black text-yellow-400 font-headline-lg px-6 py-4 border-2 border-stone-700 rounded-lg shadow-inner flex items-center justify-center relative">
<div className="absolute w-full h-[2px] bg-stone-800 top-1/2 left-0 -translate-y-1/2"></div>
            58
          </div>
</div>
</div>
</section>
{/*  Content Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/*  Witness Transcript Sidebar  */}
<aside className="md:col-span-4 space-y-8">
<div className="bg-tertiary-container p-6 rubber-hose-border skew-opposite">
<h2 className="font-headline-md text-on-tertiary-container mb-4 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
            EVIDENCE LOG
          </h2>
<div className="space-y-4">
<div className="bg-surface-container-highest p-4 border-2 border-black flex items-center gap-4 group cursor-pointer hover:bg-primary-container transition-colors">
<img className="w-16 h-16 grayscale border-2 border-black group-hover:grayscale-0" data-alt="A gritty, high-contrast black and white close-up photo of a discarded leather glove on a wet cobblestone street. Harsh shadows and a grainy film aesthetic emphasize the mystery and noir atmosphere of a 1930s crime scene. The lighting is dramatic, coming from a single overhead street lamp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeslXKUrDX57Hef6AkNjC7ODw27KYjpnLcNRrL2DwGHurFPfAEbZIfMDTEDPDJHvlmFDgF6ibdKGMgsIyNecI6gaCtZU_k6RjCIgLTxSVtn0Elc8-hU8WSg2UmCic6l7BMZfJHsslQ66yjHK5hLsdIXk1b8TDH0Ebu30So-yJXI7k0R3uY-nbYhrmZNKz9q87LoSrgPsq-Bnel6D9g55Mic8Yk-cxCOs9I_A3b_WIppg8z_Ar0z3YTQ3rvs-YWx0fbxKcG-_soOBju"/>
<div>
<p className="font-headline-md text-sm text-yellow-400">ITEM #402</p>
<p className="font-body-md text-xs text-on-surface-variant">Stained Leather Glove</p>
</div>
</div>
<div className="bg-surface-container-highest p-4 border-2 border-black flex items-center gap-4 group cursor-pointer hover:bg-primary-container transition-colors">
<img className="w-16 h-16 grayscale border-2 border-black group-hover:grayscale-0" data-alt="A vintage 1930s cigarette case made of tarnished silver, lying open on a dark mahogany table. One cigarette is missing. The image is styled with heavy ink outlines and high-contrast sepia tones, evoking a brooding cinematic mystery. Light catches the metallic edges in a sharp, stylized way." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDts2-ftcNBCfbLZa-jfgMW8qv2lndT9lvHkBkxyiw6pBqYKY-SY03ua8gBTsXEiPPFvklIrudcwVCUsesEXh0kLj6gkaUmHgBy7NSFVWRg-wCuvDlTJX4S0mrLoAJcPrMPK_JBhNXoTbIeQyT1Oaj4SLhhgAd5PFYuoGCPTTTsXFiiGULXjhp1v2DP7yqSm6vnUdLm_1C5QuUEs-FsS_yyyJAlRH3EsHOYSl6McKEm19bCO8U9p2J1nc6_paj2qlVK41CF_0pO7Ql"/>
<div>
<p className="font-headline-md text-sm text-yellow-400">ITEM #405</p>
<p className="font-body-md text-xs text-on-surface-variant">Silver Cigarette Case</p>
</div>
</div>
</div>
</div>
{/*  The Switchboard Visualizer  */}
<div className="bg-black p-6 rubber-hose-border overflow-hidden relative min-h-[300px]">
<h2 className="font-headline-md text-primary mb-4">THE SWITCHBOARD</h2>
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 200 200">
<path d="M 20 50 Q 100 0 180 50" fill="none" stroke="crimson" strokeWidth="4" />
<path d="M 20 150 Q 100 200 180 150" fill="none" stroke="yellow" strokeWidth="4" />
<path d="M 50 20 Q 0 100 50 180" fill="none" stroke="#680008" strokeWidth="4" />
</svg>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="bg-stone-800 text-stone-300 px-3 py-1 border-2 border-black font-label-sm rounded-full">ALIBI LOCK</span>
<span className="bg-yellow-400 text-black px-3 py-1 border-2 border-black font-label-sm rounded-full">CALL TRACE</span>
<span className="bg-stone-800 text-stone-300 px-3 py-1 border-2 border-black font-label-sm rounded-full">ENCRYPTED</span>
<span className="bg-primary-container text-white px-3 py-1 border-2 border-black font-label-sm rounded-full">ACTIVE LINE</span>
</div>
</div>
</aside>
{/*  Main Transcript Content  */}
<section className="md:col-span-8">
<div className="paper-texture p-12 rubber-hose-border text-black min-h-[600px] skew-slight relative">
<div className="absolute top-4 right-8 opacity-20 transform rotate-12">
<p className="font-headline-md text-4xl border-4 border-red-800 p-2 text-red-800 uppercase">Classified</p>
</div>
<div className="mb-10 flex justify-between items-start border-b-2 border-stone-400 pb-4">
<div>
<p className="font-headline-md text-lg">TRANSCRIPT: #992-B</p>
<p className="font-body-md italic text-stone-600">Date: October 14, 1934</p>
</div>
<p className="font-body-md text-stone-600">STRICTLY CONFIDENTIAL</p>
</div>
<div className="typewriter-font space-y-6 text-lg leading-relaxed">
<p>
<span className="font-bold">DET. O'MALLEY:</span> Sit down. You want a drink? No? Fine. Let's talk about the night of the 12th.
            </p>
<p>
<span className="font-bold">WITNESS:</span> I told you already, copper. I was at the <span className="underline decoration-wavy decoration-red-600 cursor-pointer hover:bg-yellow-200">Starlight Lounge</span> until three in the morning. Ask the pianist.
            </p>
<p>
<span className="font-bold">DET. O'MALLEY:</span> We did. He says he didn't see <span className="underline decoration-black decoration-2 font-bold cursor-pointer hover:bg-primary hover:text-white px-1">BARNABY "THE SQUEALER" FINCH</span> anywhere near the piano that night. He did see a tall man in a <span className="underline decoration-black decoration-2 cursor-pointer hover:bg-yellow-400">pinstripe suit</span>, though.
            </p>
<p>
<span className="font-bold">WITNESS:</span> (Nervous) Barnaby? He's a lie. He's been in Jersey. Look, you should be talking to <span className="underline decoration-black decoration-2 font-bold cursor-pointer hover:bg-primary hover:text-white px-1">VERONICA VANE</span>. She was the one holding the <span className="underline decoration-wavy decoration-red-600 cursor-pointer hover:bg-yellow-200">red switchboard cable</span> when the lights went out.
            </p>
<p>
<span className="font-bold">DET. O'MALLEY:</span> You seem to know a lot about cables for someone who was at a lounge.
            </p>
<p>
<span className="font-bold">WITNESS:</span> I... I heard it from a friend. A guy named <span className="underline decoration-black decoration-2 font-bold cursor-pointer hover:bg-primary hover:text-white px-1">SMOKY JOE</span>.
            </p>
</div>
{/*  Handwritten Note  */}
<div className="mt-12 p-4 border-2 border-dashed border-red-800 font-body-lg italic text-red-800 -rotate-2">
            * Note: Verify Joe's whereabouts. The "Starlight" alibi is paper-thin.
          </div>
</div>
</section>
</div>
</main>
{/*  Accuse Interface / Bottom Section  */}
<section className="fixed bottom-0 left-0 w-full z-40 bg-stone-900 border-t-4 border-black px-6 py-4 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto">
<p className="font-headline-md text-yellow-400 shrink-0">PRIMARY SUSPECTS:</p>
<div className="flex gap-2">
<div className="bg-black border-2 border-yellow-400 px-4 py-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700 overflow-hidden border border-yellow-400">
<img className="grayscale" data-alt="A portrait of a suspicious man with a thin mustache and a fedora, illuminated in a film noir 'Rembrandt lighting' style. The image is heavily stylized with ink-drawn outlines and a gritty, high-contrast monochrome texture, fitting a 1930s noir aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF3_6nlw6lWlXvHnQqyQKkEKr2qGybk_1rKNNhVeuWznirPAaJ0ydrdyKWYyMXDEUbVt2d6YJohjIRnHwLQ89fR0nej2FhX7VgehqpvE02X4HMLwUA21YXptmdEIvJmXCHrfbkd7HqR_eHs_lrwGz5xCt8aZmn3h0vpCEwmcscuuqokhwagyNmJInwLuL7V6tbA6ur1ks14obCkGsBZQE3C-VP7e4gNR94LcWVrPRsy34lTZ3tv-i5awCwGvN_62LLnmYwkwsahoRy"/>
</div>
<span className="font-label-sm text-yellow-400">BARNABY FINCH</span>
<button className="text-primary hover:text-white"><span className="material-symbols-outlined" data-icon="close">close</span></button>
</div>
<div className="bg-stone-800 border-2 border-stone-600 px-4 py-2 flex items-center gap-3 opacity-50">
<span className="material-symbols-outlined text-stone-500" data-icon="person_add">person_add</span>
<span className="font-label-sm text-stone-500">SELECT ADDITIONAL</span>
</div>
</div>
</div>
<button className="bg-primary-container text-on-primary-container font-headline-md text-xl px-10 py-4 rubber-hose-border hover:bg-on-primary hover:text-white transition-all transform active:translate-y-1 active:translate-x-1 active:shadow-none whitespace-nowrap">
        FILE FINAL CHARGES
      </button>
</div>
</section>
{/*  BottomNavBar (Hidden on desktop, logic-based render)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch bg-stone-800 border-t-4 border-black h-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]">
<div className="flex flex-col items-center justify-center bg-yellow-400 text-black border-x-2 border-black h-full px-4 w-1/4">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span className="font-['Spline_Sans'] font-bold text-[10px] uppercase">Dossier</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-500 hover:bg-stone-700 transition-colors h-full px-4 w-1/4">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
<span className="font-['Spline_Sans'] font-bold text-[10px] uppercase">Scenes</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-500 hover:bg-stone-700 transition-colors h-full px-4 w-1/4">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
<span className="font-['Spline_Sans'] font-bold text-[10px] uppercase">Switch</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-500 hover:bg-stone-700 transition-colors h-full px-4 w-1/4">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span className="font-['Spline_Sans'] font-bold text-[10px] uppercase">Accuse</span>
</div>
</nav>
{/*  Footer  */}
<footer className="bg-black w-full py-12 mb-20 border-t-2 border-stone-800 flex flex-col items-center gap-4 text-center px-4">
<p className="text-stone-600 font-bold uppercase tracking-widest font-headline-md">NOIR INVESTIGATIONS</p>
<div className="flex gap-8">
<a className="text-stone-600 hover:text-stone-300 font-['Spline_Sans'] text-[10px] tracking-tighter uppercase" href="#">Case Archives</a>
<a className="text-stone-600 hover:text-stone-300 font-['Spline_Sans'] text-[10px] tracking-tighter uppercase" href="#">Officer Directory</a>
<a className="text-stone-600 hover:text-stone-300 font-['Spline_Sans'] text-[10px] tracking-tighter uppercase" href="#">Privacy Vault</a>
</div>
<p className="text-stone-500 font-['Spline_Sans'] text-[10px] tracking-tighter mt-4 opacity-80">© 1934 NOIR INVESTIGATIONS - ALL RIGHTS RESERVED</p>
</footer>
    </>
  );
}
