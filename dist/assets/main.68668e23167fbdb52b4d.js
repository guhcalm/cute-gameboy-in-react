;(() => {
  "use strict"
  var a,
    t = {
      188: (a, t, e) => {
        var n,
          r,
          i,
          c,
          o,
          d = e(897),
          l = e(392)
        !(function (a) {
          ;(a[(a.ACTIVATE = 0)] = "ACTIVATE"),
            (a[(a.INACTIVATE = 1)] = "INACTIVATE")
        })(n || (n = {})),
          (function (a) {
            ;(a[(a.LEFT = 0)] = "LEFT"),
              (a[(a.RIGHT = 1)] = "RIGHT"),
              (a[(a.UP = 2)] = "UP"),
              (a[(a.DOWN = 3)] = "DOWN")
          })(r || (r = {})),
          (function (a) {
            ;(a[(a.SELECT = 0)] = "SELECT"), (a[(a.START = 1)] = "START")
          })(i || (i = {})),
          (function (a) {
            ;(a[(a.E = 0)] = "E"), (a[(a.Q = 1)] = "Q")
          })(c || (c = {})),
          (function (a) {
            a[(a.DEFAULT = 0)] = "DEFAULT"
          })(o || (o = {}))
        const u = {
          name: o.DEFAULT,
          palette: {
            surface: { main: "gray", on: "white" },
            background: { main: "white", on: "black" },
            error: { main: "red", on: "black" },
            primary: {
              light: "yellow",
              main: "orange",
              dark: "red",
              on: "black"
            },
            secondary: {
              light: "cyan",
              main: "green",
              dark: "blue",
              on: "black"
            }
          }
        }
        var s = n.INACTIVATE
        const p = {
          status: s,
          mouse: { position: { x: 0, y: 0 } },
          settings: { theme: u },
          keys: {
            startupSwitcher: s,
            directionalPad: { left: s, right: s, up: s, down: s },
            operationalPad: { select: s, start: s },
            actionPad: { q: s, e: s }
          }
        }
        function y(a, t) {
          var e = Object.keys(a)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(a)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(a, t).enumerable
              })),
              e.push.apply(e, n)
          }
          return e
        }
        function P(a, t, e) {
          return (
            t in a
              ? Object.defineProperty(a, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (a[t] = e),
            a
          )
        }
        var k = n,
          f = k.ACTIVATE,
          T = k.INACTIVATE,
          h = r,
          A = h.LEFT,
          v = h.RIGHT,
          b = h.UP,
          w = h.DOWN,
          m = i,
          E = m.SELECT,
          S = m.START,
          g = c,
          O = g.Q,
          I = g.E
        const C = (0, l.oM)({
          name: "gameboy",
          initialState: p,
          reducers: {
            setMousePosition: function (a, t) {
              var e = t.payload
              a.mouse = (function (a) {
                for (var t = 1; t < arguments.length; t++) {
                  var e = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? y(Object(e), !0).forEach(function (t) {
                        P(a, t, e[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(e)
                      )
                    : y(Object(e)).forEach(function (t) {
                        Object.defineProperty(
                          a,
                          t,
                          Object.getOwnPropertyDescriptor(e, t)
                        )
                      })
                }
                return a
              })({}, e)
            },
            activateStatus: function (a) {
              a.status = f
            },
            inactivateStatus: function (a) {
              a.status = T
            },
            clickStartupSwitcher: function (a) {
              a.keys.startupSwitcher = f
            },
            unclickStartupSwitcher: function (a) {
              a.keys.startupSwitcher = f
            },
            clickDirectionalPad: function (a, t) {
              var e = t.payload
              e === A && (a.keys.directionalPad.left = f),
                e === v && (a.keys.directionalPad.right = f),
                e === b && (a.keys.directionalPad.up = f),
                e === w && (a.keys.directionalPad.down = f)
            },
            unclickDirectionalPad: function (a, t) {
              var e = t.payload
              e === A && (a.keys.directionalPad.left = f),
                e === v && (a.keys.directionalPad.right = f),
                e === b && (a.keys.directionalPad.up = f),
                e === w && (a.keys.directionalPad.down = f)
            },
            clickOperationalPad: function (a, t) {
              var e = t.payload
              e === E && (a.keys.operationalPad.select = f),
                e === S && (a.keys.operationalPad.start = f)
            },
            unclickOperationalPad: function (a, t) {
              var e = t.payload
              e === E && (a.keys.operationalPad.select = T),
                e === S && (a.keys.operationalPad.start = T)
            },
            clickActionPad: function (a, t) {
              var e = t.payload
              e === O && (a.keys.actionPad.q = f),
                e === I && (a.keys.actionPad.e = f)
            },
            unclickActionPad: function (a, t) {
              var e = t.payload
              e === O && (a.keys.actionPad.q = T),
                e === I && (a.keys.actionPad.e = T)
            }
          }
        })
        var V = e(671),
          j = e(466),
          D = e(255)
        function x(a, t) {
          var e = Object.keys(a)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(a)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(a, t).enumerable
              })),
              e.push.apply(e, n)
          }
          return e
        }
        function L(a, t, e) {
          return (
            t in a
              ? Object.defineProperty(a, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (a[t] = e),
            a
          )
        }
        const N = (0, l.oM)({
          name: "mouse",
          initialState: { position: { x: 0, y: 0 } },
          reducers: {
            setMousePosition: function (a, t) {
              var e = t.payload
              a.position = (function (a) {
                for (var t = 1; t < arguments.length; t++) {
                  var e = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? x(Object(e), !0).forEach(function (t) {
                        L(a, t, e[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(e)
                      )
                    : x(Object(e)).forEach(function (t) {
                        Object.defineProperty(
                          a,
                          t,
                          Object.getOwnPropertyDescriptor(e, t)
                        )
                      })
                }
                return a
              })({}, e.position)
            }
          }
        })
        const R = function () {
          var a, t, e
          ;(a = (0, D.I0)()),
            (t = N.actions),
            (e = function (e) {
              a(t.setMousePosition({ position: { x: e.x, y: e.y } }))
            }),
            (0, j.useEffect)(function () {
              return (
                window.addEventListener("mousemove", e),
                function () {
                  window.removeEventListener("mousemove", e)
                }
              )
            }, [])
        }
        const q = function () {}
        var U = n.INACTIVATE
        const F = {
          startupSwitcher: U,
          directionalPad: { left: U, right: U, up: U, down: U },
          operationalPad: { select: U, start: U },
          actionPad: { q: U, e: U }
        }
        var G = n,
          H = G.ACTIVATE,
          M = G.INACTIVATE,
          Q = r,
          W = Q.LEFT,
          _ = Q.RIGHT,
          z = Q.UP,
          J = Q.DOWN,
          Y = i,
          Z = Y.SELECT,
          B = Y.START,
          K = c,
          X = K.Q,
          $ = K.E
        const aa = (0, l.oM)({
          name: "keyboard",
          initialState: F,
          reducers: {
            clickStartupSwitcher: function (a) {
              a.startupSwitcher = n.ACTIVATE
            },
            unclickStartupSwitcher: function (a) {
              a.startupSwitcher = n.INACTIVATE
            },
            clickDirectionalPad: function (a, t) {
              var e = t.payload
              e === W && (a.directionalPad.left = H),
                e === _ && (a.directionalPad.right = H),
                e === z && (a.directionalPad.up = H),
                e === J && (a.directionalPad.down = H)
            },
            unclickDirectionalPad: function (a, t) {
              var e = t.payload
              e === W && (a.directionalPad.left = M),
                e === _ && (a.directionalPad.right = M),
                e === z && (a.directionalPad.up = M),
                e === J && (a.directionalPad.down = M)
            },
            clickOperationalPad: function (a, t) {
              var e = t.payload
              e === Z && (a.operationalPad.select = H),
                e === B && (a.operationalPad.start = H)
            },
            unclickOperationalPad: function (a, t) {
              var e = t.payload
              e === Z && (a.operationalPad.select = M),
                e === B && (a.operationalPad.start = M)
            },
            clickActionPad: function (a, t) {
              var e = t.payload
              e === X && (a.actionPad.q = H), e === $ && (a.actionPad.e = H)
            },
            unclickActionPad: function (a, t) {
              var e = t.payload
              e === X && (a.actionPad.q = M), e === $ && (a.actionPad.e = M)
            }
          }
        })
        var ta = e(823)
        const ea = function () {
          return (0, ta.jsx)("div", { children: "hello world" })
        }
        var na = n.INACTIVATE
        const ra = {
          status: na,
          keypad: {
            startupSwitcher: na,
            directionalPad: { left: na, right: na, up: na, down: na },
            operationalPad: { select: na, start: na },
            actionPad: { q: na, e: na }
          }
        }
        var ia = n,
          ca = ia.ACTIVATE,
          oa = ia.INACTIVATE,
          da = r,
          la = da.LEFT,
          ua = da.RIGHT,
          sa = da.UP,
          pa = da.DOWN,
          ya = i,
          Pa = ya.SELECT,
          ka = ya.START,
          fa = c,
          Ta = fa.Q,
          ha = fa.E
        const Aa = (0, l.oM)({
          name: "hardware",
          initialState: ra,
          reducers: {
            activateStatus: function (a) {
              a.status = n.ACTIVATE
            },
            inactivateStatus: function (a) {
              a.status = n.INACTIVATE
            },
            clickStartupSwitcher: function (a) {
              a.keypad.startupSwitcher = n.ACTIVATE
            },
            unclickStartupSwitcher: function (a) {
              a.keypad.startupSwitcher = n.INACTIVATE
            },
            clickDirectionalPad: function (a, t) {
              var e = t.payload
              e === la && (a.keypad.directionalPad.left = ca),
                e === ua && (a.keypad.directionalPad.right = ca),
                e === sa && (a.keypad.directionalPad.up = ca),
                e === pa && (a.keypad.directionalPad.down = ca)
            },
            unclickDirectionalPad: function (a, t) {
              var e = t.payload
              e === la && (a.keypad.directionalPad.left = oa),
                e === ua && (a.keypad.directionalPad.right = oa),
                e === sa && (a.keypad.directionalPad.up = oa),
                e === pa && (a.keypad.directionalPad.down = oa)
            },
            clickOperationalPad: function (a, t) {
              var e = t.payload
              e === Pa && (a.keypad.operationalPad.select = ca),
                e === ka && (a.keypad.operationalPad.start = ca)
            },
            unclickOperationalPad: function (a, t) {
              var e = t.payload
              e === Pa && (a.keypad.operationalPad.select = oa),
                e === ka && (a.keypad.operationalPad.start = oa)
            },
            clickActionPad: function (a, t) {
              var e = t.payload
              e === Ta && (a.keypad.actionPad.q = ca),
                e === ha && (a.keypad.actionPad.e = ca)
            },
            unclickActionPad: function (a, t) {
              var e = t.payload
              e === Ta && (a.keypad.actionPad.q = oa),
                e === ha && (a.keypad.actionPad.e = oa)
            }
          }
        })
        const va = function () {
          return (0, ta.jsx)("div", {})
        }
        var ba = n.INACTIVATE
        const wa = {
          status: ba,
          keypad: {
            startupSwitcher: ba,
            directionalPad: { left: ba, right: ba, up: ba, down: ba },
            operationalPad: { select: ba, start: ba },
            actionPad: { q: ba, e: ba }
          }
        }
        var ma = n,
          Ea = ma.ACTIVATE,
          Sa = ma.INACTIVATE,
          ga = r,
          Oa = ga.LEFT,
          Ia = ga.RIGHT,
          Ca = ga.UP,
          Va = ga.DOWN,
          ja = i,
          Da = ja.SELECT,
          xa = ja.START,
          La = c,
          Na = La.Q,
          Ra = La.E
        const qa = (0, l.oM)({
            name: "system",
            initialState: wa,
            reducers: {
              activateStatus: function (a) {
                a.status = n.ACTIVATE
              },
              inactivateStatus: function (a) {
                a.status = n.INACTIVATE
              },
              clickStartupSwitcher: function (a) {
                a.keypad.startupSwitcher = n.ACTIVATE
              },
              unclickStartupSwitcher: function (a) {
                a.keypad.startupSwitcher = n.INACTIVATE
              },
              clickDirectionalPad: function (a, t) {
                var e = t.payload
                e === Oa && (a.keypad.directionalPad.left = Ea),
                  e === Ia && (a.keypad.directionalPad.right = Ea),
                  e === Ca && (a.keypad.directionalPad.up = Ea),
                  e === Va && (a.keypad.directionalPad.down = Ea)
              },
              unclickDirectionalPad: function (a, t) {
                var e = t.payload
                e === Oa && (a.keypad.directionalPad.left = Sa),
                  e === Ia && (a.keypad.directionalPad.right = Sa),
                  e === Ca && (a.keypad.directionalPad.up = Sa),
                  e === Va && (a.keypad.directionalPad.down = Sa)
              },
              clickOperationalPad: function (a, t) {
                var e = t.payload
                e === Da && (a.keypad.operationalPad.select = Ea),
                  e === xa && (a.keypad.operationalPad.start = Ea)
              },
              unclickOperationalPad: function (a, t) {
                var e = t.payload
                e === Da && (a.keypad.operationalPad.select = Sa),
                  e === xa && (a.keypad.operationalPad.start = Sa)
              },
              clickActionPad: function (a, t) {
                var e = t.payload
                e === Na && (a.keypad.actionPad.q = Ea),
                  e === Ra && (a.keypad.actionPad.e = Ea)
              },
              unclickActionPad: function (a, t) {
                var e = t.payload
                e === Na && (a.keypad.actionPad.q = Sa),
                  e === Ra && (a.keypad.actionPad.e = Sa)
              }
            }
          }),
          Ua = (0, V.UY)({
            mouse: N.reducer,
            keyboard: aa.reducer,
            hardware: Aa.reducer,
            system: qa.reducer
          }),
          Fa = function (a) {
            var t = a.children
            return (0, ta.jsx)(D.zt, { store: Ga, children: t })
          },
          Ga = (0, l.xC)({ reducer: { gameboy: C.reducer, domains: Ua } })
        var Ha,
          Ma = e(549)
        const Qa = (0, Ma.vJ)(
          Ha ||
            ((Wa = [
              "\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body,\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n  }\n"
            ]),
            _a || (_a = Wa.slice(0)),
            (Ha = Object.freeze(
              Object.defineProperties(Wa, { raw: { value: Object.freeze(_a) } })
            )))
        )
        var Wa, _a, za
        const Ja = Ma.ZP.main(
            za ||
              (za = (function (a, t) {
                return (
                  t || (t = a.slice(0)),
                  Object.freeze(
                    Object.defineProperties(a, {
                      raw: { value: Object.freeze(t) }
                    })
                  )
                )
              })([
                "\n  ",
                "\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n"
              ])),
            function (a) {
              var t = a.theme
              return "\n  // surface\n  --surface: "
                .concat(t.palette.surface.main, ";\n  --on-surface: ")
                .concat(
                  t.palette.surface.on,
                  ";\n  // background\n  --background: "
                )
                .concat(t.palette.background.main, ";\n  --on-background: ")
                .concat(t.palette.background.on, ";\n  // error\n  --error: ")
                .concat(t.palette.error.main, ";\n  --on-error: ")
                .concat(t.palette.error.on, ";\n  // primary\n  --primary: ")
                .concat(t.palette.primary.main, ";\n  --primary-on-light: ")
                .concat(t.palette.primary.light, ";\n  --primary-on-dark: ")
                .concat(t.palette.primary.dark, ";\n  --on-primary: ")
                .concat(
                  t.palette.primary.on,
                  ";\n  // secondary\n  --secondary: "
                )
                .concat(t.palette.secondary.main, ";\n  --secondary-on-light: ")
                .concat(t.palette.secondary.light, ";\n  --secondary-on-dark: ")
                .concat(t.palette.secondary.dark, ";\n  --on-primary: ")
                .concat(t.palette.secondary.on, ";\n")
            }
          ),
          Ya = function (a) {
            var t = a.children
            return (0, ta.jsx)(Ja, { theme: u, children: t })
          }
        var Za = function (a) {
            return a.domains.keyboard
          },
          Ba = function (a) {
            return a.domains.hardware.keypad
          },
          Ka = function (a) {
            return a.domains.system.keypad
          },
          Xa = function (a) {
            return a.gameboy.status
          },
          $a = function (a) {
            return a.gameboy.keys
          }
        const at = function (a, t) {
          var e = t.startupSwitcher,
            o = t.directionalPad,
            d = t.operationalPad,
            l = t.actionPad,
            u = (0, D.v9)(Za),
            s = (0, D.v9)(Ba),
            p = (0, D.v9)(Ka)
          ;(0, j.useEffect)(
            function () {
              ;(u.startupSwitcher !== n.ACTIVATE &&
                s.startupSwitcher !== n.ACTIVATE &&
                p.startupSwitcher !== n.ACTIVATE) ||
                (a(e.keyboard()),
                a(e.hardware()),
                a(e.system()),
                a(e.gameboy()))
            },
            [u.startupSwitcher, s.startupSwitcher, p.startupSwitcher]
          ),
            (0, j.useEffect)(
              function () {
                ;(u.directionalPad.left !== n.ACTIVATE &&
                  s.directionalPad.left !== n.ACTIVATE) ||
                  (a(o.keyboard(r.LEFT)),
                  a(o.hardware(r.LEFT)),
                  a(o.system(r.LEFT)),
                  a(o.gameboy(r.LEFT))),
                  (u.directionalPad.right !== n.ACTIVATE &&
                    s.directionalPad.right !== n.ACTIVATE) ||
                    (a(o.keyboard(r.RIGHT)),
                    a(o.hardware(r.RIGHT)),
                    a(o.system(r.RIGHT)),
                    a(o.gameboy(r.RIGHT))),
                  (u.directionalPad.up !== n.ACTIVATE &&
                    s.directionalPad.up !== n.ACTIVATE) ||
                    (a(o.keyboard(r.UP)),
                    a(o.hardware(r.UP)),
                    a(o.system(r.UP)),
                    a(o.gameboy(r.UP))),
                  (u.directionalPad.down !== n.ACTIVATE &&
                    s.directionalPad.down !== n.ACTIVATE) ||
                    (a(o.keyboard(r.DOWN)),
                    a(o.hardware(r.DOWN)),
                    a(o.system(r.DOWN)),
                    a(o.gameboy(r.DOWN)))
              },
              [u.directionalPad, s.directionalPad]
            ),
            (0, j.useEffect)(
              function () {
                ;(u.operationalPad.select !== n.ACTIVATE &&
                  s.operationalPad.select !== n.ACTIVATE) ||
                  (a(d.keyboard(i.SELECT)),
                  a(d.hardware(i.SELECT)),
                  a(d.system(i.SELECT)),
                  a(d.gameboy(i.SELECT))),
                  (u.operationalPad.start !== n.ACTIVATE &&
                    s.operationalPad.start !== n.ACTIVATE) ||
                    (a(d.keyboard(i.START)),
                    a(d.hardware(i.START)),
                    a(d.system(i.START)),
                    a(d.gameboy(i.START)))
              },
              [u.operationalPad, s.operationalPad]
            ),
            (0, j.useEffect)(
              function () {
                ;(u.actionPad.q !== n.ACTIVATE &&
                  s.actionPad.q !== n.ACTIVATE) ||
                  (a(l.keyboard(c.Q)),
                  a(l.hardware(c.Q)),
                  a(l.system(c.Q)),
                  a(l.gameboy(c.Q))),
                  (u.actionPad.e !== n.ACTIVATE &&
                    s.actionPad.e !== n.ACTIVATE) ||
                    (a(l.keyboard(c.E)),
                    a(l.hardware(c.E)),
                    a(l.system(c.E)),
                    a(l.gameboy(c.E)))
              },
              [u.actionPad, s.actionPad]
            )
        }
        const tt = function () {
          var a, t, e
          R(),
            q(),
            (a = (0, D.I0)()),
            (t = C.actions),
            (e = (0, D.v9)(function (a) {
              return a.domains.mouse
            })),
            (0, j.useEffect)(
              function () {
                a(t.setMousePosition(e))
              },
              [e]
            ),
            (function () {
              var a = (0, D.I0)(),
                t = (0, D.v9)(Za),
                e = (0, D.v9)(Ba),
                r = (0, D.v9)(Ka),
                i = (0, D.v9)(Xa),
                c = Aa.actions,
                o = qa.actions,
                d = C.actions
              ;(0, j.useEffect)(
                function () {
                  ;(t.startupSwitcher !== n.ACTIVATE &&
                    e.startupSwitcher !== n.ACTIVATE &&
                    r.startupSwitcher !== n.ACTIVATE) ||
                    (i === n.ACTIVATE
                      ? (a(c.inactivateStatus()),
                        a(o.inactivateStatus()),
                        a(d.inactivateStatus()))
                      : (a(c.activateStatus()),
                        a(o.activateStatus()),
                        a(d.activateStatus())))
                },
                [t.startupSwitcher, e.startupSwitcher, r.startupSwitcher]
              )
            })(),
            (function () {
              var a = (0, D.I0)(),
                t = aa.actions,
                e = Aa.actions,
                n = qa.actions,
                r = C.actions
              at(a, {
                startupSwitcher: {
                  keyboard: t.clickStartupSwitcher,
                  hardware: e.clickStartupSwitcher,
                  system: n.clickStartupSwitcher,
                  gameboy: r.clickStartupSwitcher
                },
                directionalPad: {
                  keyboard: t.clickDirectionalPad,
                  hardware: e.clickDirectionalPad,
                  system: n.clickDirectionalPad,
                  gameboy: r.clickDirectionalPad
                },
                operationalPad: {
                  keyboard: t.clickOperationalPad,
                  hardware: e.clickOperationalPad,
                  system: n.clickOperationalPad,
                  gameboy: r.clickOperationalPad
                },
                actionPad: {
                  keyboard: t.clickActionPad,
                  hardware: e.clickActionPad,
                  system: n.clickActionPad,
                  gameboy: r.clickActionPad
                }
              }),
                at(a, {
                  startupSwitcher: {
                    keyboard: t.unclickStartupSwitcher,
                    hardware: e.unclickStartupSwitcher,
                    system: n.unclickStartupSwitcher,
                    gameboy: r.unclickStartupSwitcher
                  },
                  directionalPad: {
                    keyboard: t.unclickDirectionalPad,
                    hardware: e.unclickDirectionalPad,
                    system: n.unclickDirectionalPad,
                    gameboy: r.unclickDirectionalPad
                  },
                  operationalPad: {
                    keyboard: t.unclickOperationalPad,
                    hardware: e.unclickOperationalPad,
                    system: n.unclickOperationalPad,
                    gameboy: r.unclickOperationalPad
                  },
                  actionPad: {
                    keyboard: t.unclickActionPad,
                    hardware: e.unclickActionPad,
                    system: n.unclickActionPad,
                    gameboy: r.unclickActionPad
                  }
                })
            })()
          var r = (0, D.v9)($a)
          return (
            console.log(r),
            (0, ta.jsxs)(Ya, {
              children: [(0, ta.jsx)(ea, {}), (0, ta.jsx)(va, {})]
            })
          )
        }
        ;(0, d.s)(document.querySelector("#root")).render(
          (0, ta.jsxs)(Fa, {
            children: [(0, ta.jsx)(Qa, {}), (0, ta.jsx)(tt, {})]
          })
        )
      }
    },
    e = {}
  function n(a) {
    var r = e[a]
    if (void 0 !== r) return r.exports
    var i = (e[a] = { exports: {} })
    return t[a](i, i.exports, n), i.exports
  }
  ;(n.m = t),
    (a = []),
    (n.O = (t, e, r, i) => {
      if (!e) {
        var c = 1 / 0
        for (u = 0; u < a.length; u++) {
          for (var [e, r, i] = a[u], o = !0, d = 0; d < e.length; d++)
            (!1 & i || c >= i) && Object.keys(n.O).every((a) => n.O[a](e[d]))
              ? e.splice(d--, 1)
              : ((o = !1), i < c && (c = i))
          if (o) {
            a.splice(u--, 1)
            var l = r()
            void 0 !== l && (t = l)
          }
        }
        return t
      }
      i = i || 0
      for (var u = a.length; u > 0 && a[u - 1][2] > i; u--) a[u] = a[u - 1]
      a[u] = [e, r, i]
    }),
    (n.n = (a) => {
      var t = a && a.__esModule ? () => a.default : () => a
      return n.d(t, { a: t }), t
    }),
    (n.d = (a, t) => {
      for (var e in t)
        n.o(t, e) &&
          !n.o(a, e) &&
          Object.defineProperty(a, e, { enumerable: !0, get: t[e] })
    }),
    (n.o = (a, t) => Object.prototype.hasOwnProperty.call(a, t)),
    (() => {
      var a = { 179: 0 }
      n.O.j = (t) => 0 === a[t]
      var t = (t, e) => {
          var r,
            i,
            [c, o, d] = e,
            l = 0
          if (c.some((t) => 0 !== a[t])) {
            for (r in o) n.o(o, r) && (n.m[r] = o[r])
            if (d) var u = d(n)
          }
          for (t && t(e); l < c.length; l++)
            (i = c[l]), n.o(a, i) && a[i] && a[i][0](), (a[i] = 0)
          return n.O(u)
        },
        e = (self.webpackChunk_guhcalm_cute_gameboy =
          self.webpackChunk_guhcalm_cute_gameboy || [])
      e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)))
    })()
  var r = n.O(void 0, [977], () => n(188))
  r = n.O(r)
})()
