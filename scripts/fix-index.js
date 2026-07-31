import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '../src/data');

const folders = fs.readdirSync(dataDir).filter(f => {
  const stat = fs.statSync(path.join(dataDir, f));
  return stat.isDirectory() && !f.startsWith('.');
});

console.log(`📁 Menemukan ${folders.length} folder...\n`);

folders.forEach(folder => {
  const folderPath = path.join(dataDir, folder);
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.js') && f !== 'index.js');
  
  if (files.length === 0) {
    console.log(`⚠️  ${folder}: tidak ada file chapter`);
    return;
  }
  
  console.log(`📝 Memproses ${folder} (${files.length} chapters)...`);
  
  const imports = files.map(file => {
    const name = file.replace('.js', '');
    const varName = name.replace(/-/g, '_');
    return `import { chapter as ${varName} } from './${file}';`;
  }).join('\n');
  
  const chapters = files.map(file => {
    const name = file.replace('.js', '');
    const varName = name.replace(/-/g, '_');
    return `    ${varName}`;
  }).join(',\n');
  
  let oldContent = '';
  try {
    oldContent = fs.readFileSync(path.join(folderPath, 'index.js'), 'utf8');
  } catch(e) {}
  
  const slugMatch = oldContent.match(/slug:\s*["']([^"']+)["']/);
  const titleMatch = oldContent.match(/title:\s*["']([^"']+)["']/);
  const descMatch = oldContent.match(/description:\s*["']([^"']+)["']/);
  const iconMatch = oldContent.match(/icon:\s*["']([^"']+)["']/);
  const colorMatch = oldContent.match(/color:\s*["']([^"']+)["']/);
  const diffMatch = oldContent.match(/difficulty:\s*["']([^"']+)["']/);
  const orderMatch = oldContent.match(/order:\s*(\d+)/);
  
  const newContent = `${imports}

export const category = {
  slug: "${slugMatch ? slugMatch[1] : folder}",
  title: "${titleMatch ? titleMatch[1] : folder.replace(/-/g, ' ')}",
  description: "${descMatch ? descMatch[1] : 'Deskripsi untuk ' + folder}",
  icon: "${iconMatch ? iconMatch[1] : 'FiBookOpen'}",
  color: "${colorMatch ? colorMatch[1] : '#FFFFFF'}",
  totalChapters: ${files.length},
  difficulty: "${diffMatch ? diffMatch[1] : 'Beginner'}",
  order: ${orderMatch ? orderMatch[1] : 0},
  isPublished: true,
  chapters: [
${chapters}
  ]
};
`;
  
  fs.writeFileSync(path.join(folderPath, 'index.js'), newContent);
  console.log(`✅ ${folder}/index.js selesai\n`);
});

console.log('🎉 Selesai! Semua index.js sudah diperbaiki.');