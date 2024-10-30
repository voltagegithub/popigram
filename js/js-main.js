$(".featuredslider .slick-thumbnail .slick-slide").removeClass("d-none");

!function (t, e, n, o) {
    var i = t(e);
    t.fn.lazyload = function (r) {
        var a, c = this, l = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: e,
            data_attribute: "src",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8zwQAAgYBAyKDV6YAAAAASUVORK5CYII="
        };

        function s() {
            var e = 0;
            c.each((function () {
                var n = t(this);
                if (!l.skip_invisible || n.is(":visible")) if (t.abovethetop(this, l) || t.leftofbegin(this, l)) ; else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
                    if (++e > l.failure_limit) return !1
                } else n.trigger("appear"), e = 0
            }))
        }

        return r && (o !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), o !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), t.extend(l, r)), a = l.container === o || l.container === e ? i : t(l.container), 0 === l.event.indexOf("scroll") && a.on(l.event, (function () {
            return s()
        })), this.each((function () {
            var e = this, n = t(e);
            e.loaded = !1, n.attr("src") !== o && !1 !== n.attr("src") || n.is("img") && n.attr("src", l.placeholder), n.one("appear", (function () {
                if (!this.loaded) {
                    if (l.appear) {
                        var o = c.length;
                        l.appear.call(e, o, l)
                    }
                    t("<img />").one("load", (function () {
                        var o = n.attr("data-" + l.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", o) : n.css("background-image", "url('" + o + "')"), n[l.effect](l.effect_speed), e.loaded = !0;
                        var i = t.grep(c, (function (t) {
                            return !t.loaded
                        }));
                        if (c = t(i), l.load) {
                            var r = c.length;
                            l.load.call(e, r, l)
                        }
                    })).attr("src", n.attr("data-" + l.data_attribute))
                }
            })), 0 !== l.event.indexOf("scroll") && n.on(l.event, (function () {
                e.loaded || n.trigger("appear")
            }))
        })), i.on("resize", (function () {
            s()
        })), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.on("pageshow", (function (e) {
            e.originalEvent && e.originalEvent.persisted && c.each((function () {
                t(this).trigger("appear")
            }))
        })), t(n).ready((function () {
            s()
        })), this
    }, t.belowthefold = function (n, r) {
        return (r.container === o || r.container === e ? (e.innerHeight ? e.innerHeight : i.height()) + i.scrollTop() : t(r.container).offset().top + t(r.container).height()) <= t(n).offset().top - r.threshold
    }, t.rightoffold = function (n, r) {
        return (r.container === o || r.container === e ? i.width() + i.scrollLeft() : t(r.container).offset().left + t(r.container).width()) <= t(n).offset().left - r.threshold
    }, t.abovethetop = function (n, r) {
        return (r.container === o || r.container === e ? i.scrollTop() : t(r.container).offset().top) >= t(n).offset().top + r.threshold + t(n).height()
    }, t.leftofbegin = function (n, r) {
        return (r.container === o || r.container === e ? i.scrollLeft() : t(r.container).offset().left) >= t(n).offset().left + r.threshold + t(n).width()
    }, t.inviewport = function (e, n) {
        return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function (e) {
            return t.belowthefold(e, {threshold: 0})
        }, "above-the-top": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-screen": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-screen": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }, "in-viewport": function (e) {
            return t.inviewport(e, {threshold: 0})
        }, "above-the-fold": function (e) {
            return !t.belowthefold(e, {threshold: 0})
        }, "right-of-fold": function (e) {
            return t.rightoffold(e, {threshold: 0})
        }, "left-of-fold": function (e) {
            return !t.rightoffold(e, {threshold: 0})
        }
    })
}(jQuery, window, document), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, (function () {
    return n = {}, t.m = e = [function (t, e) {
        t.exports = function (t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(), i = document.createRange();
                i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString()
            }
            return e
        }
    }, function (t, e) {
        function n() {
        }

        n.prototype = {
            on: function (t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({fn: e, ctx: n}), this
            }, once: function (t, e, n) {
                var o = this;

                function i() {
                    o.off(t, i), e.apply(n, arguments)
                }

                return i._ = e, this.on(t, i, n)
            }, emit: function (t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, i = n.length; o < i; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            }, off: function (t, e) {
                var n = this.e || (this.e = {}), o = n[t], i = [];
                if (o && e) for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                return i.length ? n[t] = i : delete n[t], this
            }
        }, t.exports = n, t.exports.TinyEmitter = n
    }, function (t, e, n) {
        var o = n(3), i = n(4);
        t.exports = function (t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!o.string(e)) throw new TypeError("Second argument must be a String");
            if (!o.fn(n)) throw new TypeError("Third argument must be a Function");
            if (o.node(t)) return f = e, h = n, (d = t).addEventListener(f, h), {
                destroy: function () {
                    d.removeEventListener(f, h)
                }
            };
            if (o.nodeList(t)) return l = t, s = e, u = n, Array.prototype.forEach.call(l, (function (t) {
                t.addEventListener(s, u)
            })), {
                destroy: function () {
                    Array.prototype.forEach.call(l, (function (t) {
                        t.removeEventListener(s, u)
                    }))
                }
            };
            if (o.string(t)) return r = t, a = e, c = n, i(document.body, r, a, c);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var r, a, c, l, s, u, d, f, h
        }
    }, function (t, e) {
        e.node = function (t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, e.nodeList = function (t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
        }, e.string = function (t) {
            return "string" == typeof t || t instanceof String
        }, e.fn = function (t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function (t, e, n) {
        var o = n(5);

        function i(t, e, n, i, r) {
            var a = function (t, e, n, i) {
                return function (n) {
                    n.delegateTarget = o(n.target, e), n.delegateTarget && i.call(t, n)
                }
            }.apply(this, arguments);
            return t.addEventListener(n, a, r), {
                destroy: function () {
                    t.removeEventListener(n, a, r)
                }
            }
        }

        t.exports = function (t, e, n, o, r) {
            return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function (t) {
                return i(t, e, n, o, r)
            })))
        }
    }, function (t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function (t, e) {
            for (; t && 9 !== t.nodeType;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var o = n(0), i = n.n(o), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };

        function a(t) {
            !function (t, e) {
                if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function")
            }(this), this.resolveOptions(t), this.initSelection()
        }

        var c = (function (t, e, n) {
                e && function (t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                }(t.prototype, e)
            }(a, [{
                key: "resolveOptions", value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : {};
                    this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection", value: function () {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake", value: function () {
                    var t = this, e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return t.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = i()(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake", value: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget", value: function () {
                    this.selectedText = i()(this.target), this.copyText()
                }
            }, {
                key: "copyText", value: function () {
                    var t = void 0;
                    try {
                        t = document.execCommand(this.action)
                    } catch (e) {
                        t = !1
                    }
                    this.handleResult(t)
                }
            }, {
                key: "handleResult", value: function (t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection", value: function () {
                    this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFake()
                }
            }, {
                key: "action", set: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : "copy";
                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                }, get: function () {
                    return this._action
                }
            }, {
                key: "target", set: function (t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                }, get: function () {
                    return this._target
                }
            }]), a), l = n(1), s = n.n(l), u = n(2), d = n.n(u),
            f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };

        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        var p = (function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t, enumerable: !1, writable: !0, configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(m, s.a), function (t, e, n) {
            e && h(t.prototype, e), n && h(t, n)
        }(m, [{
            key: "resolveOptions", value: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? t : {};
                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === f(e.container) ? e.container : document.body
            }
        }, {
            key: "listenClick", value: function (t) {
                var e = this;
                this.listener = d()(t, "click", (function (t) {
                    return e.onClick(t)
                }))
            }
        }, {
            key: "onClick", value: function (t) {
                var e = t.delegateTarget || t.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c({
                    action: this.action(e),
                    target: this.target(e),
                    text: this.text(e),
                    container: this.container,
                    trigger: e,
                    emitter: this
                })
            }
        }, {
            key: "defaultAction", value: function (t) {
                return g("action", t)
            }
        }, {
            key: "defaultTarget", value: function (t) {
                var e = g("target", t);
                if (e) return document.querySelector(e)
            }
        }, {
            key: "defaultText", value: function (t) {
                return g("text", t)
            }
        }, {
            key: "destroy", value: function () {
                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
            }
        }], [{
            key: "isSupported", value: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"], n = "string" == typeof e ? [e] : e,
                    o = !!document.queryCommandSupported;
                return n.forEach((function (t) {
                    o = o && !!document.queryCommandSupported(t)
                })), o
            }
        }]), m);

        function m(t, e) {
            !function (t, e) {
                if (!(t instanceof m)) throw new TypeError("Cannot call a class as a function")
            }(this);
            var n = function (t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this));
            return n.resolveOptions(e), n.listenClick(t), n
        }

        function g(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }

        e.default = p
    }], t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: o})
    }, t.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0, value: e
        }), 2 & n && "string" != typeof e) for (var i in e) t.d(o, i, function (t) {
            return e[t]
        }.bind(null, i));
        return o
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, t.p = "", t(t.s = 6).default;

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {i: o, l: !1, exports: {}};
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    var e, n
})), function (t) {
    t.fn.textareamaxrows = function (e) {
        var n = t.extend({
            alert: !1,
            alertmessage: "too many rows and chars",
            maxrows: 20,
            maxcharsinrow: 32,
            usecounter: !1,
            counterelem: "",
            errorclass: "error"
        }, e);
        return t(this).on("paste contextmenu", (function (t) {
            t.preventDefault()
        })), this.each((function (e) {
            t(this).keyup(i), t(this).keydown(o)
        }));

        function o(t) {
            t.keyCode ? t.keyCode : t.which
        }

        function i() {
            var e = t(this).val().split("\n").length;
            e--;
            var o = 0, i = t(this).val().split("\n");
            for (var a in i) {
                var c = parseInt(r(n.maxcharsinrow, i[a]));
                c > 1 && (o += c)
            }
            var l = parseInt(e + o);
            if (l >= n.maxrows) {
                n.alert && alert(n.alertmessage), t(this).addClass(n.errorclass);
                var s = t(this).val().length - 1;
                t(this).val(t(this).val().substr(0, s))
            } else t(this).removeClass(n.errorclass);
            return n.usecounter && "" != n.counterelem && (n.maxrows - l < 0 ? t(n.counterelem).html("0") : t(n.counterelem).html(n.maxrows - l)), !1
        }

        function r(t, e) {
            for (var n = []; e;) {
                if (e.length < t) {
                    n.push(e);
                    break
                }
                n.push(e.substr(0, t)), e = e.substr(t)
            }
            return n.length
        }
    }
}(jQuery);
var clipboard = new ClipboardJS(".clipboard");

function resize() {
    var t = $("header").outerHeight();
    $(".dropdown-menus").css("top", t)
}

resize();

if ($(".selectpicker").length && $(".selectpicker").selectpicker({dropupAuto: !1}), $(".formslide").length && $(".formslide").slick({
    infinite: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
        breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 2}
    }, {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}}]
}), function (t) {
    "use strict";
    var e = function (e) {
        return this.each((function () {
            var n, o, i = t(this), r = i.data(), a = [i], c = this.tagName, l = 0;
            n = t.extend({content: "body", headings: "h1,h2,h3"}, {
                content: r.toc || void 0, headings: r.tocHeadings || void 0
            }, e), o = n.headings.split(","), t(n.content).find(n.headings).attr("id", (function (e, n) {
                return n || function (t) {
                    0 === t.length && (t = "?");
                    for (var e = t.replace(/\s+/g, "_"), n = "", o = 1; null !== document.getElementById(e + n);) n = "_" + o++;
                    return e + n
                }(t(this).text())
            })).each((function () {
                var e = t(this), n = t.map(o, (function (t, n) {
                    return e.is(t) ? n : void 0
                }))[0];
                if (n > l) {
                    var i = a[0].children("li:last")[0];
                    i && a.unshift(t("<" + c + "/>").appendTo(i))
                } else a.splice(0, Math.min(l - n, Math.max(a.length - 1, 0)));
                t("<li/>").appendTo(a[0]).append(t("<a/>").text(e.text()).attr("href", "#" + e.attr("id"))), l = n
            }))
        }))
    }, n = t.fn.toc;
    t.fn.toc = e, t.fn.toc.noConflict = function () {
        return t.fn.toc = n, this
    }, t((function () {
        e.call(t("[data-toc]"))
    }))
}(window.jQuery), $(".icindekiler").length && $("ul.list").toc({
    content: ".content-body", headings: "h2,h3"
}), $(".icindekilerToggle").click((function () {
    $(this).parent().toggleClass("hide")
})), $(".closeVideoConvert").click((function () {
    $("section.videoconvert").fadeToggle(), $("body").removeClass("active-popup")
})), $("ul.sss > li > a").click((function () {
    $(this).parent().toggleClass("active")
})), $(window).width() < 991 && resize(), $(window).resize((function () {
    resize()
})), $(document).on("click", (function (t) {
    $(t.target).closest(".dropdown-menus .collapse.show, header ul.navbar-nav li.nav-item a.nav-link").length || $(".dropdown-menus .collapse.show").removeClass("show") && $("header a.nav-link:not(.collapsed)").addClass("collapsed"), $(t.target).closest("section.newSocial").length || $("section.newSocial").removeClass("active"), $(t.target).closest("section.mobilemenu, .btn-menu").length || $("section.mobilemenu").fadeOut()
})), $(window).width() < 991 && $(".cover .scrollm").length) {
    if ($(".cover .menu ul li.active").length) {
        let t = $(".cover .menu ul li.active").position().left;
        t -= 20, $(".scrollm ul").scrollLeft(t)
    }
}

$('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

if ($(window).width() < 991 && $("section.servicemenu .bg").length) {
    if ($("section.servicemenu .bg ul.nav li a.active").length) {
        let t = $("section.servicemenu .bg ul.nav li a.active").position().left;
        t -= 20, $("section.servicemenu .bg ul.nav").scrollLeft(t)
    }
}

let bestcontents = $(".bestcontents .slick").slick({
    infinite: 1, slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: false,
});

$(".blogmenu button.toggleMenu").click((function () {
    $(".blogmenu ul.nav").toggleClass("active");
}));

$(document).on("click", ".shareToggle", function () {
    $(this).parent().find("a.share").toggleClass("active");
    $(this).find("i").toggleClass("ri-share-forward-fill").toggleClass("ri-close-fill");

    // window width 576px altında
    if ($(window).width() < 576) {
        $(".post .box .top > div:first-child").toggleClass("d-none");
    }
});

$(document).on("change", ".post .box .comments .sendcomment .switch input", function () {
    let input = $(this).parent().parent().parent().find("input");
    let val = input.val();
    if ($(this).is(":checked")) {
        val = val.split(" ");
        $.each(val, function (index, value) {
            val[index] = value.substr(0, 1) + "*".repeat(value.length - 1);
        });
        val = val.join(" ");
        input.val(val);
    } else {
        input.val(input.attr("data-original"));
    }
});

$(document).on("change", ".post .box .comments .sendcomment input.form-control", function () {
    $(this).attr("data-original", $(this).val());
});

function sozlesmeOnayla() {
    $("input#flexCheckChecked").prop("checked", !0)
}

$(".clipboard").click((function () {
    Swal.fire({
        icon: "success",
        title: lang_success,
        text: lang_copy,
        toast: !0,
        position: "top-right",
        showConfirmButton: !1,
        timer: 4e3
    })
}))

if ($(document).on("click", (function (t) {

})), $(".chooseType").click((function () {
    $(".chooseType").removeClass("checked"), $(this).toggleClass("checked");
    var t = $(this).attr("data-div");
    $(".chtab").addClass("d-none"), $("#" + t).removeClass("d-none")
})), $("section.newSocial").click((function () {
    $(this).toggleClass("active")
})), jQuery("img.imgtosvg").each((function () {
    var t = jQuery(this), e = t.attr("id"), n = t.attr("class"), o = t.attr("src");
    jQuery.get(o, (function (o) {
        var i = jQuery(o).find("svg");
        void 0 !== e && (i = i.attr("id", e)), void 0 !== n && (i = i.attr("class", n + " replaced-svg")), i = i.removeAttr("xmlns:a"), t.replaceWith(i)
    }), "xml")
})), $(".chooseBank").click((function () {
    var t = $(this).attr("data-payment-id"), e = $(this).attr("data-comission"), n = $(this).attr("data-money"),
        o = $(this).attr("data-api");
    $("input.payment_id").val(t), $(".chooseBank").removeClass("checked"), $(this).toggleClass("checked"), "kriptopay" == o ? ($(".coinToggle").removeClass("d-none"), $.ajax({
        url: "/ajax/get_coins", type: "POST", success: function (t) {
            var e = "";
            $.each(t.result, (function (t, n) {
                1 == n.status && "ETH" != n.code && (e += '<option value="' + n.code + '">' + n.name + "</option>")
            })), $("select.coinlist").html(e)
        }
    })) : $(".coinToggle").addClass("d-none"), $.ajax({
        url: "/ajax/get_cart", type: "POST", data: {id: t}, success: function (t) {
            var o = parseFloat((t.price - t.discount_price) * e).toFixed(2),
                i = (parseFloat(t.price - t.discount_price) + parseFloat(o)).toFixed(2);
            "TL" == n ? ($("span.odeme_komisyonu").html(o + " TL"), $("span.odenecek_tutar").html(i + " TL")) : "USD" == n ? ($("span.odeme_komisyonu").html("$" + o), $("span.odenecek_tutar").html("$" + i)) : ($("span.odeme_komisyonu").html("€" + o), $("span.odenecek_tutar").html("€" + i))
        }
    })
})), $(".toggleCheckOrder").click((function () {
    $("section.checkorder").slideToggle()
})), $("section.mobilemenu button.toggleCheckOrderFast").click((function () {
    $(".body.menu").toggleClass("d-none"), $(".body.checkorder").toggleClass("d-none"), $(this).parent().toggleClass("justify-content-between"), $(this).find("i").toggleClass("ri-arrow-up-s-line").toggleClass("ri-close-fill")
})), $("section.popup").length) {
    let t = $("section.popup .box .head .r li.big").css("border-color");
    $("head").append("<style>section.popup .box .body ul li span.active{background:" + t + "!important;} section.popup .box .body ul li.active{color:" + t + "!important;} section.popup .box .body ul li.active span:before{border-color:" + t + "!important;} section.popup .box .body .progress-bar{background:" + t + "!important;}</style>")
}
if ($("#comments").length) {
    let t = $("#comments").attr("data-max");
    $("#comments").on("keyup", (function () {
        var t = $(this).val().split("\n").length;
        $(this).parent().find(".count").find(".change").html(t)

        let cot = 0;
        var satir = $(this).val().split("\n");
        for (var i = 0; i < t; i++) {
            // satır uzunluğu 50 karakterden fazla ise
            if (satir[i].length > 200) {
                // satırı 50 karakterden fazla olan kısmı kırp
                satir[i] = satir[i].substr(0, 200);
                // satırı textarea içine geri yaz
                $(this).val(satir.join("\n"));
                cot++;
            }
        }
        if (cot > 0) {
            swal.fire("Hata", "Yorum uzunluğu 200 karakterden fazla olamaz. Lütfen 200 karakter olarak düzenleyin.", "error");
        }
    }))
}

function limitLines(obj, e, max) {
    let keynum, lines = obj.value.split('\n').length;

    // IE
    if (window.event) {
        keynum = e.keyCode;
        // Netscape/Firefox/Opera
    } else if (e.which) {
        keynum = e.which;
    }

    if (keynum == 13 && lines == max) {
        return false;
    }
}

function setCookie(t, e, n) {
    var o = new Date;
    o.setTime(o.getTime() + 60 * n * 1e3);
    var i = "expires=" + o.toUTCString();
    document.cookie = t + "=" + e + ";" + i + ";path=/"
}

function getCookie(t) {
    for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
        for (var i = n[o]; " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(e)) return i.substring(e.length, i.length)
    }
    return ""
}

if ($("section.couponcode .box button.close").click((function () {
    $("section.couponcode").fadeOut(), setCookie($("section.couponcode").attr("data-id"), "hide", $("section.couponcode").attr("data-time"))
})), $(document).on("click", (function (t) {
    $(t.target).closest("section.couponcode .box").length || ($("section.couponcode").fadeOut(), setCookie($("section.couponcode").attr("data-id"), "hide", $("section.couponcode").attr("data-time")))
})), $(".couponcode").length) {
    let t = $("section.couponcode").attr("data-id"),
        e = ($("section.couponcode").attr("data-time"), $("section.couponcode").attr("data-waittime"));
    "hide" != getCookie(t) && setTimeout((function () {
        $("section.couponcode").fadeIn()
    }), e)
}
if ($("section.info").length) {
    var a = 0;

    function spanAnimation() {
        var t = $("section.info").offset().top - window.innerHeight;
        0 == a && $(window).scrollTop() > t && ($("span.animation").each((function () {
            var t = $(this), e = t.attr("data-value");
            $({countNum: t.text()}).animate({countNum: e}, {
                duration: 4500, easing: "swing", step: function () {
                    t.text(Math.ceil(this.countNum).toLocaleString("en"))
                }, complete: function () {
                    t.text(Math.ceil(this.countNum).toLocaleString("en"))
                }
            })
        })), a = 1)
    }

    $(window).scroll((function () {
        spanAnimation()
    })), spanAnimation()
}

function checkplace() {
}

$("section.clientmenu button.btn-toggle").click((function () {
    $("section.clientmenu nav").toggleClass("hide"), '<i class="ri-menu-3-fill"></i> ' + lang_menuyu_goster == $(this).html() ? $(this).html('<i class="ri-menu-3-fill"></i> ' + lang_menuyu_gizle) : $(this).html('<i class="ri-menu-3-fill"></i> MENÜYÜ GÖSTER')
})), checkplace(), $(window).resize((function () {
    checkplace()
})), $(".s i").hover((function () {
    $(this).prevAll().addClass("checked-hover"), $(this).nextAll().removeClass("checked-hover")
})), $(".s i").mouseleave((function () {
    $(".s i").removeClass("checked-hover")
})), $(".s i").click((function () {
    var t = $(this).attr("data-star");
    $(this).addClass("checked"), $(this).prevAll().addClass("checked"), $(this).nextAll().removeClass("checked"), $("input.star").val(t)
})), $(window).scroll((function () {
    0 != $(this).scrollTop() && $(this).width() > 993 ? $("#back-to-top").fadeIn("fast") : $("#back-to-top").fadeOut("fast")
})), $("footer .menutitle").click((function () {
    if ($(window).width() < 600) {
        $(this).parent().find("ul.menu").fadeToggle()
    }
})), $(".btn-menu").click((function () {
    $("section.mobilemenu").fadeToggle();
    $(this).find("i").toggleClass("ri-menu-3-line").toggleClass("ri-close-line");
})), $(".toggleSubMenu").click((function () {
    $(this).toggleClass("active"), $(this).find("ul").toggleClass("d-none")
})), $(".btn-quickmenu").click((function () {
    $(".dropdown-menus .dropdown-4").removeClass("show"), $(".dropdown-menus .dropdown-5").toggleClass("show"), $("body").toggleClass("menu-open"), $("section.checkorder").fadeOut(), $(this).toggleClass("active")
})), $("nav.stickybar a").each((function () {
    window.location.href == $(this).attr("href") && $(this).addClass("active")
})), $(".dropdown-notification").click((function () {
    setCookie("last_read_notification_time", now_time, 9999999), $("header .btn-notification span").html("0")
})), $((function () {
    $("img.lazy").lazyload({threshold: 200})
}));
let count = 0;
// window width
var widths = $(window).width();
if (widths <= 576) {
    $("header .dropdown-notification .dropdown-menu ul li").each((function () {
        $(this).attr("data-time") > getCookie("last_read_notification_time") && count++, $("header .btn-notification span").html(count);
        if (count == 0) {
            $("header .btn-notification span").addClass("d-none").css("display", "none");
        }
    }))
} else {
    $("header .dropdown-notification.web .dropdown-menu ul li").each((function () {
        $(this).attr("data-time") > getCookie("last_read_notification_time") && count++, $("header .btn-notification span").html(count);
        if (count == 0) {
            $("header .btn-notification span").addClass("d-none").css("display", "none");
        }
    }))
}

$(".selectpicker").on("keyup change", (function () {
    var t = $("option[value='" + $(this).val() + "']", this).attr("data-type"),
        e = $("option[value='" + $(this).val() + "']", this).attr("data-id");
    if ($("option[value='" + $(this).val() + "']", this).attr("data-id"), "platform" == t && ($("#platform_alt").html('<option data-icon="ri-menu-add-line" value="Kategori Seçiniz">Kategori Seçiniz</option>'), $("#kategori_alt").html('<option data-icon="ri-menu-add-line" value="Paket Seçiniz">Paket Seçiniz</option>'), $.ajax({
        url: "/ajax/get_categories/" + e, type: "GET", success: function (t) {
            $("#platform_alt").html(t), $(".selectpicker").selectpicker("refresh")
        }
    })), "kategori" == t && ($("#kategori_alt").html('<option data-icon="ri-menu-add-line" value="Paket Seçiniz">Paket Seçiniz</option>'), $.ajax({
        url: "/ajax/get_packages/" + e, type: "GET", success: function (t) {
            $("#kategori_alt").html(t), $(".selectpicker").selectpicker("refresh")
        }
    })), "paket" == t) {
        var n = $("option[value='" + $(this).val() + "']", this).attr("data-fee"),
            o = $("option[value='" + $(this).val() + "']", this).attr("data-url");
        $("#hizli-satin-al").attr("href", o), $(".quick .price").html(n)
    } else $("#hizli-satin-al").attr("href", ""), $(".quick .price").html(" ");
    $(".selectpicker").selectpicker("refresh")
}));

$(document).ready(function () {
    $("a[href^='https://']").each(function () {
        if (this.href.indexOf(location.hostname) == -1) {
            $(this).attr('rel', 'nofollow');
        }
    });
});

$("section.notify button.close").click((function () {
    $("section.notify").hide();
    setCookie("notify", "1", 9999999);
}));

if (getCookie("notify") != "1") {
    $("section.notify").show();
}

$("button.btn.btnmore").click((function () {
    $(this).toggleClass("active");
    // toggle text "DAHA FAZLA GÖSTER" and "DAHA AZ GÖSTER"
    $(this).find('span').text() == "DAHA FAZLA GÖSTER" ? $(this).find('span').text("DAHA AZ GÖSTER") : $(this).find('span').text("DAHA FAZLA GÖSTER");
    $("section.services .morett").toggleClass("more");
}));

if ($("section.popup").length > 0) {
    let count = $(".tabarea .item .btn-copy").length;

    // document click
    $(document).on("click", ".tabarea .item .btn-copy", function () {
        $(this).addClass("active");
        $(this).find("i").removeClass("ri-file-copy-line").addClass("ri-check-line");
        $(this).find("span").text("KOPYALANDI");

        let active_count = $(".tabarea .item .btn-copy.active").length;
        if (count == active_count) {
            $(".nextstep").removeAttr("disabled");
        }
    });

    $(document).on("click", ".tabarea button.nextstep:not(:disabled)", function () {
        $("div.tabsystem").fadeOut();
        $(".tab2").fadeOut();
        $("section.popup .box .footer").fadeOut();
        $("section.popup .box .head .username").fadeOut();
        $("section.popup .box .head .name").addClass("mb-0");
        $(".tab3").removeClass("d-none");
        $("section.popup .couponbox").addClass("d-none");
        $("section.popup .freebalance").removeClass("d-none");
    });
}

let blogslick = $(".featuredslider .slick").slick({
    dots: 0,
    arrows: false,
    infinite: 1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".featuredslider .slick-thumbnail",
});

let blogthumbslick = $(".featuredslider .slick-thumbnail").slick({
    dots: 0,
    arrows: false,
    infinite: 1,
    speed: 300,
    slidesToShow: 13,
    slidesToScroll: 1,
    asNavFor: ".featuredslider .slick",
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1400, settings: {
            slidesToShow: 9, slidesToScroll: 1
        }
    }, {
        breakpoint: 992, settings: {
            slidesToShow: 7, slidesToScroll: 1
        }
    }, {
        breakpoint: 600, settings: {
            slidesToShow: 5, slidesToScroll: 1
        }
    }]
});

let infslider = $(".influencers .slick").slick({
    dots: 0, arrows: false, infinite: 1, speed: 300, slidesToShow: 4, slidesToScroll: 1, responsive: [{
        breakpoint: 1400, settings: {
            slidesToShow: 3, slidesToScroll: 1
        }
    }, {
        breakpoint: 992, settings: {
            slidesToShow: 2, slidesToScroll: 1
        }
    }, {
        breakpoint: 600, settings: {
            slidesToShow: 1.5, slidesToScroll: 1
        }
    }]
});

let suggestslider = $(".suggestposts .slick").slick({
    dots: 0, arrows: false, infinite: 1, speed: 300, slidesToShow: 3, slidesToScroll: 1, responsive: [{
        breakpoint: 1400, settings: {
            slidesToShow: 3, slidesToScroll: 1
        }
    }, {
        breakpoint: 992, settings: {
            slidesToShow: 2, slidesToScroll: 1
        }
    }, {
        breakpoint: 600, settings: {
            slidesToShow: 1.5, slidesToScroll: 1
        }
    }]
});

$(".post .box .content .suggestposts .head .btn-arrow.btn-next").click((function () {
    suggestslider.slick("slickNext");
}));

$(".post .box .content .suggestposts .head .btn-arrow.btn-prev").click((function () {
    suggestslider.slick("slickPrev");
}));

$("section.influencers .head .arrow-group button.btn-arrow.btn-next").click((function () {
    infslider.slick("slickNext");
}));

$("section.influencers .head .arrow-group button.btn-arrow.btn-prev").click((function () {
    infslider.slick("slickPrev");
}));

let fenoslick = $("section.fenomen .tabarea .tab.instagram .slider, section.fenomen .tabarea .tab.tiktok .slider, section.fenomen .tabarea .tab.youtube .slider, section.fenomen .tabarea .tab.spotify .slider").slick({
    dots: 0, infinite: 1, speed: 300, slidesToShow: 4, slidesToScroll: 1, responsive: [{
        breakpoint: 1400, settings: {
            slidesToShow: 3, slidesToScroll: 1
        }
    }, {
        breakpoint: 992, settings: {
            slidesToShow: 2, slidesToScroll: 1
        }
    }, {
        breakpoint: 600, settings: {
            slidesToShow: 1, slidesToScroll: 1, centerMode: true,
        }
    }]
});

$("section.fenomen .head ul.tabs li").click((function () {
    $("section.fenomen .head ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $("section.fenomen .tabarea .tab").removeClass("active");
    $("section.fenomen .tabarea .tab." + $(this).attr("data-tab")).addClass("active");
    fenoslick.slick("setPosition");
}));

// document click
$(document).on("click", ".posts .item", function () {
    $(".bayimodal .modal-dialog .modal-content .modal-body .discount").show();
    $(this).toggleClass("checked");
    if ($(this).hasClass("checked")) {
        let img_url = $(this).attr("data-url");
        $(this).append("<input type='hidden' name='post_url[]' value='" + img_url + "' />");
    } else {
        $(this).find("input").remove();
    }
    let count = $(".posts .item.checked").length;
    let price = $(".bayimodal .modal-dialog .modal-content .modal-body .price").attr("data-price");
    let price_val = parseFloat(price.replace(",", "."));

    if (count > 0) {
        $(".bayimodal .modal-dialog .modal-content .modal-body .price").text((price_val * count).toFixed(2).replace(".", ",") + " TL");
        $(".bayimodal .modal-dialog .modal-content .modal-body .btn-next").removeAttr("disabled");
    } else {
        $(".bayimodal .modal-dialog .modal-content .modal-body .price").text("0 TL");
        $(".bayimodal .modal-dialog .modal-content .modal-body .discount").hide();
        $(".bayimodal .modal-dialog .modal-content .modal-body .btn-next").attr("disabled", "disabled");
    }
});

$("header ul.navbar-nav li.nav-item a.nav-link.dropdown-toggle").hover(function () {
    $("header ul.navbar-nav li.nav-item a.nav-link.dropdown-toggle").not(this).addClass("collapsed");
    $(this).removeClass("collapsed");
    let href = $(this).attr("href");
    $(".dropdown-menus .collapse").removeClass("show");
    $(href).addClass("show");
    $("main, footer, section.info").addClass("blur");
});

$(".tsw").mouseleave(function () {
    $("header ul.navbar-nav li.nav-item a.nav-link.dropdown-toggle").addClass("collapsed");
    $(".dropdown-menus .collapse").removeClass("show");
    $("main, footer, section.info").removeClass("blur");
});

String.prototype.turkishToUpper = function () {
    var string = this;
    var letters = {"i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I"};
    string = string.replace(/(([iışğüçö]))+/g, function (letter) {
        return letters[letter];
    })
    return string.toUpperCase();
}

String.prototype.turkishToLower = function () {
    var string = this;
    var letters = {"İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç"};
    string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function (letter) {
        return letters[letter];
    })
    return string.toLowerCase();
}

$("section.boxes .box .foot button.btn-submit").click(function (e) {
    e.preventDefault();
    let val = $("section.boxes .box .foot .form-control").val();
    if (val == "") {
        $("section.boxes .box .foot .form-control").addClass("is-invalid");
        $("section.boxes .box .foot .form-control").attr("placeholder", "Devam etmek için lütfen yüklemek istediğiniz bakiyeyi yazın...");
    } else {
        $("section.boxes .box .foot .form-control").removeClass("is-invalid");
        $("section.boxes .box .foot .form-control").addClass("is-valid");

        let gift = 0;
        if (val < 25) {
            gift = 0;
        } else {
            gift = val * 0.1;
        }

        let odenecektutar = parseFloat(val);
        let hediyebakiye = parseFloat(gift);
        let eklenecekbakiye = odenecektutar + hediyebakiye;

        $("#balanceModal #balance").val(odenecektutar);

        $("#balanceModal #odenecektutar").html(odenecektutar.toFixed(2).replace(".", ",") + " TL");
        $("#balanceModal #hediyebakiye").html(hediyebakiye.toFixed(2).replace(".", ",") + " TL");
        $("#balanceModal #eklenecekbakiye").html(eklenecekbakiye.toFixed(2).replace(".", ",") + " TL");

        $("#balanceModal").modal("show");
    }
});

$("section.form .box .body .ingroup i.ri-eye-line, section.form .box .body .ingroup i.ri-eye-fill").click(function () {
    $(this).toggleClass("ri-eye-line");
    $(this).toggleClass("ri-eye-fill");
    let input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

$('.dropdown-menu').on('click', function (e) {
    e.stopPropagation();
});