const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

function judgeVegetable(vegetables, metric) {

  return vegetables.reduce((highestRank, person) =>
    person[metric] > highestRank[metric] ? person : highestRank).submitter;
}