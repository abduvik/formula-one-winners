/**
 * Wrappers of the Ergast API
 */

// Get the winners array
export const getWinners = () => 
  fetch("https://ergast.com/api/f1/2005/results/1.json").then(res => res.json());

// Get the winners array
export const getWorldChampion = () =>
  fetch("http://ergast.com/api/f1/2005/driverStandings/1.json").then(res => res.json());
