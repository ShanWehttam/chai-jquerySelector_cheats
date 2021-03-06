expect( ({ a: { c: 3, d: 4 }} ).a, "Must include this key").to.include.key('d')
expect( { c: 3, d: 4 }, "Must include all these keys").to.include.keys('d', 'c') // can also chain .amy.keys
expect( { c: 3, d: 4 }, "Can include any one of these").to.include.any.keys('d', 'c', 'e', 'f')
expect([1, 2, 3]).to.include.members([1,2,3,3,3,2])
expect([1, 2, 3]).to.have.lengthOf(3).and.include.members([1,2])
 expect([1, 2, 3]).to.have.length(3); // Recommended
expect('foo').to.have.lengthOf(3); // Recommended
expect([{a: 1}, {b: 2}, {c: 3}]).to.deep.include.members([{a: 1}, {b: 2}])
  expect([{a: 1}, {b: 2}]).to.deep.include({a: 1})
  expect({'.a': {'[b]': 'x'}}, "F correct").to.deep.include.property('\\.a.\\[b\\]', 'x');

expect( [ { a: { c: 3, d: 4 }}, {d: 13}, {x: 'x'}    ] , "Must include key value pair (property)").to.deep.include.property('[1].d', 13); // passes
expect([1, 2], "H").to.include(1)
expect('foobar').to.include('foo');
expect([1, 2, 3]).to.include(2);
expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
expect({a: 1}).to.include.property('a', 1);

expect({a: 2, b: 3}).to.eql({a: 2, b: 3})
expect(1.5).to.eql(1.5)
expect({a: 1}).to.eql({a: 1}); // Recommended
//cy.log('.ordered is not working')
//cy.log('Sets and Maps are not supported')
//cy.log(".nested doesnt work!!!")
//cy.log("use .property over .include!!! .include looks for property anyway")
 expect([]).to.be.empty;
 expect('').to.be.empty;
 expect({}).to.be.empty;
// to.eql wraps deep, so use .eql
//expect({a: 1}).to.deep.equal({a: 1}); // without the 'deep', it would treat it as {a: 1} === {a: 1} (strict equality) which is false
//cy.log('I really dont think chai likes Objects or Arrays as values
