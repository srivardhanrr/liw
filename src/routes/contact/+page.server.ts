import { BACKEND_API_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const post_url = BACKEND_API_URL + '/api/contact/'

        try {
            const response = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                return fail(400, { message: 'Failed to submit form' });
            }

            return { success: true };
        } catch (error) {
            console.error('Error submitting form:', error);
            return fail(500, { message: 'Server error' });
        }
    }
};
