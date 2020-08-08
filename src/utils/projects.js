import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getProjectsByLanguage(lang) {
    const PROJECTS_DIR = `public/content/projects/${lang}`;
    const files = fs.readdirSync(PROJECTS_DIR, {
        withFileTypes: true
    });

    return files.filter(({
        name
    }) => name.endsWith('.md')).map(({
        name: filename
    }) => {
        const {
            content,
            data
        } = matter.read(
            path.join(PROJECTS_DIR, filename)
        );
        return {
            content,
            data
        }
    })
};