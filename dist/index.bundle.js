module.exports = function(e) { var t = {};

    function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) { return e[t] }.bind(null, o)); return r }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 3) }([function(e, t, n) { "use strict";
    n(5).config(); const r = { version: "1.0.0", env: "development", port: process.env.PORT, channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN, channelSecret: process.env.CHANNEL_SECRET };
    t.a = r }, function(e, t) { e.exports = require("express") }, function(e, t, n) { "use strict"; var r = n(1),
        o = n.n(r),
        i = n(0); const c = o.a.Router();
    c.get("/", (e, t) => { t.send(`Hi develop! localhost:${i.a.port}/api`) }); var u = c; const s = n(6),
        a = new(0, n(7).EventEmitter),
        l = new s.Client(i.a),
        p = o()();

    function f(e) { return a.on("message", e => { const t = { type: "text", text: e.message.text };
            l.replyMessage(e.replyToken, t) }), a.emit(e.type, e) }
    p.get("/", (e, t) => { t.send(`Hi develop! server started on  port http://127.0.0.1:${i.a.port} (${i.a.env})`) }), p.use("/api", u), p.post("/callback", s.middleware(i.a), (e, t) => { Promise.all(e.body.events.map(f)).then(e => t.json(e)).catch(e => { console.error(e), t.status(500).end() }) });
    t.a = p }, function(e, t, n) { "use strict";
    n.r(t),
        function(e) { var r = n(0),
                o = n(2);
            e.parent || o.a.listen(r.a.port, () => { console.log(`Hi develop! Server started on  port http://127.0.0.1:${r.a.port} (${r.a.env})`) }), t.default = o.a }.call(this, n(4)(e)) }, function(e, t) { e.exports = function(e) { if (!e.webpackPolyfill) { var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), Object.defineProperty(t, "exports", { enumerable: !0 }), t.webpackPolyfill = 1 } return t } }, function(e, t) { e.exports = require("dotenv") }, function(e, t) { e.exports = require("@line/bot-sdk") }, function(e, t) { e.exports = require("events") }]);