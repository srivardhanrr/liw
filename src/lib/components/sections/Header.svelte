<script lang="ts">
    import { onMount } from 'svelte';
    import { Share2 } from 'lucide-svelte';
    import Menu from "lucide-svelte/icons/menu";
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import * as Sheet from "$lib/components/ui/sheet";

    let y = 0;
    let lastY = 0;
    let headerVisible = true;
    let headerElement: HTMLElement;

    function handleScroll() {
        y = window.scrollY;
        headerVisible = (y < lastY) || y < 50; // Show header when scrolling up or near the top
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
    class="bg-white sticky inset-x-0 top-0 flex flex-row justify-between z-50 h-20 md:h-22 border-b md:px-8 lg:px-12 transition-transform duration-300"
    class:translate-y-0={headerVisible}
    class:-translate-y-full={!headerVisible}
>
    <div class="container mx-auto h-full flex items-center justify-between">
        <nav class="hidden md:flex items-center space-x-6 flex-1">
            <a href="/our-story" class="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="/symposium" class="text-foreground hover:text-primary transition-colors">Symposium</a>
            <a href="/cookbooks" class="text-foreground hover:text-primary transition-colors">Cookbooks</a>
            <a href="/contact" class="text-foreground hover:text-primary transition-colors">Contact Us</a>
        </nav>

        <Sheet.Root>
            <Sheet.Trigger asChild let:builder>
                <Button
                    variant="ghost"
                    size="icon"
                    class="md:hidden"
                    builders={[builder]}
                >
                    <Menu class="h-6 w-6"/>
                    <span class="sr-only">Toggle navigation menu</span>
                </Button>
            </Sheet.Trigger>
            <Sheet.Content side="left">
                <nav class="grid gap-6 text-lg font-medium pt-16">
                    <a href="/our-story" class="hover:text-primary">Our Story</a>
                    <a href="/products" class="hover:text-primary">All Products</a>
                    <a href="/cookbooks" class="hover:text-primary">Cookbooks</a>
                    <a href="/contact" class="hover:text-primary">Contact Us</a>
                </nav>
            </Sheet.Content>
        </Sheet.Root>

        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="/" class="flex items-center justify-center">
                <img src="/images/logo/liw-logo.png" alt="Leadership Innovation World" class="h-12"/>
                <span class="sr-only">Leadership Innovation World</span>
            </a>
        </div>

        <div class="flex items-center space-x-4 flex-1 justify-end">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                    <Button
                        builders={[builder]}
                        variant="ghost"
                        size="icon"
                        class="rounded-full"
                    >
                        <Share2 class="h-6 w-6"/>
                        <span class="sr-only">Toggle Social Links</span>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                    <DropdownMenu.Item>Instagram</DropdownMenu.Item>
                    <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                    <DropdownMenu.Item>X</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    </div>
</header>
