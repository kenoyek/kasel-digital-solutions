"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { projectExperiences } from "../data/project-experiences";

export default function ProjectShowcase({ name, slug, compact = false }: {
  name: string;
  slug: string;
  compact?: boolean;
}) {
  const views = projectExperiences[slug];
  const [selected, setSelected] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[selected];

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % views.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + views.length) % views.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = views.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className={`project-showcase project-showcase--${slug}${compact ? " project-showcase--compact" : ""}`}>
      <div aria-label={`${name} product views`} className="project-showcase__tabs" role="tablist">
        {views.map((item, index) => (
          <button
            aria-controls={`${id}-panel-${index}`}
            aria-selected={selected === index}
            id={`${id}-tab-${index}`}
            key={item.id}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => navigate(event, index)}
            ref={(element) => { tabs.current[index] = element; }}
            role="tab"
            tabIndex={selected === index ? 0 : -1}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      {views.map((item, index) => (
        <div
          aria-labelledby={`${id}-tab-${index}`}
          hidden={selected !== index}
          id={`${id}-panel-${index}`}
          key={item.id}
          role="tabpanel"
          tabIndex={0}
        >
          {selected === index && (
            <figure className={`project-showcase__stage project-showcase__stage--${item.format}`}>
              <div className="project-showcase__device">
                {item.format === "browser" && (
                  <div className="project-showcase__chrome" aria-hidden="true">
                    <i /><i /><i /><span>{slug === "teacheasy-lms" ? "teacheasylms.com" : "reframe.network"}</span>
                  </div>
                )}
                <Image alt={item.alt} src={item.src} width={item.format === "phone" ? 591 : 720} height={item.format === "phone" ? 1280 : 900} unoptimized />
              </div>
              <figcaption>{item.label}<span>{item.format === "phone" ? "Mobile app" : "Public website"}</span></figcaption>
            </figure>
          )}
        </div>
      ))}
      <div className="project-showcase__copy" aria-live="polite">
        <p>{view.title}</p>
        {!compact && <span>{view.description}</span>}
      </div>
    </div>
  );
}
