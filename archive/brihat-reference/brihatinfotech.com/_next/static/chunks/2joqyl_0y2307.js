(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 81350, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        a = e.i(22016),
        r = e.i(18566),
        i = e.i(46932),
        n = e.i(88653),
        l = e.i(75254);
    let o = (0, l.default)("Menu", [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ]);
    var c = e.i(37727),
        d = e.i(64659),
        m = e.i(63059),
        x = e.i(72520),
        u = e.i(94983),
        h = e.i(52008),
        p = e.i(72664),
        f = e.i(55711),
        g = e.i(40524),
        b = e.i(26707),
        y = e.i(17923),
        j = e.i(90597),
        v = e.i(32095),
        w = e.i(1928),
        N = e.i(25652),
        k = e.i(15788),
        C = e.i(7486),
        S = e.i(52571),
        E = e.i(61911),
        I = e.i(95740),
        A = e.i(49685),
        _ = e.i(66992),
        M = e.i(55716);
    let L = (0, l.default)("LayoutGrid", [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1",
            key: "nxv5o0"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }]
    ]);
    var P = e.i(21557),
        T = e.i(59544),
        O = e.i(75157),
        B = e.i(57688),
        R = e.i(73375),
        W = e.i(95468),
        H = e.i(31278),
        z = e.i(9165);
    let F = ["SaaS Product", "Mobile App", "Web Platform", "Automation / Workflow", "AI Integration", "Not sure yet"],
        D = ["Under ₹5L", "₹5L – ₹20L", "₹20L – ₹50L", "₹50L+", "Let's discuss"],
        U = ["ASAP", "1 – 3 months", "3 – 6 months", "Still planning"],
        $ = [{
            label: "About you"
        }, {
            label: "The project"
        }, {
            label: "More detail"
        }, {
            label: "Budget"
        }, {
            label: "Timeline"
        }];

    function q({
        open: e,
        onClose: a
    }) {
        let [r, l] = (0, s.useState)(1), [o, d] = (0, s.useState)(1), [m, x] = (0, s.useState)({
            name: "",
            email: "",
            projectType: "",
            description: "",
            budgetRange: "",
            timeline: ""
        }), [u, h] = (0, s.useState)({}), [p, f] = (0, s.useState)(!1), [g, b] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
            e && (l(1), d(1), x({
                name: "",
                email: "",
                projectType: "",
                description: "",
                budgetRange: "",
                timeline: ""
            }), h({}), f(!1), b(!1))
        }, [e]), (0, s.useEffect)(() => {
            if (g) {
                let e = setTimeout(a, 4e3);
                return () => clearTimeout(e)
            }
        }, [g, a]), (0, s.useEffect)(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
            document.body.style.overflow = ""
        }), [e]);
        let y = (e, t) => {
                x(s => ({ ...s,
                    [e]: t
                })), u[e] && h(t => ({ ...t,
                    [e]: ""
                }))
            },
            j = () => {
                let e;
                e = {}, 1 === r && (m.name.trim() || (e.name = "Please enter your name."), m.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email) || (e.email = "Please enter a valid email address.") : e.email = "Please enter your email."), h(e), 0 === Object.keys(e).length && (d(1), l(e => Math.min(e + 1, 5)))
            },
            v = async () => {
                f(!0);
                try {
                    await (0, z.submitProjectInquiry)({
                        name: m.name,
                        email: m.email,
                        projectType: m.projectType || void 0,
                        description: m.description || void 0,
                        budgetRange: m.budgetRange || void 0,
                        timeline: m.timeline || void 0,
                        sourcePage: "header-popup"
                    }), b(!0)
                } catch {
                    b(!0)
                } finally {
                    f(!1)
                }
            };
        return e ? (0, t.jsx)(n.AnimatePresence, {
            children: e && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(i.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .2
                    },
                    className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
                    onClick: a
                }, "backdrop"), (0, t.jsx)(i.motion.div, {
                    initial: {
                        opacity: 0,
                        scale: .95,
                        y: 16
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .95,
                        y: 16
                    },
                    transition: {
                        duration: .25,
                        ease: "easeOut"
                    },
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                    children: (0, t.jsxs)("div", {
                        className: "relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto",
                        children: [(0, t.jsx)("button", {
                            onClick: a,
                            className: "absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500",
                            "aria-label": "Close",
                            children: (0, t.jsx)(c.X, {
                                className: "w-4 h-4"
                            })
                        }), g ? (0, t.jsxs)("div", {
                            className: "flex flex-col items-center justify-center px-8 py-16 text-center",
                            children: [(0, t.jsx)(i.motion.div, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                },
                                className: "w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6",
                                children: (0, t.jsx)(W.CheckCircle2, {
                                    className: "w-8 h-8 text-emerald-500"
                                })
                            }), (0, t.jsx)("h3", {
                                className: "text-2xl font-bold text-primary mb-3",
                                children: "You're all set!"
                            }), (0, t.jsxs)("p", {
                                className: "text-t2 text-sm leading-relaxed max-w-xs",
                                children: ["We'll review your project and get back to you within", " ", (0, t.jsx)("span", {
                                    className: "font-semibold text-primary",
                                    children: "24 hours"
                                }), "."]
                            }), (0, t.jsx)("button", {
                                onClick: a,
                                className: "mt-8 text-xs text-t3 hover:text-primary transition-colors underline underline-offset-2",
                                children: "Close this window"
                            })]
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "w-full h-1 bg-gray-100",
                                children: (0, t.jsx)(i.motion.div, {
                                    className: "h-full bg-accent",
                                    initial: !1,
                                    animate: {
                                        width: `${r/5*100}%`
                                    },
                                    transition: {
                                        duration: .35,
                                        ease: "easeOut"
                                    }
                                })
                            }), (0, t.jsxs)("div", {
                                className: "px-8 pt-7 pb-0 flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [r > 1 && (0, t.jsx)("button", {
                                        onClick: () => {
                                            d(-1), l(e => Math.max(e - 1, 1))
                                        },
                                        className: "w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-t3",
                                        children: (0, t.jsx)(R.ChevronLeft, {
                                            className: "w-4 h-4"
                                        })
                                    }), (0, t.jsxs)("span", {
                                        className: "text-xs font-medium text-t3",
                                        children: ["Step ", r, " of ", 5, " — ", $[r - 1].label]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "flex items-center gap-1.5",
                                    children: Array.from({
                                        length: 5
                                    }).map((e, s) => (0, t.jsx)("div", {
                                        className: `rounded-full transition-all duration-300 ${s+1===r?"w-4 h-2 bg-accent":s+1<r?"w-2 h-2 bg-accent/40":"w-2 h-2 bg-gray-200"}`
                                    }, s))
                                })]
                            }), (0, t.jsx)("div", {
                                className: "px-8 pt-6 pb-8",
                                style: {
                                    minHeight: 280
                                },
                                children: (0, t.jsx)(n.AnimatePresence, {
                                    mode: "wait",
                                    custom: o,
                                    children: (0, t.jsxs)(i.motion.div, {
                                        custom: o,
                                        variants: {
                                            enter: e => ({
                                                x: e > 0 ? 48 : -48,
                                                opacity: 0
                                            }),
                                            center: {
                                                x: 0,
                                                opacity: 1
                                            },
                                            exit: e => ({
                                                x: e > 0 ? -48 : 48,
                                                opacity: 0
                                            })
                                        },
                                        initial: "enter",
                                        animate: "center",
                                        exit: "exit",
                                        transition: {
                                            duration: .22,
                                            ease: "easeInOut"
                                        },
                                        children: [1 === r && (0, t.jsxs)("div", {
                                            className: "space-y-5",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-xl font-bold text-primary leading-snug",
                                                children: "Let's start — what's your name and best email?"
                                            }), (0, t.jsxs)("div", {
                                                children: [(0, t.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Your full name",
                                                    value: m.name,
                                                    onChange: e => y("name", e.target.value),
                                                    className: `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${u.name?"border-red-400 focus:border-red-400":"border-border focus:border-accent"}`,
                                                    autoFocus: !0
                                                }), u.name && (0, t.jsx)("p", {
                                                    className: "mt-1.5 text-xs text-red-500",
                                                    children: u.name
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                children: [(0, t.jsx)("input", {
                                                    type: "email",
                                                    placeholder: "Work email address",
                                                    value: m.email,
                                                    onChange: e => y("email", e.target.value),
                                                    className: `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${u.email?"border-red-400 focus:border-red-400":"border-border focus:border-accent"}`,
                                                    onKeyDown: e => "Enter" === e.key && j()
                                                }), u.email && (0, t.jsx)("p", {
                                                    className: "mt-1.5 text-xs text-red-500",
                                                    children: u.email
                                                })]
                                            })]
                                        }), 2 === r && (0, t.jsxs)("div", {
                                            className: "space-y-5",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-xl font-bold text-primary leading-snug",
                                                children: "What are you looking to build?"
                                            }), (0, t.jsx)("div", {
                                                className: "grid grid-cols-2 gap-2.5",
                                                children: F.map(e => (0, t.jsx)("button", {
                                                    onClick: () => y("projectType", e),
                                                    className: `px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${m.projectType===e?"border-accent bg-accent/5 text-accent":"border-border text-t2 hover:border-accent/40 hover:text-primary"}`,
                                                    children: e
                                                }, e))
                                            })]
                                        }), 3 === r && (0, t.jsxs)("div", {
                                            className: "space-y-5",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-xl font-bold text-primary leading-snug",
                                                children: "Tell us a bit about the project."
                                            }), (0, t.jsx)("p", {
                                                className: "text-sm text-t3 -mt-2",
                                                children: "Even a rough idea helps — a sentence or two is fine."
                                            }), (0, t.jsx)("textarea", {
                                                placeholder: "E.g. We need a multi-tenant SaaS platform for managing field service teams across India, with mobile apps for technicians...",
                                                value: m.description,
                                                onChange: e => y("description", e.target.value),
                                                rows: 5,
                                                className: "w-full px-4 py-3 rounded-xl border border-border focus:border-accent text-sm outline-none transition-colors resize-none",
                                                autoFocus: !0
                                            })]
                                        }), 4 === r && (0, t.jsxs)("div", {
                                            className: "space-y-5",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-xl font-bold text-primary leading-snug",
                                                children: "What's your approximate budget for this?"
                                            }), (0, t.jsx)("div", {
                                                className: "space-y-2.5",
                                                children: D.map(e => (0, t.jsx)("button", {
                                                    onClick: () => y("budgetRange", e),
                                                    className: `w-full px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${m.budgetRange===e?"border-accent bg-accent/5 text-accent":"border-border text-t2 hover:border-accent/40 hover:text-primary"}`,
                                                    children: e
                                                }, e))
                                            })]
                                        }), 5 === r && (0, t.jsxs)("div", {
                                            className: "space-y-5",
                                            children: [(0, t.jsx)("h2", {
                                                className: "text-xl font-bold text-primary leading-snug",
                                                children: "When are you hoping to get started?"
                                            }), (0, t.jsx)("div", {
                                                className: "space-y-2.5",
                                                children: U.map(e => (0, t.jsx)("button", {
                                                    onClick: () => y("timeline", e),
                                                    className: `w-full px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all ${m.timeline===e?"border-accent bg-accent/5 text-accent":"border-border text-t2 hover:border-accent/40 hover:text-primary"}`,
                                                    children: e
                                                }, e))
                                            })]
                                        })]
                                    }, r)
                                })
                            }), (0, t.jsxs)("div", {
                                className: "px-8 pb-8 -mt-2 flex items-center justify-between",
                                children: [(0, t.jsx)("span", {
                                    className: "text-xs text-t3",
                                    children: r < 5 ? "Select an option or skip →" : "Click Submit when ready"
                                }), r < 5 ? (0, t.jsx)("button", {
                                    onClick: j,
                                    className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors",
                                    children: 1 === r || m.projectType || m.description || m.budgetRange || m.timeline ? "Next" : "Skip"
                                }) : (0, t.jsx)("button", {
                                    onClick: v,
                                    disabled: p,
                                    className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-60",
                                    children: p ? (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)(H.Loader2, {
                                            className: "w-4 h-4 animate-spin"
                                        }), "Submitting…"]
                                    }) : "Submit"
                                })]
                            })]
                        })]
                    })
                }, "modal")]
            })
        }) : null
    }
    let G = [{
            label: "Digital Platform Engineering",
            slug: "digital-platform-engineering",
            icon: "Layers"
        }, {
            label: "SaaS Product Engineering",
            slug: "saas-product-engineering",
            icon: "Box"
        }, {
            label: "AI-Enabled Business Systems",
            slug: "ai-enabled-systems",
            icon: "Brain"
        }, {
            label: "Workflow Automation",
            slug: "agentic-workflow-automation",
            icon: "Workflow"
        }, {
            label: "Mobile App Development",
            slug: "mobile-app-development",
            icon: "Smartphone"
        }, {
            label: "Data Intelligence",
            slug: "data-intelligence",
            icon: "BarChart3"
        }],
        Y = [{
            label: "Healthcare",
            slug: "healthcare",
            icon: "Heart"
        }, {
            label: "EdTech",
            slug: "edtech",
            icon: "GraduationCap"
        }, {
            label: "E-Commerce",
            slug: "ecommerce",
            icon: "ShoppingCart"
        }, {
            label: "Fintech",
            slug: "fintech",
            icon: "TrendingUp"
        }, {
            label: "Logistics",
            slug: "logistics",
            icon: "Truck"
        }, {
            label: "Real Estate",
            slug: "real-estate",
            icon: "Building2"
        }],
        J = [{
            label: "About Us",
            href: "/about",
            icon: "Info"
        }, {
            label: "Leadership",
            href: "/leadership",
            icon: "Users"
        }, {
            label: "Team",
            href: "/team",
            icon: "UserCircle"
        }, {
            label: "Partners",
            href: "/partners",
            icon: "Handshake"
        }, {
            label: "Technology Stack",
            href: "/tech-stack",
            icon: "Cpu"
        }, {
            label: "Our Process",
            href: "/process",
            icon: "GitBranch"
        }, {
            label: "Engagement Models",
            href: "/engagement-models",
            icon: "LayoutGrid"
        }],
        X = {
            Layers: h.Layers,
            Box: p.Box,
            Brain: f.Brain,
            Workflow: g.Workflow,
            Smartphone: b.Smartphone,
            BarChart3: y.BarChart3,
            Heart: j.Heart,
            GraduationCap: v.GraduationCap,
            ShoppingCart: w.ShoppingCart,
            TrendingUp: N.TrendingUp,
            Truck: k.Truck,
            Building2: C.Building2,
            Info: S.Info,
            Users: E.Users,
            UserCircle: I.UserCircle,
            Handshake: A.Handshake,
            Cpu: _.Cpu,
            GitBranch: M.GitBranch,
            LayoutGrid: L,
            Calculator: P.Calculator,
            ArrowRight: x.ArrowRight
        };

    function K({
        name: e,
        className: s
    }) {
        let a = X[e];
        return a ? (0, t.jsx)(a, {
            className: s
        }) : (0, t.jsx)(h.Layers, {
            className: s
        })
    }

    function V(e, t) {
        return "/" === t ? "/" === e : e === t || e.startsWith(t + "/")
    }
    e.s(["default", 0, function({
        services: e = [],
        industries: l = []
    }) {
        let h = (0, r.usePathname)(),
            p = e.length > 0 ? e.map(e => ({
                label: e.title,
                slug: e.slug,
                icon: e.icon || "Layers"
            })) : G,
            f = l.length > 0 ? l.map(e => ({
                label: e.title,
                slug: e.slug,
                icon: e.icon || "Building2"
            })) : Y,
            [g, b] = (0, s.useState)(null);
        (0, s.useEffect)(() => {
            (0, z.getCaseStudies)({
                isFeatured: !0,
                limit: 1
            }).then(e => {
                e.length > 0 && b(e[0])
            }).catch(() => {})
        }, []);
        let [y, j] = (0, s.useState)(!1), [v, w] = (0, s.useState)(!1), [N, k] = (0, s.useState)(!1), [C, S] = (0, s.useState)(null), [I, A] = (0, s.useState)(!0), [_, M] = (0, s.useState)(null), L = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            A("true" === localStorage.getItem("announcement_dismissed"))
        }, []), (0, s.useEffect)(() => {
            let e = () => j(window.scrollY > 20);
            return window.addEventListener("scroll", e, {
                passive: !0
            }), () => window.removeEventListener("scroll", e)
        }, []), (0, s.useEffect)(() => {
            S(null), w(!1), M(null)
        }, [h]), (0, s.useEffect)(() => {
            let e = e => {
                "Escape" === e.key && (S(null), w(!1))
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }, []), (0, s.useEffect)(() => () => {
            L.current && clearTimeout(L.current)
        }, []);
        let R = (0, s.useCallback)(() => {
                L.current = setTimeout(() => S(null), 200)
            }, []),
            W = (0, s.useCallback)(() => {
                L.current && clearTimeout(L.current)
            }, []),
            H = (0, s.useCallback)(e => {
                W(), S(e)
            }, [W]),
            F = h.startsWith("/services") || h.startsWith("/industry") || h.startsWith("/staff-augmentation") || h.startsWith("/roi-calculator"),
            D = J.some(e => V(h, e.href));
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("header", {
                className: "fixed top-0 left-0 right-0 z-50",
                children: [!1, (0, t.jsx)("div", {
                    className: (0, O.cn)("h-16 transition-all duration-300 border-b", y ? "bg-surface/95 backdrop-blur-sm border-border shadow-sm" : "bg-surface border-transparent"),
                    children: (0, t.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full",
                        children: [(0, t.jsx)(a.default, {
                            href: "/",
                            className: "flex items-center gap-1 shrink-0 font-medium text-xl",
                            children: (0, t.jsx)(B.default, {
                                src: "/images/common/logo.svg",
                                className: "w-32",
                                priority: !0,
                                width: 200,
                                height: 200,
                                alt: "Brihat Infotech Logo"
                            })
                        }), (0, t.jsxs)("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: [(0, t.jsxs)("button", {
                                className: (0, O.cn)("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors", F || "solutions" === C ? "text-accent font-semibold" : "text-t2 hover:text-primary hover:bg-surface-2"),
                                onMouseEnter: () => H("solutions"),
                                onMouseLeave: R,
                                children: ["Solutions", (0, t.jsx)(d.ChevronDown, {
                                    className: (0, O.cn)("w-4 h-4 transition-transform duration-200", "solutions" === C && "rotate-180")
                                })]
                            }), (0, t.jsx)(a.default, {
                                href: "/products",
                                className: (0, O.cn)("px-3 py-2 text-sm font-medium rounded-lg transition-colors", V(h, "/products") ? "text-accent font-semibold" : "text-t2 hover:text-primary hover:bg-surface-2"),
                                onMouseEnter: () => H(null),
                                children: "Products"
                            }), (0, t.jsx)(a.default, {
                                href: "/case-studies",
                                className: (0, O.cn)("px-3 py-2 text-sm font-medium rounded-lg transition-colors", V(h, "/case-studies") ? "text-accent font-semibold" : "text-t2 hover:text-primary hover:bg-surface-2"),
                                onMouseEnter: () => H(null),
                                children: "Case Studies"
                            }), (0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsxs)("button", {
                                    className: (0, O.cn)("flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors", D || "company" === C ? "text-accent font-semibold" : "text-t2 hover:text-primary hover:bg-surface-2"),
                                    onMouseEnter: () => H("company"),
                                    onMouseLeave: R,
                                    children: ["Company", (0, t.jsx)(d.ChevronDown, {
                                        className: (0, O.cn)("w-4 h-4 transition-transform duration-200", "company" === C && "rotate-180")
                                    })]
                                }), (0, t.jsx)(n.AnimatePresence, {
                                    children: "company" === C && (0, t.jsx)(i.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: -8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -8
                                        },
                                        transition: {
                                            duration: .2,
                                            ease: "easeOut"
                                        },
                                        className: "absolute top-full left-1/2 -translate-x-1/2 w-64 bg-surface border border-border rounded-2xl shadow-xl p-2 mt-1",
                                        onMouseEnter: W,
                                        onMouseLeave: R,
                                        children: J.map(e => (0, t.jsxs)(a.default, {
                                            href: e.href,
                                            className: (0, O.cn)("flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-surface-2 group transition-colors", V(h, e.href) && "bg-surface-2"),
                                            children: [(0, t.jsx)(K, {
                                                name: e.icon,
                                                className: (0, O.cn)("w-4 h-4 transition-colors flex-shrink-0", V(h, e.href) ? "text-accent" : "text-t3 group-hover:text-accent")
                                            }), (0, t.jsx)("span", {
                                                className: (0, O.cn)("text-sm font-medium transition-colors", V(h, e.href) ? "text-primary" : "text-t2 group-hover:text-primary"),
                                                children: e.label
                                            })]
                                        }, e.href))
                                    })
                                })]
                            }), (0, t.jsx)(a.default, {
                                href: "/blogs",
                                className: (0, O.cn)("px-3 py-2 text-sm font-medium rounded-lg transition-colors", V(h, "/blogs") ? "text-accent font-semibold" : "text-t2 hover:text-primary hover:bg-surface-2"),
                                onMouseEnter: () => H(null),
                                children: "Insights"
                            }), (0, t.jsx)(a.default, {
                                href: "/careers/jobs",
                                className: (0, O.cn)("px-3 py-2 text-sm font-medium rounded-lg transition-colors", V(h, "/careers") ? "text-accent font-semibold" : "text-t2 hover:text-primary hover:bg-surface-2"),
                                onMouseEnter: () => H(null),
                                children: "Careers"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "hidden lg:flex items-center gap-3",
                            children: [(0, t.jsx)(a.default, {
                                href: "/contact",
                                className: "text-sm font-medium text-t2 hover:text-primary transition-colors px-3 py-2",
                                children: "Contact"
                            }), (0, t.jsx)(T.default, {
                                size: "sm",
                                onClick: () => k(!0),
                                children: "Discuss Your Project"
                            })]
                        }), (0, t.jsx)("button", {
                            className: "lg:hidden p-2 rounded-lg text-t2 hover:text-primary hover:bg-surface-2 transition-colors",
                            onClick: () => w(!v),
                            "aria-label": "Toggle menu",
                            children: v ? (0, t.jsx)(c.X, {
                                className: "w-6 h-6"
                            }) : (0, t.jsx)(o, {
                                className: "w-6 h-6"
                            })
                        })]
                    })
                }), (0, t.jsx)(n.AnimatePresence, {
                    children: "solutions" === C && (0, t.jsx)(i.motion.div, {
                        initial: {
                            opacity: 0,
                            y: -8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -8
                        },
                        transition: {
                            duration: .2,
                            ease: "easeOut"
                        },
                        className: "absolute top-full left-0 right-0 bg-surface border-b border-border shadow-2xl shadow-primary/10",
                        onMouseEnter: W,
                        onMouseLeave: R,
                        children: (0, t.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-12 gap-8",
                            children: [(0, t.jsxs)("div", {
                                className: "col-span-4",
                                children: [(0, t.jsx)("p", {
                                    className: "text-xs font-semibold uppercase tracking-widest text-t3 mb-4",
                                    children: "Services"
                                }), (0, t.jsx)("ul", {
                                    className: "space-y-0.5",
                                    children: p.map(e => (0, t.jsx)("li", {
                                        children: (0, t.jsxs)(a.default, {
                                            href: `/services/${e.slug}`,
                                            className: "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-2 group transition-colors",
                                            children: [(0, t.jsx)(K, {
                                                name: e.icon,
                                                className: "w-4 h-4 text-t3 group-hover:text-accent transition-colors flex-shrink-0"
                                            }), (0, t.jsx)("span", {
                                                className: "text-sm font-medium text-t2 group-hover:text-primary transition-colors",
                                                children: e.label
                                            })]
                                        })
                                    }, e.slug))
                                }), (0, t.jsxs)(a.default, {
                                    href: "/services",
                                    className: "inline-flex items-center gap-2 text-accent text-sm font-semibold mt-3 px-3 hover:gap-3 transition-all duration-200",
                                    children: ["Browse All Services", (0, t.jsx)(x.ArrowRight, {
                                        className: "w-4 h-4"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "col-span-3",
                                children: [(0, t.jsx)("p", {
                                    className: "text-xs font-semibold uppercase tracking-widest text-t3 mb-4",
                                    children: "Industries"
                                }), (0, t.jsx)("ul", {
                                    className: "space-y-0.5",
                                    children: f.map(e => (0, t.jsx)("li", {
                                        children: (0, t.jsxs)(a.default, {
                                            href: `/industry/${e.slug}`,
                                            className: "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-2 group transition-colors",
                                            children: [(0, t.jsx)(K, {
                                                name: e.icon,
                                                className: "w-4 h-4 text-t3 group-hover:text-accent transition-colors flex-shrink-0"
                                            }), (0, t.jsx)("span", {
                                                className: "text-sm font-medium text-t2 group-hover:text-primary transition-colors",
                                                children: e.label
                                            })]
                                        })
                                    }, e.slug))
                                }), (0, t.jsxs)(a.default, {
                                    href: "/industry",
                                    className: "inline-flex items-center gap-2 text-accent text-sm font-semibold mt-3 px-3 hover:gap-3 transition-all duration-200",
                                    children: ["All Industries", (0, t.jsx)(x.ArrowRight, {
                                        className: "w-4 h-4"
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "col-span-5",
                                children: (0, t.jsxs)("div", {
                                    className: "bg-surface-2 rounded-2xl p-6 h-full flex flex-col",
                                    children: [(0, t.jsx)("p", {
                                        className: "text-xs font-semibold uppercase tracking-widest text-t3 mb-3",
                                        children: "Featured Work"
                                    }), g ? (0, t.jsxs)(a.default, {
                                        href: `/case-studies/${g.slug}`,
                                        className: "block group flex-1",
                                        children: [(0, t.jsx)("span", {
                                            className: "inline-flex items-center text-xs font-medium text-t3 bg-surface border border-border rounded-full px-2.5 py-0.5",
                                            children: g.industry
                                        }), g.results[0] && (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsx)("p", {
                                                className: "font-black font-mono text-3xl text-primary mt-2 leading-none",
                                                children: g.results[0].metric
                                            }), (0, t.jsx)("p", {
                                                className: "text-xs text-t3",
                                                children: g.results[0].label
                                            })]
                                        }), (0, t.jsx)("p", {
                                            className: "text-sm font-medium text-t2 mt-2",
                                            children: g.title
                                        }), (0, t.jsxs)("span", {
                                            className: "text-accent text-xs font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all duration-200",
                                            children: ["Read Case Study", (0, t.jsx)(x.ArrowRight, {
                                                className: "w-3 h-3"
                                            })]
                                        })]
                                    }) : (0, t.jsxs)(a.default, {
                                        href: "/case-studies",
                                        className: "block group flex-1",
                                        children: [(0, t.jsx)("p", {
                                            className: "text-sm font-medium text-t2",
                                            children: "Explore our case studies"
                                        }), (0, t.jsxs)("span", {
                                            className: "text-accent text-xs font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all duration-200",
                                            children: ["View all", (0, t.jsx)(x.ArrowRight, {
                                                className: "w-3 h-3"
                                            })]
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "border-t border-border my-4"
                                    }), (0, t.jsxs)(a.default, {
                                        href: "/staff-augmentation",
                                        className: "block group",
                                        children: [(0, t.jsxs)("span", {
                                            className: "font-semibold text-sm text-primary inline-flex items-center gap-2",
                                            children: [(0, t.jsx)(E.Users, {
                                                className: "w-4 h-4 text-accent flex-shrink-0"
                                            }), "Staff Augmentation"]
                                        }), (0, t.jsx)("p", {
                                            className: "text-xs text-t3 mt-1",
                                            children: "Scale your team in 72 hours"
                                        }), (0, t.jsxs)("span", {
                                            className: "text-accent text-xs font-medium mt-2 flex items-center gap-1 group-hover:gap-2 transition-all duration-200",
                                            children: ["Learn more", (0, t.jsx)(x.ArrowRight, {
                                                className: "w-3 h-3"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })]
            }), (0, t.jsx)(n.AnimatePresence, {
                children: v && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(i.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm",
                        onClick: () => w(!1)
                    }), (0, t.jsxs)(i.motion.div, {
                        initial: {
                            x: "100%"
                        },
                        animate: {
                            x: "0%"
                        },
                        exit: {
                            x: "100%"
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 35
                        },
                        className: "fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-surface shadow-2xl flex flex-col",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center justify-between p-6 border-b border-border flex-shrink-0",
                            children: [(0, t.jsxs)(a.default, {
                                href: "/",
                                onClick: () => w(!1),
                                className: "flex items-center",
                                children: [(0, t.jsx)("span", {
                                    className: "font-black text-xl text-primary",
                                    children: "Brihat"
                                }), (0, t.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-accent inline-block mx-0.5 mb-px"
                                }), (0, t.jsx)("span", {
                                    className: "font-light text-xl text-accent",
                                    children: "Infotech"
                                })]
                            }), (0, t.jsx)("button", {
                                onClick: () => w(!1),
                                className: "p-2 rounded-lg text-t2 hover:text-primary hover:bg-surface-2 transition-colors",
                                children: (0, t.jsx)(c.X, {
                                    className: "w-5 h-5"
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex-1 overflow-y-auto",
                            children: [(0, t.jsxs)("div", {
                                className: "border-b border-border px-6",
                                children: [(0, t.jsxs)("button", {
                                    onClick: () => M("solutions" === _ ? null : "solutions"),
                                    className: "flex items-center justify-between w-full py-4 text-base font-medium text-primary",
                                    children: ["Solutions", (0, t.jsx)(d.ChevronDown, {
                                        className: (0, O.cn)("w-5 h-5 text-t3 transition-transform duration-200", "solutions" === _ && "rotate-180")
                                    })]
                                }), (0, t.jsx)(n.AnimatePresence, {
                                    children: "solutions" === _ && (0, t.jsx)(i.motion.div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: .25
                                        },
                                        className: "overflow-hidden",
                                        children: (0, t.jsxs)("div", {
                                            className: "pb-4 space-y-0.5",
                                            children: [(0, t.jsx)("p", {
                                                className: "text-xs uppercase tracking-widest text-t3 font-semibold pt-1 pb-1.5 pl-2",
                                                children: "Services"
                                            }), p.map(e => (0, t.jsxs)(a.default, {
                                                href: `/services/${e.slug}`,
                                                onClick: () => w(!1),
                                                className: "flex items-center gap-3 py-2.5 px-2 text-sm text-t2 hover:text-accent rounded-xl hover:bg-surface-2 transition-colors",
                                                children: [(0, t.jsx)(K, {
                                                    name: e.icon,
                                                    className: "w-4 h-4 text-t3 flex-shrink-0"
                                                }), e.label]
                                            }, e.slug)), (0, t.jsx)("p", {
                                                className: "text-xs uppercase tracking-widest text-t3 font-semibold pt-3 pb-1.5 pl-2",
                                                children: "Industries"
                                            }), f.map(e => (0, t.jsxs)(a.default, {
                                                href: `/industry/${e.slug}`,
                                                onClick: () => w(!1),
                                                className: "flex items-center gap-3 py-2.5 px-2 text-sm text-t2 hover:text-accent rounded-xl hover:bg-surface-2 transition-colors",
                                                children: [(0, t.jsx)(K, {
                                                    name: e.icon,
                                                    className: "w-4 h-4 text-t3 flex-shrink-0"
                                                }), e.label]
                                            }, e.slug)), (0, t.jsx)("p", {
                                                className: "text-xs uppercase tracking-widest text-t3 font-semibold pt-3 pb-1.5 pl-2",
                                                children: "Other"
                                            }), (0, t.jsxs)(a.default, {
                                                href: "/staff-augmentation",
                                                onClick: () => w(!1),
                                                className: "flex items-center gap-3 py-2.5 px-2 text-sm text-t2 hover:text-accent rounded-xl hover:bg-surface-2 transition-colors",
                                                children: [(0, t.jsx)(E.Users, {
                                                    className: "w-4 h-4 text-t3 flex-shrink-0"
                                                }), "Staff Augmentation"]
                                            }), (0, t.jsxs)(a.default, {
                                                href: "/roi-calculator",
                                                onClick: () => w(!1),
                                                className: "flex items-center gap-3 py-2.5 px-2 text-sm text-t2 hover:text-accent rounded-xl hover:bg-surface-2 transition-colors",
                                                children: [(0, t.jsx)(P.Calculator, {
                                                    className: "w-4 h-4 text-t3 flex-shrink-0"
                                                }), "ROI Calculator"]
                                            })]
                                        })
                                    })
                                })]
                            }), (0, t.jsxs)(a.default, {
                                href: "/products",
                                onClick: () => w(!1),
                                className: "flex items-center justify-between px-6 py-4 border-b border-border text-base font-medium text-primary hover:text-accent transition-colors",
                                children: ["Products", (0, t.jsx)(m.ChevronRight, {
                                    className: "w-5 h-5 text-t3"
                                })]
                            }), (0, t.jsxs)(a.default, {
                                href: "/case-studies",
                                onClick: () => w(!1),
                                className: "flex items-center justify-between px-6 py-4 border-b border-border text-base font-medium text-primary hover:text-accent transition-colors",
                                children: ["Case Studies", (0, t.jsx)(m.ChevronRight, {
                                    className: "w-5 h-5 text-t3"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "border-b border-border px-6",
                                children: [(0, t.jsxs)("button", {
                                    onClick: () => M("company" === _ ? null : "company"),
                                    className: "flex items-center justify-between w-full py-4 text-base font-medium text-primary",
                                    children: ["Company", (0, t.jsx)(d.ChevronDown, {
                                        className: (0, O.cn)("w-5 h-5 text-t3 transition-transform duration-200", "company" === _ && "rotate-180")
                                    })]
                                }), (0, t.jsx)(n.AnimatePresence, {
                                    children: "company" === _ && (0, t.jsx)(i.motion.div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: .25,
                                            ease: "easeOut"
                                        },
                                        className: "overflow-hidden",
                                        children: (0, t.jsx)("div", {
                                            className: "pb-4 space-y-0.5",
                                            children: J.map(e => (0, t.jsxs)(a.default, {
                                                href: e.href,
                                                onClick: () => w(!1),
                                                className: "flex items-center gap-3 py-2.5 px-2 text-sm text-t2 hover:text-accent rounded-xl hover:bg-surface-2 transition-colors",
                                                children: [(0, t.jsx)(K, {
                                                    name: e.icon,
                                                    className: "w-4 h-4 text-t3 flex-shrink-0"
                                                }), e.label]
                                            }, e.href))
                                        })
                                    })
                                })]
                            }), (0, t.jsxs)(a.default, {
                                href: "/blogs",
                                onClick: () => w(!1),
                                className: "flex items-center justify-between px-6 py-4 border-b border-border text-base font-medium text-primary hover:text-accent transition-colors",
                                children: ["Insights", (0, t.jsx)(m.ChevronRight, {
                                    className: "w-5 h-5 text-t3"
                                })]
                            }), (0, t.jsxs)(a.default, {
                                href: "/careers/jobs",
                                onClick: () => w(!1),
                                className: "flex items-center justify-between px-6 py-4 border-b border-border text-base font-medium text-primary hover:text-accent transition-colors",
                                children: ["Careers", (0, t.jsx)(m.ChevronRight, {
                                    className: "w-5 h-5 text-t3"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "p-6 border-t border-border space-y-3 flex-shrink-0",
                            children: [(0, t.jsx)(T.default, {
                                size: "lg",
                                className: "w-full",
                                onClick: () => {
                                    w(!1), k(!0)
                                },
                                children: "Discuss Your Project"
                            }), (0, t.jsxs)("a", {
                                href: "https://wa.me/919000000000",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center gap-3 py-3 border border-border rounded-xl text-sm font-medium text-t2 hover:border-accent/30 hover:text-accent transition-all",
                                children: [(0, t.jsx)(u.MessageCircle, {
                                    className: "w-5 h-5 text-green-500"
                                }), "Chat on WhatsApp"]
                            })]
                        })]
                    })]
                })
            }), (0, t.jsx)(q, {
                open: N,
                onClose: () => k(!1)
            })]
        })
    }], 81350)
}, 26027, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(22016),
        a = e.i(51348),
        r = e.i(75254);
    let i = (0, r.default)("Instagram", [
            ["rect", {
                width: "20",
                height: "20",
                x: "2",
                y: "2",
                rx: "5",
                ry: "5",
                key: "2e1cvw"
            }],
            ["path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
                key: "9exkf1"
            }],
            ["line", {
                x1: "17.5",
                x2: "17.51",
                y1: "6.5",
                y2: "6.5",
                key: "r4j83e"
            }]
        ]),
        n = (0, r.default)("Facebook", [
            ["path", {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                key: "1jg4f8"
            }]
        ]);
    var l = e.i(46932),
        o = e.i(57688);
    let c = [{
            label: "Digital Platform Engineering",
            slug: "digital-platform-engineering"
        }, {
            label: "SaaS Product Engineering",
            slug: "saas-product-engineering"
        }, {
            label: "AI-Enabled Business Systems",
            slug: "ai-enabled-business-systems"
        }, {
            label: "Agentic & Workflow Automation",
            slug: "agentic-workflow-automation"
        }, {
            label: "Mobile App Development",
            slug: "mobile-app-development"
        }],
        d = [{
            label: "About Us",
            href: "/about"
        }, {
            label: "Case Studies",
            href: "/case-studies"
        }, {
            label: "Careers",
            href: "/careers/jobs"
        }, {
            label: "Contact",
            href: "/contact"
        }],
        m = [{
            label: "Blog",
            href: "/blogs"
        }, {
            label: "Industries",
            href: "/industries"
        }],
        x = [{
            label: "Privacy Policy",
            href: "/privacy"
        }, {
            label: "Terms of Service",
            href: "/terms"
        }],
        u = () => (0, t.jsxs)("div", {
            className: "relative w-full",
            children: [(0, t.jsx)("div", {
                className: "block md:hidden",
                children: (0, t.jsxs)(l.motion.div, {
                    className: "relative flex min-h-[clamp(8rem,25vw,18rem)] flex-col items-center justify-center pt-[clamp(1.5rem,4vw,3rem)] pb-20",
                    children: [(0, t.jsx)("h2", {
                        className: "font-accent! text-heading! w-full text-center leading-none! font-normal! capitalize",
                        style: {
                            fontSize: "clamp(2rem, 9.6vw, 10rem)",
                            letterSpacing: "clamp(-0.03em, -0.08vw, -0.01em)",
                            lineHeight: "0.98"
                        },
                        children: "BRIHAT INFOTECH"
                    }), (0, t.jsx)("div", {
                        className: "pointer-events-none absolute right-0 bottom-0 left-0 z-10 flex items-end",
                        children: (0, t.jsx)("div", {
                            className: "pointer-events-auto w-full pt-4 text-center"
                        })
                    })]
                })
            }), (0, t.jsxs)("div", {
                className: "hidden overflow-visible md:block",
                children: [(0, t.jsx)(l.motion.div, {
                    className: "flex items-center justify-center py-[clamp(2rem,3.5vw,3rem)]",
                    children: (0, t.jsx)("h2", {
                        className: "font-accent! text-heading! w-full text-center leading-none! font-normal! whitespace-nowrap! capitalize!",
                        style: {
                            fontSize: "clamp(1.6rem, 9.6vw, 10rem)"
                        },
                        children: "BRIHAT INFOTECH"
                    })
                }), (0, t.jsx)(l.motion.div, {
                    className: "absolute right-0 bottom-0 left-0 flex items-start cursor-default",
                    initial: {
                        backdropFilter: "blur(8px)"
                    },
                    whileHover: {
                        backdropFilter: "blur(0px)"
                    },
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    },
                    style: {
                        height: "45%",
                        background: `radial-gradient(
              ellipse at 80% 80%,
              rgba(0, 0, 0, 0.3) 30%,
              rgba(0, 0, 0, 0.15) 60%,
              transparent 80%
            )`
                    },
                    children: (0, t.jsx)("div", {
                        className: "w-full pt-[clamp(1.5rem,2.5vw,2rem)]"
                    })
                })]
            })]
        });
    e.s(["default", 0, function({
        services: e = []
    }) {
        let r = new Date().getFullYear(),
            l = (e.length > 0 ? e : c.map(e => ({
                title: e.label,
                slug: e.slug,
                sortOrder: 0
            }))).slice().sort((e, t) => (e.sortOrder ? ? 0) - (t.sortOrder ? ? 0)).slice(0, 5);
        return (0, t.jsxs)("footer", {
            className: "bg-primary text-white",
            children: [(0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: [(0, t.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10",
                    children: [(0, t.jsxs)("div", {
                        className: "lg:col-span-2",
                        children: [(0, t.jsx)(s.default, {
                            href: "/",
                            className: "flex items-center gap-1 shrink-0 font-medium text-xl",
                            children: (0, t.jsx)(o.default, {
                                src: "/images/common/whitelogo.png",
                                className: "w-48",
                                width: 200,
                                height: 200,
                                alt: "Brihat Infotech Logo"
                            })
                        }), (0, t.jsx)("p", {
                            className: "text-white/60 text-sm leading-relaxed max-w-xs mt-3",
                            children: "We build enterprise-grade digital systems — platforms, SaaS products, AI integrations, and workflow automations that scale with your business."
                        }), (0, t.jsx)("p", {
                            className: "mt-4 text-white/50 text-xs font-medium uppercase tracking-wider",
                            children: "Trusted by 200+ companies across India, US & ME"
                        }), (0, t.jsxs)("div", {
                            className: "flex items-center gap-4 mt-6",
                            children: [(0, t.jsx)("a", {
                                href: "https://in.linkedin.com/company/brihat-infotech",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-white/50 hover:text-white transition-colors",
                                "aria-label": "LinkedIn",
                                children: (0, t.jsx)(a.Linkedin, {
                                    className: "w-5 h-5"
                                })
                            }), (0, t.jsx)("a", {
                                href: "https://www.instagram.com/brihat_infotech/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-white/50 hover:text-white transition-colors",
                                "aria-label": "Instagram",
                                children: (0, t.jsx)(i, {
                                    className: "w-5 h-5"
                                })
                            }), (0, t.jsx)("a", {
                                href: "https://www.facebook.com/p/Brihat-Infotech-61561551750697/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-white/50 hover:text-white transition-colors",
                                "aria-label": "Facebook",
                                children: (0, t.jsx)(n, {
                                    className: "w-5 h-5"
                                })
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("h4", {
                            className: "text-sm font-semibold text-white uppercase tracking-wider mb-4",
                            children: "Services"
                        }), (0, t.jsxs)("ul", {
                            className: "space-y-2",
                            children: [l.map(e => (0, t.jsx)("li", {
                                children: (0, t.jsx)(s.default, {
                                    href: `/services/${e.slug}`,
                                    className: "text-white/60 hover:text-white text-sm transition-colors",
                                    children: e.title
                                })
                            }, e.slug)), (0, t.jsx)("li", {
                                className: "pt-1",
                                children: (0, t.jsx)(s.default, {
                                    href: "/services",
                                    className: "text-accent hover:text-white text-sm font-medium transition-colors",
                                    children: "All Services →"
                                })
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("h4", {
                            className: "text-sm font-semibold text-white uppercase tracking-wider mb-4",
                            children: "Company"
                        }), (0, t.jsx)("ul", {
                            className: "space-y-2",
                            children: d.map(e => (0, t.jsx)("li", {
                                children: (0, t.jsx)(s.default, {
                                    href: e.href,
                                    className: "text-white/60 hover:text-white text-sm transition-colors",
                                    children: e.label
                                })
                            }, e.href))
                        })]
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("h4", {
                            className: "text-sm font-semibold text-white uppercase tracking-wider mb-4",
                            children: "Resources"
                        }), (0, t.jsx)("ul", {
                            className: "space-y-2 mb-6",
                            children: m.map(e => (0, t.jsx)("li", {
                                children: (0, t.jsx)(s.default, {
                                    href: e.href,
                                    className: "text-white/60 hover:text-white text-sm transition-colors",
                                    children: e.label
                                })
                            }, e.href))
                        }), (0, t.jsx)("h4", {
                            className: "text-sm font-semibold text-white uppercase tracking-wider mb-4",
                            children: "Legal"
                        }), (0, t.jsx)("ul", {
                            className: "space-y-2",
                            children: x.map(e => (0, t.jsx)("li", {
                                children: (0, t.jsx)(s.default, {
                                    href: e.href,
                                    className: "text-white/60 hover:text-white text-sm transition-colors",
                                    children: e.label
                                })
                            }, e.href))
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [(0, t.jsxs)("p", {
                        className: "text-white/40 text-sm",
                        children: ["© ", r, " Brihat Infotech Pvt. Ltd. All rights reserved."]
                    }), (0, t.jsx)("p", {
                        className: "text-white/40 text-sm",
                        children: "Built with precision in India"
                    })]
                })]
            }), (0, t.jsx)(u, {})]
        })
    }], 26027)
}, 72686, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        a = e.i(94983);
    e.s(["default", 0, function({
        phoneNumber: e = "9162021026679"
    }) {
        let [r, i] = (0, s.useState)(!1), n = `https://wa.me/${e}?text=Hi%20Brihat%20Infotech%2C%20I%27d%20like%20to%20discuss%20a%20project.`;
        return (0, t.jsxs)("div", {
            className: "fixed bottom-6 right-6 z-50 flex items-center gap-3",
            children: [r && (0, t.jsx)("span", {
                className: "bg-primary text-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap",
                children: "Chat on WhatsApp"
            }), (0, t.jsx)("a", {
                href: n,
                target: "_blank",
                rel: "noopener noreferrer",
                onMouseEnter: () => i(!0),
                onMouseLeave: () => i(!1),
                className: "w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
                "aria-label": "Chat on WhatsApp",
                children: (0, t.jsx)(a.MessageCircle, {
                    className: "w-7 h-7 text-white fill-white"
                })
            })]
        })
    }])
}, 46772, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        a = e.i(37727);
    let r = (0, e.i(75254).default)("Cookie", [
        ["path", {
            d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
            key: "laymnq"
        }],
        ["path", {
            d: "M8.5 8.5v.01",
            key: "ue8clq"
        }],
        ["path", {
            d: "M16 15.5v.01",
            key: "14dtrp"
        }],
        ["path", {
            d: "M12 12v.01",
            key: "u5ubse"
        }],
        ["path", {
            d: "M11 17v.01",
            key: "1hyl5a"
        }],
        ["path", {
            d: "M7 14v.01",
            key: "uct60s"
        }]
    ]);
    var i = e.i(22016);
    let n = "brihat_cookie_consent";
    e.s(["default", 0, function() {
        let [e, l] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
            let e = localStorage.getItem(n);
            e ? "accepted" === e && window.gtag && window.gtag("consent", "update", {
                ad_storage: "granted"
            }) : l(!0)
        }, []);
        let o = () => {
            localStorage.setItem(n, "declined"), l(!1)
        };
        return e ? (0, t.jsx)("div", {
            role: "dialog",
            "aria-label": "Cookie consent",
            className: "fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6",
            children: (0, t.jsxs)("div", {
                className: "max-w-4xl mx-auto bg-white border border-border rounded-2xl shadow-2xl shadow-black/10 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4",
                children: [(0, t.jsx)("div", {
                    className: "w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0",
                    children: (0, t.jsx)(r, {
                        className: "w-5 h-5 text-accent"
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex-1 min-w-0",
                    children: [(0, t.jsx)("p", {
                        className: "text-sm text-primary font-medium",
                        children: "We use cookies to improve your experience."
                    }), (0, t.jsxs)("p", {
                        className: "text-xs text-t2 mt-1 leading-relaxed",
                        children: ["We use essential cookies to make our site work, and optional analytics cookies to understand how you use it. See our", " ", (0, t.jsx)(i.default, {
                            href: "/cookies",
                            className: "underline hover:text-accent transition-colors",
                            children: "Cookie Policy"
                        }), " ", "and", " ", (0, t.jsx)(i.default, {
                            href: "/privacy",
                            className: "underline hover:text-accent transition-colors",
                            children: "Privacy Policy"
                        }), "."]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-2 flex-shrink-0 w-full sm:w-auto",
                    children: [(0, t.jsx)("button", {
                        onClick: o,
                        className: "flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-t2 rounded-lg border border-border hover:bg-surface-2 transition-colors",
                        children: "Decline"
                    }), (0, t.jsx)("button", {
                        onClick: () => {
                            localStorage.setItem(n, "accepted"), l(!1), window.gtag && window.gtag("consent", "update", {
                                ad_storage: "granted"
                            })
                        },
                        className: "flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors",
                        children: "Accept All"
                    })]
                }), (0, t.jsx)("button", {
                    onClick: o,
                    className: "absolute top-4 right-4 sm:static text-t3 hover:text-primary transition-colors",
                    "aria-label": "Close",
                    children: (0, t.jsx)(a.X, {
                        className: "w-4 h-4"
                    })
                })]
            })
        }) : null
    }], 46772)
}, 8341, (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    var a = {
        cancelIdleCallback: function() {
            return n
        },
        requestIdleCallback: function() {
            return i
        }
    };
    for (var r in a) Object.defineProperty(s, r, {
        enumerable: !0,
        get: a[r]
    });
    let i = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        n = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof s.default || "object" == typeof s.default && null !== s.default) && void 0 === s.default.__esModule && (Object.defineProperty(s.default, "__esModule", {
        value: !0
    }), Object.assign(s.default, s), t.exports = s.default)
}, 19083, (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    var a = {
        ESCAPE_REGEX: function() {
            return n
        },
        htmlEscapeAttributeString: function() {
            return d
        },
        htmlEscapeJsonString: function() {
            return c
        }
    };
    for (var r in a) Object.defineProperty(s, r, {
        enumerable: !0,
        get: a[r]
    });
    let i = {
            "&": "\\u0026",
            ">": "\\u003e",
            "<": "\\u003c",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        n = /[&><\u2028\u2029]/g,
        l = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;"
        },
        o = /[&"'<>]/g;

    function c(e) {
        return e.replace(n, e => i[e])
    }

    function d(e) {
        return e.replace(o, e => l[e])
    }
}, 79520, (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return j
        },
        handleClientScriptLoad: function() {
            return g
        },
        initScriptLoader: function() {
            return b
        }
    };
    for (var r in a) Object.defineProperty(s, r, {
        enumerable: !0,
        get: a[r]
    });
    let i = e.r(55682),
        n = e.r(90809),
        l = e.r(43476),
        o = i._(e.r(74080)),
        c = n._(e.r(71645)),
        d = e.r(42732),
        m = e.r(22737),
        x = e.r(8341),
        u = e.r(19083),
        h = new Map,
        p = new Set,
        f = e => {
            let {
                src: t,
                id: s,
                onLoad: a = () => {},
                onReady: r = null,
                dangerouslySetInnerHTML: i,
                children: n = "",
                strategy: l = "afterInteractive",
                onError: c,
                stylesheets: d
            } = e, x = s || t;
            if (x && p.has(x)) return;
            if (h.has(t)) {
                p.add(x), h.get(t).then(a, c);
                return
            }
            let u = () => {
                    r && r(), p.add(x)
                },
                f = document.createElement("script"),
                g = new Promise((e, t) => {
                    f.addEventListener("load", function(t) {
                        e(), a && a.call(this, t), u()
                    }), f.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    c && c(e)
                });
            i ? (f.innerHTML = i.__html || "", u()) : n ? (f.textContent = "string" == typeof n ? n : Array.isArray(n) ? n.join("") : "", u()) : t && (f.src = t, h.set(t, g)), (0, m.setAttributesFromProps)(f, e), "worker" === l && f.setAttribute("type", "text/partytown"), f.setAttribute("data-nscript", l), d && (e => {
                if (o.default.preinit) return e.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let s = document.createElement("link");
                        s.type = "text/css", s.rel = "stylesheet", s.href = e, t.appendChild(s)
                    })
                }
            })(d), document.body.appendChild(f)
        };

    function g(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, x.requestIdleCallback)(() => f(e))
        }) : f(e)
    }

    function b(e) {
        e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            p.add(t)
        })
    }

    function y(e) {
        let {
            id: t,
            src: s = "",
            onLoad: a = () => {},
            onReady: r = null,
            strategy: i = "afterInteractive",
            onError: n,
            stylesheets: m,
            ...h
        } = e, {
            updateScripts: g,
            scripts: b,
            getIsSsr: y,
            appDir: j,
            nonce: v
        } = (0, c.useContext)(d.HeadManagerContext);
        v = h.nonce || v;
        let w = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
            let e = t || s;
            w.current || (r && e && p.has(e) && r(), w.current = !0)
        }, [r, t, s]);
        let N = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
                if (!N.current) {
                    if ("afterInteractive" === i) f(e);
                    else "lazyOnload" === i && ("complete" === document.readyState ? (0, x.requestIdleCallback)(() => f(e)) : window.addEventListener("load", () => {
                        (0, x.requestIdleCallback)(() => f(e))
                    }));
                    N.current = !0
                }
            }, [e, i]), ("beforeInteractive" === i || "worker" === i) && (g ? (b[i] = (b[i] || []).concat([{
                id: t,
                src: s,
                onLoad: a,
                onReady: r,
                onError: n,
                ...h,
                nonce: v
            }]), g(b)) : y && y() ? p.add(t || s) : y && !y() && f({ ...e,
                nonce: v
            })), j) {
            if (m && m.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === i)
                if (!s) return h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, l.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,u.htmlEscapeJsonString)(JSON.stringify([0,{...h,id:t}]))})`
                    }
                });
                else return o.default.preload(s, h.integrity ? {
                    as: "script",
                    integrity: h.integrity,
                    nonce: v,
                    crossOrigin: h.crossOrigin
                } : {
                    as: "script",
                    nonce: v,
                    crossOrigin: h.crossOrigin
                }), (0, l.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,u.htmlEscapeJsonString)(JSON.stringify([s,{...h,id:t}]))})`
                    }
                });
            "afterInteractive" === i && s && o.default.preload(s, h.integrity ? {
                as: "script",
                integrity: h.integrity,
                nonce: v,
                crossOrigin: h.crossOrigin
            } : {
                as: "script",
                nonce: v,
                crossOrigin: h.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(y, "__nextScript", {
        value: !0
    });
    let j = y;
    ("function" == typeof s.default || "object" == typeof s.default && null !== s.default) && void 0 === s.default.__esModule && (Object.defineProperty(s.default, "__esModule", {
        value: !0
    }), Object.assign(s.default, s), t.exports = s.default)
}]);