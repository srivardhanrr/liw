const API_URL = import.meta.env.VITE_API_URL;

async function fetchAPI(endpoint: string) {
	const response = await fetch(`${API_URL}${endpoint}`);
	if (!response.ok) {
		// throw new Error(`HTTP error! status: ${response.status}`);
		return null;
	}
	return await response.json();
}

export const api = {
	getBlogPosts: () => fetchAPI('/blogs/'),
	getBlogPost: (slug: string) => fetchAPI(`/blogs/${slug}/`),
	getNewsPosts: () => fetchAPI('/news/'),
	getNewsPost: (slug: string) => fetchAPI(`/news/${slug}/`),
	getCaseStudies: () => fetchAPI('/case-studies/'),
	getCaseStudy: (slug: string) => fetchAPI(`/case-studies/${slug}/`),
	getTestimonials: () => fetchAPI('/testimonials/'),
};
