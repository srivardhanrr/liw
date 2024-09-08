<section class="bg-white text-brand-dark min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('/images/liw-hero.png')] opacity-5"></div>
    <div class="container mx-auto px-8 py-24 flex flex-col lg:flex-row items-center space-y-16 lg:space-y-0 lg:space-x-24 relative z-10">
        <div class="lg:w-1/2 space-y-12">
            <h1 class="font-playfair text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-brand-burgundy">Our</span> Story
            </h1>
            <p class="font-bricolage text-lg lg:text-xl leading-relaxed max-w-xl text-gray-700">
                Leadership Innovation World began with a vision to redefine education. 
                We merge academic excellence with industry insights, empowering the 
                next generation of leaders.
            </p>
            <a href="#" class="inline-block bg-brand-burgundy text-white py-3 px-8 rounded-sm hover:bg-brand-gold hover:text-brand-dark transition duration-300 ease-in-out font-bricolage text-sm uppercase tracking-wider">
                Explore Our Journey
            </a>
        </div>
        <div class="lg:w-1/2">
            <div class="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <img src="/images/bg-image.png" alt="Our Story" class="object-cover w-full h-full transition-transform duration-700 hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-brand-burgundy to-transparent opacity-30"></div>
            </div>
        </div>
    </div>
</section>

<style>
    section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(to right, #76142D, #FCD57E, #E8B654);
    }
</style>
