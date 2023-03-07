var r;

r = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(r) {
        var t, e, a, o, h, c, i, n = "", C = 0;
        for (r = this._utf16to8(r); C < r.length; ) o = (t = r.charCodeAt(C++)) >> 2, h = (3 & t) << 4 | (e = r.charCodeAt(C++)) >> 4, 
        c = (15 & e) << 2 | (a = r.charCodeAt(C++)) >> 6, i = 63 & a, isNaN(e) ? c = i = 64 : isNaN(a) && (i = 64), 
        n = n + this._keyStr.charAt(o) + this._keyStr.charAt(h) + this._keyStr.charAt(c) + this._keyStr.charAt(i);
        return n;
    },
    decode: function(r) {
        var t, e, a, o, h, c, i = "", n = 0;
        for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); n < r.length; ) t = this._keyStr.indexOf(r.charAt(n++)) << 2 | (o = this._keyStr.indexOf(r.charAt(n++))) >> 4, 
        e = (15 & o) << 4 | (h = this._keyStr.indexOf(r.charAt(n++))) >> 2, a = (3 & h) << 6 | (c = this._keyStr.indexOf(r.charAt(n++))), 
        i += String.fromCharCode(t), 64 != h && (i += String.fromCharCode(e)), 64 != c && (i += String.fromCharCode(a));
        return this._utf8to16(i);
    },
    _utf16to8: function(r) {
        var t, e, a, o;
        for (t = "", a = r.length, e = 0; e < a; e++) (o = r.charCodeAt(e)) >= 1 && o <= 127 ? t += r.charAt(e) : o > 2047 ? (t += String.fromCharCode(224 | o >> 12 & 15), 
        t += String.fromCharCode(128 | o >> 6 & 63), t += String.fromCharCode(128 | o >> 0 & 63)) : (t += String.fromCharCode(192 | o >> 6 & 31), 
        t += String.fromCharCode(128 | o >> 0 & 63));
        return t;
    },
    _utf8to16: function(r) {
        var t, e, a, o, h, c;
        for (t = "", a = r.length, e = 0; e < a; ) switch ((o = r.charCodeAt(e++)) >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            t += r.charAt(e - 1);
            break;

          case 12:
          case 13:
            h = r.charCodeAt(e++), t += String.fromCharCode((31 & o) << 6 | 63 & h);
            break;

          case 14:
            h = r.charCodeAt(e++), c = r.charCodeAt(e++), t += String.fromCharCode((15 & o) << 12 | (63 & h) << 6 | (63 & c) << 0);
        }
        return t;
    }
}, module.exports = r;