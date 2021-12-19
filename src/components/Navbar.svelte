<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let show = false;
  let navbarShadow = false;

  function toggle() {
    show = !show;
  }

  const links = [
    {
      name: 'Home',
      href: '/#home',
    },
    {
      name: 'About',
      href: '/#about',
    },
    {
      name: 'Skills',
      href: '/#skills',
    },
    {
      name: 'Work',
      href: '/#work',
    },
  ];

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbarShadow = true;
    } else {
      navbarShadow = false;
    }
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll);
    }
  });
</script>

<nav
  class="fixed top-0 left-0 w-full px-7 z-10 bg-background transition-shadow"
  class:shadow-lg={navbarShadow}
>
  <div
    class="container mx-auto flex items-center justify-between flex-wrap py-3 px-7"
  >
    <a href="/">
      <img src="/images/logo.svg" alt="Ahmed Mahmoud" />
    </a>

    <button
      on:click={toggle}
      class="lg:hidden h-4 w-8 relative"
      aria-controls="navbar-content"
      aria-expanded={show}
      aria-label="Toggle navigation"
    >
      <span
        class="bg-text w-full h-0.5 block absolute top-0 {show
          ? 'top-dash-shown'
          : 'top-dash-hidden'}"
      />
      <span
        class:scale-x-0={show}
        class="bg-text w-full h-0.5 block absolute transition-transform"
      />
      <span
        class="bg-text w-full h-0.5 block absolute {show
          ? 'bottom-dash-shown'
          : 'bottom-dash-hidden'}"
      />
    </button>

    <ul
      on:click={toggle}
      id="navbar-content"
      class="w-full box-border pt-6 lg:flex lg:items-center lg:w-auto lg:order-2 lg:h-auto lg:pt-0 transition-[height,padding] duration-500 overflow-hidden {show
        ? 'h-48'
        : 'h-0'}"
    >
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="block py-2 px-4 text-center hover:text-primary"
            >{link.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .top-dash-shown {
    animation: show-top-dash forwards 750ms;
  }
  @keyframes show-top-dash {
    50% {
      top: 50%;
      transform: translateY(-50%);
    }
    100% {
      top: 50%;
      transform: rotate(45deg) translateY(-50%);
    }
  }

  .top-dash-hidden {
    animation: hide-top-dash forwards 750ms;
  }
  @keyframes hide-top-dash {
    0% {
      top: 50%;
      transform: rotate(45deg) translateY(-50%);
    }
    50% {
      top: 50%;
      transform: rotate(0) translateY(-50%);
    }
    100% {
      top: 0;
      transform: rotate(0) translateY(0);
    }
  }

  .bottom-dash-shown {
    animation: show-bottom-dash forwards 750ms;
  }
  @keyframes show-bottom-dash {
    0% {
      top: 100%;
    }
    50% {
      top: 50%;
      transform: translateY(-50%);
    }
    100% {
      top: 50%;
      transform: rotate(-45deg) translateY(-50%);
    }
  }

  .bottom-dash-hidden {
    animation: hide-bottom-dash forwards 750ms;
  }
  @keyframes hide-bottom-dash {
    0% {
      top: 50%;
      transform: rotate(-45deg) translateY(-50%);
    }
    50% {
      top: 50%;
      transform: rotate(0) translateY(-50%);
    }
    100% {
      top: 100%;
      transform: rotate(0) translateY(0);
    }
  }
</style>
