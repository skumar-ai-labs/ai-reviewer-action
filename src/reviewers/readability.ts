// SPDX-License-Identifier: Apache-2.0
export function reviewReadability(path: string, content: string): string[] {
  const out: string[] = [];
  if (content.length > 2000) {
    out.push(`Large file: ${path} — consider splitting into smaller modules.`);
  }
  if (!/\n\n/.test(content)) {
    out.push(`Add paragraph breaks for readability in ${path}.`);
  }
  return out;
}
