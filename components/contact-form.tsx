"use client";

import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { contactCopy } from "@/lib/i18n/pages/contact";
import { servicesCopy } from "@/lib/i18n/pages/services";
import { t } from "@/lib/i18n/phrase";
import { pillSolid } from "@/lib/ui";

const field = "w-full rounded-md border border-line bg-white px-3 py-3 text-base";

const enquiryEmail = "contact@nbarari.com";
const categories = ["Food Products", "Frozen Foods", "Soft Drinks & Beverages", "Non Food"] as const;
const requestTypes = ["product", "wholesale", "partnership"] as const;

type FormState = { name: string; phone: string; email: string; requestType: string; category: string; products: string; quantities: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: "", phone: "", email: "", requestType: "", category: "", products: "", quantities: "", message: "" };

export function ContactForm({ initialMessage = "", initialCategory = "" }: { initialMessage?: string; initialCategory?: string }) {
  const locale = useLocale();
  const fields = contactCopy.form;
  const [values, setValues] = useState<FormState>({
    ...empty,
    message: initialMessage,
    category: categories.includes(initialCategory as (typeof categories)[number]) ? initialCategory : "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(key: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  }

  function validate(next: FormState) {
    const required = t(locale, fields.required);
    const found: FormErrors = {};
    if (!next.requestType.trim()) found.requestType = required;
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
      onSubmit={async (event) => {
        event.preventDefault();
        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length) {
          setStatus("error");
          return;
        }
        const requestLabel = fields.requestTypes[values.requestType as keyof typeof fields.requestTypes]?.en ?? values.requestType;
        const categoryName = values.category as keyof typeof servicesCopy.groups;
        const categoryLabel = values.category.trim() ? servicesCopy.groups[categoryName].name.en : "";
        setStatus("sending");
        try {
          const response = await fetch(`https://formsubmit.co/ajax/${enquiryEmail}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              _subject: `Nakhla Al Barari — ${requestLabel}`,
              _replyto: values.email.trim(),
              _template: "table",
              _captcha: "false",
              "Request type": requestLabel,
              Name: values.name.trim(),
              "Contact number": values.phone.trim(),
              Email: values.email.trim(),
              Category: categoryLabel,
              Products: values.products.trim(),
              Quantities: values.quantities.trim(),
              Message: values.message.trim(),
            }),
          });
          if (!response.ok) throw new Error("send failed");
          setValues({ ...empty });
          setStatus("sent");
        } catch {
          setStatus("error");
        }
      }}
    >
      <label className="grid gap-1.5 text-sm font-medium" htmlFor="enquiry-request-type">
        {t(locale, fields.requestType)}
        <select
          className={`${field} ${errors.requestType ? "border-red-700" : ""}`}
          id="enquiry-request-type"
          name="requestType"
          value={values.requestType}
          aria-invalid={errors.requestType ? true : undefined}
          aria-describedby={errors.requestType ? "enquiry-request-type-error" : undefined}
          onChange={(event) => update("requestType", event.target.value)}
        >
          <option value="">{t(locale, fields.requestTypePlaceholder)}</option>
          {requestTypes.map((type) => (
            <option key={type} value={type}>{t(locale, fields.requestTypes[type])}</option>
          ))}
        </select>
        {errors.requestType ? <span className="text-sm font-normal text-red-700" id="enquiry-request-type-error">{errors.requestType}</span> : null}
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        {([
          ["name", "text", fields.name],
          ["phone", "tel", fields.phone],
        ] as const).map(([key, type, label]) => (
          <label className="grid min-w-0 gap-1.5 text-sm font-medium" key={key} htmlFor={`enquiry-${key}`}>
            {t(locale, label)}
            <input
              className={`${field} ${errors[key] ? "border-red-700" : ""}`}
              id={`enquiry-${key}`}
              name={key}
              type={type}
              autoComplete={key === "name" ? "name" : "tel"}
              value={values[key]}
              aria-invalid={errors[key] ? true : undefined}
              aria-describedby={errors[key] ? `enquiry-${key}-error` : undefined}
              onChange={(event) => update(key, event.target.value)}
            />
            {errors[key] ? <span className="text-sm font-normal text-red-700" id={`enquiry-${key}-error`}>{errors[key]}</span> : null}
          </label>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-sm font-medium" htmlFor="enquiry-email">
          {t(locale, fields.email)}
          <input
            className={`${field} ${errors.email ? "border-red-700" : ""}`}
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email ? <span className="text-sm font-normal text-red-700" id="enquiry-email-error">{errors.email}</span> : null}
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-medium" htmlFor="enquiry-category">
          {t(locale, fields.category)}
          <select
            className={field}
            id="enquiry-category"
            name="category"
            value={values.category}
            onChange={(event) => update("category", event.target.value)}
          >
            <option value="">{t(locale, fields.categoryPlaceholder)}</option>
            {categories.map((name) => (
              <option key={name} value={name}>{t(locale, servicesCopy.groups[name].name)}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {([
          ["products", fields.products],
          ["quantities", fields.quantities],
        ] as const).map(([key, label]) => (
          <label className="grid min-w-0 gap-1.5 text-sm font-medium" key={key} htmlFor={`enquiry-${key}`}>
            {t(locale, label)}
            <input
              className={field}
              id={`enquiry-${key}`}
              name={key}
              type="text"
              value={values[key]}
              onChange={(event) => update(key, event.target.value)}
            />
          </label>
        ))}
      </div>
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
      <button className={`${pillSolid} w-full sm:w-fit`} type="submit" disabled={status === "sending"}>{t(locale, status === "sending" ? fields.sending : fields.send)}</button>
      {status === "sent" ? <p className="text-sm" role="status">{t(locale, fields.sent)}</p> : null}
      {status === "error" && !Object.keys(errors).length ? <p className="text-sm text-red-700" role="alert">{t(locale, fields.error)}</p> : null}
    </form>
  );
}
