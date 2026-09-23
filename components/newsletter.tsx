"use client";

import { useState } from "react";

export function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section>
      <div className="wrap">
        <div className="letter">
          <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80" alt="" />
          <div className="veil" />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setDone(true);
              event.currentTarget.reset();
            }}
          >
            <h2>Weekly offers, when we have them.</h2>
            <p>Promotions used to go out as a flipbook. Leave an email and the branch can send the next list.</p>
            <div className="join">
              <input type="email" required placeholder="Email address" aria-label="Email address" />
              <button className="pill solid" type="submit">Notify me</button>
            </div>
            <p className={done ? "done on" : "done"}>Saved for the next offer list.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
