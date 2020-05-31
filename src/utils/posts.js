import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostsByLanguage(lang) {
    const POSTS_DIR = `public/content/blog/${lang}`;
    const files = fs.readdirSync(POSTS_DIR);

    return files
        .map((filename) => path.join(POSTS_DIR, filename))
        .map(matter.read)
        .map(({
            content,
            data
        }) => ({
            // filter out unserializable data
            content,
            data,
        }));
}

export function getPost(lang, slug) {
    const POSTS_DIR = `public/content/blog/${lang}`;
    const {
        content,
        data
    } = matter.read(
        path.join(POSTS_DIR, `${slug}.md`)
    );

    return {
        content,
        data
    };
}