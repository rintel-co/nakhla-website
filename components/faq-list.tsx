export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div>
      {items.map((item) => (
        <details className="group border-b border-line py-5 last:border-b-0" key={item.q}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf text-lg leading-none text-green-dark transition-colors group-open:bg-green-dark group-open:text-white" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 max-w-[68ch] pe-12 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
