const {test} = require('uvu');
const assert = require('uvu/assert')

const throttleCallback = require('../index')

test('basic', async () => {

    const promise = new Promise(resolve => {
        const calls = []
        const callback = throttleCallback(arg => {
            calls.push(arg)
            if (calls.length === 3) {
                resolve(calls)
            }

        }, 5)
        callback(1)
        callback(5)
        callback(2)
        setTimeout(() => {
            callback(3)
        }, 10)
    })


    const result = await promise
    assert.equal(result, [1, 2, 3])
})

test.run()
