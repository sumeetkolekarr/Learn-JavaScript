const fs = require('fs').promises;
const path = require('path');

const mergePDFs = async (p1, p2) => {
  try {
    const { default: PDFMerger } = await import('pdf-merger-js');
    const merger = new PDFMerger();

    // Read files as buffers
    const buffer1 = await fs.readFile(p1);
    const buffer2 = await fs.readFile(p2);
    
    console.log('Merging:', p1, p2);
    
    await merger.add(buffer1);
    await merger.add(buffer2);

    // Ensure the public directory exists
    const outputDir = path.join(__dirname, 'public');
    try {
      await fs.access(outputDir);
    } catch {
      await fs.mkdir(outputDir, { recursive: true });
    }
    let d = new Date().getTime()
    await merger.save(path.join(outputDir, `${d}.pdf`));
    return d
  } catch (error) {
    console.error('Error in mergePDFs:', error);
    throw error;
  }
};

module.exports = { mergePDFs };