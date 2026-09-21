import fs from 'fs';
import path from 'path';

export function getImages(folderName: string): string[] {
    try {
        const directoryPath = path.join(process.cwd(), 'public', folderName);

        // Check if directory exists
        if (!fs.existsSync(directoryPath)) {
            console.warn(`Directory not found: ${directoryPath}`);
            return [];
        }

        const files = fs.readdirSync(directoryPath);

        // Filter for image files (extensions can be added as needed)
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
        const images = files
            .filter((file) => {
                const ext = path.extname(file).toLowerCase();
                return imageExtensions.includes(ext);
            })
            .map((file) => `/${encodeURIComponent(folderName)}/${encodeURIComponent(file)}`); // Prepend folder name for public access

        return images;
    } catch (error) {
        console.error(`Error reading directory ${folderName}:`, error);
        return [];
    }
}
