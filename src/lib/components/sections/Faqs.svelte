<script lang="ts">
    import * as Accordion from '$lib/components/ui/accordion';
    type FAQ = { question: string; answer: string };
    export let faqs: FAQ[] = [];
</script>

<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-brand-burgundy mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion.Root class="w-full sm:max-w-[70%] mx-auto">
            {#each faqs as faq}
                <Accordion.Item value={faq.question}>
                    <Accordion.Trigger class="text-left text-md font-bold">{faq.question}</Accordion.Trigger>
                    <Accordion.Content>{faq.answer}</Accordion.Content>
                </Accordion.Item>
            {/each}
        </Accordion.Root>
    </div>
</section>
