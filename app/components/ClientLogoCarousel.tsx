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
  const dimensions = clientLogoDimensions[client.logo];
  const image = (
    <Image
      alt={duplicate ? "" : `${client.name} logo`}
      className="client-logo-carousel__image"
      height={dimensions.height}
      loading="lazy"
      src={client.logo}
      unoptimized
      width={dimensions.width}
    />
  );

  if (!client.website) {
    return <span className="client-logo-carousel__item">{image}</span>;
  }

  return (
    <a
      aria-label={`Visit ${client.name}`}
      className="client-logo-carousel__item"
      href={client.website}
      rel="noopener noreferrer"
      target="_blank"
    >
      {image}
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
