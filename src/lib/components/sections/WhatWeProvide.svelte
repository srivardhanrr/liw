<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
  
    let visible = false;
  
    onMount(() => {
      visible = true;
    });
  
    const courses = [
      { title: 'Leadership Mastery', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
      { title: 'Innovation Strategies', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { title: 'Global Business Insights', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      { title: 'Future-Ready Skills', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    ];
  </script>
  
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl sm:text-5xl font-playfair text-brand-burgundy mb-12 text-center" in:fade={{ duration: 1000, delay: 200 }}>
        What We Provide
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each courses as course, index}
          {#if visible}
            <div 
              class="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
              in:fly="{{ y: 50, duration: 500, delay: index * 200, easing: cubicOut }}"
            >
              <svg class="w-12 h-12 text-brand-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={course.icon}></path>
              </svg>
              <h3 class="text-xl font-bricolage text-brand-charcoal mb-2">{course.title}</h3>
              <p class="text-brand-charcoal opacity-75">Empowering future leaders with cutting-edge insights and practical skills.</p>
            </div>
          {/if}
        {/each}
      </div>
      
      <div class="text-center mt-12">
        <a 
          href="/courses" 
          class="inline-block bg-brand-burgundy text-white font-bricolage px-8 py-3 rounded-full transition-all duration-300 hover:bg-brand-amber hover:text-brand-charcoal"
          in:fade="{{ duration: 1000, delay: 1000 }}"
        >
          Explore Courses
        </a>
      </div>
    </div>
  </section>
  
  <style>
    section {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FCD57E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  </style>