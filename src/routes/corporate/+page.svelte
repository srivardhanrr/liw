<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Tabs, TabsList, TabsContent, TabsTrigger } from '$lib/components/ui/tabs';

	let activeTab = 0;
	let isVisible = false;

	const solutions = [/* Previous solutions array */];
	const process = [/* Previous process array */];

	const caseStudies = [
		{
			company: "Global Tech Corp",
			industry: "Technology",
			challenge: "High turnover rate and low team engagement",
			solution: "6-month leadership development program",
			results: ["45% reduction in turnover", "32% increase in employee satisfaction", "28% improvement in team productivity"],
			testimonial: "LIW transformed our workplace culture and leadership capabilities."
		},
		{
			company: "FinServe International",
			industry: "Financial Services",
			challenge: "Post-merger team integration issues",
			solution: "Custom team building and culture alignment program",
			results: ["89% successful team integration", "41% increase in cross-team collaboration", "25% improvement in project delivery"],
			testimonial: "The program helped us build a unified culture and stronger teams."
		},
		{
			company: "HealthCare Plus",
			industry: "Healthcare",
			challenge: "Communication gaps between departments",
			solution: "Communication excellence workshop series",
			results: ["63% reduction in communication-related errors", "37% faster decision-making process", "29% increase in patient satisfaction"],
			testimonial: "LIW helped us break down silos and improve patient care."
		}
	];

	const trainingModules = [
		{
			title: "Executive Leadership",
			duration: "12 weeks",
			format: "Hybrid",
			topics: [
				"Strategic Decision Making",
				"Change Management",
				"Executive Presence",
				"Global Leadership"
			],
			suitable: "C-Suite, Senior Management"
		},
		{
			title: "Middle Management Excellence",
			duration: "8 weeks",
			format: "In-person",
			topics: [
				"Team Leadership",
				"Performance Management",
				"Project Execution",
				"Conflict Resolution"
			],
			suitable: "Department Heads, Team Leaders"
		},
		{
			title: "Emerging Leaders",
			duration: "6 weeks",
			format: "Online",
			topics: [
				"Leadership Fundamentals",
				"Communication Skills",
				"Problem Solving",
				"Time Management"
			],
			suitable: "High-potential Employees"
		}
	];

	const industries = [
		{
			name: "Technology",
			expertise: [
				"Agile Leadership",
				"Innovation Management",
				"Digital Transformation",
				"Remote Team Building"
			]
		},
		{
			name: "Healthcare",
			expertise: [
				"Patient-Centered Leadership",
				"Healthcare Compliance",
				"Medical Team Coordination",
				"Care Quality Management"
			]
		},
		{
			name: "Financial Services",
			expertise: [
				"Risk Management",
				"Regulatory Compliance",
				"Client Relationship Management",
				"Financial Leadership"
			]
		}
	];

	onMount(() => {
		isVisible = true;
	});
</script>

<!-- Previous sections remain the same -->

<!-- Case Studies Section -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4">
		<h2 class="font-playfair text-4xl text-brand-burgundy mb-16 text-center">Success Stories</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each caseStudies as study}
				<Card class="p-8">
					<div class="mb-6">
						<h3 class="font-playfair text-2xl text-brand-burgundy mb-2">{study.company}</h3>
						<p class="font-bricolage text-gray-500">{study.industry}</p>
					</div>
					<div class="mb-6">
						<h4 class="font-bricolage font-semibold mb-2">Challenge:</h4>
						<p class="text-gray-600">{study.challenge}</p>
					</div>
					<div class="mb-6">
						<h4 class="font-bricolage font-semibold mb-2">Solution:</h4>
						<p class="text-gray-600">{study.solution}</p>
					</div>
					<div class="mb-6">
						<h4 class="font-bricolage font-semibold mb-2">Results:</h4>
						<ul class="list-disc list-inside text-gray-600">
							{#each study.results as result}
								<li>{result}</li>
							{/each}
						</ul>
					</div>
					<blockquote class="border-l-4 border-brand-burgundy pl-4 italic text-gray-600">
						"{study.testimonial}"
					</blockquote>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Training Modules Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<h2 class="font-playfair text-4xl text-brand-burgundy mb-16 text-center">Training Programs</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each trainingModules as module}
				<Card class="p-8 hover:shadow-xl transition-shadow duration-300">
					<h3 class="font-playfair text-2xl text-brand-burgundy mb-4">{module.title}</h3>
					<div class="space-y-4">
						<div class="flex justify-between text-gray-600">
							<span>Duration:</span>
							<span class="font-semibold">{module.duration}</span>
						</div>
						<div class="flex justify-between text-gray-600">
							<span>Format:</span>
							<span class="font-semibold">{module.format}</span>
						</div>
						<div class="border-t pt-4">
							<h4 class="font-bricolage font-semibold mb-2">Key Topics:</h4>
							<ul class="list-disc list-inside text-gray-600">
								{#each module.topics as topic}
									<li>{topic}</li>
								{/each}
							</ul>
						</div>
						<div class="border-t pt-4">
							<h4 class="font-bricolage font-semibold mb-2">Suitable for:</h4>
							<p class="text-gray-600">{module.suitable}</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Industry Expertise Section -->
<section class="py-20 bg-brand-burgundy text-white">
	<div class="container mx-auto px-4">
		<h2 class="font-playfair text-4xl mb-16 text-center">Industry Expertise</h2>
		<Tabs defaultValue="technology" class="w-full">
			<TabsList class="grid grid-cols-3 gap-4 mb-8">
				{#each industries as industry}
					<TabsTrigger value={industry.name.toLowerCase()} class="text-lg font-bricolage">
						{industry.name}
					</TabsTrigger>
				{/each}
			</TabsList>
			{#each industries as industry}
				<TabsContent value={industry.name.toLowerCase()}>
					<div class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
						<h3 class="font-playfair text-2xl mb-6">{industry.name} Leadership Excellence</h3>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
							{#each industry.expertise as item}
								<div class="flex items-start space-x-4">
									<div class="text-brand-gold text-xl">•</div>
									<p class="font-bricolage">{item}</p>
								</div>
							{/each}
						</div>
					</div>
				</TabsContent>
			{/each}
		</Tabs>
	</div>
</section>

<!-- Statistics Section -->
<section class="py-20 bg-white">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			<div class="text-center">
				<div class="text-4xl font-playfair text-brand-burgundy mb-2">500+</div>
				<p class="font-bricolage text-gray-600">Corporate Clients</p>
			</div>
			<div class="text-center">
				<div class="text-4xl font-playfair text-brand-burgundy mb-2">98%</div>
				<p class="font-bricolage text-gray-600">Client Satisfaction</p>
			</div>
			<div class="text-center">
				<div class="text-4xl font-playfair text-brand-burgundy mb-2">50+</div>
				<p class="font-bricolage text-gray-600">Industry Experts</p>
			</div>
			<div class="text-center">
				<div class="text-4xl font-playfair text-brand-burgundy mb-2">25+</div>
				<p class="font-bricolage text-gray-600">Countries Served</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="font-playfair text-4xl text-brand-burgundy mb-8">Start Your Transformation Journey</h2>
			<p class="font-bricolage text-xl text-gray-600 mb-12">Book a consultation with our experts to discuss your organization's unique needs and goals.</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Card class="p-8 text-left">
					<h3 class="font-playfair text-2xl text-brand-burgundy mb-4">Schedule a Call</h3>
					<p class="font-bricolage text-gray-600 mb-6">Choose a convenient time for a detailed discussion about your needs.</p>
					<Button variant="default" class="w-full bg-brand-burgundy hover:bg-brand-burgundy/90 text-white">
						Book Consultation
					</Button>
				</Card>
				<Card class="p-8 text-left">
					<h3 class="font-playfair text-2xl text-brand-burgundy mb-4">Request Information</h3>
					<p class="font-bricolage text-gray-600 mb-6">Get detailed information about our programs and pricing.</p>
					<Button variant="outline" class="w-full border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white">
						Download Brochure
					</Button>
				</Card>
			</div>
		</div>
	</div>
</section>