<script lang="ts">
    import '$lib/assets/styles/css/app.css'
    import GoogleFont from '@svelte-web-fonts/google'
    import type { GoogleFontDefinition } from '@svelte-web-fonts/google'

    const fonts: GoogleFontDefinition[] = [
        {
            family: 'Poppins',
            variants: ['100;300;500'],
        },
    ]
</script>

<svelte:head>
    <title>Todo List App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <GoogleFont {fonts} display="swap" />
</svelte:head>

<main>
    <slot />
</main>
