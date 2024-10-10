import { fail } from '@sveltejs/kit';
import { BACKEND_API_URL } from '$env/static/private';
export const prerender = false;

import type { PageServerLoad } from './$types';
import { api } from '$lib/api';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const courseFinderData = {
            career_stage: formData.get('careerStage'),
            interests: formData.getAll('interests'),
            time_commitment: formData.get('timeCommitment')
        };

        const post_url = BACKEND_API_URL + '/api/course-finder/'

        try {
            const response = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseFinderData),
            });

            if (!response.ok) {
                return fail(400, { message: 'Failed to submit preferences' });
            }

            return { success: true };
        } catch (error) {
            console.error('Error submitting preferences:', error);
            return fail(500, { message: 'Server error' });
        }
    }
};



export const load: PageServerLoad = async () => {
    const [caseStudies, blogPosts, testimonials] = await Promise.all([
        api.getCaseStudies(),
        api.getBlogPosts(),
        api.getTestimonials()
    ]);
    return {caseStudies, blogPosts, testimonials};
};

