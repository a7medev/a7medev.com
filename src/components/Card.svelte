<script>
  export let lighter = false;
</script>

<div
  class="group {lighter
    ? 'bg-background-lighter dark:bg-background-dark'
    : 'bg-background-light dark:bg-background-darker'} border-2 border-transparent relative text-center shadow-none transition-[transform,box-shadow,border] hover:scale-105 hover:border-2 hover:border-accent-dark dark:hover:border-accent-light hover:rotate-1 hover:text-accent-dark dark:hover:text-accent-light hover:shadow-lg hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20 rounded-xl overflow-hidden duration-300"
>
  <slot />
</div>
