#!/usr/bin/env python3
"""
build_shrug12_v2.py — Fresh, clean implementation of all 10 new features.
Reads shrug-11.html → writes shrug-12.html

10 Features:
1. Identity Mode (emotional state quiz before hobby selection)
2. 7-Day Sprint Tracks
3. Frictionless Share Cards (Canvas)
4. Progress Visualizations (SVG Radar Chart)
5. Enhanced AI Feedback (already in shrug-11, preserved)
6. Starter Kit Mode (gear lists per hobby)
7. Real-World Monthly Challenge (30-Day Sketch Streak)
8. Friction Reality ("What nobody tells you")
9. Social (sidebar hint - cohort future)
10. Long-term Identity Tracking (radar chart + identity report)
"""

src = '/Users/mikejacques/Downloads/shrug-11.html'
dst = '/Users/mikejacques/Downloads/shrug-12.html'

with open(src, 'r', encoding='utf-8') as f:
    content = f.read()

applied = []
skipped = []

def replace_once(old, new, label):
    global content
    if old in content:
        content = content.replace(old, new, 1)
        applied.append(label)
        return True
    else:
        skipped.append(label + ' [ANCHOR NOT FOUND]')
        return False


# ════════════════════════════════════════════════════════════════════
# CHANGE 1: NEW CSS — insert before </style>
# ════════════════════════════════════════════════════════════════════

NEW_CSS = """
/* ═══ IDENTITY MODE ═══════════════════════════════════════════ */
.identity-modal{position:fixed;inset:0;z-index:1100;display:flex;align-items:center;justify-content:center;background:rgba(14,13,11,.95);backdrop-filter:blur(16px);opacity:0;pointer-events:none;transition:opacity .3s}
.identity-modal.open{opacity:1;pointer-events:all}
.identity-box{background:#1c1b18;border:1px solid rgba(255,255,255,.09);border-radius:24px;padding:40px;max-width:580px;width:92%;text-align:center;animation:slideUp .35s ease both}
.identity-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px}
.identity-card{padding:20px 10px;border:1.5px solid rgba(255,255,255,.07);border-radius:14px;cursor:pointer;transition:all .2s;background:rgba(255,255,255,.02)}
.identity-card:hover{border-color:rgba(255,255,255,.2);transform:translateY(-2px)}
.identity-card.sel{transform:translateY(-3px);box-shadow:0 10px 28px rgba(0,0,0,.35)}
.identity-card .ic-emoji{font-size:30px;display:block;margin-bottom:8px}
.identity-card .ic-label{font-size:13px;font-weight:800;letter-spacing:.3px}
.identity-card .ic-desc{font-size:11px;color:rgba(255,255,255,.38);margin-top:4px;line-height:1.4}

/* ═══ SPRINT SYSTEM ════════════════════════════════════════════ */
.sprint-widget{background:linear-gradient(135deg,rgba(107,78,255,.1),rgba(60,158,140,.06));border:1px solid rgba(107,78,255,.22);border-radius:14px;padding:18px;margin-bottom:16px}
.sprint-widget-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.sprint-widget-title{font-size:13px;font-weight:800;color:#B0A0FF}
.sprint-day-dots{display:flex;gap:5px;flex-wrap:wrap;margin-top:10px}
.sprint-day-dot{width:26px;height:26px;border-radius:6px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:rgba(255,255,255,.22);cursor:pointer;transition:all .2s}
.sprint-day-dot.done{background:#6B4EFF;border-color:#6B4EFF;color:white}
.sprint-day-dot.today{border-color:#F0C93A;color:#F0C93A}
.sprint-modal{position:fixed;inset:0;z-index:1100;display:flex;align-items:center;justify-content:center;background:rgba(14,13,11,.92);backdrop-filter:blur(14px);opacity:0;pointer-events:none;transition:opacity .3s}
.sprint-modal.open{opacity:1;pointer-events:all}
.sprint-box{background:#1c1b18;border:1px solid rgba(255,255,255,.09);border-radius:22px;padding:36px;max-width:540px;width:92%;max-height:88vh;overflow-y:auto}
.sprint-card{padding:18px;border:1px solid rgba(255,255,255,.07);border-radius:12px;cursor:pointer;transition:all .2s;background:rgba(255,255,255,.02);margin-bottom:10px}
.sprint-card:hover{border-color:rgba(255,255,255,.18);transform:translateY(-1px)}

/* ═══ SHARE MODAL ═══════════════════════════════════════════════ */
.share-modal{position:fixed;inset:0;z-index:1100;display:flex;align-items:center;justify-content:center;background:rgba(14,13,11,.92);backdrop-filter:blur(14px);opacity:0;pointer-events:none;transition:opacity .3s}
.share-modal.open{opacity:1;pointer-events:all}
.share-box{background:#1c1b18;border:1px solid rgba(255,255,255,.09);border-radius:22px;padding:30px;max-width:420px;width:92%;text-align:center}
#shareCanvas{display:none}
#sharePreview{width:100%;max-width:280px;border-radius:14px;margin:16px auto;display:block;box-shadow:0 14px 42px rgba(0,0,0,.55)}

/* ═══ RADAR CHART ════════════════════════════════════════════════ */
.radar-wrap{margin-top:20px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:20px}
.radar-wrap-title{font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:14px}
.radar-svg{display:block;margin:0 auto}
text.radar-label{font-size:10px;font-weight:700;fill:rgba(255,255,255,.4)}
polygon.radar-grid{fill:none;stroke:rgba(255,255,255,.055);stroke-width:1}
polygon.radar-poly{fill:rgba(107,78,255,.18);stroke:#6B4EFF;stroke-width:2}
.trait-bars{margin-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.trait-bar-row{display:flex;flex-direction:column;gap:4px}
.trait-bar-lbl{font-size:9px;font-weight:800;color:rgba(255,255,255,.35);letter-spacing:.5px;text-transform:uppercase}
.trait-bar-track{height:3px;background:rgba(255,255,255,.05);border-radius:2px}
.trait-bar-fill{height:100%;border-radius:2px;transition:width 1s ease}

/* ═══ CHALLENGE MODAL ════════════════════════════════════════════ */
.challenge-widget{background:linear-gradient(135deg,rgba(240,201,58,.07),rgba(232,69,60,.05));border:1px solid rgba(240,201,58,.18);border-radius:14px;padding:18px;margin-bottom:16px}
.challenge-modal{position:fixed;inset:0;z-index:1100;display:flex;align-items:center;justify-content:center;background:rgba(14,13,11,.92);backdrop-filter:blur(14px);opacity:0;pointer-events:none;transition:opacity .3s}
.challenge-modal.open{opacity:1;pointer-events:all}
.challenge-box{background:#1c1b18;border:1px solid rgba(255,255,255,.09);border-radius:22px;padding:36px;max-width:500px;width:92%;max-height:88vh;overflow-y:auto}
.challenge-day-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-top:14px}
.c-day{aspect-ratio:1;border-radius:7px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:rgba(255,255,255,.18);cursor:pointer;transition:all .2s}
.c-day:hover{border-color:rgba(255,255,255,.18)}
.c-day.done{background:#F0C93A;border-color:#F0C93A;color:#0E0D0B}
.c-day.milestone{border-color:rgba(232,69,60,.4);color:rgba(232,69,60,.5)}

/* ═══ FRICTION REALITY ═══════════════════════════════════════════ */
.friction-section{background:rgba(232,69,60,.04);border:1px solid rgba(232,69,60,.1);border-radius:14px;padding:18px;margin-top:18px}
.friction-title{font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(232,69,60,.65);margin-bottom:12px}
.friction-item{display:flex;gap:10px;margin-bottom:9px;font-size:12px;color:rgba(255,255,255,.48);line-height:1.55;align-items:flex-start}
.friction-item::before{content:"⚠";flex-shrink:0;font-size:11px;margin-top:1px;opacity:.7}

/* ═══ STARTER KIT ════════════════════════════════════════════════ */
.kit-section{background:rgba(184,217,110,.04);border:1px solid rgba(184,217,110,.13);border-radius:14px;padding:18px;margin-top:14px}
.kit-title{font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(184,217,110,.65);margin-bottom:10px}
.kit-meta-row{display:flex;gap:16px;margin-bottom:12px}
.kit-meta-item{font-size:11px;color:rgba(255,255,255,.35)}
.kit-meta-item strong{color:#B8D96E}
.kit-item{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px}
.kit-item:last-child{border-bottom:none}
.kit-item-name{color:rgba(255,255,255,.65)}
.kit-item-price{font-size:11px;font-weight:800;color:#B8D96E;text-align:right}
.kit-item-note{font-size:10px;color:rgba(255,255,255,.25);text-align:right;margin-top:2px}
"""

replace_once('</style>', NEW_CSS + '</style>', 'Change 1: New CSS added')


# ════════════════════════════════════════════════════════════════════
# CHANGE 2: NEW DATA CONSTANTS — insert before quiz section
# ════════════════════════════════════════════════════════════════════

NEW_DATA = """
// ══════════════════════════════════════════════════════════════════════
// FEATURE DATA — Identity, Sprints, Traits, Friction, Starter Kits
// ══════════════════════════════════════════════════════════════════════

const IDENTITY_STATES = [
  { id:'creative',    emoji:'🎨', label:'Creative',     desc:'Make & express things',     color:'#F0C93A', textColor:'#0E0D0B' },
  { id:'athletic',    emoji:'💪', label:'Athletic',     desc:'Move & challenge your body', color:'#B8D96E', textColor:'#0E0D0B' },
  { id:'calm',        emoji:'🌿', label:'Calm',         desc:'Slow down, find stillness',  color:'#ACD8F0', textColor:'#0E0D0B' },
  { id:'social',      emoji:'🗣️', label:'Social',       desc:'Connect with others',        color:'#F4A261', textColor:'#0E0D0B' },
  { id:'adventurous', emoji:'🌍', label:'Adventurous',  desc:'Explore & discover newness', color:'#6B4EFF', textColor:'white'   },
  { id:'strategic',   emoji:'♟️', label:'Strategic',    desc:'Think, plan, solve deeply',  color:'#3D9E8C', textColor:'white'   }
];

const EMOTION_HOBBY_MAP = {
  creative:    ['photography','painting','writing','collage','drawing','film','ceramics'],
  athletic:    ['yoga','fitness','dancing','hiking'],
  calm:        ['baking','ceramics','knitting','journaling','gardening','reading','birdwatching'],
  social:      ['dancing','cooking','gaming','languages','yoga'],
  adventurous: ['hiking','birdwatching','photography','languages','film','fitness'],
  strategic:   ['gaming','reading','writing','film','languages','woodworking']
};

const HOBBY_TRAITS = {
  photography:  {creative:9,analytical:7,physical:3,expressive:8,social:4},
  painting:     {creative:10,analytical:4,physical:2,expressive:10,social:2},
  writing:      {creative:9,analytical:8,physical:1,expressive:9,social:3},
  cooking:      {creative:7,analytical:5,physical:4,expressive:7,social:8},
  baking:       {creative:8,analytical:7,physical:3,expressive:6,social:6},
  yoga:         {creative:4,analytical:3,physical:9,expressive:6,social:5},
  ceramics:     {creative:9,analytical:4,physical:6,expressive:8,social:3},
  gardening:    {creative:6,analytical:5,physical:7,expressive:5,social:4},
  birdwatching: {creative:3,analytical:9,physical:6,expressive:3,social:4},
  reading:      {creative:4,analytical:9,physical:1,expressive:5,social:2},
  piano:        {creative:8,analytical:8,physical:5,expressive:10,social:3},
  collage:      {creative:9,analytical:4,physical:2,expressive:9,social:2},
  drawing:      {creative:9,analytical:5,physical:3,expressive:9,social:2},
  dancing:      {creative:8,analytical:4,physical:10,expressive:10,social:8},
  knitting:     {creative:7,analytical:6,physical:4,expressive:6,social:4},
  journaling:   {creative:7,analytical:7,physical:1,expressive:9,social:1},
  woodworking:  {creative:8,analytical:7,physical:8,expressive:6,social:3},
  film:         {creative:9,analytical:9,physical:2,expressive:8,social:5},
  languages:    {creative:5,analytical:9,physical:2,expressive:7,social:9},
  fitness:      {creative:3,analytical:5,physical:10,expressive:4,social:6},
  hiking:       {creative:4,analytical:4,physical:9,expressive:5,social:5},
  fashion:      {creative:9,analytical:4,physical:3,expressive:10,social:7},
  gaming:       {creative:5,analytical:10,physical:2,expressive:4,social:6}
};

const SPRINTS = [
  {
    id:'creative', label:'Creative Reboot', emoji:'🎨', color:'#F0C93A', textColor:'#0E0D0B',
    desc:'7 days to unlock your inner maker. One creative challenge per day.',
    days:[
      'Take 10 photos of shadows around your home',
      'Sketch one object from 3 different angles',
      'Write a 100-word story inspired by a smell',
      'Make a collage from old magazines or prints',
      'Cook or bake something you have never tried before',
      'Film a 60-second video of your day with no talking',
      'Create something using only what is on your desk right now'
    ]
  },
  {
    id:'body', label:'Body Reset', emoji:'💪', color:'#B8D96E', textColor:'#0E0D0B',
    desc:'7 days to reconnect with what your body can do.',
    days:[
      '10-minute morning stretch routine',
      'Walk or hike somewhere new for 30+ minutes',
      'Try a beginner yoga flow for 15 minutes',
      'Dance to 3 songs in a row with no holding back',
      'Do 20 minutes of bodyweight movement',
      'Spend 30 minutes outdoors with no phone',
      'Cook one genuinely healthy meal from scratch'
    ]
  },
  {
    id:'explorer', label:'Explorer Track', emoji:'🌍', color:'#6B4EFF', textColor:'white',
    desc:'7 days of micro-adventures and new experiences.',
    days:[
      'Go somewhere in your city you have never been',
      'Try a food from a culture you have never eaten',
      'Listen to music from a country you have never visited',
      'Learn 10 words in a new language today',
      'Watch a documentary about somewhere unfamiliar',
      'Talk to a stranger and ask about their work',
      'Write 5 things about your city a tourist would love'
    ]
  },
  {
    id:'solo', label:'Solo Mastery', emoji:'🧘', color:'#ACD8F0', textColor:'#0E0D0B',
    desc:'7 days of deep focus. Just you, no distractions.',
    days:[
      'Spend 30 minutes doing nothing — no phone, no media',
      'Journal for 20 minutes with no agenda or prompt',
      'Read a physical book for 45 minutes straight',
      'Learn one new chord, knitting stitch, or recipe step',
      'Sit outside for 15 minutes and just observe',
      'Write a letter to yourself one year from now',
      'Revisit one creative project you abandoned — just look at it'
    ]
  }
];

const HOBBY_FRICTION = {
  photography: [
    'Gear costs spiral fast. A starter camera body can become $2,000-4,000 quickly once you add lenses.',
    'Rejection is the default. Sending 200 photos and getting 10 accepted is a good ratio.',
    'Editing can take longer than shooting. Expect 1-3 hours per session in post-processing.'
  ],
  painting: [
    'Finished pieces take weeks, not hours. Impatience ruins wet paint — this is the hardest part.',
    'Quality oil paints cost 5-10x more than student grade. The difference is real.',
    'Most early work looks bad. Every serious painter knows their first 100 works are practice. Persist.'
  ],
  writing: [
    'First drafts are always terrible. Every professional writer knows this and writes them anyway.',
    'Rejection from publishers is completely normal. Most books are rejected 10-50+ times before a deal.',
    'Writing is mostly rewriting. Expect 5-10 rounds of editing before anything is truly finished.'
  ],
  cooking: [
    'Real knife skills take months of deliberate practice. Most home cooks plateau at mediocre knife work.',
    'Recipe scaling is harder than it looks. Baking especially — the math matters down to the gram.',
    'Restaurant cooking has almost no resemblance to home cooking. It is brutal, physical, and relentless.'
  ],
  baking: [
    'Baking is pure chemistry. One gram off can ruin the texture completely.',
    'Humidity and altitude affect results in ways recipes never warn you about.',
    'Bread takes 6+ hours start to finish. Most of that is just waiting, which feels unproductive.'
  ],
  yoga: [
    'Real progress is invisible for months. Flexibility comes in tiny, frustrating increments.',
    'Injuries from poor form are common and can sideline you for weeks or months.',
    'Twice a week keeps you where you are. Real yogis practice 5-6 days a week minimum.'
  ],
  ceramics: [
    'Clay is physically demanding, messy, and studio time costs real money ($40-80/month).',
    '80% of first attempts crack, warp, or collapse in the kiln. That is completely normal.',
    'Glazing is an entirely separate skill. Colors look completely different after firing — unpredictably.'
  ],
  gardening: [
    'Plants die. A lot. Even experienced gardeners lose things constantly — pests, frost, disease.',
    'Results are deeply seasonal. You plant in spring and may not see success until late summer.',
    'Soil prep is 80% of success. Most beginners skip it and wonder why nothing grows properly.'
  ],
  birdwatching: [
    'Early starts are mandatory. 5am is peak activity. If you are not a morning person, this is hard.',
    'Misidentifications happen constantly, even after years of experience. Humility is required.',
    'The rarest sightings require travel to specific habitats. Local birding can feel repetitive quickly.'
  ],
  reading: [
    'Building a consistent reading habit is genuinely hard. Most people read 4-5 books per year, not 50.',
    'Dense non-fiction takes real mental energy to absorb. You cannot just skim and retain it.',
    'Not every book you start is worth finishing. Learning to quit books is a skill in itself.'
  ],
  piano: [
    'Real progress requires 30+ minutes of focused practice daily. Sporadic sessions go nowhere.',
    'Reading sheet music is a completely separate skill from playing by ear — you need both.',
    'The first three months feel like your fingers simply do not belong to your hands. Persist.'
  ],
  collage: [
    'Finding consistent, good source material is harder than it sounds once you exhaust your magazines.',
    'Physical collage is permanent. Mistakes cannot be undone. Digital collage has a steep learning curve.',
    'Storage for materials becomes a genuine practical problem within weeks of starting seriously.'
  ],
  drawing: [
    'Eye-hand coordination takes months to develop. The frustration in the first 3 months is significant.',
    'Learning to truly see — to observe proportions and light — is harder than learning to draw.',
    'Your taste will significantly outpace your skill for years. Knowing good work before you can make it is the curse of taste.'
  ],
  dancing: [
    'Your body will be sore in unusual places for the first 4-6 weeks. This is unavoidable.',
    'Private lessons accelerate learning dramatically but cost $60-150 per hour.',
    'Social dancing requires a partner and a scene. Finding both takes consistent social effort.'
  ],
  knitting: [
    'Dropped stitches happen constantly in the first months. Unraveling entire rows to fix them is part of the process.',
    'Yarn costs add up fast once you move beyond acrylic. Merino wool is expensive.',
    'One mitten takes 10+ hours. A sweater takes months of committed evenings. Patience is everything.'
  ],
  journaling: [
    'It can feel completely pointless for months before insights begin to surface.',
    'Writing about the same problems repeatedly without resolution is genuinely frustrating.',
    'The blank page is paralysing without structure. Most people need prompts to start.'
  ],
  woodworking: [
    'A basic tool setup costs $500-1,500 before you make your first real piece.',
    'Mistakes are permanent. Wood does not forgive the way clay or paint does.',
    'Safety is genuinely serious here. Table saws send thousands of people to emergency rooms every year.'
  ],
  film: [
    'Good filmmaking requires cinematography, sound design, and editing — all separate disciplines.',
    'Most short films cost $500-5,000+ even at an amateur level once you add equipment and actors.',
    'Film appreciation and film production are completely different skills. One does not lead to the other.'
  ],
  languages: [
    'Fluency takes 600-2,500+ hours depending on language distance from your native tongue.',
    'Pronunciation plateaus arrive early and are stubborn. Most people never fully eliminate their accent.',
    'You will forget vocabulary constantly, even after years of study. Regular review is non-negotiable.'
  ],
  fitness: [
    'Significant soreness for the first 2-3 weeks is unavoidable. This is real and will affect your life.',
    'Motivation reliably disappears within 6-8 weeks for most people who lack a system or community.',
    'Visible results take 8-12 weeks minimum. Progress is completely invisible until suddenly it is not.'
  ],
  hiking: [
    'Gear costs escalate. Proper boots, poles, pack, and layers adds up to $400-800+ quickly.',
    'Blisters and knee pain are almost universal in the first season. Proper fit and technique help.',
    'Weather changes fast in elevation. Unprepared hikers die every year. This is not drama, it is fact.'
  ],
  fashion: [
    'Developing genuine personal style is an iterative process. Most purchases are experiments that fail.',
    'Fast fashion knowledge takes years to deconstruct — unlearning is harder than learning.',
    'Good tailoring is expensive. Off-the-rack almost never fits a real body well without alteration.'
  ],
  gaming: [
    'Time investment is substantial. 20-40 hours before you are genuinely good at most games is typical.',
    'Online competitive spaces have serious toxicity problems. This affects the experience significantly.',
    'Gear escalation is real. Mechanical keyboards, gaming mice, and monitors are expensive rabbit holes.'
  ]
};

const HOBBY_STARTER_KIT = {
  photography: {
    budget:'Free – $500', time:'1-2 hrs/week',
    items:[
      {name:'Smartphone camera', price:'Free', note:'Start here, seriously'},
      {name:'Lightroom Mobile (free tier)', price:'Free', note:'Essential editing'},
      {name:'Used entry DSLR or mirrorless', price:'$150-350', note:'Optional step-up'},
      {name:'50mm lens (nifty fifty)', price:'$100-200', note:'Sharpest value lens'}
    ]
  },
  painting: {
    budget:'$40–$150', time:'2-3 hrs/week',
    items:[
      {name:'Student acrylic set (12 colors)', price:'$15-30', note:'Start with acrylics'},
      {name:'3-5 brushes (flat + round)', price:'$10-20', note:'Any decent brand'},
      {name:'Canvas pad (10-pack)', price:'$12-20', note:'Cheaper than canvases'},
      {name:'Palette + water cup', price:'$5-10', note:'Basic setup'}
    ]
  },
  writing: {
    budget:'Free – $30', time:'30 min/day',
    items:[
      {name:'Google Docs or Notion', price:'Free', note:'All you need to start'},
      {name:'Notebook + pen', price:'$5-15', note:'Offline first drafts'},
      {name:'Hemingway Editor', price:'Free', note:'Clarity and readability'},
      {name:'Scrivener', price:'$49 one-time', note:'For long-form projects'}
    ]
  },
  cooking: {
    budget:'$50–$180', time:'2-4 hrs/week',
    items:[
      {name:'Chef knife (8 inch)', price:'$30-60', note:'Most important tool'},
      {name:'Large cutting board', price:'$15-25', note:'Bigger than you think'},
      {name:'Cast iron skillet (10 in)', price:'$25-40', note:'Lasts forever'},
      {name:'Pantry staples (oils, acid)', price:'$40-60', note:'One-time investment'}
    ]
  },
  baking: {
    budget:'$30–$150', time:'2-4 hrs/weekend',
    items:[
      {name:'Digital kitchen scale', price:'$12-20', note:'Non-negotiable for baking'},
      {name:'Heavy gauge sheet pans x2', price:'$15-25', note:'Thin pans = burnt bottoms'},
      {name:'Instant-read thermometer', price:'$10-15', note:'For bread and caramel'},
      {name:'Stand mixer (used)', price:'$80-150', note:'Optional but transformative'}
    ]
  },
  yoga: {
    budget:'Free – $80', time:'20-45 min/day',
    items:[
      {name:'Basic yoga mat', price:'$20-35', note:'Manduka PRO if you commit'},
      {name:'Yoga with Adriene (YouTube)', price:'Free', note:'Best beginner resource'},
      {name:'Two yoga blocks', price:'$10-20', note:'For support in poses'},
      {name:'Yoga strap', price:'$8-12', note:'Extends your reach'}
    ]
  },
  ceramics: {
    budget:'$40–$200/mo', time:'4-6 hrs/week',
    items:[
      {name:'Community studio membership', price:'$40-80/mo', note:'Includes kiln access'},
      {name:'Basic tool set (wire, loop, rib)', price:'$15-25', note:'Essential 5-piece set'},
      {name:'Apron (clay-specific)', price:'$15-25', note:'Clay destroys clothes'},
      {name:'Notebook for glaze notes', price:'$5', note:'Track your glazing experiments'}
    ]
  },
  gardening: {
    budget:'$20–$100 start', time:'30 min/day',
    items:[
      {name:'Seed starting kit', price:'$15-25', note:'Or direct sow after frost'},
      {name:'Trowel + hand fork', price:'$10-20', note:'Fiskars brand holds up'},
      {name:'Potting mix (2 cu ft)', price:'$10-15', note:'Never use garden soil in pots'},
      {name:'Long-spout watering can', price:'$10-20', note:'Precision matters for seedlings'}
    ]
  },
  drawing: {
    budget:'Free – $50', time:'30-60 min/day',
    items:[
      {name:'Sketchbook (A5 size)', price:'$8-15', note:'Carry it everywhere'},
      {name:'Pencil set (2H to 6B range)', price:'$8-15', note:'Staedtler Mars recommended'},
      {name:'Kneaded eraser', price:'$3-5', note:'Much cleaner than rubber'},
      {name:'Blending stump x3', price:'$3-6', note:'Smooth shading essential'}
    ]
  },
  knitting: {
    budget:'$30–$80 start', time:'1-2 hrs/day',
    items:[
      {name:'US size 7-8 straight needles', price:'$8-15', note:'Bamboo for beginners'},
      {name:'Worsted weight yarn x2 balls', price:'$10-20', note:'Acrylic is fine to start'},
      {name:'Darning needle', price:'$3-5', note:'For weaving in ends'},
      {name:'Stitch markers (ring type)', price:'$3-8', note:'Simple and essential'}
    ]
  }
};

const MONTHLY_CHALLENGE = {
  title:'30-Day Sketch Streak',
  emoji:'✏️',
  desc:'Draw something — anything — every single day for 30 days. Takes 10-30 minutes. No skill required to start.',
  hobby:'drawing',
  color:'#F0C93A',
  milestones:[
    {day:7,  label:'First Week',   badge:'🌱', desc:'You actually built a habit'},
    {day:14, label:'Halfway',      badge:'🔥', desc:'Momentum is genuinely real now'},
    {day:21, label:'Three Weeks',  badge:'⚡', desc:'Drawing is becoming automatic'},
    {day:30, label:'Complete!',    badge:'🏆', desc:'You are now a person who draws'}
  ]
};

// ── Feature state ────────────────────────────────────────────────────
var selectedIdentity = null;
var activeSprint = null;
var sprintProgress = {};
var challengeProgress = {};

"""

QUIZ_ANCHOR = '// ── QUIZ ─────────────────────────────────────────────────────\nlet qIdx = 0, answers = [], selected = null;'
replace_once(QUIZ_ANCHOR, NEW_DATA + '\n' + QUIZ_ANCHOR, 'Change 2: New data constants')


# ════════════════════════════════════════════════════════════════════
# CHANGE 3: MODIFY openQuiz — identity mode step first
# ════════════════════════════════════════════════════════════════════

OLD_OPEN_QUIZ = """function openQuiz() {
  qIdx = 0; answers = []; selected = null;
  renderQ(0);
  document.getElementById('quizModal').classList.add('open');
}"""

NEW_OPEN_QUIZ = """function openQuiz() {
  selectedIdentity = null;
  buildIdentityModal();
  document.getElementById('identityModal').classList.add('open');
}

function buildIdentityModal() {
  var grid = document.getElementById('identity-grid');
  if (!grid) return;
  grid.innerHTML = IDENTITY_STATES.map(function(state) {
    return '<div class="identity-card" onclick="selectIdentity(\\'' + state.id + '\\')" id="icard-' + state.id + '">'
      + '<span class="ic-emoji">' + state.emoji + '</span>'
      + '<div class="ic-label">' + state.label + '</div>'
      + '<div class="ic-desc">' + state.desc + '</div>'
      + '</div>';
  }).join('');
  document.getElementById('identity-continue-btn').style.opacity = '0.3';
  document.getElementById('identity-continue-btn').style.pointerEvents = 'none';
}

function selectIdentity(id) {
  selectedIdentity = id;
  document.querySelectorAll('.identity-card').forEach(function(c) {
    c.classList.remove('sel');
    c.style.borderColor = '';
    c.style.background = '';
  });
  var state = IDENTITY_STATES.find(function(s) { return s.id === id; });
  var card = document.getElementById('icard-' + id);
  if (card && state) {
    card.classList.add('sel');
    card.style.borderColor = state.color;
    card.style.background = state.color + '18';
  }
  document.getElementById('identity-continue-btn').style.opacity = '1';
  document.getElementById('identity-continue-btn').style.pointerEvents = 'auto';
}

function continueToQuiz() {
  document.getElementById('identityModal').classList.remove('open');
  qIdx = 0; answers = []; selected = null;
  renderQ(0);
  document.getElementById('quizModal').classList.add('open');
}

function skipIdentity() {
  document.getElementById('identityModal').classList.remove('open');
  qIdx = 0; answers = []; selected = null;
  renderQ(0);
  document.getElementById('quizModal').classList.add('open');
}"""

replace_once(OLD_OPEN_QUIZ, NEW_OPEN_QUIZ, 'Change 3: openQuiz with identity mode')


# ════════════════════════════════════════════════════════════════════
# CHANGE 4: ADD FRICTION + STARTER KIT + SHARE to openHobby body
# ════════════════════════════════════════════════════════════════════

OLD_HOBBY_BODY_END = """    // Chapter 1 card
    + '<div class="hp-section">'
    + '<div class="hp-section-label">Your first challenge</div>'
    + '<div class="hp-chapter-card" style="background:'+h.color+';color:'+h.textColor+'" id="hp-ch-card">'
    + '<div style="position:absolute;top:-50px;right:-50px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.07)"></div>'
    + '<div class="hp-chapter-num">'+p.num+'</div>'
    + '<div class="hp-chapter-title">'+p.title.replace('\\n',' ')+'</div>'
    + '<div class="hp-chapter-desc">'+p.desc+'</div>'
    + '<button class="hp-chapter-btn" id="hp-ch-btn">Start Chapter 01 →</button>'
    + '</div>'
    + '</div>';"""

NEW_HOBBY_BODY_END = """    // Chapter 1 card
    + '<div class="hp-section">'
    + '<div class="hp-section-label">Your first challenge</div>'
    + '<div class="hp-chapter-card" style="background:'+h.color+';color:'+h.textColor+'" id="hp-ch-card">'
    + '<div style="position:absolute;top:-50px;right:-50px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,0.07)"></div>'
    + '<div class="hp-chapter-num">'+p.num+'</div>'
    + '<div class="hp-chapter-title">'+p.title.replace('\\n',' ')+'</div>'
    + '<div class="hp-chapter-desc">'+p.desc+'</div>'
    + '<button class="hp-chapter-btn" id="hp-ch-btn">Start Chapter 01 →</button>'
    + '</div>'
    + '</div>'

    // Friction Reality — "What nobody tells you"
    + buildFrictionSection(key)

    // Starter Kit
    + buildStarterKitSection(key)

    // Share button
    + '<div class="hp-section" style="padding-bottom:40px">'
    + '<button onclick="openShareModal(\\'hobby\\',\\''+key+'\\')" style="width:100%;padding:14px;background:rgba(107,78,255,.08);border:1.5px solid rgba(107,78,255,.22);border-radius:12px;color:#B0A0FF;font-size:13px;font-weight:800;cursor:pointer;font-family:sans-serif">📲 Share this Hobby</button>'
    + '</div>';

  function buildFrictionSection(hobbyKey) {
    var items = HOBBY_FRICTION[hobbyKey] || [];
    if (!items.length) return '';
    return '<div class="hp-section">'
      + '<div class="friction-section">'
      + '<div class="friction-title">What nobody tells you</div>'
      + items.map(function(f) { return '<div class="friction-item">' + f + '</div>'; }).join('')
      + '</div></div>';
  }

  function buildStarterKitSection(hobbyKey) {
    var kit = HOBBY_STARTER_KIT[hobbyKey];
    if (!kit) return '';
    var itemsHTML = kit.items.map(function(item) {
      return '<div class="kit-item">'
        + '<span class="kit-item-name">' + item.name + '</span>'
        + '<div><div class="kit-item-price">' + item.price + '</div>'
        + '<div class="kit-item-note">' + item.note + '</div></div>'
        + '</div>';
    }).join('');
    return '<div class="hp-section">'
      + '<div class="kit-section">'
      + '<div class="kit-title">Starter Kit</div>'
      + '<div class="kit-meta-row">'
      + '<div class="kit-meta-item">Budget: <strong>' + kit.budget + '</strong></div>'
      + '<div class="kit-meta-item">Time: <strong>' + kit.time + '</strong></div>'
      + '</div>'
      + itemsHTML
      + '</div></div>';
  }"""

replace_once(OLD_HOBBY_BODY_END, NEW_HOBBY_BODY_END, 'Change 4: Friction + starter kit + share in openHobby')


# ════════════════════════════════════════════════════════════════════
# CHANGE 5: ADD ALL NEW FUNCTIONS before openQuizModal
# ════════════════════════════════════════════════════════════════════

NEW_FUNCTIONS = """// ══════════════════════════════════════════════════════════════════════
// SPRINT SYSTEM
// ══════════════════════════════════════════════════════════════════════

function openSprintModal() {
  buildSprintList();
  document.getElementById('sprintModal').classList.add('open');
}

function closeSprintModal() {
  document.getElementById('sprintModal').classList.remove('open');
}

function buildSprintList() {
  var listEl = document.getElementById('sprint-list');
  var detailEl = document.getElementById('sprint-detail');
  if (!listEl) return;
  if (detailEl) detailEl.style.display = 'none';
  listEl.style.display = '';
  listEl.innerHTML = SPRINTS.map(function(s) {
    var prog = sprintProgress[s.id] || {};
    var done = Object.keys(prog).length;
    var dotsHTML = [0,1,2,3,4,5,6].map(function(d) {
      return '<div style="width:24px;height:24px;border-radius:5px;background:'
        + (prog[d] ? s.color : 'rgba(255,255,255,.05)')
        + ';border:1px solid ' + (prog[d] ? s.color : 'rgba(255,255,255,.07)')
        + ';display:inline-flex;align-items:center;justify-content:center;font-size:8px;font-weight:800;color:'
        + (prog[d] ? s.textColor : 'rgba(255,255,255,.18)') + '">'
        + (prog[d] ? '✓' : (d+1))
        + '</div>';
    }).join('');
    return '<div class="sprint-card" onclick="viewSprintDetail(\\'' + s.id + '\\')">'
      + '<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">'
      + '<span style="font-size:26px">' + s.emoji + '</span>'
      + '<div><div style="font-size:14px;font-weight:800;color:var(--off)">' + s.label + '</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:2px">' + done + ' of 7 days done</div>'
      + '</div></div>'
      + '<div style="font-size:12px;color:rgba(255,255,255,.4);line-height:1.5;margin-bottom:10px">' + s.desc + '</div>'
      + '<div style="display:flex;gap:4px;flex-wrap:wrap">' + dotsHTML + '</div>'
      + '</div>';
  }).join('');
}

function viewSprintDetail(sprintId) {
  activeSprint = sprintId;
  var sprint = SPRINTS.find(function(s) { return s.id === sprintId; });
  if (!sprint) return;
  var listEl = document.getElementById('sprint-list');
  var detailEl = document.getElementById('sprint-detail');
  if (!detailEl) return;
  listEl.style.display = 'none';
  detailEl.style.display = '';
  var prog = sprintProgress[sprintId] || {};
  var nextDay = 0;
  while (prog[nextDay] !== undefined) nextDay++;
  detailEl.innerHTML = '<button onclick="buildSprintList()" style="background:none;border:none;color:rgba(255,255,255,.35);font-size:12px;cursor:pointer;margin-bottom:16px;padding:0;font-family:sans-serif">← All Sprints</button>'
    + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">'
    + '<span style="font-size:28px">' + sprint.emoji + '</span>'
    + '<div style="font-size:20px;font-weight:800">' + sprint.label + '</div>'
    + '</div>'
    + '<div style="font-size:12px;color:rgba(255,255,255,.38);margin-bottom:20px;line-height:1.5">' + sprint.desc + '</div>'
    + sprint.days.map(function(mission, d) {
        var isDone = prog[d] !== undefined;
        var isCurrent = d === nextDay && !isDone;
        return '<div style="display:flex;gap:12px;align-items:flex-start;padding:12px;border-radius:10px;margin-bottom:7px;background:'
          + (isDone ? 'rgba(107,78,255,.08)' : isCurrent ? 'rgba(255,255,255,.025)' : 'transparent')
          + ';border:1px solid '
          + (isDone ? 'rgba(107,78,255,.22)' : isCurrent ? 'rgba(255,255,255,.09)' : 'transparent')
          + '">'
          + '<div style="width:26px;height:26px;border-radius:6px;flex-shrink:0;background:'
          + (isDone ? sprint.color : 'rgba(255,255,255,.05)')
          + ';display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;color:'
          + (isDone ? sprint.textColor : 'rgba(255,255,255,.2)') + '">' + (isDone ? '✓' : (d+1)) + '</div>'
          + '<div style="flex:1">'
          + '<div style="font-size:13px;line-height:1.45;font-weight:' + (isCurrent ? '700' : '400')
          + ';color:' + (isDone ? 'rgba(255,255,255,.28)' : isCurrent ? 'var(--off)' : 'rgba(255,255,255,.42)')
          + ';text-decoration:' + (isDone ? 'line-through' : 'none') + '">' + mission + '</div>'
          + (isCurrent
              ? '<button onclick="markSprintDay(\\'' + sprintId + '\\',' + d + ')" style="margin-top:10px;padding:8px 16px;background:'
                + sprint.color + ';border:none;border-radius:8px;font-size:12px;font-weight:800;color:'
                + sprint.textColor + ';cursor:pointer;font-family:sans-serif">Mark Day ' + (d+1) + ' Done ✓</button>'
              : '')
          + '</div></div>';
      }).join('');
  buildSprintWidget();
}

function markSprintDay(sprintId, day) {
  if (!sprintProgress[sprintId]) sprintProgress[sprintId] = {};
  sprintProgress[sprintId][day] = true;
  if (currentUser) {
    var all = JSON.parse(localStorage.getItem('shrug_sprints') || '{}');
    all[currentUser.email] = sprintProgress;
    localStorage.setItem('shrug_sprints', JSON.stringify(all));
  }
  var sprint = SPRINTS.find(function(s) { return s.id === sprintId; });
  var done = Object.keys(sprintProgress[sprintId]).length;
  if (done === 7) {
    showToast(sprint.emoji + ' Sprint complete! You did it. 🏆');
  } else {
    showToast(sprint.emoji + ' Day ' + (day+1) + ' done! ' + (7-done) + ' days left.');
  }
  viewSprintDetail(sprintId);
}

function buildSprintWidget() {
  var el = document.getElementById('home-sprint-widget');
  if (!el) return;
  if (activeSprint) {
    var sprint = SPRINTS.find(function(s) { return s.id === activeSprint; });
    if (!sprint) return;
    var prog = sprintProgress[activeSprint] || {};
    var done = Object.keys(prog).length;
    var dotsHTML = [0,1,2,3,4,5,6].map(function(d) {
      return '<div class="sprint-day-dot' + (prog[d] ? ' done' : d===done ? ' today' : '') + '">'
        + (prog[d] ? '✓' : (d+1)) + '</div>';
    }).join('');
    el.innerHTML = '<div class="sprint-widget">'
      + '<div class="sprint-widget-hd">'
      + '<div class="sprint-widget-title">' + sprint.emoji + ' ' + sprint.label + '</div>'
      + '<button onclick="openSprintModal()" style="background:rgba(107,78,255,.14);border:1px solid rgba(107,78,255,.25);border-radius:7px;padding:4px 10px;font-size:10px;font-weight:800;color:#B0A0FF;cursor:pointer">View Sprint</button>'
      + '</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.32);margin-bottom:8px">' + done + ' of 7 days complete</div>'
      + '<div class="sprint-day-dots">' + dotsHTML + '</div>'
      + '</div>';
  } else {
    el.innerHTML = '<div class="sprint-widget">'
      + '<div class="sprint-widget-hd">'
      + '<div class="sprint-widget-title">⚡ 7-Day Sprint</div>'
      + '<button onclick="openSprintModal()" style="background:rgba(107,78,255,.14);border:1px solid rgba(107,78,255,.25);border-radius:7px;padding:4px 10px;font-size:10px;font-weight:800;color:#B0A0FF;cursor:pointer">Start</button>'
      + '</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.32)">Choose a 7-day challenge track</div>'
      + '</div>';
  }
}


// ══════════════════════════════════════════════════════════════════════
// MONTHLY CHALLENGE
// ══════════════════════════════════════════════════════════════════════

function openChallengeModal() {
  buildChallengeView();
  document.getElementById('challengeModal').classList.add('open');
}

function closeChallengeModal() {
  document.getElementById('challengeModal').classList.remove('open');
}

function buildChallengeView() {
  var el = document.getElementById('challenge-content');
  if (!el) return;
  var prog = challengeProgress || {};
  var done = Object.keys(prog).filter(function(k) { return prog[k]; }).length;
  var pct = Math.round((done/30)*100);

  var milestoneHTML = MONTHLY_CHALLENGE.milestones.map(function(m) {
    var reached = done >= m.day;
    return '<div style="text-align:center;padding:10px 6px;border-radius:10px;background:'
      + (reached ? 'rgba(240,201,58,.09)' : 'rgba(255,255,255,.02)')
      + ';border:1px solid ' + (reached ? 'rgba(240,201,58,.28)' : 'rgba(255,255,255,.06)') + '">'
      + '<div style="font-size:18px">' + (reached ? m.badge : '🔒') + '</div>'
      + '<div style="font-size:9px;font-weight:800;letter-spacing:.5px;color:' + (reached ? '#F0C93A' : 'rgba(255,255,255,.2)') + ';margin-top:4px">DAY ' + m.day + '</div>'
      + '<div style="font-size:9px;color:rgba(255,255,255,.25);margin-top:2px">' + m.label + '</div>'
      + '</div>';
  }).join('');

  var dayGrid = '';
  for (var d=1; d<=30; d++) {
    var isDone = prog[d];
    var isMile = [7,14,21,30].indexOf(d) !== -1;
    dayGrid += '<div class="c-day' + (isDone ? ' done' : '') + (isMile && !isDone ? ' milestone' : '')
      + '" onclick="toggleChallengeDay(' + d + ')" title="Day ' + d + '">' + (isDone ? '✓' : d) + '</div>';
  }

  el.innerHTML = '<div style="font-size:36px;text-align:center;margin-bottom:8px">' + MONTHLY_CHALLENGE.emoji + '</div>'
    + '<div style="font-size:18px;font-weight:800;text-align:center;margin-bottom:6px">' + MONTHLY_CHALLENGE.title + '</div>'
    + '<div style="font-size:12px;color:rgba(255,255,255,.4);text-align:center;margin-bottom:20px;line-height:1.55">' + MONTHLY_CHALLENGE.desc + '</div>'
    + '<div style="background:rgba(255,255,255,.03);border-radius:10px;padding:12px 14px;margin-bottom:16px">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">'
    + '<span style="font-size:11px;font-weight:700;color:rgba(255,255,255,.35)">Progress</span>'
    + '<span style="font-size:13px;font-weight:800;color:#F0C93A">' + done + ' / 30 days</span>'
    + '</div>'
    + '<div style="height:5px;background:rgba(255,255,255,.05);border-radius:3px">'
    + '<div style="height:100%;width:' + pct + '%;background:#F0C93A;border-radius:3px;transition:width .5s"></div>'
    + '</div></div>'
    + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:18px">' + milestoneHTML + '</div>'
    + '<div class="challenge-day-grid">' + dayGrid + '</div>'
    + '<div style="font-size:11px;color:rgba(255,255,255,.22);text-align:center;margin-top:14px">Tap any day to mark it done</div>';
}

function toggleChallengeDay(day) {
  if (challengeProgress[day]) {
    delete challengeProgress[day];
  } else {
    challengeProgress[day] = true;
  }
  if (currentUser) {
    var all = JSON.parse(localStorage.getItem('shrug_challenge') || '{}');
    all[currentUser.email] = challengeProgress;
    localStorage.setItem('shrug_challenge', JSON.stringify(all));
  }
  var done = Object.keys(challengeProgress).filter(function(k) { return challengeProgress[k]; }).length;
  var milestone = null;
  MONTHLY_CHALLENGE.milestones.forEach(function(m) { if (m.day === done) milestone = m; });
  if (milestone && challengeProgress[done]) {
    showToast(milestone.badge + ' ' + milestone.label + '! ' + milestone.desc);
  }
  buildChallengeView();
}


// ══════════════════════════════════════════════════════════════════════
// SHARE CARDS (Canvas)
// ══════════════════════════════════════════════════════════════════════

function openShareModal(type, id) {
  document.getElementById('shareModal').classList.add('open');
  generateShareCard(type, id);
}

function closeShareModal() {
  document.getElementById('shareModal').classList.remove('open');
}

function generateShareCard(type, id) {
  var canvas = document.getElementById('shareCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  canvas.width = 1080; canvas.height = 1080;
  var hobby = HOBBIES[id] || {};
  var bgColor = hobby.color || '#F0C93A';
  var isLight = hobby.textColor !== 'white';
  var textCol = isLight ? '#0E0D0B' : '#FFFFFF';
  var subCol  = isLight ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.55)';

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 1080, 1080);

  // Decorative circles
  ctx.beginPath();
  ctx.arc(980, 120, 380, 0, Math.PI*2);
  ctx.fillStyle = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.07)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 980, 280, 0, Math.PI*2);
  ctx.fillStyle = isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)';
  ctx.fill();

  // Emoji
  ctx.font = '180px serif';
  ctx.textAlign = 'center';
  ctx.fillText(hobby.icon || '🎯', 540, 440);

  // Hobby name
  ctx.font = 'bold 80px sans-serif';
  ctx.fillStyle = textCol;
  ctx.fillText((id || 'SHRUG').toUpperCase(), 540, 580);

  // Tagline
  ctx.font = '36px sans-serif';
  ctx.fillStyle = subCol;
  var tagline = (hobby.tagline || '').substring(0, 45);
  ctx.fillText(tagline, 540, 660);

  // Branding line
  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = isLight ? 'rgba(0,0,0,0.28)' : 'rgba(255,255,255,0.28)';
  ctx.fillText('SHRUG.APP — DISCOVER WHAT MAKES YOU, YOU', 540, 980);

  // Show preview
  var preview = document.getElementById('sharePreview');
  if (preview) preview.src = canvas.toDataURL('image/png');
}

function downloadShareCard() {
  var canvas = document.getElementById('shareCanvas');
  if (!canvas) return;
  var a = document.createElement('a');
  a.download = 'shrug-share.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
  showToast('Share card downloaded! 📲');
}


// ══════════════════════════════════════════════════════════════════════
// RADAR CHART — Trait Visualization
// ══════════════════════════════════════════════════════════════════════

function getUserTraits() {
  var completed = window.completedChapters || {};
  var hobbyKeys = Object.keys(completed);
  if (hobbyKeys.length === 0) {
    return {creative:0, analytical:0, physical:0, expressive:0, social:0};
  }
  var totals = {creative:0, analytical:0, physical:0, expressive:0, social:0};
  var count = 0;
  hobbyKeys.forEach(function(k) {
    var t = HOBBY_TRAITS[k];
    if (t) {
      Object.keys(totals).forEach(function(trait) { totals[trait] += (t[trait] || 0); });
      count++;
    }
  });
  if (count > 0) {
    Object.keys(totals).forEach(function(k) { totals[k] = Math.round(totals[k] / count); });
  }
  return totals;
}

function renderRadarChart(containerId, traits) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var labels = ['Creative','Analytical','Physical','Expressive','Social'];
  var keys   = ['creative','analytical','physical','expressive','social'];
  var colors = ['#F0C93A','#ACD8F0','#B8D96E','#F4A261','#6B4EFF'];
  var cx=120, cy=120, r=88, sides=5;
  var svg = ['<svg width="240" height="240" class="radar-svg" viewBox="0 0 240 240">'];

  // Grid rings
  for (var g=1; g<=5; g++) {
    var gr = r*(g/5);
    var pts = keys.map(function(_,i) {
      var a = (Math.PI*2*i/sides) - Math.PI/2;
      return (cx+gr*Math.cos(a)).toFixed(1)+','+(cy+gr*Math.sin(a)).toFixed(1);
    }).join(' ');
    svg.push('<polygon points="'+pts+'" class="radar-grid"/>');
  }

  // Axis lines
  keys.forEach(function(_,i) {
    var a = (Math.PI*2*i/sides) - Math.PI/2;
    svg.push('<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+r*Math.cos(a)).toFixed(1)+'" y2="'+(cy+r*Math.sin(a)).toFixed(1)+'" stroke="rgba(255,255,255,.05)" stroke-width="1"/>');
  });

  // Data polygon
  var dataPts = keys.map(function(k,i) {
    var val = Math.max(0, Math.min(10, traits[k] || 0)) / 10;
    var a = (Math.PI*2*i/sides) - Math.PI/2;
    return (cx+r*val*Math.cos(a)).toFixed(1)+','+(cy+r*val*Math.sin(a)).toFixed(1);
  }).join(' ');
  svg.push('<polygon points="'+dataPts+'" class="radar-poly"/>');

  // Labels + dots
  keys.forEach(function(k,i) {
    var a = (Math.PI*2*i/sides) - Math.PI/2;
    var lx = cx + (r+20)*Math.cos(a);
    var ly = cy + (r+20)*Math.sin(a);
    var anchor = lx < cx-4 ? 'end' : lx > cx+4 ? 'start' : 'middle';
    svg.push('<text x="'+lx.toFixed(1)+'" y="'+(ly+4).toFixed(1)+'" class="radar-label" text-anchor="'+anchor+'">'+labels[i]+'</text>');
    var val = Math.max(0, Math.min(10, traits[k] || 0)) / 10;
    var dx = cx+r*val*Math.cos(a);
    var dy = cy+r*val*Math.sin(a);
    svg.push('<circle cx="'+dx.toFixed(1)+'" cy="'+dy.toFixed(1)+'" r="3.5" fill="'+colors[i]+'"/>');
  });

  svg.push('</svg>');

  // Trait bars
  var bars = '<div class="trait-bars">' + keys.map(function(k,i) {
    var val = traits[k] || 0;
    return '<div class="trait-bar-row">'
      + '<div class="trait-bar-lbl">'+labels[i]+'</div>'
      + '<div class="trait-bar-track"><div class="trait-bar-fill" style="width:'+(val*10)+'%;background:'+colors[i]+'"></div></div>'
      + '</div>';
  }).join('') + '</div>';

  el.innerHTML = '<div class="radar-wrap-title">Your Creative Identity</div>' + svg.join('') + bars;
}

"""

QUIZ_MODAL_ANCHOR = '// Fix app quiz modal references\nfunction openQuizModal()'
replace_once(QUIZ_MODAL_ANCHOR, NEW_FUNCTIONS + '\n' + QUIZ_MODAL_ANCHOR, 'Change 5: Sprint/challenge/share/radar functions')


# ════════════════════════════════════════════════════════════════════
# CHANGE 6: MODIFY buildHomeDashboard — add sprint/radar/challenge
# ════════════════════════════════════════════════════════════════════

OLD_HOME_PILLS_REF = """  const pillsEl = document.getElementById('home-pills');"""

NEW_HOME_PILLS_REF = """  // Sprint widget
  buildSprintWidget();

  // Monthly challenge widget
  var cWidget = document.getElementById('home-challenge-widget');
  if (cWidget) {
    var cdone = Object.keys(challengeProgress).filter(function(k){ return challengeProgress[k]; }).length;
    cWidget.innerHTML = '<div class="challenge-widget">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">'
      + '<div style="font-size:13px;font-weight:800;color:#F0C93A">' + MONTHLY_CHALLENGE.emoji + ' ' + MONTHLY_CHALLENGE.title + '</div>'
      + '<button onclick="openChallengeModal()" style="background:rgba(240,201,58,.1);border:1px solid rgba(240,201,58,.22);border-radius:7px;padding:4px 10px;font-size:10px;font-weight:800;color:#F0C93A;cursor:pointer">'
      + (cdone > 0 ? cdone + '/30' : 'Join') + '</button>'
      + '</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.32)">Draw something every day for 30 days</div>'
      + '</div>';
  }

  // Radar chart
  var traits = getUserTraits();
  renderRadarChart('home-radar-chart', traits);

  const pillsEl = document.getElementById('home-pills');"""

replace_once(OLD_HOME_PILLS_REF, NEW_HOME_PILLS_REF, 'Change 6: buildHomeDashboard + sprint/radar/challenge')


# ════════════════════════════════════════════════════════════════════
# CHANGE 7: MODIFY enterApp — load sprint + challenge state
# ════════════════════════════════════════════════════════════════════

OLD_ENTER_APP = """  // Load saved chapter progress
  window.completedChapters = DB.loadProgress(user.email);"""

NEW_ENTER_APP = """  // Load saved chapter progress
  window.completedChapters = DB.loadProgress(user.email);

  // Load sprint progress
  try {
    var _allSprints = JSON.parse(localStorage.getItem('shrug_sprints') || '{}');
    sprintProgress = _allSprints[user.email] || {};
    // Determine most active sprint
    var _sprintKeys = Object.keys(sprintProgress);
    if (_sprintKeys.length > 0) {
      activeSprint = _sprintKeys.reduce(function(best, k) {
        return Object.keys(sprintProgress[k]||{}).length > Object.keys(sprintProgress[best]||{}).length ? k : best;
      }, _sprintKeys[0]);
    }
  } catch(e) { sprintProgress = {}; }

  // Load challenge progress
  try {
    var _allChallenge = JSON.parse(localStorage.getItem('shrug_challenge') || '{}');
    challengeProgress = _allChallenge[user.email] || {};
  } catch(e) { challengeProgress = {}; }"""

replace_once(OLD_ENTER_APP, NEW_ENTER_APP, 'Change 7: enterApp loads sprint + challenge state')


# ════════════════════════════════════════════════════════════════════
# CHANGE 8: ADD HOME VIEW WIDGET CONTAINERS (sprint, challenge, radar)
# ════════════════════════════════════════════════════════════════════

OLD_HOME_PILLS_HTML = '<div class="home-pills" id="home-pills">'
NEW_HOME_PILLS_HTML = """<div id="home-sprint-widget"></div>
        <div id="home-challenge-widget"></div>
        <div id="home-radar-chart"></div>
        <div class="sec-lbl" style="margin-top:16px">Your hobbies</div>
        <div class="home-pills" id="home-pills">"""

replace_once(OLD_HOME_PILLS_HTML, NEW_HOME_PILLS_HTML, 'Change 8: Home view containers for sprint/radar/challenge')


# ════════════════════════════════════════════════════════════════════
# CHANGE 9: ADD SIDEBAR BUTTONS for sprint + challenge
# ════════════════════════════════════════════════════════════════════

OLD_SIDEBAR_QUIZ = """    <div class="sb-divider"></div>
    <button class="sb-item" onclick="openQuizModal()">"""

NEW_SIDEBAR_QUIZ = """    <div class="sb-divider"></div>
    <button class="sb-item" onclick="openSprintModal()">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      7-Day Sprint
    </button>
    <button class="sb-item" onclick="openChallengeModal()">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Monthly Challenge
    </button>
    <div class="sb-divider"></div>
    <button class="sb-item" onclick="openQuizModal()">"""

replace_once(OLD_SIDEBAR_QUIZ, NEW_SIDEBAR_QUIZ, 'Change 9: Sprint + challenge buttons in sidebar')


# ════════════════════════════════════════════════════════════════════
# CHANGE 10: ADD ALL NEW MODALS before </body>
# ════════════════════════════════════════════════════════════════════

NEW_MODALS = """
<!-- ══ IDENTITY MODAL ══════════════════════════════════════════════ -->
<div class="identity-modal" id="identityModal">
  <div class="identity-box">
    <div style="font-size:10px;color:rgba(255,255,255,.28);font-weight:800;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px">STEP 1 OF 2 — IDENTITY</div>
    <div style="font-size:22px;font-weight:800;margin-bottom:6px">How do you want to feel?</div>
    <div style="font-size:14px;color:rgba(255,255,255,.38);margin-bottom:4px">Choose the energy you want to bring to a new hobby.</div>
    <div class="identity-grid" id="identity-grid"></div>
    <div style="display:flex;gap:10px;margin-top:22px">
      <button onclick="skipIdentity()" style="flex:1;padding:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;color:rgba(255,255,255,.38);font-size:13px;font-weight:700;cursor:pointer;font-family:sans-serif">Skip →</button>
      <button id="identity-continue-btn" onclick="continueToQuiz()" style="flex:2;padding:12px;background:#F0C93A;border:none;border-radius:10px;color:#0E0D0B;font-size:13px;font-weight:800;cursor:pointer;opacity:.3;pointer-events:none;font-family:sans-serif">Continue to Quiz →</button>
    </div>
  </div>
</div>

<!-- ══ SPRINT MODAL ════════════════════════════════════════════════ -->
<div class="sprint-modal" id="sprintModal">
  <div class="sprint-box">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:22px">
      <div>
        <div style="font-size:10px;color:rgba(255,255,255,.28);font-weight:800;letter-spacing:3px;text-transform:uppercase;margin-bottom:3px">FEATURE</div>
        <div style="font-size:20px;font-weight:800">7-Day Sprints</div>
      </div>
      <button onclick="closeSprintModal()" style="background:rgba(255,255,255,.06);border:none;border-radius:10px;width:36px;height:36px;cursor:pointer;color:rgba(255,255,255,.45);font-size:20px;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div id="sprint-list"></div>
    <div id="sprint-detail" style="display:none"></div>
  </div>
</div>

<!-- ══ SHARE MODAL ═════════════════════════════════════════════════ -->
<div class="share-modal" id="shareModal">
  <div class="share-box">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
      <div style="font-size:18px;font-weight:800">Share Card</div>
      <button onclick="closeShareModal()" style="background:rgba(255,255,255,.06);border:none;border-radius:10px;width:36px;height:36px;cursor:pointer;color:rgba(255,255,255,.45);font-size:20px;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <canvas id="shareCanvas" style="display:none"></canvas>
    <img id="sharePreview" alt="Share card preview" src="" style="width:100%;max-width:280px;border-radius:14px;margin:14px auto;display:block;box-shadow:0 14px 42px rgba(0,0,0,.55)">
    <div style="font-size:11px;color:rgba(255,255,255,.28);margin-bottom:14px">Your hobby card for Instagram Stories</div>
    <button onclick="downloadShareCard()" style="width:100%;padding:14px;background:#F0C93A;border:none;border-radius:12px;color:#0E0D0B;font-size:14px;font-weight:800;cursor:pointer;font-family:sans-serif">⬇ Download PNG</button>
  </div>
</div>

<!-- ══ CHALLENGE MODAL ═════════════════════════════════════════════ -->
<div class="challenge-modal" id="challengeModal">
  <div class="challenge-box">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
      <div style="font-size:18px;font-weight:800">Monthly Challenge</div>
      <button onclick="closeChallengeModal()" style="background:rgba(255,255,255,.06);border:none;border-radius:10px;width:36px;height:36px;cursor:pointer;color:rgba(255,255,255,.45);font-size:20px;display:flex;align-items:center;justify-content:center">×</button>
    </div>
    <div id="challenge-content"></div>
  </div>
</div>
"""

replace_once('\n</body>\n</html>', NEW_MODALS + '\n</body>\n</html>', 'Change 10: Identity/sprint/share/challenge modals')


# ════════════════════════════════════════════════════════════════════
# QUICK SYNTAX CHECK — look for most common issues
# ════════════════════════════════════════════════════════════════════

# Check for unmatched apostrophe-inside-string issues
import re

# Count open/close parens in script block
script_start = content.find('<script>')
script_end = content.find('</script>')
if script_start > -1 and script_end > -1:
    js = content[script_start:script_end]
    open_p = js.count('(')
    close_p = js.count(')')
    open_b = js.count('{')
    close_b = js.count('}')
    open_sq = js.count('[')
    close_sq = js.count(']')
    print(f"\nSyntax check:")
    print(f"  Parens ( ): {open_p} / {close_p} → {'OK' if open_p == close_p else 'MISMATCH'}")
    print(f"  Braces {{ }}: {open_b} / {close_b} → {'OK' if open_b == close_b else 'MISMATCH'}")
    print(f"  Brackets [ ]: {open_sq} / {close_sq} → {'OK' if open_sq == close_sq else 'MISMATCH'}")
else:
    print("\nWARNING: Could not locate <script> block")


# ════════════════════════════════════════════════════════════════════
# WRITE OUTPUT
# ════════════════════════════════════════════════════════════════════

with open(dst, 'w', encoding='utf-8') as f:
    f.write(content)

import os
size = os.path.getsize(dst)
lines = content.count('\n')

print(f"\n{'='*60}")
print(f"shrug-12.html written successfully")
print(f"Size:  {size:,} bytes ({size//1024} KB)")
print(f"Lines: {lines:,}")
print(f"{'='*60}\n")

print("Changes applied:")
for c in applied:
    print(f"  ✓ {c}")

if skipped:
    print("\nSkipped (anchor not found):")
    for s in skipped:
        print(f"  ✗ {s}")
