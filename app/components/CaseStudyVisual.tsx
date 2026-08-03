import type { CSSProperties } from "react";
import type { CaseStudy } from "../data/case-studies";

function shortTechnologyLabel(technology: string) {
  if (technology === "Row Level Security") {
    return "RLS";
  }

  if (technology === "Supabase Realtime") {
    return "Realtime";
  }

  if (technology === "Firebase Cloud Messaging") {
    return "FCM";
  }

  return technology;
}

export default function CaseStudyVisual({
  caseStudy,
  compact = false,
}: {
  caseStudy: CaseStudy;
  compact?: boolean;
}) {
  const previewCapabilities = caseStudy.capabilities.slice(0, compact ? 3 : 4);
  const previewTechnologies = caseStudy.technologies.slice(0, compact ? 3 : 4);

  return (
    <div
      aria-label={caseStudy.visualAlt}
      className={`case-visual case-visual--${caseStudy.accent}`}
      role="img"
    >
      <div className="case-visual__chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="case-visual__screen">
        <div className="case-visual__heading">
          <span>{caseStudy.client}</span>
          <strong>{caseStudy.name}</strong>
        </div>
        <div className="case-visual__map" aria-hidden="true">
          {previewCapabilities.map((capability, index) => (
            <span key={capability} style={{ "--node": index } as CSSProperties}>
              {capability}
            </span>
          ))}
        </div>
        <div className="case-visual__stack" aria-hidden="true">
          {previewTechnologies.map((technology) => (
            <span key={technology}>{shortTechnologyLabel(technology)}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
