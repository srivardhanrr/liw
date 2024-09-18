<!-- src/lib/components/SymposiumHero.svelte -->
<script>
	import { ChevronRight } from 'lucide-svelte';
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
				<ul class="list-inside list-disc">
					<li class="py-1"><b class="text-brand-burgundy">Opening Keynote:</b> A visionary industry leader will set the tone for the event, discussing the future of technology and leadership.</li>
					<li class="py-1"><b class="text-brand-burgundy">Panel Discussions:</b> Experts will dive into emerging trends, including the impact of IoT and cybersecurity on global industries.</li>
					<li class="py-1"><b class="text-brand-burgundy">Hands-On Workshops:</b> Interactive sessions where participants will gain practical skills in areas directly relevant to current market needs.</li>
					<li class="py-1"><b class="text-brand-burgundy">Networking Sessions:</b> Dedicated time for one-on-one networking, where leaders and students can connect.</li>
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
