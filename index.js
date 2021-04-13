const ThrottleCallback = (callback, ms) => {
    let timeout
    let callArgs
    return (...args) => {
        callArgs = args
        if (timeout) {
            return
        }
        timeout = setTimeout(() => {
            timeout = null
            callback(...callArgs)
        }, ms || 1)
    }
}
module.exports = ThrottleCallback
