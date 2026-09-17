import type { PropDoc } from "@/content/types";

export function PropsTable({ component, items }: { component: string; items: PropDoc[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <div className="border-b border-line bg-surface-muted px-4 py-2 font-mono text-xs font-medium text-ink-muted">{component}</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-start text-xs uppercase tracking-wide text-ink-subtle">
              <th className="px-4 py-2.5 text-start font-semibold">Propriété</th>
              <th className="px-4 py-2.5 text-start font-semibold">Type</th>
              <th className="px-4 py-2.5 text-start font-semibold">Défaut</th>
              <th className="px-4 py-2.5 text-start font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.name} className="border-t border-line align-top">
                <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem] text-ink">
                  {p.name}
                  {p.required && (
                    <span className="ms-1 text-error" title="Obligatoire">
                      *
                    </span>
                  )}
                </td>
                <td className="px-4 py-2.5 font-mono text-[0.8125rem] text-ink-muted">{p.type}</td>
                <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[0.8125rem] text-ink-subtle">{p.default ?? "—"}</td>
                <td className="px-4 py-2.5 text-ink-muted">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
