
export default function Page() {
  return (
    <>
      <div className="film-grain"></div>
<div className="vignette"></div>
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-stone-900 dark:bg-black border-b-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-yellow-400 text-3xl" data-icon="policy">policy</span>
<h1 className="font-['Spline_Sans'] uppercase tracking-[0.15em] font-black text-xl text-yellow-400 italic skew-x-[-10deg]">INKWELL INVESTIGATIONS</h1>
</div>
<nav className="hidden md:flex gap-8">
<a className="font-['Spline_Sans'] uppercase tracking-[0.15em] font-black text-sm text-stone-400 hover:text-stone-100 transition-all" href="#">Archive</a>
<a className="font-['Spline_Sans'] uppercase tracking-[0.15em] font-black text-sm text-yellow-400 border-b-4 border-yellow-400 pb-1" href="#">Leaderboard</a>
<a className="font-['Spline_Sans'] uppercase tracking-[0.15em] font-black text-sm text-stone-400 hover:text-stone-100 transition-all" href="#">Support</a>
</nav>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-yellow-400 text-3xl hover:scale-105 transition-transform" data-icon="account_circle">account_circle</span>
</div>
</header>
{/*  NavigationDrawer  */}
<aside className="fixed left-0 top-0 h-screen pt-24 flex flex-col z-40 bg-stone-800 dark:bg-stone-950 w-72 border-r-[4px] border-black shadow-[8px_0px_0px_0px_rgba(0,0,0,1)]">
<div className="px-6 py-4">
<h2 className="text-2xl font-black text-stone-100 underline decoration-red-600 font-mono text-sm tracking-tight">POLICE BLOTTER</h2>
</div>
<nav className="mt-6">
<a className="text-stone-300 p-4 block hover:bg-stone-700 font-mono text-sm tracking-tight flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span> Case Files
            </a>
<a className="bg-yellow-400 text-black font-bold border-[3px] border-black rotate-[-1deg] translate-x-2 p-4 block flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="military_tech">military_tech</span> Leaderboard
            </a>
<a className="text-stone-300 p-4 block hover:bg-stone-700 font-mono text-sm tracking-tight flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span> Switchboard
            </a>
<a className="text-stone-300 p-4 block hover:bg-stone-700 font-mono text-sm tracking-tight flex items-center gap-3" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span> Dossiers
            </a>
</nav>
</aside>
<main className="ml-72 pt-32 px-10 pb-20 max-w-6xl mx-auto">
{/*  Header Section  */}
<section className="mb-12 border-l-[12px] border-black pl-8 py-4">
<h2 className="font-headline-lg text-headline-lg text-on-primary-container leading-none italic uppercase tracking-tighter mb-2">THE CITY'S MOST WANTED</h2>
<p className="font-body-lg text-body-lg text-tertiary-fixed font-bold italic opacity-80">(FOR SOLVING CRIMES)</p>
<div className="h-[4px] w-full bg-black mt-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
</section>
{/*  Leaderboard Bento Grid  */}
<div className="grid grid-cols-1 gap-6">
{/*  Top 3 Spotlight  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
{/*  Rank 2  */}
<div className="bg-[#d2c4b0] border-[4px] border-black p-6 ink-shadow rotate-[1deg] hover:rotate-0 transition-transform cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-black text-xl border-b-[4px] border-l-[4px] border-black">#2</div>
<img className="w-32 h-32 rounded-full border-[6px] border-black mx-auto mb-4" data-alt="A 1930s rubber-hose style cartoon detective with exaggerated features, wearing a fedora and trench coat, circular portrait, high contrast black and white ink drawing, grainy sepia background, noir aesthetic, playful but mysterious." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6QSIn-XMX-INRh96kPdQMmIlxZoztv8FsSHTCd8zz234vFrH7C4GjxslR-y9DxFYYJbAd_R6h5ozHxocfmj1Jgvw0_u9bnE-8QlrXwLglzbWKv4OITyeSUB9l4mCErzu_iWppNsV_vPiFyZ2k9gSN8TIFdc93be8RuDQtJBYcmofUZNWBgg2dxD32OC6ptbBlrQvenbXAaWTCOkOccmRaMg76yO-Yt27Tzhit0_NjxlVo-6HxHKKsYCNRd1j7OyOCGssvCBDQY76F"/>
<h3 className="font-headline-md text-center text-black text-2xl uppercase tracking-tighter">The Shadow</h3>
<p className="font-mono text-center text-red-700 font-bold mt-2">TIME: 04:12:55</p>
</div>
{/*  Rank 1  */}
<div className="bg-yellow-400 border-[4px] border-black p-8 ink-shadow scale-105 z-10 rotate-[-1deg] hover:rotate-0 transition-transform cursor-pointer relative">
<div className="absolute -top-4 -left-4 bg-red-600 text-white px-6 py-3 font-black text-3xl border-[4px] border-black rotate-[-5deg]">#1</div>
<img className="w-40 h-40 rounded-full border-[8px] border-black mx-auto mb-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" data-alt="A classic noir detective cartoon character in rubber-hose animation style, holding a magnifying glass, wearing a gritty fedora, circular composition, heavy ink outlines, grainy texture, dynamic lighting, 1930s animation studio aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiw9m6FCOnTIw_sjZlKhqr9daKyE48fvw2pkf_DVNf8qiVnVP9KTIxcabFp3DJnwqcH7HL6wbf57yuYjZfmbs9cNHBiLM35y2F_vECZ-637U4CnFH5OkbNWc_zq89x2bshV7hR8O63loRbA8yA-o6Cp3pp_A7eJQ-unaP6pIPTJo5xK1MJpZck7oONf-uYK6UmiUT7Iobha3Sb_xsek1t-JoFs9sYsZnVCGbWyIPo3ogpCCPs0pGgYxz6h_xaa45TykYjk2G08y5xy"/>
<h3 className="font-headline-md text-center text-black text-3xl uppercase tracking-tighter font-black">Sam Spade</h3>
<p className="font-mono text-center text-black border-2 border-black inline-block px-4 py-1 mx-auto block w-fit mt-3 font-bold bg-white/20">TIME: 03:55:12</p>
</div>
{/*  Rank 3  */}
<div className="bg-[#c4b5a2] border-[4px] border-black p-6 ink-shadow rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer relative">
<div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-black text-xl border-b-[4px] border-l-[4px] border-black">#3</div>
<img className="w-32 h-32 rounded-full border-[6px] border-black mx-auto mb-4" data-alt="An early animation style detective character, rubber-hose limbs, wide white eyes, smoking a pipe, grainy film still, circular frame, sepia tones, harsh shadows, 1930s crime drama style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4OHPWW5m9FbwDSvYaquj5e-f_sQoezSt6fqPv7yaIc3VPgVKaH7jT61w8qQLEnMYi1gBYvl7zETJWyo8O73q1HauLz6enljkHJmyAQpnfbZA4fKhnXv3cAuw03qTIE1Glh1ELjPRLEs5sQPosFeG_zQ2ZgX0qpa-rVPxYM5XpM9yofu0bW1VYgv8jpXZ6hEzhUOttsRIHD-kYVBwiEY12muTSE7ViPsKhEaqoykKwEf0RNf5xsSd8rqqZpJZyv89otGCxhS3lWM6h"/>
<h3 className="font-headline-md text-center text-black text-2xl uppercase tracking-tighter">Nick Charles</h3>
<p className="font-mono text-center text-red-700 font-bold mt-2">TIME: 04:45:30</p>
</div>
</div>
{/*  Scrollable List  */}
<div className="space-y-4 bg-[#e5ddd0] p-8 border-[6px] border-black ink-shadow">
<div className="grid grid-cols-12 gap-4 border-b-[3px] border-black pb-4 mb-4 font-black uppercase text-stone-700 tracking-widest text-xs">
<div className="col-span-1">Rank</div>
<div className="col-span-2">Operative</div>
<div className="col-span-5">Alias</div>
<div className="col-span-4 text-right">Case Completion</div>
</div>
{/*  List Item 4  */}
<div className="grid grid-cols-12 gap-4 items-center p-3 hover:bg-black/5 transition-colors border-b-2 border-black/10 group">
<div className="col-span-1 font-headline-md text-2xl text-red-600">4</div>
<div className="col-span-2">
<div className="w-12 h-12 rounded-full border-2 border-black bg-white overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Rubber-hose style detective icon, minimalist ink character, 1930s cartoon, circular composition, monochrome, grainy texture, vintage animation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAw9Ma00ro7DEWbq3_BEbGeJzfP275WUDH89xmJShD6RZ9r93X_YvkuSmW6hBKOhChzbeaP1e5iUSwiHDT9ukgYpg66hEL2N5drQmV7HfLkQKJB0ozY32WBEKMtJwL1GuCpYHQcpKyhVlQltSVfHRmM7EiGN9uszuIhffUgTKXU71qdxXc-v-g-ZJ2Yn0VJuLfp-F7FKpjSeNvv3jZg1gREjSnRTLsqLdlya5qOVpQMehgTtW55v-g0ZM_kUZNAeFRTJkVtfbjJBow"/>
</div>
</div>
<div className="col-span-5 font-headline-md text-black text-xl group-hover:translate-x-2 transition-transform">Miss Marple</div>
<div className="col-span-4 text-right font-mono text-stone-800 font-bold italic">05:22:11</div>
</div>
{/*  List Item 5  */}
<div className="grid grid-cols-12 gap-4 items-center p-3 hover:bg-black/5 transition-colors border-b-2 border-black/10 group">
<div className="col-span-1 font-headline-md text-2xl text-red-600">5</div>
<div className="col-span-2">
<div className="w-12 h-12 rounded-full border-2 border-black bg-white overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Vintage noir cartoon detective headshot, rubber-hose limbs, gritty ink work, 1930s animation style, circular, high contrast, sepia." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCndSTbHNFLw2cn0aUW-3tbkDoUfAY1B0alk03i0T4yQz67TpEpKrt-TXN_fYaM9mQMWV8qMkqDnVjh_mnuvvNOJ_qQsv_5fmf-hQqrtEj4SvlQqSfW-GL9TYf1zqk3gMPv2TQe9mCI3MrqZBmwOfTc5ECmXDrEZ_YCfrCXFPARJruTiC14F2uwo5MIkO494KpIk1cU5MfJn1SBxG5R8vaqf-6xQ7qaNql5ZCu1TGfOP0j1V3AgGehAr8okNft8D3q2jvSUeQ7D4BIO"/>
</div>
</div>
<div className="col-span-5 font-headline-md text-black text-xl group-hover:translate-x-2 transition-transform">Hercule Poirot</div>
<div className="col-span-4 text-right font-mono text-stone-800 font-bold italic">06:05:44</div>
</div>
{/*  List Item 6  */}
<div className="grid grid-cols-12 gap-4 items-center p-3 hover:bg-black/5 transition-colors border-b-2 border-black/10 group">
<div className="col-span-1 font-headline-md text-2xl text-red-600">6</div>
<div className="col-span-2">
<div className="w-12 h-12 rounded-full border-2 border-black bg-white overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Classic rubber-hose detective face, ink-blot eyes, fedora, 1930s cartoon, circular portrait, high contrast, grainy texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChMmMTvVrsCPrGT9I8JcqfDxHQZ_qoVCbq86EImgk5UiNryz8B-C4fkWne2MYEyiMEQhKeOOVjII8jFqBDtDCh9ol3QPpFtwwSEWV0XmccT6befxX1BvAH0e-STWArIlulorjJSMvLTCpcMNuCg_W6W9J-CC4RatWo9--QS9SM9dpGB1KXKnmILVIxs1JoAgSYVMxZTkRZarblWGb82Z9h8hvP1zxy0ZItGVtFXFzWiWUjtYl94QSCnQeTsnsuTjEj3fstKhpvR7XK"/>
</div>
</div>
<div className="col-span-5 font-headline-md text-black text-xl group-hover:translate-x-2 transition-transform">Velma Dinkley</div>
<div className="col-span-4 text-right font-mono text-stone-800 font-bold italic">07:12:00</div>
</div>
</div>
</div>
{/*  Footer / Your Rank Section  */}
<div className="mt-12 bg-black border-[4px] border-yellow-400 p-6 flex items-center justify-between ink-shadow relative overflow-hidden">
<div className="absolute -left-4 top-0 bottom-0 w-8 bg-yellow-400 skew-x-[-15deg]"></div>
<div className="flex items-center gap-8 pl-4">
<div className="text-yellow-400">
<p className="font-mono text-[10px] uppercase tracking-widest opacity-70">Personal Status</p>
<p className="font-headline-md text-4xl leading-none">YOUR RANK</p>
</div>
<div className="bg-yellow-400 text-black px-6 py-2 font-black text-4xl rotate-[-2deg] border-[3px] border-white">#842</div>
</div>
<div className="text-right">
<p className="font-mono text-stone-400 text-sm">CURRENT TIME REMAINING</p>
<p className="font-headline-md text-yellow-400 text-3xl">--:--:--</p>
</div>
</div>
</main>
{/*  Footer Shell  */}
<footer className="w-full py-12 px-10 flex flex-col items-center gap-4 bg-black border-t-[4px] border-black opacity-90">
<div className="flex gap-10">
<a className="font-['Spline_Sans'] text-[10px] font-bold tracking-[0.3em] uppercase text-stone-600 hover:text-red-600 transition-colors" href="#">Rules of Engagement</a>
<a className="font-['Spline_Sans'] text-[10px] font-bold tracking-[0.3em] uppercase text-stone-600 hover:text-red-600 transition-colors" href="#">HQ Contact</a>
<a className="font-['Spline_Sans'] text-[10px] font-bold tracking-[0.3em] uppercase text-white underline decoration-red-600" href="#">Archive</a>
</div>
<p className="font-['Spline_Sans'] text-[10px] font-bold tracking-[0.3em] uppercase text-stone-600">© 1934 NOIR ANIMATION STUDIOS - ALL RIGHTS RESERVED</p>
</footer>
    </>
  );
}
