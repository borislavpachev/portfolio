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
    <section className="my-0 md:my-10 p-10 flex flex-col items-center justify-center md:space-x-20 space-y-6 md:space-y-0 md:flex-row">
      <div className="max-w-lg relative flex flex-col justify-center rounded-2xl space-y-8 p-16 md:p-12">
        <p className="text-5xl tracking-wider text-white/50">
          Hello, World!{' '}
          <span className="absolute z-30 text-white" ref={greetingHeroHandRef}>
            👋
          </span>
        </p>
        <p className="font-bold text-6xl -tracking-wider">
          {`I'm Borislav Pachev`}
        </p>
        <div className="flex items-center space-x-1 text-5xl tracking-wider">
          <div
            className="bg-blue-950 ease-in rounded-b-lg p-3 -rotate-6 cursor-pointer hover:rotate-0 
            transition duration-300"
          >
            Web
          </div>
          <div className="pp-2">Developer</div>
        </div>
      </div>
      <div className="max-w-lg flex self-center transition">
        <img
          src="/avatar.webp"
          loading="lazy"
          className="w-full bg-blue-950 h-auto rounded-3xl shadow-2xl shadow-black/90"
          alt="hero"
        />
      </div>
    </section>
  );
}
