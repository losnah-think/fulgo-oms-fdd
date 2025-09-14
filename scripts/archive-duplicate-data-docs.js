const fs = require('fs');
const path = require('path');

const docsDataDir = path.resolve(__dirname, '../docs/data');
const archiveDir = path.resolve(__dirname, '../docs/_archive/duplicates');

if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });

const files = fs.readdirSync(docsDataDir).filter(f => f.endsWith('.md'));
const nonData = files.filter(f => !f.startsWith('data-'));

nonData.forEach(f => {
  const src = path.join(docsDataDir, f);
  const dest = path.join(archiveDir, f);
  try {
    const content = fs.readFileSync(src, 'utf8');
    fs.writeFileSync(dest, `---\narchivedFrom: docs/data/${f}\n---\n\n${content}`);
    fs.unlinkSync(src);
    console.log('Archived and removed', f);
  } catch (e) {
    console.error('Failed', f, e.message);
  }
});

console.log('Done.');
