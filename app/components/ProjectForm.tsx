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

    const form = event.currentTarget;
    const data = new FormData(form);
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
      const firstInvalid = Object.keys(nextErrors)[0];
      form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${firstInvalid}"]`)?.focus();
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
      form.reset();
    } catch {
      setFallbackUrl(mailtoUrl);
      setStatus("The form could not send. Use email or WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="project-form" id="project-enquiry" noValidate onSubmit={handleSubmit}>
      <div className="project-form__heading"><p className="eyebrow">Your next chapter</p><h3>Tell us what you have in mind.</h3><p>A few details are all we need to get started.</p></div>
      <label className="project-form__trap" aria-hidden="true">
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
        <span>Company <em>(optional)</em></span>
        <input autoComplete="organization" name="company" type="text" />
      </label>
      <label>
        <span>Project brief</span>
        <textarea
          aria-describedby={errors.project ? "project-error" : undefined}
          aria-invalid={Boolean(errors.project)}
          name="project"
          placeholder="What would you like to build or improve?"
          rows={5}
        />
        {errors.project && <small id="project-error">{errors.project}</small>}
      </label>
      <button className="button button--primary" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending enquiry" : "Send project enquiry"}
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
