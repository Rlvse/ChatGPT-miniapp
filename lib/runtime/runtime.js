var t, r;

t = require("../../@babel/runtime/helpers/typeof"), r = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(r) {
    return t(r);
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : t(r);
}, function(t) {
    function e(t, r, e, n) {
        var i = r && r.prototype instanceof o ? r : o, a = Object.create(i.prototype), c = new p(n || []);
        return a._invoke = h(t, e, c), a;
    }
    function n(t, r, e) {
        try {
            return {
                type: "normal",
                arg: t.call(r, e)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    function o() {}
    function i() {}
    function a() {}
    function c(t) {
        [ "next", "throw", "return" ].forEach(function(r) {
            t[r] = function(t) {
                return this._invoke(r, t);
            };
        });
    }
    function u(t) {
        function e(o, i, a, c) {
            var u = n(t[o], t, i);
            if ("throw" !== u.type) {
                var h = u.arg, f = h.value;
                return f && "object" === (void 0 === f ? "undefined" : r(f)) && g.call(f, "__await") ? Promise.resolve(f.__await).then(function(t) {
                    e("next", t, a, c);
                }, function(t) {
                    e("throw", t, a, c);
                }) : Promise.resolve(f).then(function(t) {
                    h.value = t, a(h);
                }, function(t) {
                    return e("throw", t, a, c);
                });
            }
            c(u.arg);
        }
        var o;
        this._invoke = function(t, r) {
            function n() {
                return new Promise(function(n, o) {
                    e(t, r, n, o);
                });
            }
            return o = o ? o.then(n, n) : n();
        };
    }
    function h(t, r, e) {
        var o = E;
        return function(i, a) {
            if (o === j) throw new Error("Generator is already running");
            if (o === O) {
                if ("throw" === i) throw a;
                return d();
            }
            for (e.method = i, e.arg = a; ;) {
                var c = e.delegate;
                if (c) {
                    var u = f(c, e);
                    if (u) {
                        if (u === S) continue;
                        return u;
                    }
                }
                if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
                    if (o === E) throw o = O, e.arg;
                    e.dispatchException(e.arg);
                } else "return" === e.method && e.abrupt("return", e.arg);
                o = j;
                var h = n(t, r, e);
                if ("normal" === h.type) {
                    if (o = e.done ? O : _, h.arg === S) continue;
                    return {
                        value: h.arg,
                        done: e.done
                    };
                }
                "throw" === h.type && (o = O, e.method = "throw", e.arg = h.arg);
            }
        };
    }
    function f(t, r) {
        var e = t.iterator[r.method];
        if (e === v) {
            if (r.delegate = null, "throw" === r.method) {
                if (t.iterator.return && (r.method = "return", r.arg = v, f(t, r), "throw" === r.method)) return S;
                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return S;
        }
        var o = n(e, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, 
        S;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", 
        r.arg = v), r.delegate = null, S) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
        r.delegate = null, S);
    }
    function l(t) {
        var r = {
            tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), 
        this.tryEntries.push(r);
    }
    function s(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
    }
    function p(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(l, this), this.reset(!0);
    }
    function y(t) {
        if (t) {
            var r = t[L];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var e = -1, n = function r() {
                    for (;++e < t.length; ) if (g.call(t, e)) return r.value = t[e], r.done = !1, r;
                    return r.value = v, r.done = !0, r;
                };
                return n.next = n;
            }
        }
        return {
            next: d
        };
    }
    function d() {
        return {
            value: v,
            done: !0
        };
    }
    var v, m = Object.prototype, g = m.hasOwnProperty, w = "function" == typeof Symbol ? Symbol : {}, L = w.iterator || "@@iterator", b = w.asyncIterator || "@@asyncIterator", x = w.toStringTag || "@@toStringTag";
    t.wrap = e;
    var E = "suspendedStart", _ = "suspendedYield", j = "executing", O = "completed", S = {}, k = {};
    k[L] = function() {
        return this;
    };
    var G = Object.getPrototypeOf, N = G && G(G(y([])));
    N && N !== m && g.call(N, L) && (k = N);
    var P = a.prototype = o.prototype = Object.create(k);
    i.prototype = P.constructor = a, a.constructor = i, a[x] = i.displayName = "GeneratorFunction", 
    t.isGeneratorFunction = function(t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === i || "GeneratorFunction" === (r.displayName || r.name));
    }, t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, x in t || (t[x] = "GeneratorFunction")), 
        t.prototype = Object.create(P), t;
    }, t.awrap = function(t) {
        return {
            __await: t
        };
    }, c(u.prototype), u.prototype[b] = function() {
        return this;
    }, t.AsyncIterator = u, t.async = function(r, n, o, i) {
        var a = new u(e(r, n, o, i));
        return t.isGeneratorFunction(n) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, c(P), P[x] = "Generator", P[L] = function() {
        return this;
    }, P.toString = function() {
        return "[object Generator]";
    }, t.keys = function(t) {
        var r = [];
        for (var e in t) r.push(e);
        return r.reverse(), function e() {
            for (;r.length; ) {
                var n = r.pop();
                if (n in t) return e.value = n, e.done = !1, e;
            }
            return e.done = !0, e;
        };
    }, t.values = y, p.prototype = {
        constructor: p,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, 
            this.method = "next", this.arg = v, this.tryEntries.forEach(s), !t) for (var r in this) "t" === r.charAt(0) && g.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = v);
        },
        stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function(t) {
            function r(r, n) {
                return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = v), 
                !!n;
            }
            if (this.done) throw t;
            for (var e = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n], i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                    var a = g.call(o, "catchLoc"), c = g.call(o, "finallyLoc");
                    if (a && c) {
                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    } else if (a) {
                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    } else {
                        if (!c) throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(t, r) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                    var o = n;
                    break;
                }
            }
            o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
            var i = o ? o.completion : {};
            return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, 
            S) : this.complete(i);
        },
        complete: function(t, r) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
            this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), 
            S;
        },
        finish: function(t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), s(e), S;
            }
        },
        catch: function(t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                    var n = e.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        s(e);
                    }
                    return o;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(t, r, e) {
            return this.delegate = {
                iterator: y(t),
                resultName: r,
                nextLoc: e
            }, "next" === this.method && (this.arg = v), S;
        }
    };
}("object" === ("undefined" == typeof module ? "undefined" : r(module)) ? module.exports : {});