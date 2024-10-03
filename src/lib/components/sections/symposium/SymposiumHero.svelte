<!-- src/lib/components/SymposiumHero.svelte -->
<script>
	import { Presentation, Users, Wrench, Network } from 'lucide-svelte';

	import VideoPlayer from '../VideoPlayer.svelte';

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
				<!-- <div>
				<h3 class="font-playfair text-2xl font-bold leading-tight text-brand-burgundy md:text-3xl">
					Agenda Overview
				</h3>
				<ul class="space-y-4">
					<li class="flex items-start">
						<Presentation class="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-brand-burgundy" />
						<div>
							<span class="font-bold text-brand-burgundy">Opening Keynote:</span>
							<p class="md:text-md text-sm">
								A visionary industry leader will set the tone for the event, discussing the future
								of technology and leadership.
							</p>
						</div>
					</li>
					<li class="flex items-start">
						<Users class="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-brand-burgundy" />
						<div>
							<span class="font-bold text-brand-burgundy">Panel Discussions:</span>
							<p class="md:text-md text-sm">
								Experts will dive into emerging trends, including the impact of IoT and
								cybersecurity on global industries.
							</p>
						</div>
					</li>
					<li class="flex items-start">
						<Wrench class="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-brand-burgundy" />
						<div>
							<span class="font-bold text-brand-burgundy">Hands-On Workshops:</span>
							<p class="md:text-md text-sm">
								Interactive sessions where participants will gain practical skills in areas directly
								relevant to current market needs.
							</p>
						</div>
					</li>
					<li class="flex items-start">
						<Network class="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-brand-burgundy" />
						<div>
							<span class="font-bold text-brand-burgundy">Networking Sessions:</span>
							<p class="md:text-md text-sm">
								Dedicated time for one-on-one networking, where leaders and students can connect.
							</p>
						</div>
					</li>
				</ul>
			</div> -->
			</div>
			<VideoPlayer src="/symposium.mp4" />
		</div>
	</div>
</div>
