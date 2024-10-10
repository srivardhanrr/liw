<script lang="ts">
    export let videoId: string;
    export let title: string;
  </script>
  
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-playfair font-bold text-brand-burgundy mb-8 text-center">{title}</h2>
      <div class="max-w-5xl mx-auto">
        <div class="relative" style="padding-top: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/{videoId}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  