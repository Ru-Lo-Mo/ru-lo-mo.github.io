export default function PFTBS({setIsAkarryon}) {
  return (
    <div className="h-full flex items-center justify-center flex-col p-6">

      <a 
      className="flex-1 items-center justify-center overflow-hidden" 
      onMouseEnter={() => setIsAkarryon(true)} 
      onMouseLeave={() => setIsAkarryon(false)}
      href="/#portfolio/the-bitter-shot"
      alt="The Bitter Shot page"
      >
        <img 
        className="h-full object-scale-down rounded-lg border-2 border-[var(--light-color)]" 
        src="bannerTBS.png" 
        alt="The Bitter Shot"
        />
      </a>

      <div className="h-auto">
        <h1 className="text-[#bba4a2] font-semibold p-6 text-3xl">
          The Bitter Shot
        </h1>
      </div>

    </div>
  );
}