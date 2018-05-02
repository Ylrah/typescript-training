describe('let declarations', () => {

  const noop = (...arg) => { }

  fit('can be used in place of `var`', () => {
    // Declare musician using 'let'
    // Declare isDead using 'let'
    let musician: string = 'John Lennon';
    let isDead = true;
    expect(musician).toBe('John Lennon')
    expect(isDead).toBe(true)
  })

  fit('can modify the value of a `let` variable', () => {
    // Delcare 'releaseName' using 'let', setting the value to 'ES6'
    // Change value of releaseName to be `ES2015`, the new name for ES6
    let releaseName = 'ES6';
    releaseName = 'ES2015';
    expect(releaseName).toBe('ES2015')
  })

  fit('is trapped inside of an `if` statement', () => {
    if (true) {
      // Change to `var` to `let`, so that b is scoped inside of the if-statement
      let b = 1;
    }

    expect(() => noop(this.b)).toThrow()
  })

  fit('cannot redeclare using the same name', () => {
    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (let i = 0; i < 10; i++) {
        // empty loop content
      }
      return this.i
    }

    expect(doLoop).toThrow()
  })

  fit('enable to use block statements', () => {
    // BLOCK STATEMENT
    {
      // Change to `let` declaration
      let d = 2
    }

    expect(() => noop('d', this.d)).toThrow()
  })

  fit('enable to use nested block statements', () => {
    // replace dots (...) below with appropriate `let` statements to make expectations pass

    // NESTED BLOCK STATEMENTS
    let message: string = 'John';
    expect(message).toBe('John')
    {
      let message: string = 'Lennon';
      expect(message).toBe('Lennon')
      {
        let message: string = 'died';
        expect(message).toBe('died')
      }
      expect(message).toBe('Lennon')
    }
    expect(message).toBe('John')
    // how many variables do we declare here?
  })

})
