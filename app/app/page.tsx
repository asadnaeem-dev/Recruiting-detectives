import SwitchboardGame from "./components/SwitchboardGame";

export default function Page() {
  return (
    <>
      {/*  Top Navigation Shell  */}
      <header className="sticky top-0 z-50 bg-stone-900 border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)] flex justify-between items-center w-full px-6 py-4 max-w-none">
        <div className="flex items-center gap-4">
          <h1 className="text-yellow-400 font-black uppercase tracking-widest text-2xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            The Frantic Switchboard
          </h1>
        </div>
      </header>
      
      <main className="relative flex-1">
        {/*  Hero Section  */}
        <section className="relative pt-24 pb-8 px-8 flex flex-col items-center text-center overflow-hidden">
          {/*  Background Silhouettes  */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img 
              className="w-full h-full object-cover grayscale brightness-50" 
              data-alt="A collection of rubber-hose style cartoon silhouettes of 1930s characters" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxT-ckTnv6WLanKFf05l_zpymPriQgsS9hoJS8KyXfiqdABdzofqbhEkhOFtzfKTvdhnt073h0T-p3kEd0IOtw9lqi5EChGJari3qSAZ0uPVeGKGPbzwBnTzzGaq1LAtR67HdOPbxHTUi0pPDGz7Nnc3vQ0SmifdISuosMw9ZffPBQtT90B9gRO1JJZrY96ma83XGQMptXJKFFf_lHBtRVCGMz9RK3W_dK7m3IX71ARj2E-ti9dvrp16TRVhTBm0BHH_QWzHFAbgqK"
            />
          </div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="font-headline-lg text-primary uppercase mb-4 rubber-hose-bounce skew-y-[-2deg] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              The Frantic Switchboard
            </h2>
            <p className="font-body-lg text-headline-md text-tertiary-fixed italic border-y-2 border-primary-container py-2 inline-block">
              Connect the wires. Crack the case.
            </p>
          </div>
        </section>

        {/*  The Switchboard Game Component  */}
        <SwitchboardGame />
      </main>
    </>
  );
}
