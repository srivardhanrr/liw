<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel";
    import * as Card from "$lib/components/ui/card";
  
    // Sample team data
    const teamMembers = [
      { name: "Jeevitha P Raju", role: "Founder", image: "/path/to/jeevitha-image.jpg" },
      // Add more team members here
    ];
  </script>
  
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8">Meet Our Team members</h2>
      
      <Carousel.Root opts={{ align: "start" }}>
        <Carousel.Content>
          {#each teamMembers as member, index}
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
              <Card.Root>
                <Card.Content class="flex flex-col items-center p-6">
                  <img src={member.image} alt={member.name} class="w-full h-64 object-cover rounded-lg mb-4" />
                  <h3 class="text-xl font-semibold">{member.name}</h3>
                  <p class="text-gray-600">{member.role}</p>
                </Card.Content>
              </Card.Root>
            </Carousel.Item>
          {/each}
        </Carousel.Content>
        <div class="flex justify-center mt-4">
          <Carousel.Previous class="mr-2" />
          <Carousel.Next />
        </div>
      </Carousel.Root>
    </div>
  </section>
  