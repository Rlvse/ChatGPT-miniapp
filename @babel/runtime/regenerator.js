var t = require("../../@babel/runtime/helpers/typeof");

!function(r) {
    var e, n = Object.prototype, o = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag", h = "object" == ("undefined" == typeof module ? "undefined" : t(module)), f = r.regeneratorRuntime;
    if (f) h && (module.exports = f); else {
        (f = r.regeneratorRuntime = h ? module.exports : {}).wrap = L;
        var s = "suspendedStart", l = "suspendedYield", p = "executing", y = "completed", d = {}, v = {};
        v[a] = function() {
            return this;
        };
        var g = Object.getPrototypeOf, m = g && g(g(F([])));
        m && m !== n && o.call(m, a) && (v = m);
        var w = _.prototype = E.prototype = Object.create(v);
        b.prototype = w.constructor = _, _.constructor = b, _[u] = b.displayName = "GeneratorFunction", 
        f.isGeneratorFunction = function(t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name));
        }, f.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, u in t || (t[u] = "GeneratorFunction")), 
            t.prototype = Object.create(w), t;
        }, f.awrap = function(t) {
            return {
                __await: t
            };
        }, j(O.prototype), O.prototype[c] = function() {
            return this;
        }, f.AsyncIterator = O, f.async = function(t, r, e, n) {
            var o = new O(L(t, r, e, n));
            return f.isGeneratorFunction(r) ? o : o.next().then(function(t) {
                return t.done ? t.value : o.next();
            });
        }, j(w), w[u] = "Generator", w[a] = function() {
            return this;
        }, w.toString = function() {
            return "[object Generator]";
        }, f.keys = function(t) {
            var r = [];
            for (var e in t) r.push(e);
            return r.reverse(), function e() {
                for (;r.length; ) {
                    var n = r.pop();
                    if (n in t) return e.value = n, e.done = !1, e;
                }
                return e.done = !0, e;
            };
        }, f.values = F, P.prototype = {
            constructor: P,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t) for (var r in this) "t" === r.charAt(0) && o.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var r = this;
                function n(n, o) {
                    return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), 
                    !!o;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i], c = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                        var u = o.call(a, "catchLoc"), h = o.call(a, "finallyLoc");
                        if (u && h) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                        } else if (u) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                        } else {
                            if (!h) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var i = n;
                        break;
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, 
                d) : this.complete(a);
            },
            complete: function(t, r) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), 
                d;
            },
            finish: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), d;
                }
            },
            catch: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                        var n = e.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            N(e);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(t, r, n) {
                return this.delegate = {
                    iterator: F(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), d;
            }
        };
    }
    function L(t, r, e, n) {
        var o = r && r.prototype instanceof E ? r : E, i = Object.create(o.prototype), a = new P(n || []);
        return i._invoke = function(t, r, e) {
            var n = s;
            return function(o, i) {
                if (n === p) throw new Error("Generator is already running");
                if (n === y) {
                    if ("throw" === o) throw i;
                    return S();
                }
                for (e.method = o, e.arg = i; ;) {
                    var a = e.delegate;
                    if (a) {
                        var c = k(a, e);
                        if (c) {
                            if (c === d) continue;
                            return c;
                        }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
                        if (n === s) throw n = y, e.arg;
                        e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    n = p;
                    var u = x(t, r, e);
                    if ("normal" === u.type) {
                        if (n = e.done ? y : l, u.arg === d) continue;
                        return {
                            value: u.arg,
                            done: e.done
                        };
                    }
                    "throw" === u.type && (n = y, e.method = "throw", e.arg = u.arg);
                }
            };
        }(t, e, a), i;
    }
    function x(t, r, e) {
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
    function E() {}
    function b() {}
    function _() {}
    function j(t) {
        [ "next", "throw", "return" ].forEach(function(r) {
            t[r] = function(t) {
                return this._invoke(r, t);
            };
        });
    }
    function O(r) {
        var e;
        this._invoke = function(n, i) {
            function a() {
                return new Promise(function(e, a) {
                    !function e(n, i, a, c) {
                        var u = x(r[n], r, i);
                        if ("throw" !== u.type) {
                            var h = u.arg, f = h.value;
                            return f && "object" == t(f) && o.call(f, "__await") ? Promise.resolve(f.__await).then(function(t) {
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
                    }(n, i, e, a);
                });
            }
            return e = e ? e.then(a, a) : a();
        };
    }
    function k(t, r) {
        var n = t.iterator[r.method];
        if (n === e) {
            if (r.delegate = null, "throw" === r.method) {
                if (t.iterator.return && (r.method = "return", r.arg = e, k(t, r), "throw" === r.method)) return d;
                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return d;
        }
        var o = x(n, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, 
        d;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", 
        r.arg = e), r.delegate = null, d) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
        r.delegate = null, d);
    }
    function G(t) {
        var r = {
            tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), 
        this.tryEntries.push(r);
    }
    function N(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
    }
    function P(t) {
        this.tryEntries = [ {
            tryLoc: "root"
        } ], t.forEach(G, this), this.reset(!0);
    }
    function F(t) {
        if (t) {
            var r = t[a];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var n = -1, i = function r() {
                    for (;++n < t.length; ) if (o.call(t, n)) return r.value = t[n], r.done = !1, r;
                    return r.value = e, r.done = !0, r;
                };
                return i.next = i;
            }
        }
        return {
            next: S
        };
    }
    function S() {
        return {
            value: e,
            done: !0
        };
    }
}(function() {
    return this || "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self;
}() || Function("return this")());