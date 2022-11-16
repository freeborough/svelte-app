<script>
  import EditableCharacterSheet from "$lib/EditableCharacterSheet.svelte";

  let character = {
    name: "Frodo",
    abilities: {
      str: 8,
      dex: 17,
      con: 15,
      int: 12,
      wis: 10,
      cha: 8
    }
  }
</script>

<EditableCharacterSheet bind:character={character} />