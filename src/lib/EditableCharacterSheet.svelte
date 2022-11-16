<script>
  import EditableAbilities from "$lib/EditableAbilities.svelte";

  export let character;

  function logCharacter() {
    console.log(JSON.stringify(character, null, 2));
  }
</script>

<div>
  <input bind:value={character.name} />
  <EditableAbilities bind:abilities={character.abilities} />
</div>