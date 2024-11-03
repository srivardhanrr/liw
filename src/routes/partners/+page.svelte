<script>
	import Partnership from "$lib/components/sections/Partnership.svelte";

</script>
<Partnership />
<section class="bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
	<div class="container mx-auto px-4 relative">
	  <!-- Background Decorative Elements -->
	  <div class="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl"></div>
	  <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary opacity-5 rounded-full blur-3xl"></div>
  
	  <!-- Section Header -->
	  <div class="text-center max-w-3xl mx-auto mb-20 relative z-10">
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-playfair text-brand-burgundy mb-6">
		  The Distinctive Edge of Leaders Excellence at Harvard Square
		</h2>
	  </div>
  
	  <!-- Features Grid -->
	  <div class="grid md:grid-cols-3 gap-8 mb-20 relative z-10">
		<!-- Feature 1 -->
		<div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
		  <div class="h-16 w-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
			<svg class="w-8 h-8 text-brand-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
			</svg>
		  </div>
		  <h3 class="text-xl font-playfair text-brand-dark mb-4">
			Prestigious Academic Network
		  </h3>
		  <p class="text-brand-dark/80 font-inter leading-relaxed">
			Through Leaders Excellence, participants gain indirect access to the renowned Harvard Square Business Association and Harvard Faculty Club.
		  </p>
		</div>
  
		<!-- Feature 2 -->
		<div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
		  <div class="h-16 w-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
			<svg class="w-8 h-8 text-brand-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
			</svg>
		  </div>
		  <h3 class="text-xl font-playfair text-brand-dark mb-4">
			Global Educational Standards
		  </h3>
		  <p class="text-brand-dark/80 font-inter leading-relaxed">
			Leaders Excellence, affiliated with AACSB International, ensures top-tier academic excellence recognized worldwide.
		  </p>
		</div>
  
		<!-- Feature 3 -->
		<div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
		  <div class="h-16 w-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6">
			<svg class="w-8 h-8 text-brand-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
			</svg>
		  </div>
		  <h3 class="text-xl font-playfair text-brand-dark mb-4">
			Certified Global Recognition
		  </h3>
		  <p class="text-brand-dark/80 font-inter leading-relaxed">
			Leaders Excellence Certificate Courses℠ are officially registered in Massachusetts, offering internationally recognized credentials.
		  </p>
		</div>
	  </div>
  
	  <!-- AACSB Section -->
	  <div class="max-w-4xl mx-auto relative z-10">
		<div class="bg-white rounded-lg p-8 md:p-12 shadow-sm">
		  <div class="flex flex-col md:flex-row items-center gap-8 mb-8">
			<div class="w-24 h-24 md:w-48 md:h-48 flex-shrink-0">
			  <img 
				src="/images/BEA-seal.png" 
				alt="AACSB Logo" 
				class="w-full h-full object-contain"
			  />
			</div>
			<div>
			  <h3 class="text-2xl font-playfair text-brand-dark mb-4">
				AACSB (Association to Advance Collegiate Schools of Business)
			  </h3>
			  <p class="text-brand-dark/80 font-inter leading-relaxed">
				is a globally recognized accreditation that sets the benchmark for excellence in business education. Holding this accreditation ensures that programs meet the highest academic standards, providing credibility and trust to students and partners. Adding AACSB accreditation enhances the value of your programs and boosts your reputation in the education industry.
			  </p>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  
  <style>
	@keyframes float {
	  0%, 100% { transform: translateY(0); }
	  50% { transform: translateY(-10px); }
	}
  
	.feature-card:hover .icon-container {
	  animation: float 3s ease-in-out infinite;
	}
  </style>