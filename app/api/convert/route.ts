
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';

const execAsync = promisify(exec);

// Ensure temp directory exists
const ensureTempDir = async () => {
  const tempDir = join(process.cwd(), 'temp');
  try {
    await mkdir(tempDir, { recursive: true });
  } catch (error) {
    console.error('Error creating temp directory:', error);
  }
  return tempDir;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Create a unique ID for this conversion
    const conversionId = uuidv4();
    const tempDir = await ensureTempDir();
    
    // Get file buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExtension = file.name.split('.').pop() || '';
    const inputPath = join(tempDir, `${conversionId}.${fileExtension}`);
    const outputPath = join(tempDir, `${conversionId}.md`);
    
    // Write the file to disk
    await writeFile(inputPath, buffer);
    
    // Use @microsoft/markitdown to convert
    try {
      // Install markitdown if not already installed
      await execAsync('npm list @microsoft/markitdown || npm install @microsoft/markitdown');
      
      // Run the conversion
      await execAsync(`npx markitdown "${inputPath}" -o "${outputPath}"`);
      
      // Read the converted markdown
      const markdown = await readFile(outputPath, 'utf-8');
      
      return NextResponse.json({ markdown });
    } catch (error: any) {
      console.error('Conversion error:', error);
      return NextResponse.json({ 
        error: 'Error converting file', 
        details: error.message 
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Server error', 
      details: error.message 
    }, { status: 500 });
  }
}
