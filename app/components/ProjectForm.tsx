"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "project", string>>;

const EMAIL = "hello@kasel.digital";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ProjectForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const nextErrors: Errors = {};

    if (!name) {
      nextErrors.name = "Enter your name.";
    }
    if (!email || !isValidEmail(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!project) {
      nextErrors.project = "Tell us what you want to build or improve.";
    }

    setErrors(nextErrors);
    setFallbackUrl("");

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      "",
      "Project or process to improve:",
      project,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Project enquiry for KASEL Digital Solutions",
    )}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(true);
    setStatus("Sending your project enquiry.");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({ company, email, name, project, website }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const responseText = await response.text();
      let result: { message?: string } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText) as { message?: string };
        } catch {
          result = {};
        }
      }

      if (!response.ok) {
        throw new Error(result.message ?? "The enquiry could not be sent.");
      }

      setStatus(result.message ?? "Your project enquiry has been sent.");
      event.currentTarget.reset();
    } catch {
      setFallbackUrl(mailtoUrl);
      setStatus("The form could not send. Use email or WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="project-form" noValidate onSubmit={handleSubmit}>
      <label className="project-form__trap">
        <span>Website</span>
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>
      <div className="field-row">
        <label>
          <span>Name</span>
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            name="name"
            type="text"
          />
          {errors.name && <small id="name-error">{errors.name}</small>}
        </label>
        <label>
          <span>Email</span>
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            name="email"
            type="email"
          />
          {errors.email && <small id="email-error">{errors.email}</small>}
        </label>
      </div>
      <label>
        <span>Company</span>
        <input autoComplete="organization" name="company" type="text" />
      </label>
      <label>
        <span>Project brief</span>
        <textarea
          aria-describedby={errors.project ? "project-error" : undefined}
          aria-invalid={Boolean(errors.project)}
          name="project"
          rows={5}
        />
        {errors.project && <small id="project-error">{errors.project}</small>}
      </label>
      <button className="button button--primary" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending enquiry" : "Start a project"}
      </button>
      <p aria-live="polite" className="form-status" role="status">
        {status}
      </p>
      {fallbackUrl && (
        <a className="form-fallback" href={fallbackUrl}>
          Open email instead
        </a>
      )}
    </form>
  );
}
