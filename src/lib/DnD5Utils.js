const abilityMap = {
  "str": "Strength",
  "dex": "Dexterity",
  "con": "Constitution",
  "int": "Intelligence",
  "wis": "Wisdom",
  "cha": "Charisma"
};

export function abilityName(ability) {
  return abilityMap[ability];
}

export function abilityModifier(value) {
  return Math.floor(value / 2) - 5;
}

export function formatAbilityModifier(value) {
  let sign = "";
  if (value >= 0) {
    sign = "+";
  }

  return `${sign}${value}`;
}