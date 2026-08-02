"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { useRef } from "react";

export default function PrecisionOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !orbRef.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    orbRef.current.style.setProperty("--pointer-x", x.toFixed(3));
    orbRef.current.style.setProperty("--pointer-y", y.toFixed(3));
  };

  const resetPointer = () => {
    if (!orbRef.current) {
      return;
    }

    orbRef.current.style.setProperty("--pointer-x", "0");
    orbRef.current.style.setProperty("--pointer-y", "0");
  };

  return (
    <div
      aria-label="KASEL orb logo with animated precision paths"
      className="precision-orb"
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
      ref={orbRef}
      role="img"
    >
      <div className="precision-orb__plane precision-orb__plane--back">
        <svg aria-hidden="true" viewBox="0 0 720 720">
          <ellipse className="orbit orbit--slow" cx="360" cy="360" rx="292" ry="104" />
          <ellipse className="orbit orbit--tilt" cx="360" cy="360" rx="118" ry="292" />
          <path
            className="orbit orbit--angled"
            d="M116 435C198 240 421 143 604 244C506 493 281 585 116 435Z"
          />
        </svg>
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className="precision-orb__logo"
        height={900}
        priority
        src="/kasel-orb.png"
        width={900}
      />

      <div className="precision-orb__plane precision-orb__plane--front">
        <svg aria-hidden="true" viewBox="0 0 720 720">
          <ellipse className="signal signal--teal" cx="360" cy="360" rx="292" ry="104" />
          <ellipse className="signal signal--lime" cx="360" cy="360" rx="118" ry="292" />
          <path
            className="signal signal--short"
            d="M116 435C198 240 421 143 604 244C506 493 281 585 116 435Z"
          />
        </svg>
      </div>
    </div>
  );
}
