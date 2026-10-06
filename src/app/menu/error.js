"use client";

export default function Error({ error, reset }) {
  return (
    <section>
      <h2>Something went wrong.</h2>

      <p>
        We could not load the menu.
      </p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </section>
  );
}