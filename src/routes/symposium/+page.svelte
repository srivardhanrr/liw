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
    "question": "Who can attend the symposium?",
    "answer": "The symposium welcomes students, educators, academic institutions, and professionals keen on exploring key trends like IoT, drone technology, and cybersecurity. Industry experts will participate as speakers and mentors, offering valuable insights."
  },
  {
    "question": "What are the key themes of the symposium?",
    "answer": "This year, the focus is on breakthrough technologies including IoT, drone innovation, and cybersecurity. The event will feature panel discussions, keynote speeches, and workshops, addressing the future of these fields and their global impact."
  },
  {
    "question": "What value does the symposium offer to industry speakers?",
    "answer": "Industry speakers gain the opportunity to share their expertise with future leaders, enhance their brand visibility, and grow their professional network. Participation also facilitates dialogues that shape the future of their industries."
  },
  {
    "question": "What types of sessions are available during the symposium?",
    "answer": "Sessions include dynamic panel discussions, visionary keynotes, hands-on workshops, and networking events. Each is tailored to provide attendees with actionable knowledge and career-enhancing skills."
  },
  {
    "question": "How can I become a speaker or panelist at the symposium?",
    "answer": "If you're an industry expert interested in speaking, visit our speaker application page or contact us at info@leadershipinnovationworld.com to explore opportunities."
  },
  {
    "question": "What networking opportunities are available during the symposium?",
    "answer": "The symposium provides exclusive networking sessions for students and professionals to connect with industry leaders, offering mentorship, career guidance, and collaboration prospects."
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
          <a href="/courses">
          <Button variant="default" class="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white">
            Enroll Now
          </Button>
        </a>
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