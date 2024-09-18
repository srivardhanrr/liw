import { BACKEND_API_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const applicationData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            linkedin: formData.get('linkedin'),
            expertise: formData.get('expertise')
        };

        const post_url = BACKEND_API_URL + '/api/speaker-application/'

        try {
            const response = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });

            if (!response.ok) {
                return fail(400, { message: 'Failed to submit application' });
            }

            return { success: true };
        } catch (error) {
            console.error('Error submitting application:', error);
            return fail(500, { message: 'Server error' });
        }
    }
};
