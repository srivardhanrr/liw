import type { RequestHandler } from './$types';
import { api } from '$lib/api';



// Define your static routes here
const staticRoutes = [
    '/',
    '/courses',
    '/courses/cxo',
    '/courses/executive',
    '/courses/head-teacher',
    '/courses/manager',
    '/courses/startup',
    '/courses/student',
    '/courses/teacher',
    '/contact',
    '/symposium',
    '/partners',
    '/our-experts',
    '/case-studies',
    '/our-story',
    '/blogs'
];

// If you have dynamic routes (like blog posts, products, etc.), simulate fetching them
const fetchDynamicRoutes = async () => {
    
    const posts = await api.getBlogPosts();

    return posts.map((post: { slug: any; }) => `/blogs/${post.slug}`);
};

const baseUrl = "https://leadershipinnovationworld.com"// Replace with your domain

// Function to generate the XML structure for the sitemap
const generateSitemap = (staticRoutes: string[], dynamicRoutes: string[]) => {
    const allRoutes = [...staticRoutes, ...dynamicRoutes];
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
        .map(
            (route) => `
    <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`
        )
        .join('')}
</urlset>`;
};

// The GET handler for returning the sitemap
export const GET: RequestHandler = async () => {
    const dynamicRoutes = await fetchDynamicRoutes(); // Fetch dynamic routes if needed
    const sitemap = generateSitemap(staticRoutes, dynamicRoutes);
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
};
