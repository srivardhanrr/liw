<script>
	import VideoPlayer from "$lib/components/sections/VideoPlayer.svelte";

    // You can replace this with the actual video URL
    const videoUrl = "https://www.youtube.com/embed/UvGwIFVUK7M?autoplay=1";
  </script>
  
  <svelte:head>
    <title>Our Experts | Leadership Innovation World</title>
  </svelte:head>
  
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl md:text-5xl font-playfair text-center mb-6 text-brand-burgundy">Our Experts</h1>
      
      <p class="text-xl font-bricolage text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Discover the visionaries shaping the future of leadership and innovation. Our experts bring unparalleled industry insight and academic excellence to empower the next generation of leaders.
      </p>
      
      <!-- <div class="relative aspect-video shadow-2xl rounded-lg overflow-hidden"> -->
        <VideoPlayer src="/soft-skills.mp4" />
      <!-- </div> -->
      
      <div class="mt-12 text-center">
        <a href="/contact" class="inline-block bg-brand-burgundy text-white py-3 px-8 rounded-full shadow-md hover:bg-brand-gold transition duration-300 font-bricolage text-sm uppercase tracking-wider">
          Connect with Our Experts
        </a>
      </div>
    </div>
  </section>
  
  <style>
    /* Add any additional styles here */
  </style>
  