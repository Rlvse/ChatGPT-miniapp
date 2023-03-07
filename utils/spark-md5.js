var t, r;

t = require("../@babel/runtime/helpers/typeof"), r = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(r) {
    return t(r);
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : t(r);
}, function(t) {
    if ("object" === ("undefined" == typeof exports ? "undefined" : r(exports))) module.exports = t(); else if ("function" == typeof define && define.amd) define(t); else {
        var e;
        try {
            e = window;
        } catch (t) {
            e = self;
        }
        e.SparkMD5 = t();
    }
}(function(t) {
    function r(t, r) {
        var e = t[0], n = t[1], f = t[2], i = t[3];
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[0] - 680876936 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[1] - 389564586 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[2] + 606105819 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[3] - 1044525330 | 0) << 22 | n >>> 10) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[4] - 176418897 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[5] + 1200080426 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[6] - 1473231341 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[7] - 45705983 | 0) << 22 | n >>> 10) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[8] + 1770035416 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[9] - 1958414417 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[10] - 42063 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[11] - 1990404162 | 0) << 22 | n >>> 10) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & f | ~n & i) + r[12] + 1804603682 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[13] - 40341101 | 0) << 12 | i >>> 20) + e | 0) & e | ~i & n) + r[14] - 1502002290 | 0) << 17 | f >>> 15) + i | 0) & i | ~f & e) + r[15] + 1236535329 | 0) << 22 | n >>> 10) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[1] - 165796510 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[6] - 1069501632 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[11] + 643717713 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[0] - 373897302 | 0) << 20 | n >>> 12) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[5] - 701558691 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[10] + 38016083 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[15] - 660478335 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[4] - 405537848 | 0) << 20 | n >>> 12) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[9] + 568446438 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[14] - 1019803690 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[3] - 187363961 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[8] + 1163531501 | 0) << 20 | n >>> 12) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n & i | f & ~i) + r[13] - 1444681467 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[2] - 51403784 | 0) << 9 | i >>> 23) + e | 0) & n | e & ~n) + r[7] + 1735328473 | 0) << 14 | f >>> 18) + i | 0) & e | i & ~e) + r[12] - 1926607734 | 0) << 20 | n >>> 12) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[5] - 378558 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[8] - 2022574463 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[11] + 1839030562 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[14] - 35309556 | 0) << 23 | n >>> 9) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[1] - 1530992060 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[4] + 1272893353 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[7] - 155497632 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[10] - 1094730640 | 0) << 23 | n >>> 9) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[13] + 681279174 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[0] - 358537222 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[3] - 722521979 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[6] + 76029189 | 0) << 23 | n >>> 9) + f | 0, 
        n = ((n += ((f = ((f += ((i = ((i += ((e = ((e += (n ^ f ^ i) + r[9] - 640364487 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[12] - 421815835 | 0) << 11 | i >>> 21) + e | 0) ^ e ^ n) + r[15] + 530742520 | 0) << 16 | f >>> 16) + i | 0) ^ i ^ e) + r[2] - 995338651 | 0) << 23 | n >>> 9) + f | 0, 
        n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[0] - 198630844 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[7] + 1126891415 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[14] - 1416354905 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[5] - 57434055 | 0) << 21 | n >>> 11) + f | 0, 
        n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[12] + 1700485571 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[3] - 1894986606 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[10] - 1051523 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[1] - 2054922799 | 0) << 21 | n >>> 11) + f | 0, 
        n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[8] + 1873313359 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[15] - 30611744 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[6] - 1560198380 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[13] + 1309151649 | 0) << 21 | n >>> 11) + f | 0, 
        n = ((n += ((i = ((i += (n ^ ((e = ((e += (f ^ (n | ~i)) + r[4] - 145523070 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[11] - 1120210379 | 0) << 10 | i >>> 22) + e | 0) ^ ((f = ((f += (e ^ (i | ~n)) + r[2] + 718787259 | 0) << 15 | f >>> 17) + i | 0) | ~e)) + r[9] - 343485551 | 0) << 21 | n >>> 11) + f | 0, 
        t[0] = e + t[0] | 0, t[1] = n + t[1] | 0, t[2] = f + t[2] | 0, t[3] = i + t[3] | 0;
    }
    function e(t) {
        var r, e = [];
        for (r = 0; r < 64; r += 4) e[r >> 2] = t.charCodeAt(r) + (t.charCodeAt(r + 1) << 8) + (t.charCodeAt(r + 2) << 16) + (t.charCodeAt(r + 3) << 24);
        return e;
    }
    function n(t) {
        var r, e = [];
        for (r = 0; r < 64; r += 4) e[r >> 2] = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
        return e;
    }
    function f(t) {
        var n, f, i, o, h, u, s = t.length, a = [ 1732584193, -271733879, -1732584194, 271733878 ];
        for (n = 64; n <= s; n += 64) r(a, e(t.substring(n - 64, n)));
        for (f = (t = t.substring(n - 64)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
        n = 0; n < f; n += 1) i[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
        if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (r(a, i), n = 0; n < 16; n += 1) i[n] = 0;
        return o = (o = 8 * s).toString(16).match(/(.*?)(.{0,8})$/), h = parseInt(o[2], 16), 
        u = parseInt(o[1], 16) || 0, i[14] = h, i[15] = u, r(a, i), a;
    }
    function i(t) {
        var e, f, i, o, h, u, s = t.length, a = [ 1732584193, -271733879, -1732584194, 271733878 ];
        for (e = 64; e <= s; e += 64) r(a, n(t.subarray(e - 64, e)));
        for (f = (t = e - 64 < s ? t.subarray(e - 64) : new Uint8Array(0)).length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
        e = 0; e < f; e += 1) i[e >> 2] |= t[e] << (e % 4 << 3);
        if (i[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (r(a, i), e = 0; e < 16; e += 1) i[e] = 0;
        return o = (o = 8 * s).toString(16).match(/(.*?)(.{0,8})$/), h = parseInt(o[2], 16), 
        u = parseInt(o[1], 16) || 0, i[14] = h, i[15] = u, r(a, i), a;
    }
    function o(t) {
        var r, e = "";
        for (r = 0; r < 4; r += 1) e += y[t >> 8 * r + 4 & 15] + y[t >> 8 * r & 15];
        return e;
    }
    function h(t) {
        var r;
        for (r = 0; r < t.length; r += 1) t[r] = o(t[r]);
        return t.join("");
    }
    function u(t) {
        return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t;
    }
    function s(t) {
        var r, e = [], n = t.length;
        for (r = 0; r < n - 1; r += 2) e.push(parseInt(t.substr(r, 2), 16));
        return String.fromCharCode.apply(String, e);
    }
    function a() {
        this.reset();
    }
    var y = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
    return h(f("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
        function r(t, r) {
            return (t = 0 | t || 0) < 0 ? Math.max(t + r, 0) : Math.min(t, r);
        }
        ArrayBuffer.prototype.slice = function(e, n) {
            var f, i, o, h, u = this.byteLength, s = r(e, u), a = u;
            return n !== t && (a = r(n, u)), s > a ? new ArrayBuffer(0) : (f = a - s, i = new ArrayBuffer(f), 
            o = new Uint8Array(i), h = new Uint8Array(this, s, f), o.set(h), i);
        };
    }(), a.prototype.append = function(t) {
        return this.appendBinary(u(t)), this;
    }, a.prototype.appendBinary = function(t) {
        this._buff += t, this._length += t.length;
        var n, f = this._buff.length;
        for (n = 64; n <= f; n += 64) r(this._hash, e(this._buff.substring(n - 64, n)));
        return this._buff = this._buff.substring(n - 64), this;
    }, a.prototype.end = function(t) {
        var r, e, n = this._buff, f = n.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (r = 0; r < f; r += 1) i[r >> 2] |= n.charCodeAt(r) << (r % 4 << 3);
        return this._finish(i, f), e = h(this._hash), t && (e = s(e)), this.reset(), e;
    }, a.prototype.reset = function() {
        return this._buff = "", this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
        this;
    }, a.prototype.getState = function() {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    }, a.prototype.setState = function(t) {
        return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this;
    }, a.prototype.destroy = function() {
        delete this._hash, delete this._buff, delete this._length;
    }, a.prototype._finish = function(t, e) {
        var n, f, i, o = e;
        if (t[o >> 2] |= 128 << (o % 4 << 3), o > 55) for (r(this._hash, t), o = 0; o < 16; o += 1) t[o] = 0;
        n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), f = parseInt(n[2], 16), 
        i = parseInt(n[1], 16) || 0, t[14] = f, t[15] = i, r(this._hash, t);
    }, a.hash = function(t, r) {
        return a.hashBinary(u(t), r);
    }, a.hashBinary = function(t, r) {
        var e = h(f(t));
        return r ? s(e) : e;
    }, a.ArrayBuffer = function() {
        this.reset();
    }, a.ArrayBuffer.prototype.append = function(t) {
        var e, f = function(t, r, e) {
            var n = new Uint8Array(t.byteLength + r.byteLength);
            return n.set(new Uint8Array(t)), n.set(new Uint8Array(r), t.byteLength), n;
        }(this._buff.buffer, t), i = f.length;
        for (this._length += t.byteLength, e = 64; e <= i; e += 64) r(this._hash, n(f.subarray(e - 64, e)));
        return this._buff = e - 64 < i ? new Uint8Array(f.buffer.slice(e - 64)) : new Uint8Array(0), 
        this;
    }, a.ArrayBuffer.prototype.end = function(t) {
        var r, e, n = this._buff, f = n.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        for (r = 0; r < f; r += 1) i[r >> 2] |= n[r] << (r % 4 << 3);
        return this._finish(i, f), e = h(this._hash), t && (e = s(e)), this.reset(), e;
    }, a.ArrayBuffer.prototype.reset = function() {
        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
        this;
    }, a.ArrayBuffer.prototype.getState = function() {
        var t = a.prototype.getState.call(this);
        return t.buff = function(t) {
            return String.fromCharCode.apply(null, new Uint8Array(t));
        }(t.buff), t;
    }, a.ArrayBuffer.prototype.setState = function(t) {
        return t.buff = function(t, r) {
            var e, n = t.length, f = new ArrayBuffer(n), i = new Uint8Array(f);
            for (e = 0; e < n; e += 1) i[e] = t.charCodeAt(e);
            return i;
        }(t.buff), a.prototype.setState.call(this, t);
    }, a.ArrayBuffer.prototype.destroy = a.prototype.destroy, a.ArrayBuffer.prototype._finish = a.prototype._finish, 
    a.ArrayBuffer.hash = function(t, r) {
        var e = h(i(new Uint8Array(t)));
        return r ? s(e) : e;
    }, a;
});