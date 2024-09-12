<script lang="ts">
	import { fly } from 'svelte/transition';
    import { Lightbulb, Users, Building, Rocket, GraduationCap } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button";
    import { fade } from 'svelte/transition';
  
    let currentFOMOIndex = 0;
    const fomoQuestions = [
      "While your competitors are eliminating waste and boosting efficiency, what's holding you back?",
      "What if you could reduce your startup's waste by 30% next quarter—would you let that opportunity pass by?",
      "How much longer can you afford to run at less than full efficiency while others are optimizing their processes?",
      "If others are already reaping the benefits of Lean Six Sigma, why wait? What's the cost of waiting another day?"
    ];
  
    setInterval(() => {
      currentFOMOIndex = (currentFOMOIndex + 1) % fomoQuestions.length;
    }, 5000);
  </script>
  
  <section class="bg-gradient-to-br from-white to-brand-gold/5 py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-playfair text-4xl sm:text-5xl text-brand-burgundy text-center mb-16">
        Our Goals
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div class="space-y-8">
          <div class="flex items-start">
            <Lightbulb class="w-8 h-8 text-brand-burgundy mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-2">Empower Learners</h3>
              <p class="text-gray-700">Equip students, professionals, and leaders with the tools they need to succeed not just academically, but in all aspects of their careers.</p>
            </div>
          </div>
          <div class="flex items-start">
            <Users class="w-8 h-8 text-brand-burgundy mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-2">Create Leaders</h3>
              <p class="text-gray-700">We believe that true success goes beyond a high CGPA. Our goal is to help you become well-rounded individuals who excel both in academics and in life.</p>
            </div>
          </div>
          <div class="flex items-start">
            <Building class="w-8 h-8 text-brand-burgundy mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-2">Inspire Corporate Excellence</h3>
              <p class="text-gray-700">We don't just train employees; we cultivate leaders who can drive organizational success, innovate, and inspire their teams to achieve new heights.</p>
            </div>
          </div>
        </div>
        <div class="space-y-8">
          <div class="flex items-start">
            <Rocket class="w-8 h-8 text-brand-burgundy mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-2">Fuel Startup Growth</h3>
              <p class="text-gray-700">For startup owners, we provide the skills and insights needed to transform ideas into successful businesses, fostering leadership that drives growth and sustainability.</p>
            </div>
          </div>
          <div class="flex items-start">
            <GraduationCap class="w-8 h-8 text-brand-burgundy mr-4 flex-shrink-0" />
            <div>
              <h3 class="font-bricolage text-xl font-semibold text-brand-black mb-2">Elevate Educators</h3>
              <p class="text-gray-700">Teachers can also enroll to upskill themselves, staying ahead in the ever-evolving educational landscape and becoming more effective in nurturing the next generation of leaders.</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- <div class="bg-brand-burgundy text-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="font-bricolage text-2xl mb-4 text-center">Ready to Unlock Your Startup's Hidden Potential?</h3>
        <div class="h-16 flex items-center justify-center">
          {#key currentFOMOIndex}
            <p transition:fade class="text-center text-lg">{fomoQuestions[currentFOMOIndex]}</p>
          {/key}
        </div>
      </div> -->
  
      <div class="text-center">
        <h3 class="font-playfair text-3xl text-brand-burgundy mb-6">Transform Your Startup: Skills that Set You Apart</h3>
        <a href="/courses/startup">
        <Button variant="default" class="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white text-lg px-8 py-3">
          Start Your Journey
        </Button>
      </a>
      </div>
    </div>
  </section>