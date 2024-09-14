<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Separator } from "$lib/components/ui/separator";
    import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-svelte";
  
    const currentYear = new Date().getFullYear();
  
    function handleSubscribe(event: Event) {
      event.preventDefault();
      // Add subscription logic here
      console.log("Subscription submitted");
    }
  </script>
  
  <footer class=" text-black py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="space-y-4">
          <img src="/images/logo/liw-logo.png" alt="Leadership Innovation World" class="h-12" />
          <p class="text-sm text-brand-burgundy">Empowering leaders to shape the future of innovation.</p>
          <div class="flex space-x-4">
            <!-- <a href="#" class="text-brand-burgundy hover:text-brand-gold transition-colors">
              <Facebook size={20} />
            </a> -->
            <a href="https://x.com/liw_symposium" class="text-brand-burgundy hover:text-brand-gold transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/leadershipinnovationworld" class="text-brand-burgundy hover:text-brand-gold transition-colors">
              <Instagram size={20} />
            </a>
            <!-- <a href="#" class="text-brand-burgundy hover:text-brand-gold transition-colors">
              <Linkedin size={20} />
            </a> -->
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
              <li><a href="/our-story" class="text-brand-burgundy hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="/programs" class="text-brand-burgundy hover:text-brand-gold transition-colors">Our Programs</a></li>
              <li><a href="/symposiums" class="text-brand-burgundy hover:text-brand-gold transition-colors">Symposiums</a></li>
            <li><a href="/contact" class="text-brand-burgundy hover:text-brand-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            <li><a href="/" class="text-brand-burgundy hover:text-brand-gold transition-colors">Blog</a></li>
            <!-- <li><a href="/case-studies" class="text-brand-burgundy hover:text-brand-gold transition-colors">Case Studies</a></li> -->
            <!-- <li><a href="/whitepapers" class="text-brand-burgundy hover:text-brand-gold transition-colors">Whitepapers</a></li> -->
            <li><a href="/" class="text-brand-burgundy hover:text-brand-gold transition-colors">FAQ</a></li>
          </ul>
        </div>
        
        <div class="gradient-border-r">
          <h3 class="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form on:submit={handleSubscribe} class="space-y-4">
            <Input type="email" placeholder="Enter your email" class="bg-white/10 border-white/20 text-black placeholder-gray-400" />
            <Button type="submit" variant="secondary" class="w-full bg-brand-burgundy text-white">
              Subscribe <Send class="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
      
      <Separator class="bg-white/20 my-8" />
      
      <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {currentYear} Leadership Innovation World. All rights reserved.</p>
        <div class="space-x-4 mt-4 md:mt-0">
        </div>
      </div>
    </div>
  </footer>
  
  <style>
    /* Add any custom styles here */
  </style>