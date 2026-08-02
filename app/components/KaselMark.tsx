import Image from "next/image";

type KaselMarkProps = {
  compact?: boolean;
};

export default function KaselMark({ compact = false }: KaselMarkProps) {
  return (
    <span className={compact ? "kasel-mark kasel-mark--compact" : "kasel-mark"}>
      <Image
        alt=""
        aria-hidden="true"
        className="kasel-mark__orb"
        height={48}
        src="/kasel-orb.png"
        width={48}
      />
      <span className="kasel-mark__text">
        <b>KASEL</b>
        {!compact && <small>Digital Solutions Ltd</small>}
      </span>
    </span>
  );
}
