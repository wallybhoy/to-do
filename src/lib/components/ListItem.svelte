<script lang="ts">
    export let data
</script>

<li class="todoList__item">
    <a href={`/list/${data.id}`} class="todoList__link">
        {data.name}
    </a>
</li>

<style lang="less">
    .todoList {
        &__item {
            @apply border border-neutral-200 rounded-lg shadow-sm;
        }

        &__link {
            @apply block px-3 py-2;
        }
    }
</style>
