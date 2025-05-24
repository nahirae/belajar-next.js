"use client";

import Image from "next/image";
import { SKILLS } from "@/lib/constants";

export const AboutSection = () => {
  return (
    <section className="px-6 py-12 md:py-24 bg-gray-950 text-white brutalist-border brutalist-shadow">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-[3rem] md:text-[5rem] font-bold glitch mb-6"
          data-text="About Me"
        >
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Hello, I'm <span className="font-bold text-blue-200">Naya Nasywa</span>, a passionate <span className="underline">Frontend Developer</span> focused on crafting bold and expressive web experiences. I love building interfaces that combine brutalist aesthetics with clean, semantic code.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-400">
          With a strong foundation in modern frameworks like <span className="text-white">React</span> and <span className="text-white">Next.js</span>, I bring ideas to life through structured systems and creative interaction.
        </p>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 glitch" data-text="Tech Stack">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {SKILLS.map((icon, index) => (
              <div
                key={index}
                className="w-12 h-12 md:w-16 md:h-16 p-2 brutalist-border brutalist-shadow bg-white"
              >
                <Image
                  src={`/assets/${icon}`}
                  alt={icon.split("/").pop()?.split(".")[0]}
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
