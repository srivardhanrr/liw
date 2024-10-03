<script>
    import { fade, fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { enhance } from '$app/forms';
  
    export let form;
  
    let name = '';
    let email = '';
    let careerStage = '';
    let interests = [];
    let timeCommitment = '';
  
    const careerStages = ['Early Career', 'Mid-Level', 'Senior Executive', 'Career Transition'];
    const interestAreas = ['Leadership', 'Innovation', 'Global Business', 'Technology', 'Sustainability'];
    const timeCommitments = ['1-3 months', '3-6 months', '6-12 months', '1+ year'];
  
    $: formSubmitted = form?.success || false;
  </script>
  
  <section class="py-24 bg-gradient-to-br from-white to-brand-gold/10 relative overflow-hidden">
    <!-- ... (SVG background remains unchanged) ... -->
  
    <div class="container mx-auto px-4 relative z-10">
      <h2
        class="text-4xl sm:text-5xl font-playfair text-brand-burgundy mb-12 text-center"
        in:fade={{ duration: 1000, delay: 200 }}
      >
        Find the Right Course
      </h2>
  
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
          <svg
            class="w-full h-auto"
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="200" r="150" fill="#FCD57E" opacity="0.2" />
            <path d="M100 300 Q 250 100 400 300" stroke="#76142D" stroke-width="4" fill="none" />
            <rect x="175" y="150" width="150" height="100" rx="10" fill="#E8B654" opacity="0.6" />
            <circle cx="250" cy="200" r="30" fill="#76142D" />
          </svg>
        </div>
  
        <div class="w-full lg:w-1/2">
          {#if !formSubmitted}
            <form
              method="POST"
              use:enhance
              class="bg-white shadow-xl rounded-lg p-6 sm:p-8"
              in:fly={{ y: 50, duration: 500, easing: cubicOut }}
            >
              <!-- Name Field -->
              <div class="mb-6">
                <label for="name" class="block text-brand-black font-bricolage mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  bind:value={name}
                  class="w-full p-3 border border-brand-gold/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="Your Full Name"
                  required
                />
              </div>
  
              <!-- Email Field -->
              <div class="mb-6">
                <label for="email" class="block text-brand-black font-bricolage mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  bind:value={email}
                  class="w-full p-3 border border-brand-gold/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
  
              <!-- Career Stage Field -->
              <div class="mb-6">
                <label for="careerStage" class="block text-brand-black font-bricolage mb-2">
                  Career Stage
                </label>
                <select
                  id="careerStage"
                  name="careerStage"
                  bind:value={careerStage}
                  class="w-full p-3 border border-brand-gold/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                >
                  <option value="">Select your career stage</option>
                  {#each careerStages as stage}
                    <option value={stage}>{stage}</option>
                  {/each}
                </select>
              </div>
  
              <!-- Areas of Interest Field -->
              <div class="mb-6">
                <label class="block text-brand-black font-bricolage mb-2">
                  Areas of Interest
                </label>
                <div class="flex flex-wrap -mx-2">
                  {#each interestAreas as area}
                    <label class="mx-2 mb-2">
                      <input
                        type="checkbox"
                        name="interests"
                        bind:group={interests}
                        value={area}
                        class="hidden peer"
                      />
                      <span
                        class="inline-block text-sm px-4 py-2 rounded-full border border-brand-gold/50 text-brand-black peer-checked:bg-brand-gold peer-checked:text-brand-black transition-colors duration-200 cursor-pointer"
                      >
                        {area}
                      </span>
                    </label>
                  {/each}
                </div>
              </div>
  
              <!-- Time Commitment Field -->
              <div class="mb-6">
                <label for="timeCommitment" class="block text-brand-black font-bricolage mb-2">
                  Time Commitment
                </label>
                <select
                  id="timeCommitment"
                  name="timeCommitment"
                  bind:value={timeCommitment}
                  class="w-full p-3 border border-brand-gold/50 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                >
                  <option value="">Select your time commitment</option>
                  {#each timeCommitments as time}
                    <option value={time}>{time}</option>
                  {/each}
                </select>
              </div>
  
              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-brand-burgundy text-white font-bricolage py-3 rounded-md transition-all duration-300 hover:bg-brand-dark-gold hover:text-brand-black"
              >
                Find My Course
              </button>
            </form>
          {:else}
            <div
              class="bg-white shadow-xl rounded-lg p-6 sm:p-8 text-center"
              in:fly={{ y: 50, duration: 500, easing: cubicOut }}
            >
              <h3 class="text-2xl font-bricolage text-brand-burgundy mb-4">
                Thank you for your interest!
              </h3>
              <p class="text-brand-black mb-6">
                We're analyzing your preferences to find the perfect course for you. Our team will be in touch shortly with personalized recommendations.
              </p>
              <button
                on:click={() => (formSubmitted = false)}
                class="bg-brand-burgundy text-white font-bricolage px-6 py-2 rounded-md transition-all duration-300 hover:bg-brand-dark-gold hover:text-brand-black"
              >
                Start Over
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  