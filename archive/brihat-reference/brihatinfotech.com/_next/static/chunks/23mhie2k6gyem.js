(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 42309, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        i = e.i(46932),
        a = e.i(88653),
        l = e.i(64659),
        r = e.i(70273),
        n = e.i(28540),
        o = e.i(22186),
        c = e.i(59544);
    let d = ["We", "Build", "Digital", "Systems", "That"],
        m = ["Scale With You", "Grow With You", "Work For You", "Evolve With You", "Ship With You"],
        h = {
            hidden: {
                y: "110%",
                opacity: 0
            },
            visible: e => ({
                y: "0%",
                opacity: 1,
                transition: {
                    duration: .6,
                    ease: [.22, 1, .36, 1],
                    delay: .15 + .06 * e
                }
            })
        },
        x = {
            enter: {
                y: "110%",
                opacity: 0
            },
            center: {
                y: "0%",
                opacity: 1,
                transition: {
                    duration: .5,
                    ease: [.22, 1, .36, 1]
                }
            },
            exit: {
                y: "-110%",
                opacity: 0,
                transition: {
                    duration: .4,
                    ease: [.55, 0, 1, .45]
                }
            }
        };
    e.s(["default", 0, function() {
        let [e, u] = (0, s.useState)(0);
        return (0, s.useEffect)(() => {
            let e = setInterval(() => {
                u(e => (e + 1) % m.length)
            }, 2e3);
            return () => clearInterval(e)
        }, []), (0, t.jsxs)("div", {
            className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white",
            children: [(0, t.jsx)(i.motion.div, {
                className: "absolute -top-[20vw] -right-[15vw] w-[60vw] h-[60vw] rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, var(--accent-alt) 40%, transparent 70%)",
                    filter: "blur(5vw)",
                    opacity: .35
                },
                animate: {
                    x: ["-1.5vw", "1.5vw", "-1.5vw"],
                    y: ["-1.5vw", "1.5vw", "-1.5vw"]
                },
                transition: {
                    duration: 15,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                }
            }), (0, t.jsx)(i.motion.div, {
                className: "absolute -bottom-[15vw] -left-[15vw] lg:left-4 w-[50vw] h-[50vw] rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, var(--accent-alt) 30%, transparent 70%)",
                    filter: "blur(8vw)",
                    opacity: .3
                },
                animate: {
                    x: ["1.5vw", "-1.5vw", "1.5vw"],
                    y: ["1.5vw", "-1.5vw", "1.5vw"]
                },
                transition: {
                    duration: 18
                }
            }), (0, t.jsx)(n.default, {
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col items-center text-center relative z-10",
                    children: [(0, t.jsx)(i.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        children: (0, t.jsx)(o.default, {
                            children: "Enterprise Platform & AI Engineering"
                        })
                    }), (0, t.jsxs)("h1", {
                        className: "font-bold text-5xl md:text-7xl font-black tracking-tight text-primary leading-[1.1] mt-8 max-w-5xl text-center",
                        children: [d.map((e, s) => (0, t.jsx)("span", {
                            style: {
                                display: "inline-block",
                                overflow: "hidden",
                                marginRight: "0.22em",
                                verticalAlign: "bottom"
                            },
                            className: "leading-[1.16]",
                            children: (0, t.jsx)(i.motion.span, {
                                custom: s,
                                initial: "hidden",
                                animate: "visible",
                                variants: h,
                                style: {
                                    display: "inline-block"
                                },
                                children: e
                            })
                        }, e)), (0, t.jsx)("span", {
                            style: {
                                minWidth: "9ch"
                            },
                            children: (0, t.jsx)(a.AnimatePresence, {
                                mode: "popLayout",
                                initial: !1,
                                children: (0, t.jsx)(i.motion.span, {
                                    variants: x,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    style: {
                                        display: "inline-block"
                                    },
                                    className: "text-accent",
                                    children: m[e]
                                }, e)
                            })
                        })]
                    }), (0, t.jsx)(i.motion.p, {
                        className: "text-lg md:text-xl text-t2 max-w-2xl mx-auto mt-6 leading-relaxed",
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .55,
                            delay: .75
                        },
                        children: "From AI-powered platforms to custom SaaS — we engineer technology that gives you operational control and competitive edge."
                    }), (0, t.jsx)(i.motion.div, {
                        className: "flex flex-col items-center gap-3 mt-10",
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .95
                        },
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-3",
                            children: [(0, t.jsxs)(c.default, {
                                variant: "primary",
                                size: "lg",
                                as: "link",
                                href: "/contact",
                                className: "px-10 py-4 text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-200",
                                children: ["Start a Project", " "]
                            }), (0, t.jsx)(c.default, {
                                variant: "ghost",
                                size: "lg",
                                as: "link",
                                href: "/case-studies",
                                className: "px-8 py-4 text-base text-t2 hover:text-primary bg-white",
                                children: "View Case Studies"
                            })]
                        })
                    }), (0, t.jsxs)(i.motion.div, {
                        className: "flex flex-wrap items-center justify-center gap-2 mt-8 text-sm text-t3 mb-10 sm:mb-0",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5,
                            delay: 1.1
                        },
                        children: [(0, t.jsx)("div", {
                            className: "flex",
                            children: [void 0, void 0, void 0, void 0, void 0].map((e, s) => (0, t.jsx)(r.Star, {
                                className: "w-4 h-4 fill-amber-400 text-amber-400"
                            }, s))
                        }), (0, t.jsx)("span", {
                            children: "4.9 across 80+ verified Google reviews"
                        }), (0, t.jsx)("span", {
                            className: "bg-[#ECF8FF] rounded-full px-6 py-2.5",
                            children: "Trusted by 200+ companies"
                        })]
                    })]
                })
            }), (0, t.jsx)("div", {
                className: "absolute lg:bottom-8 bottom-0 sm:bottom-6 md:bottom-4 left-1/2 -translate-x-1/2",
                children: (0, t.jsx)("button", {
                    onClick: () => document.getElementById("trust") ? .scrollIntoView({
                        behavior: "smooth"
                    }),
                    className: "animate-bounce text-t3 opacity-50 hover:opacity-100 transition-opacity",
                    "aria-label": "Scroll down",
                    children: (0, t.jsx)(l.ChevronDown, {
                        className: "w-6 h-6"
                    })
                })
            })]
        })
    }])
}, 24597, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(90991),
        i = e.i(57688);
    let a = [{
            label: "AWS Activate",
            logo: (0, t.jsx)(i.default, {
                src: "/images/home/trust-bar-section/aws-icon.svg",
                alt: "AWS Activate",
                width: 40,
                height: 40,
                className: "shrink-0 h-16"
            })
        }, {
            label: "Google for Startups",
            logo: (0, t.jsx)(i.default, {
                src: "/images/home/trust-bar-section/google-icon.svg",
                alt: "Google for Startups",
                width: 66,
                height: 22,
                className: "shrink-0 h-16"
            })
        }, {
            label: "Microsoft for Startups",
            logo: (0, t.jsx)(i.default, {
                src: "/images/home/trust-bar-section/ms-icon.svg",
                alt: "Microsoft for Startups",
                width: 84,
                height: 18,
                className: "shrink-0 h-16"
            })
        }, {
            label: "Clutch",
            logo: (0, t.jsx)(i.default, {
                src: "/images/home/trust-bar-section/clutch-icon.svg",
                alt: "Clutch",
                width: 35,
                height: 35,
                className: "shrink-0 h-16"
            })
        }, {
            label: "GoodFirms",
            logo: (0, t.jsx)(i.default, {
                src: "/images/home/trust-bar-section/goodfirms-icon.svg",
                alt: "GoodFirms",
                width: 42,
                height: 42,
                className: "shrink-0 h-16"
            })
        }],
        l = [{
            value: 100,
            suffix: "+",
            label: "Happy Clients",
            icon: "/images/home/trust-bar-section/like.svg"
        }, {
            value: 150,
            suffix: "+",
            label: "Projects Shipped",
            icon: "/images/home/trust-bar-section/suitcase.svg"
        }, {
            value: 4,
            suffix: "+",
            label: "Years In Business",
            icon: "/images/home/trust-bar-section/badge.svg"
        }, {
            value: 4.9,
            suffix: "★",
            label: "Client Rating",
            icon: "/images/home/trust-bar-section/globe-alt.svg"
        }],
        r = [{
            name: "Allahabad News",
            logo: "/images/home/features/AllahabadNews.webp"
        }, {
            name: "Deccan",
            logo: "/images/home/features/DECCAN.webp"
        }, {
            name: "Dailyhunt",
            logo: "/images/home/features/Dailyhunt.webp"
        }, {
            name: "Delhi News Watch",
            logo: "/images/home/features/DelhiNewsWatch.webp"
        }, {
            name: "Google News",
            logo: "/images/home/features/GoogleNews.webp"
        }, {
            name: "Hindustan Metro",
            logo: "/images/home/features/HindustanMetro.webp"
        }, {
            name: "Jio News",
            logo: "/images/home/features/JioNews.webp"
        }, {
            name: "Live Mumbai",
            logo: "/images/home/features/LiveMUMBAI.webp"
        }, {
            name: "News18",
            logo: "/images/home/features/News18.webp"
        }, {
            name: "Delhi News Now",
            logo: "/images/home/features/delhinewsnow.webp"
        }, {
            name: "Mint Money",
            logo: "/images/home/features/mintmoney.webp"
        }, {
            name: "The Deccan Messanger",
            logo: "/images/home/features/theDeccanmessanger.webp"
        }, {
            name: "UP Patrika",
            logo: "/images/home/features/uppatrika.webp"
        }, {
            name: "Your Bangalore",
            logo: "/images/home/features/yourbanglore.webp"
        }];
    e.s(["default", 0, function({
        partners: e = []
    }) {
        return e ? .filter(e => "media" === e.category), (0, t.jsx)("div", {
            className: "bg-white relative overflow-hidden",
            children: (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto py-14 px-5 sm:px-10 lg:px-16 xl:px-20",
                children: [(0, t.jsxs)("div", {
                    className: "overflow-hidden bg-white",
                    children: [(0, t.jsx)("style", {
                        children: `
					@keyframes trust-ticker {
						from { transform: translateX(0); }
						to   { transform: translateX(-33.333%); }
					}
				`
                    }), (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("div", {
                            className: "absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
                        }), (0, t.jsx)("div", {
                            className: "absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
                        }), (0, t.jsx)("div", {
                            style: {
                                animation: "trust-ticker 60s linear infinite",
                                display: "flex",
                                alignItems: "center",
                                width: "max-content"
                            },
                            children: [...r, ...r, ...r].map((e, s) => (0, t.jsx)("span", {
                                className: "flex items-center shrink-0 py-4 px-10  transition-opacity",
                                children: e.logo ? (0, t.jsx)(i.default, {
                                    src: e.logo,
                                    alt: e.name,
                                    width: 140,
                                    height: 40,
                                    className: "h-9 w-auto object-contain  transition-all duration-300"
                                }) : (0, t.jsx)("span", {
                                    className: "text-sm font-medium text-text-2/80 tracking-tight whitespace-nowrap",
                                    children: e.name
                                })
                            }, s))
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                    children: [(0, t.jsxs)("div", {
                        className: "lg:col-span-6 xl:col-span-5 flex flex-col gap-8",
                        children: [(0, t.jsxs)("h2", {
                            className: "text-4xl lg:text-[42px] font-bold text-primary leading-[1.5]",
                            children: ["Trusted by 50+ Clients", (0, t.jsx)("br", {}), "Worldwide"]
                        }), (0, t.jsxs)("div", {
                            className: "flex items-center text-sm font-normal text-text-3 bg-[#fafafa] rounded-full p-0.5 sm:w-fit",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-1 min-w-fit shrink-0 justify-center items-center gap-2 px-3 xl:px-6 py-2.5 rounded-full bg-white drop-shadow-sm",
                                children: [(0, t.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-primary/60"
                                }), (0, t.jsx)("span", {
                                    children: "No commitment"
                                })]
                            }), (0, t.jsx)("span", {
                                className: "px-3 min-w-fit flex flex-1 justify-center shrink-0 xl:px-6 py-2.5",
                                children: "Reply within 24 hrs"
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "lg:col-span-6 xl:col-span-7",
                        children: (0, t.jsx)("div", {
                            className: "grid grid-cols-2 xl:gap-12 lg:gap-8 md:gap-6 gap-4",
                            children: l.map((e, a) => (0, t.jsxs)("div", {
                                className: "bg-surface-2 rounded-lg flex xl:p-6 sm:p-4 p-3 gap-4 transition-colors",
                                children: [(0, t.jsx)("div", {
                                    className: "xl:size-20 lg:size-16 md:size-12 size-10 shrink-0 rounded-lg bg-accent-alt/10 flex items-center justify-center",
                                    children: (0, t.jsx)(i.default, {
                                        src: e.icon,
                                        alt: e.label,
                                        width: 32,
                                        height: 32,
                                        className: "size-8 shrink-0"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-5",
                                    children: [(0, t.jsx)("span", {
                                        className: "xl:text-5xl text-xl sm:text-4xl lg:text-3xl font-bold text-primary tabular-nums",
                                        children: (0, t.jsx)(s.default, {
                                            value: e.value,
                                            suffix: e.suffix,
                                            duration: 2
                                        })
                                    }), (0, t.jsx)("p", {
                                        className: "xl:text-sm text-xs text-text-3! font-medium",
                                        children: e.label
                                    })]
                                })]
                            }, e.label))
                        })
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
                    children: a.map(e => (0, t.jsxs)("div", {
                        className: "flex flex-col items-center justify-start gap-4 p-3 sm:p-4 bg-white border border-border rounded-xl",
                        children: [(0, t.jsx)("div", {
                            className: "h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                            children: e.logo
                        }), (0, t.jsxs)("div", {
                            className: "text-center flex flex-col gap-1",
                            children: [(0, t.jsx)("p", {
                                className: "xl:text-base sm:text-sm text-xs font-semibold text-primary",
                                children: e.label
                            }), e.sublabel && (0, t.jsx)("p", {
                                className: "text-[10px] sm:text-xs xl:text-sm text-text-3 font-normal",
                                children: e.sublabel
                            })]
                        })]
                    }, e.label))
                })]
            })
        })
    }])
}, 12741, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(46932),
        i = e.i(22016),
        a = e.i(15057),
        l = e.i(52008),
        r = e.i(72664),
        n = e.i(55711),
        o = e.i(40524),
        c = e.i(26707),
        d = e.i(17923),
        m = e.i(28540),
        h = e.i(33334),
        x = e.i(22186),
        u = e.i(59544);
    let g = [{
            slug: "digital-platform-engineering",
            color: "#6366F1",
            bg: "#EEF2FF",
            Icon: l.Layers,
            num: "01"
        }, {
            slug: "saas-product-engineering",
            color: "#3B82F6",
            bg: "#EFF6FF",
            Icon: r.Box,
            num: "02"
        }, {
            slug: "ai-enabled-systems",
            color: "#8B5CF6",
            bg: "#F5F3FF",
            Icon: n.Brain,
            num: "03"
        }, {
            slug: "agentic-workflow-automation",
            color: "#10B981",
            bg: "#ECFDF5",
            Icon: o.Workflow,
            num: "04"
        }, {
            slug: "mobile-app-development",
            color: "#0EA5E9",
            bg: "#F0F9FF",
            Icon: c.Smartphone,
            num: "05"
        }, {
            slug: "data-intelligence",
            color: "#F59E0B",
            bg: "#FFFBEB",
            Icon: d.BarChart3,
            num: "06"
        }],
        p = [{
            id: "1",
            slug: "digital-platform-engineering",
            title: "Platform Engineering",
            tagline: "Resilient platforms built for long-term scale",
            sortOrder: 1
        }, {
            id: "2",
            slug: "saas-product-engineering",
            title: "SaaS Engineering",
            tagline: "From MVP to enterprise-ready multi-tenant SaaS",
            sortOrder: 2
        }, {
            id: "3",
            slug: "ai-enabled-systems",
            title: "AI-Enabled Systems",
            tagline: "Governed AI embedded where it drives efficiency",
            sortOrder: 3
        }, {
            id: "4",
            slug: "agentic-workflow-automation",
            title: "Workflow Automation",
            tagline: "Cross-system automation with full auditability",
            sortOrder: 4
        }, {
            id: "5",
            slug: "mobile-app-development",
            title: "Mobile Development",
            tagline: "Native & cross-platform apps built for performance",
            sortOrder: 5
        }, {
            id: "6",
            slug: "data-intelligence",
            title: "Data Intelligence",
            tagline: "Turn raw data into decisions leadership trusts",
            sortOrder: 6
        }];
    e.s(["default", 0, function({
        services: e
    }) {
        let l = e && e.length > 0 ? e : p,
            r = l.slice(0, 6),
            n = l.length > 6;
        return (0, t.jsx)(h.default, {
            className: "bg-white",
            children: (0, t.jsxs)(m.default, {
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)(x.default, {
                            children: "What We Build"
                        }), (0, t.jsx)("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mt-3",
                            children: "Engineering Across Every Layer"
                        })]
                    }), (0, t.jsxs)(u.default, {
                        variant: "ghost",
                        size: "md",
                        as: "link",
                        href: "/services",
                        className: "flex-shrink-0 text-t2",
                        children: [n ? "See More Services" : "All Services", " ", (0, t.jsx)(a.ArrowUpRight, {
                            className: "w-4 h-4"
                        })]
                    })]
                }), (0, t.jsx)(s.motion.div, {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",
                    variants: {
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: .07
                            }
                        }
                    },
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0,
                        margin: "-80px"
                    },
                    children: r.map((e, l) => {
                        let {
                            color: r,
                            bg: n,
                            Icon: o,
                            num: c
                        } = g.find(t => t.slug === e.slug) ? ? g[l % g.length];
                        return (0, t.jsx)(s.motion.div, {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: 20
                                },
                                show: {
                                    opacity: 1,
                                    y: 0
                                }
                            },
                            transition: {
                                duration: .45,
                                ease: "easeOut"
                            },
                            children: (0, t.jsxs)(i.default, {
                                href: `/services/${e.slug}`,
                                className: "group relative bg-white rounded-2xl p-7 flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                                style: {
                                    borderTop: `4px solid ${r}`
                                },
                                children: [(0, t.jsx)("span", {
                                    className: "absolute right-4 bottom-3 text-[88px] font-black leading-none select-none pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-60",
                                    style: {
                                        color: "#EBEBEB"
                                    },
                                    children: c
                                }), (0, t.jsx)("div", {
                                    className: "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                                    style: {
                                        background: n
                                    },
                                    children: (0, t.jsx)(o, {
                                        className: "w-6 h-6",
                                        style: {
                                            color: r
                                        }
                                    })
                                }), (0, t.jsx)("h3", {
                                    className: "text-lg font-bold text-primary leading-snug relative z-10",
                                    children: e.title
                                }), (0, t.jsx)("p", {
                                    className: "text-sm text-t2 mt-1.5 leading-relaxed flex-1 relative z-10",
                                    children: e.tagline
                                }), (0, t.jsxs)("div", {
                                    className: "mt-5 flex items-center gap-1 text-xs font-semibold relative z-10",
                                    style: {
                                        color: r
                                    },
                                    children: [(0, t.jsx)("span", {
                                        children: "Explore"
                                    }), (0, t.jsx)(a.ArrowUpRight, {
                                        className: "w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    })]
                                })]
                            })
                        }, e.id)
                    })
                }), n && (0, t.jsx)(s.motion.div, {
                    className: "flex justify-center",
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .4,
                        delay: .5
                    },
                    children: (0, t.jsxs)(u.default, {
                        variant: "primary",
                        size: "lg",
                        as: "link",
                        href: "/services",
                        className: "px-10",
                        children: ["View All ", l.length, " Services", " ", (0, t.jsx)(a.ArrowUpRight, {
                            className: "w-4 h-4"
                        })]
                    })
                })]
            })
        })
    }])
}, 66650, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        i = e.i(46932),
        a = e.i(88653),
        l = e.i(22016),
        r = e.i(90597),
        n = e.i(32095),
        o = e.i(1928),
        c = e.i(25652),
        d = e.i(15788),
        m = e.i(7486),
        h = e.i(80555),
        x = e.i(75254);
    let u = (0, x.default)("Scale", [
            ["path", {
                d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
                key: "7g6ntu"
            }],
            ["path", {
                d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
                key: "ijws7r"
            }],
            ["path", {
                d: "M7 21h10",
                key: "1b0cd5"
            }],
            ["path", {
                d: "M12 3v18",
                key: "108xh3"
            }],
            ["path", {
                d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
                key: "3gwbw2"
            }]
        ]),
        g = (0, x.default)("Hotel", [
            ["path", {
                d: "M10 22v-6.57",
                key: "1wmca3"
            }],
            ["path", {
                d: "M12 11h.01",
                key: "z322tv"
            }],
            ["path", {
                d: "M12 7h.01",
                key: "1ivr5q"
            }],
            ["path", {
                d: "M14 15.43V22",
                key: "1q2vjd"
            }],
            ["path", {
                d: "M15 16a5 5 0 0 0-6 0",
                key: "o9wqvi"
            }],
            ["path", {
                d: "M16 11h.01",
                key: "xkw8gn"
            }],
            ["path", {
                d: "M16 7h.01",
                key: "1kdx03"
            }],
            ["path", {
                d: "M8 11h.01",
                key: "1dfujw"
            }],
            ["path", {
                d: "M8 7h.01",
                key: "1vti4s"
            }],
            ["rect", {
                x: "4",
                y: "2",
                width: "16",
                height: "20",
                rx: "2",
                key: "1uxh74"
            }]
        ]);
    var p = e.i(61911),
        f = e.i(72520),
        b = e.i(95468),
        y = e.i(85562),
        v = e.i(28540),
        j = e.i(33334),
        w = e.i(57688),
        N = e.i(59544),
        k = e.i(75157);
    let S = {
            Heart: (0, t.jsx)(r.Heart, {
                className: "w-10 h-10"
            }),
            GraduationCap: (0, t.jsx)(n.GraduationCap, {
                className: "w-10 h-10"
            }),
            ShoppingCart: (0, t.jsx)(o.ShoppingCart, {
                className: "w-10 h-10"
            }),
            TrendingUp: (0, t.jsx)(c.TrendingUp, {
                className: "w-10 h-10"
            }),
            Truck: (0, t.jsx)(d.Truck, {
                className: "w-10 h-10"
            }),
            Building2: (0, t.jsx)(m.Building2, {
                className: "w-10 h-10"
            }),
            Factory: (0, t.jsx)(h.Factory, {
                className: "w-10 h-10"
            }),
            Scale: (0, t.jsx)(u, {
                className: "w-10 h-10"
            }),
            Hotel: (0, t.jsx)(g, {
                className: "w-10 h-10"
            }),
            Users: (0, t.jsx)(p.Users, {
                className: "w-10 h-10"
            })
        },
        F = [{
            id: "1",
            slug: "healthcare",
            title: "Healthcare",
            shortTitle: "Healthcare",
            icon: "Heart",
            color: "#EF4444",
            coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
            tagline: "Platforms that move patients faster and safer.",
            stat: "40%",
            statLabel: "Faster Patient Throughput",
            bullets: ["Patient management & EMR systems", "Telemedicine platforms", "Lab & pharmacy integrations"]
        }, {
            id: "2",
            slug: "edtech",
            title: "EdTech",
            shortTitle: "EdTech",
            icon: "GraduationCap",
            color: "#8B5CF6",
            coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
            tagline: "Learning systems that scale from 10 to 10 million.",
            stat: "3×",
            statLabel: "Student Engagement",
            bullets: ["LMS & live class infrastructure", "AI-based assessment tools", "Content delivery at scale"]
        }, {
            id: "3",
            slug: "ecommerce",
            title: "E-Commerce",
            shortTitle: "E-Commerce",
            icon: "ShoppingCart",
            color: "#F59E0B",
            coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
            tagline: "Storefronts and ops systems built to convert and fulfil.",
            stat: "60%",
            statLabel: "Conversion Increase",
            bullets: ["Custom storefronts & multi-vendor platforms", "Order management & fulfilment", "Personalisation engines"]
        }, {
            id: "4",
            slug: "fintech",
            title: "Fintech",
            shortTitle: "Fintech",
            icon: "TrendingUp",
            color: "#3B82F6",
            coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
            tagline: "Compliant financial systems built for always-on operation.",
            stat: "99.9%",
            statLabel: "Uptime SLA",
            bullets: ["Payment gateways & UPI integrations", "Lending & NBFC platforms", "Compliance dashboards & audit trails"]
        }, {
            id: "5",
            slug: "logistics",
            title: "Logistics",
            shortTitle: "Logistics",
            icon: "Truck",
            color: "#10B981",
            coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
            tagline: "Fleet and supply chain visibility from first to last mile.",
            stat: "35%",
            statLabel: "Ops Cost Reduction",
            bullets: ["Real-time fleet tracking", "Warehouse management systems", "Route optimisation engines"]
        }, {
            id: "6",
            slug: "real-estate",
            title: "Real Estate",
            shortTitle: "Real Estate",
            icon: "Building2",
            color: "#F97316",
            coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
            tagline: "Portals and CRMs that help brokers close faster.",
            stat: "50%",
            statLabel: "Faster Deal Closure",
            bullets: ["Property listing portals", "Broker & channel partner CRM", "Virtual tour integration"]
        }];
    e.s(["default", 0, function({
        industries: e
    }) {
        let r = e && e.length > 0 ? e : [],
            n = r.length > 0 ? r.map((e, t) => {
                let s = F.find(t => t.slug === e.slug) ? ? F[t % F.length];
                return { ...e,
                    shortTitle: (e.title || "").split(/\s*[&\/]\s*/)[0].trim(),
                    icon: e.icon || s.icon,
                    color: s.color,
                    coverImage: e.coverImage || s.coverImage,
                    tagline: e.tagline || s.tagline,
                    stat: e.heroStatNumber || s.stat,
                    statLabel: e.heroStatLabel || s.statLabel,
                    bullets: e.bullets || s.bullets
                }
            }) : F,
            [o, c] = (0, s.useState)(n[0] ? .slug || ""),
            d = n.find(e => e.slug === o) || n[0],
            m = d.color || "#6366F1",
            h = F.find(e => e.slug === d.slug),
            x = S[d.icon] ? d.icon : h ? .icon || "TrendingUp",
            u = S[x],
            g = d.stat || "",
            p = d.statLabel || "",
            C = d.tagline || "",
            A = d.bullets || [],
            I = d.coverImage;
        return (0, t.jsx)(j.default, {
            className: "bg-white",
            children: (0, t.jsxs)(v.default, {
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12",
                    children: [(0, t.jsx)("div", {
                        children: (0, t.jsxs)("h2", {
                            className: "text-3xl md:text-4xl lg:max-w-xl font-bold text-primary mt-3",
                            children: ["Built for Your Industry's", " ", (0, t.jsx)("span", {
                                className: "text-gradient",
                                children: "Specific Challenges"
                            })]
                        })
                    }), (0, t.jsxs)(N.default, {
                        as: "link",
                        href: "/industry",
                        variant: "secondary",
                        size: "sm",
                        className: "text-t2 border-t3 shrink-0",
                        children: ["All Industries ", (0, t.jsx)(y.ArrowRightIcon, {
                            className: "size-3.5"
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide -mx-1 px-1",
                    children: n.map(e => {
                        let s = o === e.slug;
                        return (0, t.jsx)("button", {
                            onClick: () => c(e.slug),
                            className: "flex-shrink-0 px-4 py-2 rounded text-sm font-semibold border transition-all cursor-pointer",
                            style: s ? {
                                background: m,
                                borderColor: m,
                                color: "#fff"
                            } : {
                                background: "transparent",
                                borderColor: "#E5E5E5",
                                color: "#404040"
                            },
                            children: e.shortTitle || e.title
                        }, e.slug)
                    })
                }), (0, t.jsx)(a.AnimatePresence, {
                    mode: "wait",
                    children: (0, t.jsxs)(i.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -12
                        },
                        transition: {
                            duration: .22
                        },
                        className: "grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden",
                        children: [(0, t.jsxs)("div", {
                            className: "bg-white p-8 md:p-10 flex flex-col justify-between gap-8 border-b md:border-b-0",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsxs)("div", {
                                    className: "mb-6",
                                    children: [(0, t.jsx)("span", {
                                        className: "text-7xl md:text-8xl font-black leading-none tracking-tight",
                                        style: {
                                            color: m
                                        },
                                        children: g
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-t3 font-semibold uppercase tracking-widest mt-2",
                                        children: p
                                    })]
                                }), (0, t.jsx)("p", {
                                    className: "text-t2 text-lg leading-relaxed font-medium",
                                    children: C
                                })]
                            }), (0, t.jsx)("ul", {
                                className: "flex flex-col gap-3",
                                children: A.slice(0, 3).map((e, s) => (0, t.jsxs)("li", {
                                    className: "flex items-start gap-3 text-sm text-t2",
                                    children: [(0, t.jsx)(b.CheckCircle2, {
                                        className: "w-4 h-4 mt-0.5 flex-shrink-0",
                                        style: {
                                            color: m
                                        }
                                    }), e]
                                }, s))
                            }), (0, t.jsxs)(l.default, {
                                href: `/industry/${d.slug}`,
                                className: "inline-flex items-center gap-2 text-sm font-semibold group w-fit",
                                style: {
                                    color: m
                                },
                                children: ["Explore ", d.shortTitle || d.title, " ", "solutions", (0, t.jsx)(f.ArrowRight, {
                                    className: "w-4 h-4 transition-transform group-hover:translate-x-1"
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "relative rounded-2xl flex flex-col items-center justify-center p-10 min-h-[320px] overflow-hidden",
                            style: {
                                background: m + "08",
                                borderBottom: `4px solid ${m}`
                            },
                            children: [I ? (0, t.jsxs)("div", {
                                className: "w-full h-full absolute overflow-hidden ",
                                children: [(0, t.jsx)(w.default, {
                                    src: I,
                                    alt: d.title,
                                    width: 540,
                                    height: 440,
                                    className: "absolute w-full  h-full z-0"
                                }), (0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
                                })]
                            }) : (0, t.jsx)("span", {
                                className: "absolute right-4 bottom-2 text-[140px] font-black leading-none select-none pointer-events-none",
                                style: {
                                    color: m + "10"
                                },
                                children: g
                            }), (0, t.jsx)("div", {
                                className: "w-24 bg-white h-24 rounded-2xl flex items-center z-10 justify-center mb-6 shadow-sm",
                                children: (0, t.jsx)("div", {
                                    className: "size-full flex items-center justify-center",
                                    style: {
                                        background: m + "20",
                                        color: m
                                    },
                                    children: u
                                })
                            }), (0, t.jsx)("h3", {
                                className: (0, k.cn)("text-xl font-bold mb-1 text-center z-10", I ? "text-white" : "text-primary"),
                                children: d.title
                            }), (0, t.jsx)("p", {
                                className: (0, k.cn)("text-xs uppercase tracking-widest font-medium text-center z-10", I ? "text-white" : "text-t2"),
                                children: "Industry Solutions"
                            })]
                        })]
                    }, o)
                })]
            })
        })
    }], 66650)
}, 13405, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(46932),
        i = e.i(57688),
        a = e.i(22016),
        l = e.i(28540),
        r = e.i(33334),
        n = e.i(22186),
        o = e.i(59544),
        c = e.i(72520);
    let d = {
            Healthcare: "#EF4444",
            Fintech: "#3B82F6",
            EdTech: "#8B5CF6",
            "E-Commerce": "#F59E0B",
            Logistics: "#10B981",
            "Real Estate": "#F97316"
        },
        m = [{
            id: "1",
            slug: "healthcare-patient-platform",
            title: "Patient Management Platform",
            coverImage: "/images/home/case-studies-section/p-m-p.png",
            clientName: "HealthFirst",
            industry: "Healthcare",
            isFeatured: !0,
            challenge: "Paper-based records causing critical delays in patient care.",
            results: [{
                metric: "40%",
                label: "Faster throughput"
            }, {
                metric: "0",
                label: "Data loss incidents"
            }, {
                metric: "8wks",
                label: "Delivered"
            }],
            techStack: ["Next.js", "NestJS", "PostgreSQL"]
        }, {
            id: "2",
            slug: "fintech-reconciliation",
            title: "Automated Reconciliation Engine",
            coverImage: "/images/home/case-studies-section/a-r-e.png",
            clientName: "PayStream",
            industry: "Fintech",
            isFeatured: !0,
            challenge: "Manual reconciliation taking 40+ hrs/week with high error rates.",
            results: [{
                metric: "70%",
                label: "Time saved"
            }, {
                metric: "0",
                label: "Critical errors"
            }, {
                metric: "6wks",
                label: "Delivered early"
            }],
            techStack: ["Python", "FastAPI", "React", "PostgreSQL"]
        }];
    e.s(["default", 0, function({
        caseStudies: e
    }) {
        let h = e && e.length > 0 ? e : m;
        return (0, t.jsx)(r.default, {
            className: "bg-surface",
            children: (0, t.jsxs)(l.default, {
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)(n.default, {
                            children: "Case Studies"
                        }), (0, t.jsx)("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mt-3",
                            children: "Real Work. Real Results."
                        })]
                    }), (0, t.jsxs)(o.default, {
                        variant: "ghost",
                        size: "md",
                        as: "link",
                        href: "/case-studies",
                        className: "flex-shrink-0 text-t2",
                        children: ["View All ", (0, t.jsx)(c.ArrowRight, {
                            className: "w-4 h-4"
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: h.map((e, l) => {
                        let r = d[e.industry] || "#6366F1",
                            n = e.results || [],
                            o = e.techStack || [],
                            m = e.challenge || "";
                        return (0, t.jsx)(s.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .4,
                                delay: .1 * l
                            },
                            children: (0, t.jsxs)(a.default, {
                                href: `/case-studies/${e.slug}`,
                                className: "group relative bg-white rounded-2xl p-4 md:p-4 lg:p-6 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full",
                                style: {
                                    borderLeft: `5px solid ${r}`
                                },
                                children: [(0, t.jsx)("div", {
                                    className: "mb-6 -mx-8 -mt-8 h-40 rounded-t-2xl relative overflow-hidden",
                                    children: (0, t.jsx)(i.default, {
                                        src: e.coverImage || "",
                                        alt: e.title,
                                        fill: !0,
                                        className: "object-cover",
                                        unoptimized: !0
                                    })
                                }), (0, t.jsx)("span", {
                                    className: "absolute right-6 bottom-4 font-black leading-none select-none pointer-events-none",
                                    style: {
                                        fontSize: "140px",
                                        color: "#F0F0F0",
                                        lineHeight: 1
                                    },
                                    children: String(l + 1).padStart(2, "0")
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center justify-between mb-5 relative z-10",
                                    children: [(0, t.jsx)("span", {
                                        className: "text-xs font-bold px-3 py-1 rounded-full",
                                        style: {
                                            color: r,
                                            background: r + "15"
                                        },
                                        children: e.industry
                                    }), (0, t.jsx)("div", {
                                        className: "flex gap-1.5",
                                        children: (o || []).slice(0, 3).map(e => (0, t.jsx)("span", {
                                            className: "w-2 h-2 rounded-full bg-border",
                                            title: e
                                        }, e))
                                    })]
                                }), (0, t.jsx)("h3", {
                                    className: "text-xl font-bold text-primary relative z-10",
                                    children: e.title
                                }), m && (0, t.jsxs)("p", {
                                    className: "text-sm text-t2 mt-2 italic relative z-10 line-clamp-2",
                                    children: ["“", m, "”"]
                                }), n.length > 0 && (0, t.jsx)("div", {
                                    className: "grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border relative z-10",
                                    children: (n || []).slice(0, 3).map(e => (0, t.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, t.jsx)("span", {
                                            className: "text-3xl font-black text-primary leading-none",
                                            style: {},
                                            children: e.metric
                                        }), (0, t.jsx)("span", {
                                            className: "text-xs text-t3 mt-1 leading-tight",
                                            children: e.label
                                        })]
                                    }, e.label))
                                }), (0, t.jsxs)("div", {
                                    className: "mt-5 flex items-center gap-1.5 text-xs font-semibold relative z-10",
                                    style: {
                                        color: r
                                    },
                                    children: ["Read case study", (0, t.jsx)(c.ArrowRight, {
                                        className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                    })]
                                })]
                            })
                        }, e.id)
                    })
                })]
            })
        })
    }])
}, 69958, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(46932),
        i = e.i(72520),
        a = e.i(23287),
        a = a,
        l = e.i(28540),
        r = e.i(33334),
        n = e.i(22186),
        o = e.i(59544);
    let c = [{
        id: "project",
        title: "Project-Based",
        tagline: "Fixed scope. Clear outcome.",
        badge: "Most Popular",
        duration: "2–6 months",
        pricing: "Fixed or T&M",
        bestFor: "New products, rebuilds, specific deliverables",
        features: ["Dedicated project manager", "Bi-weekly sprint demos", "Full IP ownership"],
        highlight: !0,
        cta: "Get a Quote",
        ctaHref: "/contact?model=project"
    }, {
        id: "staff",
        title: "Staff Augmentation",
        tagline: "Scale your team. Fast.",
        badge: "Flexible",
        duration: "Monthly",
        pricing: "Monthly retainer",
        bestFor: "Growing product teams, skill gap coverage",
        features: ["Pre-vetted senior engineers", "Onboard in 3–5 days", "No long-term lock-in"],
        highlight: !1,
        cta: "Discuss Team Needs",
        ctaHref: "/staff-augmentation"
    }, {
        id: "retainer",
        title: "Ongoing Retainer",
        tagline: "Long-term partner.",
        badge: "Best Value",
        duration: "6–12+ months",
        pricing: "Monthly fixed",
        bestFor: "SaaS products, long-term roadmaps",
        features: ["Dedicated core team", "Monthly roadmap planning", "Priority SLA response"],
        cta: "Explore Partnership",
        ctaHref: "/contact?model=retainer"
    }];
    e.s(["default", 0, function() {
        return (0, t.jsx)(r.default, {
            className: "bg-[#F5F3FF]",
            children: (0, t.jsxs)(l.default, {
                children: [(0, t.jsxs)("div", {
                    className: "text-center mb-12",
                    children: [(0, t.jsx)(n.default, {
                        children: "Engagement Models"
                    }), (0, t.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold text-primary mt-3 mb-3",
                        children: "Work With Us Your Way"
                    }), (0, t.jsx)("p", {
                        className: "text-t2 max-w-md mx-auto text-sm",
                        children: "Fixed project, team extension, or long-term partner — we adapt to you."
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                    children: c.map((e, l) => (0, t.jsxs)(s.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .4,
                            delay: .1 * l
                        },
                        className: `relative rounded-2xl p-7 md:p-4 lg:p-7 flex flex-col ${e.highlight?"text-white":"bg-white border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"}`,
                        style: e.highlight ? {
                            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                        } : {},
                        children: [(0, t.jsx)("span", {
                            className: `self-start text-sm md:text-xs lg:text-sm font-semibold px-6 py-2.5 rounded-full mb-5 ${e.highlight?"bg-white/20 text-white":"bg-accent/10 text-accent"}`,
                            children: e.badge
                        }), (0, t.jsx)("h3", {
                            className: `text-xl md:text-base lg:text-xl font-semibold ${e.highlight?"text-white":"text-primary"}`,
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: `text-sm md:text-xs lg:text-sm font-medium mt-0.5 mb-5 ${e.highlight?"text-white/80":"text-accent"}`,
                            children: e.tagline
                        }), (0, t.jsx)("div", {
                            className: `grid grid-cols-2 gap-x-4 gap-y-3 py-4 border-y mb-5 ${e.highlight?"border-white/20":"border-border"}`,
                            children: [
                                ["Duration", e.duration],
                                ["Pricing", e.pricing],
                                ["Best for", e.bestFor]
                            ].map(([s, i]) => (0, t.jsxs)("div", {
                                className: "Best for" === s ? "col-span-2" : "",
                                children: [(0, t.jsx)("p", {
                                    className: `text-xs md:text-[10px] lg:text-xs uppercase tracking-wider font-semibold ${e.highlight?"text-white/70":"text-t3"}`,
                                    children: s
                                }), (0, t.jsx)("p", {
                                    className: `text-sm md:text-xs lg:text-sm font-medium mt-0.5 ${e.highlight?"text-white":"text-primary"}`,
                                    children: i
                                })]
                            }, s))
                        }), (0, t.jsx)("ul", {
                            className: "flex flex-col gap-2.5 flex-1 mb-6",
                            children: e.features.map(s => (0, t.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [(0, t.jsx)(a.default, {
                                    className: `w-4 h-4 flex-shrink-0 ${e.highlight?"text-white/80":"text-accent"}`
                                }), (0, t.jsx)("span", {
                                    className: `text-sm md:text-xs lg:text-sm ${e.highlight?"text-white/90":"text-t2"}`,
                                    children: s
                                })]
                            }, s))
                        }), (0, t.jsxs)(o.default, {
                            variant: e.highlight ? "ghost" : "secondary",
                            size: "md",
                            as: "link",
                            href: e.ctaHref,
                            className: `w-full md:text-xs md:px-4 lg:text-sm justify-center font-medium ${e.highlight?"text-white hover:text-white border-white hover:bg-white/10 border":""}`,
                            children: [e.cta, " ", (0, t.jsx)(i.ArrowRight, {
                                className: "w-4 h-4"
                            })]
                        })]
                    }, e.id))
                }), (0, t.jsxs)("p", {
                    className: "text-center text-sm text-t3 mt-16",
                    children: ["Unsure which fits?", " ", (0, t.jsx)("a", {
                        href: "/contact",
                        className: "text-accent hover:underline font-medium",
                        children: "Book a free 30-min call"
                    }), " ", "and we'll guide you."]
                })]
            })
        })
    }], 69958)
}, 28335, e => {
    "use strict";
    var t = e.i(43476);
    e.i(71645);
    var s = e.i(46932),
        i = e.i(55436),
        a = e.i(55716),
        l = e.i(97625),
        r = e.i(81418),
        n = e.i(9912),
        o = e.i(72520),
        c = e.i(28540),
        d = e.i(33334),
        m = e.i(22186),
        h = e.i(59544),
        x = e.i(75157);
    let u = [{
            number: "01",
            title: "Discovery",
            duration: "1–2 weeks",
            description: "We dig into your goals, tech stack, and constraints — so nothing surprises us later.",
            deliverable: "Project Brief",
            items: ["Stakeholder interviews", "Technical audit", "Requirement mapping", "Risk identification"],
            icon: i.Search,
            color: "from-violet-500/15 to-indigo-500/10",
            iconBg: "bg-violet-100 text-violet-600",
            numColor: "text-violet-500"
        }, {
            number: "02",
            title: "Architecture",
            duration: "1-2 weeks",
            description: "System design, tech stack selection, sprint planning, milestone definition.",
            deliverable: "Technical Spec",
            items: ["System design doc", "Tech stack decision", "Sprint roadmap", "Milestone plan"],
            icon: a.GitBranch,
            color: "from-blue-500/15 to-cyan-500/10",
            iconBg: "bg-blue-100 text-blue-600",
            numColor: "text-blue-500"
        }, {
            number: "03",
            title: "Development",
            duration: "2-week sprints",
            description: "Sprint-based delivery with working demos every 14 days. You see progress — never waiting months.",
            deliverable: "Working Demos",
            items: ["Bi-weekly demos", "Code reviews", "Continuous integration", "Progress reports"],
            icon: l.Code2,
            color: "from-indigo-500/15 to-purple-500/10",
            iconBg: "bg-indigo-100 text-indigo-600",
            numColor: "text-indigo-500"
        }, {
            number: "04",
            title: "QA & Testing",
            duration: "Every Sprint",
            description: "Every feature tested for functionality, security, performance, and cross-device compatibility.",
            deliverable: "Test Reports",
            items: ["Automated testing", "Security audits", "Performance testing", "Device compatibility"],
            icon: r.ShieldCheck,
            color: "from-emerald-500/15 to-teal-500/10",
            iconBg: "bg-emerald-100 text-emerald-600",
            numColor: "text-emerald-500"
        }, {
            number: "05",
            title: "Launch & Support",
            duration: "30-day included",
            description: "Zero-downtime deployment, full documentation handover, and 30 days free post-launch support.",
            deliverable: "Live Product",
            items: ["Zero-downtime deploy", "Full documentation", "30-day support", "Monitoring setup"],
            icon: n.Rocket,
            color: "from-orange-500/15 to-amber-500/10",
            iconBg: "bg-orange-100 text-orange-600",
            numColor: "text-orange-500"
        }],
        g = () => (0, t.jsxs)("div", {
            className: "hidden py-20 lg:grid grid-cols-5 relative gap-3",
            children: [(0, t.jsx)("div", {
                className: "h-0.5 bg-t3 z-0 w-full absolute top-1/2 inset-x-0 -translate-y-1/2"
            }), u.map((e, i) => (0, t.jsx)(s.motion.div, {
                className: (0, x.cn)("flex-1 z-10 group", 1 == i || 3 == i ? "-mt-16" : ""),
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .3,
                    delay: .3
                },
                children: (0, t.jsxs)(s.motion.div, {
                    className: "bg-white hover:bg-[#ECF8FF] px-4 py-6 rounded-md border border-border flex flex-col gap-3",
                    initial: {
                        opacity: 0,
                        x: -12
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: .4 + .05 * i
                    },
                    children: [(0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, t.jsx)("span", {
                            className: "font-black text-3xl leading-none select-none pointer-events-none text-accent-alt/15",
                            children: String(i + 1).padStart(2, "0")
                        }), (0, t.jsx)("div", {
                            className: "size-14 shrink-0 rounded-2xl bg-surface-2/30 flex items-center justify-center",
                            children: (0, t.jsx)(e.icon, {
                                className: "size-6 text-accent group-hover:animate-spin",
                                style: {
                                    animationDuration: "3s"
                                }
                            })
                        })]
                    }), (0, t.jsx)("span", {
                        className: "font-bold text-primary text-sm xl:text-base",
                        children: e.title
                    }), (0, t.jsx)("span", {
                        className: "text-xs xl:text-sm !text-[#084AA0]",
                        children: e.duration
                    }), (0, t.jsx)("p", {
                        className: "text-xs xl:text-sm. text-t2",
                        children: e.description
                    }), (0, t.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: e.items.map((e, s) => (0, t.jsxs)("div", {
                            className: "flex items-center gap-2 bg-white px-2 py-1.5",
                            children: [(0, t.jsx)("div", {
                                className: "size-2 rounded-full bg-accent"
                            }), (0, t.jsx)("span", {
                                className: "text-xs xl:text-sm. text-t2",
                                children: e
                            })]
                        }, s))
                    }), (0, t.jsxs)("div", {
                        className: "p-2 xl:p-3 flex flex-col gap-1 border border-border rounded-md",
                        children: [(0, t.jsx)("span", {
                            className: "font-bold text-primary text-xs",
                            children: e.deliverable
                        }), (0, t.jsx)("span", {
                            className: "text-xs text-accent-alt",
                            children: "Documented & Delivered"
                        })]
                    })]
                })
            }, e.number))]
        });
    e.s(["default", 0, function() {
        return (0, t.jsx)(d.default, {
            children: (0, t.jsxs)(c.default, {
                children: [(0, t.jsxs)("div", {
                    className: "text-center mb-12",
                    children: [(0, t.jsx)(m.default, {
                        children: "Our Process"
                    }), (0, t.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold text-primary mt-3 mb-4",
                        children: "How We Deliver Without Surprises"
                    }), (0, t.jsx)("p", {
                        className: "text-t2 max-w-xl mx-auto",
                        children: "A structured, transparent process so you always know what's happening and what's next."
                    })]
                }), (0, t.jsx)(g, {}), (0, t.jsx)("div", {
                    className: "lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: u.map((e, i) => {
                        let a = e.icon;
                        return (0, t.jsxs)(s.motion.div, {
                            className: `rounded-xl border p-5 bg-gradient-to-br ${e.color} border-accent/15 relative overflow-hidden`,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .4,
                                delay: .1 * i
                            },
                            whileHover: {
                                translateY: -4,
                                boxShadow: "0 12px 24px rgba(1, 90, 217, 0.15)"
                            },
                            children: [i < u.length - 1 && (0, t.jsx)(s.motion.div, {
                                className: "absolute left-7 top-full w-0.5 h-4 bg-gradient-to-b from-accent/50 to-accent/0",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .5,
                                    delay: .1 * i + .3
                                }
                            }), (0, t.jsxs)("div", {
                                className: "flex items-start gap-4 relative z-10",
                                children: [(0, t.jsxs)("div", {
                                    className: "relative flex-shrink-0",
                                    children: [(0, t.jsx)(s.motion.div, {
                                        className: `w-12 h-12 rounded-xl flex items-center justify-center ${e.iconBg}`,
                                        whileHover: {
                                            scale: 1.1,
                                            rotate: 5
                                        },
                                        transition: {
                                            duration: .2
                                        },
                                        children: (0, t.jsx)(a, {
                                            className: "w-6 h-6"
                                        })
                                    }), (0, t.jsx)(s.motion.div, {
                                        className: "absolute -top-1 -right-1 w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold",
                                        initial: {
                                            scale: 0
                                        },
                                        whileInView: {
                                            scale: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            type: "spring",
                                            delay: .1 * i + .2
                                        },
                                        children: i + 1
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [(0, t.jsx)("h3", {
                                            className: "text-sm font-bold text-primary",
                                            children: e.title
                                        }), (0, t.jsx)("span", {
                                            className: "text-xs text-accent font-semibold px-2 py-1 bg-white/40 rounded-full",
                                            children: e.duration
                                        })]
                                    }), (0, t.jsx)("p", {
                                        className: "text-sm text-t2 mt-2 leading-relaxed",
                                        children: e.description
                                    }), (0, t.jsx)(s.motion.div, {
                                        className: "mt-3 space-y-1",
                                        initial: {
                                            opacity: 0
                                        },
                                        whileInView: {
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            duration: .3
                                        },
                                        children: e.items.slice(0, 2).map((e, a) => (0, t.jsxs)(s.motion.div, {
                                            className: "flex items-center gap-2 text-xs text-t2",
                                            initial: {
                                                opacity: 0,
                                                x: -8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: .2,
                                                delay: .1 * i + .3 + .05 * a
                                            },
                                            children: [(0, t.jsx)(s.motion.div, {
                                                className: "w-1 h-1 rounded-full bg-accent flex-shrink-0",
                                                animate: {
                                                    scale: [1, 1.2, 1]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: 1 / 0,
                                                    delay: .1 * i + .1 * a
                                                }
                                            }), e]
                                        }, e))
                                    }), (0, t.jsxs)(s.motion.div, {
                                        className: "mt-3 pt-3 border-t border-white/20",
                                        initial: {
                                            opacity: 0
                                        },
                                        whileInView: {
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            delay: .1 * i + .4
                                        },
                                        children: [(0, t.jsx)("span", {
                                            className: "text-xs text-primary/70 font-bold",
                                            children: "Deliverable:"
                                        }), (0, t.jsx)("span", {
                                            className: "text-xs font-bold text-accent ml-1.5",
                                            children: e.deliverable
                                        })]
                                    })]
                                })]
                            })]
                        }, e.number)
                    })
                }), (0, t.jsx)("div", {
                    className: "flex justify-center mt-10",
                    children: (0, t.jsxs)(h.default, {
                        variant: "ghost",
                        size: "md",
                        as: "link",
                        href: "/process",
                        children: ["See Full Process ", (0, t.jsx)(o.ArrowRight, {
                            className: "w-4 h-4"
                        })]
                    })
                })]
            })
        })
    }])
}, 54720, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        i = e.i(46932),
        a = e.i(88653),
        l = e.i(51445),
        r = e.i(18393),
        n = e.i(27927),
        o = e.i(55711),
        c = e.i(58041);
    let d = (0, e.i(75254).default)("GitMerge", [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }],
        ["path", {
            d: "M6 21V9a9 9 0 0 0 9 9",
            key: "7kw0sc"
        }]
    ]);
    var m = e.i(72520),
        h = e.i(28540),
        x = e.i(33334),
        u = e.i(22186),
        g = e.i(59544);
    let p = [{
            id: "frontend",
            label: "Frontend",
            icon: l.Monitor,
            items: [{
                name: "Next.js",
                icon: "nextdotjs",
                color: "000000"
            }, {
                name: "React",
                icon: "react",
                color: "61DAFB"
            }, {
                name: "TypeScript",
                icon: "typescript",
                color: "3178C6"
            }, {
                name: "Tailwind CSS",
                icon: "tailwindcss",
                color: "06B6D4"
            }, {
                name: "Flutter",
                icon: "flutter",
                color: "02569B"
            }, {
                name: "React Native",
                icon: "react",
                color: "61DAFB"
            }]
        }, {
            id: "backend",
            label: "Backend",
            icon: r.Server,
            items: [{
                name: "NestJS",
                icon: "nestjs",
                color: "E0234E"
            }, {
                name: "Node.js",
                icon: "nodedotjs",
                color: "339933"
            }, {
                name: "Python",
                icon: "python",
                color: "3776AB"
            }, {
                name: "FastAPI",
                icon: "fastapi",
                color: "009688"
            }, {
                name: "Django",
                icon: "django",
                color: "092E20"
            }, {
                name: "GraphQL",
                icon: "graphql",
                color: "E10098"
            }]
        }, {
            id: "cloud",
            label: "Cloud & Infra",
            icon: n.Cloud,
            items: [{
                name: "AWS",
                icon: "/images/home/trust-bar-section/aws-icon.svg",
                color: "FF9900"
            }, {
                name: "Google Cloud",
                icon: "googlecloud",
                color: "4285F4"
            }, {
                name: "Microsoft Azure",
                icon: "/images/home/trust-bar-section/microsoft-logo-only.svg",
                color: "0078D4"
            }, {
                name: "Docker",
                icon: "docker",
                color: "2496ED"
            }, {
                name: "Kubernetes",
                icon: "kubernetes",
                color: "326CE5"
            }, {
                name: "Vercel",
                icon: "vercel",
                color: "000000"
            }]
        }, {
            id: "ai",
            label: "AI & ML",
            icon: o.Brain,
            items: [{
                name: "OpenAI",
                icon: "/images/home/tech-stack/openai.svg",
                color: "412991"
            }, {
                name: "LangChain",
                icon: "/images/home/tech-stack/langchain.png",
                color: "2F5233"
            }, {
                name: "HuggingFace",
                icon: "huggingface",
                color: "FFD21E"
            }, {
                name: "TensorFlow",
                icon: "tensorflow",
                color: "FF6F00"
            }, {
                name: "Pinecone",
                icon: "/images/home/tech-stack/pincone.webp",
                color: "3F3F46"
            }, {
                name: "Anthropic",
                icon: "anthropic",
                color: "D4AF37"
            }]
        }, {
            id: "database",
            label: "Database",
            icon: c.Database,
            items: [{
                name: "PostgreSQL",
                icon: "postgresql",
                color: "336791"
            }, {
                name: "MongoDB",
                icon: "mongodb",
                color: "13AA52"
            }, {
                name: "Redis",
                icon: "redis",
                color: "DC382D"
            }, {
                name: "MySQL",
                icon: "mysql",
                color: "4479A1"
            }, {
                name: "Supabase",
                icon: "supabase",
                color: "3ECF8E"
            }, {
                name: "Elasticsearch",
                icon: "elasticsearch",
                color: "005571"
            }]
        }, {
            id: "devops",
            label: "DevOps",
            icon: d,
            items: [{
                name: "GitHub Actions",
                icon: "githubactions",
                color: "2088FF"
            }, {
                name: "Nginx",
                icon: "nginx",
                color: "009639"
            }, {
                name: "PM2",
                icon: "pm2",
                color: "2B037A"
            }, {
                name: "Terraform",
                icon: "terraform",
                color: "7B42BC"
            }, {
                name: "Sentry",
                icon: "sentry",
                color: "362D59"
            }, {
                name: "Datadog",
                icon: "datadog",
                color: "632CA6"
            }]
        }],
        f = (e, t) => `https://cdn.simpleicons.org/${e}/${t}`;
    e.s(["default", 0, function() {
        let [e, l] = (0, s.useState)(p[0].id), r = p.find(t => t.id === e) || p[0];
        return (0, t.jsx)(x.default, {
            className: "bg-surface-2",
            children: (0, t.jsxs)(h.default, {
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)(u.default, {
                            children: "Technology Stack"
                        }), (0, t.jsxs)("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mt-3 mb-4",
                            children: ["We Choose the Right Tool", (0, t.jsx)("br", {
                                className: "hidden md:block"
                            }), " for Your Problem"]
                        }), (0, t.jsx)("p", {
                            className: "text-t2 max-w-xl",
                            children: "No religion about tech stacks. We select tools based on performance, scalability, and your team's ability to own them."
                        })]
                    }), (0, t.jsxs)(g.default, {
                        variant: "ghost",
                        size: "md",
                        as: "link",
                        href: "/tech-stack",
                        className: "flex-shrink-0",
                        children: ["Full Tech Stack ", (0, t.jsx)(m.ArrowRight, {
                            className: "w-4 h-4"
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "hidden md:grid grid-cols-12 gap-8",
                    children: [(0, t.jsx)("div", {
                        className: "col-span-3 flex flex-col gap-1",
                        children: p.map(s => {
                            let i = s.icon,
                                a = e === s.id;
                            return (0, t.jsxs)("button", {
                                onClick: () => l(s.id),
                                className: `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all text-left ${a?"bg-accent text-white shadow-sm":"text-t2 hover:bg-surface-3"}`,
                                children: [(0, t.jsx)(i, {
                                    className: "w-4 h-4 flex-shrink-0"
                                }), (0, t.jsx)("span", {
                                    className: "text-sm font-medium",
                                    children: s.label
                                })]
                            }, s.id)
                        })
                    }), (0, t.jsx)("div", {
                        className: "col-span-9",
                        children: (0, t.jsx)(a.AnimatePresence, {
                            mode: "wait",
                            children: (0, t.jsx)(i.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: 12
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                exit: {
                                    opacity: 0,
                                    x: -12
                                },
                                transition: {
                                    duration: .2
                                },
                                className: "grid grid-cols-3 gap-4",
                                children: r.items.map((e, s) => (0, t.jsxs)(i.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .05 * s
                                    },
                                    className: "bg-surface border border-border rounded-xl p-5 flex items-center gap-4 hover:border-accent/30 hover:shadow-sm transition-all group",
                                    children: [(0, t.jsx)("img", {
                                        src: e.icon.startsWith("/") ? e.icon : f(e.icon, e.color),
                                        alt: e.name,
                                        className: "w-10 h-10 flex-shrink-0"
                                    }), (0, t.jsx)("span", {
                                        className: "text-sm font-medium text-t2 group-hover:text-primary transition-colors",
                                        children: e.name
                                    })]
                                }, e.name))
                            }, e)
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "md:hidden",
                    children: [(0, t.jsx)("div", {
                        className: "flex overflow-x-auto gap-2 pb-3",
                        children: p.map(s => {
                            let i = s.icon;
                            return (0, t.jsxs)("button", {
                                onClick: () => l(s.id),
                                className: `flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all ${e===s.id?"bg-accent text-white border-accent":"border-border text-t2 bg-surface hover:border-accent/30"}`,
                                children: [(0, t.jsx)(i, {
                                    className: "w-3.5 h-3.5"
                                }), s.label]
                            }, s.id)
                        })
                    }), (0, t.jsx)(a.AnimatePresence, {
                        mode: "wait",
                        children: (0, t.jsx)(i.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 8
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
                                duration: .2
                            },
                            className: "grid grid-cols-2 gap-3 mt-4",
                            children: r.items.map(e => (0, t.jsxs)("div", {
                                className: "bg-surface border border-border rounded-xl p-4 flex items-center gap-3",
                                children: [(0, t.jsx)("img", {
                                    src: e.icon.startsWith("/") ? e.icon : f(e.icon, e.color),
                                    alt: e.name,
                                    className: "w-9 h-9 flex-shrink-0"
                                }), (0, t.jsx)("span", {
                                    className: "text-xs font-medium text-t2",
                                    children: e.name
                                })]
                            }, e.name))
                        }, e)
                    })]
                })]
            })
        })
    }], 54720)
}, 15169, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        i = e.i(46932),
        a = e.i(69638),
        l = e.i(87316),
        r = e.i(94983),
        n = e.i(63488),
        o = e.i(28540),
        c = e.i(33334),
        d = e.i(22186),
        m = e.i(59544),
        h = e.i(9165);
    let x = [{
            icon: l.Calendar,
            label: "Book a Call",
            description: "30-min discovery call via Calendly",
            href: "https://calendly.com/brihatinfotech",
            color: "text-accent",
            bg: "bg-accent/8"
        }, {
            icon: r.MessageCircle,
            label: "WhatsApp",
            description: "Chat with us directly",
            href: "https://wa.me/916202126679",
            color: "text-green-600",
            bg: "bg-green-50"
        }, {
            icon: n.Mail,
            label: "Email Us",
            description: "hello@brihatinfotech.com",
            href: "mailto:hello@brihatinfotech.com",
            color: "text-purple-600",
            bg: "bg-purple-50"
        }],
        u = ["Digital Platform Engineering", "SaaS Product Engineering", "AI-Enabled Business Systems", "Agentic & Workflow Automation", "Mobile App Development", "Data Intelligence & Dashboards", "Other / Not Sure Yet"];
    e.s(["default", 0, function() {
        let [e, l] = (0, s.useState)({
            name: "",
            email: "",
            company: "",
            serviceInterest: "",
            message: ""
        }), [r, n] = (0, s.useState)("idle"), [g, p] = (0, s.useState)(""), f = "w-full px-4 py-3 bg-surface border border-border rounded-lg text-primary text-sm placeholder:text-t3 focus:outline-none focus:border-accent focus:bg-surface transition-all", b = e => {
            l(t => ({ ...t,
                [e.target.name]: e.target.value
            }))
        }, y = async t => {
            t.preventDefault(), n("submitting"), p("");
            try {
                await (0, h.submitLead)({
                    name: e.name,
                    email: e.email,
                    company: e.company,
                    serviceInterest: e.serviceInterest,
                    message: e.message,
                    sourcePage: "/"
                }), n("success")
            } catch (e) {
                console.error(e), p("Something went wrong. Please try again or reach out via email."), n("error")
            }
        };
        return (0, t.jsx)(c.default, {
            className: "",
            children: (0, t.jsx)(o.default, {
                children: (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)(d.default, {
                            children: "Get In Touch"
                        }), (0, t.jsx)("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mt-3 mb-4",
                            children: "Ready to Build Something Great?"
                        }), (0, t.jsx)("p", {
                            className: "text-t2 leading-relaxed max-w-md",
                            children: "Tell us about your project. We'll review it and get back to you within 24 hours with honest thoughts and a clear path forward."
                        }), (0, t.jsx)("div", {
                            className: "flex flex-col gap-3 mt-8",
                            children: x.map(e => {
                                let s = e.icon;
                                return (0, t.jsxs)("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all group",
                                    children: [(0, t.jsx)("div", {
                                        className: `w-10 h-10 ${e.bg} rounded-lg flex items-center justify-center flex-shrink-0`,
                                        children: (0, t.jsx)(s, {
                                            className: `w-5 h-5 ${e.color}`
                                        })
                                    }), (0, t.jsxs)("div", {
                                        children: [(0, t.jsx)("p", {
                                            className: "text-sm font-semibold text-primary group-hover:text-accent transition-colors",
                                            children: e.label
                                        }), (0, t.jsx)("p", {
                                            className: "text-xs text-t3 mt-0.5",
                                            children: e.description
                                        })]
                                    })]
                                }, e.label)
                            })
                        }), (0, t.jsxs)("p", {
                            className: "mt-6 text-xs text-t3 flex items-center gap-1.5",
                            children: [(0, t.jsx)(a.CheckCircle, {
                                className: "w-3.5 h-3.5 text-green-500 flex-shrink-0"
                            }), "We respond to all enquiries within 24 business hours."]
                        })]
                    }), (0, t.jsx)(i.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .5
                        },
                        children: "success" === r ? (0, t.jsxs)("div", {
                            className: "flex flex-col items-center justify-center h-full gap-4 py-16 text-center",
                            children: [(0, t.jsx)("div", {
                                className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center",
                                children: (0, t.jsx)(a.CheckCircle, {
                                    className: "w-8 h-8 text-green-500"
                                })
                            }), (0, t.jsx)("h3", {
                                className: "text-xl font-bold text-primary",
                                children: "Message Received!"
                            }), (0, t.jsx)("p", {
                                className: "text-t2 max-w-sm",
                                children: "Thank you for reaching out. We'll review your project details and get back to you within 24 hours."
                            }), (0, t.jsx)("button", {
                                onClick: () => {
                                    n("idle"), l({
                                        name: "",
                                        email: "",
                                        company: "",
                                        serviceInterest: "",
                                        message: ""
                                    })
                                },
                                className: "text-sm text-accent hover:underline mt-2",
                                children: "Send another message"
                            })]
                        }) : (0, t.jsxs)("form", {
                            onSubmit: y,
                            className: "flex flex-col gap-4",
                            children: [(0, t.jsxs)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-xs font-medium text-t2 mb-1.5",
                                        children: "Name *"
                                    }), (0, t.jsx)("input", {
                                        name: "name",
                                        value: e.name,
                                        onChange: b,
                                        required: !0,
                                        placeholder: "Your full name",
                                        className: f
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("label", {
                                        className: "block text-xs font-medium text-t2 mb-1.5",
                                        children: "Email *"
                                    }), (0, t.jsx)("input", {
                                        name: "email",
                                        type: "email",
                                        value: e.email,
                                        onChange: b,
                                        required: !0,
                                        placeholder: "you@company.com",
                                        className: f
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("label", {
                                    className: "block text-xs font-medium text-t2 mb-1.5",
                                    children: "Company"
                                }), (0, t.jsx)("input", {
                                    name: "company",
                                    value: e.company,
                                    onChange: b,
                                    placeholder: "Your company name",
                                    className: f
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsx)("label", {
                                    className: "block text-xs font-medium text-t2 mb-1.5",
                                    children: "Service Interest"
                                }), (0, t.jsxs)("select", {
                                    name: "serviceInterest",
                                    value: e.serviceInterest,
                                    onChange: b,
                                    className: `${f} appearance-none pr-10 cursor-pointer`,
                                    children: [(0, t.jsx)("option", {
                                        value: "",
                                        children: "Select a service..."
                                    }), u.map(e => (0, t.jsx)("option", {
                                        value: e,
                                        children: e
                                    }, e))]
                                }), (0, t.jsx)("div", {
                                    className: "pointer-events-none absolute right-3 bottom-3.5",
                                    children: (0, t.jsx)("svg", {
                                        className: "w-4 h-4 text-t3",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        })
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("label", {
                                    className: "block text-xs font-medium text-t2 mb-1.5",
                                    children: "Message *"
                                }), (0, t.jsx)("textarea", {
                                    name: "message",
                                    value: e.message,
                                    onChange: b,
                                    required: !0,
                                    rows: 5,
                                    placeholder: "Tell us about your project, goals, and timeline...",
                                    className: f
                                })]
                            }), "error" === r && (0, t.jsx)("p", {
                                className: "text-sm text-red-500",
                                children: g
                            }), e.message.length > 0 && e.message.length < 10 && (0, t.jsxs)("p", {
                                className: "text-sm text-red-500",
                                children: ["Message must be at least 10 characters (", e.message.length, "/10)"]
                            }), (0, t.jsx)(m.default, {
                                variant: "primary",
                                size: "lg",
                                type: "submit",
                                disabled: "submitting" === r || e.message.length < 10,
                                className: "w-full justify-center",
                                children: "submitting" === r ? "Sending..." : "Send Message"
                            }), (0, t.jsx)("p", {
                                className: "text-xs text-t3 text-center",
                                children: "No spam. No commitments. Just a honest conversation about your project."
                            })]
                        })
                    })]
                })
            })
        })
    }])
}, 11210, e => {
    "use strict";
    var t = e.i(43476),
        s = e.i(71645),
        i = e.i(46932),
        a = e.i(88653),
        l = e.i(64659),
        r = e.i(28540),
        n = e.i(33334);
    let o = [{
        id: "1",
        question: "What industries do you work with?",
        answer: "We work across healthcare, fintech, edtech, e-commerce, logistics, and enterprise SaaS. Our team has delivered production systems for clients in India, the US, UAE, and the UK."
    }, {
        id: "2",
        question: "How long does a typical project take?",
        answer: "An MVP typically takes 8–12 weeks. Full-scale platforms range from 4 to 12 months depending on scope. We provide a detailed timeline and milestone plan during the discovery phase."
    }, {
        id: "3",
        question: "Do you offer post-launch support?",
        answer: "Yes. Every project includes 30 days of free post-launch support. We also offer retainer-based maintenance packages for ongoing improvements, bug fixes, and feature additions."
    }, {
        id: "4",
        question: "What is your tech stack?",
        answer: "We primarily work with Next.js, React, Node.js, NestJS, Python, FastAPI, PostgreSQL, MongoDB, AWS, and Google Cloud. We are stack-agnostic and recommend the right tools for your specific needs."
    }, {
        id: "5",
        question: "How do you handle project communication?",
        answer: "We assign a dedicated project manager and conduct bi-weekly sprint demos. You get access to a shared project dashboard, weekly updates, and real-time access via Slack or Teams."
    }, {
        id: "6",
        question: "What engagement models do you offer?",
        answer: "We offer fixed-price project engagements, time-and-material contracts, and dedicated team models. We provide detailed proposals after a discovery call so you know exactly what you are paying for."
    }, {
        id: "7",
        question: "Do you sign NDAs?",
        answer: "Absolutely. We sign NDAs before any detailed discussions. IP ownership is fully assigned to you upon project completion — we retain no rights to your codebase or product."
    }, {
        id: "8",
        question: "Can you work with our existing codebase?",
        answer: "Yes. We regularly take over and improve legacy codebases. We start with a technical audit to understand the current state and then recommend a phased improvement plan."
    }];
    e.s(["default", 0, function({
        faqs: e
    }) {
        let [c, d] = (0, s.useState)(!1), m = e && e.length > 0 ? e : o, h = c ? m : m.slice(0, 6), [x, u] = (0, s.useState)(h[0] ? .id || "1");
        return (0, t.jsx)(n.default, {
            className: "bg-surface-2",
            children: (0, t.jsxs)(r.default, {
                children: [(0, t.jsx)("div", {
                    className: "text-center mb-12",
                    children: (0, t.jsx)("h2", {
                        className: "text-3xl md:text-4xl font-bold text-primary mt-3",
                        children: "Common Questions"
                    })
                }), (0, t.jsx)("div", {
                    className: "max-w-3xl mx-auto divide-y divide-border",
                    children: h.map(e => {
                        let s = x === e.id;
                        return (0, t.jsxs)(i.motion.div, {
                            layout: !0,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "py-5 cursor-pointer group",
                            onClick: () => u(s ? "" : e.id),
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [(0, t.jsx)("span", {
                                    className: "font-medium text-primary group-hover:text-accent transition-colors pr-2",
                                    children: e.question
                                }), (0, t.jsx)(i.motion.div, {
                                    animate: {
                                        rotate: 180 * !!s
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    className: "flex-shrink-0",
                                    children: (0, t.jsx)(l.ChevronDown, {
                                        className: "w-5 h-5 text-t3"
                                    })
                                })]
                            }), (0, t.jsx)(a.AnimatePresence, {
                                initial: !1,
                                children: s && (0, t.jsx)(i.motion.div, {
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
                }), m.length > 6 && (0, t.jsx)("div", {
                    className: "flex justify-center mt-12",
                    children: (0, t.jsx)("button", {
                        onClick: () => d(!c),
                        className: "px-8 py-3 rounded-full border-2 border-primary/10 font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300",
                        children: c ? "Show Less" : "View All Questions"
                    })
                })]
            })
        })
    }])
}]);