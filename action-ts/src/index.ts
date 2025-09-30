import fetch from 'node-fetch';

async function main() {
  const CORE_URL = process.env.CORE_URL || '';
  if (!CORE_URL) {
    console.error('Missing CORE_URL env var');
    process.exit(1);
  }
  const payload = { filePath: 'Example.java', content: 'public class Example {}' };
  const res = await fetch(`${CORE_URL}/api/review/readability`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    console.error(`Core service error: ${res.status}`);
    process.exit(1);
  }
  const data = await res.json();
  console.log('Review Suggestions:', data);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
