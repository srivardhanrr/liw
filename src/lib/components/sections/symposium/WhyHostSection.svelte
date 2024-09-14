<script>
  import { Presentation, Users, TrendingUp, BarChart2, Briefcase } from 'lucide-svelte'
</script>

<svelte:head>
  <title>Symposium Overview - Leadership Innovation World</title>
</svelte:head>



  <section class="container mx-auto px-4 py-16 bg-brand-gold bg-opacity-5">
    <h2 class="font-playfair text-3xl md:text-5xl font-bold mb-12 text-brand-burgundy text-center">Why Host a Symposium?</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg">
        <BarChart2 class="w-16 h-16 text-brand-burgundy mb-6" />
        <h3 class="font-bricolage text-2xl font-bold mb-4 text-brand-burgundy">Increased Industry Collaborations</h3>
        <p class="font-inter text-md md:text-lg mb-4">Institutions such as the IITs and IIMs have seen a 20-25% increase in collaborations with industries, thanks to symposiums and conferences.</p>
        <ul class="font-inter text-sm md:text-lg text-left">
          <li class="mb-2">✓ Create platforms for networking and innovation</li>
          <li class="mb-2">✓ Enable joint research projects</li>
          <li>✓ Facilitate industry-led courses</li>
        </ul>
      </div>
      
      <div class="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg">
        <Briefcase class="w-16 h-16 text-brand-burgundy mb-6" />
        <h3 class="font-bricolage text-2xl font-bold mb-4 text-brand-burgundy">Enhanced Job Prospects</h3>
        <p class="font-inter text-md md:text-lg mb-4">Students from institutions hosting frequent symposiums are 30% more likely to receive job offers from leading companies.</p>
        <ul class="font-inter text-sm md:text-lg text-left">
          <li class="mb-2">✓ Exposure to latest industry trends</li>
          <li class="mb-2">✓ Hands-on learning opportunities</li>
          <li>✓ Highly valued by employers</li>
        </ul>
      </div>
    </div>

    <div class="mt-16 text-center">
      <p class="font-bricolage text-xl mb-8">Align your academic frameworks with industry demands and give your students a competitive edge.</p>
      <a href="/symposium#symposium-form" class="inline-block bg-brand-burgundy text-white font-bricolage py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-lg">Host a Symposium</a>
    </div>
  </section>

  <section class="container mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6 text-brand-burgundy">Transform Your Campus</h2>
        <p class="font-inter text-lg mb-4">Our symposiums bring together the brightest minds in leadership and innovation, creating a unique learning environment that inspires growth and fosters excellence.</p>
        <a href="/contact" class="inline-block bg-brand-burgundy text-white font-bricolage py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">Request Information</a>
      </div>
      <div class="md:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
          <!-- Background -->
          <rect width="400" height="300" fill="#FFF" />
          
          <!-- Stylized campus building -->
          <rect x="50" y="100" width="300" height="150" fill="#76142D" />
          <rect x="80" y="130" width="60" height="90" fill="#FCD57E" />
          <rect x="170" y="130" width="60" height="90" fill="#FCD57E" />
          <rect x="260" y="130" width="60" height="90" fill="#FCD57E" />
          
          <!-- Roof -->
          <polygon points="50,100 200,30 350,100" fill="#E8B654" />
          
          <!-- Growth arrow -->
          <path d="M200,250 L200,70 L230,100 L200,70 L170,100" fill="none" stroke="#111716" stroke-width="8" />
          
          <!-- Stars representing innovation -->
          <polygon points="100,40 105,50 115,50 107,60 110,70 100,65 90,70 93,60 85,50 95,50" fill="#FCD57E" />
          <polygon points="300,40 305,50 315,50 307,60 310,70 300,65 290,70 293,60 285,50 295,50" fill="#FCD57E" />
          <polygon points="200,10 205,20 215,20 207,30 210,40 200,35 190,40 193,30 185,20 195,20" fill="#FCD57E" />
        </svg>
        <!-- <img src="https://placehold.co/600x400" alt="Leadership symposium in action" class="w-full h-auto rounded-lg shadow-lg" /> -->
      </div>
    </div>
  </section>
