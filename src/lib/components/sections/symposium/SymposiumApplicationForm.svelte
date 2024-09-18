<script>
	import { AlertCircle, CheckCircle, Send } from 'lucide-svelte';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import { enhance } from '$app/forms';

	export let form;

	let formData = {
		institutionName: '',
		contactPerson: '',
		email: '',
		phone: '',
		preferredDate: '',
		expectedAttendees: '',
		additionalInfo: ''
	};

	$: submitted = form?.success || false;
</script>

<div id="symposium-form" class="bg-white py-16 text-brand-black">
	<div class="container mx-auto px-4">
		<h2 class="mb-8 text-center font-playfair text-4xl font-bold text-brand-burgundy md:text-5xl">
			Host a Symposium
		</h2>
		<p class="mb-12 text-center font-bricolage text-xl md:text-2xl">
			Transform your institution with a Leadership Innovation World symposium
		</p>

		<div class="flex flex-col gap-12 lg:flex-row">
			<div class="rounded-lg p-4 shadow-2xl lg:w-1/2">
				{#if !submitted}
					<form method="POST" use:enhance class="space-y-6">
						<div>
							<label for="institutionName" class="mb-2 block font-bricolage text-lg"
								>Institution Name</label
							>
							<input
								type="text"
								id="institutionName"
								name="institutionName"
								bind:value={formData.institutionName}
								required
								class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
							/>
						</div>
						<div class="flex gap-4">
							<div class="flex-1">
								<label for="contactPerson" class="mb-2 block font-bricolage text-lg"
									>Contact Person</label
								>
								<input
									type="text"
									id="contactPerson"
									name="contactPerson"
									bind:value={formData.contactPerson}
									required
									class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
								/>
							</div>
							<div class="flex-1">
								<label for="email" class="mb-2 block font-bricolage text-lg">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									bind:value={formData.email}
									required
									class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
								/>
							</div>
						</div>
						<div class="flex gap-4">
							<div class="flex-1">
								<label for="phone" class="mb-2 block font-bricolage text-lg">Phone</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									bind:value={formData.phone}
									class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
								/>
							</div>
							<div class="flex-1">
								<label for="preferredDate" class="mb-2 block font-bricolage text-lg"
									>Preferred Date</label
								>
								<input
									type="date"
									id="preferredDate"
									name="preferredDate"
									bind:value={formData.preferredDate}
									class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
								/>
							</div>
						</div>
						<div>
							<label for="expectedAttendees" class="mb-2 block font-bricolage text-lg"
								>Expected Attendees</label
							>
							<input
								type="number"
								id="expectedAttendees"
								name="expectedAttendees"
								bind:value={formData.expectedAttendees}
								class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
							/>
						</div>
						<div>
							<label for="additionalInfo" class="mb-2 block font-bricolage text-lg"
								>Additional Information</label
							>
							<textarea
								id="additionalInfo"
								name="additionalInfo"
								bind:value={formData.additionalInfo}
								rows="4"
								class="w-full rounded-lg border border-brand-gold p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
							></textarea>
						</div>
						<button
							type="submit"
							class="flex w-full items-center justify-center rounded-lg bg-brand-burgundy px-6 py-3 font-bricolage text-lg text-white transition-colors hover:bg-opacity-90"
						>
							<Send class="mr-2" size={20} />
							Submit Request
						</button>
					</form>
				{:else}
					<div class="py-12 text-center">
						<h2 class="mb-4 font-playfair text-2xl text-brand-burgundy">Request Submitted!</h2>
						<p class="text-gray-700">
							Thank you for your interest in hosting a symposium. Our team will contact you shortly
							to discuss the details.
						</p>
					</div>
				{/if}
			</div>
			<div class="flex flex-col justify-center lg:w-1/2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="mb-8 h-auto w-full">
					<rect width="400" height="300" fill="#FFF" />
					<circle cx="200" cy="150" r="100" fill="#76142D" opacity="0.1" />
					<circle cx="200" cy="150" r="80" fill="#76142D" opacity="0.2" />
					<circle cx="200" cy="150" r="60" fill="#76142D" opacity="0.3" />
					<path d="M200,90 L200,210 M140,150 L260,150" stroke="#76142D" stroke-width="4" />
					<circle cx="200" cy="150" r="10" fill="#FCD57E" />
					<path
						d="M180,130 Q200,110 220,130 M180,170 Q200,190 220,170"
						fill="none"
						stroke="#111716"
						stroke-width="3"
					/>
				</svg>
				<Alert>
					<AlertCircle class="h-4 w-4" />
					<AlertTitle>Why host with us?</AlertTitle>
					<AlertDescription>
						Our symposiums are tailored to your institution's needs, bringing together industry
						leaders, academics, and students for a transformative experience.
					</AlertDescription>
				</Alert>
			</div>
		</div>
	</div>
</div>
