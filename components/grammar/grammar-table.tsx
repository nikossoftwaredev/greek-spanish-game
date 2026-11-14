import { TappableText } from "@/components/tappable-text";
import type { GrammarTable as GrammarTableData } from "@/types/content";

/** A conjugation / pattern table from a grammar lesson. Spanish cells are tappable. */
export const GrammarTable = ({ table }: { table: GrammarTableData }) => (
  <figure className="space-y-2">
    <figcaption className="text-sm font-extrabold text-muted-foreground">{table.titleEl}</figcaption>
    <div className="overflow-x-auto rounded-2xl border-2 border-border bg-card shadow-[0_3px_0_0_var(--border)]">
      <table className="w-full min-w-max border-collapse text-left">
        <thead>
          <tr className="bg-accent">
            {table.headers.map((header, index) => (
              <th key={index} scope="col" className="px-4 py-2.5 font-es text-lg font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-border">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={cellIndex === 0 ? "px-4 py-2 text-sm font-bold text-muted-foreground" : "px-4 py-2 font-es text-lg"}>
                  {cellIndex === 0 ? cell : <TappableText text={cell} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </figure>
);
