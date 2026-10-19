
(function () {
    var NS = 'http://www.w3.org/2000/svg';

    function R(a, b) {
        return a + Math.random() * (b - a);
    }

    function C(p, a, t) {
        var e = document.createElementNS(NS, t || 'circle');

        for (var k in a) {
            e.setAttribute(k, a[k]);
        }

        p.appendChild(e);
        return e;
    }

    function $(i) {
        return document.getElementById(i);
    }

    function cl(v, a, b) {
        return Math.max(a, Math.min(b, v));
    }

    function sm(t) {
        t = cl(t, 0, 1);
        return t * t * (3 - 2 * t);
    }

    // Scene data: label, title, paragraphs, chips, layout, extra
    var S = [
        [
            'DEPARTURE',
            'Beyond The Moon',
            [
                'A cinematic flight through silence, gravity, and light. Enter the ring portal and begin your voyage across the cosmos.',
                '<i style="color:#8fb4ff">“We are all connected to the Moon by wonder.”</i>'
            ],
            [
                'DISTANCE · 384,400 KM',
                'AGE · 4.5 BILLION YEARS',
                'DIAMETER · 3,474 KM'
            ],
            'b'
        ],
        [
            'MILKY WAY',
            'A River of Stars',
            [
                'Beyond the portal, the galactic band unfolds — a soft river of light made of a hundred billion suns. Dust lanes carve dark paths through glowing clouds.',
                'You are inside the Milky Way now. Every spark ahead is a distant sun.'
            ],
            [
                'GALAXY · MILKY WAY',
                'STARS · ~100B',
                'DIAMETER · ~100,000 LY'
            ],
            'c'
        ],
        [
            'LIFTOFF',
            'Leave the Surface',
            [
                'Engines quiet, Earth glows far below. An astronaut floats between worlds — silence becomes the soundtrack of ascent.',
                'From orbit, borders disappear. Clouds spiral. You see one planet, one crew, one shared sky.'
            ],
            [
                'ORBIT · LOW EARTH',
                'SPEED · 7.8 KM/S',
                'ALTITUDE · ~400 KM'
            ],
            'l'
        ],
        [
            'DEEP SPACE',
            'The Universe Never Ends',
            [
                'Nothing is final here. We rush past the comets like sparks. Every edge of the dark hides another beginning.',
                'You are no longer a visitor. You are the voyage.'
            ],
            [
                'MARS · RED FRONTIER',
                'DISTANT MOONS',
                'DEEP TIME'
            ],
            'c'
        ],
        [
            'SOLAR FAMILY',
            'Our Solar System',
            [
                'Eight worlds and one blazing star — a family born from the same cosmic cloud, each circling in its own lane.'
            ],
            [
                'AGE · 4.6 BILLION YEARS',
                'STAR · SUN',
                'PLANETS · 8'
            ],
            'c',
            -330
        ],
        [
            'DEBRIS FIELD',
            'The Asteroid Belt',
            [
                'Between Mars and Jupiter, leftover stones from the birth of the system drift in silence. Not a wall of rock — a sparse sea of ancient fragments.',
                'Each one is a time capsule from 4.6 billion years ago.'
            ],
            [
                'ZONE · MARS–JUPITER',
                'ORIGIN · PROTOPLANETARY'
            ],
            'c'
        ],
        [
            'STAR NURSERY',
            'Where Stars Are Born',
            [
                'Inside glowing gas and dust, gravity gathers light into new suns. Pillars of cloud craft infant stars — blue, fierce, and brand new.',
                'Every star you know began in a place like this.'
            ],
            [
                'NURSERY · ORION NEBULA',
                'DISTANCE · ~1,344 LY'
            ],
            'c'
        ],
        [
            'TWIN SUNS',
            'A Binary Dance',
            [
                'Two stars locked in gravity’s waltz — forever circling a shared center. Days would have two dawns; shadows would split and braid.',
                'Most stars in the galaxy come in pairs. Companionship is cosmic.'
            ],
            [
                'TYPE · BINARY SYSTEM',
                'ORBIT · SHARED CENTER',
                'COMMON · MOST STARS'
            ],
            'c'
        ],
        [
            'COLLAPSE',
            'Supernova',
            [
                'A giant star ends in a flash brighter than a galaxy. Elements forged in its heart — iron, gold, oxygen — scatter into space.',
                'The calcium in your bones, the iron in your blood — gifts from ancient explosions.'
            ],
            [
                'ENERGY · 10⁴⁴ JOULES',
                'PEAK · WEEKS OF BRILLIANCE',
                'LEGACY · NEW ELEMENTS'
            ],
            'c'
        ],
        [
            'EVENT HORIZON',
            'Where Light Ends',
            [
                'Gravity bends space itself. Stars stretch into glowing rings. At the edge of the abyss, time slows — and even light cannot return.',
                'Beyond this line lies the unknown: a singularity where known physics fades.'
            ],
            [
                'MASS · MILLIONS OF SUNS',
                'ESCAPE · BEYOND LIGHT',
                'SINGULARITY · INSIDE'
            ],
            'c'
        ],
        [
            'DISTANT BEACON',
            'Quasar',
            [
                'A hungry black hole feeds on a spinning disk — and launches jets of light across billions of years. Among the brightest objects in the universe.',
                'Looking at a quasar is looking deep into the early cosmos.'
            ],
            [
                'POWER · TRILLIONS OF SUNS',
                'JETS · NEAR LIGHT SPEED',
                'DISTANCE · BILLIONS OF LY'
            ],
            'c'
        ],
        [
            'VISITOR',
            'A Comet Crosses',
            [
                'Ice and dust wake as they near the Sun. A glowing coma blooms. Twin tails stream across the dark — one of gas, one of glittering grains.',
                'Some return every lifetime. Others visit once and vanish forever. Either way, they are messengers from the outer cold.'
            ],
            [
                'ORIGIN · OORT CLOUD',
                'ICE · WATER + CO₂',
                'TAIL · MILLIONS OF KM'
            ],
            'l2'
        ],
        [
            'OTHER WORLDS',
            'Exoplanet',
            [
                'A world around another sun. Oceans of possibility — or deserts of fire. Thousands confirmed. Trillions waiting in the dark.',
                'Somewhere, another sky may hold one that looks back.'
            ],
            [
                'FOUND · THOUSANDS',
                'TYPE · UNKNOWN',
                'METHOD · TRANSIT + WOBBLE'
            ],
            'l2'
        ],
        [
            'NORTHERN LIGHTS',
            'Aurora',
            [
                'Solar wind blows past Earth’s magnetic shield. Particles rain into the upper air and paint the night in green and violet fire.',
                'Space weather made visible — a living curtain over the poles.'
            ],
            [
                'CAUSE · SOLAR WIND',
                'HEIGHT · 100–300 KM',
                'COLORS · GREEN + VIOLET'
            ],
            'c'
        ],
        [
            'SKIES',
            'Skies Without Borders',
            [
                'Above every ocean and desert, the same dark canopy opens. Constellations draw ancient maps. Meteors streak like brief wishes.',
                'Look up — and you are already traveling. Every star you see is a message from deep time.'
            ],
            [
                'VISIBLE STARS · ~5,000',
                'AURORA · POLAR SKIES',
                'SKY · SHARED BY ALL'
            ],
            'c',
            0,
            '<div class="cd"><div><b>TWILIGHT</b>When day softens into indigo, the first planets appear like quiet lanterns.</div><div><b>MILKY WAY</b>Our galaxy arches overhead — a river of light a hundred billion suns wide.</div><div><b>DARK NIGHT</b>Without moonlight, fainter stars return and the sky shows its full depth.</div></div>'
        ],
        [
            'STAR MAPS',
            'Stories Written in Light',
            [
                'Long before telescopes, humans connected stars into myths and guides. Hunters, bears, and scorpions — maps for sailors, farmers, and dreamers.',
                'The patterns are ours. The stars are older than every story ever told.'
            ],
            [
                'CHARTS · 88 CONSTELLATIONS',
                'USE · NAVIGATION',
                'CULTURE · WORLDWIDE'
            ],
            'c'
        ],
        [
            'PALE BLUE DOT',
            'Home From Afar',
            [
                'From the outer dark, Earth is a single pixel of light — everyone you love, every story, on that pale blue mote.',
                '“That’s here. That’s home. That’s us.” — Carl Sagan'
            ],
            [
                'VOYAGER 1 · 1990',
                'DISTANCE · ~6 BILLION KM',
                'SCALE · HUMILITY'
            ],
            'c'
        ],
        [
            '',
            'Eighteen chapters. Endless sky.',
            [
                'The universe is curiosity — and every night is a new invitation to wonder, to explore, to go beyond the Moon.',
                '<ul><li>You crossed the dark between the worlds.</li><li>You watched stars being born, and dying.</li><li>You faced the core of a quasar.</li><li>You chased comets and found other worlds.</li><li>You saw aurora, star maps, and a pale blue home.</li></ul>Thank you for flying Beyond The Moon.'
            ],
            [],
            'c',
            0,
            '<button class="bt" id="again">EXPLORE AGAIN</button>'
        ]
    ];

    var N = S.length;

    // Build text sections
    var sc = S.map(function (d) {
        var e = document.createElement('section');

        e.className = 'sc ' + d[4];

        if (d[5]) {
            e.style.marginTop = d[5] + 'px';
        }

        e.innerHTML =
            (d[0] ? '<div class="lb">' + d[0] + '</div>' : '') +
            '<h2>' + d[1] + '</h2>' +
            d[2].map(function (x) {
                return /^<ul/.test(x) ? x : '<p>' + x + '</p>';
            }).join('') +
            (d[3].length
                ? '<div class="ch">' +
                    d[3].map(function (c) {
                        return '<span>' + c + '</span>';
                    }).join('') +
                  '</div>'
                : '') +
            (d[6] || '');

        document.body.appendChild(e);

        return e;
    });

    $('again').onclick = function () {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Stars and craters
    [
        ['st1', 150, 0.5, 1.2],
        ['st2', 60, 1, 2.2]
    ].forEach(function (o) {
        var g = $(o[0]);

        for (var i = 0; i < o[1]; i++) {
            var c = C(g, {
                cx: R(-40, 1640),
                cy: R(-250, 1150),
                r: R(o[2], o[3]),
                fill: '#fff',
                opacity: R(0.35, 1)
            });

            if (Math.random() < 0.4) {
                c.setAttribute('class', 'tw');
                c.style.animationDelay = R(0, 3) + 's';
            }
        }
    });

    var cr = $('cr');

    for (var i = 0; i < 14; i++) {
        var a = R(0, 6.28);
        var d = Math.sqrt(Math.random()) * 44;

        C(cr, {
            cx: Math.cos(a) * d,
            cy: Math.sin(a) * d,
            r: R(2, 9),
            fill: '#000',
            opacity: R(0.12, 0.25)
        });
    }

    // Planets
    var P = [
        [4, '#9ca3af', 0.9],
        [6, '#fbbf24', 0.7],
        [7, '#38bdf8', 0.55],
        [6, '#f87171', 0.45],
        [12, '#fb923c', 0.3],
        [10, '#fde68a', 0.22],
        [8, '#67e8f9', 0.16],
        [8, '#60a5fa', 0.12]
    ];

    var pe = [];

    P.forEach(function (q, i) {
        q.r = 62 + i * 42;

        C($('orb'), {
            cx: 800,
            cy: 520,
            r: q.r,
            fill: 'none',
            stroke: '#8fb4ff',
            'stroke-opacity': 0.14
        });

        pe.push(
            C($('pl'), {
                r: q[0] / 1.4,
                fill: q[1]
            })
        );

        q.ph = R(0, 6.28);
    });

    // Asteroids
    var as = [];

    for (var i = 0; i < 46; i++) {
        as.push({
            e: C($('b5'), {
                r: R(3, 10),
                fill: 'url(#rk)',
                cx: R(0, 1600),
                cy: R(0, 900)
            }),
            d: R(0.3, 1.6),
            ph: R(0, 6.28)
        });
    }

    // Constellations
    [
        [
            [
                [255, 161],
                [350, 121],
                [445, 143],
                [432, 270],
                [334, 251],
                [527, 102]
            ],
            [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 1],
                [2, 5]
            ]
        ],
        [
            [
                [671, 232],
                [798, 232],
                [731, 363],
                [728, 487],
                [687, 621],
                [782, 621]
            ],
            [
                [0, 2],
                [1, 2],
                [2, 3],
                [3, 4],
                [3, 5]
            ]
        ],
        [
            [
                [1119, 415],
                [1084, 304],
                [1152, 304],
                [1217, 450],
                [1312, 524],
                [1374, 632],
                [1342, 744]
            ],
            [
                [1, 0],
                [2, 0],
                [0, 3],
                [3, 4],
                [4, 5],
                [5, 6]
            ]
        ]
    ].forEach(function (c) {
        C(
            $('cs'),
            {
                d: c[1].map(function (l) {
                    return 'M' + c[0][l[0]] + 'L' + c[0][l[1]];
                }).join(''),
                fill: 'none',
                stroke: '#9fb8ff',
                'stroke-opacity': 0.5
            },
            'path'
        );

        c[0].forEach(function (p) {
            var e = C($('cs'), {
                cx: p[0],
                cy: p[1],
                r: R(3, 5),
                fill: '#fff'
            });

            e.setAttribute('class', 'tw');
            e.style.animationDelay = R(0, 3) + 's';
        });
    });

    // Navigation dots
    var dots = $('dots');

    for (var i = 0; i < N; i++) {
        dots.appendChild(document.createElement('i'));
    }

    var dl = dots.children;
    var gs = [];
    var i;

    for (i = 0; i < N; i++) {
        gs.push($('b' + i));
    }

    var DK = {
        7: 0.5,
        8: 0.8,
        9: 0.4,
        10: 0.5,
        11: 0.5,
        12: 0.4,
        16: 0.9
    };

    var K = [];
    var OX = [];

    for (i = 0; i < N; i++) {
        K[i] = 0.35;
        OX[i] = [800, 450];
    }

    K[0] = 1.5;
    OX[0] = [800, 330];

    OX[4] = [800, 520];

    K[8] = 0;
    K[11] = 0.1;
    K[16] = 0.2;
    K[17] = 0.15;

    var el = {
        m1: $('m1'),
        n1: $('n1'),
        n2: $('n2'),
        n3: $('n3'),
        d1: $('d1'),
        d2: $('d2'),
        d3: $('d3'),
        ba: $('ba'),
        bb: $('bb'),
        cm: $('cm'),
        ar1: $('ar1'),
        ar2: $('ar2'),
        dk: $('dk'),
        bar: $('bar'),
        hint: $('hint'),
        s1t: $('st1'),
        s2t: $('st2')
    };

    var tg = 0;
    var cu = 0;

    function rd() {
        var h = document.documentElement.scrollHeight - innerHeight;

        tg = h > 0 ? scrollY / h : 0;
    }

    addEventListener('scroll', rd, {
        passive: true
    });

    addEventListener('resize', rd);

    rd();

    function T(e, x, y, s, r) {
        e.setAttribute(
            'transform',
            'translate(' + x + ' ' + y + ')' +
            (r ? ' rotate(' + r + ')' : '') +
            ' scale(' + s + ')'
        );
    }

    function render(p, t) {
        var s = p * N;
        var act = 0;
        var dk = 0;

        el.bar.style.width = p * 100 + '%';
        el.hint.style.opacity = p > 0.02 ? 0 : 1;

        el.s1t.style.transform = 'translateY(' + (-p * 160) + 'px)';
        el.s2t.style.transform = 'translateY(' + (-p * 480) + 'px)';

        for (i = 0; i < N; i++) {
            var z = s - i - 0.5;
            var d = z;

            if (i == 0 && d < 0) d = 0;
            if (i == N - 1 && d > 0) d = 0;

            if (i == 0 && z < 0) z = 0;
            if (i == N - 1 && z > 0) z = 0;

            var o = sm(1 - (Math.abs(d) - 0.15) / 0.45);

            if (o > 0.5) act = i;

            dk += o * (DK[i] || 0);

            var g = gs[i];
            var v = o < 0.01 ? 'hidden' : 'visible';

            g.style.opacity = o;
            g.style.visibility = v;

            g.style.transformOrigin =
                OX[i][0] + 'px ' + OX[i][1] + 'px';

            g.style.transformBox = 'view-box';

            g.style.transform =
                'scale(' + (1 + z * K[i]) + ')' +
                (i == 0 ? ' rotate(' + (z * 25) + 'deg)' : '');

            sc[i].style.opacity = o;
            sc[i].style.visibility = v;
            sc[i].style.transform = 'translateY(' + (-z * 70) + 'px)';
        }

        el.dk.setAttribute('opacity', Math.min(dk, 0.95));

        for (i = 0; i < N; i++) {
            dl[i].className = i == act ? 'on' : '';
        }

        T(
            el.m1,
            880 + Math.cos(t * 0.4) * 14,
            230 + Math.sin(t * 0.5) * 10,
            0.8
        );

        T(
            el.d1,
            170 + Math.sin(t * 0.3) * 20,
            560 + Math.cos(t * 0.4) * 14,
            1.15
        );

        T(
            el.d2,
            1470 - Math.sin(t * 0.35) * 20,
            300 + Math.cos(t * 0.3) * 16,
            0.9
        );

        T(
            el.d3,
            1000 + Math.cos(t * 0.3) * 26,
            620 + Math.sin(t * 0.35) * 14,
            1.15
        );

        P.forEach(function (q, k) {
            var a = q.ph + t * q[2] * 0.5 + p * 6 * q[2];

            pe[k].setAttribute('cx', 800 + Math.cos(a) * q.r);
            pe[k].setAttribute('cy', 520 + Math.sin(a) * q.r);
        });

        as.forEach(function (a) {
            a.e.setAttribute(
                'transform',
                'translate(' +
                Math.sin(t * 0.3 * a.d + a.ph) * 22 +
                ' ' +
                (
                    Math.cos(t * 0.25 * a.d + a.ph) * 18 -
                    s * 30 * a.d
                ) +
                ')'
            );
        });

        var b = 1 + Math.sin(t * 0.5) * 0.06;

        T(
            el.n1,
            640 * (1 - b) + 640 * 0,
            420 * (1 - b),
            b
        );

        T(
            el.n2,
            1000 * (1 - (2 - b)),
            520 * (1 - (2 - b)),
            2 - b
        );

        T(
            el.n3,
            820 * (1 - b),
            560 * (1 - b),
            b
        );

        var a1 = t * 1.1 + s * 3;

        T(
            el.ba,
            800 + Math.cos(a1) * 90,
            430 + Math.sin(a1) * 45,
            1
        );

        T(
            el.bb,
            800 - Math.cos(a1) * 50,
            430 - Math.sin(a1) * 25,
            1
        );

        T(
            el.cm,
            -(s - 11.5) * 700,
            (s - 11.5) * 60,
            1
        );

        T(
            el.ar1,
            Math.sin(t * 0.3) * 70,
            Math.sin(t * 0.5) * 14,
            1
        );

        T(
            el.ar2,
            Math.cos(t * 0.25) * 90,
            Math.cos(t * 0.4) * 18,
            1
        );
    }

    function loop(ts) {
        cu += (tg - cu) * 0.07;

        if (Math.abs(tg - cu) < 1e-4) {
            cu = tg;
        }

        render(cu, ts / 1000);

        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
})();
