const throttleCallback = (callback, ms) => {
    let timeout
    let callArgs
    return (...args) => {
        if (timeout) {
            callArgs = args
            return
        }
        callback(...args)
        timeout = setTimeout(() => {
            timeout = null
            if (callArgs) {
                callback(...callArgs)
            }
        }, ms || 1)
    }
}
module.exports = throttleCallback
