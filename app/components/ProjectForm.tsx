"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "project", string>>;

const EMAIL = "hello@kasel.digital";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ProjectForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
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

    setStatus("Opening your email app with the project details.");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Project enquiry for KASEL Digital Solutions",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="project-form" noValidate onSubmit={handleSubmit}>
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
      <button className="button button--primary" type="submit">
        Start a project
      </button>
      <p aria-live="polite" className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
