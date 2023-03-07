function n(n, t, r, e, o, i, u) {
    try {
        var c = n[i](u), s = c.value;
    } catch (n) {
        return void r(n);
    }
    c.done ? t(s) : Promise.resolve(s).then(e, o);
}

module.exports = function(t) {
    return function() {
        var r = this, e = arguments;
        return new Promise(function(o, i) {
            var u = t.apply(r, e);
            function c(t) {
                n(u, o, i, c, s, "next", t);
            }
            function s(t) {
                n(u, o, i, c, s, "throw", t);
            }
            c(void 0);
        });
    };
};