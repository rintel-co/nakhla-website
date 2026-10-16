"use client";

import { useState } from "react";
import { pillSolid } from "@/lib/ui";

const field = "w-full rounded-md border border-line bg-white px-3 py-3 text-sm";

export function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid max-w-[560px] gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
      }}
    >
      <input className={field} name="name" required placeholder="Name" aria-label="Name" />
      <input className={field} name="phone" required placeholder="Contact number" aria-label="Contact number" />
      <input className={field} name="email" type="email" required placeholder="Email" aria-label="Email" />
      <textarea className={`${field} min-h-[120px] resize-y`} name="message" required placeholder="Message" aria-label="Message" defaultValue={initialMessage} />
      <button className={`${pillSolid} w-fit`} type="submit">Send</button>
      {sent && <p>Message noted. The branch replies from contact@nbarari.com.</p>}
    </form>
  );
}
