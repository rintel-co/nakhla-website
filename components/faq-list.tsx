export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details className="border-b border-line py-4" key={item.q}>
          <summary className="cursor-pointer text-base font-semibold">{item.q}</summary>
          <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
