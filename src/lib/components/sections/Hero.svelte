<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<section class="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
  <!-- Image Side (moved to top for mobile) -->
  

  <!-- Content Side -->
  <div class="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 z-20">
    <div class="max-w-xl">
      <h1 class="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-burgundy mb-6 leading-tight">
        SHAPING TOMORROW'S LEADERS TODAY
      </h1>
      <p class="font-sans text-base sm:text-lg md:text-xl text-brand-black mb-8">
        We merge academic wisdom with industry foresight, empowering students to lead in a fast-paced world.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <Button variant="default" class="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white w-full sm:w-auto">
          Explore Programs
        </Button>
        <Button variant="outline" class="border-brand-gold text-brand-burgundy hover:bg-brand-gold/10 w-full sm:w-auto">
          <a href="/our-story">Learn More
          </a>
        </Button>
      </div>
    </div>
  </div>

  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-[40vh] lg:h-full">
    <div class="relative h-full w-full">
      <div class="absolute inset-0  z-10"></div>
      <img
        src="/images/liw-hero.svg"
        alt="Students collaborating with industry professionals"
        class="object-cover h-full w-full"
      />
    </div>
  </div>

  <!-- Decorative Element -->
  <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-gold/20 to-transparent z-30"></div>
</section>
