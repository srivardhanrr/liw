<script>
    const journeySteps = [
      {
        title: "The Spark",
        description: "Leadership Innovation World was born from a vision to bridge the gap between academia and industry.",
        icon: "✨"
      },
      {
        title: "Setting the Foundation",
        description: "Building partnerships with industry leaders and academic institutions to create a robust network.",
        icon: "🏗️"
      },
      {
        title: "Charting the Course",
        description: "Developing cutting-edge programs that blend theoretical knowledge with practical industry insights.",
        icon: "🧭"
      },
      {
        title: "The Road Ahead",
        description: "Shaping the future of education and leadership, redefining preparedness for tomorrow's challenges.",
        icon: "🚀"
      }
    ];
  </script>
  
  <section class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-playfair text-center mb-16 text-brand-burgundy">Our Journey Unfolds</h2>
      
      <div class="journey-container">
        {#each journeySteps as step, index}
          <div class="journey-card">
            <div class="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div class="text-4xl mb-4">{step.icon}</div>
                <h3 class="text-2xl font-bricolage text-brand-burgundy mb-4">{step.title}</h3>
                <p class="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
              <div class="mt-6 flex justify-between items-center">
                <span class="text-brand-gold font-bold text-lg">{index + 1}</span>
                <div class="w-16 h-1 bg-brand-gold"></div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="text-center mt-16">
        <p class="text-gray-600 mb-6 italic md:hidden">Scroll horizontally to explore our journey</p>
        <a href="#" class="inline-block bg-brand-burgundy text-white py-3 px-8 rounded-full shadow-md hover:bg-brand-gold transition duration-300 font-bricolage text-sm uppercase tracking-wider">
          Join Our Vision
        </a>
      </div>
    </div>
  </section>
  
  <style>
    .journey-container {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  
    .journey-container::-webkit-scrollbar {
      display: none;
    }
  
    .journey-card {
      flex: 0 0 80%;
      scroll-snap-align: start;
      margin-right: 1rem;
    }
  
    @media (min-width: 1024px) {
      .journey-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        overflow-x: visible;
      }
  
      .journey-card {
        flex: none;
        margin-right: 0;
      }
    }
  </style>
  