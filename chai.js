 expect(2, 'A').to.equal(2); // Recommended
 expect({a: 1}, 'B').to.deep.equal({a: 1});
 expect([{a: 1}], 'C').to.deep.include({a: 1});
 expect({x: {a: 1}}, "Online: -- expect({x: {a: 1}}).to.deep.include({x: {a: 1}}) -- DOESN'T WORK").to.deep.include.property('x.a', 1)
 cy.log('I really dont link chai likes Objects or Arrays as values. This does work if you change .include to .equal. The only way to get this to work is to wrap {x: {a: 1}} in an array like [{x: {a: 1}}]')
 expect([{a: 1}], "D").to.have.deep.members([{a: 1}]);
 expect({x: {a: 1}}, "E").to.have.deep.property('x.a', 1);
 expect({a: {b: ['x', 'y']}}, "Online: -- expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]') -- doesnt work").to.have.deep.property('a.b[1]');
 expect({a: {b: ['x', 'y']}}, "Online -- expect({a: {b: ['x', 'y']}}).to.have.deep.property('a.b', ['x', 'y']) -- doesnt work").to.have.deep.property('a.b[1]', 'y');
cy.log(".nested doesnt work!!!")
cy.log("use .property over .include!!! .include looks for property anyway")
cy.log(".include only works if the subject is wrapped in an array")
 expect({a: {b: ['x', 'y']}}, "Online: -- expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'}) -- ").to.deep.include.property('a.b[1]', 'y');
 expect({'.a': {'[b]': 'x'}}, "expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]')").to.have.deep.property('\\.a.\\[b\\]', 'x');

//expect({'.a': {'[b]': 'x'}}, "F incorrect").to.nested.include({'\\.a.\\[b\\]': 'x'});
expect({'.a': {'[b]': 'x'}}, "F correct").to.have.deep.property('\\.a.\\[b\\]', 'x');

 expect({a: 1}, "G").to.have.property('a');

 expect([{a: 1}]).to.deep.include({a: 1});
 // INcorrect expect([1, 2], "H").to.have.ordered.members([1, 2])
 cy.log('.ordered is not working')
 expect([1, 2], "H correct").to.deep.equal([1, 2])
 expect([1, 2], "H").to.have.members([1, 2]) // if not concerned about order
 
 expect({a: 1, b: 2}, "I").to.have.all.keys('a', 'b');
 expect('foo', "J").to.be.a('string');
 expect({a: 1}, "K").to.be.an('object');
 expect(null).to.be.a('null');
 expect(undefined).to.be.an('undefined');
 expect(new Error).to.be.an('error');
 expect(Promise.resolve()).to.be.a('promise');
 expect(new Float32Array).to.be.a('float32array');
 expect(Symbol()).to.be.a('symbol');
 expect([1, 2, 3]).to.be.an('array').that.includes(2);
 expect([]).to.be.an('array').that.is.empty;
 expect('foo').to.be.a('string'); // Recommended
 expect({b: 2}).to.have.a.property('b');
 expect('foobar').to.include('foo');
 expect([1, 2, 3]).to.include(2);
 expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
cy.log('Sets and Maps are not supported')
expect([1, 2, 3]).to.be.an('array').that.includes(2);
expect([{a: 1}]).to.deep.include({a: 1});
expect({x: {a: 1}}).to.deep.include.property("x.a", 1);
expect({a: 1}).to.include({a: 1});
expect({a: {b: 2}}).to.deep.include.property('a.b', 2);
expect({a: {b: ['x', 'y']}}).to.have.deep.property('a.b[1]', 'y')
expect({'.a': {'[b]': 2}}).to.have.deep.property('\\.a.\\[b\\]', 2);
expect({a: {b: [{c: 3}]}}).to.deep.include.property('a.b[0].c', 3);
expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
expect([1, 2, 3]).to.include(3);
expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
expect([1, 2, 3]).to.include.members([1, 2]);
expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
expect({a: 1}).to.include.any.keys('a', 'b');
expect({a: 1}).to.have.any.keys('a', 'b');
expect(1).to.equal(1); // Recommended
expect(true).to.be.true; // Recommended
expect(false).to.be.false; // Recommended
 expect(null).to.be.null; // Recommended
 expect(undefined).to.be.undefined; // Recommended
 expect(true).to.be.true;
 expect(false).to.be.false; // Recommended
 expect(1).to.equal(1); // Recommended
 expect(false).to.be.false;
 expect(true).to.be.true; // Recommended
 expect(1).to.equal(1); // Recommended
 expect(null).to.be.null;
 expect(1).to.equal(1); // Recommended
 expect(undefined).to.be.undefined;
 expect(1).to.equal(1); // Recommended
 expect(NaN).to.be.NaN;
expect('foo').to.equal('foo'); // Recommended
 expect(1).to.equal(1); // Recommended
 expect(1).to.exist; // Not recommended
 expect(0).to.equal(0); // Recommended
 expect(0).to.exist; // Not recommended
 expect(null).to.be.null; // Recommended
 expect(undefined).to.be.undefined; // Recommended
