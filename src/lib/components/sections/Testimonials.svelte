<script lang="ts">
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel";
    import { Card, CardContent } from "$lib/components/ui/card";
    import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
  
    export let testimonials: any[];
    const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });
  </script>
  
  {#if testimonials.length > 0}
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-playfair font-bold text-brand-burgundy mb-8 text-center">Leadership Insights from Our Inspiring Speakers</h2>
      
      <Carousel.Root opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin]}
      on:mousenter={plugin.stop}
      on:mouseleave={plugin.reset}
      class="w-full max-w-5xl mx-auto overflow-hidden">
        <Carousel.Content>
          {#each testimonials as testimonial}
            <Carousel.Item class="md:basis-1/3 lg:basis-1/3">
                <div class="p-1">
                    <Card class="bg-red-50 h-[400px] flex flex-col">
                      <CardContent class="p-6 flex flex-col h-full">
                        <div class="flex flex-col items-center mb-4">
                          <Avatar class="w-20 h-20 mb-2">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                          </Avatar>
                          <h3 class="font-bricolage font-semibold text-lg text-brand-burgundy text-center">{testimonial.name}</h3>
                          <p class="text-sm mt-2 text-gray-600 text-center">{testimonial.position}</p>
                        </div>
                        <div class="flex-grow overflow-y-auto">
                          <p class="text-sm text-brand-black">{testimonial.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
        <Carousel.Previous class="ml-12"/>
        <Carousel.Next class="mr-12" />
      </Carousel.Root>
    </div>
  </section>
  {/if}