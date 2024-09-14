<script>
	import KeyBenefitsStudents from '$lib/components/sections/symposium/KeyBenefitsStudents.svelte';
	import SymposiumApplicationForm from '$lib/components/sections/symposium/SymposiumApplicationForm.svelte';
    import SymposiumHero from '$lib/components/sections/symposium/SymposiumHero.svelte';
	import WhyHostSection from '$lib/components/sections/symposium/WhyHostSection.svelte';
    import NewsletterSignup from '$lib/components/sections/symposium/NewsletterSignup.svelte';
	import Faqs from '$lib/components/sections/Faqs.svelte';
    import { Presentation, Users, TrendingUp } from 'lucide-svelte'
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
  
  <svelte:head>
    <title>Leadership Innovation World Symposium</title>
  </svelte:head>
  
  <main>
    <SymposiumHero />
    <WhyHostSection />
    <section class="container mx-auto px-4 py-16 bg-brand-gold bg-opacity-10">
      <h2 class="font-playfair text-3xl md:text-4xl text-center font-bold mb-8 text-brand-burgundy">Why Host a Symposium at Your Institution?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <Presentation class="w-16 h-16 text-brand-burgundy mb-4" />
          <h3 class="font-bricolage text-xl font-bold mb-2">Cutting-edge Insights</h3>
          <p class="font-inter">Access to the latest industry trends and academic research</p>
        </div>
        <div class="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <Users class="w-16 h-16 text-brand-burgundy mb-4" />
          <h3 class="font-bricolage text-xl font-bold mb-2">Networking Opportunities</h3>
          <p class="font-inter">Connect with industry leaders and innovators</p>
        </div>
        <div class="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <TrendingUp class="w-16 h-16 text-brand-burgundy mb-4" />
          <h3 class="font-bricolage text-xl font-bold mb-2">Institutional Growth</h3>
          <p class="font-inter">Enhance your institution's reputation and attract top talent</p>
        </div>
      </div>
    </section>
    <section class="bg-brand-gold/20 py-16">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="font-playfair text-3xl text-brand-burgundy mb-4">
            "Transform Your Startup: Skills that Set You Apart"
          </h2>
          <p class="text-lg text-gray-700 mb-8">
            If others are already reaping the benefits of our programs, why wait? What's the cost of waiting another day?
          </p>
          <Button variant="default" class="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white">
            Enroll Now
          </Button>
        </div>
      </section>
    <KeyBenefitsStudents />
    <div class="md:mx-16 md:my-16 m-8 border-l-4 border-brand-gold pl-6">
        <h3 class="mb-4 font-playfair text-2xl text-brand-burgundy">
            Unlock Your Startup's Hidden Potential
        </h3>
        <p class="mb-6 font-bricolage text-lg text-gray-700">
            What if you could reduce your startup's waste by 30% next quarter—would you let that opportunity
            pass by?
        </p>
        <a
            href="/contact"
            class="font-bricolage uppercase tracking-wider text-brand-gold transition duration-300 hover:text-brand-burgundy"
        >
            Learn More →
        </a>
    </div>
    <SymposiumApplicationForm />
    <Faqs faqs={faqs} />
    <NewsletterSignup />
    <!-- Add more sections here as we build them -->
  </main>