<script>
  import { Presentation, Users, TrendingUp, BarChart2, Briefcase } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Symposium Overview - Leadership Innovation World</title>
</svelte:head>

<section class="container mx-auto px-4 py-16 bg-brand-gold bg-opacity-5">
  <h2 class="font-playfair text-3xl md:text-5xl font-bold mb-12 text-brand-burgundy text-center">
    Why Host a Symposium?
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg overflow-visible">
      <BarChart2 class="w-16 h-16 text-brand-burgundy mb-6" />
      <h3 class="font-bricolage text-2xl font-bold mb-4 text-brand-burgundy">
        Increased Industry Collaborations
      </h3>
      <p class="font-inter text-md md:text-lg mb-4">
        Institutions such as the IITs and IIMs have seen a 20-25% increase in collaborations with
        industries, thanks to symposiums and conferences.
      </p>
      <ul class="font-inter text-sm md:text-lg text-left">
        <li class="mb-2">✓ Create platforms for networking and innovation</li>
        <li class="mb-2">✓ Enable joint research projects</li>
        <li>✓ Facilitate industry-led courses</li>
      </ul>
    </div>

    <div class="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg overflow-visible">
      <Briefcase class="w-16 h-16 text-brand-burgundy mb-6" />
      <h3 class="font-bricolage text-2xl font-bold mb-4 text-brand-burgundy">
        Enhanced Job Prospects
      </h3>
      <p class="font-inter text-md md:text-lg mb-4">
        Students from institutions hosting frequent symposiums are 30% more likely to receive job
        offers from leading companies.
      </p>
      <ul class="font-inter text-sm md:text-lg text-left">
        <li class="mb-2">✓ Exposure to latest industry trends</li>
        <li class="mb-2">✓ Hands-on learning opportunities</li>
        <li>✓ Highly valued by employers</li>
      </ul>
    </div>
  </div>

  <div class="mt-16 text-center">
    <p class="font-bricolage text-xl mb-8">
      Align your academic frameworks with industry demands and give your students a competitive edge.
    </p>
    <a
      href="/symposium#symposium-form"
      class="inline-block bg-brand-burgundy text-white font-bricolage py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
    >
      Host a Symposium
    </a>
  </div>
</section>
