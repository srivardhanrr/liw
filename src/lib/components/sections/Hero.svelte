<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<section class="relative flex min-h-screen flex-col overflow-hidden lg:flex-row">
	<!-- Image Side (moved to top for mobile) -->

	<!-- Content Side -->
	<div class="z-20 flex w-full items-center justify-center p-8 lg:w-1/2 lg:p-16">
		<div class="max-w-xl">
			<h1
				class="mb-6 font-playfair text-3xl leading-tight text-brand-burgundy sm:text-4xl md:text-5xl lg:text-6xl"
			>
				SHAPING TOMORROW'S LEADERS TODAY
			</h1>
			<p class="mb-8 font-sans text-base text-brand-black sm:text-lg md:text-xl">
				We merge academic wisdom with industry foresight, empowering students to lead in a
				fast-paced world.
			</p>
			<div class="flex flex-col gap-4 sm:flex-row">
				<a href="/courses">
					<Button
						variant="default"
						class="w-full bg-brand-burgundy text-white hover:bg-brand-burgundy/90 sm:w-auto"
					>
						Explore Courses
					</Button>
				</a>
				<a href="/our-story">
					<Button
						variant="outline"
						class="w-full border-brand-gold text-brand-burgundy hover:bg-brand-gold/10 sm:w-auto"
					>
						Learn More
					</Button>
				</a>
			</div>
		</div>
	</div>

	<div class="h-[40vh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
		<div class="relative h-full w-full">
			<div class="absolute inset-0 z-10"></div>
			<img
				src="/images/liw-hero.webp"
				alt="Students collaborating with industry professionals"
				class="h-full w-full object-cover"
			/>
		</div>
	</div>

	<!-- Decorative Element -->
	<div
		class="absolute bottom-0 left-0 right-0 z-30 h-16 bg-gradient-to-t from-brand-gold/20 to-transparent"
	></div>
</section>
