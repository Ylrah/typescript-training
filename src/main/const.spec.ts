describe('const declarations', () => {

  fit('cannot modify the value of a `const` variable', () => {
    // modify `var` below to a `const`
    // then you have to make the `const` unchaged (comment the changing line)

    const releaseName = 'ES6'


    expect(releaseName).toEqual('ES6')
  })

  fit('are perfect for function declarations', () => {
    // modify `var` below to a `const`
    // implement a function to make the tests pass

    function myFn() {
      const myFn: string = '';

      expect(this.myFn()).toEqual('training')
    }
  })

})
