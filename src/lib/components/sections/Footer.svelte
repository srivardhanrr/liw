<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Separator } from '$lib/components/ui/separator';
	import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	function handleSubscribe(event: Event) {
		event.preventDefault();
		// Add subscription logic here
		console.log('Subscription submitted');
	}
</script>

<footer class=" py-16 text-black">
	<div class="container mx-auto px-4">
		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
			<div class="space-y-4">
				<img src="/images/logo/liw-logo.png" alt="Leadership Innovation World" class="h-12" />
				<p class="text-sm text-brand-burgundy">
					Empowering leaders to shape the future of innovation.
				</p>
				<div class="flex space-x-4">
					<!-- <a href="#" class="text-brand-burgundy hover:text-brand-gold transition-colors">
              <Facebook size={20} />
            </a> -->
					<a
						href="https://x.com/liw_symposium"
						class="text-brand-burgundy transition-colors hover:text-brand-gold"
					>
						<Twitter size={20} />
					</a>
					<a
						href="https://www.instagram.com/leadershipinnovationworld"
						class="text-brand-burgundy transition-colors hover:text-brand-gold"
					>
						<Instagram size={20} />
					</a>
					<!-- <a href="#" class="text-brand-burgundy hover:text-brand-gold transition-colors">
              <Linkedin size={20} />
            </a> -->
				</div>
			</div>

			<div>
				<h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
				<ul class="space-y-2">
					<li>
						<a href="/our-story" class="text-brand-burgundy transition-colors hover:text-brand-gold"
							>Our Story</a
						>
					</li>
					<li>
						<a href="/programs" class="text-brand-burgundy transition-colors hover:text-brand-gold"
							>Our Programs</a
						>
					</li>
					<li>
						<a
							href="/symposiums"
							class="text-brand-burgundy transition-colors hover:text-brand-gold">Symposiums</a
						>
					</li>
					<li>
						<a href="/contact" class="text-brand-burgundy transition-colors hover:text-brand-gold"
							>Contact</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 text-lg font-semibold">Resources</h3>
				<ul class="space-y-2">
					<li>
						<a href="/" class="text-brand-burgundy transition-colors hover:text-brand-gold">Blog</a>
					</li>
					<!-- <li><a href="/case-studies" class="text-brand-burgundy hover:text-brand-gold transition-colors">Case Studies</a></li> -->
					<!-- <li><a href="/whitepapers" class="text-brand-burgundy hover:text-brand-gold transition-colors">Whitepapers</a></li> -->
					<li>
						<a href="/" class="text-brand-burgundy transition-colors hover:text-brand-gold">FAQ</a>
					</li>
				</ul>
			</div>

			<div class="gradient-border-r">
				<h3 class="mb-4 text-lg font-semibold text-brand-burgundy">Address:</h3>
				<p>Bengaluru, India</p>
				<h3 class="mb-4 mt-4 text-lg font-semibold text-brand-burgundy">Email:</h3>
				<p>info@leadershipinnovationworld.com</p>
				<h3 class="mb-4 mt-4 text-lg font-semibold text-brand-burgundy">Phone:</h3>
				<p>+91 74066 59377</p>
				<!-- <form on:submit={handleSubscribe} class="space-y-4">
            <Input type="email" placeholder="Enter your email" class="bg-white/10 border-white/20 text-black placeholder-gray-400" />
            <Button type="submit" variant="secondary" class="w-full bg-brand-burgundy text-white">
              Subscribe <Send class="ml-2 h-4 w-4" />
            </Button>
          </form> -->
			</div>
		</div>

		<Separator class="my-8 bg-white/20" />

		<div class="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
			<p>&copy; {currentYear} Leadership Innovation World. All rights reserved.</p>
			<div class="mt-4 space-x-4 md:mt-0"></div>
		</div>
	</div>
</footer>

<style>
	/* Add any custom styles here */
</style>
