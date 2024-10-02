<!-- src/routes/courses/+page.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';

	const generalPrograms = [
		{
			title: 'Student Training Program',
			description:
				'Empowering students with essential skills for academic and professional success.',
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/student'
		},
		{
			title: "Start-up Owner's Training Program",
			description:
				'Equipping entrepreneurs with the tools to build and grow successful businesses.',
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/startup'
		}
	];

	const teacherPrograms = [
		{
			title: 'Teacher Training Program',
			description:
				"Enhancing educators' skills to create engaging and effective learning environments.",
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/teacher'
		},
		{
			title: 'Head Teacher Training Program',
			description:
				'Developing leadership skills for educational administrators to drive institutional success.',
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/head-teacher'
		}
	];

	const corporatePrograms = [
		{
			title: 'L-1 Corporate Training Program (CXO)',
			description:
				"Elevating C-suite executives' capabilities to lead organizations to new heights.",
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/cxo'
		},
		{
			title: "L-2 Corporate Training Program (Manager's)",
			description: 'Empowering managers with skills to effectively lead teams and drive results.',
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/manager'
		},
		{
			title: 'L-3 Corporate Training Program (Executives)',
			description:
				"Enhancing executives' skills to navigate complex business environments and drive growth.",
			categories: [
				'Leadership and Management',
				'Personal Development',
				'Marketing and Sales',
				'Human Resources',
				'Organizational Essentials',
				'Administrative Skills',
				'Professional Advancement',
				'Advanced Career Building'
			],
			link: '/courses/executive'
		}
	];

	const sections = [
		{ title: 'General Training Programs', programs: generalPrograms },
		{ title: 'Teacher Training Programs', programs: teacherPrograms },
		{ title: 'Corporate Training Programs', programs: corporatePrograms }
	];
</script>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16">
		<h1 class="mb-8 font-playfair text-5xl text-brand-burgundy">Our Courses</h1>
		<p class="text-brand-dark mb-12 font-bricolage text-xl">
			Discover our comprehensive range of training programs designed to cultivate leadership and
			innovation across various professional levels.
		</p>

		{#each sections as section}
			<section class="mb-16">
				<h2 class="mb-8 font-playfair text-3xl text-brand-burgundy">{section.title}</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each section.programs as program}
						<div
							class="flex h-full flex-col rounded-lg border border-brand-gold bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
							transition:fade
						>
							<h3 class="mb-4 font-playfair text-2xl text-brand-burgundy">{program.title}</h3>
							<p class="font-inter text-brand-dark mb-6">{program.description}</p>
							<h4 class="text-brand-yellow mb-2 font-bricolage text-lg">Course Categories:</h4>
							<ul class="mb-6 flex-grow list-inside list-disc">
								{#each program.categories as category}
									<li class="font-inter text-brand-dark">{category}</li>
								{/each}
							</ul>
							<div class="mt-auto">
								<a href={program.link}>
								<Button
									class="hover:bg-brand-yellow w-full bg-brand-burgundy text-white transition-colors duration-300 hover:text-brand-dark-gold"
								>
									Learn More 
								</Button>
							</a>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
