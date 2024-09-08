import { error } from '@sveltejs/kit';

const founders_details = {
    'jeevitha-p-raju': {
        name: 'Jeevitha P. Raju',
        title: 'Founder of Leadership Innovation World',
        image: '/images/jeevitha.png',
        background: 'Jeevitha P. Raju is an experienced educator and communication coach. With over a decade of experience, she has empowered over half a million individuals across India, focusing on honing soft skills and preparing students for success in the global environment.',
        achievements: [
            'Educated in communication at prestigious institutions like Leaders Excellence and Harvard Square.',
            'Promoted higher education opportunities in Malaysia.',
            'Contributed to educational policies in Bengaluru South.',
            'Worked in corporate training and educational leadership.'
        ],
    },
    'rohit-rammurthy': {
        name: 'Rohit Rammurthy',
        title: 'Head of Strategy and Business Development at Arvind Industries',
        image: '/images/rohit.png',
        background: 'Rohit Rammurthy has a solid academic foundation and extensive business experience. He has taught at prestigious institutions and has developed expertise in marketing, strategic management, and entrepreneurship.',
        achievements: [
            'Master\'s from Indiana University of Pennsylvania.',
            'Scholarship to a Harvard educator course in 2017.',
            'Delivered impactful sessions at Harvard University and IIM Bangalore.',
            'Recognized as Young Professor of the Year 2021 and Young Education Leader of the Year 2023.'
        ],
    }
};

export function load({ params }: { params: { slug: string } }) {
    const founder = founders_details[params.slug as keyof typeof founders_details];
    
    if (founder) {
        return { founder };
    }
    
    throw error(404, 'Founder not found');
}
