/**
 * Wrappers of the Ergast API
 */

// Get the winners array
export const getWinners = (year) => 
  fetch(`https://ergast.com/api/f1/${year}/results/1.json`).then(res => res.json());

// Get the winners array
export const getWorldChampion = (year) =>
  fetch(`http://ergast.com/api/f1/${year}/driverStandings/1.json`).then(res => res.json());
