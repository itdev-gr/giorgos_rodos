/** Truncate FAQ HTML answers to a readable length while preserving links. */

export function wordCount(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

function splitSentences(text) {
  const saved = [];
  const safe = text
    .replace(/\b[\w.+-]+@[\w.-]+\.\w+\b/g, (match) => {
      const id = saved.length;
      saved.push(match);
      return `\x00M${id}\x00`;
    })
    .replace(/\b\d+\.\d+\b/g, (match) => {
      const id = saved.length;
      saved.push(match);
      return `\x00N${id}\x00`;
    });

  const parts = safe.match(/[^.!?]+[.!?]+(?:\s+|$)/g) || [safe];
  return parts.map((part) =>
    part.replace(/\x00[MN](\d+)\x00/g, (_, id) => saved[Number(id)] ?? ''),
  );
}

export function shortenFaqAnswer(html, maxWords = 68) {
  if (wordCount(html) <= maxWords) return html;

  const tokens = [];
  let working = html;

  working = working.replace(/<a\s[^>]*>[\s\S]*?<\/a>/gi, (match) => {
    const id = tokens.length;
    tokens.push(match);
    return `\x00L${id}\x00`;
  });

  working = working.replace(/<strong>[\s\S]*?<\/strong>/gi, (match) => {
    const id = tokens.length;
    tokens.push(match);
    return `\x00T${id}\x00`;
  });

  const sentences = splitSentences(working);

  let result = '';
  let count = 0;
  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;
    const words = wordCount(trimmed);
    if (count > 0 && count + words > maxWords) break;
    result += (result ? ' ' : '') + trimmed;
    count += words;
  }

  result = result.replace(/\x00[LT](\d+)\x00/g, (_, id) => tokens[Number(id)] ?? '');

  while (/<\/a>\s*$/i.test(result.trim())) {
    result = result.replace(/\s*<a\s[^>]*>[\s\S]*?<\/a>\s*$/i, '').trim();
  }

  return result.trim();
}
