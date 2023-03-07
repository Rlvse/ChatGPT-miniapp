function o(t) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    })(t);
}

function t(n) {
    return "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? module.exports = t = function(t) {
        return o(t);
    } : module.exports = t = function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t);
    }, t(n);
}

module.exports = t;