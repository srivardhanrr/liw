<!-- src/lib/components/SymposiumHero.svelte -->
<script>
	import { Presentation, Users, Wrench, Network } from 'lucide-svelte';

	import VideoPlayer from '../VideoPlayer.svelte';

	// Replace this with the actual path to your video file
	const videoUrl = '/symposium.mp4';
</script>

<div class="flex min-h-screen items-center justify-center bg-white p-8">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
			<div class="space-y-6">
				<h1
					class="font-playfair text-4xl font-bold leading-tight text-brand-burgundy md:text-5xl lg:text-6xl"
				>
					Symposium <span class="text-brand-black">Overview</span>
				</h1>
				<p class="font-inter text-brand-dark text-sm leading-relaxed md:text-lg">
					The Leadership Innovation World Symposium is a unique event tailored for students early in
					their careers. This gathering unites industry leaders, experts, and thought influencers
					from various sectors.
				</p>
				<h3 class="font-playfair text-2xl font-bold leading-tight text-brand-burgundy md:text-3xl">Agenda Overview				</h3>

				  
				  <ul class="space-y-4">
					<li class="flex items-start">
					  <Presentation class="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-brand-burgundy" />
					  <div>
						<span class="font-bold text-brand-burgundy">Opening Keynote:</span>
						<p class="text-sm md:text-md">A visionary industry leader will set the tone for the event, discussing the future of technology and leadership.</p>
					  </div>
					</li>
					<li class="flex items-start">
					  <Users class="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-brand-burgundy" />
					  <div>
						<span class="font-bold text-brand-burgundy">Panel Discussions:</span>
						<p class="text-sm md:text-md">Experts will dive into emerging trends, including the impact of IoT and cybersecurity on global industries.</p>
					  </div>
					</li>
					<li class="flex items-start">
					  <Wrench class="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-brand-burgundy" />
					  <div>
						<span class="font-bold text-brand-burgundy">Hands-On Workshops:</span>
						<p class="text-sm md:text-md">Interactive sessions where participants will gain practical skills in areas directly relevant to current market needs.</p>
					  </div>
					</li>
					<li class="flex items-start">
					  <Network class="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-brand-burgundy" />
					  <div>
						<span class="font-bold text-brand-burgundy">Networking Sessions:</span>
						<p class="text-sm md:text-md">Dedicated time for one-on-one networking, where leaders and students can connect.</p>
					  </div>
					</li>
				  </ul>
				  
				<!-- <p class="font-inter text-brand-dark text-sm leading-relaxed md:text-lg">
					The symposium features dynamic panel discussions and inspiring keynote sessions that
					provide students with invaluable insights into skill mastery, career development, and
					emerging job market trends.
				</p> -->
				<!-- <button class="btn-primary flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <ChevronRight class="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
                </button> -->
			</div>
			<VideoPlayer src="/symposium.mp4" />
		</div>
	</div>
</div>
