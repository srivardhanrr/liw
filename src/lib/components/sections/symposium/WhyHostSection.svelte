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
          <!-- Main building structure -->
          <path d="M50,250 L100,80 L300,80 L350,250 Z" fill="#76142D" />
          
          <!-- Glass facade -->
          <path d="M110,100 L290,100 L330,240 L70,240 Z" fill="#FCD57E" fill-opacity="0.3" />
          
          <!-- Horizontal lines representing floors -->
          <line x1="60" y1="140" x2="340" y2="140" stroke="#E8B654" stroke-width="2" />
          <line x1="70" y1="190" x2="330" y2="190" stroke="#E8B654" stroke-width="2" />
          
          <!-- Minimalist entrance -->
          <rect x="185" y="200" width="30" height="50" fill="#E8B654" />
          
          <!-- Sleek roof accent -->
          <path d="M100,80 L200,50 L300,80" fill="none" stroke="#E8B654" stroke-width="4" />
          
          <!-- Abstract growth symbol -->
          <path d="M200,30 L200,10 M190,20 L200,10 L210,20" fill="none" stroke="#FCD57E" stroke-width="2" />
          
          <!-- Refined text -->
          <text x="200" y="280" font-family="Arial, sans-serif" font-size="14" font-weight="300" text-anchor="middle" fill="#76142D" letter-spacing="2">ACADEMY OF EXCELLENCE</text>
        </svg>
        <!-- <img src="https://placehold.co/600x400" alt="Leadership symposium in action" class="w-full h-auto rounded-lg shadow-lg" /> -->
      </div>
    </div>
  </section>
