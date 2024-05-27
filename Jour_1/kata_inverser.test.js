const inverse = require ('./kata_inverser');

test("vérifie que pas d'argument retourne faux", () => { 
    expect(inverse()). toBe(false); 
  });

  test("vérifie l'orientation horizontale", () => { 
    expect(inverse([[1,2,3],[4,5,6],[7,8,9]], "horizontale")). toStrictEqual([[3,2,1],[6,5,4],[9,8,7]]); 
  });
