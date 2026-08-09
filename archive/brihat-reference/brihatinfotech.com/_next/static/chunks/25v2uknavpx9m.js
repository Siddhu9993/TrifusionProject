(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 22186, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(75157);
    e.s(["default", 0, function({
        className: e,
        children: a
    }) {
        return (0, t.jsx)("span", {
            className: (0, s.cn)("uppercase text-xs tracking-widest text-accent font-semibold", e),
            children: a
        })
    }])
}, 28540, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(75157);
    e.s(["default", 0, function({
        className: e,
        children: a
    }) {
        return (0, t.jsx)("div", {
            className: (0, s.cn)("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", e),
            children: a
        })
    }])
}, 33334, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(75157);
    e.s(["default", 0, function({
        className: e,
        children: a,
        id: i
    }) {
        return (0, t.jsx)("section", {
            id: i,
            className: (0, s.cn)("py-16 md:py-24", e),
            children: a
        })
    }])
}, 71631, e => {
    "use strict";
    let t = (0, e.i(75254).default)("Zap", [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ]);
    e.s(["default", 0, t])
}, 61277, e => {
    "use strict";
    let t = (0, e.i(75254).default)("Calendar", [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ]);
    e.s(["default", 0, t])
}, 78917, e => {
    "use strict";
    let t = (0, e.i(75254).default)("ExternalLink", [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ]);
    e.s(["ExternalLink", 0, t], 78917)
}, 17302, e => {
    "use strict";
    let t = (0, e.i(75254).default)("Lock", [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ]);
    e.s(["default", 0, t])
}, 95729, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(46932),
        a = e.i(28540),
        i = e.i(22186),
        r = e.i(61277),
        r = r,
        l = e.i(17302),
        l = l,
        n = e.i(71631),
        n = n;
    e.s(["default", 0, function() {
        return (0, t.jsxs)("div", {
            className: "relative overflow-hidden bg-primary min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-12 md:py-20",
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none",
                style: {
                    backgroundImage: "url('/images/industry/main-background.png')"
                }
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "28px 28px"
                }
            }), (0, t.jsx)("div", {
                className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none"
            }), (0, t.jsx)("div", {
                className: "absolute -top-32 -left-32 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[120px] pointer-events-none"
            }), (0, t.jsx)("div", {
                className: "absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-accent-alt/15 rounded-full blur-[120px] pointer-events-none"
            }), (0, t.jsx)(a.default, {
                children: (0, t.jsxs)(s.motion.div, {
                    className: "relative z-10 text-center max-w-4xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    },
                    children: [(0, t.jsx)(i.default, {
                        className: "mb-4 block text-accent-alt",
                        children: "Contact Us"
                    }), (0, t.jsxs)("h1", {
                        className: "text-4xl md:text-6xl font-bold text-white leading-tight mt-3 mb-6",
                        children: ["Let's Talk About", (0, t.jsx)("br", {
                            className: "hidden md:block"
                        }), " Your Project."]
                    }), (0, t.jsx)("p", {
                        className: "text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10",
                        children: "Tell us what you're building. We'll tell you honestly if we're the right fit — and if not, we'll point you in the right direction."
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [(0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 font-medium transition-colors hover:bg-white/10",
                            children: [(0, t.jsx)("span", {
                                className: "flex items-center justify-center bg-white/10 rounded-full size-11 shrink-0",
                                children: (0, t.jsx)(n.default, {
                                    className: "size-6 text-[#FFC10A]"
                                })
                            }), " ", "We respond within 24 hours"]
                        }), (0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 font-medium transition-colors hover:bg-white/10",
                            children: [(0, t.jsx)("span", {
                                className: "flex items-center justify-center bg-white/10 rounded-full size-11 shrink-0",
                                children: (0, t.jsx)(r.default, {
                                    className: "size-6 text-[#8C9EFF]"
                                })
                            }), " ", "Free 30-min discovery call"]
                        }), (0, t.jsxs)("span", {
                            className: "inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 font-medium transition-colors hover:bg-white/10",
                            children: [(0, t.jsx)("span", {
                                className: "flex items-center justify-center bg-white/10 rounded-full size-11 shrink-0",
                                children: (0, t.jsx)(l.default, {
                                    className: "size-6 text-[#EAD66C]"
                                })
                            }), " ", "Your information is never shared"]
                        })]
                    })]
                })
            })]
        })
    }], 95729)
}, 77359, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        a = e.i(72520),
        i = e.i(95468),
        r = e.i(78917),
        l = e.i(22016),
        n = e.i(28540),
        c = e.i(33334),
        d = e.i(59544),
        o = e.i(9165),
        m = e.i(57688);
    let h = "w-full px-4 py-3 rounded-xl border border-border text-primary placeholder:text-t3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition bg-white",
        x = ["Founder/CEO", "CTO/VP Engineering", "Product Manager", "Investor", "Other"],
        u = ["Digital Platform Engineering", "SaaS Product Engineering", "AI-Enabled Systems", "Automation & Integrations", "Staff Augmentation", "Not sure yet"],
        p = ["Under ₹5L", "₹5L – ₹20L", "₹20L – ₹50L", "₹50L+", "Let's discuss"],
        f = ["10:00 AM IST", "11:00 AM IST", "12:00 PM IST", "2:00 PM IST", "3:00 PM IST", "4:00 PM IST", "5:00 PM IST", "6:00 PM IST"],
        g = ["ASAP", "1–3 months", "3–6 months", "Planning stage"],
        b = [{
            city: "Noida",
            state: "Uttar Pradesh",
            address: "B1135 Ithum Sector 62",
            mapsUrl: "https://share.google/idmkvq8T7TxjoCSAF"
        }, {
            city: "Ranchi",
            state: "Jharkhand",
            address: "302, Modi Heights Phase 1",
            mapsUrl: "https://share.google/jVsFS0Gr6IkOEPiVA"
        }],
        j = [{
            label: "You submit"
        }, {
            label: "We read (2hrs)"
        }, {
            label: "We reply (24hrs)"
        }, {
            label: "Call scheduled"
        }];
    e.s(["default", 0, function() {
        let [e, v] = (0, s.useState)({
            name: "",
            email: "",
            company: "",
            role: "",
            service: "",
            budget: "",
            timeline: "",
            preferredDate: "",
            preferredTime: "",
            message: ""
        }), [y, N] = (0, s.useState)(!1), [w, k] = (0, s.useState)(!1), [S, C] = (0, s.useState)(""), T = e => {
            v(t => ({ ...t,
                [e.target.name]: e.target.value
            }))
        }, I = async t => {
            t.preventDefault(), N(!0), C("");
            try {
                let t = e.role ? `${e.company} (${e.role})` : e.company,
                    s = [e.service ? `Service: ${e.service}` : "", e.budget ? `Budget: ${e.budget}` : "", e.timeline ? `Timeline: ${e.timeline}` : "", e.message ? `Project: ${e.message}` : ""].filter(Boolean).join(" | ");
                await (0, o.submitMeetingBooking)({
                    name: e.name,
                    email: e.email,
                    company: t,
                    preferredDate: e.preferredDate,
                    preferredTime: e.preferredTime,
                    topic: s,
                    sourcePage: "/contact"
                }), k(!0)
            } catch {
                C("Something went wrong. Please try again or email us directly.")
            } finally {
                N(!1)
            }
        };
        return (0, t.jsx)(c.default, {
            className: "bg-white pt-0",
            children: (0, t.jsx)(n.default, {
                children: (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                    children: [(0, t.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, t.jsx)("div", {
                            className: "bg-white border-2 border-accent/30 rounded-2xl p-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, t.jsx)("div", {
                                    className: "w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0",
                                    children: (0, t.jsx)(m.default, {
                                        src: "/images/contact/calendar.svg",
                                        alt: "Calendar",
                                        width: 24,
                                        height: 24
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, t.jsx)("p", {
                                        className: "font-bold text-primary",
                                        children: "Book a Discovery Call"
                                    }), (0, t.jsx)("p", {
                                        className: "text-t2 text-sm mt-1",
                                        children: "Schedule a 30-minute call. No sales pitch — just a conversation about your project."
                                    }), (0, t.jsxs)("button", {
                                        onClick: () => {
                                            document.getElementById("booking-form") ? .scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        },
                                        className: "inline-flex items-center gap-1.5 text-accent text-sm font-medium mt-3 hover:gap-2.5 transition-all",
                                        children: ["Choose a Time", " ", (0, t.jsx)(a.ArrowRight, {
                                            className: "w-4 h-4"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "bg-white border border-border rounded-2xl p-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, t.jsx)("div", {
                                    className: "w-11 h-11 rounded-md bg-green-50 flex items-center justify-center flex-shrink-0",
                                    children: (0, t.jsx)(m.default, {
                                        src: "/images/contact/whatsapp.svg",
                                        alt: "whatsapp",
                                        width: 24,
                                        height: 24
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, t.jsx)("p", {
                                        className: "font-bold text-primary",
                                        children: "WhatsApp"
                                    }), (0, t.jsx)("p", {
                                        className: "text-t2 text-sm mt-1",
                                        children: "Quick question or want to share a brief? Message us directly."
                                    }), (0, t.jsxs)(l.default, {
                                        href: "https://wa.me/9162021026679",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-1.5 text-green-600 text-sm font-medium mt-3 hover:gap-2.5 transition-all",
                                        children: ["Open WhatsApp", " ", (0, t.jsx)(a.ArrowRight, {
                                            className: "w-4 h-4"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "bg-white border border-border rounded-2xl p-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, t.jsx)("div", {
                                    className: "w-11 h-11 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0",
                                    children: (0, t.jsx)(m.default, {
                                        src: "/images/contact/mail.svg",
                                        alt: "mail",
                                        width: 24,
                                        height: 24
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, t.jsx)("p", {
                                        className: "font-bold text-primary",
                                        children: "Email"
                                    }), (0, t.jsx)("p", {
                                        className: "text-t2 text-sm mt-1",
                                        children: "We monitor this closely during business hours."
                                    }), (0, t.jsx)(l.default, {
                                        href: "mailto:contact@brihatinfotech.com",
                                        className: "inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-3",
                                        children: "contact@brihatinfotech.com"
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "bg-white border border-border rounded-2xl p-6",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [(0, t.jsx)("div", {
                                    className: "w-11 h-11 rounded-md bg-surface-2 flex items-center justify-center flex-shrink-0",
                                    children: (0, t.jsx)(m.default, {
                                        src: "/images/contact/location.svg",
                                        alt: "location",
                                        width: 24,
                                        height: 24
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex-1 min-w-0",
                                    children: [(0, t.jsx)("p", {
                                        className: "font-bold text-primary",
                                        children: b.length > 1 ? "Our Offices" : "Office"
                                    }), (0, t.jsx)("p", {
                                        className: "text-t3 text-xs mt-0.5 mb-3",
                                        children: "Mon – Fri, 10:00 AM – 7:00 PM IST"
                                    }), (0, t.jsx)("div", {
                                        className: "space-y-3",
                                        children: b.map(e => (0, t.jsxs)("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [(0, t.jsxs)("div", {
                                                children: [(0, t.jsxs)("p", {
                                                    className: "text-sm font-semibold text-primary leading-tight",
                                                    children: [e.city, (0, t.jsx)("span", {
                                                        className: "text-t3 font-normal ml-1.5",
                                                        children: e.state
                                                    })]
                                                }), (0, t.jsx)("p", {
                                                    className: "text-t3 text-xs mt-0.5",
                                                    children: e.address
                                                })]
                                            }), (0, t.jsxs)("a", {
                                                href: e.mapsUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-1 text-accent text-xs font-medium flex-shrink-0 hover:underline mt-0.5",
                                                children: ["Map", (0, t.jsx)(r.ExternalLink, {
                                                    className: "w-3 h-3"
                                                })]
                                            })]
                                        }, e.city))
                                    })]
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "bg-white border border-border rounded-2xl p-6 mt-2",
                            children: [(0, t.jsx)("p", {
                                className: "text-xs text-t3 font-semibold uppercase tracking-wider mb-5",
                                children: "What happens next"
                            }), (0, t.jsxs)("div", {
                                className: "relative flex items-start justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "absolute top-3.5 left-0 right-0 flex items-center px-4 pointer-events-none",
                                    "aria-hidden": !0,
                                    children: (0, t.jsx)("div", {
                                        className: "w-full border-t-2 border-dashed border-accent/20"
                                    })
                                }), j.map((e, s) => (0, t.jsxs)("div", {
                                    className: "relative flex flex-col items-center text-center gap-2 flex-1",
                                    children: [(0, t.jsx)("div", {
                                        className: "w-7 h-7 rounded-full bg-[#ECF8FF] flex items-center justify-center text-xs font-bold text-accent z-10",
                                        children: s + 1
                                    }), (0, t.jsx)("span", {
                                        className: "text-xs text-t2 leading-tight px-1",
                                        children: e.label
                                    })]
                                }, s))]
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        id: "booking-form",
                        children: w ? (0, t.jsxs)("div", {
                            className: "bg-white rounded-2xl p-10 text-center",
                            children: [(0, t.jsx)("div", {
                                className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4",
                                children: (0, t.jsx)(i.CheckCircle2, {
                                    className: "w-8 h-8 text-green-500"
                                })
                            }), (0, t.jsxs)("h2", {
                                className: "text-2xl font-bold text-primary mb-3",
                                children: ["Thanks ", (e.name || "").split(" ")[0], "— we've received your request."]
                            }), (0, t.jsx)("p", {
                                className: "text-t2 leading-relaxed",
                                children: "Our team will review it and confirm your call within 24 hours."
                            }), (0, t.jsx)("div", {
                                className: "mt-8",
                                children: (0, t.jsxs)(l.default, {
                                    href: "/case-studies",
                                    className: "inline-flex items-center gap-1.5 text-accent font-medium hover:gap-2.5 transition-all",
                                    children: ["See our work while you wait", " ", (0, t.jsx)(a.ArrowRight, {
                                        className: "w-4 h-4"
                                    })]
                                })
                            })]
                        }) : (0, t.jsxs)("form", {
                            onSubmit: I,
                            className: "bg-white rounded-2xl px-8 flex flex-col gap-5",
                            children: [(0, t.jsx)("h2", {
                                className: "text-xl font-bold text-primary",
                                children: "Request a Discovery Call"
                            }), (0, t.jsxs)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsxs)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: ["Your Name", " ", (0, t.jsx)("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        })]
                                    }), (0, t.jsx)("input", {
                                        type: "text",
                                        name: "name",
                                        required: !0,
                                        value: e.name,
                                        onChange: T,
                                        placeholder: "Rahul Mehta",
                                        className: h
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsxs)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: ["Work Email", " ", (0, t.jsx)("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        })]
                                    }), (0, t.jsx)("input", {
                                        type: "email",
                                        name: "email",
                                        required: !0,
                                        value: e.email,
                                        onChange: T,
                                        placeholder: "rahul@company.com",
                                        className: h
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsxs)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: ["Company Name", " ", (0, t.jsx)("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        })]
                                    }), (0, t.jsx)("input", {
                                        type: "text",
                                        name: "company",
                                        required: !0,
                                        value: e.company,
                                        onChange: T,
                                        placeholder: "Your Company",
                                        className: h
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: "Your Role"
                                    }), (0, t.jsxs)("select", {
                                        name: "role",
                                        value: e.role,
                                        onChange: T,
                                        className: h,
                                        children: [(0, t.jsx)("option", {
                                            value: "",
                                            children: "Select your role..."
                                        }), x.map(e => (0, t.jsx)("option", {
                                            value: e,
                                            children: e
                                        }, e))]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: "What do you need?"
                                    }), (0, t.jsxs)("select", {
                                        name: "service",
                                        value: e.service,
                                        onChange: T,
                                        className: h,
                                        children: [(0, t.jsx)("option", {
                                            value: "",
                                            children: "Select a service..."
                                        }), u.map(e => (0, t.jsx)("option", {
                                            value: e,
                                            children: e
                                        }, e))]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: "Budget Range"
                                    }), (0, t.jsxs)("select", {
                                        name: "budget",
                                        value: e.budget,
                                        onChange: T,
                                        className: h,
                                        children: [(0, t.jsx)("option", {
                                            value: "",
                                            children: "Select budget range..."
                                        }), p.map(e => (0, t.jsx)("option", {
                                            value: e,
                                            children: e
                                        }, e))]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: "Timeline"
                                    }), (0, t.jsxs)("select", {
                                        name: "timeline",
                                        value: e.timeline,
                                        onChange: T,
                                        className: h,
                                        children: [(0, t.jsx)("option", {
                                            value: "",
                                            children: "When do you need to start?"
                                        }), g.map(e => (0, t.jsx)("option", {
                                            value: e,
                                            children: e
                                        }, e))]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: "Preferred Date"
                                    }), (0, t.jsx)("input", {
                                        type: "date",
                                        name: "preferredDate",
                                        value: e.preferredDate,
                                        onChange: T,
                                        className: h
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-sm font-medium text-primary mb-1.5",
                                        children: "Preferred Time"
                                    }), (0, t.jsxs)("select", {
                                        name: "preferredTime",
                                        value: e.preferredTime,
                                        onChange: T,
                                        className: h,
                                        children: [(0, t.jsx)("option", {
                                            value: "",
                                            children: "Select a time..."
                                        }), f.map(e => (0, t.jsx)("option", {
                                            value: e,
                                            children: e
                                        }, e))]
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsxs)("label", {
                                    className: "block text-sm font-medium text-primary mb-1.5",
                                    children: ["Tell us about your project", " ", (0, t.jsx)("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    })]
                                }), (0, t.jsx)("textarea", {
                                    name: "message",
                                    required: !0,
                                    rows: 5,
                                    value: e.message,
                                    onChange: T,
                                    placeholder: "What are you building? What problem does it solve? What's your timeline and goals?",
                                    className: `${h} resize-none`
                                })]
                            }), S && (0, t.jsx)("p", {
                                className: "text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg",
                                children: S
                            }), (0, t.jsx)(d.default, {
                                type: "submit",
                                loading: y,
                                size: "lg",
                                className: "w-full justify-center",
                                children: y ? "Sending..." : "Request Discovery Call"
                            }), (0, t.jsxs)("p", {
                                className: "text-xs text-t3 text-center",
                                children: ["By submitting this form you agree to our", " ", (0, t.jsx)("a", {
                                    href: "/privacy",
                                    className: "underline hover:text-accent transition-colors",
                                    children: "Privacy Policy"
                                }), ". We never spam."]
                            })]
                        })
                    })]
                })
            })
        })
    }])
}, 9580, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        a = e.i(46932),
        i = e.i(88653),
        r = e.i(64659),
        l = e.i(28540),
        n = e.i(33334);
    let c = [{
        id: "1",
        question: "What happens after I submit?",
        answer: "Our team reviews your request within 2 hours during business hours. We confirm the call time, send a calendar invite with a Google Meet link, and share a brief prep guide."
    }, {
        id: "2",
        question: "Is the discovery call really free?",
        answer: "Yes, completely free, no obligation. It's a conversation to understand your project. If we're not the right fit, we'll tell you that too."
    }, {
        id: "3",
        question: "Do you sign NDAs before the call?",
        answer: "Yes. We're happy to sign an NDA before any detailed discussion. Just mention it when you submit the form."
    }, {
        id: "4",
        question: "What should I prepare before the call?",
        answer: "Ideally: a rough description of what you're building, the main problem it solves, your timeline, and approximate budget range. Even rough numbers help us prepare meaningful answers."
    }, {
        id: "5",
        question: "Do you work with early-stage startups?",
        answer: "Yes. Some of our best work has been with pre-Series A startups. Budget matters, but what we're really evaluating is the clarity of the problem and the founder's commitment."
    }, {
        id: "6",
        question: "What if I don't have a clear requirement yet?",
        answer: 'That\'s fine — many of our clients come to us at the "I know what I need but not how to build it" stage. We help with scoping before any engagement starts.'
    }];
    e.s(["default", 0, function({
        faqs: e
    }) {
        let d = e && e.length > 0 ? e : c,
            [o, m] = (0, s.useState)(d[0] ? .id || "1");
        return (0, t.jsx)(n.default, {
            className: "bg-surface",
            children: (0, t.jsxs)(l.default, {
                children: [(0, t.jsx)("div", {
                    className: "text-center mb-12",
                    children: (0, t.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold text-primary mt-3",
                        children: "Common Questions"
                    })
                }), (0, t.jsx)("div", {
                    className: "max-w-3xl mx-auto divide-y divide-border",
                    children: d.map(e => {
                        let s = o === e.id;
                        return (0, t.jsxs)("div", {
                            className: "py-5 cursor-pointer group",
                            onClick: () => m(s ? "" : e.id),
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [(0, t.jsx)("span", {
                                    className: "font-medium text-primary group-hover:text-accent transition-colors pr-2",
                                    children: e.question
                                }), (0, t.jsx)(a.motion.div, {
                                    animate: {
                                        rotate: 180 * !!s
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    className: "flex-shrink-0",
                                    children: (0, t.jsx)(r.ChevronDown, {
                                        className: "w-5 h-5 text-t3"
                                    })
                                })]
                            }), (0, t.jsx)(i.AnimatePresence, {
                                initial: !1,
                                children: s && (0, t.jsx)(a.motion.div, {
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
                                        ease: "easeInOut"
                                    },
                                    className: "overflow-hidden",
                                    children: (0, t.jsx)("p", {
                                        className: "text-t2 text-sm leading-relaxed pt-3 pr-8",
                                        children: e.answer
                                    })
                                })
                            })]
                        }, e.id)
                    })
                })]
            })
        })
    }])
}]);