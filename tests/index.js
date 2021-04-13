const {test} = require('uvu');
const assert = require('uvu/assert')

const throttleCall = require('../misc/throttle-call')

test('basic', async () => {


    const promise = new Promise(((resolve, reject) => {
        const callback = throttleCall(arg => {
            resolve(arg)
        }, 5)
        callback(1)
        callback(2)
        callback(3)
    }))

    const result = await promise

    assert.is(result, 3)
})

test.run()
