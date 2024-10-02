<script>
    import {onNavigate} from '$app/navigation';
    import {fade, fly} from 'svelte/transition';

    let transitioning = false;
    let showLogo = false;
    let exitTransition = false;

    onNavigate(() => {
        transitioning = true;
        setTimeout(() => showLogo = true, 500);

        return new Promise(resolve => {
            setTimeout(() => {
                showLogo = false;
                exitTransition = true;
                setTimeout(() => {
                    transitioning = false;
                    exitTransition = false;
                    resolve();
                }, 300);
            }, 1500);
        });
    });
</script>

<div style="background-image: url('/images/bg-image.png')"
     class={`fixed inset-x-0 bottom-0 bg-cover bg-center transition-[height] duration-500 ease-in-out z-50 ${transitioning ? 'h-full' : 'h-0'}`}>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div> <!-- Optional overlay for better text visibility -->
    {#if showLogo}
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" in:fade={{ duration: 300 }}
             out:fade={{ duration: 300 }}>
            <!-- Add your logo here -->
            <img src="/images/logo/logo-transparent-gold.png" alt="Logo" class="w-32 h-32 sm:w-96 object-contain"/>
            <!-- Adjust size as needed -->
        </div>
    {/if}

</div>


<!--<script>-->
<!--  import { onNavigate } from '$app/navigation';-->
<!--  import { fade, fly } from 'svelte/transition';-->

<!--  let transitioning = false;-->
<!--  let showLogo = false;-->
<!--  let exitTransition = false;-->

<!--  onNavigate(() => {-->
<!--    transitioning = true;-->
<!--    setTimeout(() => showLogo = true, 1000);-->

<!--    return new Promise(resolve => {-->
<!--      setTimeout(() => {-->
<!--        showLogo = false;-->
<!--        exitTransition = true;-->
<!--        setTimeout(() => {-->
<!--          transitioning = false;-->
<!--          exitTransition = false;-->
<!--          resolve();-->
<!--        }, 300);-->
<!--      }, 2500);-->
<!--    });-->
<!--  });-->
<!--</script>-->

<!--<div-->
<!--  class={`fixed inset-0 transition-[opacity] duration-500 ease-in-out z-50 bg-cover bg-center ${transitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}-->
<!--  style="background-image: url('/images/bg-image.png');"-->
<!--&gt;-->
<!--  <div class="absolute inset-0 bg-black bg-opacity-50"></div> &lt;!&ndash; Optional overlay for better text visibility &ndash;&gt;-->
<!--  {#if showLogo}-->
<!--    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>-->
<!--      &lt;!&ndash; Add your logo here &ndash;&gt;-->
<!--      <img src="/images/logo/logo-transparent-gold.png" alt="Logo" class="w-32 h-32 sm:w-96 object-contain" /> &lt;!&ndash; Adjust size as needed &ndash;&gt;-->
<!--    </div>-->
<!--  {/if}-->
<!--</div>-->
