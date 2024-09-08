<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { UserRoundPen, LibraryBig, Shapes, Cable, Globe, Users } from 'lucide-svelte';

	// Assuming these are props or data that need to be defined
	let content: any; // Define the type and value as needed
	let faqs: any; // Define the type and value as needed
</script>

<div class="bg-gradient-to-r from-brand-black to-[#540c20]">
	<main class="container mx-auto py-16">
		<section class="mb-16 text-center">
			<h2 class="mb-4 text-5xl font-bold text-white">Our Approach to Success</h2>
			<p class="mb-8 text-xl text-white/80">
				Empowering leaders to shape the future of innovation.
			</p>
			<Button variant="secondary" size="lg" class="font-semibold">Discover Our Programs</Button>
		</section>

		<section class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
			<Card.Root class="border-none bg-white/10 text-white">
				<Card.Header>
					<UserRoundPen class="mb-4 h-12 w-12 text-yellow-400" />
					<Card.Title>Personalized Learning Experience</Card.Title>
				</Card.Header>
				<Card.Content>
					We tailor our programs to meet your specific needs, ensuring that you gain practical
					skills that can be immediately applied in real-world scenarios.
				</Card.Content>
			</Card.Root>
			<Card.Root class="border-none bg-white/10 text-white">
				<Card.Header>
					<LibraryBig class="mb-4 h-12 w-12 text-yellow-400" />
					<Card.Title>Industry-Driven Curriculum</Card.Title>
				</Card.Header>
				<Card.Content>
					Our courses are developed in collaboration with industry experts, ensuring that you learn
					what is most relevant to today's job market.
				</Card.Content>
			</Card.Root>
			<Card.Root class="border-none bg-white/10 text-white">
				<Card.Header>
					<Shapes class="mb-4 h-12 w-12 text-brand-gold" />
					<Card.Title>Interactive Training Sessions</Card.Title>
				</Card.Header>
				<Card.Content>
					Our training sessions are designed to be highly interactive, combining theoretical
					knowledge with practical applications.
				</Card.Content>
			</Card.Root>
			<Card.Root class="border-none bg-white/10 text-white">
				<Card.Header>
					<Cable class="mb-4 h-12 w-12 text-brand-gold" />
					<Card.Title>Continuous Support and Guidance</Card.Title>
				</Card.Header>
				<Card.Content>
					Our team of experienced mentors is dedicated to supporting you throughout your learning
					journey, offering personalized feedback and advice to help you succeed.
				</Card.Content>
			</Card.Root>
			<Card.Root class="border-none bg-white/10 text-white">
				<Card.Header>
					<Globe class="mb-4 h-12 w-12 text-brand-gold" />
					<Card.Title>Global Networking Opportunities</Card.Title>
				</Card.Header>
				<Card.Content>
					As a member of MLE℠, you’ll have access to a global network of professionals, leaders, and
					experts, providing you with unparalleled opportunities for growth and collaboration.
				</Card.Content>
			</Card.Root>
			<Card.Root class="border-none bg-white/10 text-white">
				<Card.Header>
					<Users class="mb-4 h-12 w-12 text-brand-gold" />
					<Card.Title>Engaging Symposiums</Card.Title>
				</Card.Header>
				<Card.Content>
					We conduct symposiums where students connect with industry leaders, participate in
					interactive sessions, and gain insights from the forefront of their fields.
				</Card.Content>
			</Card.Root>
		</section>
		<section class="text-center">
			<h3 class="mb-4 text-3xl font-bold text-white">Ready to Lead the Future?</h3>
			<p class="mb-8 text-xl text-white/80">
				Join our exclusive network of innovative leaders today.
			</p>
			<Button variant="secondary" size="lg" class="font-semibold">Apply Now</Button>
		</section>
	</main>
</div>
