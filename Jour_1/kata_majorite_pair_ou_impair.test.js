const majorite = require('./kata_majorite_pair_ou_impair');

test("vérifie que tableau vide retourne faux", () => { 
    expect(majorite(([]))).toBe(false); 
  });

  test("vérifie que tableau [1] retourne 1", () => { 
    expect(majorite(([1]))).toBe(1); 
  });

  test("vérifie que tableau [1,2,2] retourne 2", () => { 
    expect(majorite(([2,1,2,3]))).toBe(2); 
  });
