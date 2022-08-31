<script lang="ts">
    import ListItem from '$lib/components/ListItem.svelte'
    export let data
</script>

<ul class="todoList">
    {#each data as item}
        <ListItem data={item} />
    {/each}
</ul>

<style lang="less">
    .todoList {
        @apply flex;
        @apply flex-col;
        @apply w-full;
        @apply gap-2;
    }
</style>
