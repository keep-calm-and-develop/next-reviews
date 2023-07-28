import { marked } from 'marked';
import qs from 'qs';

const CMS_URL = 'http://localhost:1337';

export const getReview = async (slug) => {
    const { data: [item] } = await fetchReviews({
        filters: { slug: { $eq: slug }},
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: { image: { fields: ['url'] }},
        pagination: { pageSize: 1, withCount: false },
    });
    const { attributes } = item;
    return {
        ...toReview(item),
        body: marked(attributes.body, { headerIds: false, mangle: false }),
    };
};

export const getReviews = async (pageSize = 6) => {
    const { data } = await fetchReviews({
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: { image: { fields: ['url'] }},
        pagination: { pageSize },
        sort: ['publishedAt:desc'],
    });
    return data.map(toReview);
};

export const getSlugs = async () => {
    const { data } = await fetchReviews({
        fields: ['slug'],
        pagination: { pageSize: 100 },
        sort: ['publishedAt:desc'],
    });
    return data.map((item) => item.attributes.slug);
};

const toReview = (item) => {
    const { attributes } = item;
    return {
        slug: attributes.slug,
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
        image: `${CMS_URL}${attributes.image.data.attributes.url}`,
    };
};

const fetchReviews = async (parameters) => {
    const url = `${CMS_URL}/api/reviews?`
    + qs.stringify(parameters, { encodeValuesOnly: true });

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    return await response.json();
};