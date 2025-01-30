<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const goals = [
		'Empower future leaders with cutting-edge skills',
		'Bridge the gap between academia and industry',
		'Foster innovation and entrepreneurial thinking',
		'Promote global perspectives in business education'
	];

</script>

<section class="relative overflow-hidden bg-gradient-to-br from-white to-brand-gold/10 py-24">
	<div class="absolute inset-0 opacity-5">
		<svg class="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<pattern
				id="diagonal-lines"
				width="10"
				height="10"
				patternUnits="userSpaceOnUse"
				patternTransform="rotate(45)"
			>
				<line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" stroke-width="0.5" />
			</pattern>
			<rect width="100" height="100" fill="url(#diagonal-lines)" />
		</svg>
	</div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="flex flex-col items-center justify-between lg:flex-row">
			<div class="mb-12 w-full lg:mb-0 lg:w-1/2">
				<h2
					class="mb-8 font-playfair text-4xl text-brand-burgundy sm:text-5xl"
					in:fade={{ duration: 1000, delay: 200 }}
				>
					Our Goals & Mission
				</h2>

				<p class="text-brand-charcoal mb-12 text-lg" in:fade={{ duration: 1000, delay: 400 }}>
					At Leadership Innovation World, we are dedicated to reshaping education by merging
					academic wisdom with industry foresight. Our mission is to equip young minds with the
					latest skills and deep industry insights, ensuring they're not just ready for the job
					market but primed to lead in it.
				</p>

				<div class="mb-12 grid grid-cols-1 gap-6">
					{#each goals as goal, index}
						<div
							class="flex items-center rounded-lg bg-white p-4 shadow-lg"
							in:fly={{ y: 50, duration: 500, delay: 600 + index * 200, easing: cubicOut }}
						>
							<svg
								class="mr-4 h-6 w-6 flex-shrink-0 text-brand-gold"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
							<p class="text-brand-charcoal font-bricolage">{goal}</p>
						</div>
					{/each}
				</div>

				<div in:fade={{ duration: 1000, delay: 1400 }}>
					<a href="/courses">
					<button
						class="hover:bg-brand-amber hover:text-brand-charcoal transform rounded-full bg-brand-burgundy px-8 py-3 font-bricolage text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						Start Your Journey
						</button>
					</a>
				</div>
			</div>

			<div class="w-full pl-0 lg:w-1/2 lg:pl-12">
				<svg
					class="h-auto w-full"
					viewBox="0 0 500 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="250" cy="250" r="200" fill="#FCD57E" opacity="0.2" />
					<path d="M100 400 Q 250 100 400 400" stroke="#76142D" stroke-width="8" fill="none" />
					<rect x="175" y="150" width="150" height="200" rx="20" fill="#E8B654" opacity="0.6" />
					<circle cx="250" cy="250" r="50" fill="#76142D" />
					<!-- <path d="M200 300 L 300 200" stroke="white" stroke-width="4" />
					<path d="M200 200 L 300 300" stroke="white" stroke-width="4" /> -->
				</svg>
			</div>
		</div>
	</div>
</section>
