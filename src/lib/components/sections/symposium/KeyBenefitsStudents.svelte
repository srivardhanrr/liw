<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { Lightbulb, Compass, Target, Award } from 'lucide-svelte';
  
    let isVisible = false;
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
        }
      }, { threshold: 0.1 });
  
      const section = document.querySelector('.key-benefits-section');
      if (section) {
        observer.observe(section);
      }
  
      return () => observer.disconnect();
    });
  
    const benefits = [
      { icon: Lightbulb, title: 'Industry Insights', description: 'Gain knowledge of current industry trends and demands.' },
      { icon: Compass, title: 'Career Guidance', description: 'Receive expert advice on navigating your career path.' },
      { icon: Target, title: 'Skill Development', description: 'Develop essential skills through targeted workshops.' },
      { icon: Award, title: 'Motivation and Inspiration', description: 'Be inspired by stories of success and innovation.' },
    ];
  </script>
  
  <section class="key-benefits-section relative py-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl text-brand-burgundy md:text-5xl font-playfair text-brand-primary mb-16 text-center">
        Key Benefits for Students
      </h2>
  
      {#if isVisible}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" in:fade="{{ duration: 1000 }}">
          {#each benefits as benefit}
            <div class="flex flex-col items-center text-center p-6 bg-gradient-to-br from-brand-secondary to-brand-tertiary bg-opacity-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <svelte:component this={benefit.icon} size={48} class="text-brand-burgundy mb-4" />
              <h3 class="text-xl font-bricolage text-brand-dark-gold mb-2">{benefit.title}</h3>
              <p class="font-inter text-brand-black">{benefit.description}</p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-brand-secondary opacity-10 rounded-bl-full"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-brand-tertiary opacity-10 rounded-tr-full"></div>
  </section>