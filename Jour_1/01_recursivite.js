// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
// Un enfant monte un escalier de n marches et peut sauter 1 marche, 2 marches ou 3 marches à la fois. 
// Mettez en œuvre une méthode pour compter le nombre de façons possibles dont l'enfant peut monter les escaliers en courant.

function waysCount(n) {
  if (n === 0) {
    return "ceci n'est pas un escalier";
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else if (n === 3) {
    return 4;
  }
  return waysCount(n - 1) + waysCount(n - 2) + waysCount(n - 3);
}

console.log(waysCount(4)); // 7