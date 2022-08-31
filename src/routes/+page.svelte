<script lang="ts">
    import List from '$lib/components/List.svelte'
    import { updateLists } from '$lib/database'

    export let data
    let newList: string = ''

    let { lists } = data

    $: todoLists = lists.filter((item) => !item.completed)
    $: completedLists = lists.filter((item) => item.completed)
    $: updateLists(lists)

    function createNewList(data) {
        if (!newList) {
            return
        }
        lists = [...lists, { name: newList, completed: false }]
        newList = ''
    }
</script>

<h1 class="mainHeading">Your Lists</h1>
<List data={todoLists} />
<hr />
<List data={completedLists} />

<section class="newItemForm form__container">
    <form class="newItemForm__form" on:submit|preventDefault={createNewList}>
        <div class="form__row">
            <label for="item__name" />
            <div class="form__inputContainer input__container">
                <input id="item__name" type="text" placeholder="Add new list" bind:value={newList} />
            </div>
        </div>

        <div class="newItemForm__buttonGroup buttonGroup">
            <button class="newItemForm__button button"> + </button>
        </div>
    </form>
</section>
