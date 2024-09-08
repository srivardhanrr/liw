<section class="py-24 bg-gradient-to-br from-white to-brand-gold/10">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-playfair text-center mb-16 text-brand-burgundy">Our Visionary Founders</h2>
      <div class="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {#each founders as founder, index}
          <div class="group relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div class="aspect-[3/4] overflow-hidden">
              <img src={founder.image} alt={founder.name} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-3xl font-playfair text-white mb-2">{founder.name}</h3>
              <p class="text-lg font-bricolage text-brand-gold mb-4">{founder.title}</p>
              <p class="text-white font-inter mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{founder.shortBio}</p>
              <button class="bg-brand-gold text-brand-dark py-2 px-4 rounded-full font-bricolage text-sm uppercase tracking-wider hover:bg-white transition duration-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <a href="/our-story/{founder.slug}" class="bg-brand-gold text-brand-black py-2 px-4 rounded-full font-bricolage text-sm uppercase tracking-wider hover:bg-white transition duration-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  Read More
                </a>
                
              </button>
              
              
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <script>
    const founders = [
      {
        name: "Jeevitha P. Raju",
        title: "Entrepreneur, Educator, and Communication Coach",
        image: "/images/jeevitha.png",
        shortBio: "Founder of Leadership Innovation World, empowering over half a million individuals across India with communication skills and global preparedness.",
        slug: "jeevitha-p-raju"
      },
      {
        name: "Rohit Rammurthy",
        title: "Entrepreneur, Strategist, and Educator",
        image: "/images/rohit.png",
        shortBio: "Visionary leader with expertise in Marketing, Strategic Management, and Leadership, impacting over 2 million participants through global webinars and seminars.",
        slug: "rohit-rammurthy"
      }
    ];
  </script>
  