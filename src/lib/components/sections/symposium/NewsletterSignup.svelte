<script>
  import { Mail, Check } from 'lucide-svelte';
  import { Alert, AlertDescription } from '$lib/components/ui/alert';

  let email = '';
  let subscribed = false;

  function handleSubmit() {
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    subscribed = true;
    email = '';
  }
</script>

<section class="bg-brand-burgundy text-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
      <p class="font-bricolage text-lg md:text-xl mb-8">
        Stay informed about upcoming symposiums, exclusive content, and thought leadership updates. 
        Never miss an opportunity to engage with cutting-edge innovations.
      </p>

      <form on:submit|preventDefault={handleSubmit} class="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="email"
          bind:value={email}
          placeholder="Enter your email address"
          required
          class="flex-grow p-3 rounded-lg bg-white/10 border border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold text-white placeholder-white/60"
        />
        <button 
          type="submit"
          class="bg-brand-gold text-brand-burgundy font-bricolage py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors text-lg flex items-center justify-center"
        >
          <Mail class="mr-2" size={20} />
          Subscribe
        </button>
      </form>

      {#if subscribed}
        <Alert class="bg-brand-gold/20 border border-brand-gold">
          <Check class="h-4 w-4 text-brand-gold" />
          <AlertDescription class="text-white">
            Thank you for subscribing! You'll receive our next newsletter soon.
          </AlertDescription>
        </Alert>
      {/if}
    </div>
  </div>
</section>