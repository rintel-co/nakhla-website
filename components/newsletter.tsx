"use client";

import Link from "next/link";
import { useState } from "react";
import { pillSolid, wrap } from "@/lib/ui";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="border-t border-line bg-leaf/40 py-14">
      <div className={`${wrap} flex flex-wrap items-end justify-between gap-6`}>
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">Weekly offers, when we have them.</h2>
          <p className="mt-2 text-sm text-muted">Each branch publishes its own week. <Link className="font-semibold text-green" href="/offers">See this week’s lists</Link>, or leave an email and the branch can send the next one.</p>
        </div>
        <form
          className="flex w-full max-w-md gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setDone(true);
            event.currentTarget.reset();
          }}
        >
          <input className="h-11 min-w-0 flex-1 rounded-md border border-line px-3 text-sm outline-none" type="email" required placeholder="Email address" aria-label="Email address" />
          <button className={pillSolid} type="submit">Notify me</button>
        </form>
        <p className={done ? "w-full text-sm font-medium" : "hidden"}>Saved for the next offer list.</p>
      </div>
    </section>
  );
}
