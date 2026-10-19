"use client";

import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { contactCopy } from "@/lib/i18n/pages/contact";
import { t } from "@/lib/i18n/phrase";
import { pillSolid } from "@/lib/ui";

const field = "w-full rounded-md border border-line bg-white px-3 py-3 text-base";

type FormState = { name: string; phone: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: "", phone: "", email: "", message: "" };

export function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const locale = useLocale();
  const fields = contactCopy.form;
  const [values, setValues] = useState<FormState>({ ...empty, message: initialMessage });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function update(key: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  }

  function validate(next: FormState) {
    const required = t(locale, fields.required);
    const found: FormErrors = {};
    if (!next.name.trim()) found.name = required;
    if (!next.phone.trim()) found.phone = required;
    if (!next.email.trim()) found.email = required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) found.email = t(locale, fields.emailInvalid);
    if (!next.message.trim()) found.message = required;
    return found;
  }

  return (
    <form
      className="grid gap-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length) {
          setStatus("error");
          return;
        }
        const body = [`Name: ${values.name.trim()}`, `Phone: ${values.phone.trim()}`, `Email: ${values.email.trim()}`, "", values.message.trim()].join("\n");
        const href = `mailto:contact@nbarari.com?subject=${encodeURIComponent("Enquiry")}&body=${encodeURIComponent(body)}`;
        try {
          window.location.href = href;
          setStatus("sent");
        } catch {
          setStatus("error");
        }
      }}
    >
      {([
        ["name", "text", fields.name],
        ["phone", "tel", fields.phone],
        ["email", "email", fields.email],
      ] as const).map(([key, type, label]) => (
        <label className="grid gap-1.5 text-sm font-medium" key={key} htmlFor={`enquiry-${key}`}>
          {t(locale, label)}
          <input
            className={`${field} ${errors[key] ? "border-red-700" : ""}`}
            id={`enquiry-${key}`}
            name={key}
            type={type}
            autoComplete={key === "name" ? "name" : key === "phone" ? "tel" : "email"}
            value={values[key]}
            aria-invalid={errors[key] ? true : undefined}
            aria-describedby={errors[key] ? `enquiry-${key}-error` : undefined}
            onChange={(event) => update(key, event.target.value)}
          />
          {errors[key] ? <span className="text-sm font-normal text-red-700" id={`enquiry-${key}-error`}>{errors[key]}</span> : null}
        </label>
      ))}
      <label className="grid gap-1.5 text-sm font-medium" htmlFor="enquiry-message">
        {t(locale, fields.message)}
        <textarea
          className={`${field} min-h-32 resize-y ${errors.message ? "border-red-700" : ""}`}
          id="enquiry-message"
          name="message"
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "enquiry-message-error" : undefined}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? <span className="text-sm font-normal text-red-700" id="enquiry-message-error">{errors.message}</span> : null}
      </label>
      <button className={`${pillSolid} w-full sm:w-fit`} type="submit">{t(locale, fields.send)}</button>
      {status === "sent" ? <p className="text-sm" role="status">{t(locale, fields.sent)}</p> : null}
      {status === "error" && !Object.keys(errors).length ? <p className="text-sm text-red-700" role="alert">{t(locale, fields.error)}</p> : null}
    </form>
  );
}
