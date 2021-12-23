<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import NavbarToggle from './NavbarToggle.svelte';

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
    class="container mx-auto flex items-center justify-between flex-wrap py-3"
  >
    <a href="/">
      <img src="/images/logo.svg" alt="Ahmed Mahmoud" />
    </a>

    <NavbarToggle onToggle={toggle} {show} />

    <ul
      on:click={toggle}
      id="navbar-content"
      class="w-full box-border lg:flex lg:items-center lg:w-auto lg:order-2 lg:h-auto lg:pt-0 transition-[height,padding] duration-500 overflow-hidden {show
        ? 'h-48 pt-6'
        : 'h-0 pt-0'}"
    >
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="block py-2 px-4 text-center hover:text-primary"
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
