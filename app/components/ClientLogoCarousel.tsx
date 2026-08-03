import Image from "next/image";
import {
  CLIENT_LOGO_CAROUSEL_ENABLED,
  clientLogoDimensions,
  clients,
  type Client,
} from "../data/clients";

function ClientLogo({
  client,
  duplicate = false,
}: {
  client: Client;
  duplicate?: boolean;
}) {
  const logoKind = client.logoKind ?? (client.logo ? "wordmark" : "text");
  const image = client.logo ? (
    <Image
      alt={duplicate ? "" : `${client.name} logo`}
      className="client-logo-carousel__image"
      height={clientLogoDimensions[client.logo].height}
      loading="lazy"
      src={client.logo}
      unoptimized
      width={clientLogoDimensions[client.logo].width}
    />
  ) : (
    <span
      aria-label={duplicate ? undefined : `${client.name} logo`}
      className="client-logo-carousel__text-mark"
      role={duplicate ? undefined : "img"}
    >
      {client.displayName ?? client.name}
    </span>
  );
  const content = (
    <span className={`client-logo-carousel__frame client-logo-carousel__frame--${logoKind}`}>
      {image}
    </span>
  );

  if (duplicate) {
    return <span className="client-logo-carousel__item">{content}</span>;
  }

  return (
    <a
      aria-label={`View ${client.name} case study`}
      className="client-logo-carousel__item"
      href={client.caseStudyHref}
    >
      {content}
    </a>
  );
}

export default function ClientLogoCarousel() {
  if (!CLIENT_LOGO_CAROUSEL_ENABLED || clients.length < 3) {
    return null;
  }

  return (
    <section
      aria-labelledby="clients-heading"
      className="client-logo-section"
      data-client-logo-section="enabled"
    >
      <div className="client-logo-section__header">
        <p className="eyebrow">Selected clients</p>
        <h2 id="clients-heading">Trusted by teams we&apos;ve helped move forward</h2>
        <p>
          We work with businesses and organisations to design, build and improve
          their digital products.
        </p>
      </div>

      <div
        aria-label="Client logos"
        className="client-logo-carousel"
        data-client-logo-carousel
        tabIndex={0}
      >
        <div className="client-logo-carousel__track">
          <div className="client-logo-carousel__set">
            {clients.map((client) => (
              <ClientLogo client={client} key={client.name} />
            ))}
          </div>
          <div aria-hidden="true" className="client-logo-carousel__set">
            {clients.map((client) => (
              <ClientLogo client={client} duplicate key={`${client.name}-duplicate`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
