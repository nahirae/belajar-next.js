'use client'

export const HeroSection = () => {
  return (
     <main className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center px-4 text-center">
      <div className="text-xs w-full flex justify-between mb-10">
        <span className="opacity-60">designed by naya nasywa</span>
        <span className="opacity-60">frontend dev - software engineering</span>
        <span className="opacity-60">portfolio nayapage.vercel.app</span>
      </div>

      <h2 className="text-base md:text-lg text-gray-400">
        Hello, Welcome to my portofolio
      </h2>
      <h1 className="text-[3rem] md:text-[6rem] font-black leading-none">
        <span className="text-white">Naya</span>
        <br />
        <span className="inline-flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-blue-700 rotate-45"
          >
            <path
              fillRule="evenodd"
              d="M15.53 8.47a.75.75 0 0 0-1.06 0L10.5 12.44 8.53 10.47a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0 0-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white">Nasywa!</span>
        </span>
      </h1>
      <p className="text-gray-400 mt-4 max-w-xl pb-10">
        I'm Naya, a frontend developer with a passion for turning complex ideas into beautifully brutal interfaces. I believe great software doesn't just work — it speaks, guides, and inspires.
      </p>

      <button className="mt-4 bg-blue-700 rounded-md p-3">
         <p className="text-white font-bold">Les't Connect</p>
      </button>
    </main>
  )
}
