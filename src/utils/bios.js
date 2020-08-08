import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getExecBiosByLanguage(lang) {
    const EXEC_DIR = `public/content/exec/${lang}`;
    const files = fs.readdirSync(EXEC_DIR, {
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
            path.join(EXEC_DIR, filename)
        );
        return {
            content,
            data
        }
    })
};