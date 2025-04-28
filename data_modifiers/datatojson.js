import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const toJsonfile = async (companyName, dataObject) => {
    const storagePath = './storage';

    // Create storage folder if not exists
    if (!existsSync(storagePath)) {
        await mkdir(storagePath);
    }

    // Convert object to pretty JSON string
    const jsonString = JSON.stringify(dataObject, null, 2);

    // Build file path
    const filePath = `${storagePath}/${companyName}.json`;

    // Write to file
    try {
        await writeFile(filePath, jsonString, 'utf8');
        console.log(`Saved ${companyName}.json successfully!`);
    } catch (error) {
        console.error(`Error saving ${companyName}.json:`, error);
    }
};

export default toJsonfile;
