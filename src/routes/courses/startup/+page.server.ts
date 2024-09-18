import { BACKEND_API_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const registrationData = {
            name: formData.get('name'),
            email: formData.get('email'),
            selected_course: formData.get('course'),
            message: formData.get('message')
        };

        const post_url = BACKEND_API_URL + '/api/course-registration/'

        try {
            const response = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (!response.ok) {
                return fail(400, { message: 'Failed to submit registration' });
            }

            return { success: true };
        } catch (error) {
            console.error('Error submitting registration:', error);
            return fail(500, { message: 'Server error' });
        }
    }
};
