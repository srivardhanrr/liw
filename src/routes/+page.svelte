<script lang="ts">
	import Faqs from '$lib/components/sections/Faqs.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import KeyBenefits from '$lib/components/sections/KeyBenefits.svelte';
	import OurApproach from '$lib/components/sections/OurApproach.svelte';
	import OurGoals from '$lib/components/sections/OurGoals.svelte';
	import WhoWeAre from '$lib/components/sections/WhoWeAre.svelte';
	import { Button } from '$lib/components/ui/button';

    const faqs = [
		{
			question: 'Who can benefit from your programs?',
			answer:
				'Our programs are tailored for a wide range of individuals, including students, startup owners, Teachers corporate employees at all levels, and educators.'
		},
		{
			question: 'What makes your courses different from others?',
			answer:
				'Our courses stand out due to their practical approach, industry-relevant curriculum, and expert instructors with real-world experience.'
		},
		{
			question: 'How do I enroll in a course?',
			answer:
				'Enrolling is easy! Simply visit our website, choose your desired course, and follow the registration process. You can also contact our support team for assistance.'
		},
		{
			question: 'Do you offer both online and offline training?',
			answer:
				'Yes, we offer both online and offline training options to cater to different learning preferences and schedules.'
		},
		{
			question: 'What is the MLE℠ title, and how do I earn it?',
			answer:
				'The MLE℠ (Master Leadership Expert) is our prestigious certification. You can earn it by completing our comprehensive leadership program and passing the final assessment.'
		},
		{
			question: 'How do your symposiums work?',
			answer:
				"Our symposiums are interactive events featuring expert speakers, workshops, and networking opportunities. They're designed to provide in-depth insights on specific leadership topics."
		}
	];
</script>

<Hero />
<WhoWeAre />
<KeyBenefits />

<OurApproach />
<div class="bg-brand-gold/20 py-8 text-center">
    <h3 class="font-playfair text-2xl text-brand-burgundy mb-2">
      Are you losing out on key opportunities?
    </h3>
    <p class="text-lg text-gray-700 mb-4">
      While others network and influence, are you fading into the background?
    </p>
    <Button variant="outline" class="border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white">
      Boost Your Social Intelligence Now
    </Button>
  </div>
<!-- <div class="hidden lg:block fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl max-w-sm">
    <h3 class="font-bricolage text-xl text-brand-burgundy mb-2">
      Why are others leading themselves to success while you wait for direction?
    </h3>
    <p class="text-gray-700 mb-4">
      If you don't develop self-leadership now, how much longer will you be stuck in the shadows?
    </p>
    <Button variant="outline" class="w-full border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white">
      Start Your Leadership Journey
    </Button>
  </div> -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 md:m-8">
    <div class="bg-brand-burgundy text-white p-6 rounded-lg">
      <h3 class="text-xl font-playfair mb-4">For Startups</h3>
      <p class="font-bricolage mb-4">How much longer can you afford to run at less than full efficiency while others are optimizing their processes?</p>
      <a href="#" class="text-brand-gold hover:text-white transition duration-300">Optimize Now →</a>
    </div>
    <div class="bg-brand-gold text-brand-dark p-6 rounded-lg">
      <h3 class="text-xl font-playfair mb-4">For Students</h3>
      <p class="font-bricolage mb-4">Is your career stuck while your peers advance by mastering corporate behavior? How long can you afford to be left behind in the corporate race?</p>
      <a href="#" class="text-brand-burgundy hover:text-white transition duration-300">Advance Your Career →</a>
    </div>
  </div>
<OurGoals />

<div class="mt-16 text-center">
    <h3 class="font-bricolage text-2xl text-brand-burgundy mb-4">
      Is your career stuck while your peers advance by mastering corporate behavior?
    </h3>
    <p class="text-lg text-gray-700">
      How long can you afford to be left behind in the corporate race?
    </p>
  </div>
  <Faqs faqs={faqs} />

  <div class="bg-gray-100 p-8 rounded-lg shadow-md my-16">
    <h3 class="text-2xl font-playfair text-brand-burgundy mb-4">Elevate Your Leadership Potential</h3>
    <p class="text-lg font-bricolage text-gray-700 mb-6">Are others mastering emotional intelligence while you're struggling to control your reactions? Don't fall behind—this is the skill that could make or break your leadership.</p>
    <a href="#" class="inline-block bg-brand-burgundy text-white py-2 px-6 rounded-full font-bricolage text-sm uppercase tracking-wider hover:bg-brand-gold transition duration-300">
      Master Emotional Intelligence
    </a>
  </div>
  
    