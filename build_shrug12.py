import sys

input_path  = '/Users/mikejacques/Downloads/shrug-11.html'
output_path = '/Users/mikejacques/Downloads/shrug-12.html'

with open(input_path, 'r', encoding='utf-8') as f:
    content = f.read()

results = []

# ─────────────────────────────────────────────────────────────────
# CHANGE 1: Insert data constants before const PROFILE_COLORS
# ─────────────────────────────────────────────────────────────────
old1 = "const PROFILE_COLORS = {\n  creative: { bg: '#F0C93A', text: '#0E0D0B' },"

new1 = (
    "// \u2500\u2500 IDENTITY / EMOTIONAL STATES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "const IDENTITY_STATES = [\n"
    "  { id:'creative',    emoji:'\U0001f3a8', label:'Creative',    desc:'I want to make things and express myself',      color:'#F0C93A', textColor:'#0E0D0B' },\n"
    "  { id:'athletic',    emoji:'\U0001f4aa', label:'Athletic',    desc:'I want to feel strong, active and alive',        color:'#E8453C', textColor:'white'   },\n"
    "  { id:'calm',        emoji:'\U0001f33f', label:'Calm',        desc:'I want peace, focus and quiet satisfaction',    color:'#ACD8F0', textColor:'#0E0D0B' },\n"
    "  { id:'social',      emoji:'\U0001f5e3\ufe0f', label:'Social',      desc:'I want connection and shared experiences',       color:'#B8D96E', textColor:'#0E0D0B' },\n"
    "  { id:'adventurous', emoji:'\U0001f30d', label:'Adventurous', desc:'I want to explore and be surprised',             color:'#3D9E8C', textColor:'white'   },\n"
    "  { id:'strategic',   emoji:'\u265f\ufe0f', label:'Strategic',   desc:'I want mastery, depth and real challenge',      color:'#6B4EFF', textColor:'white'   },\n"
    "];\n"
    "const EMOTION_HOBBY_MAP = {\n"
    "  creative:    ['photography','painting','writing','collage','drawing','film'],\n"
    "  athletic:    ['yoga','fitness','dancing'],\n"
    "  calm:        ['baking','ceramics','knitting','journaling','gardening','reading'],\n"
    "  social:      ['cooking','dancing','language','birdwatching'],\n"
    "  adventurous: ['birdwatching','gardening','photography','film','woodworking'],\n"
    "  strategic:   ['piano','woodworking','reading','language','writing','chess'],\n"
    "};\n"
    "let selectedIdentities = []; // tracks identity choices across flow\n"
    "\n"
    "// \u2500\u2500 HOBBY TRAITS (for radar chart) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "const HOBBY_TRAITS = {\n"
    "  photography:  {creative:9,analytical:7,physical:3,expressive:8,social:4},\n"
    "  painting:     {creative:10,analytical:4,physical:2,expressive:10,social:2},\n"
    "  writing:      {creative:9,analytical:8,physical:1,expressive:10,social:3},\n"
    "  cooking:      {creative:7,analytical:6,physical:5,expressive:7,social:9},\n"
    "  baking:       {creative:7,analytical:8,physical:4,expressive:6,social:7},\n"
    "  yoga:         {creative:4,analytical:5,physical:9,expressive:6,social:5},\n"
    "  ceramics:     {creative:8,analytical:4,physical:7,expressive:9,social:3},\n"
    "  gardening:    {creative:6,analytical:6,physical:7,expressive:5,social:4},\n"
    "  birdwatching: {creative:4,analytical:9,physical:5,expressive:3,social:4},\n"
    "  reading:      {creative:5,analytical:10,physical:1,expressive:4,social:2},\n"
    "  piano:        {creative:8,analytical:9,physical:5,expressive:9,social:3},\n"
    "  collage:      {creative:9,analytical:3,physical:2,expressive:9,social:3},\n"
    "  drawing:      {creative:9,analytical:5,physical:3,expressive:9,social:2},\n"
    "  fitness:      {creative:3,analytical:6,physical:10,expressive:5,social:6},\n"
    "  dancing:      {creative:7,analytical:4,physical:9,expressive:10,social:8},\n"
    "  knitting:     {creative:7,analytical:6,physical:4,expressive:6,social:5},\n"
    "  journaling:   {creative:6,analytical:7,physical:1,expressive:10,social:2},\n"
    "  woodworking:  {creative:7,analytical:8,physical:8,expressive:6,social:3},\n"
    "  film:         {creative:9,analytical:7,physical:3,expressive:9,social:6},\n"
    "  language:     {creative:5,analytical:9,physical:1,expressive:7,social:9},\n"
    "};\n"
    "\n"
    "// \u2500\u2500 SPRINT TRACKS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "const SPRINTS = [\n"
    "  {\n"
    "    id:'creative_reboot', emoji:'\U0001f3a8', name:'The Creative Reboot',\n"
    "    desc:'7 days to unlock your creative voice. Paint, write, shoot.',\n"
    "    color:'#F0C93A', textColor:'#0E0D0B',\n"
    "    hobbies:['painting','writing','photography'],\n"
    "    days:[\n"
    "      {day:1,hobby:'painting',   mission:'Paint a 2-color sunset. No rules \u2014 just blend.',           duration:'20 min'},\n"
    "      {day:2,hobby:'writing',    mission:'Write a 100-word scene without using any emotion words.',   duration:'15 min'},\n"
    "      {day:3,hobby:'photography',mission:'Take 3 photos using the rule of thirds.',                  duration:'20 min'},\n"
    "      {day:4,hobby:'painting',   mission:'Paint the same object twice \u2014 once in warm, once cool.',   duration:'25 min'},\n"
    "      {day:5,hobby:'writing',    mission:'Write your best opening line 10 different ways.',           duration:'15 min'},\n"
    "      {day:6,hobby:'photography',mission:'Shoot 5 photos in golden hour light.',                     duration:'30 min'},\n"
    "      {day:7,hobby:'painting',   mission:'Mix a full landscape using only 3 colors + white.',        duration:'30 min'},\n"
    "    ],\n"
    "    badge:'\U0001f3c5 Creative Reboot Complete',\n"
    "    summary:'You have a natural instinct for visual storytelling. Your strongest trait: expressiveness.',\n"
    "    deepDive:'Try a 30-day sketchbook challenge or sign up for a watercolor workshop.',\n"
    "  },\n"
    "  {\n"
    "    id:'body_reset', emoji:'\U0001f4aa', name:'The Body Reset',\n"
    "    desc:'7 days to feel alive in your body again.',\n"
    "    color:'#E8453C', textColor:'white',\n"
    "    hobbies:['yoga','fitness','dancing'],\n"
    "    days:[\n"
    "      {day:1,hobby:'yoga',   mission:'Complete a 15-min beginner sun salutation flow.',        duration:'15 min'},\n"
    "      {day:2,hobby:'fitness',mission:'Do 3 sets of 10 pushups, 15 squats, 20 jumping jacks.',  duration:'20 min'},\n"
    "      {day:3,hobby:'dancing',mission:'Learn one 8-count dance phrase from a YouTube tutorial.', duration:'20 min'},\n"
    "      {day:4,hobby:'yoga',   mission:'Hold warrior 1, 2 and 3 for 30 seconds each side.',      duration:'15 min'},\n"
    "      {day:5,hobby:'fitness',mission:'20-minute walk. No phone. Notice 5 things you see.',     duration:'20 min'},\n"
    "      {day:6,hobby:'dancing',mission:'Dance freestyle for 10 minutes to music you love.',       duration:'10 min'},\n"
    "      {day:7,hobby:'yoga',   mission:'Full 20-min yoga flow. Set an intention before you start.',duration:'20 min'},\n"
    "    ],\n"
    "    badge:'\U0001f3c5 Body Reset Complete',\n"
    "    summary:'You thrive when movement is joyful, not punishing. Your body craves rhythm.',\n"
    "    deepDive:'Try a 10-class yoga intro pack or a 5K training plan.',\n"
    "  },\n"
    "  {\n"
    "    id:'explorer_track', emoji:'\U0001f30d', name:'The Explorer Track',\n"
    "    desc:'Slow down and notice the world you\\'ve been walking past.',\n"
    "    color:'#3D9E8C', textColor:'white',\n"
    "    hobbies:['birdwatching','photography','gardening'],\n"
    "    days:[\n"
    "      {day:1,hobby:'birdwatching', mission:'Sit outside 20 min and identify 3 birds by sight or sound.', duration:'20 min'},\n"
    "      {day:2,hobby:'photography',  mission:'Photograph 5 textures you\\'ve never noticed before.',         duration:'20 min'},\n"
    "      {day:3,hobby:'gardening',    mission:'Plant one seed or cutting. Document it with a photo.',        duration:'20 min'},\n"
    "      {day:4,hobby:'birdwatching', mission:'Download Merlin app and log your first 5 bird sightings.',   duration:'20 min'},\n"
    "      {day:5,hobby:'photography',  mission:'Shoot a 3-photo story about your morning routine.',           duration:'20 min'},\n"
    "      {day:6,hobby:'gardening',    mission:'Learn what 3 plants in your neighborhood are called.',        duration:'15 min'},\n"
    "      {day:7,hobby:'birdwatching', mission:'Go to a park at dawn. Stay for 30 minutes. Just observe.',   duration:'30 min'},\n"
    "    ],\n"
    "    badge:'\U0001f3c5 Explorer Track Complete',\n"
    "    summary:'You have the rare gift of slow attention. The world reveals more to people like you.',\n"
    "    deepDive:'Get a field guide for your region. Join a local birding club or nature walk.',\n"
    "  },\n"
    "  {\n"
    "    id:'solo_mastery', emoji:'\u265f\ufe0f', name:'The Solo Mastery Track',\n"
    "    desc:'7 days of deep work on skills that compound for life.',\n"
    "    color:'#6B4EFF', textColor:'white',\n"
    "    hobbies:['piano','writing','reading'],\n"
    "    days:[\n"
    "      {day:1,hobby:'piano',  mission:'Learn to play a 5-note pentatonic scale both hands.',       duration:'20 min'},\n"
    "      {day:2,hobby:'writing',mission:'Write a 200-word character description from only details.',  duration:'20 min'},\n"
    "      {day:3,hobby:'reading', mission:'Read 20 pages actively \u2014 annotate, underline, question.', duration:'30 min'},\n"
    "      {day:4,hobby:'piano',  mission:'Play the same 4-bar phrase 20 times. Focus on evenness.',  duration:'20 min'},\n"
    "      {day:5,hobby:'writing',mission:'Rewrite a paragraph you wrote on Day 2. Make it sharper.', duration:'15 min'},\n"
    "      {day:6,hobby:'reading', mission:'Summarize what you read in 5 bullet points from memory.',  duration:'20 min'},\n"
    "      {day:7,hobby:'piano',  mission:'Record yourself playing. Listen back. What improved?',      duration:'25 min'},\n"
    "    ],\n"
    "    badge:'\U0001f3c5 Solo Mastery Complete',\n"
    "    summary:'You are wired for depth, not breadth. Skills compound with you \u2014 keep going.',\n"
    "    deepDive:'Sign up for a structured piano curriculum. Try Coursera for writing or a reading challenge.',\n"
    "  },\n"
    "];\n"
    "\n"
    "// \u2500\u2500 FRICTION REALITY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "const HOBBY_FRICTION = {\n"
    "  photography:  ['You will delete 95% of your shots \u2014 that\\'s normal','Equipment envy is real. Resist it for 6 months','Your first 1,000 photos will mostly be bad. Shoot them anyway.'],\n"
    "  painting:     ['Your first paintings will embarrass you \u2014 keep them all','Colour mixing feels impossible for the first month','Clean your brushes immediately or they\\'re done for'],\n"
    "  writing:      ['The first draft is supposed to be terrible \u2014 that\\'s its job','You will rewrite the same paragraph 12 times','Most writers feel like frauds for years. Write anyway.'],\n"
    "  cooking:      ['You will ruin things. Salt too much, burn things, under-season','Recipe times are wrong half the time','The first 3 times you make a dish, it\\'s practice'],\n"
    "  baking:       ['Measurement precision matters more than cooking \u2014 no improvising','Humidity and altitude affect your results in ways recipes don\\'t mention','Over-mixing is the #1 beginner mistake'],\n"
    "  yoga:         ['The first 2 weeks your hips and hamstrings will revolt','Progress is invisible for months, then sudden','Comparison to other students in class will derail you'],\n"
    "  ceramics:     ['Half your pieces will crack in the kiln. This never fully stops.','The wheel is harder than it looks online','Clay is expensive once you factor in firing costs'],\n"
    "  gardening:    ['Things will die. Repeatedly. That\\'s how you learn.','Results take months, not days','Pests appear the moment something looks good'],\n"
    "  birdwatching: ['You will misidentify birds constantly at first \u2014 good birders still do','It requires early mornings and patience most people quit on','The gear rabbit hole is real and deep'],\n"
    "  reading:      ['Choosing what to read is harder than reading it','You will abandon books. That\\'s fine \u2014 life is short','Reading fast is not better than reading well'],\n"
    "  piano:        ['Your fingers will feel stupid for the first month','You need consistent short sessions \u2014 15 min daily beats 2 hours once a week','You will plateau and it will feel permanent. Push through.'],\n"
    '  collage:      [\'Sourcing materials takes longer than making the piece\',\'The "right" image never exists \u2014 you have to make do\',\'Digital collage is faster but loses the tactile satisfaction\'],\n'
    "  drawing:      ['You can\\'t draw badly enough to not improve','The \\\"I\\'m not talented\\\" belief is the only real barrier','Your hand takes time to follow your eye \u2014 stick with it'],\n"
    "  fitness:      ['The first 2 weeks are the worst. Do not judge your capacity then.','Soreness is normal. Pain is not. Learn the difference.','Skipping one session is fine. Skipping becomes a habit fast.'],\n"
    "  dancing:      ['You will feel ridiculous before you feel good \u2014 everyone does','Social dance requires a partner who\\'s also learning','Your body memory builds slower than your enthusiasm'],\n"
    "  knitting:     ['You will drop stitches. You will have to unravel. Often.','Your tension will be inconsistent for months','Pattern reading is its own skill on top of knitting'],\n"
    "  journaling:   ['Nothing profound happens in the first week','You\\'ll write in circles before you write through things','Consistency matters more than what you write'],\n"
    "  woodworking:  ['Wood is unpredictable \u2014 grain, humidity, species all fight you','Power tools demand respect. Read every safety warning.','Your first project will have gaps. That\\'s a feature.'],\n"
    "  film:         ['Watching films analytically kills casual enjoyment for a while','The language of cinema takes years to internalize','Great cinematography is invisible \u2014 that\\'s the point'],\n"
    "  language:     ['The intermediate plateau is brutal and lasts 6\u201318 months','Grammar rules have more exceptions than rules','Fluency requires embarrassing yourself in public \u2014 repeatedly'],\n"
    "};\n"
    "\n"
    "// \u2500\u2500 STARTER KITS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "const HOBBY_STARTER_KIT = {\n"
    "  photography:  { gear:[{n:'Used mirrorless or DSLR body',p:'$200\u2013400'},{n:'50mm f/1.8 lens',p:'$100\u2013150'},{n:'Extra battery + 64GB card',p:'$30\u201350'}], time:'2\u20133 months to see real improvement', budget:'$0 with a phone \u00b7 $350\u2013600 to get serious' },\n"
    "  painting:     { gear:[{n:'Watercolour starter set (12 colours)',p:'$15\u201330'},{n:'Cold press watercolour paper block',p:'$12\u201320'},{n:'3 round brushes (#4, #8, #12)',p:'$15\u201325'}], time:'3\u20136 months to feel in control', budget:'$40\u201380 to start right' },\n"
    "  writing:      { gear:[{n:'A notebook you\\'re afraid to use',p:'$8\u201320'},{n:'Scrivener or iA Writer',p:'Free\u2013$49'},{n:'\\\"Bird by Bird\\\" by Anne Lamott',p:'$12'}], time:'6 months to develop your voice', budget:'$20\u201380, mostly time' },\n"
    "  cooking:      { gear:[{n:'8\\\" chef\\'s knife (Victorinox)',p:'$35\u201350'},{n:'Cast iron skillet',p:'$25\u201345'},{n:'Instant-read thermometer',p:'$10\u201315'}], time:'3 months to cook confidently', budget:'$70\u2013110 for real tools' },\n"
    "  baking:       { gear:[{n:'Kitchen scale (digital)',p:'$12\u201320'},{n:'Stand or hand mixer',p:'$30\u2013300'},{n:'Half-sheet baking pans (2)',p:'$20\u201330'}], time:'6 months to bake reliably', budget:'$60\u2013350 depending on mixer choice' },\n"
    "  yoga:         { gear:[{n:'Non-slip mat (6mm thick)',p:'$25\u201360'},{n:'2 cork blocks',p:'$15\u201325'},{n:'Strap',p:'$8\u201312'}], time:'4\u20138 weeks to feel the difference daily', budget:'$48\u201397' },\n"
    "  ceramics:     { gear:[{n:'10-class intro studio pass',p:'$120\u2013200'},{n:'Basic tool kit',p:'$15\u201325'},{n:'An apron that will get destroyed',p:'$10'}], time:'6\u201312 months to throw consistently', budget:'$145\u2013235 for the first proper run' },\n"
    "  gardening:    { gear:[{n:'Hand trowel + cultivator set',p:'$15\u201325'},{n:'Watering can (1.5 gallon)',p:'$12\u201320'},{n:'Starter seed kit (herbs)',p:'$10\u201320'}], time:'One full season to learn your space', budget:'$37\u201365' },\n"
    "  piano:        { gear:[{n:'61-key weighted digital keyboard',p:'$150\u2013300'},{n:'Piano bench',p:'$30\u201360'},{n:'Simply Piano or Playground Sessions app',p:'$9/mo'},{n:'Sustain pedal',p:'$15'}], time:'6 months to play simple songs well', budget:'$195\u2013375' },\n"
    "  woodworking:  { gear:[{n:'Beginner hand tool set (chisel, mallet, hand saw)',p:'$80\u2013150'},{n:'Workbench clamps (4)',p:'$25\u201350'},{n:'Safety gear (glasses, hearing protection)',p:'$20\u201335'}], time:'6 months before you trust your cuts', budget:'$125\u2013235' },\n"
    "};\n"
    "\n"
    "// \u2500\u2500 MONTHLY CHALLENGE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "const MONTHLY_CHALLENGE = {\n"
    "  title:'30-Day Sketch Streak',\n"
    "  subtitle:'One sketch. Every day. No excuses.',\n"
    "  emoji:'\u270f\ufe0f', color:'#F0C93A', textColor:'#0E0D0B',\n"
    "  desc:'Commit to one small sketch per day for 30 days. It doesn\\'t have to be good. It has to be done.',\n"
    "  rules:['Draw anything \u2014 from life, imagination, or reference','No time limit: 2 minutes counts','Share optional, progress private by default','Missed a day? Pick up where you left off'],\n"
    "  milestones:[\n"
    "    {day:7,  badge:'\U0001f331', label:'Seedling',  desc:'First week done. The habit is forming.'},\n"
    "    {day:14, badge:'\U0001f33f', label:'Growing',   desc:'Two weeks in. Your hand is warming up.'},\n"
    "    {day:21, badge:'\U0001f333', label:'Rooted',    desc:'Three weeks. Most people quit here. You didn\\'t.'},\n"
    "    {day:30, badge:'\U0001f3c6', label:'Completed', desc:'30 days. You are a different person than you were.'},\n"
    "  ],\n"
    "};\n"
    "\n"
    "const PROFILE_COLORS = {\n"
    "  creative: { bg: '#F0C93A', text: '#0E0D0B' },"
)

if old1 in content:
    content = content.replace(old1, new1, 1)
    results.append("CHANGE 1: OK")
else:
    results.append("CHANGE 1: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 2: Add Identity Mode to the quiz flow
# ─────────────────────────────────────────────────────────────────
old2 = (
    "function openQuiz() {\n"
    "  qIdx = 0; answers = []; selected = null;\n"
    "  renderQ(0);\n"
    "  document.getElementById('quizModal').classList.add('open');\n"
    "}"
)

new2 = (
    "function openQuiz() {\n"
    "  selectedIdentities = [];\n"
    "  renderIdentityStep();\n"
    "  document.getElementById('quizModal').classList.add('open');\n"
    "}\n"
    "\n"
    "function renderIdentityStep() {\n"
    "  const modal = document.getElementById('quizModal');\n"
    "  modal.innerHTML = `\n"
    "    <button class=\"qbox-x\" onclick=\"closeQuiz()\">✕</button>\n"
    "    <div style=\"font-size:10px;font-weight:800;letter-spacing:3px;color:rgba(255,255,255,.3);margin-bottom:6px\">STEP 1 OF 2</div>\n"
    "    <div style=\"font-size:22px;font-weight:800;color:var(--off);line-height:1.25;margin-bottom:6px\">What do you want to <em style=\"font-style:normal;color:#F0C93A\">feel?</em></div>\n"
    "    <div style=\"font-size:13px;color:rgba(255,255,255,.38);margin-bottom:22px\">Pick 1\u20132 that resonate most. This shapes everything.</div>\n"
    "    <div class=\"identity-grid\" id=\"identityGrid\"></div>\n"
    "    <button class=\"qbox-next\" id=\"identityNextBtn\" style=\"opacity:.3;pointer-events:none\" onclick=\"startPersonalityQuiz()\">Continue \u2192</button>\n"
    "  `;\n"
    "  const grid = document.getElementById('identityGrid');\n"
    "  IDENTITY_STATES.forEach(state => {\n"
    "    const btn = document.createElement('button');\n"
    "    btn.className = 'identity-card';\n"
    "    btn.innerHTML = `<span class=\"ic-emoji\">${state.emoji}</span><div class=\"ic-label\">${state.label}</div><div class=\"ic-desc\">${state.desc}</div>`;\n"
    "    btn.style.borderColor = 'rgba(255,255,255,0.07)';\n"
    "    btn.onclick = () => {\n"
    "      const idx = selectedIdentities.indexOf(state.id);\n"
    "      if (idx > -1) {\n"
    "        selectedIdentities.splice(idx, 1);\n"
    "        btn.classList.remove('sel');\n"
    "        btn.style.borderColor = 'rgba(255,255,255,0.07)';\n"
    "        btn.style.background = 'rgba(255,255,255,0.04)';\n"
    "      } else if (selectedIdentities.length < 2) {\n"
    "        selectedIdentities.push(state.id);\n"
    "        btn.classList.add('sel');\n"
    "        btn.style.borderColor = state.color;\n"
    "        btn.style.background = state.color + '18';\n"
    "      }\n"
    "      const nb = document.getElementById('identityNextBtn');\n"
    "      if (nb) { nb.style.opacity = selectedIdentities.length > 0 ? '1' : '.3'; nb.style.pointerEvents = selectedIdentities.length > 0 ? '' : 'none'; }\n"
    "    };\n"
    "    grid.appendChild(btn);\n"
    "  });\n"
    "}\n"
    "\n"
    "function startPersonalityQuiz() {\n"
    "  qIdx = 0; answers = []; selected = null;\n"
    "  renderQ(0);\n"
    "}"
)

if old2 in content:
    content = content.replace(old2, new2, 1)
    results.append("CHANGE 2: OK")
else:
    results.append("CHANGE 2: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 3: Update renderQ to work inside quiz modal
# ─────────────────────────────────────────────────────────────────
old3 = (
    "function renderQ(i) {\n"
    "  const q = QUESTIONS[i];\n"
    "  document.getElementById('qNum').textContent = String(i + 1).padStart(2, '0') + ' / ' + QUESTIONS.length;\n"
    "  document.getElementById('qFill').style.width = `${((i + 1) / QUESTIONS.length) * 100}%`;\n"
    "  document.getElementById('qText').textContent = q.q;\n"
    "  selected = null;\n"
    "  const nextBtn = document.getElementById('qNext');\n"
    "  nextBtn.classList.remove('ready');"
)

new3 = (
    "function renderQ(i) {\n"
    "  // Re-render quiz UI if identity step replaced it\n"
    "  const modal = document.getElementById('quizModal');\n"
    "  if (!document.getElementById('qNum')) {\n"
    "    modal.innerHTML = `\n"
    "      <button class=\"qbox-x\" onclick=\"closeQuiz()\">✕</button>\n"
    "      <div style=\"font-size:10px;font-weight:800;letter-spacing:3px;color:rgba(255,255,255,.3);margin-bottom:6px\">STEP 2 OF 2 \u2014 Your curiosity type</div>\n"
    "      <div class=\"qbox-prog\"><div class=\"qbox-fill\" id=\"qFill\" style=\"width:0%\"></div></div>\n"
    "      <div class=\"qbox-n\" id=\"qNum\">01</div>\n"
    "      <div class=\"qbox-q\" id=\"qText\"></div>\n"
    "      <div class=\"qbox-opts\" id=\"qOpts\"></div>\n"
    "      <div style=\"display:flex;justify-content:flex-end;margin-top:18px\">\n"
    "        <button class=\"qbox-next\" id=\"qNext\" onclick=\"quizNext()\">Next \u2192</button>\n"
    "      </div>`;\n"
    "  }\n"
    "  const q = QUESTIONS[i];\n"
    "  document.getElementById('qNum').textContent = String(i + 1).padStart(2, '0') + ' / ' + QUESTIONS.length;\n"
    "  document.getElementById('qFill').style.width = `${((i + 1) / QUESTIONS.length) * 100}%`;\n"
    "  document.getElementById('qText').textContent = q.q;\n"
    "  selected = null;\n"
    "  const nextBtn = document.getElementById('qNext');\n"
    "  nextBtn.classList.remove('ready');"
)

if old3 in content:
    content = content.replace(old3, new3, 1)
    results.append("CHANGE 3: OK")
else:
    results.append("CHANGE 3: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 4: Update showResult to use identity state
# ─────────────────────────────────────────────────────────────────
old4 = (
    "function showResult() {\n"
    "  const counts = {};\n"
    "  answers.forEach(a => counts[a] = (counts[a] || 0) + 1);\n"
    "  const topKey = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'creative';\n"
    "  const p = PROFILES_DATA[topKey] || PROFILES_DATA.creative;\n"
    "  const col = PROFILE_COLORS[topKey] || { bg: '#F0C93A', text: '#0E0D0B' };\n"
    "  resultProfile = { key: topKey, p, col };\n"
    "  renderResultStep();\n"
    "  document.getElementById('resultModal').classList.add('open');\n"
    "}"
)

new4 = (
    "function showResult() {\n"
    "  const counts = {};\n"
    "  answers.forEach(a => counts[a] = (counts[a] || 0) + 1);\n"
    "  const topKey = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'creative';\n"
    "  const p = PROFILES_DATA[topKey] || PROFILES_DATA.creative;\n"
    "  const col = PROFILE_COLORS[topKey] || { bg: '#F0C93A', text: '#0E0D0B' };\n"
    "\n"
    "  // Blend identity state hobbies with profile hobbies for smarter recommendations\n"
    "  if (selectedIdentities.length > 0) {\n"
    "    const emotionHobbies = [];\n"
    "    selectedIdentities.forEach(id => { (EMOTION_HOBBY_MAP[id] || []).forEach(h => { if (!emotionHobbies.includes(h)) emotionHobbies.push(h); }); });\n"
    "    // Filter profile hobbies through emotion lens, keeping at least 2\n"
    "    const filtered = p.hobbies.filter(h => emotionHobbies.includes(h));\n"
    "    const blended = filtered.length >= 2 ? filtered : [...new Set([...emotionHobbies.slice(0,2), ...p.hobbies])].slice(0,4);\n"
    "    p._blendedHobbies = blended;\n"
    "  }\n"
    "\n"
    "  resultProfile = { key: topKey, p, col };\n"
    "  renderResultStep();\n"
    "  document.getElementById('resultModal').classList.add('open');\n"
    "}"
)

if old4 in content:
    content = content.replace(old4, new4, 1)
    results.append("CHANGE 4: OK")
else:
    results.append("CHANGE 4: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 5: Add sprint functions before buildExploreGrid
# ─────────────────────────────────────────────────────────────────
old5 = (
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "// HOBBY GRID (EXPLORE)\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "function buildExploreGrid() {"
)

new5 = (
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "// SPRINT SYSTEM\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "let activeSprint = null;\n"
    "let sprintProgress = {}; // { sprintId: { day: N, completed: {1:true, 2:true...} } }\n"
    "\n"
    "function buildSprintsView() {\n"
    "  const el = document.getElementById('view-sprints-content');\n"
    "  if (!el) return;\n"
    "  const prog = sprintProgress;\n"
    "\n"
    "  // Check if user has an active sprint\n"
    "  const active = SPRINTS.find(s => prog[s.id] && !prog[s.id].done);\n"
    "\n"
    "  if (active) {\n"
    "    const p = prog[active.id];\n"
    "    const currentDay = Object.keys(p.completed || {}).length + 1;\n"
    "    const todayMission = active.days[Math.min(currentDay-1, active.days.length-1)];\n"
    "    el.innerHTML = `\n"
    "      <div class=\"sprint-active-header\" style=\"background:${active.color};color:${active.textColor};border-radius:20px;padding:28px;margin-bottom:20px;position:relative;overflow:hidden\">\n"
    "        <div style=\"position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,0.08)\"></div>\n"
    "        <div style=\"font-size:10px;font-weight:800;letter-spacing:3px;opacity:0.6;margin-bottom:4px\">ACTIVE SPRINT \u00b7 DAY ${currentDay} OF 7</div>\n"
    "        <div style=\"font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:1px;margin-bottom:4px\">${active.name}</div>\n"
    "        <div class=\"sprint-day-bar\" style=\"display:flex;gap:5px;margin-top:12px\">\n"
    "          ${active.days.map((d,i) => `<div style=\"flex:1;height:5px;border-radius:3px;background:${p.completed && p.completed[i+1] ? (active.textColor==='white'?'rgba(255,255,255,0.9)':'rgba(0,0,0,0.7)') : (active.textColor==='white'?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.15)')}\"></div>`).join('')}\n"
    "        </div>\n"
    "      </div>\n"
    "      <div style=\"background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:16px\">\n"
    "        <div style=\"font-size:10px;font-weight:800;letter-spacing:2px;color:rgba(255,255,255,0.3);margin-bottom:10px\">TODAY'S MISSION \u00b7 DAY ${currentDay}</div>\n"
    "        <div style=\"font-size:16px;font-weight:800;color:var(--off);margin-bottom:6px\">${todayMission.mission}</div>\n"
    "        <div style=\"font-size:12px;color:rgba(255,255,255,0.35)\">\u23f1 ${todayMission.duration} \u00b7 ${HOBBIES[todayMission.hobby]?.icon} ${todayMission.hobby.toUpperCase()}</div>\n"
    "        <button onclick=\"completSprintDay('${active.id}',${currentDay})\" style=\"width:100%;margin-top:14px;padding:14px;background:${active.color};color:${active.textColor};border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:800;cursor:pointer\">Mark Day ${currentDay} Complete \u2192</button>\n"
    "      </div>\n"
    "      <button onclick=\"activeSprint=null;buildSprintsView()\" style=\"width:100%;padding:11px;background:none;border:1px solid var(--border);border-radius:12px;color:rgba(255,255,255,0.3);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer\">\u2190 Choose a different sprint</button>`;\n"
    "    return;\n"
    "  }\n"
    "\n"
    "  el.innerHTML = `\n"
    "    <div style=\"font-size:10px;font-weight:800;letter-spacing:3px;color:rgba(255,255,255,.25);margin-bottom:6px\">CURATED TRACKS</div>\n"
    "    <div style=\"font-family:'Bebas Neue',sans-serif;font-size:42px;letter-spacing:1px;margin-bottom:4px\">HOBBY SPRINTS</div>\n"
    "    <div style=\"font-size:13px;color:rgba(255,255,255,.35);margin-bottom:24px\">7-day guided tracks. Daily 10\u201320 min missions. Real progress, fast.</div>\n"
    "    ${SPRINTS.map(s => {\n"
    "      const p = prog[s.id];\n"
    "      const daysComplete = p ? Object.keys(p.completed || {}).length : 0;\n"
    "      const done = p && p.done;\n"
    "      return `<div class=\"sprint-card\" onclick=\"joinSprint('${s.id}')\" style=\"background:${s.color};color:${s.textColor}\">\n"
    "        <div style=\"position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.07)\"></div>\n"
    "        <div style=\"font-size:32px;margin-bottom:8px\">${s.emoji}</div>\n"
    "        <div style=\"font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:1px;margin-bottom:4px\">${s.name}</div>\n"
    "        <div style=\"font-size:12px;opacity:0.7;margin-bottom:12px;line-height:1.4\">${s.desc}</div>\n"
    "        <div style=\"display:flex;gap:5px;margin-bottom:12px\">\n"
    "          ${s.days.map((d,i) => `<div style=\"flex:1;height:4px;border-radius:2px;background:${daysComplete > i ? (s.textColor==='white'?'rgba(255,255,255,0.9)':'rgba(0,0,0,0.6)') : (s.textColor==='white'?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.12)')}\"></div>`).join('')}\n"
    "        </div>\n"
    "        <div style=\"font-size:11px;font-weight:800;opacity:0.7\">${done ? '\u2713 COMPLETED \u00b7 ' + s.badge : daysComplete > 0 ? 'Day ' + daysComplete + ' of 7 done' : '7 days \u00b7 ' + s.hobbies.map(h=>HOBBIES[h]?.icon||'').join(' ')}</div>\n"
    "      </div>`;\n"
    "    }).join('')}`;\n"
    "}\n"
    "\n"
    "function joinSprint(id) {\n"
    "  const sprint = SPRINTS.find(s => s.id === id);\n"
    "  if (!sprint) return;\n"
    "  if (!sprintProgress[id]) sprintProgress[id] = { completed: {} };\n"
    "  if (currentUser) DB.saveProgress(currentUser.email + '_sprints', sprintProgress);\n"
    "  buildSprintsView();\n"
    "  showToast('Sprint started! \U0001f680 Day 1 mission is ready.');\n"
    "}\n"
    "\n"
    "function completSprintDay(sprintId, day) {\n"
    "  if (!sprintProgress[sprintId]) sprintProgress[sprintId] = { completed: {} };\n"
    "  sprintProgress[sprintId].completed[day] = true;\n"
    "  const sprint = SPRINTS.find(s => s.id === sprintId);\n"
    "  if (sprint && Object.keys(sprintProgress[sprintId].completed).length >= sprint.days.length) {\n"
    "    sprintProgress[sprintId].done = true;\n"
    "    showSprintCompletion(sprint);\n"
    "  } else {\n"
    "    if (currentUser) DB.saveProgress(currentUser.email + '_sprints', sprintProgress);\n"
    "    buildSprintsView();\n"
    "    showToast('Day ' + day + ' done! \U0001f525 Keep it up.');\n"
    "  }\n"
    "}\n"
    "\n"
    "function showSprintCompletion(sprint) {\n"
    "  if (currentUser) DB.saveProgress(currentUser.email + '_sprints', sprintProgress);\n"
    "  const el = document.getElementById('view-sprints-content');\n"
    "  if (!el) return;\n"
    "  el.innerHTML = `\n"
    "    <div style=\"text-align:center;padding:40px 20px\">\n"
    "      <div style=\"font-size:64px;margin-bottom:16px\">${sprint.emoji}</div>\n"
    "      <div style=\"font-family:'Bebas Neue',sans-serif;font-size:48px;letter-spacing:1px;margin-bottom:8px\">${sprint.badge}</div>\n"
    "      <div style=\"font-size:14px;color:rgba(255,255,255,.55);line-height:1.7;margin-bottom:24px\">${sprint.summary}</div>\n"
    "      <div style=\"background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:16px;padding:20px;margin-bottom:16px;text-align:left\">\n"
    "        <div style=\"font-size:10px;font-weight:800;letter-spacing:2px;color:rgba(255,255,255,.3);margin-bottom:8px\">DEEP DIVE RECOMMENDATION</div>\n"
    "        <div style=\"font-size:13px;color:rgba(255,255,255,.6);line-height:1.6\">${sprint.deepDive}</div>\n"
    "      </div>\n"
    "      <button onclick=\"buildSprintsView()\" style=\"width:100%;padding:14px;background:${sprint.color};color:${sprint.textColor};border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:800;cursor:pointer;margin-bottom:8px\">Try Another Sprint \u2192</button>\n"
    "      <button onclick=\"generateShareCard('sprint','${sprint.id}')\" style=\"width:100%;padding:12px;background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:12px;color:rgba(255,255,255,0.5);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer\">\U0001f4e4 Share Your Badge</button>\n"
    "    </div>`;\n"
    "}\n"
    "\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "// MONTHLY CHALLENGE\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "let challengeProgress = 0; // days completed\n"
    "\n"
    "function buildChallengeView() {\n"
    "  const el = document.getElementById('view-challenge-content');\n"
    "  if (!el) return;\n"
    "  const ch = MONTHLY_CHALLENGE;\n"
    "  const pct = Math.round((challengeProgress / 30) * 100);\n"
    "  const milestone = [...ch.milestones].reverse().find(m => challengeProgress >= m.day) || null;\n"
    "\n"
    "  el.innerHTML = `\n"
    "    <div style=\"background:${ch.color};color:${ch.textColor};border-radius:20px;padding:28px;margin-bottom:20px;position:relative;overflow:hidden\">\n"
    "      <div style=\"position:absolute;top:-50px;right:-50px;width:180px;height:180px;border-radius:50%;background:rgba(0,0,0,0.06)\"></div>\n"
    "      <div style=\"font-size:10px;font-weight:800;letter-spacing:3px;opacity:0.5;margin-bottom:4px\">THIS MONTH'S CHALLENGE</div>\n"
    "      <div style=\"font-size:38px;margin-bottom:4px\">${ch.emoji}</div>\n"
    "      <div style=\"font-family:'Bebas Neue',sans-serif;font-size:38px;letter-spacing:1px;line-height:1;margin-bottom:8px\">${ch.title}</div>\n"
    "      <div style=\"font-size:13px;opacity:0.7;margin-bottom:16px\">${ch.subtitle}</div>\n"
    "      <div style=\"background:rgba(0,0,0,0.12);border-radius:8px;overflow:hidden;height:8px;margin-bottom:6px\">\n"
    "        <div style=\"height:100%;background:${ch.textColor==='white'?'rgba(255,255,255,0.8)':'rgba(0,0,0,0.5)'};border-radius:8px;width:${pct}%;transition:width 0.5s ease\"></div>\n"
    "      </div>\n"
    "      <div style=\"font-size:11px;font-weight:800;opacity:0.6\">${challengeProgress} / 30 days \u00b7 ${pct}% complete</div>\n"
    "    </div>\n"
    "\n"
    "    ${milestone ? `<div style=\"background:rgba(240,201,58,0.1);border:1px solid rgba(240,201,58,0.25);border-radius:14px;padding:16px;margin-bottom:16px;display:flex;align-items:center;gap:12px\">\n"
    "      <div style=\"font-size:32px\">${milestone.badge}</div>\n"
    "      <div><div style=\"font-size:13px;font-weight:800;color:#F0C93A\">${milestone.label} Badge Unlocked!</div><div style=\"font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px\">${milestone.desc}</div></div>\n"
    "    </div>` : ''}\n"
    "\n"
    "    <div style=\"background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:16px;padding:20px;margin-bottom:16px\">\n"
    "      <div style=\"font-size:10px;font-weight:800;letter-spacing:2px;color:rgba(255,255,255,0.3);margin-bottom:12px\">THE RULES</div>\n"
    "      ${ch.rules.map(r => `<div style=\"display:flex;align-items:flex-start;gap:8px;margin-bottom:8px\"><div style=\"width:5px;height:5px;border-radius:50%;background:#F0C93A;flex-shrink:0;margin-top:5px\"></div><div style=\"font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5\">${r}</div></div>`).join('')}\n"
    "    </div>\n"
    "\n"
    "    <div style=\"background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:16px;padding:20px;margin-bottom:16px\">\n"
    "      <div style=\"font-size:10px;font-weight:800;letter-spacing:2px;color:rgba(255,255,255,0.3);margin-bottom:12px\">MILESTONES</div>\n"
    "      ${ch.milestones.map(m => `<div style=\"display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05)\">\n"
    "        <div style=\"font-size:22px\">${m.badge}</div>\n"
    "        <div style=\"flex:1\"><div style=\"font-size:12px;font-weight:800;color:${challengeProgress>=m.day?'var(--off)':'rgba(255,255,255,0.3)'}\">${m.label} \u2014 Day ${m.day}</div><div style=\"font-size:11px;color:rgba(255,255,255,0.28);margin-top:1px\">${m.desc}</div></div>\n"
    "        ${challengeProgress>=m.day ? '<div style=\"font-size:14px;color:#B8D96E;font-weight:800\">\u2713</div>' : ''}\n"
    "      </div>`).join('')}\n"
    "    </div>\n"
    "\n"
    "    <button onclick=\"logChallengeDay()\" style=\"width:100%;padding:16px;background:${ch.color};color:${ch.textColor};border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:800;cursor:pointer;margin-bottom:8px\">\n"
    "      ${challengeProgress >= 30 ? '\U0001f3c6 Challenge Complete!' : '\u2713 Log Today\\'s ' + ch.emoji + ' (' + (challengeProgress+1) + '/30)'}\n"
    "    </button>\n"
    "    ${challengeProgress > 0 ? `<button onclick=\"generateShareCard('challenge','')\" style=\"width:100%;padding:12px;background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:12px;color:rgba(255,255,255,0.5);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer\">\U0001f4e4 Share My Progress</button>` : ''}``;\n"
    + "}\n"
    "\n"
    "function logChallengeDay() {\n"
    "  if (challengeProgress >= 30) return;\n"
    "  challengeProgress++;\n"
    "  if (currentUser) {\n"
    "    const d = DB._all()[currentUser.email.toLowerCase()];\n"
    "    if (d) { d.challengeProgress = challengeProgress; DB._save(DB._all()); }\n"
    "  }\n"
    "  buildChallengeView();\n"
    "  showToast('Day ' + challengeProgress + ' logged! \U0001f525');\n"
    "}\n"
    "\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "// SHARE CARDS (Canvas)\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "function generateShareCard(type, id) {\n"
    "  const modal = document.getElementById('shareModal');\n"
    "  if (!modal) return;\n"
    "  modal.classList.add('open');\n"
    "\n"
    "  const canvas = document.getElementById('shareCanvas');\n"
    "  const ctx = canvas.getContext('2d');\n"
    "  canvas.width = 1080; canvas.height = 1080;\n"
    "\n"
    "  let bgColor = '#0E0D0B', accentColor = '#F0C93A', titleText = '', subtitleText = '', emojiText = '';\n"
    "\n"
    "  if (type === 'challenge') {\n"
    "    const ch = MONTHLY_CHALLENGE;\n"
    "    bgColor = '#0E0D0B'; accentColor = ch.color;\n"
    "    emojiText = ch.emoji; titleText = ch.title.toUpperCase();\n"
    "    subtitleText = challengeProgress + ' / 30 DAYS COMPLETE';\n"
    "  } else if (type === 'sprint') {\n"
    "    const sprint = SPRINTS.find(s => s.id === id);\n"
    "    if (sprint) { bgColor = sprint.color; accentColor = sprint.textColor === 'white' ? 'rgba(255,255,255,0.9)' : '#0E0D0B'; emojiText = sprint.emoji; titleText = sprint.name.toUpperCase(); subtitleText = sprint.badge; }\n"
    "  } else if (type === 'hobby') {\n"
    "    const h = HOBBIES[id];\n"
    "    if (h) { bgColor = h.color; accentColor = h.textColor === 'white' ? 'rgba(255,255,255,0.85)' : '#0E0D0B'; emojiText = h.icon; titleText = id.toUpperCase(); subtitleText = 'CHAPTER COMPLETE'; }\n"
    "  }\n"
    "\n"
    "  // Background\n"
    "  ctx.fillStyle = bgColor;\n"
    "  ctx.fillRect(0, 0, 1080, 1080);\n"
    "\n"
    "  // Decorative circle\n"
    "  ctx.beginPath(); ctx.arc(950, 130, 220, 0, Math.PI*2);\n"
    "  ctx.fillStyle = accentColor === '#0E0D0B' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)';\n"
    "  ctx.fill();\n"
    "\n"
    "  // Emoji\n"
    "  ctx.font = '160px serif'; ctx.textAlign = 'center';\n"
    "  ctx.fillText(emojiText, 540, 420);\n"
    "\n"
    "  // Title\n"
    "  ctx.fillStyle = accentColor;\n"
    "  ctx.font = 'bold 72px Arial, sans-serif';\n"
    "  ctx.fillText(titleText, 540, 550);\n"
    "\n"
    "  // Subtitle\n"
    "  ctx.fillStyle = accentColor; ctx.globalAlpha = 0.6;\n"
    "  ctx.font = '36px Arial, sans-serif';\n"
    "  ctx.fillText(subtitleText, 540, 620);\n"
    "  ctx.globalAlpha = 1;\n"
    "\n"
    "  // SHRUG branding\n"
    "  ctx.fillStyle = accentColor; ctx.globalAlpha = 0.4;\n"
    "  ctx.font = 'bold 28px Arial, sans-serif';\n"
    "  ctx.fillText('SHRUG.APP', 540, 980);\n"
    "  ctx.globalAlpha = 1;\n"
    "\n"
    "  // Show preview\n"
    "  const preview = document.getElementById('sharePreview');\n"
    "  if (preview) { preview.src = canvas.toDataURL(); preview.style.display = 'block'; }\n"
    "}\n"
    "\n"
    "function downloadShareCard() {\n"
    "  const canvas = document.getElementById('shareCanvas');\n"
    "  const a = document.createElement('a');\n"
    "  a.download = 'shrug-share.png'; a.href = canvas.toDataURL(); a.click();\n"
    "}\n"
    "\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "// HOBBY GRID (EXPLORE)\n"
    "// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n"
    "function buildExploreGrid() {"
)

if old5 in content:
    content = content.replace(old5, new5, 1)
    results.append("CHANGE 5: OK")
else:
    results.append("CHANGE 5: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 6: Add radar chart helpers before buildProfileViewApp
# ─────────────────────────────────────────────────────────────────
old6 = "function buildProfileViewApp(user) {"

new6 = (
    "// \u2500\u2500 RADAR CHART (SVG) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "function renderRadarChart(containerId, traitScores) {\n"
    "  const el = document.getElementById(containerId);\n"
    "  if (!el) return;\n"
    "  const labels = ['Creative','Analytical','Physical','Expressive','Social'];\n"
    "  const keys   = ['creative','analytical','physical','expressive','social'];\n"
    "  const size = 200, cx = size/2, cy = size/2, r = 75;\n"
    "  const n = labels.length;\n"
    "  const pts = (vals, scale) => vals.map((v,i) => {\n"
    "    const angle = (Math.PI * 2 * i / n) - Math.PI/2;\n"
    "    return [cx + Math.cos(angle) * r * scale(v), cy + Math.sin(angle) * r * scale(v)];\n"
    "  });\n"
    "  const polyPts = arr => arr.map(p => p.join(',')).join(' ');\n"
    "  const gridLevels = [0.25, 0.5, 0.75, 1.0];\n"
    "  const axisArr = labels.map((_,i) => {\n"
    "    const angle = (Math.PI * 2 * i / n) - Math.PI/2;\n"
    "    return `<line x1=\"${cx}\" y1=\"${cy}\" x2=\"${cx + Math.cos(angle)*r}\" y2=\"${cy + Math.sin(angle)*r}\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/>`;\n"
    "  });\n"
    "  const gridPolys = gridLevels.map(level => {\n"
    "    const gpts = pts(labels.map(()=>10), ()=>level);\n"
    "    return `<polygon points=\"${polyPts(gpts)}\" fill=\"none\" stroke=\"rgba(255,255,255,0.07)\" stroke-width=\"1\"/>`;\n"
    "  });\n"
    "  const dataVals = keys.map(k => traitScores[k] || 0);\n"
    "  const dataPts = pts(dataVals, v => v/10);\n"
    "  const colors = ['#F0C93A','#ACD8F0','#E8453C','#B8D96E','#6B4EFF'];\n"
    "  const labelNodes = labels.map((l,i) => {\n"
    "    const angle = (Math.PI * 2 * i / n) - Math.PI/2;\n"
    "    const lx = cx + Math.cos(angle) * (r + 20);\n"
    "    const ly = cy + Math.sin(angle) * (r + 20);\n"
    "    return `<text x=\"${lx}\" y=\"${ly+4}\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"700\" fill=\"${colors[i]}\" font-family=\"DM Sans,sans-serif\" letter-spacing=\"0.5\">${l.toUpperCase()}</text>`;\n"
    "  });\n"
    "  const dotNodes = dataPts.map((p,i) => `<circle cx=\"${p[0]}\" cy=\"${p[1]}\" r=\"4\" fill=\"${colors[i]}\" opacity=\"0.9\"/>`);\n"
    "  el.innerHTML = `<svg width=\"${size}\" height=\"${size}\" viewBox=\"0 0 ${size} ${size}\" style=\"overflow:visible\">\n"
    "    ${gridPolys.join('')}${axisArr.join('')}\n"
    "    <polygon points=\"${polyPts(dataPts)}\" fill=\"rgba(240,201,58,0.12)\" stroke=\"#F0C93A\" stroke-width=\"1.5\"/>\n"
    "    ${dotNodes.join('')}${labelNodes.join('')}\n"
    "  </svg>`;\n"
    "}\n"
    "\n"
    "function getUserTraits(user) {\n"
    "  const completed = window.completedChapters || {};\n"
    "  const totals = {creative:0,analytical:0,physical:0,expressive:0,social:0};\n"
    "  let count = 0;\n"
    "  Object.keys(completed).forEach(key => {\n"
    "    const t = HOBBY_TRAITS[key];\n"
    "    if (t) { Object.keys(totals).forEach(k => totals[k] += t[k]); count++; }\n"
    "  });\n"
    "  if (count === 0 && user && user.hobbies) {\n"
    "    user.hobbies.forEach(key => { const t = HOBBY_TRAITS[key]; if (t) { Object.keys(totals).forEach(k => totals[k] += t[k]); count++; } });\n"
    "  }\n"
    "  if (count === 0) return {creative:5,analytical:5,physical:5,expressive:5,social:5};\n"
    "  return Object.fromEntries(Object.entries(totals).map(([k,v]) => [k, Math.round(v/count)]));\n"
    "}\n"
    "\n"
    "function buildProfileViewApp(user) {"
)

if old6 in content:
    content = content.replace(old6, new6, 1)
    results.append("CHANGE 6: OK")
else:
    results.append("CHANGE 6: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 7: Update buildProfileViewApp body
# Extract the exact old text from original file
# ─────────────────────────────────────────────────────────────────
# Read original file again for exact matching
with open(input_path, 'r', encoding='utf-8') as f:
    orig = f.read()

idx = orig.find('function buildProfileViewApp(user) {')
end = orig.find('\n}', idx) + 2
old7_exact = orig[idx:end]

new7 = (
    "function buildProfileViewApp(user) {\n"
    "  var p   = PROFILES_DATA[user.profile];\n"
    "  var col = PROFILE_COLORS[user.profile] || { bg:'#F0C93A', text:'#0E0D0B' };\n"
    "  if (!p) return;\n"
    "  var banner = document.getElementById('webProfBanner');\n"
    "  if (banner) { banner.style.background = col.bg; banner.style.color = col.text; }\n"
    "  var typeEl = document.getElementById('webProfTypeBig');\n"
    "  if (typeEl) typeEl.textContent = p.type.replace('\\n',' ');\n"
    "  var emojiEl = document.getElementById('webProfEmoji');\n"
    "  if (emojiEl) emojiEl.textContent = p.emoji;\n"
    "  var descEl = document.getElementById('webProfDesc');\n"
    "  if (descEl) descEl.innerHTML = p.desc;\n"
    "\n"
    "  // Identity state chips\n"
    "  var identEl = document.getElementById('webProfIdentities');\n"
    "  if (identEl && selectedIdentities.length > 0) {\n"
    "    identEl.innerHTML = '<div style=\"font-size:10px;font-weight:800;letter-spacing:2px;color:rgba(255,255,255,.3);margin-bottom:8px\">YOUR IDENTITY</div>'\n"
    "      + selectedIdentities.map(function(id) {\n"
    "          var s = IDENTITY_STATES.find(function(x){return x.id===id;});\n"
    "          return s ? '<span style=\"display:inline-flex;align-items:center;gap:6px;background:'+s.color+'18;border:1px solid '+s.color+'44;border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;color:'+s.color+';margin-right:6px;margin-bottom:6px\">'+s.emoji+' '+s.label+'</span>' : '';\n"
    "        }).join('');\n"
    "    identEl.style.marginBottom = '16px';\n"
    "  }\n"
    "\n"
    "  // Radar chart\n"
    "  const traits = getUserTraits(user);\n"
    "  setTimeout(function() { renderRadarChart('webProfRadar', traits); }, 100);\n"
    "\n"
    "  var matchesEl = document.getElementById('webProfMatches');\n"
    "  if (matchesEl) matchesEl.innerHTML = p.hobbies.map(function(h) {\n"
    "    var hd = HOBBIES[h];\n"
    "    if (!hd) return '';\n"
    "    return '<div class=\"rec-card\" style=\"background:'+hd.color+'\" onclick=\"openHobby(\\''+h+'\\')\">'\n"
    "      + '<div class=\"rec-icon\">'+hd.icon+'</div>'\n"
    "      + '<div style=\"flex:1\"><div class=\"rec-name\">'+h.toUpperCase()+'</div>'\n"
    "      + '<div class=\"rec-sub\" style=\"color:rgba(0,0,0,.4)\">'+hd.tagline+'</div></div>'\n"
    "      + '<div class=\"rec-arr\">\u203a</div></div>';\n"
    "  }).join('');\n"
    "}"
)

if old7_exact in content:
    content = content.replace(old7_exact, new7, 1)
    results.append("CHANGE 7: OK")
else:
    results.append("CHANGE 7: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 8: Update openHobby — add friction and starter kit sections
# ─────────────────────────────────────────────────────────────────
# Detect the exact old8 text from shrug-11
idx8 = orig.find("    // Chapter 1 card\n    + '<div class=\"hp-section\">'\n    + '<div class=\"hp-section-label\">Your first challenge</div>'")
if idx8 >= 0:
    old8_exact = orig[idx8:idx8+len("    // Chapter 1 card\n    + '<div class=\"hp-section\">'\n    + '<div class=\"hp-section-label\">Your first challenge</div>'")]
else:
    old8_exact = None

if old8_exact and old8_exact in content:
    new8 = (
        "    // Friction Reality\n"
        "    + (HOBBY_FRICTION[key] ? '<div class=\"hp-section\"><div class=\"hp-section-label\">What nobody tells you</div>'\n"
        "      + '<div class=\"friction-list\">' + HOBBY_FRICTION[key].map(function(f){ return '<div class=\"friction-item\"><span class=\"friction-dot\">\u25cf</span><span>'+f+'</span></div>'; }).join('') + '</div></div>' : '')\n"
        "\n"
        "    // Starter Kit (only show after 3+ completions)\n"
        "    + (function(){\n"
        "        var cc = window.completedChapters && window.completedChapters[key] ? Object.keys(window.completedChapters[key]).length : 0;\n"
        "        var kit = HOBBY_STARTER_KIT[key];\n"
        "        if (cc >= 1 && kit) {\n"
        "          return '<div class=\"hp-section\"><div class=\"hp-section-label\" style=\"display:flex;align-items:center;gap:8px\">Starter Kit <span style=\"background:rgba(240,201,58,.12);color:#F0C93A;font-size:9px;padding:3px 8px;border-radius:100px;font-weight:800;letter-spacing:1px\">GEAR GUIDE</span></div>'\n"
        "            + '<div class=\"starter-kit-grid\">' + kit.gear.map(function(g){ return '<div class=\"sk-item\"><div class=\"sk-name\">'+g.n+'</div><div class=\"sk-price\">'+g.p+'</div></div>'; }).join('') + '</div>'\n"
        "            + '<div class=\"sk-meta\"><div class=\"sk-meta-item\"><span class=\"sk-meta-label\">\u23f1 Time to feel it</span><span>'+kit.time+'</span></div><div class=\"sk-meta-item\"><span class=\"sk-meta-label\">\U0001f4b0 Budget</span><span>'+kit.budget+'</span></div></div>'\n"
        "            + '</div>';\n"
        "        }\n"
        "        return '';\n"
        "      })()\n"
        "\n"
        "    // Chapter 1 card\n"
        "    + '<div class=\"hp-section\">'\n"
        "    + '<div class=\"hp-section-label\">Your first challenge</div>'"
    )
    content = content.replace(old8_exact, new8, 1)
    results.append("CHANGE 8: OK")
else:
    # Try a slightly different approach - search in content directly
    search8 = "    // Chapter 1 card\n    + '<div class=\"hp-section\">'\n    + '<div class=\"hp-section-label\">Your first challenge</div>'"
    if search8 in content:
        new8 = (
            "    // Friction Reality\n"
            "    + (HOBBY_FRICTION[key] ? '<div class=\"hp-section\"><div class=\"hp-section-label\">What nobody tells you</div>'\n"
            "      + '<div class=\"friction-list\">' + HOBBY_FRICTION[key].map(function(f){ return '<div class=\"friction-item\"><span class=\"friction-dot\">\u25cf</span><span>'+f+'</span></div>'; }).join('') + '</div></div>' : '')\n"
            "\n"
            "    // Starter Kit (only show after 3+ completions)\n"
            "    + (function(){\n"
            "        var cc = window.completedChapters && window.completedChapters[key] ? Object.keys(window.completedChapters[key]).length : 0;\n"
            "        var kit = HOBBY_STARTER_KIT[key];\n"
            "        if (cc >= 1 && kit) {\n"
            "          return '<div class=\"hp-section\"><div class=\"hp-section-label\" style=\"display:flex;align-items:center;gap:8px\">Starter Kit <span style=\"background:rgba(240,201,58,.12);color:#F0C93A;font-size:9px;padding:3px 8px;border-radius:100px;font-weight:800;letter-spacing:1px\">GEAR GUIDE</span></div>'\n"
            "            + '<div class=\"starter-kit-grid\">' + kit.gear.map(function(g){ return '<div class=\"sk-item\"><div class=\"sk-name\">'+g.n+'</div><div class=\"sk-price\">'+g.p+'</div></div>'; }).join('') + '</div>'\n"
            "            + '<div class=\"sk-meta\"><div class=\"sk-meta-item\"><span class=\"sk-meta-label\">\u23f1 Time to feel it</span><span>'+kit.time+'</span></div><div class=\"sk-meta-item\"><span class=\"sk-meta-label\">\U0001f4b0 Budget</span><span>'+kit.budget+'</span></div></div>'\n"
            "            + '</div>';\n"
            "        }\n"
            "        return '';\n"
            "      })()\n"
            "\n"
            "    // Chapter 1 card\n"
            "    + '<div class=\"hp-section\">'\n"
            "    + '<div class=\"hp-section-label\">Your first challenge</div>'"
        )
        content = content.replace(search8, new8, 1)
        results.append("CHANGE 8: OK")
    else:
        results.append("CHANGE 8: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 9: Add share button after chapter completion
# ─────────────────────────────────────────────────────────────────
old9 = "    document.getElementById('hp-chapter-expanded').appendChild(fbEl);"

new9 = (
    "    document.getElementById('hp-chapter-expanded').appendChild(fbEl);\n"
    "\n"
    "    // Share button\n"
    "    const shareBtn = document.createElement('button');\n"
    "    shareBtn.style.cssText = 'width:100%;margin-top:8px;padding:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;color:rgba(255,255,255,0.4);font-family:\\'DM Sans\\',sans-serif;font-size:12px;font-weight:700;cursor:pointer';\n"
    "    shareBtn.textContent = '\U0001f4e4 Share Your Progress';\n"
    "    shareBtn.onclick = function() { generateShareCard('hobby', key); };\n"
    "    document.getElementById('hp-chapter-expanded').appendChild(shareBtn);"
)

if old9 in content:
    content = content.replace(old9, new9, 1)
    results.append("CHANGE 9: OK")
else:
    results.append("CHANGE 9: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 10: Add new CSS before </style>
# ─────────────────────────────────────────────────────────────────
old10 = "</style>"

new10 = (
    "/* \u2500\u2500 IDENTITY MODE \u2500\u2500 */\n"
    ".identity-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:20px}\n"
    ".identity-card{background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.07);border-radius:14px;padding:16px;cursor:pointer;text-align:left;transition:all 0.18s;font-family:'DM Sans',sans-serif}\n"
    ".identity-card:hover{background:rgba(255,255,255,0.08);transform:translateY(-2px)}\n"
    ".identity-card.sel{transform:translateY(-2px)}\n"
    ".ic-emoji{font-size:24px;display:block;margin-bottom:8px}\n"
    ".ic-label{font-size:14px;font-weight:800;color:var(--off);margin-bottom:3px}\n"
    ".ic-desc{font-size:11px;color:rgba(255,255,255,0.38);line-height:1.4}\n"
    "\n"
    "/* \u2500\u2500 SPRINT CARDS \u2500\u2500 */\n"
    ".sprint-card{border-radius:20px;padding:24px;margin-bottom:12px;cursor:pointer;position:relative;overflow:hidden;transition:transform 0.2s ease}\n"
    ".sprint-card:hover{transform:translateY(-3px)}\n"
    ".sprint-active-header{cursor:default}\n"
    "\n"
    "/* \u2500\u2500 FRICTION REALITY \u2500\u2500 */\n"
    ".friction-list{display:flex;flex-direction:column;gap:8px}\n"
    ".friction-item{display:flex;align-items:flex-start;gap:10px;background:rgba(232,69,60,0.06);border:1px solid rgba(232,69,60,0.12);border-radius:10px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,0.55);line-height:1.5}\n"
    ".friction-dot{color:#E8453C;font-size:8px;flex-shrink:0;margin-top:3px}\n"
    "\n"
    "/* \u2500\u2500 STARTER KIT \u2500\u2500 */\n"
    ".starter-kit-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}\n"
    ".sk-item{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px}\n"
    ".sk-name{font-size:11px;font-weight:700;color:rgba(255,255,255,0.65);margin-bottom:4px;line-height:1.3}\n"
    ".sk-price{font-size:13px;font-weight:800;color:#F0C93A}\n"
    ".sk-meta{display:flex;flex-direction:column;gap:6px}\n"
    ".sk-meta-item{display:flex;justify-content:space-between;align-items:center;font-size:11px;color:rgba(255,255,255,0.45);padding:8px 12px;background:rgba(255,255,255,0.04);border-radius:8px}\n"
    ".sk-meta-label{font-weight:700;color:rgba(255,255,255,0.3)}\n"
    "\n"
    "/* \u2500\u2500 RADAR CHART \u2500\u2500 */\n"
    ".radar-wrap{display:flex;flex-direction:column;align-items:center;gap:16px}\n"
    ".radar-container{background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:16px;padding:24px;display:flex;align-items:center;justify-content:center}\n"
    "\n"
    "/* \u2500\u2500 SHARE MODAL \u2500\u2500 */\n"
    ".share-modal-bg{position:fixed;inset:0;background:rgba(0,0,0,0.88);backdrop-filter:blur(10px);z-index:600;display:none;align-items:center;justify-content:center;padding:24px}\n"
    ".share-modal-bg.open{display:flex;animation:fadeIn 0.25s ease}\n"
    ".share-modal-box{background:#1a1917;border:1px solid rgba(255,255,255,0.1);border-radius:22px;width:100%;max-width:440px;padding:32px;position:relative;text-align:center}\n"
    ".share-preview-img{width:100%;border-radius:14px;margin-bottom:20px;display:none}\n"
    "\n"
    "/* \u2500\u2500 MONTHLY CHALLENGE \u2500\u2500 */\n"
    ".challenge-progress-ring{stroke-dasharray:251;stroke-dashoffset:calc(251 - 251 * var(--pct));transition:stroke-dashoffset 1s ease}\n"
    "\n"
    "/* \u2500\u2500 PROFILE IDENTITIES \u2500\u2500 */\n"
    "#webProfIdentities{min-height:0}\n"
    "#webProfRadar{display:flex;align-items:center;justify-content:center;padding:20px 0}\n"
    "</style>"
)

if old10 in content:
    content = content.replace(old10, new10, 1)
    results.append("CHANGE 10: OK")
else:
    results.append("CHANGE 10: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 11: Add sidebar nav items for Sprint and Challenge
# ─────────────────────────────────────────────────────────────────
# Find exact text in original
idx11 = orig.find("    <button class=\"sb-item\" id=\"nav-memoir\" onclick=\"showView('memoir');buildMemoirView()\">")
if idx11 >= 0:
    old11_exact = orig[idx11:idx11+len("    <button class=\"sb-item\" id=\"nav-memoir\" onclick=\"showView('memoir');buildMemoirView()\">")]
else:
    old11_exact = None

if old11_exact and old11_exact in content:
    new11 = (
        "    <button class=\"sb-item\" id=\"nav-memoir\" onclick=\"showView('memoir');buildMemoirView()\">\n"
        "      <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>\n"
        "      Memoir\n"
        "    </button>\n"
        "    <button class=\"sb-item\" id=\"nav-sprints\" onclick=\"showView('sprints');buildSprintsView()\">\n"
        "      <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>\n"
        "      Sprints\n"
        "    </button>\n"
        "    <button class=\"sb-item\" id=\"nav-challenge\" onclick=\"showView('challenge');buildChallengeView()\">\n"
        "      <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><circle cx=\"12\" cy=\"8\" r=\"6\"/><path d=\"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11\"/></svg>\n"
        "      Challenge\n"
        "    </button>"
    )
    content = content.replace(old11_exact, new11, 1)
    results.append("CHANGE 11: OK")
else:
    # Try finding in current content
    search11 = "    <button class=\"sb-item\" id=\"nav-memoir\" onclick=\"showView('memoir');buildMemoirView()\">"
    if search11 in content:
        new11 = (
            "    <button class=\"sb-item\" id=\"nav-memoir\" onclick=\"showView('memoir');buildMemoirView()\">\n"
            "      <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>\n"
            "      Memoir\n"
            "    </button>\n"
            "    <button class=\"sb-item\" id=\"nav-sprints\" onclick=\"showView('sprints');buildSprintsView()\">\n"
            "      <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>\n"
            "      Sprints\n"
            "    </button>\n"
            "    <button class=\"sb-item\" id=\"nav-challenge\" onclick=\"showView('challenge');buildChallengeView()\">\n"
            "      <svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><circle cx=\"12\" cy=\"8\" r=\"6\"/><path d=\"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11\"/></svg>\n"
            "      Challenge\n"
            "    </button>"
        )
        content = content.replace(search11, new11, 1)
        results.append("CHANGE 11: OK")
    else:
        results.append("CHANGE 11: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 12: Add new HTML views before </main>
# ─────────────────────────────────────────────────────────────────
old12 = "</div>\n\n</main><!-- /main -->"

new12 = (
    "</div>\n\n"
    "<!-- SPRINTS -->\n"
    "<div class=\"view\" id=\"view-sprints\">\n"
    "  <div class=\"section\">\n"
    "    <div id=\"view-sprints-content\"></div>\n"
    "  </div>\n"
    "</div>\n\n"
    "<!-- CHALLENGE -->\n"
    "<div class=\"view\" id=\"view-challenge\">\n"
    "  <div class=\"section\">\n"
    "    <div id=\"view-challenge-content\"></div>\n"
    "  </div>\n"
    "</div>\n\n"
    "</main><!-- /main -->"
)

if old12 in content:
    content = content.replace(old12, new12, 1)
    results.append("CHANGE 12: OK")
else:
    results.append("CHANGE 12: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 13: Update profile view HTML
# ─────────────────────────────────────────────────────────────────
# Find exact text from original
idx13 = orig.find('    <div class="prof-grid">')
end13 = orig.find('</div>\n    </div>', idx13)
# Actually look for the full block
search13_start = '    <div class="prof-grid">'
# Find it properly
block13_search = (
    '    <div class="prof-grid">\n'
    '      <div class="prof-card">\n'
    '        <div class="prof-eyebrow">Profile</div>\n'
    '        <span class="prof-emoji" id="webProfEmoji">🎨</span>\n'
    '        <div class="prof-desc" id="webProfDesc"></div>\n'
    '      </div>\n'
    '      <div>\n'
    '        <div class="sec-lbl" style="margin-bottom:12px">Matched Hobbies</div>\n'
    '        <div id="webProfMatches"></div>\n'
    '      </div>\n'
    '    </div>'
)

if block13_search in content:
    new13 = (
        '    <div id="webProfIdentities" style="margin-bottom:0"></div>\n'
        '    <div class="prof-grid">\n'
        '      <div class="prof-card">\n'
        '        <div class="prof-eyebrow">Profile</div>\n'
        '        <span class="prof-emoji" id="webProfEmoji">\U0001f3a8</span>\n'
        '        <div class="prof-desc" id="webProfDesc"></div>\n'
        '        <div id="webProfRadar" style="margin-top:20px"></div>\n'
        '      </div>\n'
        '      <div>\n'
        '        <div class="sec-lbl" style="margin-bottom:12px">Matched Hobbies</div>\n'
        '        <div id="webProfMatches"></div>\n'
        '      </div>\n'
        '    </div>'
    )
    content = content.replace(block13_search, new13, 1)
    results.append("CHANGE 13: OK")
else:
    results.append("CHANGE 13: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 14: Add share modal before login modal
# ─────────────────────────────────────────────────────────────────
old14 = "<!-- LOGIN MODAL -->\n<div class=\"login-modal\" id=\"loginModal\">"

new14 = (
    "<!-- SHARE MODAL -->\n"
    "<div class=\"share-modal-bg\" id=\"shareModal\">\n"
    "  <div class=\"share-modal-box\">\n"
    "    <button class=\"quiz-x\" onclick=\"document.getElementById('shareModal').classList.remove('open')\" style=\"position:absolute;top:16px;right:16px\">\u2715</button>\n"
    "    <div style=\"font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:1px;margin-bottom:6px\">SHARE YOUR PROGRESS</div>\n"
    "    <div style=\"font-size:12px;color:rgba(255,255,255,.35);margin-bottom:16px\">Download and post to your Instagram story, Twitter, or anywhere.</div>\n"
    "    <canvas id=\"shareCanvas\" style=\"display:none\"></canvas>\n"
    "    <img id=\"sharePreview\" class=\"share-preview-img\" alt=\"share card\">\n"
    "    <button onclick=\"downloadShareCard()\" style=\"width:100%;padding:14px;background:var(--off);color:var(--ink);border:none;border-radius:12px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:800;cursor:pointer;margin-bottom:8px\">\u2b07 Download Card</button>\n"
    "    <button onclick=\"document.getElementById('shareModal').classList.remove('open')\" style=\"width:100%;padding:12px;background:none;border:1px solid var(--border);border-radius:12px;color:rgba(255,255,255,.35);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer\">Close</button>\n"
    "  </div>\n"
    "</div>\n\n"
    "<!-- LOGIN MODAL -->\n"
    "<div class=\"login-modal\" id=\"loginModal\">"
)

if old14 in content:
    content = content.replace(old14, new14, 1)
    results.append("CHANGE 14: OK")
else:
    results.append("CHANGE 14: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# CHANGE 15: Load sprint and challenge progress in enterApp
# ─────────────────────────────────────────────────────────────────
old15 = "  // Load saved chapter progress\n  window.completedChapters = DB.loadProgress(user.email);"

new15 = (
    "  // Load saved chapter progress\n"
    "  window.completedChapters = DB.loadProgress(user.email);\n"
    "  sprintProgress = DB.loadProgress(user.email + '_sprints') || {};\n"
    "  challengeProgress = (function() {\n"
    "    try { const u = DB._all()[user.email.toLowerCase()]; return (u && u.challengeProgress) || 0; } catch(e) { return 0; }\n"
    "  })();"
)

if old15 in content:
    content = content.replace(old15, new15, 1)
    results.append("CHANGE 15: OK")
else:
    results.append("CHANGE 15: FAILED — target text not found")

# ─────────────────────────────────────────────────────────────────
# Write output
# ─────────────────────────────────────────────────────────────────
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(content)

line_count = content.count('\n') + 1

print(f"Output file: {output_path}")
print(f"Line count:  {line_count}")
print()
print("--- Change Results ---")
for r in results:
    print(r)

failed = [r for r in results if 'FAILED' in r]
if failed:
    print(f"\n{len(failed)} change(s) FAILED.")
    sys.exit(1)
else:
    print(f"\nAll {len(results)} changes applied successfully.")
