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
  
  <div id="symposium-form" class="bg-white py-12 text-brand-black">
	<div class="container mx-auto px-4">
	  <h2 class="mb-6 text-center font-playfair text-3xl font-bold text-brand-burgundy sm:text-4xl md:text-5xl">
		Host a Symposium
	  </h2>
	  <p class="mb-8 text-center font-bricolage text-base sm:text-lg md:text-xl">
		Transform your institution with a Leadership Innovation World symposium
	  </p>
  
	  <div class="flex flex-col gap-8 lg:flex-row">
		<!-- Form Section -->
		<div class="rounded-lg p-4 shadow-2xl lg:w-1/2">
		  {#if !submitted}
			<form method="POST" use:enhance class="space-y-4">
			  <!-- Institution Name -->
			  <div>
				<label for="institutionName" class="mb-1 block font-bricolage text-base sm:text-lg">
				  Institution Name
				</label>
				<input
				  type="text"
				  id="institutionName"
				  name="institutionName"
				  bind:value={formData.institutionName}
				  required
				  class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				/>
			  </div>
  
			  <!-- Contact Person and Email -->
			  <div class="flex flex-col gap-4 sm:flex-row">
				<div class="flex-1">
				  <label for="contactPerson" class="mb-1 block font-bricolage text-base sm:text-lg">
					Contact Person
				  </label>
				  <input
					type="text"
					id="contactPerson"
					name="contactPerson"
					bind:value={formData.contactPerson}
					required
					class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				  />
				</div>
				<div class="flex-1">
				  <label for="email" class="mb-1 block font-bricolage text-base sm:text-lg">
					Email
				  </label>
				  <input
					type="email"
					id="email"
					name="email"
					bind:value={formData.email}
					required
					class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				  />
				</div>
			  </div>
  
			  <!-- Phone and Preferred Date -->
			  <div class="flex flex-col gap-4 sm:flex-row">
				<div class="flex-1">
				  <label for="phone" class="mb-1 block font-bricolage text-base sm:text-lg">
					Phone
				  </label>
				  <input
					type="tel"
					id="phone"
					name="phone"
					bind:value={formData.phone}
					class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				  />
				</div>
				<div class="flex-1">
				  <label for="preferredDate" class="mb-1 block font-bricolage text-base sm:text-lg">
					Preferred Date
				  </label>
				  <input
					type="date"
					id="preferredDate"
					name="preferredDate"
					bind:value={formData.preferredDate}
					class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				  />
				</div>
			  </div>
  
			  <!-- Expected Attendees -->
			  <div>
				<label for="expectedAttendees" class="mb-1 block font-bricolage text-base sm:text-lg">
				  Expected Attendees
				</label>
				<input
				  type="number"
				  id="expectedAttendees"
				  name="expectedAttendees"
				  bind:value={formData.expectedAttendees}
				  class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				/>
			  </div>
  
			  <!-- Additional Information -->
			  <div>
				<label for="additionalInfo" class="mb-1 block font-bricolage text-base sm:text-lg">
				  Additional Information
				</label>
				<textarea
				  id="additionalInfo"
				  name="additionalInfo"
				  bind:value={formData.additionalInfo}
				  rows="4"
				  class="w-full rounded-lg border border-brand-gold p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-brand-burgundy"
				></textarea>
			  </div>
  
			  <!-- Submit Button -->
			  <button
				type="submit"
				class="flex w-full items-center justify-center rounded-lg bg-brand-burgundy px-4 py-3 font-bricolage text-base text-white transition-colors hover:bg-opacity-90 sm:text-lg"
			  >
				<Send class="mr-2" size={20} />
				Submit Request
			  </button>
			</form>
		  {:else}
			<!-- Submission Confirmation -->
			<div class="py-8 text-center">
			  <h2 class="mb-4 font-playfair text-2xl text-brand-burgundy">
				Request Submitted!
			  </h2>
			  <p class="text-base text-gray-700 sm:text-lg">
				Thank you for your interest in hosting a symposium. Our team will contact you shortly
				to discuss the details.
			  </p>
			</div>
		  {/if}
		</div>
  
		<!-- Info Section -->
		<div class="flex flex-col justify-center lg:w-1/2">
			<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 400 300"
			class="mb-8 h-auto w-full max-w-full"
			aria-hidden="true"
		  >
			<!-- Abstract Illustration Representing Collaboration -->
			<!-- Background Circle -->
			<circle cx="200" cy="150" r="100" fill="#FCD57E" opacity="0.1" />
			<!-- Upward Arrow Symbolizing Leadership -->
			<path
			  d="M200,100 L200,50 M200,50 L190,60 M200,50 L210,60"
			  stroke="#76142D"
			  stroke-width="4"
			  stroke-linecap="round"
			  stroke-linejoin="round"
			/>
			<!-- Two Circles Representing People -->
			<circle cx="160" cy="180" r="20" fill="#E8B654" />
			<circle cx="240" cy="180" r="20" fill="#E8B654" />
			<!-- Connecting Line -->
			<line x1="180" y1="180" x2="220" y2="180" stroke="#76142D" stroke-width="2" />
		  </svg>
		  <Alert class="mx-4 sm:mx-0">
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
  