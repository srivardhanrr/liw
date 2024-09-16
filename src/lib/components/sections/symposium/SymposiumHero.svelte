<!-- src/lib/components/SymposiumHero.svelte -->
<script>
    import { ChevronRight } from 'lucide-svelte';
  
    // Replace this with the actual path to your video file
    const videoUrl = '/symposium.mp4';
  </script>
  
  <div class="bg-white min-h-screen flex items-center justify-center p-8">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <h1 class="font-playfair text-4xl text-brand-burgundy md:text-5xl lg:text-6xl font-bold leading-tight">
                    Symposium <span class="text-brand-black">Overview</span>
                </h1>
                <p class="font-inter text-sm md:text-lg text-brand-dark leading-relaxed">
                    The Leadership Innovation World Symposium is a unique event tailored for students early in their careers. This gathering unites industry leaders, experts, and thought influencers from various sectors.
                </p>
                <p class="font-inter text-sm md:text-lg text-brand-dark leading-relaxed">
                    The symposium features dynamic panel discussions and inspiring keynote sessions that provide students with invaluable insights into skill mastery, career development, and emerging job market trends.
                </p>
                <!-- <button class="btn-primary flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <ChevronRight class="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
                </button> -->
            </div>
            <div class="relative">
                <!-- <div class="bg-brand-burgundy rounded-full absolute top-0 right-0 -z-10 opacity-20"></div> -->
                <!-- <div class="aspect-square bg-brand-accent rounded-full absolute bottom-0 left-0 -z-10 opacity-20"></div> -->
                <!-- <div class="rounded-lg shadow-2xl border-brand-gold"> -->
                    <video
                        class="w-full h-[500px]"
                        autoplay
                        muted
                        loop
                        playsinline
                    >
                        <source src={videoUrl} type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                <!-- </div> -->
            </div>
        </div>
    </div>
  </div>
  