<script>
  import { abilityName, abilityModifier, formatAbilityModifier } from "$lib/DnD5Utils.js";

  export let abilities;

  function decAbility(ability) {
    abilities[ability]--;
  }

  function incAbility(ability) {
    abilities[ability]++;
  }
</script>

<table>
  {#each Object.entries(abilities) as [ability, value]}
    <tr>
      <td>{abilityName(ability)}</td>
      <td>{value}</td>
      <td>({formatAbilityModifier(abilityModifier(value))})</td>
      <td>
        <button on:click={decAbility(ability)}>-</button>
        <button on:click={incAbility(ability)}>+</button>
      </td>
    </tr>
  {/each}
</table>