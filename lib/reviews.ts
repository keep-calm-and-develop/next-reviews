import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export const getReview = async (slug) => {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const { content, data: { title, date, image } } = matter(text);
    const body = marked(content, {
        headerIds: false,
        mangle: false,
    });
    return { slug, title, date, image, body };
};

export const getReviews = async () => {
    const files = await readdir('./content/reviews');
    const slugs = files.filter((file) => file.endsWith('.md'))
        .map((file) => file.slice(0, -'.md'.length));
    const reviews = [];
    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }
    return reviews;
};