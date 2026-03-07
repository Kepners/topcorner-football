"use client";

import { useEffect, useState } from "react";

type IntroPhase = "hidden" | "playing" | "logo" | "leaving";

export default function SplashIntro() {
  const [phase, setPhase] = useState<IntroPhase>("hidden");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem("topcorner-intro-seen") === "1";

    if (reducedMotion || alreadySeen) {
      return;
    }

    const showFrame = window.requestAnimationFrame(() => {
      setPhase("playing");
    });

    const logoTimer = window.setTimeout(() => {
      setPhase("logo");
    }, 1900);

    const leaveTimer = window.setTimeout(() => {
      window.sessionStorage.setItem("topcorner-intro-seen", "1");
      setPhase("leaving");
    }, 3000);

    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
    }, 3900);

    return () => {
      window.cancelAnimationFrame(showFrame);
      window.clearTimeout(logoTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      data-phase={phase}
      className="intro-stage fixed inset-0 z-50 overflow-hidden bg-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/brand/topcorner-og.jpg"
        onEnded={() => {
          window.sessionStorage.setItem("topcorner-intro-seen", "1");
          setPhase("leaving");
        }}
      >
        <source src="/videos/topcorner-intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,71,0.32),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.84))]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="intro-copy space-y-3">
          <p className="text-xs uppercase tracking-[0.55em] text-[var(--color-gold)]">
            TopCorner.football
          </p>
          <h1 className="font-display text-5xl uppercase tracking-[0.18em] text-white sm:text-7xl">
            Hit The Top Corner
          </h1>
          <p className="mx-auto max-w-xl text-sm uppercase tracking-[0.24em] text-[var(--color-mist)] sm:text-base">
            A cinematic entry into sharper football finishing
          </p>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(255,225,160,0.48),transparent_18%)] transition-opacity duration-700 ${
          phase === "logo" || phase === "leaving" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
