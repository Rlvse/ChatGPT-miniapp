module.exports = {
    wxuuid: function() {
        for (var r = [], t = 0; t < 36; t++) r[t] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return r[14] = "4", r[19] = "0123456789abcdef".substr(3 & r[19] | 8, 1), r[8] = r[13] = r[18] = r[23] = "-", 
        r.join("");
    }
};