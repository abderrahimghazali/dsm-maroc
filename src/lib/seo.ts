/** Trim a long description to a search-snippet length (≤ 155 chars), cutting at a sentence end when possible. */
export function seoDescription(text: string, max = 155) {
  const clean = text.replace(/`/g, "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const head = clean.slice(0, max);
  const sentenceEnd = Math.max(head.lastIndexOf(". "), head.lastIndexOf(" ; "), head.lastIndexOf(" : "));
  if (sentenceEnd > 60) return head.slice(0, sentenceEnd + 1).trim();
  const clause = Math.max(head.lastIndexOf(", "), head.lastIndexOf(" "));
  return head.slice(0, clause).trim().replace(/[,;:]$/, "") + ".";
}
