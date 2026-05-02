
export default function Page() {
  return (
    <>
      <div className="grainy-overlay"></div>
{/*  Top Navigation Shell  */}
<header className="sticky top-0 z-50 bg-stone-900 border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)] flex justify-between items-center w-full px-6 py-4 max-w-none">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-yellow-400 text-3xl">menu</span>
<h1 className="text-yellow-400 font-black uppercase tracking-widest text-2xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                The Frantic Switchboard
            </h1>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="font-headline-md text-headline-md text-yellow-400 underline decoration-4 hover:skew-x-2 hover:scale-105 transition-transform" href="#">DASHBOARD</a>
<a className="font-headline-md text-headline-md text-stone-400 hover:text-yellow-400 hover:skew-x-2 transition-transform" href="#">ARCHIVE</a>
<span className="material-symbols-outlined text-yellow-400 text-3xl">search</span>
</nav>
</header>
<main className="relative min-h-screen">
{/*  Hero Section  */}
<section className="relative pt-24 pb-16 px-8 flex flex-col items-center text-center overflow-hidden">
{/*  Background Silhouettes  */}
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<img className="w-full h-full object-cover grayscale brightness-50" data-alt="A collection of rubber-hose style cartoon silhouettes of 1930s characters including a detective with a trench coat and a frantic operator. The scene is high contrast noir with heavy black shadows and sharp white highlights, reminiscent of early animation cells. Film grain and dust textures are visible throughout the composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxT-ckTnv6WLanKFf05l_zpymPriQgsS9hoJS8KyXfiqdABdzofqbhEkhOFtzfKTvdhnt073h0T-p3kEd0IOtw9lqi5EChGJari3qSAZ0uPVeGKGPbzwBnTzzGaq1LAtR67HdOPbxHTUi0pPDGz7Nnc3vQ0SmifdISuosMw9ZffPBQtT90B9gRO1JJZrY96ma83XGQMptXJKFFf_lHBtRVCGMz9RK3W_dK7m3IX71ARj2E-ti9dvrp16TRVhTBm0BHH_QWzHFAbgqK"/>
</div>
<div className="relative z-10 max-w-4xl">
<h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-4 rubber-hose-bounce skew-y-[-2deg] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    The Frantic Switchboard
                </h2>
<p className="font-body-lg text-headline-md text-tertiary-fixed italic border-y-2 border-primary-container py-2 inline-block">
                    Connect the wires. Crack the case.
                </p>
</div>
</section>
{/*  The Switchboard Puzzle  */}
<section className="max-w-container-max mx-auto px-margin py-12">
<div className="bg-stone-800 border-[3px] border-black hard-shadow p-8 rounded-none relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Left Clues Panel  */}
<div className="space-y-4">
<div className="bg-tertiary-container border-[3px] border-black p-4 rotate-[-1deg]">
<h3 className="font-headline-md text-on-tertiary-container mb-2 uppercase border-b-2 border-black">The Clues</h3>
<ul className="space-y-2 font-label-sm text-on-tertiary-container list-none">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined">radio_button_checked</span>
                                    The midnight whistle blows at Gate 4.
                                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined">radio_button_checked</span>
                                    Check the ledger under 'M'.
                                </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined">radio_button_checked</span>
                                    Don't trust the lady in the red hat.
                                </li>
</ul>
</div>
<img className="w-full h-48 object-cover border-[3px] border-black hard-shadow-small grayscale contrast-125" data-alt="A vintage close-up of a 1930s typewriter with a half-written letter about a mystery. The lighting is dramatic noir style with deep shadows and high contrast sepia tones. A grainy film texture covers the image, creating a tactile historical feel. The composition is focused on the mechanical keys and the ink ribbon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Xx4x2a-veudu4b-pzxDzh8rTP3oxoMK9X0GSdX9858CGxlBs0Zmm4u90OUYwFtnU5BxohUhFaqPgsqXns5i3vVOndEdWc7pQeNC-FXLeWsyF0HPLkEKnaCg2z76eYSrRuKCs7eUIci5PLIDd_Yg6CmhtGkK79FZbQgSA2DyWI_CzUKfQm09K8e5T0BY48dHqlhhIDr8ssuIpbVl8yo34rPOpBAR7PyX1ReYOL0Fq4tN3VgMz_RtXSijkf56RG41_tcrPBlerYCit"/>
</div>
{/*  Main Switchboard Hub  */}
<div className="md:col-span-2 bg-stone-900 border-[3px] border-black p-6 relative">
<div className="flex justify-between items-center mb-8">
<span className="text-primary font-headline-md">STATUS: FRANTIC</span>
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-primary-container border-2 border-black animate-pulse"></div>
<div className="w-4 h-4 rounded-full bg-on-tertiary border-2 border-black"></div>
</div>
</div>
{/*  Ports Grid  */}
<div className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-items-center mb-12">
{/*  Generate Ports  */}
<div className="group relative">
<div className="w-12 h-12 bg-black border-[3px] border-stone-600 rounded-full flex items-center justify-center hover:border-primary cursor-pointer active:scale-95 transition-all">
<div className="w-4 h-4 bg-stone-800 rounded-full border-2 border-black"></div>
</div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-stone-500">LINE-01</span>
</div>
<div className="group relative">
<div className="w-12 h-12 bg-black border-[3px] border-stone-600 rounded-full flex items-center justify-center hover:border-primary cursor-pointer active:scale-95 transition-all">
<div className="w-4 h-4 bg-stone-800 rounded-full border-2 border-black"></div>
</div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-stone-500">WAREHOUSE</span>
</div>
<div className="group relative">
<div className="w-12 h-12 bg-black border-[3px] border-stone-600 rounded-full flex items-center justify-center border-primary cursor-pointer active:scale-95 transition-all">
<div className="w-4 h-4 bg-primary rounded-full border-2 border-black"></div>
</div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary">OFFICE</span>
</div>
{/*  More Ports as visual fillers  */}
<div className="w-12 h-12 bg-black border-[3px] border-stone-600 rounded-full flex items-center justify-center"></div>
<div className="w-12 h-12 bg-black border-[3px] border-stone-600 rounded-full flex items-center justify-center"></div>
<div className="w-12 h-12 bg-black border-[3px] border-stone-600 rounded-full flex items-center justify-center"></div>
</div>
{/*  Dangling Cables SVG  */}
<svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 600 400">
<path className="switchboard-wire" d="M 100 200 Q 150 350 250 200" />
<path className="switchboard-wire stroke-secondary" d="M 350 150 Q 400 300 450 150" />
<path className="switchboard-wire stroke-tertiary opacity-40" d="M 500 100 Q 550 400 580 120" />
</svg>
<div className="mt-12 p-4 border-2 border-stone-700 bg-black/40 text-sm font-mono text-stone-400">
                            SYSTEM LOG: AWAITING CONNECTION AT PORT 'GALLOWS'...
                        </div>
</div>
</div>
</div>
</section>
{/*  Entry Form Section  */}
<section className="max-w-2xl mx-auto px-8 py-20">
<div className="bg-tertiary-fixed-dim border-[4px] border-black hard-shadow p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 rotate-12">
<span className="text-4xl text-primary-container font-black">CONFIDENTIAL</span>
</div>
<h3 className="font-headline-md text-headline-md text-black mb-6 uppercase">Register Your Alias</h3>
<form className="space-y-8">
<div>
<label className="block text-black font-label-sm uppercase mb-2">Detective Identification</label>
<input className="w-full bg-stone-100 border-x-0 border-t-0 border-b-[4px] border-black text-2xl font-body-lg p-2 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-stone-300" placeholder="e.g. S. SPADE" type="text"/>
</div>
<div className="flex items-center gap-6">
<button className="active-lever group flex items-center gap-4 bg-primary-container border-[3px] border-black px-10 py-6 hard-shadow-small transition-all" type="submit">
<span className="font-headline-md text-headline-md text-white uppercase tracking-widest">Submit Case</span>
<span className="material-symbols-outlined text-4xl text-white group-hover:rotate-45 transition-transform">settings_input_component</span>
</button>
<div className="flex-1 text-black font-label-sm italic opacity-70">
                            * Fingerprints will be kept on file for 72 hours.
                        </div>
</div>
</form>
</div>
</section>
{/*  Floating Action Button  */}
<button className="fixed bottom-10 right-10 w-16 h-16 bg-yellow-400 border-[3px] border-black rounded-full flex items-center justify-center hard-shadow-small hover:scale-110 active:scale-95 transition-all z-40">
<span className="material-symbols-outlined text-black text-3xl">help</span>
</button>
</main>
{/*  Footer Shell  */}
<footer className="bg-stone-950 border-t-4 border-black flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<h4 className="text-stone-400 font-bold uppercase tracking-widest">The Frantic Switchboard</h4>
<p className="font-mono text-xs uppercase tracking-tighter text-stone-500">© 1934 THE FRANTIC SWITCHBOARD - PROPERTY OF THE CITY</p>
</div>
<div className="flex gap-8">
<a className="font-mono text-xs uppercase tracking-tighter text-stone-600 hover:text-yellow-400 hover:italic" href="#">The Case File</a>
<a className="font-mono text-xs uppercase tracking-tighter text-stone-600 hover:text-yellow-400 hover:italic" href="#">The Archive</a>
<a className="font-mono text-xs uppercase tracking-tighter text-stone-600 hover:text-yellow-400 hover:italic" href="#">The Wire</a>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-stone-600 cursor-pointer hover:text-primary transition-colors">public</span>
<span className="material-symbols-outlined text-stone-600 cursor-pointer hover:text-primary transition-colors">history</span>
<span className="material-symbols-outlined text-stone-600 cursor-pointer hover:text-primary transition-colors">shield</span>
</div>
</footer>
    </>
  );
}
