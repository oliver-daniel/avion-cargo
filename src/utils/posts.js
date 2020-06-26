import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostsByLanguage(lang) {
    const POSTS_DIR = `public/content/blog/${lang}`;
    const files = fs.readdirSync(POSTS_DIR);

    return files.map((filename) => {
        const {
            content,
            data
        } = matter.read(
            path.join(POSTS_DIR, filename)
        );
        return {
            content,
            data: {
                ...data,
                publish_date: data.publish_date.toLocaleString(),
                slug: filename.slice(0, -3)
            }
        }
    })
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
        data: {
            ...data,
            publish_date: data.publish_date.toLocaleString(),
            slug
        }
    };
}