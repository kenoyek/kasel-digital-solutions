const WHATSAPP_NUMBER = "2347075042166";
const WHATSAPP_MESSAGE =
  "Hello%20Kasel%20Digital%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="whatsapp-float__icon"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M16.04 2.67c-7.36 0-13.35 5.98-13.35 13.34 0 2.35.62 4.65 1.79 6.67l-1.9 6.65 6.82-1.79a13.3 13.3 0 0 0 6.64 1.69h.01c7.36 0 13.35-5.98 13.35-13.34 0-3.56-1.39-6.91-3.91-9.43a13.25 13.25 0 0 0-9.45-3.79Zm0 24.3h-.01a11.08 11.08 0 0 1-5.65-1.55l-.41-.24-4.05 1.06L7 22.29l-.27-.41a11.06 11.06 0 0 1-1.69-5.87c0-6.12 4.98-11.1 11.11-11.1 2.97 0 5.75 1.16 7.85 3.25a11.02 11.02 0 0 1 3.25 7.84c0 6.12-4.98 11.1-11.11 11.1Zm6.09-8.32c-.33-.17-1.98-.98-2.29-1.09-.31-.11-.53-.17-.76.17-.22.33-.87 1.09-1.07 1.31-.2.22-.39.25-.72.08-.33-.17-1.41-.52-2.68-1.65-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.56.11-.22.06-.42-.03-.58-.08-.17-.76-1.84-1.04-2.52-.27-.66-.55-.57-.76-.58h-.65c-.22 0-.58.08-.89.42-.31.33-1.17 1.14-1.17 2.79s1.2 3.24 1.37 3.46c.17.22 2.36 3.6 5.71 5.05.8.34 1.42.55 1.9.7.8.25 1.53.22 2.11.13.64-.1 1.98-.81 2.26-1.59.28-.78.28-1.45.2-1.59-.08-.14-.31-.22-.64-.39Z"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      aria-label="Chat with Kasel Digital Solutions on WhatsApp"
      className="whatsapp-float"
      href={WHATSAPP_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon />
      <span className="whatsapp-float__label">Chat with us</span>
    </a>
  );
}
