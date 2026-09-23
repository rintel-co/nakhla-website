"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
      }}
    >
      <input name="name" required placeholder="Name" aria-label="Name" />
      <input name="phone" required placeholder="Contact number" aria-label="Contact number" />
      <input name="email" type="email" required placeholder="Email" aria-label="Email" />
      <textarea name="message" required placeholder="Message" aria-label="Message" />
      <button className="pill solid" type="submit" style={{ width: "fit-content" }}>Send</button>
      {sent && <p>Message noted. The branch replies from contact@nbarari.com.</p>}
    </form>
  );
}
