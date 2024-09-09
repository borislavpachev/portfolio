import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function HeroSection() {
  const greetingHeroHandRef = useRef(null);

  useGSAP(() => {
    gsap.to(greetingHeroHandRef.current, {
      rotation: 20,
      transformOrigin: 'bottom',
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  });

  return (
    <section className="flex flex-col md:flex-row max-w-5xl m-auto my-0 md:my-16 items-center justify-center md:space-x-16">
      <div className="w-full md:max-w-lg relative flex flex-col justify-center rounded-2xl space-y-8 my-12">
        <p className="text-3xl md:text-5xl tracking-wide text-white/50">
          Hello, World!{' '}
          <span className="absolute z-30 text-white" ref={greetingHeroHandRef}>
            👋
          </span>
        </p>
        <h1 className="font-bold text-4xl md:text-6xl -tracking-wider">
          {`I'm Borislav Pachev`}
        </h1>
        <div className="flex items-center space-x-1 text-3xl md:text-5xl tracking-wide">
          <div
            className="bg-blue-950 ease-in rounded-b-lg p-3 -rotate-6 cursor-pointer hover:rotate-0 
            transition duration-300"
          >
            Web
          </div>
          <div className="p-1">Developer</div>
        </div>
      </div>

      <div
        className="h-auto max-w-[450px] flex justify-center
      "
      >
        <img
          src="/avatar.png"
          loading="lazy"
          className="w-full bg-white rounded-3xl shadow-2xl shadow-black/90 -ml-0 md:-ml-10"
          alt="hero"
        />
      </div>
    </section>
  );
}
