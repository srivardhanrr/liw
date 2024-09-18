import { BACKEND_API_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const symposiumData = {
            institution_name: formData.get('institutionName'),
            contact_person: formData.get('contactPerson'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            preferred_date: formData.get('preferredDate'),
            expected_attendees: formData.get('expectedAttendees'),
            additional_info: formData.get('additionalInfo')
        };

        const post_url = BACKEND_API_URL + '/api/symposium-request/'

        try {
            const response = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(symposiumData),
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
