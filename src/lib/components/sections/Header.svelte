<script lang="ts">
	import { onMount } from 'svelte';
	import { Share2 } from 'lucide-svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Sheet from '$lib/components/ui/sheet';

	let y = 0;
	let lastY = 0;
	let headerVisible = true;
	let headerElement: HTMLElement;

	function handleScroll() {
		y = window.scrollY;
		headerVisible = y < lastY || y < 50; // Show header when scrolling up or near the top
		lastY = y;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	bind:this={headerElement}
	class="md:h-22 sticky inset-x-0 top-0 z-50 flex h-20 flex-row justify-between border-b bg-white transition-transform duration-300 md:px-8 lg:px-12"
	class:translate-y-0={headerVisible}
	class:-translate-y-full={!headerVisible}
>
	<div class="container mx-auto flex h-full items-center justify-between">
		<nav class="hidden flex-1 items-center space-x-6 text-sm md:flex">
			<!-- <a href="/our-story" class="text-foreground hover:text-primary transition-colors">About Us</a> -->
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="hover:text-brand-burgundy">About Us</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Item
							><a href="/our-story" class="hover:text-brand-burgundy">Our Story</a
							></DropdownMenu.Item
						>
						<DropdownMenu.Item
							><a href="/our-experts" class="hover:text-brand-burgundy">Our Experts</a
							></DropdownMenu.Item
						>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<a href="/symposium" class="text-foreground transition-colors hover:text-primary">Symposium</a>
			<a href="/courses" class="text-foreground transition-colors hover:text-primary">Courses</a>
			<a href="/partners" class="text-foreground hover:text-primary transition-colors">Our Partners</a>
			<a href="/contact" class="text-foreground transition-colors hover:text-primary">Contact Us</a>
		</nav>

		<Sheet.Root>
			<Sheet.Trigger asChild let:builder>
				<Button variant="ghost" size="icon" class="md:hidden" builders={[builder]}>
					<Menu class="h-6 w-6" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 pt-16 text-lg font-medium">
					<a href="/our-story" class="hover:text-primary">Our Story</a>
					<a href="/our-experts" class="hover:text-primary">Our Experts</a>
					<a href="/symposium" class="hover:text-primary">Symposium</a>
					<a href="/courses" class="hover:text-primary">Courses</a>
					<a href="/partners" class="hover:text-primary">Our Partners</a>
					<a href="/contact" class="hover:text-primary">Contact Us</a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>

		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
			<a href="/" class="flex items-center justify-center">
				<img src="/images/logo/liw-logo.png" alt="Leadership Innovation World" class="h-12" />
				<span class="sr-only">Leadership Innovation World</span>
			</a>
		</div>

		<div class="flex flex-1 items-center justify-end space-x-4">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost" size="icon" class="rounded-full">
						<Share2 class="h-6 w-6" />
						<span class="sr-only">Toggle Social Links</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item>Instagram</DropdownMenu.Item>
					<DropdownMenu.Item>LinkedIn</DropdownMenu.Item>
					<DropdownMenu.Item>X</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
