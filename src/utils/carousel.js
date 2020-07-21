import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getCarouselImages() {
    const IMAGES_DIR = "public/content/carousel";
    const files = fs.readdirSync(IMAGES_DIR, {
        withFileTypes: true
    });

    return files.filter(({
            name
        }) => name.endsWith('.md'))
        .map(({
            name: filename
        }) => {
            const fn = path.join(IMAGES_DIR, filename);
            return matter.read(fn).data;
        })
}

export default {
    getCarouselImages,
}