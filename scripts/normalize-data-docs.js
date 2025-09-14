const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'docs', 'data');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const p = path.join(dir, file);
  let s = fs.readFileSync(p, 'utf8');
  const lines = s.split(/\r?\n/);
  // Remove leading ```markdown and trailing ``` if present
  if (lines[0].trim().startsWith('```')) {
    // drop the first line
    lines.shift();
    // if last line is a fence, drop it
    if (lines[lines.length - 1].trim().startsWith('```')) {
      lines.pop();
    }
    s = lines.join('\n').trimStart() + '\n';
    fs.writeFileSync(p, s, 'utf8');
    console.log('Normalized', file);
  }
  // Fix frontmatter id: data/xyz -> id: xyz (plugin disallows slashes in id)
  s = fs.readFileSync(p, 'utf8');
  const fixed = s.replace(/(^id:\s*)data\/(\S+)/m, '$1$2');
  if (fixed !== s) {
    fs.writeFileSync(p, fixed, 'utf8');
    console.log('Fixed id in', file);
  }
});

console.log('Done');
