var r, n, t, o, e, u, f;

r = function(r, n) {
    return r << n | r >>> 32 - n;
}, n = function(r, n) {
    var t, o, e, u, f;
    return e = 2147483648 & r, u = 2147483648 & n, f = (1073741823 & r) + (1073741823 & n), 
    (t = 1073741824 & r) & (o = 1073741824 & n) ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u;
}, t = function(t, o, e, u, f, i, a) {
    return t = n(t, n(n(function(r, n, t) {
        return r & n | ~r & t;
    }(o, e, u), f), a)), n(r(t, i), o);
}, o = function(t, o, e, u, f, i, a) {
    return t = n(t, n(n(function(r, n, t) {
        return r & t | n & ~t;
    }(o, e, u), f), a)), n(r(t, i), o);
}, e = function(t, o, e, u, f, i, a) {
    return t = n(t, n(n(function(r, n, t) {
        return r ^ n ^ t;
    }(o, e, u), f), a)), n(r(t, i), o);
}, u = function(t, o, e, u, f, i, a) {
    return t = n(t, n(n(function(r, n, t) {
        return n ^ (r | ~t);
    }(o, e, u), f), a)), n(r(t, i), o);
}, f = function(r) {
    var n, t = "", o = "";
    for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
    return t;
}, module.exports.md5 = function(r) {
    var i, a, c, C, g, h, d, m, v, S = Array();
    for (S = function(r) {
        for (var n, t = r.length, o = t + 8, e = 16 * ((o - o % 64) / 64 + 1), u = Array(e - 1), f = 0, i = 0; i < t; ) f = i % 4 * 8, 
        u[n = (i - i % 4) / 4] = u[n] | r.charCodeAt(i) << f, i++;
        return f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | 128 << f, u[e - 2] = t << 3, 
        u[e - 1] = t >>> 29, u;
    }(r = function(r) {
        r = r.replace(/\x0d\x0a/g, "\n");
        for (var n = "", t = 0; t < r.length; t++) {
            var o = r.charCodeAt(t);
            o < 128 ? n += String.fromCharCode(o) : o > 127 && o < 2048 ? (n += String.fromCharCode(o >> 6 | 192), 
            n += String.fromCharCode(63 & o | 128)) : (n += String.fromCharCode(o >> 12 | 224), 
            n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(63 & o | 128));
        }
        return n;
    }(r)), h = 1732584193, d = 4023233417, m = 2562383102, v = 271733878, i = 0; i < S.length; i += 16) a = h, 
    c = d, C = m, g = v, h = t(h, d, m, v, S[i + 0], 7, 3614090360), v = t(v, h, d, m, S[i + 1], 12, 3905402710), 
    m = t(m, v, h, d, S[i + 2], 17, 606105819), d = t(d, m, v, h, S[i + 3], 22, 3250441966), 
    h = t(h, d, m, v, S[i + 4], 7, 4118548399), v = t(v, h, d, m, S[i + 5], 12, 1200080426), 
    m = t(m, v, h, d, S[i + 6], 17, 2821735955), d = t(d, m, v, h, S[i + 7], 22, 4249261313), 
    h = t(h, d, m, v, S[i + 8], 7, 1770035416), v = t(v, h, d, m, S[i + 9], 12, 2336552879), 
    m = t(m, v, h, d, S[i + 10], 17, 4294925233), d = t(d, m, v, h, S[i + 11], 22, 2304563134), 
    h = t(h, d, m, v, S[i + 12], 7, 1804603682), v = t(v, h, d, m, S[i + 13], 12, 4254626195), 
    m = t(m, v, h, d, S[i + 14], 17, 2792965006), d = t(d, m, v, h, S[i + 15], 22, 1236535329), 
    h = o(h, d, m, v, S[i + 1], 5, 4129170786), v = o(v, h, d, m, S[i + 6], 9, 3225465664), 
    m = o(m, v, h, d, S[i + 11], 14, 643717713), d = o(d, m, v, h, S[i + 0], 20, 3921069994), 
    h = o(h, d, m, v, S[i + 5], 5, 3593408605), v = o(v, h, d, m, S[i + 10], 9, 38016083), 
    m = o(m, v, h, d, S[i + 15], 14, 3634488961), d = o(d, m, v, h, S[i + 4], 20, 3889429448), 
    h = o(h, d, m, v, S[i + 9], 5, 568446438), v = o(v, h, d, m, S[i + 14], 9, 3275163606), 
    m = o(m, v, h, d, S[i + 3], 14, 4107603335), d = o(d, m, v, h, S[i + 8], 20, 1163531501), 
    h = o(h, d, m, v, S[i + 13], 5, 2850285829), v = o(v, h, d, m, S[i + 2], 9, 4243563512), 
    m = o(m, v, h, d, S[i + 7], 14, 1735328473), d = o(d, m, v, h, S[i + 12], 20, 2368359562), 
    h = e(h, d, m, v, S[i + 5], 4, 4294588738), v = e(v, h, d, m, S[i + 8], 11, 2272392833), 
    m = e(m, v, h, d, S[i + 11], 16, 1839030562), d = e(d, m, v, h, S[i + 14], 23, 4259657740), 
    h = e(h, d, m, v, S[i + 1], 4, 2763975236), v = e(v, h, d, m, S[i + 4], 11, 1272893353), 
    m = e(m, v, h, d, S[i + 7], 16, 4139469664), d = e(d, m, v, h, S[i + 10], 23, 3200236656), 
    h = e(h, d, m, v, S[i + 13], 4, 681279174), v = e(v, h, d, m, S[i + 0], 11, 3936430074), 
    m = e(m, v, h, d, S[i + 3], 16, 3572445317), d = e(d, m, v, h, S[i + 6], 23, 76029189), 
    h = e(h, d, m, v, S[i + 9], 4, 3654602809), v = e(v, h, d, m, S[i + 12], 11, 3873151461), 
    m = e(m, v, h, d, S[i + 15], 16, 530742520), d = e(d, m, v, h, S[i + 2], 23, 3299628645), 
    h = u(h, d, m, v, S[i + 0], 6, 4096336452), v = u(v, h, d, m, S[i + 7], 10, 1126891415), 
    m = u(m, v, h, d, S[i + 14], 15, 2878612391), d = u(d, m, v, h, S[i + 5], 21, 4237533241), 
    h = u(h, d, m, v, S[i + 12], 6, 1700485571), v = u(v, h, d, m, S[i + 3], 10, 2399980690), 
    m = u(m, v, h, d, S[i + 10], 15, 4293915773), d = u(d, m, v, h, S[i + 1], 21, 2240044497), 
    h = u(h, d, m, v, S[i + 8], 6, 1873313359), v = u(v, h, d, m, S[i + 15], 10, 4264355552), 
    m = u(m, v, h, d, S[i + 6], 15, 2734768916), d = u(d, m, v, h, S[i + 13], 21, 1309151649), 
    h = u(h, d, m, v, S[i + 4], 6, 4149444226), v = u(v, h, d, m, S[i + 11], 10, 3174756917), 
    m = u(m, v, h, d, S[i + 2], 15, 718787259), d = u(d, m, v, h, S[i + 9], 21, 3951481745), 
    h = n(h, a), d = n(d, c), m = n(m, C), v = n(v, g);
    return (f(h) + f(d) + f(m) + f(v)).toLowerCase();
};