  expect( ({ a: { c: 3, d: 4 }} ).a, "Must include this key").to.include.key('d'); // passes
  expect( { c: 3, d: 4 }, "Must include all these keys").to.include.keys('d', 'c'); // passes
  expect( { c: 3, d: 4 }, "Must include all these keys").to.include.any.keys('d', 'c', 'e', 'f'); // passes
  expect([1, 2, 3]).to.include.members([1,2,3]);
  expect([1, 2, 3]).to.have.lengthOf(3).and.include.members([1,2,3]);
