// SHRUG v2 — Shared Data
// Extracted from shrug-12.html + new HOBBY_CONSTRAINTS
// All pages load this via <script src="data.js"></script>

// ── HOBBY ORDER ──────────────────────────────────────────────
const HOBBY_ORDER = ['photography','painting','writing','cooking','baking','yoga','ceramics','gardening','birdwatching','reading','piano','collage','drawing','hiking','dancing','knitting','journaling','woodworking','videography','interior','fashion','ai','gaming','travel','streetphoto','sneakers','collectibles'];

// ── HOBBIES ──────────────────────────────────────────────────
const HOBBIES = {
  photography: {
    color:'#F0C93A', textColor:'#1A1A1A', icon:'📸', tagline:'See Differently',
    overview:`Photography is the art of <strong>capturing moments</strong>. With just a smartphone, anyone can start exploring this hobby and develop their eye for composition, light, and storytelling. It trains you to see beauty in the everyday — in shadows, textures, and fleeting expressions that most people walk right past.`,
    stats:[
      {num:'1T+', label:'Photos taken globally each year', color:'#F0C93A'},
      {num:'75%', label:'Of photographers are hobbyists — not professionals', color:'#ACD8F0'},
      {num:'72%', label:'Of people say photography improves their mindfulness', color:'#B8D96E'},
    ],
    prompts:[
      {title:'Light & Shadow', desc:'Take 10 photos that focus on shadows and light around your home. Look for patterns on walls, floors, and furniture at different times of day.'},
      {title:'Objects With Meaning', desc:'Create a photo series of 5 objects from your daily life that carry personal meaning. Tell a story through placement and framing.'},
    ],
    careers:{ roles:['Wedding Photographer','Portrait Photographer','Photojournalist','Stock Photographer','Photo Editor','Art Director'], desc:'Many turn photography into a career through weddings, portraits, or editorial work. Others sell prints online, license images for stock, or work in marketing and advertising agencies.' },
    project:{ num:'CHALLENGE 01', title:'RULE OF\nTHIRDS', desc:'The invisible grid that transforms ordinary snapshots into compelling photographs.', ccIcon:'⊞', ccTitle:'Rule of Thirds', ccType:'Composition', ccBody:'Instead of centering your subject, place it along <strong>invisible grid lines</strong> dividing your frame into thirds. The four <strong>intersection points</strong> are your power spots — that\'s where eyes, horizons, and subjects belong.', hasAnim:true, chTag:'📸 OBSERVE', chTask:'Take 3 photos placing your main subject along the grid lines. No centered shots allowed.', chDetail:'Turn on your camera grid (Settings → Camera → Grid). Try: a person on the left third, a tree on the right, and a horizon on the bottom line.', tips:[{i:'📱',t:'Enable grid: Settings → Camera → Grid'},{i:'🌳',t:'Trees and people make great rule-of-thirds subjects'},{i:'🌅',t:'For landscapes, put the horizon on a line — not the middle'}], uploadEm:'📷', reflect:'"What felt different when you moved your subject off-center?"', aiFeedback:'Your sense of composition is already developing — especially in how you handled the <em>horizon placement</em>. The third shot shows real instinct for where the eye wants to travel.<br><br>Next time, try <em>shooting vertical</em> to discover how portrait mode changes the feel entirely.', scores:[{label:'Composition',val:'8/10',pct:80,color:'#F0C93A'},{label:'Light Awareness',val:'9/10',pct:90,color:'#ACD8F0'},{label:'Storytelling',val:'8/10',pct:80,color:'#B8D96E'}] }
  },
  painting: {
    color:'#6B4EFF', textColor:'white', icon:'🎨', tagline:'Express Without Words',
    overview:`Painting is a <strong>timeless form of self-expression</strong>. It ranges from simple watercolors to complex oil techniques. For thousands of years, painting has been how humans communicate emotion, capture beauty, and make sense of the world around them. You don't need talent to start — you just need the courage to make a mark.`,
    stats:[
      {num:'100M+', label:'People paint as a hobby globally', color:'#6B4EFF'},
      {num:'#1', label:'Watercolor is the most popular beginner medium worldwide', color:'#ACD8F0'},
      {num:'68%', label:'Of painters report reduced anxiety and stress after sessions', color:'#B8D96E'},
    ],
    prompts:[
      {title:'Two-Color Sunset', desc:'Paint a sunset using only two colors — any two you choose. Notice how they mix and transition. There are no rules here, just exploration.'},
      {title:'Speed Self-Portrait', desc:'Try painting a self-portrait in under 10 minutes. Work fast. Don\'t look at the result while painting — this frees you from trying to be perfect.'},
    ],
    careers:{ roles:['Gallery Artist','Art Instructor','Commissioned Artist','Muralist','Digital Illustrator','Art Therapist'], desc:'Professional painters exhibit in galleries, sell commissions online via Etsy or Instagram, or teach. Many work as illustrators for books, brands, and digital media. Art therapy is a growing field that blends painting with mental health.' },
    project:{ num:'CHALLENGE 01', title:'TWO-COLOR\nSUNSET', desc:'Explore how just two colors can create emotion, depth, and a whole world.', ccIcon:'🌅', ccTitle:'Color Mixing', ccType:'Color Theory', ccBody:'Two colors can create an <strong>infinite range of values and moods</strong>. Where they mix is where the magic lives. Try pushing one color to the edge and letting it barely whisper into the other.', hasAnim:false, chTag:'🎨 CREATE', chTask:'Paint a sunset scene using only 2 colors of your choice. Focus on the horizon line and how the colors blend.', chDetail:'Pick colors that feel opposites — warm vs. cool. Wet your paper first if using watercolor. Let colors bleed into each other naturally.', tips:[{i:'💧',t:'Wet your paper first for soft, dreamy watercolor edges'},{i:'🎨',t:'Try yellow + purple, or orange + blue for stunning contrast'},{i:'⏱',t:'Work quickly while the paint is wet for natural blending'}], uploadEm:'🎨', reflect:'"What surprised you about how the two colors interacted?"', aiFeedback:'There\'s a real sensitivity in how you handled the <em>color transition</em>. The way you let the darker tone creep up from the bottom shows intuitive composition thinking.<br><br>Next challenge: try the same exercise with <em>just one color</em> — varying only the water amount to create depth through value alone.', scores:[{label:'Color Sense',val:'8/10',pct:80,color:'#6B4EFF'},{label:'Composition',val:'7/10',pct:70,color:'#ACD8F0'},{label:'Expressiveness',val:'9/10',pct:90,color:'#B8D96E'}] }
  },
  writing: {
    color:'#B8D96E', textColor:'#1A1A1A', icon:'✍️', tagline:'Shape Your Thought',
    overview:`Writing allows you to <strong>tell stories, explore emotions, and craft entire worlds</strong> from your imagination. It's one of the most flexible hobbies — from quick daily journaling to short stories, poetry, and novels. Every great writer started exactly where you are now: with a blank page and something to say.`,
    stats:[
      {num:'60M', label:'People write creatively around the world', color:'#B8D96E'},
      {num:'3×', label:'Writers report greater emotional clarity than non-writers', color:'#F0C93A'},
      {num:'82%', label:'Of people want to write a book — most never start', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Childhood Memory', desc:'Write a short story based on a specific memory from your childhood. Don\'t explain it — show it. Put us in the room. What did it smell like?'},
      {title:'5-Word Poem', desc:'Compose a poem using just 5 words you can see from where you\'re sitting right now. Arrange them until they feel surprising.'},
    ],
    careers:{ roles:['Novelist','Screenwriter','Content Creator','Copywriter','Editor','Ghostwriter','Blogger'], desc:'Writers make a living in novels, film, advertising, journalism, and content creation. Many self-publish via Amazon KDP or build audiences through Substack or YouTube. Freelance writing and copywriting are among the most accessible creative careers to start.' },
    project:{ num:'CHALLENGE 01', title:'SHOW DON\'T\nTELL', desc:'The most powerful writing rule: make us feel it, don\'t describe it.', ccIcon:'✍️', ccTitle:'Show Don\'t Tell', ccType:'Narrative Craft', ccBody:'Instead of saying "she was nervous," <strong>show us her nervous</strong>: her hands, her breath, the way she re-reads the same line three times. Good writing is specific. Great writing is felt, not understood.', hasAnim:false, chTag:'✍️ WRITE', chTask:'Write a 100-word scene where a character is nervous — without using the word "nervous" or "anxious."', chDetail:'Focus on physical details. What does their body do? What do they notice? What\'s in the room? Every sentence should create a sensation, not a label.', tips:[{i:'🏠',t:'Root us in a specific place — a waiting room, a kitchen, a school hallway'},{i:'👁',t:'Use the 5 senses: what do they see, hear, smell, feel, taste?'},{i:'⏰',t:'Try writing your scene 3 times, each time using different physical details'}], uploadEm:'✍️', reflect:'"Which physical detail surprised you most when you wrote it?"', aiFeedback:'The specificity in your scene is already working — especially the detail about <em>the coffee cup being held too tight</em>. That one image carries more weight than a paragraph of explanation.<br><br>Next challenge: <em>rewrite the same scene from a completely different character\'s perspective</em>. Same room, different eyes.', scores:[{label:'Specificity',val:'8/10',pct:80,color:'#B8D96E'},{label:'Emotional Impact',val:'9/10',pct:90,color:'#F0C93A'},{label:'Voice',val:'7/10',pct:70,color:'#ACD8F0'}] }
  },
  cooking: {
    color:'#E8453C', textColor:'white', icon:'🍳', tagline:'Create From Scratch',
    overview:`Cooking is both a <strong>life skill and an art form</strong>. Trying new recipes, experimenting with flavors, and preparing meals for loved ones can be deeply fulfilling. The rise of home cooking shows and food content online has made it more accessible than ever — and the science behind great food is genuinely fascinating once you start digging.`,
    stats:[
      {num:'#1', label:'Most universally practiced hobby — almost everyone cooks', color:'#E8453C'},
      {num:'78%', label:'Of people say cooking at home reduces their stress levels', color:'#F0C93A'},
      {num:'2×', label:'More likely to eat healthy when cooking from scratch', color:'#B8D96E'},
    ],
    prompts:[
      {title:'5-Ingredient Dish', desc:'Create a satisfying dish using only 5 ingredients. Constraints breed creativity. Think about how each ingredient plays a role.'},
      {title:'Cultural Exploration', desc:'Cook a complete meal from a culture you\'ve never explored before. Research the flavors, the history, and why people love it.'},
    ],
    careers:{ roles:['Chef','Food Blogger','Caterer','Recipe Developer','Private Chef','YouTube Creator','Pop-up Kitchen'], desc:'Many turn cooking into careers as restaurant chefs, private cooks, or caterers. Food content creation on YouTube and Instagram is now a legitimate career. Some run pop-up restaurants or sell specialty goods at markets.' },
    project:{ num:'CHALLENGE 01', title:'SALT &\nFLAVOR', desc:'Salt doesn\'t just make things salty — it\'s the key that unlocks every other flavor in the dish.', ccIcon:'🧂', ccTitle:'Layered Salting', ccType:'Flavor Foundation', ccBody:'Salt in <strong>layers</strong> — season each ingredient as you go, not just at the end. Pasta water should taste like the sea. Under-salted food is <strong>flat and one-dimensional</strong>. Properly seasoned food tastes intensely like itself.', hasAnim:false, chTag:'🍳 COOK', chTask:'Make scrambled eggs twice — once with no salt at all, once with proper layered seasoning. Taste both.', chDetail:'For the second batch: season the raw eggs 10 minutes before cooking, add a pinch to the pan as they cook, and finish with flaky salt. Compare them honestly.', tips:[{i:'🧂',t:'Use kosher or flaky salt — easier to control than table salt'},{i:'⏱',t:'Salt eggs 10-15 min before scrambling for even better results'},{i:'🍋',t:'A squeeze of lemon at the end also "salts" a dish by brightening flavors'}], uploadEm:'🍳', reflect:'"What was the actual difference between the two batches?"', aiFeedback:'Your reflection on the <em>difference between the two batches</em> shows you\'re already developing a palate. Most people never do this experiment — you now understand something most home cooks miss for their entire lives.<br><br>Next challenge: try <em>salting a pasta dish in three different stages</em> — water, sauce, and finish.', scores:[{label:'Flavor Awareness',val:'9/10',pct:90,color:'#E8453C'},{label:'Technique',val:'7/10',pct:70,color:'#F0C93A'},{label:'Curiosity',val:'10/10',pct:100,color:'#B8D96E'}] }
  },
  baking: {
    color:'#F4A261', textColor:'#1A1A1A', icon:'🥐', tagline:'Precision Meets Joy',
    overview:`Baking combines <strong>precision with creativity</strong>, resulting in everything from simple cookies to elaborate cakes. Unlike cooking, baking is a science — ratios and temperatures matter. But within those constraints, there's enormous room for creativity. It's therapeutic, it engages all your senses, and you always get something delicious at the end.`,
    stats:[
      {num:'70%', label:'Of Americans bake at home at least occasionally', color:'#F4A261'},
      {num:'400%', label:'Increase in home bread baking searches during the pandemic', color:'#ACD8F0'},
      {num:'85%', label:'Of bakers say it meaningfully reduces stress and anxiety', color:'#B8D96E'},
    ],
    prompts:[
      {title:'Bread From Scratch', desc:'Bake a simple loaf of bread from scratch. Experiment with adding rosemary, garlic, or a different flour. Feel how the dough changes.'},
      {title:'Decorated Cookies', desc:'Bake plain sugar cookies and decorate them with a unique design using icing. No templates — invent your own patterns.'},
    ],
    careers:{ roles:['Pastry Chef','Bakery Owner','Wedding Cake Designer','Food Stylist','Baking Content Creator','Recipe Developer'], desc:'Bakers run bakeries, work as pastry chefs in restaurants, or specialize in custom wedding and event cakes. Many build followings on YouTube or Instagram sharing techniques, and some sell at farmers\' markets before going full-time.' },
    project:{ num:'CHALLENGE 01', title:'SIMPLE\nBREAD', desc:'Understand yeast, gluten, and the alchemy that turns flour and water into something magical.', ccIcon:'🍞', ccTitle:'Yeast & Gluten', ccType:'Baking Science', ccBody:'Yeast eats sugar and exhales CO₂ — that\'s what makes bread rise. <strong>Gluten</strong> is the protein network that traps those bubbles and gives bread its chew. Knead to develop it; too little and bread crumbles, too much and it toughens.', hasAnim:false, chTag:'🥐 BAKE', chTask:'Bake a simple no-knead bread loaf. Just flour, water, yeast, and salt. Watch it transform overnight.', chDetail:'Mix 3 cups flour, 1/4 tsp yeast, 1.5 tsp salt, 1.5 cups warm water. Cover and leave 12-18 hours. Shape, rest 2 hours, bake in a Dutch oven at 450°F for 30 min covered, 15 min uncovered.', tips:[{i:'⏰',t:'Make the dough the night before — long rise = better flavor'},{i:'🏺',t:'A Dutch oven creates the steam that makes a crispy crust'},{i:'👃',t:'Trust your nose — properly baked bread smells nutty and hollow when tapped'}], uploadEm:'🍞', reflect:'"What surprised you most about the process?"', aiFeedback:'The crust development in your result is impressive for a first bake — that <em>hollow tap sound</em> means you nailed the internal structure. Most people overbake out of nervousness. You showed restraint.<br><br>Next challenge: try adding <em>rosemary and olive oil</em> to the dough and see how aromatics change the entire experience.', scores:[{label:'Technique',val:'8/10',pct:80,color:'#F4A261'},{label:'Patience',val:'9/10',pct:90,color:'#ACD8F0'},{label:'Result',val:'8/10',pct:80,color:'#B8D96E'}] }
  },
  yoga: {
    color:'#ACD8F0', textColor:'#1A1A1A', icon:'🧘', tagline:'Move With Intention',
    overview:`Yoga integrates <strong>body, mind, and breath</strong> into a single practice. It can be a gentle stretch or an intense workout depending on the style. Yoga builds flexibility, balance, and mindfulness — and the benefits extend far beyond the mat into how you handle stress, sleep, and daily energy.`,
    stats:[
      {num:'300M+', label:'People practice yoga worldwide, growing every year', color:'#ACD8F0'},
      {num:'55%', label:'Of practitioners say yoga relieves chronic pain', color:'#6B4EFF'},
      {num:'85%', label:'Report reduced anxiety after just 8 weeks of regular practice', color:'#B8D96E'},
    ],
    prompts:[
      {title:'Beginner Session', desc:'Try a 15-minute beginner yoga session focusing on downward dog, mountain pose, and child\'s pose. Hold each for 5 deep breaths.'},
      {title:'Meditation Routine', desc:'Create a 5-minute morning meditation to accompany your practice. Focus only on breath — inhale 4 counts, hold 4, exhale 6.'},
    ],
    careers:{ roles:['Yoga Instructor','Studio Owner','Online Course Creator','Retreat Leader','Wellness Blogger','Corporate Wellness Coach'], desc:'Certified yoga instructors teach in studios, gyms, or privately. Many build online studios with virtual classes. Yoga retreats and corporate wellness programs are growing markets. Some combine yoga with content creation on YouTube or TikTok.' },
    project:{ num:'CHALLENGE 01', title:'3-POSE\nFOUNDATION', desc:'Three poses that form the foundation of almost every yoga practice.', ccIcon:'🧘', ccType:'Mind-Body Connection', ccBody:'Yoga is not about touching your toes. It\'s about <strong>connecting breath to movement</strong>. Every pose is held with intention — inhaling to create length, exhaling to go deeper. Your breath is your guide.', hasAnim:false, chTag:'🧘 PRACTICE', tips:[{i:'🌬',t:'Breathe through your nose — it activates your parasympathetic system'},{i:'📱',t:'YouTube: "Yoga with Adriene" is the best free beginner resource online'},{i:'🕐',t:'Morning practice (even 10 min) sets a completely different tone for the day'}], uploadEm:'🧘', reflect:'"Where in your body did you feel the most tension — and did it release?"', aiFeedback:'The fact that you noticed <em>where tension lived</em> in your body is already a significant step. Many people go through life without ever developing that awareness.<br><br>Try the same three poses again tomorrow morning immediately after waking. <em>Notice the difference</em> between a rested body and a tired one.', scores:[{label:'Focus',val:'8/10',pct:80,color:'#ACD8F0'},{label:'Breath Awareness',val:'7/10',pct:70,color:'#6B4EFF'},{label:'Consistency',val:'9/10',pct:90,color:'#B8D96E'}], ccTitle: "Your First Flow", lessonTitle: "Movement Is Medicine", lessonParas: ["Yoga is not about flexibility — it is about presence. Every pose is a conversation between your body and your breath. The goal of your first session is not to touch your toes; it is to notice what happens when you slow down and move with intention.", "A beginner flow connects three foundational poses: Mountain (standing tall, grounded), Downward Dog (hips high, heels reaching), and Child's Pose (forehead to mat, full rest). These three postures teach you everything — how to find your foundation, how to lengthen your spine, and how to surrender. Move between them slowly, and breathe deeply through each transition."], tipTitle: "How to Build Your First Flow", tipSteps: ["Start in Mountain Pose: feet hip-width apart, arms at sides, eyes soft. Take 5 slow breaths here.", "Hinge at the hips and fold forward — knees slightly bent is fine. Let your head hang heavy.", "Step back to a plank, then push your hips up and back into Downward Dog. Hold for 5 breaths.", "Lower your knees and sit back into Child's Pose. Rest here as long as you need.", "Repeat this cycle 3 times without rushing. Notice the difference between the first and third round."], chTask: "Complete one full beginner flow (Mountain → Downward Dog → Child's Pose) repeated 3 times.", chDetail: "Use a yoga mat or soft surface. Focus on breathing slowly through your nose the entire time.", tryItTime: "10–15 minutes", saveItText: "Take a photo of yourself in Child's Pose or Downward Dog — your resting posture after the flow.", aiCriteria: ["Body alignment", "Engagement & effort", "Breathing awareness"]}
  },
  ceramics: {
    color:'#D4956A', textColor:'white', icon:'🏺', tagline:'Shape Something Real',
    overview:`Working with clay is a <strong>tactile, grounding experience</strong>. Whether hand-building or using a pottery wheel, ceramic making results in functional items or sculptural art. There's something deeply satisfying about transforming raw earth into something beautiful — and the imperfections are always part of the charm.`,
    stats:[
      {num:'100M+', label:'People practice ceramics globally', color:'#D4956A'},
      {num:'92%', label:'Of makers say clay work reduces anxiety better than other crafts', color:'#ACD8F0'},
      {num:'3×', label:'Faster fine motor skill development vs. other hands-on hobbies', color:'#B8D96E'},
    ],
    prompts:[
      {title:'Air-Dry Bowl', desc:'Sculpt a small bowl using air-dry clay — available at any craft store. No kiln needed. Press your thumbs into the center and work outward.'},
      {title:'Clay Beads', desc:'Roll small clay beads of different shapes and sizes, poke a hole through each, and string them into a necklace or bracelet once dry.'},
    ],
    careers:{ roles:['Studio Potter','Ceramics Instructor','Gallery Artist','Market Vendor','Production Potter','Set Designer'], desc:'Ceramic artists sell at craft markets, on Etsy, or through galleries. Many open their own studios offering classes and commissions. Production potters supply restaurants and retailers. Some work in film and theater as prop makers or set designers.' },
    project:{ num:'CHALLENGE 01', title:'YOUR FIRST\nBOWL', desc:'A pinch pot is the oldest ceramic technique in human history. You\'re in good company.', ccIcon:'🏺', ccType:'Hand Building', ccBody:'Start with a ball of clay about the size of your fist. <strong>Press both thumbs</strong> into the center, leaving a thick base. Rotate the clay, gently pinching and pulling the walls upward. Thin walls = fragile. Thick walls = sturdy.', hasAnim:false, chTag:'🏺 MAKE', tips:[{i:'💧',t:'A small cup of water beside you prevents cracking as you work'},{i:'👐',t:'Warm clay in your hands first — it becomes more workable'},{i:'☀️',t:'Let it dry slowly away from direct sunlight to prevent cracking'}], uploadEm:'🏺', reflect:'"What happened when you stopped trying to control the shape?"', aiFeedback:'The <em>uneven rim</em> on your bowl is not a flaw — it\'s the signature of something made by hand. Mass production removes that. What you made cannot be replicated exactly, by anyone.<br><br>Next: try making <em>three bowls in a row</em> without stopping. Watch how your technique changes from first to last.', scores:[{label:'Form',val:'7/10',pct:70,color:'#D4956A'},{label:'Technique',val:'8/10',pct:80,color:'#ACD8F0'},{label:'Patience',val:'9/10',pct:90,color:'#B8D96E'}], ccTitle: "Your First Pinch Bowl", lessonTitle: "The Clay Remembers", lessonParas: ["Clay is one of the oldest materials humans have ever shaped. Every pinch bowl you make carries a direct connection to thousands of years of making. There is no right shape for a first bowl — only the shape your hands naturally create when you listen to the clay.", "The pinch method is beautifully simple: start with a ball of clay, push your thumb into the center, and slowly pinch and rotate. The wall rises as your fingers compress and thin the clay. The goal is even wall thickness — about 6–8mm — which gives your bowl strength without feeling heavy."], tipTitle: "How to Pinch a Bowl", tipSteps: ["Start with a ball of clay about the size of a tangerine. Smooth it between your palms.", "Push your dominant thumb into the center — stop about 1cm from the bottom.", "Pinch the wall between your thumb (inside) and fingers (outside) while slowly rotating the ball.", "Work from the bottom upward in small sections. Keep pinches even and close together.", "Let it rest 10 minutes before refining the rim — the clay firms up just enough to hold its shape."], chTask: "Pinch one complete bowl with a flat base and an even rim.", chDetail: "Don't aim for perfect symmetry — handbuilt bowls are beautiful because they're not. Aim for consistent wall thickness.", tryItTime: "30–45 minutes", saveItText: "Photo of your finished bowl from above and from the side.", aiCriteria: ["Wall consistency", "Structural integrity", "Rim quality"]}
  },
  gardening: {
    color:'#3D9E8C', textColor:'white', icon:'🌱', tagline:'Grow With Patience',
    overview:`Gardening is the art and science of <strong>cultivating living things</strong>. Whether flowers, vegetables, or herbs, watching plants grow from seed to harvest is genuinely addictive. Gardening has been shown to reduce cortisol levels, improve focus, and create a deep sense of connection to time and seasons.`,
    stats:[
      {num:'1 in 3', label:'U.S. households grow some type of food or plant at home', color:'#3D9E8C'},
      {num:'36%', label:'Reduction in depression symptoms among regular gardeners', color:'#B8D96E'},
      {num:'2B+', label:'People garden globally — the world\'s most common hobby', color:'#F0C93A'},
    ],
    prompts:[
      {title:'Windowsill Herb Garden', desc:'Start a small herb garden on your windowsill using seeds or starter plants. Basil, mint, and chives are foolproof. Water them daily and document growth.'},
      {title:'Plant a Tree', desc:'Plant a tree or shrub in your yard or a community garden. Research the species, learn its root system, and document its growth over months.'},
    ],
    careers:{ roles:['Landscape Designer','Horticulturist','Market Grower','Garden Writer','Environmental Educator','Urban Farm Operator'], desc:'Gardeners go on to become landscapers, horticulturists, or environmental advocates. Many sell homegrown produce at markets or teach others through workshops. Urban farming and community garden management are growing career paths.' },
    project:{ num:'CHALLENGE 01', title:'WINDOWSILL\nHERB GARDEN', desc:'Three herbs. One windowsill. The beginning of a relationship with growing things.', ccIcon:'🌿', ccType:'Container Growing', ccBody:'Herbs need <strong>6+ hours of direct sunlight</strong> and soil that drains well. Overwatering is the #1 killer — stick your finger 2 inches into soil before watering. If it\'s moist, wait.', hasAnim:false, chTag:'🌱 GROW', tips:[{i:'☀️',t:'South-facing windows get the most light — prioritize them'},{i:'💧',t:'Overwatering kills more plants than underwatering — when in doubt, wait'},{i:'✂️',t:'Pinch off flowers on basil immediately — it makes leaves more flavorful'}], uploadEm:'🌱', reflect:'"What do you notice about your plants today that you didn\'t notice yesterday?"', aiFeedback:'Your photo shows <em>healthy new growth</em> at the nodes — you\'re watering at exactly the right frequency. Many beginners overwater out of enthusiasm and suffocate the roots.<br><br>Next: try <em>tasting one leaf from each plant</em> and write three words for each flavor. Building a flavor vocabulary is how great gardeners become great cooks.', scores:[{label:'Care Consistency',val:'9/10',pct:90,color:'#3D9E8C'},{label:'Observation',val:'8/10',pct:80,color:'#B8D96E'},{label:'Patience',val:'9/10',pct:90,color:'#F0C93A'}], ccTitle: "Plant Your First Herb", lessonTitle: "Everything Starts With One Seed", lessonParas: ["Gardening is the practice of patience made visible. A seed doesn't know it's small. It pushes through soil with everything it has, because growing is the only thing it knows how to do. Your job as a gardener is to create the conditions that let that happen.", "Starting with herbs is the most rewarding way to begin. Basil, mint, and chives are forgiving, fast-growing, and actually useful in your kitchen. You'll need a pot with drainage holes, potting mix (not garden soil), and a sunny windowsill. Direct sunlight for 6+ hours a day is the single biggest factor in whether your herb thrives."], tipTitle: "How to Plant Your First Herb", tipSteps: ["Fill your pot to 2cm below the rim with potting mix — not outdoor soil, which compacts in pots.", "Make a small hole 1–2cm deep, drop in 2–3 seeds, and cover lightly. Don't bury them deep.", "Water gently until the soil is evenly moist — not soggy. Stick your finger 2cm deep: if it's damp, wait.", "Place in your sunniest spot. South-facing windows are best. Rotate the pot every few days for even growth.", "Expect germination in 5–10 days depending on the herb. Check daily and keep the soil consistently moist."], chTask: "Plant one herb (basil, mint, or chives) in a pot and set up its permanent spot.", chDetail: "Label the pot with the herb name and planting date. Check it every day for the first week.", tryItTime: "20–30 minutes", saveItText: "Photo of your planted pot in its spot — include the label if you made one.", aiCriteria: ["Pot and soil setup", "Planting depth & spacing", "Location quality"]}
  },
  birdwatching: {
    color:'#87CEAA', textColor:'#1A1A1A', icon:'🦜', tagline:'Nature on Your Doorstep',
    overview:`Bird watching connects you with nature through <strong>patient observation of wildlife</strong>. It\'s a peaceful hobby that develops attention to detail, patience, and a genuine appreciation for the natural world. All you need to start is a keen eye — binoculars are optional. Birds are everywhere, and once you start noticing them, you can\'t stop.`,
    stats:[
      {num:'45M', label:'Bird watchers in the U.S. alone', color:'#87CEAA'},
      {num:'10,000+', label:'Bird species to discover worldwide', color:'#F0C93A'},
      {num:'88%', label:'Of birders report greater connection to nature and seasons', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'30-Minute Watch', desc:'Spend 30 minutes outside (or by a window) and list every different bird you see or hear. You don\'t need to identify them — just count the variety.'},
      {title:'Bird Journal', desc:'Start a bird-watching journal this week. Sketch or describe each new bird you encounter — color, size, behavior, sound, location.'},
    ],
    careers:{ roles:['Wildlife Photographer','Conservation Scientist','Field Guide Author','Citizen Scientist','Nature Educator','Ornithologist'], desc:'Birders contribute to citizen science projects by logging sightings on platforms like eBird. Many move into wildlife photography, conservation, or writing. Some develop local birding tours or create online nature content.' },
    project:{ num:'CHALLENGE 01', title:'30-MINUTE\nWILD', desc:'Sit still. Let the birds come to you. That\'s the whole technique.', ccIcon:'🦜', ccType:'Wildlife Awareness', ccBody:'Birds habituate to <strong>stillness</strong>. When you stop moving and stay quiet for 5-10 minutes, they start ignoring you and behaving naturally. That\'s when the real observation begins. Your nervous system also benefits — this is active meditation.', hasAnim:false, chTag:'🦜 WATCH', tips:[{i:'🤫',t:'Silence is the whole technique — birds approach stillness'},{i:'📖',t:'Merlin Bird ID app (free) identifies birds from photos or sound'},{i:'🌅',t:'Early morning (6-8am) is peak bird activity time in most regions'}], uploadEm:'🦜', reflect:'"What was the longest you went without thinking about your phone?"', aiFeedback:'The <em>cardinal detail</em> in your journal entry — watching it return to the same branch three times — shows your observation is deepening. Most people notice movement. You\'re starting to notice <em>patterns</em>.<br><br>Tomorrow morning, try the same spot at exactly the same time. See which birds are regulars and which are passing through.', scores:[{label:'Observation',val:'9/10',pct:90,color:'#87CEAA'},{label:'Patience',val:'8/10',pct:80,color:'#F0C93A'},{label:'Documentation',val:'7/10',pct:70,color:'#ACD8F0'}], ccTitle: "Your First Observation", lessonTitle: "The World Slows Down When You Watch", lessonParas: ["Birdwatching changes how you experience the world. Once you start noticing birds — really noticing them — you realize they're everywhere. The pigeon on your fire escape is not background noise; it's a rock dove with a 10,000-year relationship with humans. Every bird you see has a story.", "Your first session is about observation, not identification. Sit still in one spot outdoors for 20 minutes. Notice movement before shape, shape before color. Birds are often detected first by motion — a flash in a bush, a ripple in water. Let your eyes soften and scan broadly rather than focusing on one point."], tipTitle: "How to Observe Birds Effectively", tipSteps: ["Find a spot near trees, water, or dense shrubs. Edges — where two habitats meet — are bird hotspots.", "Sit still or move very slowly. Fast movement triggers flight responses. Be part of the landscape.", "Look for movement first, then size, then color. Resist reaching for your phone immediately — let yourself observe first.", "Listen as much as you look. You'll hear far more birds than you see. Try to locate each sound's source.", "Note what you see: size (sparrow-sized? crow-sized?), behavior (hopping, flying, bobbing head), and habitat. This is your data."], chTask: "Spend 20 minutes observing birds outdoors and record at least 3 different birds you see or hear.", chDetail: "Write down: location, time, what you saw or heard, and one behavioral note per bird. You don't need to know the species name — describe what you observed.", tryItTime: "20–30 minutes", saveItText: "Photo of the habitat where you observed — or a photo of any bird you managed to capture.", aiCriteria: ["Observation quality", "Detail in notes", "Habitat awareness"]}
  },
  reading: {
    color:'#E76F8A', textColor:'white', icon:'📚', tagline:'Every Book, a New World',
    overview:`Reading opens doors to <strong>new worlds, perspectives, and ideas</strong>. Whether fiction, non-fiction, or poetry, reading expands your thinking, reduces stress, and builds empathy in ways proven by neuroscience. It\'s the one hobby where the more you do it, the better your brain becomes at almost everything else.`,
    stats:[
      {num:'75%', label:'Of U.S. adults read at least one book per year', color:'#E76F8A'},
      {num:'12', label:'Average number of books read annually by regular readers', color:'#F0C93A'},
      {num:'6min', label:'Of reading reduces stress levels by up to 68% — faster than a walk', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Genre Challenge', desc:'Set a reading goal of finishing one new book this month in a genre you\'ve never explored. If you only read fiction, try narrative non-fiction. If non-fiction, try literary fiction.'},
      {title:'Book Club Moment', desc:'Join a book club or online reading challenge. Talk about a book with at least one other person this month. Notice how much your understanding deepens.'},
    ],
    careers:{ roles:['Book Reviewer','Literary Agent','Editor','Librarian','BookTuber','Podcast Host','Writer'], desc:'A love of reading naturally feeds careers in publishing, writing, and education. Many build audiences as book bloggers, BookTubers, or podcast hosts. Editors, literary agents, and writing teachers all trace their careers back to reading voraciously.' },
    project:{ num:'CHALLENGE 01', title:'ANNOTATE\nAS YOU READ', desc:'Reading with a pen changes everything. Passive to active. Consumer to thinker.', ccIcon:'📚', ccTitle:'Active Reading', ccType:'Comprehension & Retention', ccBody:'Most people read passively — words enter, meanings blur. <strong>Annotating</strong> transforms reading: underline what moves you, question marks for confusion, stars for ideas. Your notes become a record of your thinking, not just the author\'s.', hasAnim:false, chTag:'📚 READ', chTask:'Read 20 pages of any book — but annotate in the margins. Write one thought, question, or reaction per page.', chDetail:'Use a pencil or Post-it notes if you don\'t want to write in the book. Note your reactions as they happen. Don\'t censor — let yourself argue with the author.', tips:[{i:'✏️',t:'A simple pencil for underlining + margin notes is the only tool you need'},{i:'🤔',t:'"Why?" in the margin is always a valid annotation — it prompts deeper thinking'},{i:'📌',t:'Flag your strongest reactions to revisit at the end'}], uploadEm:'📚', reflect:'"Which line surprised you most — and why?"', aiFeedback:'The <em>three-word annotations</em> you showed are already punchy and specific. You\'re not summarizing — you\'re reacting. That\'s the distinction between annotation and highlighting.<br><br>Next: try reading the same passage you annotated <em>one week later</em> without the notes. See if your reaction is different. That gap is your thinking evolving.', scores:[{label:'Engagement',val:'9/10',pct:90,color:'#E76F8A'},{label:'Critical Thinking',val:'8/10',pct:80,color:'#F0C93A'},{label:'Retention',val:'8/10',pct:80,color:'#ACD8F0'}] }
  },
  piano: {
    color:'#1A1A1A', textColor:'white', icon:'🎹', tagline:'Find Your Rhythm',
    overview:`Playing the piano <strong>rewires your brain</strong>. Studies show pianists develop enhanced memory, fine motor skills, and emotional intelligence. Whether you\'re drawn to classical, jazz, or pop, learning piano teaches discipline and gives you a creative outlet that never runs out of room to grow. You can start with zero experience today.`,
    stats:[
      {num:'21M', label:'Americans play piano — more than any other instrument', color:'#F0C93A'},
      {num:'2×', label:'Faster language learning ability in regular piano students', color:'#ACD8F0'},
      {num:'40%', label:'Reduction in anxiety and depression in adults who play an instrument', color:'#B8D96E'},
    ],
    prompts:[
      {title:'First Song', desc:'Learn one simple song — "Twinkle Twinkle Little Star" or "Happy Birthday" — using an online tutorial or app like Simply Piano. Play it slowly until it\'s muscle memory.'},
      {title:'Improvise', desc:'Using just 5 adjacent keys (C, D, E, F, G), improvise your own melody for 5 minutes. Don\'t think — just play and listen to what your hands discover.'},
    ],
    careers:{ roles:['Piano Teacher','Session Musician','Composer','Accompanist','Film Scorer','Online Music Instructor','Concert Performer'], desc:'Pianists teach privately, perform in ensembles, or compose for film and media. Many build students through local word of mouth or platforms like Lessonface. Online video performances on YouTube have launched several piano careers from bedrooms.' },
    project:{ num:'CHALLENGE 01', title:'5-KEY\nIMPROV', desc:'You don\'t need all 88 keys to make music. You just need 5.', ccIcon:'🎹', ccType:'Musical Foundation', ccBody:'5 notes arranged in the pentatonic scale sound <strong>good together no matter how you combine them</strong>. That\'s why it\'s in folk music from every culture. C, D, E, G, A — play any combination and you\'ll make something that sounds intentional.', hasAnim:false, chTag:'🎹 PLAY', tips:[{i:'📱',t:'Use GarageBand or a free piano app if you don\'t have a keyboard'},{i:'🎙',t:'Record yourself — you\'ll hear things you miss while playing'},{i:'🔁',t:'Find one 3-note pattern you like and build everything else around it'}], uploadEm:'🎹', reflect:'"Was there a moment when you stopped thinking and just listened?"', aiFeedback:'The <em>repeated motif</em> you kept returning to in your recording isn\'t an accident — your musical instincts found a pattern and wanted to develop it. That\'s composition thinking.<br><br>Next: take that 3-note motif and <em>play it at three different speeds</em>. Slow, normal, and fast. Discover how tempo changes the entire emotional character.', scores:[{label:'Musicality',val:'8/10',pct:80,color:'#F0C93A'},{label:'Improvisation',val:'7/10',pct:70,color:'#ACD8F0'},{label:'Listening',val:'9/10',pct:90,color:'#B8D96E'}], ccTitle: "Your First Chord Progression", lessonTitle: "Chords Are Emotional Architecture", lessonParas: ["Every song you've ever loved is built from chords. A chord is just three or more notes played together that create a single emotional color — C major feels bright and open, A minor feels reflective, F major feels warm. Learning to move between chords is the most direct path to actually making music on the piano.", "The I–V–vi–IV progression (C–G–Am–F in the key of C major) is the most used chord progression in popular music. Tens of thousands of songs use it. Learning it doesn't mean playing someone else's song — it means understanding the harmonic language that all of them speak."], tipTitle: "How to Play Your First Chord Progression", tipSteps: ["Find Middle C on the keyboard — it's the C closest to the center. Place your right thumb there.", "C major: thumb (C), middle finger (E), pinky (G). Press all three together. That's your first chord.", "G major: index (G), middle (B), pinky (D). Move your hand to the right.", "A minor: thumb (A), middle (C), pinky (E). Back to the left.", "F major: thumb (F), middle (A), pinky (C). Practice each chord separately, then try moving C → G → Am → F slowly."], chTask: "Play the C–G–Am–F chord progression smoothly 4 times through without stopping.", chDetail: "Use your right hand only. Don't worry about rhythm — just focus on finding each chord cleanly before moving to the next.", tryItTime: "20–30 minutes", saveItText: "Short video of your hands playing the chord progression — even just one round.", aiCriteria: ["Chord accuracy", "Smooth transitions", "Consistent effort"]}
  },
  collage: {
    color:'#F0C93A', textColor:'#1A1A1A', icon:'✂️', tagline:'Cut, Arrange, Discover',
    overview:`Collage and scrapbooking let you <strong>blend creativity with memory</strong>. Using photos, magazine clippings, paper, and found objects, you create personalized artwork that is equal parts art project and personal archive. It\'s one of the most accessible creative outlets — you can start with a pile of old magazines right now.`,
    stats:[
      {num:'2.5M', label:'Americans participate in some form of scrapbooking', color:'#F0C93A'},
      {num:'6×', label:'More likely to remember memories when they\'re physically documented', color:'#E76F8A'},
      {num:'90%', label:'Of collage artists report a creative breakthrough within their first session', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Inspiration Collage', desc:'Create a collage using only magazine cutouts of things that inspire you. No words allowed — only images. See what story emerges from what you choose.'},
      {title:'Vacation Story', desc:'Design a scrapbook page that tells the story of your last trip or memorable experience. Mix photos, ticket stubs, and hand-drawn elements.'},
    ],
    careers:{ roles:['Mixed Media Artist','Craft YouTuber','Market Vendor','Brand Designer','Book Illustrator','Scrapbook Workshop Teacher'], desc:'Collage artists sell work at craft fairs, through Etsy, or online galleries. Many teach through local workshops or YouTube channels showing techniques. Some work professionally as brand or editorial designers where collage aesthetic is increasingly popular.' },
    project:{ num:'CHALLENGE 01', title:'NO WORDS,\nJUST IMAGES', desc:'Let images speak before your internal editor gets involved.', ccIcon:'✂️', ccType:'Composition & Curation', ccBody:'Collage works through <strong>juxtaposition</strong> — placing unrelated images next to each other creates unexpected meaning. A lion next to a cup of tea. A map next to a portrait. The viewer\'s brain will always search for a connection and find one.', hasAnim:false, chTag:'✂️ CREATE', tips:[{i:'📰',t:'Old magazines, newspapers, and printed photos are all fair game'},{i:'🔲',t:'Try creating one focal point with everything else supporting it'},{i:'✂️',t:'Cut shapes as well as images — colored rectangles add visual rhythm'}], uploadEm:'✂️', reflect:'"What pattern did you notice in the images you were drawn to?"', aiFeedback:'The <em>recurring blue tones</em> across your collage were clearly chosen by instinct — you weren\'t consciously selecting for color harmony, but your eye did it anyway. That\'s artistic intuition working.<br><br>Next: make a second collage using <em>only one color family</em>. Constrain the palette and watch how much more expressive the shapes and subjects become.', scores:[{label:'Composition',val:'8/10',pct:80,color:'#F0C93A'},{label:'Curation',val:'9/10',pct:90,color:'#E76F8A'},{label:'Originality',val:'8/10',pct:80,color:'#ACD8F0'}], ccTitle: "Your First Cut & Paste", lessonTitle: "Collage Is Permission to Play", lessonParas: ["Collage is the most forgiving art form. There is no 'wrong cut.' Nothing you place is permanent until the glue dries — and even then, you can paint over it or tear it apart and start over. The only rule in collage is that everything on the page should be there on purpose, even if that purpose is just 'I liked how it looked next to that other thing.'", "For your first collage, gather 10–15 images from magazines, newspapers, printed photos, or anything you can cut. Don't plan the outcome — start with materials you're attracted to. The editing happens on the page. Tear some edges, cut others cleanly. Notice how different edges create different feelings."], tipTitle: "Getting Your First Collage Started", tipSteps: ["Gather materials first: magazines, old books, newspapers, photos, colored paper, receipts — anything flat.", "Don't glue anything for the first 10 minutes. Just cut and arrange. Rearrange. Let the composition surprise you.", "Create contrast: put something smooth next to something rough, something large next to something small.", "Leave some breathing room — white space or plain background. Overcrowded collages lose visual clarity.", "When you're ready to glue: work from the background layer to the foreground. Bigger pieces first, details last."], chTask: "Complete one collage on a letter-sized or A4 surface using at least 8 different source materials.", chDetail: "This is exploratory — you're finding your instincts. Don't plan too much. React to what's in front of you.", tryItTime: "30–45 minutes", saveItText: "Photo of your completed collage, flat on a surface with good even lighting.", aiCriteria: ["Composition balance", "Material variety", "Visual interest"]}
  },

  // ── 8 NEW HOBBIES ──────────────────────────────────────
  drawing: {
    color:'#C084FC', textColor:'white', icon:'✏️', tagline:'See Before You Draw',
    overview:`Drawing is the foundation of every visual art form. <strong>It trains your eye before it trains your hand</strong> — learning to draw is really learning to see: to notice proportions, shadows, negative space, and the shapes hiding inside familiar things. You don\'t need talent. You need a pencil and the willingness to look more carefully than you ever have before.`,
    stats:[
      {num:'1B+', label:'People draw regularly as a hobby or creative outlet worldwide', color:'#C084FC'},
      {num:'Zero', label:'Equipment required to start — a pencil and paper is enough', color:'#F0C93A'},
      {num:'73%', label:'Of people who try daily sketching report improved focus and calm', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Draw Without Looking', desc:'Place your hand on the paper and draw it without looking at the page once. The result will be strange — and surprisingly accurate. This exercise bypasses your brain\'s shortcuts and forces real observation.'},
      {title:'5-Object Still Life', desc:'Arrange 5 objects from your desk or kitchen on a table. Spend 20 minutes drawing what you actually see — not what you think things look like. Notice where light and shadow fall.'},
    ],
    careers:{ roles:['Illustrator','Concept Artist','Graphic Novelist','Tattoo Artist','Character Designer','Art Director','Storyboard Artist'], desc:'Skilled illustrators work in publishing, animation, gaming, and advertising. Many build freelance careers on platforms like Behance or Instagram. Concept artists are in high demand at game studios and film companies. Tattoo artists who develop a distinctive drawing style often have multi-year waiting lists.' },
    project:{ num:'CHALLENGE 01', title:'CONTOUR\nDRAWING', desc:'The fastest way to improve your drawing is to stop thinking and start seeing.', ccIcon:'✏️', ccType:'Observational Drawing', ccBody:'A blind contour drawing means your pen <strong>never leaves the paper and your eyes never leave the subject</strong> — you don\'t look at the page at all. Your hand follows your eye\'s journey across the object. The result looks wrong. The process teaches you everything.', hasAnim:false, chTag:'✏️ DRAW', tips:[{i:'🐢',t:'Slower is always better — let your eye lead your hand'},{i:'🚫',t:'Do not peek at the paper — the discomfort is the point'},{i:'🔁',t:'Do 3 in a row and compare — your third will always be more confident'}], uploadEm:'✏️', reflect:'"What did you notice about your hand that you\'d never seen before?"', aiFeedback:'The <em>fluid, continuous quality</em> of your line already shows observational instinct. Many first-timers produce stiff, hesitant marks. Yours moved with the subject.<br><br>Next challenge: do the same exercise with a <em>houseplant or a shoe</em> — more complex edges will develop your eye further and faster than simple objects.', scores:[{label:'Observation',val:'9/10',pct:90,color:'#C084FC'},{label:'Line Confidence',val:'7/10',pct:70,color:'#F0C93A'},{label:'Patience',val:'8/10',pct:80,color:'#ACD8F0'}], ccTitle: "Draw Simple Objects", lessonTitle: "See Before You Draw", lessonParas: ["Most people say 'I can't draw' because they're trying to draw symbols instead of objects. When you draw a cup from memory, you draw a cup-symbol — a generic shape your brain stores for 'cup.' When you draw from observation — actually looking at a real cup — your drawing becomes specific, real, and interesting.", "The key skill in observational drawing is negative space: the space around and between objects. Instead of drawing the cup, draw the shape of the space next to the cup. This cognitive trick bypasses the symbol-making part of your brain and forces you to draw what you actually see."], tipTitle: "How to Draw From Observation", tipSteps: ["Set up your object in good, consistent light. Natural sidelight from a window works best.", "Before drawing, spend 2 minutes just looking. Where is the widest point? Where does it taper? What's the relationship between height and width?", "Start with light, loose marks — don't press hard. You're mapping the object, not committing to lines.", "Check proportions by holding your pencil at arm's length and using your thumb as a measuring guide.", "Draw the negative space around the object to check your proportions. If the negative space looks wrong, the positive shape is wrong too."], chTask: "Draw 3 simple objects from observation: something round, something with a handle, something with a straight edge.", chDetail: "Use pencil on paper. Each drawing should take at least 10 minutes. Spend more time looking than drawing.", tryItTime: "30–45 minutes", saveItText: "Photo of all 3 drawings on the same page or laid out together.", aiCriteria: ["Proportion accuracy", "Observational quality", "Line confidence"]}
  },

  dancing: {
    color:'#F472B6', textColor:'white', icon:'💃', tagline:'Your Body Already Knows',
    overview:`Dance is one of the oldest forms of human expression — it predates written language by thousands of years. <strong>Every culture on earth has developed its own forms of dance</strong>, which tells you something fundamental: moving your body to rhythm is wired into us. You don\'t need training to start. You need music and a willingness to stop caring what you look like for a few minutes.`,
    stats:[
      {num:'300M+', label:'People dance recreationally worldwide across all styles', color:'#F472B6'},
      {num:'76%', label:'Of dancers report significantly improved self-confidence within 3 months', color:'#F0C93A'},
      {num:'45%', label:'Better social connection reported by people who dance regularly vs. those who don\'t', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Kitchen Dance Session', desc:'Put on 3 songs you love and dance alone in your kitchen — no mirror, no choreography. Just let your body respond to the music. Notice which parts of the music your body wants to follow.'},
      {title:'Learn 8 Counts', desc:'Find a beginner tutorial for any style (salsa, hip-hop, contemporary) on YouTube. Learn just the first 8-count sequence. Repeat it until it lives in your body, not just your memory.'},
    ],
    careers:{ roles:['Dance Instructor','Choreographer','Performance Artist','Dance Therapist','Musical Theatre Performer','TikTok Creator','Fitness Dance Coach'], desc:'Dance instructors teach at studios, schools, gyms, or privately. Choreographers work in film, TV, music videos, and theatre. Dance therapy is a growing clinical field. Many dancers build social media careers through TikTok and YouTube with styles like hip-hop, contemporary, and Latin.' },
    project:{ num:'CHALLENGE 01', title:'MOVE TO\nTHE BEAT', desc:'Stop choreographing your body and start listening to the music instead.', ccIcon:'💃', ccType:'Rhythm & Expression', ccBody:'Musicality means your body <strong>responds to what it hears</strong> — the bass drop, the pause, the acceleration. Most beginners think about what their feet are doing. Experienced dancers listen to the music and let their body answer. Start with your feet, then let the music travel up through your whole body.', hasAnim:false, chTag:'💃 DANCE', tips:[{i:'🎵',t:'Start with a song at 90-120 BPM — the sweet spot for natural movement'},{i:'🪞',t:'No mirror for your first session — feel it before you watch it'},{i:'🔂',t:'Replay your favorite section 5 times in a row and let your body memorize it'}], uploadEm:'💃', reflect:'"Was there a moment when you stopped thinking and just moved?"', aiFeedback:'The <em>moment you described where everything clicked</em> — that\'s musicality activating. It\'s not something you can force; it arrives when you stop trying to control and start listening.<br><br>Next session: find that same moment again, but this time try a different song at a different tempo. See how your body adapts its language to the new music.', scores:[{label:'Rhythm',val:'8/10',pct:80,color:'#F472B6'},{label:'Expressiveness',val:'9/10',pct:90,color:'#F0C93A'},{label:'Confidence',val:'7/10',pct:70,color:'#ACD8F0'}], ccTitle: "Move With Rhythm", lessonTitle: "Your Body Already Knows How to Move", lessonParas: ["The block that most adults feel about dancing is not physical — it's psychological. Somewhere between childhood and adulthood, we started watching ourselves from the outside, and the joy of movement became self-consciousness. Your first task as a dancer is not to learn steps. It is to reconnect with movement as a natural human response to rhythm.", "The downbeat is the heartbeat of music — beat 1 of every measure. Finding the downbeat and moving your body in response to it is all dancing fundamentally is. Everything else — technique, style, steps — is built on that basic connection between music and body."], tipTitle: "Finding Your Rhythm", tipSteps: ["Put on a song with a clear, steady beat. Pop, R&B, and hip-hop work well for beginners.", "Start by clapping along with the beat — not the melody, the beat underneath everything. Find the pulse.", "Let your shoulders respond to the beat first — a small bob up and down. No one needs to watch this.", "Add your knees: let them soften on the beat. This is the foundation of almost every dance style.", "Once your upper body and knees are moving, let your feet respond naturally — small weight shifts side to side."], chTask: "Free-move to 3 different songs for 3 minutes each, focusing only on connecting to the beat.", chDetail: "No choreography, no steps to remember. Just find the beat and move. Do this alone if that helps you relax into it.", tryItTime: "15–20 minutes", saveItText: "Short video of yourself dancing to one of the three songs — at least 30 seconds.", aiCriteria: ["Beat connection", "Body freedom", "Musical response"]}
  },

  knitting: {
    color:'#A78BFA', textColor:'white', icon:'🧶', tagline:'Make Something With Your Hands',
    overview:`Knitting is one of the most meditative hobbies you can pick up — and one of the most underestimated. <strong>The rhythmic, repetitive motion of knitting activates the same brain regions as meditation</strong>, reducing cortisol and quieting anxious thought loops. It also produces something real and wearable at the end. A scarf. A hat. Eventually a sweater. All from a single continuous thread.`,
    stats:[
      {num:'50M+', label:'People knit or crochet regularly in the U.S. and Europe', color:'#A78BFA'},
      {num:'$4B', label:'Annual knitting and yarn industry market size in the U.S. alone', color:'#F0C93A'},
      {num:'34%', label:'Reduction in chronic pain perception reported by regular knitters', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Cast On & Knit', desc:'Learn to cast on 20 stitches and knit a 6-inch swatch of the basic knit stitch. Don\'t worry about tension or perfection — just get your hands moving through the rhythm.'},
      {title:'Finger Knitting', desc:'No needles needed: finger knit a small piece of fabric using chunky yarn. Loop yarn around your fingers and pull loops over each other. Make something at least 6 inches long.'},
    ],
    careers:{ roles:['Knitwear Designer','Yarn Dyer','Etsy Shop Owner','Knitting Teacher','Pattern Writer','Textile Artist','Craft Content Creator'], desc:'Knitters sell handmade goods on Etsy or at craft markets. Many design and sell original patterns on Ravelry or their own websites. Knitwear designers work with fashion brands. Yarn dyers sell hand-dyed yarn online. Many build large communities through YouTube, Instagram, or podcast.' },
    project:{ num:'CHALLENGE 01', title:'YOUR FIRST\nSWATCH', desc:'Every sweater in the world started with someone learning to make a single stitch.', ccIcon:'🧶', ccType:'Foundation Stitches', ccBody:'Knitting is built on two stitches: <strong>knit and purl</strong>. Every pattern in existence is just these two stitches combined in different sequences. Master the knit stitch first — it\'s a rhythmic 4-step loop. In, over, through, off. Repeat until it lives in your hands without thinking.', hasAnim:false, chTag:'🧶 KNIT', tips:[{i:'🎥',t:'YouTube: "VeryPink Knits" has the clearest beginner tutorials online'},{i:'🧵',t:'Chunky yarn on big needles — you\'ll see your progress immediately'},{i:'😤',t:'If you drop a stitch, don\'t panic — it can always be fixed or just left'}], uploadEm:'🧶', reflect:'"At what row did the rhythm click and your hands start moving without thinking?"', aiFeedback:'The <em>evenness in your tension</em> from row 10 onward shows your hands found the rhythm. The first 9 rows are always the learning tax — what comes after is the actual craft.<br><br>Next: try switching to purl stitch for 5 rows and then back to knit. The combination — stockinette — is the most iconic fabric in knitwear.', scores:[{label:'Tension Control',val:'7/10',pct:70,color:'#A78BFA'},{label:'Rhythm',val:'8/10',pct:80,color:'#F0C93A'},{label:'Focus',val:'9/10',pct:90,color:'#ACD8F0'}], ccTitle: "Cast On & First Rows", lessonTitle: "Two Needles, One Loop at a Time", lessonParas: ["Knitting is one of the most meditative crafts that exists. Once you find your rhythm, the repetitive motion of needle through loop, yarn over, pull through is genuinely calming. Studies show knitting has measurable effects on stress and anxiety comparable to meditation. But first you have to get through the learning curve.", "The long-tail cast on creates a clean, elastic edge that's used in most professional knitting. Once you've cast on, the knit stitch is all you need to create a fabric. A rectangle of knit stitches is called garter stitch — it's forgiving, lies flat, and is the foundation of almost everything you'll ever knit."], tipTitle: "Getting Your First Rows", tipSteps: ["For the long-tail cast on: make a slip knot, loop the yarn around your thumb and index finger. Your thumb creates the bottom of the stitch, your index finger creates the top.", "Hold the needles lightly — grip tension is the most common beginner problem. Tight grip creates tight stitches.", "For each knit stitch: needle in front of the left-hand stitch (from left to right), yarn over the right needle, pull through, slip the old stitch off.", "Count your stitches at the end of every row for the first few sessions. It's easy to accidentally add or drop stitches.", "If you drop a stitch, don't panic. A crochet hook can pick it back up row by row."], chTask: "Cast on 20 stitches and knit at least 10 rows of garter stitch.", chDetail: "Your first swatch doesn't need to be perfect — it needs to exist. Uneven tension, dropped stitches, accidental increases: all normal. Keep going.", tryItTime: "30–45 minutes", saveItText: "Photo of your garter stitch swatch — lay it flat for the photo.", aiCriteria: ["Stitch consistency", "Even tension", "Row completion"]}
  },

  journaling: {
    color:'#34D399', textColor:'#1A1A1A', icon:'📔', tagline:'Think On Paper',
    overview:`Journaling is the practice of <strong>thinking on paper</strong> — and it does something that thinking in your head cannot. When you write, you slow your thoughts down enough to actually examine them. Journaling has been used by philosophers, scientists, artists, and leaders throughout history as a tool for clarity, problem-solving, and self-understanding. You don\'t need a topic. You just need to start.`,
    stats:[
      {num:'68%', label:'Of regular journalers report significantly reduced anxiety levels', color:'#34D399'},
      {num:'15min', label:'Per day of expressive writing can measurably improve immune function', color:'#F0C93A'},
      {num:'82%', label:'Of therapists recommend journaling as a complement to therapy', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Morning Pages', desc:'Write 3 pages of stream-of-consciousness every morning before looking at your phone. No editing, no rereading. Just write whatever\'s in your head — complaints, ideas, observations, fears. It clears the mental inbox.'},
      {title:'The Question Journal', desc:'Each evening, write down one question you don\'t know the answer to. Then write for 10 minutes exploring it. The goal isn\'t to answer it — it\'s to think more carefully than you usually do.'},
    ],
    careers:{ roles:['Author','Memoirist','Essay Writer','Newsletter Creator','Therapist','Writing Coach','Retreat Facilitator'], desc:'Many published authors trace their work directly back to journaling habits. Substack writers and newsletter creators turn personal observation into paid audiences. Some journaling practitioners become writing coaches or run journaling workshops and retreats. The skills transfer to almost every form of professional writing.' },
    project:{ num:'CHALLENGE 01', title:'MORNING\nPAGES', desc:'Three pages. No editing. No reading back. Just unfiltered thinking.', ccIcon:'📔', ccType:'Expressive Writing', ccBody:'Morning Pages, developed by Julia Cameron, is the practice of writing <strong>three longhand pages of anything</strong> immediately after waking — before coffee, before phone, before anything. You\'re not writing for quality. You\'re draining the mental static so your real thinking can begin.', hasAnim:false, chTag:'📔 WRITE', tips:[{i:'📵',t:'Phone face-down or in another room — this is the one rule that matters'},{i:'✋',t:'Write by hand, not typed — the slowness of handwriting is the point'},{i:'🚫',t:'Never read your morning pages on the same day you write them'}], uploadEm:'📔', reflect:'"What surprised you most about what came out on the page?"', aiFeedback:'The <em>shift in tone from your first page to your third</em> is something almost every morning pages writer notices — the first page is surface, the third is where you actually arrive. You found your way there.<br><br>Try this for 7 consecutive mornings. The cumulative effect is qualitatively different from any single session. Day 4 or 5 is usually when something unexpected happens.', scores:[{label:'Honesty',val:'9/10',pct:90,color:'#34D399'},{label:'Depth',val:'8/10',pct:80,color:'#F0C93A'},{label:'Consistency',val:'7/10',pct:70,color:'#ACD8F0'}], ccTitle: "Free Writing", lessonTitle: "The Page Doesn't Judge", lessonParas: ["Free writing is the most powerful tool for accessing your own thoughts. The rules are simple: write continuously for a set amount of time without stopping, editing, or lifting your pen. If you don't know what to write, write 'I don't know what to write' until something else comes. It will.", "What makes free writing so effective is that the internal critic — the voice that edits before you write, that says 'that sounds stupid' before the thought is even complete — cannot keep up with your hand when you write fast enough. Free writing at speed is faster than self-censorship. That's where your real thoughts live."], tipTitle: "How to Free Write", tipSteps: ["Set a timer for 10 minutes. Commit to not stopping until it goes off.", "Write by hand if possible — the speed constraint of handwriting is actually a feature, not a bug.", "Don't re-read as you write. Move forward only.", "If you get stuck, write the last word you wrote over and over until something new comes.", "Don't judge what comes out. Free writing is not a performance — it's an excavation."], chTask: "Complete three 10-minute free writes on three different days this week.", chDetail: "Each session: pick a word or question to start with, set a timer for 10 minutes, write without stopping. Day 1: what's on your mind. Day 2: a memory. Day 3: something you want.", tryItTime: "10 minutes × 3 sessions", saveItText: "Photo of your journal — open to any one of your three sessions.", aiCriteria: ["Continuity of writing", "Depth of thought", "Authentic voice"]}
  },

  woodworking: {
    color:'#92400E', textColor:'white', icon:'🪵', tagline:'Build Something That Lasts',
    overview:`Woodworking is the craft of <strong>turning raw material into something functional and beautiful</strong>. From a simple shelf to an elaborate piece of furniture, every woodworking project demands patience, precision, and problem-solving. It\'s one of the few hobbies where you end up with a physical object that could outlast you — and that\'s a profound feeling.`,
    stats:[
      {num:'20M+', label:'People practice woodworking as a hobby in the U.S. alone', color:'#92400E'},
      {num:'$10B+', label:'Annual market for hobby woodworking tools and materials', color:'#F0C93A'},
      {num:'91%', label:'Of woodworkers report a strong sense of accomplishment and pride in their work', color:'#ACD8F0'},
    ],
    prompts:[
      {title:'Build a Small Shelf', desc:'Using basic tools (saw, sandpaper, wood glue, nails), build a small wall shelf from pine boards available at any hardware store. Measure twice, cut once.'},
      {title:'Spoon Carving', desc:'Get a small block of soft wood (basswood or butternut) and a carving knife. Carve a simple wooden spoon. The process of removing what isn\'t a spoon is the whole lesson.'},
    ],
    careers:{ roles:['Furniture Maker','Cabinet Maker','Carpenter','Woodworking Teacher','YouTube Creator','Custom Furniture Designer','Set Builder'], desc:'Skilled woodworkers build furniture, cabinets, and architectural elements professionally. Custom furniture makers often command premium prices for bespoke pieces. Many build large YouTube audiences teaching techniques — some channels have millions of subscribers. Woodworking teachers run in-person studios and online courses.' },
    project:{ num:'CHALLENGE 01', title:'SAND &\nFINISH', desc:'Before you build anything, learn to feel the difference between rough and ready.', ccIcon:'🪵', ccTitle:'Wood Grain & Surface Prep', ccType:'Material Understanding', ccBody:'All woodworking begins with <strong>understanding your material</strong>. Wood has grain direction — cutting or sanding against it tears fibers. Always work with the grain. Sandpaper grit numbers tell you coarseness: start at 80 (rough), move to 120, finish at 220. Each step removes the scratches of the last.', hasAnim:false, chTag:'🪵 BUILD', chTask:'Find a rough piece of wood — a plank, a stick, anything. Sand it from 80 grit to 220 grit and finish with linseed oil. Feel how it transforms.', chDetail:'Hardware stores sell sandpaper in multi-grit packs. Wrap it around a wood block for even pressure. Always sand in the direction of the grain. After 220 grit, wipe with a clean cloth and apply a thin coat of linseed oil. Let dry overnight.', tips:[{i:'👆',t:'Close your eyes and feel the surface after each grit — your hands are better than your eyes here'},{i:'🌾',t:'Always sand with the grain — across the grain leaves visible scratches under finish'},{i:'💧',t:'Linseed oil brings out the wood\'s natural color and protects the surface'}], uploadEm:'🪵', reflect:'"What did you notice about the wood that you couldn\'t see before you touched it?"', aiFeedback:'The <em>grain pattern you documented</em> in your photo shows you\'re already developing material literacy — you can read wood. That intuition takes most woodworkers years to develop consciously.<br><br>Next: take a second piece of the same wood and sand it across the grain intentionally. See what happens. Understanding mistakes is how this craft teaches itself.', scores:[{label:'Patience',val:'9/10',pct:90,color:'#92400E'},{label:'Material Sense',val:'8/10',pct:80,color:'#F0C93A'},{label:'Craft Attention',val:'8/10',pct:80,color:'#ACD8F0'}] }
  },

  videography: {
    color:'#1E293B', textColor:'white', icon:'🎬', tagline:'Shoot & Edit',
    overview:`Videography is the practice of using a camera to tell stories — from a 60-second phone clip to a short film. It combines <strong>seeing (composition and light), capturing (camera technique), and shaping (editing)</strong>. Every frame is a decision. The gap between a forgettable video and a compelling one isn\'t equipment — it\'s intent. Learning to see before you shoot and to edit ruthlessly after is what separates creators from recorders.`,
    stats:[
      {num:'4B+', label:'People create and share video content monthly on smartphones', color:'#F0C93A'},
      {num:'90min', label:'Average daily video watched per person — there is room for yours in that feed', color:'#ACD8F0'},
      {num:'85%', label:'Of successful video creators started with just a phone and free editing software', color:'#E76F8A'},
    ],
    prompts:[
      {title:'Director Study', desc:'Watch two films by the same director in the same week. After each, write three observations about recurring visual choices, themes, or storytelling patterns. What is this director obsessed with?'},
      {title:'Rewatch & Analyze', desc:'Pick a film you\'ve already seen and love. Watch it again — but this time, pause every 10 minutes and note what the camera is doing and why. You will see it completely differently.'},
    ],
    careers:{ roles:['Film Critic','Screenwriter','Film Festival Programmer','Video Essayist','Cinematographer','Director','Film Teacher'], desc:'Film lovers become critics for publications, video essayists on YouTube (some with millions of subscribers), or work in programming for festivals and streaming platforms. Many screenwriters trace their craft to obsessive film watching and analysis. Film education and academic criticism are also established career paths.' },
    project:{ num:'CHALLENGE 01', title:'SHOOT 60\nSECONDS', desc:'One minute. One place. Cover it in wide, medium, and close-up shots.', ccIcon:'🎬', ccTitle:'Shot Coverage', ccType:'Videography Basics', ccBody:'Coverage means filming the same moment in multiple ways: a <strong>wide shot</strong> showing the full scene, a <strong>medium shot</strong> putting us in the action, and a <strong>close-up</strong> showing the detail. Together these three shots give you everything you need to edit. Without coverage, you\'re stuck with one angle forever.', hasAnim:false, chTag:'🎬 SHOOT', chTask:'Film a single subject or location using at least 3 types of shot: one wide, one medium, one close-up. Then edit it all into a 30-second clip.', chDetail:'Pick a place you see every day — your kitchen, your street, a park. Shoot for 10 minutes, then edit down to 30 seconds in CapCut or iMovie (both free). The edit is where you learn what you actually captured.', tips:[{i:'📱',t:'Lock your exposure before recording — tap and hold on iPhone or Android'},{i:'🎵',t:'Audio matters as much as image — listen before you press record'},{i:'✂️',t:'Your first edit will always be too long. Cut 30% on your second pass'}], uploadEm:'🎬', reflect:'"What surprised you most when you watched your footage back — what worked and what didn\'t?"', aiFeedback:'The wide-to-close progression in your clip shows real instinct for coverage — you understood that the story needs both context and detail. The edit rhythm is already working: you let each shot breathe before cutting, which is exactly what beginners miss.<br><br>Next: try re-cutting the same footage with only close-ups. Notice how the meaning changes.', scores:[{label:'Shot Coverage',val:'8/10',pct:80,color:'#F0C93A'},{label:'Edit Rhythm',val:'7/10',pct:70,color:'#ACD8F0'},{label:'Audio Quality',val:'7/10',pct:70,color:'#E76F8A'}] }
  },


  hiking: {
    color:'#4A7C59',
    textColor:'white',
    icon:'🥾',
    tagline:'See the World Slowly',
    overview:`Hiking is the oldest hobby humans have — <strong>moving through the natural world on foot</strong> with nowhere to be and no screen to check. It trains your eyes to notice: the color of lichen on stone, a hawk riding thermals, the way a trail changes character when clouds cover the sun. You come back different than you left.`,
    stats:[{
        num:'50M+',
        label:'Americans hike at least once per year',
        color:'#4A7C59'
      },{
        num:'28%',
        label:'Reduction in negative thinking after nature walks (Stanford)',
        color:'#ACD8F0'
      },{
        num:'1000+',
        label:'Designated trails in most US states — free to access',
        color:'#B8D96E'
      }],
    prompts:[{
        title:'Color Walk',
        desc:`Walk your route but only look for one color. Notice every instance — a red berry, rust on concrete, a painted door. The constraint reveals what the eye usually skips.`
      },{
        title:'Sit Spot',
        desc:`Find a spot outside and sit completely still for 10 minutes. Notice what appears once you stop moving — birds that land, insects that emerge. Stillness changes what the world shows you.`
      }],
    careers:{
      roles:['Trail Guide','Park Ranger','Outdoor Educator','Conservation Volunteer','Nature Photographer','Landscape Architect'],
      desc:`Hiking connects to conservation, wilderness therapy, outdoor education, and eco-tourism. Many find it a gateway to careers combining environmental science with public service.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'NATURE\nLOG',
      desc:'Turn one walk into a field journal of everything you notice.',
      ccIcon:'📓',
      ccType:'Attention',
      ccBody:`A nature log forces you to <strong>slow down and name things</strong>. You don't need to know what they are — description is enough. "Small yellow flower, 5 petals, grows in cracks." That written observation is the beginning of naturalist practice.`,
      chTag:'🥾 WALK',
      tips:[{
          i:'📱',
          t:`iNaturalist app identifies plants and animals from photos — free and remarkably accurate`
        },{
          i:'🌦️',
          t:`The same trail in different weather is a completely different trail. Walk it twice.`
        },{
          i:'👃',
          t:`Smell is the most underused sense on a hike. Stop and notice 3 distinct smells.`
        }],
      reflect:`"What did you notice on this walk that you've walked past a hundred times before?"`,
      aiFeedback:`Beginning to name and record what you see changes your relationship with the landscape. The world gets more detailed the more attention you bring.<br><br>Try the same walk at a different time of day. Dawn and dusk reveal entirely different wildlife.`,
      scores:[{
          label:'Observation',
          val:'9/10',
          pct:90,
          color:'#4A7C59'
        },{
          label:'Curiosity',
          val:'8/10',
          pct:80,
          color:'#ACD8F0'
        },{
          label:'Presence',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }], ccTitle: "Nature Observation Walk", lessonTitle: "Walking Slowly Is Its Own Skill", lessonParas: ["Most people hike to get somewhere. The best hikers hike to notice things. Slowing down on trail is harder than it sounds — our default pace is automatic, habitual, purposeful. A nature observation walk is the opposite: it is deliberate, curious, and unhurried.", "On this first hike, your goal is not mileage. It's observation. Stop when something catches your eye. Crouch down to look at a moss-covered rock. Listen to the difference between wind through pine needles versus through broad leaves. Your trail log is your proof of attention."], tipTitle: "How to Walk for Observation", tipSteps: ["Leave your earbuds behind. Sound is half of what nature has to offer.", "Stop at least once every 5 minutes — not to rest, but to look and listen.", "Use all five senses: touch the bark of a tree, smell the soil after water hits it, listen for the difference between bird species.", "Take one photo of something beautiful or unusual every 10 minutes. This creates a visual record of your attention.", "Note the light: morning light is golden and directional; midday light is flat; golden hour light is everything."], chTask: "Complete a 1–2 hour nature observation walk and document at least 8 observations.", chDetail: "Observations can be anything: a sound, a smell, a texture, an animal, a plant, a quality of light. Write them as they happen, not at the end.", tryItTime: "1–2 hours", saveItText: "Your 3 favorite photos from the hike — things you found beautiful or surprising.", aiCriteria: ["Observation variety", "Sensory range", "Attentiveness"]}
  },
  interior: {
    color:'#C4956A',
    textColor:'white',
    icon:'🛋️',
    tagline:'Shape the Space You Live In',
    overview:`Interior decorating is <strong>applied visual thinking</strong> — using color, proportion, light, and texture to make a space feel the way you want it to feel. The best rooms aren't expensive — they're intentional. Understanding why certain spaces make you calm or energized gives you a tool you'll use every day.`,
    stats:[{
        num:'72%',
        label:`Of people say their home environment significantly affects their mood`,
        color:'#C4956A'
      },{
        num:'1:3',
        label:`Rule of odds — odd numbers of objects feel more natural than even`,
        color:'#ACD8F0'
      },{
        num:'$0',
        label:`Cost of rearranging what you already own — often the biggest transformation`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'One Room, One Problem',
        desc:`Pick one room. Identify the single thing that bothers you most. Fix only that. Focused changes are more transformative than scattered ones.`
      },{
        title:'The Edit',
        desc:`Remove 5 things from a room and live without them for a week. If you don't miss them, they shouldn't be there. Subtracting is often more powerful than adding.`
      }],
    careers:{
      roles:['Interior Designer','Home Stager','Visual Merchandiser','Set Designer','Color Consultant','Furniture Buyer'],
      desc:`Interior design spans residential, commercial, hospitality, and retail. Entry points include home staging, rental styling, and social media — many start by photographing their own spaces.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'THE\nMOOD\nBOARD',
      desc:'Design starts before you buy a single thing.',
      ccIcon:'🎨',
      ccTitle:'Visual Curation',
      ccType:'Design Process',
      ccBody:`A mood board <strong>externalizes a feeling</strong> before translating it into objects. It prevents expensive mistakes by letting you test combinations of color, texture, and proportion before committing. Every professional designer starts here — not in the store.`,
      chTag:'🛋️ DESIGN',
      chTask:`Create a mood board (physical or on Canva) for one room. Include: 3 paint colors, 2 furniture references, 2 texture swatches, 1 lighting idea, 1 piece of art.`,
      chDetail:`Pull images from Pinterest or magazines. Lay them together and ask: do they feel like the same room? Coherence means palette, texture weight, and style all belong to the same visual world.`,
      tips:[{
          i:'📌',
          t:`Pinterest board first — save without editing, then edit down ruthlessly`
        },{
          i:'🌞',
          t:`Light changes everything. Photograph your room at different times of day before choosing paint`
        },{
          i:'💡',
          t:`Warm bulbs (2700K) make everything feel more expensive. Cheapest upgrade in any room.`
        }],
      reflect:`"What feeling were you trying to create? Does the board actually produce that feeling?"`,
      aiFeedback:`The mood board reveals your visual instincts before you start editing yourself. The coherence of your choices shows a genuine sense of what the space wants to become.<br><br>Walk around your actual room with the mood board. Point to everything that doesn't belong.`,
      scores:[{
          label:'Visual Coherence',
          val:'8/10',
          pct:80,
          color:'#C4956A'
        },{
          label:'Curation',
          val:'9/10',
          pct:90,
          color:'#ACD8F0'
        },{
          label:'Intention',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }]
    }
  },
  fashion: {
    color:'#2D2D2D',
    textColor:'white',
    icon:'👗',
    tagline:'Dress With Intention',
    overview:`Fashion styling is <strong>visual storytelling through clothing</strong> — the deliberate composition of color, proportion, texture, and silhouette into a point of view. It's not about spending money or following trends. The most interesting dressers understand the rules well enough to break them intentionally.`,
    stats:[{
        num:'80%',
        label:`Of what we own gets worn only 20% of the time — the 80/20 wardrobe problem`,
        color:'#E0C080'
      },{
        num:'7',
        label:`Core neutral pieces that form the foundation of any functional wardrobe`,
        color:'#ACD8F0'
      },{
        num:'30',
        label:'Wears minimum before a piece pays for its environmental cost',
        color:'#B8D96E'
      }],
    prompts:[{
        title:'The 10-Item Wardrobe',
        desc:`Pull your 10 most-worn pieces. Style those 10 in as many combinations as you can. Count the combinations — usually more than people expect.`
      },{
        title:'Color Theory Outfit',
        desc:`Build an outfit using only analogous colors (next to each other on the wheel: blue/green/teal). Analogous palettes are naturally harmonious.`
      }],
    careers:{
      roles:['Personal Stylist','Fashion Editor','Wardrobe Consultant','Visual Merchandiser','Fashion Creator','Costume Designer'],
      desc:`Styling careers range from editorial to personal to commercial. Instagram and TikTok have made personal branding a legitimate entry point for many working stylists.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'THE\nWARDROBE\nAUDIT',
      desc:`Before you can dress better, you need to see what you actually own.`,
      ccIcon:'👗',
      ccTitle:'Wardrobe Analysis',
      ccType:'Curation',
      ccBody:`Most wardrobes contain <strong>3 wardrobes mixed together</strong>: clothes for who you are now, clothes from who you used to be, and aspirational clothes for who you think you should be. Separating these three is the most clarifying exercise in personal style.`,
      chTag:'👗 AUDIT',
      chTask:`Empty your wardrobe onto your bed. Try on everything. Sort into 3 piles: Wear Now, Not Sure, Never. Photograph the Wear Now pile laid flat. Look at what you actually like.`,
      chDetail:`Wear Now: fits, feels right, you reach for it. Not Sure: needs alteration or you're holding on to the idea of it. Never: not worn in a year. The Wear Now pile is your actual style.`,
      tips:[{
          i:'📸',
          t:`Photograph the full Wear Now pile together. You'll see the color palette of your actual taste.`
        },{
          i:'✂️',
          t:`Alteration is magic. A $15 hem on trousers you never wear makes them the pair you always reach for.`
        },{
          i:'🔄',
          t:`The Not Sure pile: if it doesn't spark certainty in 30 days, donate it.`
        }],
      reflect:`"What does your Wear Now pile say about who you actually are versus who you think you should dress as?"`,
      aiFeedback:`The wardrobe audit is the most honest mirror most people ever hold up to themselves. The Wear Now pile shows your actual aesthetic — the gap between that and your aspiration is where style work begins.<br><br>Count the colors in your Wear Now pile. You likely have a 2-3 color palette you return to instinctively.`,
      scores:[{
          label:'Self-Knowledge',
          val:'9/10',
          pct:90,
          color:'#E0C080'
        },{
          label:'Curation',
          val:'8/10',
          pct:80,
          color:'#ACD8F0'
        },{
          label:'Honesty',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }]
    }
  },
  ai: {
    color:'#0F172A',
    textColor:'white',
    icon:'🤖',
    tagline:'Think With the Machine',
    overview:`AI prompt engineering is the art of <strong>communicating with intelligence you didn't build</strong>. A well-crafted prompt is the difference between a generic response and genuinely useful output. The skill is partly linguistic, partly logical, and partly psychological — it's the most leveraged communication skill of the next decade.`,
    stats:[{
        num:'10x',
        label:`Output quality difference between average and well-crafted prompts — same model`,
        color:'#6366F1'
      },{
        num:'1M+',
        label:`Context window tokens in frontier models — equivalent to a full novel`,
        color:'#ACD8F0'
      },{
        num:'Free',
        label:`Claude, ChatGPT, Gemini all have free tiers capable of extraordinary work with good prompts`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'The Role Prompt',
        desc:`Give the AI a role before asking your question: "You are a skeptical editor who finds logical gaps..." Compare the output to the same question without a role. Usually dramatic.`
      },{
        title:'Chain of Thought',
        desc:`Add "Think step by step" to any complex request. Models that reason explicitly make fewer errors and produce more defensible answers.`
      }],
    careers:{
      roles:['Prompt Engineer','AI Product Manager','LLM Specialist','AI Strategist','Automation Consultant','AI Educator'],
      desc:`Prompt engineering has evolved from curiosity to core professional skill. Every knowledge worker who learns this gains significant leverage over those who don't.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'PROMPT\nVS\nPROMPT',
      desc:`The same request, rewritten three ways. The difference will surprise you.`,
      ccIcon:'💬',
      ccTitle:'Prompt Architecture',
      ccType:'Communication',
      ccBody:`A prompt has four components: <strong>Role</strong> (who the AI should be), <strong>Context</strong> (what it needs to know), <strong>Task</strong> (what you want), and <strong>Format</strong> (how you want the output). Most people only use Task. Using all four produces dramatically better results.`,
      chTag:'🤖 PROMPT',
      chTask:`Write the same request 3 ways: (1) bare request, (2) with role + context, (3) with role + context + format + constraints. Run all three and compare side by side.`,
      chDetail:`Bare: "Write a cover letter." Structured: "You are an experienced hiring manager. I am a recent graduate. Write a cover letter under 250 words that leads with impact and avoids clichés. Do not mention 'passion'."`,
      tips:[{
          i:'🎭',
          t:`Role assignment is the single highest-leverage prompt technique. Always define who the AI is.`
        },{
          i:'📋',
          t:`Format constraints prevent the AI's tendency to overexplain. Word counts and structure help.`
        },{
          i:'🔁',
          t:`Treat the first response as a draft. Follow up: "What's the weakest part of this?" and revise.`
        }],
      reflect:`"What was the biggest quality gap between your 3 prompts? What specifically made the difference?"`,
      aiFeedback:`The gap between your structured and bare prompts shows the core truth of this skill: the model is capable of much more than most users access. You've seen the mechanism — now apply it to every high-stakes request.<br><br>Build a reusable "meta-prompt" for your important sessions: your context, preferences, and what you want the AI to always and never do.`,
      scores:[{
          label:'Prompt Structure',
          val:'8/10',
          pct:80,
          color:'#6366F1'
        },{
          label:'Specificity',
          val:'9/10',
          pct:90,
          color:'#ACD8F0'
        },{
          label:'Iteration',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }]
    }
  },
  gaming: {
    color:'#1E1B4B',
    textColor:'white',
    icon:'🎲',
    tagline:'Play With Intention',
    overview:`Strategic gaming — board games, card games, tabletop RPGs — is <strong>applied decision-making under constraints</strong>. The best games teach probabilistic thinking, resource management, opponent modeling, and the difference between good decisions and lucky outcomes. Games are a laboratory for the mind.`,
    stats:[{
        num:'90M',
        label:`Adults play board games regularly in the US — hobby doubled since 2010`,
        color:'#7C3AED'
      },{
        num:'35%',
        label:`Of regular gamers report improved problem-solving ability at work`,
        color:'#ACD8F0'
      },{
        num:'$20',
        label:`Average cost of an excellent entry-level strategy game — cheapest hobby per hour`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'Post-Game Debrief',
        desc:`After any game: what decision most affected the outcome? What would you do differently? What did your opponent do that surprised you?`
      },{
        title:'Play the Player',
        desc:`In your next multiplayer game, focus on reading opponents over optimal strategy. Their moves reveal their plan and fears. Strategic games are psychology first.`
      }],
    careers:{
      roles:['Game Designer','Esports Coach','Tabletop Publisher','Rules Writer','Game Theory Researcher','Community Manager'],
      desc:`Strategic gaming skills transfer to finance, product management, and game design. Many careers reward exactly what games train: probabilistic thinking, resource allocation, opponent modeling.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'LEARN ONE\nDEEPLY',
      desc:`Pick one game and understand it at a level most players never reach.`,
      ccIcon:'🎲',
      ccTitle:'Deep Study',
      ccType:'Strategy',
      ccBody:`Most players learn rules and then play. <strong>Students of the game</strong> learn rules, then study opening principles, mid-game decisions, and endgame technique. The difference between casual and strategic play is not talent — it is willingness to study failure.`,
      chTag:'🎲 PLAY',
      chTask:`Play one strategy game 5 times this week. After each game, write one thing you did wrong and one thing you'd change.`,
      chDetail:`Start with Chess.com (free) if you don't own a board game. Play 5 games at 10 min per side. After each: click Analysis and let the engine show your mistake. Write the pattern — not the move, but the type of error.`,
      tips:[{
          i:'🔬',
          t:`Analyze losses more than wins — winning teaches you less about where you're weak`
        },{
          i:'📺',
          t:`YouTube channels for your specific game are the fastest path to improvement`
        },{
          i:'🤝',
          t:`Playing against people slightly better than you is the optimal growth condition`
        }],
      reflect:`"What type of mistake did you keep making? Is that a pattern in how you make decisions generally?"`,
      aiFeedback:`The commitment to 5 games combined with post-game reflection separates improving players from those who plateau. Your error log shows pattern recognition developing.<br><br>Take your most common error type and study 3 YouTube examples of that exact mistake.`,
      scores:[{
          label:'Strategic Thinking',
          val:'8/10',
          pct:80,
          color:'#7C3AED'
        },{
          label:'Self-Analysis',
          val:'9/10',
          pct:90,
          color:'#ACD8F0'
        },{
          label:'Consistency',
          val:'7/10',
          pct:70,
          color:'#B8D96E'
        }]
    }
  },
  travel: {
    color:'#0C4A6E',
    textColor:'white',
    icon:'✈️',
    tagline:'Understand the World Firsthand',
    overview:`Travel as a hobby isn't about destinations — it's about <strong>deliberate cultural curiosity</strong>. The traveler who eats where locals eat, takes local transit, and learns 20 words understands more about a place than someone in a resort for two weeks. Travel is the practice of noticing how other people have solved the problems of being alive.`,
    stats:[{
        num:'195',
        label:`Countries in the world — each with distinct food, language, architecture, and customs`,
        color:'#0EA5E9'
      },{
        num:'6500',
        label:`Languages spoken worldwide — each a different way of structuring reality`,
        color:'#ACD8F0'
      },{
        num:'40%',
        label:`Of US travelers report a meaningful worldview change after international travel`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'Local for a Day',
        desc:`In any city — even your own — spend one day doing only what locals do. No tourist sites. Eat where workers eat lunch. Take the bus. Notice what the city looks like from that angle.`
      },{
        title:'One Neighborhood, Deep',
        desc:`Pick one neighborhood and learn it completely: history, architecture, best 3 food spots, main cultural institution. Deep knowledge of one place teaches more than surface knowledge of ten.`
      }],
    careers:{
      roles:['Travel Writer','Tour Guide','Hospitality Manager','Cultural Liaison','Language Teacher Abroad','International Aid Worker'],
      desc:`Travel skills — cultural fluency, navigating uncertainty — transfer to international business, diplomacy, journalism. Many travel careers start as blogs, vlogs, or freelance writing.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'THE\nCULTURE\nDOSS',
      desc:`Research a place you've never been as if you're going there next week.`,
      ccIcon:'🗺️',
      ccTitle:'Cultural Research',
      ccType:'Immersion',
      ccBody:`Deep travel starts before the trip. Understanding a place's <strong>history, food culture, social norms, and language basics</strong> transforms a visit from tourism to experience. The traveler who knows why a city is built the way it is sees something invisible to the tourist beside them.`,
      chTag:'✈️ RESEARCH',
      chTask:`Pick a country you've never visited. Spend 2 hours: research 3 pivotal history events, 3 dishes and their meaning, 3 social norms tourists get wrong, and learn 20 basic phrases.`,
      chDetail:`Sources: Rick Steves for Europe, Lonely Planet forums anywhere, local subreddits for ground truth. Language: greetings, thank you, excuse me, numbers 1-10, "do you speak English?"`,
      tips:[{
          i:'🍜',
          t:`Food is the fastest gateway to cultural understanding. Learn what people eat for breakfast.`
        },{
          i:'🗣️',
          t:`Learning even 5 words in the local language changes how locals receive you`
        },{
          i:'📖',
          t:`Read one novel set in the country before you go. Fiction gives emotional geography guidebooks miss.`
        }],
      reflect:`"What did you learn that genuinely surprised you? What assumption turned out to be wrong?"`,
      aiFeedback:`Cultural research before travel turns a visit into an experience. The gaps between your assumptions and your findings are where learning lives.<br><br>Find someone from that culture on Tandem or HelloTalk and have a 20-minute conversation. Ground-truth testing your research is its own education.`,
      scores:[{
          label:'Research Depth',
          val:'8/10',
          pct:80,
          color:'#0EA5E9'
        },{
          label:'Cultural Empathy',
          val:'9/10',
          pct:90,
          color:'#ACD8F0'
        },{
          label:'Preparation',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }]
    }
  },
  streetphoto: {
    color:'#18181B',
    textColor:'white',
    icon:'📷',
    tagline:'The Street Is Your Studio',
    overview:`Street photography is <strong>documentary art made in public space</strong> — the practice of finding pictures in the unposed world. The best street photographers aren't capturing what's there; they're revealing what everyone walks past. It requires technical skill, social confidence, and the ability to see a frame before it disappears.`,
    stats:[{
        num:'1/125',
        label:`Typical shutter speed for sharp street shots — fast enough to freeze human movement`,
        color:'#A1A1AA'
      },{
        num:'35mm',
        label:`The classic street photography focal length — wide enough for context, tight for intimacy`,
        color:'#ACD8F0'
      },{
        num:'Legal',
        label:`Street photography of people in public spaces is legal in most countries including the US`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'One Block, One Hour',
        desc:`Stand on one busy block for an entire hour without moving. Learn the light, the patterns, when people cluster. Then start shooting. Working a small area deeply beats covering more ground.`
      },{
        title:'The Shadow Hunt',
        desc:`Go out at golden hour hunting shadows. Wait for a person to walk through geometric shadow shapes. The geometry of shadow is a street photography obsession for good reason.`
      }],
    careers:{
      roles:['Documentary Photographer','Photojournalist','Editorial Photographer','Fine Art Photographer','Social Media Photographer','Exhibition Artist'],
      desc:`Street photography is both fine art and journalism — gallery exhibitions, editorial commissions, book deals, and photojournalism. Instagram has created a new economy for photographers with strong personal aesthetics.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'ZONE\nFOCUS',
      desc:`Prefocus your camera and let moments come to you instead of chasing them.`,
      ccIcon:'📷',
      ccTitle:'Zone Focusing',
      ccType:'Technique',
      ccBody:`Zone focusing — setting focus to a fixed distance — lets you <strong>shoot without autofocus delay</strong>. At f/8 focused to 2 meters, everything from 1.5 to 3 meters is sharp. React at human speed, not camera speed.`,
      chTag:'📷 SHOOT',
      chTask:`Set your camera or phone to manual focus at ~2m. Shoot for 30 minutes on a busy street without changing focus. Try shooting from hip level without looking through the viewfinder.`,
      chDetail:`Smartphone: use Halide (iOS) or Manual Camera (Android). Set focus lock to 2m. Shoot from hip — this perspective is less intimidating and produces unexpected framing.`,
      tips:[{
          i:'😊',
          t:`Smile before you shoot someone — most people relax. Apologetic body language creates problems.`
        },{
          i:'🏙️',
          t:`Markets, transit hubs, and festivals are the richest environments for new street photographers`
        },{
          i:'📐',
          t:`Watch for geometric backgrounds and wait for a person to enter the frame`
        }],
      reflect:`"Which shot surprised you most — the one you planned for or the one you caught by accident?"`,
      aiFeedback:`Zone focusing forces a different relationship with time — you stop waiting for the perfect moment and start being present to what's already happening. The accidental shots are usually the most interesting: that's the system working.<br><br>Print your 3 best frames at 4x6. A physical print teaches things a screen never does.`,
      scores:[{
          label:'Instinct',
          val:'8/10',
          pct:80,
          color:'#A1A1AA'
        },{
          label:'Composition',
          val:'8/10',
          pct:80,
          color:'#ACD8F0'
        },{
          label:'Presence',
          val:'9/10',
          pct:90,
          color:'#B8D96E'
        }]
    }
  },
  sneakers: {
    color:'#FF5733',
    textColor:'white',
    icon:'👟',
    tagline:'Turn a Shoe Into a Canvas',
    overview:`Sneaker customization is <strong>wearable art at the intersection of fashion, craft, and culture</strong>. A painter works on canvas. A customizer works on foam, leather, and mesh — surfaces that flex and get worn into the world. The community spans bedroom artists who repaint thrift-store finds to professionals whose work sells at auction.`,
    stats:[{
        num:'$10B+',
        label:`Global sneaker resale market — custom work commands significant premiums`,
        color:'#FF5733'
      },{
        num:'$30',
        label:`Approximate cost to start customizing: Angelus paints, brushes, finisher`,
        color:'#ACD8F0'
      },{
        num:'3rd',
        label:`Most customizers say their 3rd pair is when they found their style`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'Repaint a Beater',
        desc:`Find the ugliest, most scuffed pair at a thrift store (under $5). Practice prep, paint layers, and finish on something you don't care about. Safest first canvas.`
      },{
        title:'Reference Hunt',
        desc:`Find 3 customs you admire. For each, identify specifically what makes it work: the palette, the motif, the balance between painted and unpainted areas.`
      }],
    careers:{
      roles:['Sneaker Customizer','Streetwear Designer','Brand Collaborator','Restoration Specialist','Resell Arbitrageur','Sneaker Content Creator'],
      desc:`Custom sneaker work has moved from subculture to commercial. Brands commission customs for campaigns, athletes commission personal pairs, collectors pay premiums. Instagram is the primary gallery and client acquisition tool.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'THE\nFIRST\nPAIR',
      desc:'Prep, paint, and finish one pair from start to wearable.',
      ccIcon:'👟',
      ccTitle:'Custom Technique',
      ccType:'Craft',
      ccBody:`The difference between custom work that lasts and work that peels: <strong>prep</strong>. Acetone removes the factory finish so paint bonds to material. Angelus leather paint + finisher is the industry standard — it flexes without cracking.`,
      chTag:'👟 CREATE',
      chTask:`Buy cheap all-white shoes or thrift a canvas pair. Clean with acetone. Sketch your concept. Apply Angelus paint in thin layers (5+ thin coats beats 2 thick). Seal with Angelus finisher.`,
      chDetail:`Supplies: Angelus paint ($4-6/color), acetone prep, soft brushes, masking tape, Angelus 2-Hard finisher. Each layer slightly translucent. Dry completely between coats. Heat gun accelerates drying.`,
      tips:[{
          i:'🧪',
          t:`Prep with acetone is non-negotiable. Paint without prep peels within weeks.`
        },{
          i:'🖌️',
          t:`5 thin coats beats 2 thick coats. Patience at this stage makes it last.`
        },{
          i:'🎨',
          t:`Angelus paints mix like acrylics. Mix custom colors before starting.`
        }],
      reflect:`"What would you do differently on the second pair? What did the process teach you?"`,
      aiFeedback:`Completing a first custom pair is the entry point to a craft community that rewards persistence over talent. The prep discipline you developed is exactly what separates lasting work from work that looks good in photos and falls apart in wear.<br><br>Post your first pair online. The custom community gives detailed, honest feedback that accelerates development.`,
      scores:[{
          label:'Prep Quality',
          val:'8/10',
          pct:80,
          color:'#FF5733'
        },{
          label:'Technique',
          val:'7/10',
          pct:70,
          color:'#ACD8F0'
        },{
          label:'Concept',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }]
    }
  },
  collectibles: {
    color:'#7C2D12',
    textColor:'white',
    icon:'🃏',
    tagline:'Own a Piece of What You Love',
    overview:`Collecting is <strong>curation as an art form</strong> — building objects that tell a story about what you value and why. The best collections aren't the biggest or most expensive; they're the most coherent. Sports cards, Funko Pops, vintage toys, coins — every category has its own economy, community, and expertise hierarchy, and depth of knowledge is always more valuable than breadth.`,
    stats:[{
        num:'$26B+',
        label:'Estimated value of the global trading card market',
        color:'#DC2626'
      },{
        num:'PSA 10',
        label:`Gem mint grade — the difference between a $20 card and a $2,000 card can be one crease`,
        color:'#ACD8F0'
      },{
        num:'1/1',
        label:`The most valuable collector phrase — a one-of-one card is the apex of any set`,
        color:'#B8D96E'
      }],
    prompts:[{
        title:'Theme Your Collection',
        desc:`Not "baseball cards" but "1989-1993 Ken Griffey Jr. rookies." A focused collection builds faster, displays better, and is easier to research.`
      },{
        title:'Learn the Grading Scale',
        desc:`Pull out your best piece and grade it honestly against PSA criteria. Understanding grading teaches what condition actually means and why it matters so much to value.`
      }],
    careers:{
      roles:['Auction Specialist','Grading Authenticator','Reseller','Collection Appraiser','Museum Curator','Collection Content Creator'],
      desc:`Deep collecting expertise leads to appraisal, authentication, and auction work. Many serious collectors monetize through reselling, YouTube documentation, or grading consulting.`
    },
    project:{
      num:'CHALLENGE 01',
      title:'GRADE\nYOUR\nBEST\nPIECE',
      desc:'Learn what your collection is actually worth — and why.',
      ccIcon:'🃏',
      ccTitle:'Condition Grading',
      ccType:'Authentication',
      ccBody:`A card graded <strong>PSA 10 (Gem Mint)</strong> can be worth 10-50x the same card graded PSA 7. Condition factors: centering, corners, edges, and surface. This is the vocabulary of every serious collector.`,
      chTag:'🃏 GRADE',
      chTask:`Pick your 3 best pieces. Grade each yourself on a 1-10 scale using PSA criteria. Research each on eBay completed listings to find what the same item sold for at your estimated grade.`,
      chDetail:`PSA 10: 60/40 centering or better, four sharp corners, clean edges, no print defects. Use a loupe or phone macro lens to examine corners. Compare to PSA population reports.`,
      tips:[{
          i:'🔍',
          t:`Phone macro lens ($10) reveals corner and surface condition invisible to the naked eye`
        },{
          i:'💰',
          t:`eBay completed listings (filter: sold) give real market value — ignore asking prices`
        },{
          i:'🧤',
          t:`Handle cards by edges only. Fingerprints are print defects under grading lights.`
        }],
      reflect:`"What was the gap between what you thought your piece was worth and what comparable sales showed?"`,
      aiFeedback:`The gap between perceived and actual condition is the education all serious collectors go through. Understanding why a crease affects value so dramatically changes how you handle, store, and acquire pieces.<br><br>Submit one piece for professional grading (PSA or Beckett). The process is the essential collector education.`,
      scores:[{
          label:'Grading Accuracy',
          val:'7/10',
          pct:70,
          color:'#DC2626'
        },{
          label:'Market Research',
          val:'8/10',
          pct:80,
          color:'#ACD8F0'
        },{
          label:'Knowledge',
          val:'8/10',
          pct:80,
          color:'#B8D96E'
        }]
    }
  },

  design: {
    color:'#00B4D8',textColor:'#0E0D0B',icon:'✏️',tagline:'Solve Beautifully',
    overview:`Design is the art of <strong>solving problems with intention</strong>. Whether it's a logo, a product, or a photograph of an object, design teaches you to see with purpose — every choice of color, shape, and space communicates something.`,
    stats:[
      {num:'95%',label:'Of first impressions are design-related',color:'#00B4D8'},
      {num:'200%',label:'More engagement for well-designed content',color:'#B8D96E'},
      {num:'#1',label:'Most in-demand creative skill globally',color:'#F0C93A'}
    ],
    prompts:[
      {title:'Product Photography',desc:'Photograph a handmade object as if it were a product for sale. Use natural light, clean background, and intentional framing.'},
      {title:'Visual Identity',desc:'Design a simple logo for something you love using only shapes and one color.'}
    ],
    careers:{
      roles:['Product Designer','Brand Designer','UX Designer','Art Director','Motion Designer','Graphic Designer'],
      desc:'Design spans every industry. Most designers start with one discipline and expand. Freelance work via Dribbble, Behance, and direct client outreach is the most accessible entry point.'
    },
    project:{
      num:'CHALLENGE 01',title:'PRODUCT\nSHOT',desc:'Photograph a handmade object like it costs $200.',
      ccIcon:'📐',ccTitle:'Composition & Light',ccType:'Visual Design',
      ccBody:`The difference between a cheap-looking photo and a premium one is <strong>negative space and light direction</strong>. Remove clutter. Use one window. Let the object breathe.`,
      chTag:'📸 SHOOT',chTask:'Set up a simple product shot of any handmade object. Use natural window light and a plain background.',
      chDetail:'Shoot 10 frames. Try different angles: straight-on, 45°, overhead. Compare them.',
      tips:[{i:'💡',t:'Overcast light through a window is your best free studio'},{i:'🎨',t:'Background color should complement, not compete'},{i:'📐',t:'Leave empty space — it makes the subject feel intentional'}],
      reflect:`'What surprised you about how the framing changed the feeling of the object?'`,
      aiFeedback:`You're learning to see like an art director. The light and negative space choices in your product shot show real design instinct.`,
      scores:[{label:'Composition',val:'7/10',pct:70,color:'#00B4D8'},{label:'Lighting',val:'7/10',pct:70,color:'#F0C93A'},{label:'Clarity',val:'8/10',pct:80,color:'#B8D96E'}]
    }
  }
};

// ── HOBBY CHAPTERS ───────────────────────────────────────────
const HOBBY_CHAPTERS = {"photography": [{"num": "CHALLENGE 02", "title": "GOLDEN\nHOUR", "desc": "The 60 minutes after sunrise and before sunset when light transforms everything.", "ccIcon": "🌅", "ccTitle": "Quality of Light", "ccType": "Lighting", "ccBody": "Soft, warm, directional light wraps subjects and creates <strong>long shadows</strong> that add depth. Direct midday sun is flat and harsh. Golden hour is roughly 3000K warm — it flatters faces, textures, and landscapes equally.", "chTag": "📸 SHOOT", "chTask": "Take 5 photos in the 30 minutes before sunset. Notice how light changes color and direction every few minutes.", "chDetail": "Point your camera at the same subject at 3pm then at golden hour. Look for side-lit textures: brick, bark, skin.", "tips": [{"i": "⏰", "t": "Set an alarm 45 min before sunset to get into position"}, {"i": "🔆", "t": "Expose for the highlights — let shadows go dark"}, {"i": "🌿", "t": "Backlit leaves glow like stained glass"}], "reflect": "\"What surprised you most about how light changed the mood?\"", "aiFeedback": "You're developing real sensitivity to light quality. The warmth in your golden hour shots shows you understand direction, not just brightness.<br><br>Try <em>backlighting</em> next — position your subject between you and the sun for a glowing rim effect.", "scores": [{"label": "Light Sensitivity", "val": "8/10", "pct": 80, "color": "#F0C93A"}, {"label": "Timing", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Mood", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "How Light Temperature Changes Everything", "lessonParas": ["Light is not just brightness — it has <strong>color and direction</strong>. Midday sun hits from above, creating flat, harsh shadows. Golden hour light comes from the side, wrapping subjects in warmth and revealing every texture.", "Color temperature is measured in Kelvin. Sunrise and sunset sit around 3000K — orange and intimate. Overcast daylight is 4500K — neutral and soft. Midday clear sky hits 6500K — cool and clinical. Each temperature creates a completely different mood.", "Once you can see color temperature, you'll never look at light the same way. A lamp next to a window becomes a study in contrast. A sunset becomes a tool."], "tipTitle": "Shoot the same subject twice — once at midday, once at golden hour.", "tipSteps": ["Set an alarm for 45 minutes before sunset.", "Find a simple subject: a doorway, a plant, someone's face.", "Photograph it at 3pm in flat daylight.", "Return at golden hour and shoot from the exact same spot.", "Compare side by side — note the shadow direction, warmth, and how the mood changes."], "tryItTime": "60 minutes across two sessions", "saveItText": "Save both comparison shots in sequence — same subject, different light."}, {"num": "CHALLENGE 03", "title": "TELL A\nSTORY", "desc": "Three photos that together say something no single image could.", "ccIcon": "🎞️", "ccTitle": "Photo Series", "ccType": "Storytelling", "ccBody": "Great photography is editing decisions — what to include, what to cut. A 3-photo series forces you to think about <strong>beginning, middle, end</strong>. Wide → medium → close is the sequence journalists use for a reason.", "chTag": "📸 CREATE", "chTask": "Shoot a 3-photo story about something in your daily life. Could be making coffee, a walk, your pet waking up.", "chDetail": "Wide (establishes place), medium (shows action), close-up (reveals detail). Each photo should make the viewer want to see the next one.", "tips": [{"i": "📖", "t": "Wide → Medium → Close is the journalist rule"}, {"i": "🔄", "t": "Tell the story forwards and backwards — both should work"}, {"i": "✂️", "t": "Delete 80% of what you shoot. The edit is the art."}], "reflect": "\"Which of your 3 photos is the weakest? What would make it stronger?\"", "aiFeedback": "Your eye for sequence is evident — you moved from establishing shot to intimate detail instinctively. That progression takes most photographers years to develop.<br><br>Now push the contrast between widest and closest shot. The bigger the visual jump, the more powerful the story.", "scores": [{"label": "Sequencing", "val": "8/10", "pct": 80, "color": "#F0C93A"}, {"label": "Story Clarity", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Detail Eye", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "Telling a Story Across Three Frames", "lessonParas": ["A single photo captures a moment. A series creates <strong>meaning</strong>. When images are placed in sequence, they guide the viewer through space, time, or emotion — something no single frame can do alone.", "Photojournalists use a three-shot structure: the wide (establishes place), the medium (shows the subject in context), and the close (reveals a detail only a camera would notice). This sequence gives viewers a complete experience.", "The hardest part isn't taking the photos — it's editing. For every great series, there are 40 images the photographer chose not to use."], "tipTitle": "Plan your three shots mentally before you lift the camera.", "tipSteps": ["Choose one subject, place, or event to document.", "Start wide — step back to establish the setting.", "Move closer for a medium shot of your subject in context.", "Get tight for a detail: hands, a texture, an expression.", "Edit down to exactly three images that feel like a complete story."], "tryItTime": "45–60 minutes", "saveItText": "Upload your three-photo series — arrange them in sequence before shooting."}], "painting": [{"num": "CHALLENGE 02", "title": "VALUE\nSTUDY", "desc": "Forget color for now. Light and dark are what make paintings feel real.", "ccIcon": "◐", "ccTitle": "Value Scale", "ccType": "Fundamentals", "ccBody": "Value — lightness or darkness — is more important than hue. A painting with <strong>strong value contrast</strong> reads clearly even in black and white. Most beginners make everything too similar in value, which creates muddy, flat work.", "chTag": "🎨 PAINT", "chTask": "Paint a simple object using only black and white mixed into 5 shades from pure white to pure black.", "chDetail": "Mix your 5 values first, then paint. Identify: highlight, light side, mid-tone, shadow side, cast shadow.", "tips": [{"i": "📷", "t": "Squint at your reference — squinting removes color and shows only value"}, {"i": "⚫", "t": "Your darkest dark should be darker than you think"}, {"i": "🔲", "t": "Cast shadows are often darker than the shadow on the object"}], "reflect": "\"Where did the form feel most three-dimensional?\"", "aiFeedback": "Your value range is already stronger than most beginners attempt. The transition from light to shadow shows you understand form, not just outline.<br><br>Squint constantly while painting next time. Chase the values.", "scores": [{"label": "Value Range", "val": "8/10", "pct": 80, "color": "#F0C93A"}, {"label": "Form Reading", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Control", "val": "7/10", "pct": 70, "color": "#B8D96E"}], "lessonTitle": "Why Value Matters More Than Color", "lessonParas": ["Value is the lightness or darkness of a color — and it is the single most powerful tool in painting. Two paintings with identical colors but different values can feel completely different. Strong value contrast creates drama; soft value gradients create harmony.", "Before professional artists mix color, they plan their <strong>value structure</strong>. They ask: where are the darkest darks? Where are the lightest lights? Everything else fills in between.", "A useful exercise: photograph your painting in black and white. If it reads well without color, your values are strong. If it looks flat, the values are too similar."], "tipTitle": "Squint at your reference. What disappears — shadows or midtones?", "tipSteps": ["Create a value scale from white to black in 5-7 steps using only one color.", "Identify the lightest area in your subject — this is your anchor.", "Identify the darkest area — these two points define your full range.", "Paint only in 3 values first: light, mid, dark. Add nuance after.", "Photograph in black and white to check whether your values read correctly."], "tryItTime": "45–60 minutes", "saveItText": "Photograph both your painting and a black-and-white version of it."}, {"num": "CHALLENGE 03", "title": "COLOR\nMIXING", "desc": "Why buying more colors makes you worse, and what to do instead.", "ccIcon": "🎨", "ccTitle": "Limited Palette", "ccType": "Color Theory", "ccBody": "Painters who use fewer colors produce <strong>more harmonious work</strong>. A 3-color primary palette (red, yellow, blue + white) can mix virtually every color. Harmony happens automatically.", "chTag": "🎨 MIX", "chTask": "Paint a simple landscape using only 3 colors + white. No green from the tube — mix it from yellow and blue.", "chDetail": "Primary palette: Cadmium Red, Cadmium Yellow, Ultramarine Blue, Titanium White.", "tips": [{"i": "🟡", "t": "Yellow + tiny blue = bright green. More blue = cooler"}, {"i": "🔴", "t": "Add complementary color to tone down — never add black"}, {"i": "⚪", "t": "Add white to tint. Never add black to darken."}], "reflect": "\"Which color mix surprised you most?\"", "aiFeedback": "Working with a limited palette pushed you to mix rather than grab. The color harmony is more sophisticated than work done with a full set.<br><br>Next time, make shadows cooler than lights by adding blue to your shadow mixes.", "scores": [{"label": "Color Harmony", "val": "9/10", "pct": 90, "color": "#F0C93A"}, {"label": "Mixing Skill", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Temperature", "val": "7/10", "pct": 70, "color": "#B8D96E"}], "lessonTitle": "The Power of Painting with Less", "lessonParas": ["Most beginners try to match colors exactly — and end up with muddy, over-mixed work. The counterintuitive secret: <strong>fewer colors make better paintings</strong>. A limited palette forces you to mix harmoniously because every color shares the same base.", "Many master painters worked with just four or five pigments. This limitation isn't a constraint — it's a system. When you limit your palette, colors automatically relate to each other because they're mixed from the same parent hues.", "A classic limited palette: one warm and one cool version of each primary — red, yellow, blue — plus white. Six colors. You can mix almost anything."], "tipTitle": "Choose three colors plus white. Commit to them for the whole painting.", "tipSteps": ["Select one warm red, one yellow, one blue, and white.", "Before starting, mix small test swatches: what happens when you combine all three?", "Mix a neutral gray from your three primaries — use it for shadows.", "Let color temperature guide your choices: warm in light areas, cool in shadow.", "Resist adding new colors. The constraint is the lesson."], "tryItTime": "60–90 minutes", "saveItText": "Photograph your palette alongside the finished painting to show your color choices."}], "writing": [{"num": "CHALLENGE 02", "title": "SHOW\nDON'T TELL", "desc": "The oldest rule in writing — and why almost everyone gets it wrong.", "ccIcon": "✍️", "ccTitle": "Concrete Detail", "ccType": "Technique", "ccBody": "Telling: <em>\"She was nervous.\"</em> Showing: <em>\"She kept checking the door.\"</em> Concrete details create <strong>images in the reader's mind</strong> instead of instructions about how to feel.", "chTag": "✍️ WRITE", "chTask": "Write one paragraph describing a person without using any emotion words. No happy, sad, nervous, angry. Show through action only.", "chDetail": "Pick an emotion. Ask: what does a person's body do when they feel this? Write those actions — not the emotion.", "tips": [{"i": "🔍", "t": "Replace every abstract word with a physical action or sensory detail"}, {"i": "🚪", "t": "\"She checked the door three times\" beats \"she was anxious\""}, {"i": "✂️", "t": "Cut any sentence that tells the reader how to feel"}], "reflect": "\"Which detail felt most alive? Why did that one work?\"", "aiFeedback": "You're learning to trust the reader, which is the hardest thing for new writers. The physical details you chose are specific and believable.<br><br>Write the same paragraph from a different character's point of view.", "scores": [{"label": "Specificity", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Restraint", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Imagery", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "The Difference Between Telling and Showing", "lessonParas": ["\"She was nervous\" tells the reader how to feel. \"She pressed her thumbnail into her palm until it left a white crescent\" makes them feel it. <strong>Concrete, specific details</strong> create experience rather than description.", "The brain responds to sensory language — what things look, sound, smell, feel, and taste like. Abstract words like 'beautiful,' 'sad,' or 'intense' require the reader to do all the imaginative work. Concrete details do it for them.", "Every time you write a vague word, ask: what does that actually look like? What's the specific physical thing? Replace the abstraction with the image."], "tipTitle": "Replace every adjective in your draft with a specific physical detail.", "tipSteps": ["Write two paragraphs about an ordinary moment — waiting in line, eating breakfast.", "Circle every abstract word: beautiful, sad, nervous, busy, etc.", "For each circled word, ask: what does this look/sound/feel like specifically?", "Rewrite the sentence with a concrete image instead of the abstract word.", "Read both versions aloud — notice which one you feel more than read."], "tryItTime": "30–45 minutes", "saveItText": "Copy your before/after paragraph — both versions — into the submission."}, {"num": "CHALLENGE 03", "title": "FIRST\nLINES", "desc": "You have one sentence to make someone read the next one.", "ccIcon": "📖", "ccTitle": "The Hook", "ccType": "Structure", "ccBody": "The best first lines <strong>create a question in the reader's mind</strong>. A great hook is a promise the rest of the piece pays off.", "chTag": "✍️ WRITE", "chTask": "Write 10 different first lines for the same story. Completely change the approach each time.", "chDetail": "After 10, pick your best 3 and ask: which creates the most urgent question? Which sounds most like your real voice?", "tips": [{"i": "❓", "t": "A good first line makes the reader ask a question they need answered"}, {"i": "🎭", "t": "Start in the middle of something — not before it"}, {"i": "🎤", "t": "Read aloud. The one that sounds most natural is usually the best"}], "reflect": "\"Which of your 10 first lines surprised you most?\"", "aiFeedback": "Writing 10 variations shows real discipline. Your strongest lines are specific about stakes without explaining them.<br><br>Take your best line and write the next three sentences.", "scores": [{"label": "Voice", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Hook Strength", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Originality", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "How to Start a Piece That Gets Read", "lessonParas": ["Every piece of writing earns the next sentence. The opening line has one job: make the reader need to read line two. The second line's job: make them need line three. Hooks aren't tricks — they're <strong>promises</strong> the rest of the piece must keep.", "The best opening lines create a question, a tension, or an image so specific it demands explanation. 'Call me Ishmael' is three words that raise a question: who is this person, and why does it matter what we call them?", "The single biggest mistake in first drafts is starting too early. Most writers begin three paragraphs before the real story starts. Find where the tension actually begins — and start there."], "tipTitle": "Write ten different opening lines for the same piece. Use the tenth.", "tipSteps": ["Choose a topic: a memory, an idea, a person, an event.", "Write ten different opening lines — start in different places: the beginning, the middle, the end.", "Try starting with: an action, a piece of dialogue, a question, a specific detail.", "Read each one aloud. Which one makes you want to keep reading?", "Use that line. Throw away the others."], "tryItTime": "30–45 minutes", "saveItText": "Submit your final first paragraph — and your list of 10 opening lines."}], "cooking": [{"num": "CHALLENGE 02", "title": "MASTER\nA SAUCE", "desc": "Master one sauce and you unlock a hundred dishes.", "ccIcon": "🍳", "ccTitle": "Mother Sauces", "ccType": "Technique", "ccBody": "Classical French cooking is built on 5 <strong>mother sauces</strong>. Béchamel alone gives you mac & cheese, lasagna, and gratin. The technique behind a sauce is worth more than any single recipe.", "chTag": "🍳 COOK", "chTask": "Make a béchamel from scratch: butter, flour, milk, salt, nutmeg. Use it in something.", "chDetail": "Equal parts butter and flour cooked (roux), then warm milk whisked in slowly. Whisk constantly. Season aggressively at the end.", "tips": [{"i": "🔥", "t": "Warm your milk before adding — cold milk to hot roux causes lumps"}, {"i": "🥣", "t": "Cook roux 2 min to remove raw flour taste"}, {"i": "🧂", "t": "Béchamel needs more salt than you think"}], "reflect": "\"Where did the texture go right or wrong? What would you adjust?\"", "aiFeedback": "You're beginning to understand cooking as chemistry with taste checkpoints.<br><br>Add cheese while the sauce is warm but off the heat — you just invented Mornay sauce.", "scores": [{"label": "Technique", "val": "8/10", "pct": 80, "color": "#F4A261"}, {"label": "Seasoning", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Texture", "val": "7/10", "pct": 70, "color": "#B8D96E"}], "lessonTitle": "The Five Foundations Everything Else Comes From", "lessonParas": ["French cuisine identified five <strong>mother sauces</strong> — foundational sauces from which hundreds of others are derived. Understanding even one changes how you cook. Béchamel becomes mac and cheese. Velouté becomes a pan sauce. Tomato sauce becomes everything.", "Each mother sauce teaches a core technique: making a roux, emulsifying fat, reducing stock. Once you can make one from memory, you understand the structure underneath a huge category of cooking.", "You don't need to memorize all five. Start with one. Make it enough times that you stop needing a recipe."], "tipTitle": "Make the sauce, then break it intentionally — learn what goes wrong.", "tipSteps": ["Choose one mother sauce to master: béchamel, velouté, espagnole, hollandaise, or tomato.", "Read the recipe once completely before starting.", "Cook it following the recipe precisely the first time.", "The second time, try intentionally over-cooking the roux to see how it affects flavor.", "Season at the end, not throughout — taste and understand what the sauce needs."], "tryItTime": "45–60 minutes", "saveItText": "Photograph your finished sauce in the pan, and the dish you served it with."}, {"num": "CHALLENGE 03", "title": "BUILD\nFLAVOR", "desc": "Why restaurant food tastes different — and how to close the gap.", "ccIcon": "🧄", "ccTitle": "Layering & Seasoning", "ccType": "Flavor", "ccBody": "Restaurants season at <strong>every step</strong>. Salt, fat, acid, and heat in balance make food taste complete. <strong>Acid</strong> (lemon, vinegar) brightens dishes and balances fat.", "chTag": "🍳 TASTE", "chTask": "Cook a dish you know well. Season at every step. Add acid at the very end. Taste before and after each addition.", "chDetail": "Season water, protein, sauce as it builds. Finish with lemon or vinegar off the heat.", "tips": [{"i": "🍋", "t": "A squeeze of lemon at the end brightens almost every savory dish"}, {"i": "🧂", "t": "If it tastes flat, try salt first, then acid"}, {"i": "🫒", "t": "A drizzle of quality olive oil at the end carries flavor"}], "reflect": "\"Which single step made the biggest difference?\"", "aiFeedback": "Seasoning at every step is a professional habit most home cooks never develop. You're training your palate.<br><br>Cook the same dish underseasoned on purpose, then fix it with only acid. Then only salt. Learning each tool separately gives you more control.", "scores": [{"label": "Palate Training", "val": "9/10", "pct": 90, "color": "#F4A261"}, {"label": "Technique", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Balance", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Building Depth Through Layering and Seasoning", "lessonParas": ["Professional cooking isn't about better ingredients — it's about <strong>building flavor in layers</strong>. Every time you add heat, salt, acid, or fat, you're making a decision about depth. Each layer changes what comes after.", "Salt doesn't just make things salty — it suppresses bitterness and amplifies every other flavor. Acid (lemon, vinegar) brightens and cuts through richness. Fat carries flavor compounds and creates mouthfeel. These three tools explain most of restaurant cooking.", "The best test of a dish: taste it before the last seasoning, then after. That gap is what layering creates."], "tipTitle": "Season at every stage — not just at the end.", "tipSteps": ["Choose a recipe you've made before so technique isn't the challenge.", "Season lightly at each stage: vegetables going in the pan, protein before searing, sauce before serving.", "Add one splash of acid near the end — lemon juice or vinegar — and taste the difference.", "Add fat last: a knob of butter, a drizzle of olive oil.", "Taste blind: close your eyes, eat a spoonful, and name what's missing."], "tryItTime": "45–75 minutes", "saveItText": "Photograph the dish plated — and write two sentences about what the layering achieved."}], "baking": [{"num": "CHALLENGE 02", "title": "THE EGG\nMYSTERY", "desc": "Why the same ingredient does completely different things in different recipes.", "ccIcon": "🥚", "ccTitle": "Egg Function", "ccType": "Science", "ccBody": "Eggs provide <strong>structure, leavening, moisture, and emulsification</strong>. Changing how you incorporate eggs changes the entire texture of the final product.", "chTag": "🥐 BAKE", "chTask": "Make two versions of the same muffin recipe: one mixing eggs gently, one whipping vigorously first. Compare.", "chDetail": "Gently folded = tender, dense. Whipped = lighter, open crumb.", "tips": [{"i": "🌡️", "t": "Room temperature eggs incorporate better than cold"}, {"i": "🥄", "t": "Overmixing after flour develops gluten — makes muffins tough"}, {"i": "🔬", "t": "Yolks alone = richer. Whites alone = lighter, drier"}], "reflect": "\"How much did technique change the final texture?\"", "aiFeedback": "Understanding why ingredients behave as they do separates bakers from recipe-followers. You're seeing baking as a system.<br><br>Try the same cookies with butter at different temperatures. Same recipe, completely different cookies.", "scores": [{"label": "Understanding", "val": "8/10", "pct": 80, "color": "#D4956A"}, {"label": "Observation", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Technique", "val": "7/10", "pct": 70, "color": "#B8D96E"}], "lessonTitle": "Why Eggs Change Everything You Bake", "lessonParas": ["Eggs do more work in baking than any other ingredient. They <strong>bind, leaven, enrich, and emulsify</strong> — sometimes all four in the same recipe. Understanding what eggs actually do lets you modify recipes with intention, not guesswork.", "Egg whites whip into foam because of their protein structure — they trap air. Yolks emulsify fat and water together because of lecithin. Whole eggs set when heated because proteins coagulate. Each part is a different tool.", "When a recipe says 'room temperature eggs,' it matters. Cold eggs can cause batters to break or baked goods to be dense. Temperature affects everything."], "tipTitle": "Bake the same recipe with whole eggs, then with just yolks — compare the results.", "tipSteps": ["Choose a simple cake or cookie recipe that uses whole eggs.", "Bake batch one as written.", "For batch two, substitute 2 yolks for each whole egg.", "Compare texture, color, and richness between the two batches.", "Note which you prefer and why — this is your data for future baking."], "tryItTime": "90 minutes (two batches)", "saveItText": "Photograph both batches side by side with a cross-section showing the crumb."}, {"num": "CHALLENGE 03", "title": "BREAD\nFROM\nSCRATCH", "desc": "Four ingredients. Infinite variations. One ancient skill.", "ccIcon": "🍞", "ccTitle": "Gluten Development", "ccType": "Bread", "ccBody": "Bread is flour, water, salt, yeast — and technique. <strong>Gluten</strong> forms when flour proteins hydrate and are worked. Kneading = developing. Resting = relaxing. Both matter equally.", "chTag": "🍞 BAKE", "chTask": "Make a no-knead bread. Mix ingredients, rest 12-18 hours, bake in a covered Dutch oven at 450°F.", "chDetail": "450g flour, 350g water, 9g salt, 1g instant yeast. Mix until shaggy. Cover. Wait 12-18h. Bake 20 min covered, 20-25 min uncovered.", "tips": [{"i": "⏱️", "t": "Time does the kneading. Longer fermentation = more flavor"}, {"i": "🫕", "t": "Dutch oven traps steam — keeps crust from setting too fast"}, {"i": "🌡️", "t": "Internal temp 200-210°F = done"}], "reflect": "\"What did the dough feel like at each stage?\"", "aiFeedback": "You learned that yeast is alive, time is an ingredient, and restraint produces better results.<br><br>Refrigerate the dough for 24-72 hours next time. Cold fermentation develops remarkable flavor.", "scores": [{"label": "Patience", "val": "9/10", "pct": 90, "color": "#D4956A"}, {"label": "Dough Feel", "val": "7/10", "pct": 70, "color": "#ACD8F0"}, {"label": "Result", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Understanding Gluten Changes How You Handle Dough", "lessonParas": ["Gluten is the protein network formed when flour meets water and is worked. It creates <strong>structure and chew</strong>. Too much gluten in a cake makes it tough. Too little in bread makes it crumble. The skill is controlling how much you develop.", "Mixing develops gluten. Resting relaxes it. Fat (butter, oil) shortens gluten strands — which is why shortcrust pastry is flaky rather than chewy. This is also why the recipe says 'do not overmix.'", "High-protein bread flour builds strong gluten — ideal for chewy loaves. Low-protein cake flour stays tender. The flour you choose is a decision about texture."], "tipTitle": "Mix one batch of dough until smooth, another until just combined — bake both.", "tipSteps": ["Use a simple biscuit or scone recipe.", "Make batch one: mix until the dough just comes together (underdeveloped).", "Make batch two: mix an extra 3 minutes until completely smooth (overdeveloped).", "Bake both and compare: which is flakier? Which is chewier? Which do you prefer?", "Apply this understanding to your next recipe — know when to stop mixing."], "tryItTime": "90 minutes (two batches)", "saveItText": "Photograph both baked results side by side with a cross-section."}], "yoga": [{"num": "CHALLENGE 02", "title": "BREATH\nWORK", "desc": "Yoga without breathwork is just stretching.", "ccIcon": "🌬️", "ccTitle": "Balance & Alignment", "ccType": "Breathwork", "ccBody": "Ujjayi breath — a soft oceanic sound made by constricting the throat — slows your nervous system, <strong>builds internal heat</strong>, and gives you something to return to when your mind wanders.", "chTag": "🧘 BREATHE", "chTask": "Hold Warrior II for 5 breaths on each side, then Tree Pose for 5 breaths on each side.", "chDetail": "Move slowly between poses. If Tree Pose feels unstable, keep your foot on your calf (below the knee) instead of your thigh.", "tips": [{"i": "👃", "t": "Always breathe through the nose"}, {"i": "🌊", "t": "Ujjayi: narrowing the back of the throat creates an ocean sound"}, {"i": "⏸️", "t": "If you hold your breath, back off 20% — too deep"}], "reflect": "\"Which side was more stable? Did your drishti help you balance?\"", "aiFeedback": "Bringing attention to breath is the shift from exercise to practice. Noticing where you held is the entire point.<br><br>Try a 5-minute Savasana focused only on the breath lengthening.", "scores": [{"label": "Joint alignment", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Balance stability", "val": "7/10", "pct": 70, "color": "#B8D96E"}, {"label": "Effort", "val": "9/10", "pct": 90, "color": "#6B4EFF"}], "lessonTitle": "Finding Your Line", "lessonParas": ["Balance is not something you have — it is something you find, over and over. In yoga, alignment means stacking your joints in a way that distributes effort evenly across your body. When your joints are well-aligned, poses become more sustainable and the risk of strain drops significantly.", "Today you'll explore two balance-focused poses: Warrior II and Tree Pose. Warrior II teaches you to root through your legs while opening across your chest. Tree Pose asks you to find a single point of focus — called a drishti — and let everything else settle around it."], "tipTitle": "Keys to Finding Balance", "tipSteps": ["Choose a drishti (fixed point to look at). Pick a spot on the wall at eye level — your eyes anchor your balance.", "In Warrior II: bend your front knee directly over your ankle (not past your toes). Spread your arms wide, relax your shoulders.", "In Tree Pose: press your foot into your thigh and your thigh back into your foot — that resistance creates stability.", "If you wobble, it's normal. Wobble is information. Notice which direction you lean and gently return to center.", "Hold each pose for 5 slow breaths before switching sides. Both sides matter equally."], "tryItTime": "15–20 minutes", "saveItText": "Take a photo of your best Tree Pose — front or side view works great.", "aiCriteria": ["Joint alignment", "Balance stability", "Intentional effort"]}, {"num": "CHALLENGE 03", "title": "BUILD\nA FLOW", "desc": "Create your own 15-minute morning practice from scratch.", "ccIcon": "🔄", "ccTitle": "Build Your Mini Flow", "ccType": "Practice Building", "ccBody": "A yoga sequence has a <strong>beginning, middle, and end</strong>. Warm the spine, build toward a peak pose, then cool down. The sequence you return to daily eventually becomes the meditation.", "chTag": "🧘 CREATE", "chTask": "Design and perform your own 5–8 pose sequence from start to finish without stopping.", "chDetail": "You can include poses from Chapter 1 and Chapter 2, or add new ones. The only rule: move at your own pace and breathe the whole time.", "tips": [{"i": "📝", "t": "Write the sequence first — winging it interrupts the flow state"}, {"i": "🌅", "t": "Morning practice works best before food and phone"}, {"i": "🔁", "t": "Same sequence daily for 30 days beats variety"}], "reflect": "\"What does your sequence reveal about what your body needs right now?\"", "aiFeedback": "Creating your own sequence is the moment a student becomes a practitioner. Three consecutive mornings means you found something worth returning to.<br><br>Add one challenging pose per week — something just outside your current ability.", "scores": [{"label": "Sequence flow", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Pose quality", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Expression", "val": "9/10", "pct": 90, "color": "#6B4EFF"}], "lessonTitle": "Your Practice, Your Sequence", "lessonParas": ["A personal yoga sequence is one of the most powerful things you can create. It captures how you move, what your body needs, and how you like to breathe. A mini flow is just 5–8 poses linked in an order that feels natural to you — it doesn't have to look like anything from a class or a YouTube video.", "When building your sequence, think in three stages: arrive (ground yourself, slow down), explore (the main poses), and restore (rest, breathe, soften). This arc — tension and release — is the essence of a good practice. Your body already knows how to move. This chapter is about listening to it."], "tipTitle": "How to Design Your Sequence", "tipSteps": ["Choose 5–8 poses you've practiced. Mix standing, floor, and resting poses.", "Order them from gentle to active and back to gentle: warm up → peak → cool down.", "Write your sequence down before you move. Knowing the order frees your mind to focus on breathing.", "Run through it twice: once to remember the poses, once to feel them properly.", "Give your sequence a name. Something simple. \"Monday Morning Flow\" or \"10-Minute Reset.\""], "tryItTime": "20–30 minutes", "saveItText": "Record a short video of yourself performing your sequence — even just 30 seconds captures the feeling.", "aiCriteria": ["Sequence flow & logic", "Pose quality", "Personal expression"]}], "ceramics": [{"num": "CHALLENGE 02", "title": "PINCH\nPOT", "desc": "The oldest ceramic form in human history.", "ccIcon": "🤲", "ccTitle": "Textures & Shaping", "ccType": "Forming", "ccBody": "The pinch pot — pressing thumb into clay and pinching outward — is the foundational ceramic form. <strong>Wall thickness</strong> is everything: aim for consistent 1cm walls.", "chTag": "🏺 BUILD", "chTask": "Build a small textured slab tile (10x10cm) using at least two different texture techniques.", "chDetail": "A slab tile is a flat piece of clay — roll it out 1cm thick, then apply texture before it dries.", "tips": [{"i": "💧", "t": "Keep hands slightly damp to prevent cracking"}, {"i": "📏", "t": "Aim for walls about 1cm thick throughout"}, {"i": "🌡️", "t": "Dry slowly under plastic to prevent cracking"}], "reflect": "\"Which texture technique felt most natural? Which surprised you?\"", "aiFeedback": "The progression from functional to organic shows you beginning to hear what the clay wants.<br><br>Make a fourth pot with your non-dominant hand. Constraint generates new forms.", "scores": [{"label": "Texture depth", "val": "8/10", "pct": 80, "color": "#C4916A"}, {"label": "Variety", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Pattern intent", "val": "7/10", "pct": 70, "color": "#F0C93A"}], "lessonTitle": "Texture Is the Fingerprint of the Hand", "lessonParas": ["Texture in ceramics is what separates a functional object from a handmade object. It is the evidence of the maker. Every mark you add — a thumb impression, a carved line, a fabric pressed into wet clay — becomes permanent once the piece is fired.", "Today you'll practice two techniques: surface texture (impressing objects into clay) and controlled shaping (coil-building a simple wall). These skills let you move beyond the pinch bowl into forms that have an intentional visual identity. The texture you choose should serve the object — rough textures feel rustic and grounded, smooth textures feel refined and modern."], "tipTitle": "Creating Surface Texture", "tipSteps": ["Press objects into leather-hard clay: burlap, lace, leaves, wire mesh, or your fingernails all create beautiful marks.", "For carved lines, use a pencil, toothpick, or clay tool when clay is leather-hard (firm but not bone dry).", "To coil-build: roll clay into ropes about 1cm thick, score the surface with cross-hatching, add slip (wet clay), then press each coil firmly.", "Blend coil joins on the inside of your piece to strengthen the wall. Outside joins can stay visible for texture.", "Plan your texture before you start — scattered random marks look messy; repeated patterns look intentional."], "tryItTime": "30–45 minutes", "saveItText": "Close-up photo of your textured tile showing both techniques clearly.", "aiCriteria": ["Texture depth & clarity", "Technique variety", "Intentional pattern"]}, {"num": "CHALLENGE 03", "title": "SLAB\nBUILDING", "desc": "Roll clay flat and fold it into anything you can imagine.", "ccIcon": "🟫", "ccTitle": "Make Something Useful", "ccType": "Forming", "ccBody": "Slab building enables <strong>angular, architectural forms</strong> impossible on a wheel. Key skill: <strong>score and slip</strong> all joins before pressing together.", "chTag": "🏺 BUILD", "chTask": "Design and build one complete functional ceramic object of your choice.", "chDetail": "It doesn't need to be fired to count — air-dry clay works. Focus on the design, proportions, and surface quality.", "tips": [{"i": "📐", "t": "Cut pieces slightly larger than needed — you can trim, not add back"}, {"i": "🔧", "t": "Support walls with crumpled paper while drying"}, {"i": "✂️", "t": "Leather-hard clay is easiest to cut and join"}], "reflect": "\"Who would you give this to, and what would you want them to feel when they use it?\"", "aiFeedback": "Slab building teaches that ceramics is as much about planning as intuition.<br><br>Build the same form again and add surface texture with a found object — a leaf, a coin, a piece of fabric.", "scores": [{"label": "Functional design", "val": "8/10", "pct": 80, "color": "#C4916A"}, {"label": "Craftsmanship", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Aesthetic", "val": "9/10", "pct": 90, "color": "#F0C93A"}], "lessonTitle": "Function Is a Design Choice", "lessonParas": ["The most meaningful handmade objects are ones that get used every day. A mug you drink from every morning. A dish that holds your rings at night. A planter that sits on your windowsill. When you make something functional, you make something that earns its place in the world.", "For this chapter, you'll design and build a small functional object of your choice — a cup, a small dish, a pinch pot with a lid, a ring holder. The design challenge is to make it beautiful AND practical: the right size to be useful, a wall thick enough to be durable, and a surface that communicates something about you as the maker."], "tipTitle": "Designing for Function", "tipSteps": ["Decide what it holds before you build it. The object's purpose determines its proportions.", "If making a cup: add a pinched or pulled handle after the body is leather-hard. Score and slip the join carefully.", "Test scale with your hand while building — wrap your hand around the cup, check if the rim hits a comfortable angle.", "Keep the base wider than the top for stability. Narrow-based ceramics tip over.", "Leave room for glazing — glaze adds about 1mm of thickness and changes the color significantly."], "tryItTime": "1–2 hours", "saveItText": "Photo of your finished object — show what it holds or how it would be used.", "aiCriteria": ["Functional design", "Craftsmanship", "Personal aesthetic"]}], "gardening": [{"num": "CHALLENGE 02", "title": "SOIL\nFIRST", "desc": "You are not growing plants. You are growing soil.", "ccIcon": "🌱", "ccTitle": "Care & Growth Tracking", "ccType": "Fundamentals", "ccBody": "Healthy soil is alive — bacteria, fungi, and worms break down organic matter and make nutrients available. <strong>Feeding the soil</strong> with compost is always more effective than feeding plants with fertilizer.", "chTag": "🌱 OBSERVE", "chTask": "Keep a care log for one week — record daily observations and any care you provided.", "chDetail": "Your log should include: date, watering (yes/no), light hours, any changes (new growth, yellowing), and one photo on days 1 and 7.", "tips": [{"i": "🪱", "t": "Worms are your soil health indicator. No worms = soil needs help"}, {"i": "🌧️", "t": "Water when the top inch is dry. Most plants die from overwatering"}, {"i": "🍂", "t": "Fall leaves shredded into beds are free slow-release fertilizer"}], "reflect": "\"What changed in your plant over the week? What surprised you?\"", "aiFeedback": "Observing soil rather than just planting in it marks a real shift in understanding. Soil is the foundation — everything else follows.<br><br>Start a compost bin. Kitchen scraps + yard waste = free amendment in 2-3 months.", "scores": [{"label": "Observation detail", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Care consistency", "val": "9/10", "pct": 90, "color": "#6B4EFF"}, {"label": "Growth tracked", "val": "8/10", "pct": 80, "color": "#F0C93A"}], "lessonTitle": "Observation Is the Gardener's Superpower", "lessonParas": ["Most plants don't die from neglect — they die from too much attention of the wrong kind. Overwatering kills more houseplants than underwatering. The skill of a good gardener is learning to read what a plant is telling you: drooping leaves (thirsty or root-bound), yellowing leaves (overwatered or nutrient-deficient), leggy growth (not enough light).", "This chapter is about building a care routine and a growth tracking habit. A simple garden journal — even just a few notes and photos each week — transforms casual watering into real horticultural knowledge. Over time you'll start to notice patterns that tell you exactly what each plant needs before problems develop."], "tipTitle": "Building a Plant Care Routine", "tipSteps": ["Water check: before watering, always test soil moisture by pressing a finger 2–3cm deep. Only water when it feels dry.", "Light audit: hold your hand 30cm above the plant. If you see a sharp shadow, the light is good. Fuzzy shadow means it needs more.", "Leaf scan: once a week, check the underside of leaves for pests (look for tiny dots or webbing).", "Fertilize lightly every 2–3 weeks during growing season with a balanced liquid fertilizer.", "Track in a simple journal: date, what you did, what you observed. A photo every week shows growth you'd otherwise miss."], "tryItTime": "5–10 minutes daily for 7 days", "saveItText": "Side-by-side photo: Day 1 and Day 7 of your plant in the same spot.", "aiCriteria": ["Observation detail", "Care consistency", "Growth documented"]}, {"num": "CHALLENGE 03", "title": "SEED TO\nHARVEST", "desc": "Grow one thing all the way from seed to your plate.", "ccIcon": "🌿", "ccTitle": "Design a Mini Garden", "ccType": "Growing", "ccBody": "Growing a plant from seed creates a connection between effort and food that is the oldest human experience. <strong>Radishes</strong> are ready in 25 days. Lettuce in 45. Perfect first full-cycle grow.", "chTag": "🌱 GROW", "chTask": "Design and plant a mini garden using 3–5 plants in a coordinated arrangement.", "chDetail": "This can be a windowsill arrangement, a balcony container garden, or a small outdoor bed. Plants chosen for a reason, placed with thought.", "tips": [{"i": "📅", "t": "Radishes: harvest at 3-4 weeks. Lettuce: harvest outer leaves continuously"}, {"i": "✂️", "t": "Thinning feels wrong but crowded plants produce nothing"}, {"i": "🌡️", "t": "Seeds germinate faster with bottom warmth"}], "reflect": "\"What feeling or mood did you want your garden to create? Does it succeed?\"", "aiFeedback": "Completing the full seed-to-harvest cycle changes your relationship with food.<br><br>Try something harder next: tomatoes or basil from seed indoors.", "scores": [{"label": "Plant selection", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Arrangement", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Visual cohesion", "val": "9/10", "pct": 90, "color": "#F0C93A"}], "lessonTitle": "A Garden Is a Living Design", "lessonParas": ["A garden — even a tiny one — is a designed space. You choose what grows, where it goes, what thrives together, and what the whole thing says about you. Container gardens on a balcony, a windowsill arrangement, a small raised bed — these are all acts of creative design as much as horticulture.", "Companion planting is one of the most elegant ideas in gardening: some plants actively help each other grow. Basil repels pests that attack tomatoes. Tall plants shade shorter ones from harsh afternoon sun. Building a mini garden means thinking in relationships — between plants, between plants and light, between the garden and the space it lives in."], "tipTitle": "Designing Your Mini Garden", "tipSteps": ["Choose 3–5 plants that have similar water and light needs. Don't mix a cactus with a fern.", "Plan for height: put tall plants at the back or center, shorter plants at the front or edges.", "Add one 'statement' plant for visual interest — something with unusual color, texture, or form.", "Consider the space from above: sketch your arrangement before planting to test the layout.", "Add a small decorative element — a stone, a label stake, a small figurine. It makes the space feel intentional."], "tryItTime": "1–2 hours", "saveItText": "Top-down photo of your complete mini garden arrangement.", "aiCriteria": ["Plant selection logic", "Arrangement & composition", "Visual cohesion"]}], "birdwatching": [{"num": "CHALLENGE 02", "title": "LEARN TO\nLISTEN", "desc": "70% of birding is done by ear. Most people never discover this.", "ccIcon": "👂", "ccTitle": "Identify the Species", "ccType": "Ear Training", "ccBody": "Most birds are heard before they are seen. Learning 10 common bird songs in your area unlocks a hidden layer of the world that most people walk through without noticing.", "chTag": "🐦 LISTEN", "chTask": "Identify 5 different bird species by name using a field guide or Merlin app.", "chDetail": "For each species: record the name, 2–3 field marks you used to identify it, and where you saw it.", "tips": [{"i": "🌅", "t": "Dawn chorus is the highest bird activity of any day"}, {"i": "🎵", "t": "Mnemonics help: White-throated Sparrow sings \"Oh Sam Peabody Peabody\""}, {"i": "🔇", "t": "No headphones — spatial audio is how you locate birds in trees"}], "reflect": "\"Which bird was hardest to identify? What clues finally cracked it?\"", "aiFeedback": "The shift from visual to auditory birding is like gaining a new sense.<br><br>Learn one new song per week. Within a month you will identify birds in the dark.", "scores": [{"label": "ID accuracy", "val": "8/10", "pct": 80, "color": "#2D3561"}, {"label": "Field marks", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Method quality", "val": "9/10", "pct": 90, "color": "#ACD8F0"}], "lessonTitle": "Identification Is a Puzzle You Solve With Clues", "lessonParas": ["Bird identification is detective work. You observe clues — field marks — and reason toward a conclusion. Field marks include: overall size and shape, bill shape, wing patterns, tail length, eye rings, leg color, and behavior. No single mark is enough on its own; good birders build a case from multiple observations.", "The most useful identification tool is the field guide. A good field guide shows you similar species side by side so you can compare. The Merlin app from Cornell Lab is free and uses AI to identify birds from photos or even from sound — it's an exceptional tool for beginners."], "tipTitle": "A System for Bird ID", "tipSteps": ["Start with size: compare the bird to something you know — sparrow, robin, crow, hawk.", "Note the bill: seed-eaters have short, thick bills; insect-eaters have thin, pointed bills; raptors have hooked bills.", "Look at the tail: is it short and rounded, long and forked, or fan-shaped when spread?", "Watch the behavior: does it hop or walk? Pump its tail? Hang upside down on branches?", "Use Merlin or a regional field guide to narrow down — then compare your notes to the description."], "tryItTime": "30–45 minutes outdoors", "saveItText": "Photo of your field notes or a screenshot of your Merlin life list showing the 5 species.", "aiCriteria": ["Identification accuracy", "Field marks recorded", "Observation method"]}, {"num": "CHALLENGE 03", "title": "HABITAT\nSCAN", "desc": "Different birds live in different layers. See the layers, see everything.", "ccIcon": "🌳", "ccTitle": "Your Observation Journal", "ccType": "Field Skills", "ccBody": "Birds occupy <strong>vertical zones</strong>: ground, understory, mid-canopy, upper canopy, aerial. <strong>Scanning each zone systematically</strong> reveals birds you would walk past looking straight ahead.", "chTag": "🐦 EXPLORE", "chTask": "Complete 3 separate observation sessions and compile them into a cohesive journal entry.", "chDetail": "Your journal entry should cover all 3 sessions with consistent structure: date/location, species list, behaviors noted, and one personal reflection per session.", "tips": [{"i": "⬆️", "t": "Upper canopy is where most people never look"}, {"i": "💧", "t": "Any water feature concentrates birds — they need water daily"}, {"i": "🌤️", "t": "Cloudy days are often better for birding — birds are more active"}], "reflect": "\"After three sessions, what pattern or behavior do you most want to understand better?\"", "aiFeedback": "Systematic habitat scanning is a skill professional ornithologists use on every survey.<br><br>Visit the same location at dawn and compare your species list. The difference will teach you more than any book.", "scores": [{"label": "Record completeness", "val": "9/10", "pct": 90, "color": "#2D3561"}, {"label": "Observation depth", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Personal voice", "val": "8/10", "pct": 80, "color": "#ACD8F0"}], "lessonTitle": "A Birder's Log Is a Personal Archive", "lessonParas": ["The best birders keep records. Not because they're competitive (though some are), but because records reveal patterns over time: which species appear in spring, where the best habitat is within walking distance, how weather changes bird activity. A personal journal turns casual observation into genuine natural history.", "Your observation journal is also a creative document. Naturalist journals throughout history — from Audubon to Darwin to Leopold — are beautiful records of both the external world and an interior one. Your notes, sketches, and reflections are as important as the species count."], "tipTitle": "Keeping a Meaningful Journal", "tipSteps": ["Record every outing: date, time, location, weather conditions. These variables matter more than you think.", "For each bird: species, number, behavior, and any unusual notes.", "Add a quick sketch if you're comfortable — even rough shapes help you remember.", "Write one sentence of personal reflection per outing: what struck you, what you felt, what surprised you.", "Review your journal monthly. Look for patterns — repeat visitors, seasonal changes, habitat preferences."], "tryItTime": "3 sessions of 20–30 minutes each", "saveItText": "Photo of your handwritten journal pages, or a screenshot of your digital log.", "aiCriteria": ["Record completeness", "Observation depth", "Personal voice"]}], "reading": [{"num": "CHALLENGE 02", "title": "ACTIVE\nREADING", "desc": "Reading without engaging is just moving your eyes.", "ccIcon": "✏️", "ccTitle": "Annotation", "ccType": "Comprehension", "ccBody": "Active reading — marking, questioning, summarizing as you go — doubles retention compared to passive reading. You are <strong>having a conversation with the author</strong>.", "chTag": "📚 READ", "chTask": "Read one chapter actively: underline surprising ideas, circle words you want to use, write a one-sentence summary per page in the margin.", "chDetail": "Three marks: underline = interesting, circle = I want to use this, ? = I disagree or am confused.", "tips": [{"i": "✏️", "t": "Use pencil so you can erase when you change your mind"}, {"i": "❓", "t": "Question marks are as valuable as underlines"}, {"i": "📋", "t": "Transfer best annotations to a notebook after finishing"}], "reflect": "\"What idea will you still remember in a week? Why?\"", "aiFeedback": "Reading with a pencil is the habit of writers and scientists throughout history.<br><br>Write a one-page response: what do you agree with, what do you challenge?", "scores": [{"label": "Engagement", "val": "9/10", "pct": 90, "color": "#2C3E6B"}, {"label": "Recall", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Critical Thinking", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Reading with a Pen Changes What You Understand", "lessonParas": ["Passive reading washes over you. <strong>Annotating forces engagement</strong> — you have to decide what matters enough to mark, summarize, or question. That decision process deepens comprehension more than re-reading the same passage four times.", "Annotation doesn't mean underlining everything. A page full of yellow highlighting means nothing was important. Mark what surprises you, what you disagree with, what connects to something else, what you want to remember.", "The real payoff comes later. An annotated book is a conversation you had with a text. Months later, you can open it and see exactly what you were thinking — what resonated, what you questioned."], "tipTitle": "Develop a personal annotation system — use symbols, not just underlines.", "tipSteps": ["Choose symbols that mean something to you: a star for key ideas, a question mark for confusion, an exclamation for surprise, a circle for connection to another idea.", "Read a chapter and mark only what genuinely stops you.", "In the margin, write a single word or phrase — not a summary, a reaction.", "At the end of the chapter, write a one-sentence synthesis without looking back.", "Review your annotations after two weeks — see what still feels important."], "tryItTime": "45–60 minutes", "saveItText": "Photograph two annotated pages that capture your most interesting responses."}, {"num": "CHALLENGE 03", "title": "READ\nWIDELY", "desc": "Your favorite genre is limiting you. Here is how to break out.", "ccIcon": "📚", "ccTitle": "Deliberate Range", "ccType": "Reading Strategy", "ccBody": "Reading across fiction, non-fiction, poetry, history, and science creates <strong>unexpected connections between ideas</strong> that narrow reading never produces.", "chTag": "📚 EXPLORE", "chTask": "Read 30 minutes in a genre you have never chosen before.", "chDetail": "If you read thrillers, try narrative non-fiction. If non-fiction, try a short story. If fantasy, try nature writing.", "tips": [{"i": "📖", "t": "Short stories and essays are perfect for genre exploration"}, {"i": "🔗", "t": "Look for genres that share themes with what you already love"}, {"i": "📝", "t": "Note: what technique did this author use that yours does not?"}], "reflect": "\"What did this genre do that your usual reading does not?\"", "aiFeedback": "Deliberately crossing genre boundaries is one of the highest-leverage things a reader can do.<br><br>Give this genre 3 more chances before deciding. First exposure is always hardest.", "scores": [{"label": "Range", "val": "8/10", "pct": 80, "color": "#2C3E6B"}, {"label": "Openness", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Reflection", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Reading Across Genres Makes You a Better Reader of Each", "lessonParas": ["Readers who only read fiction miss the clarity of good nonfiction prose. Readers who only read nonfiction miss the emotional intelligence cultivated by literary fiction. <strong>Reading range builds range in your own thinking</strong>.", "Poetry teaches compression — saying more with fewer words. Essays teach argumentation — how to build a case. Narrative nonfiction teaches structure — how to shape true events into a story. Each form is training for the others.", "The best readers have promiscuous reading habits. They follow curiosity without genre loyalty. A well-read person can hold many different ways of thinking at once."], "tipTitle": "For every novel you read, read one short piece from a different genre.", "tipSteps": ["List the last five things you've read — note the genres.", "Identify the genre you read least.", "Find one well-regarded short piece in that genre: one essay, one short story, one poem.", "Read it slowly — notice how the form is different from what you usually read.", "Write three sentences about what this form does that your usual genre doesn't."], "tryItTime": "30–45 minutes", "saveItText": "Submit the title of the piece and your three sentences about what the form did differently."}], "piano": [{"num": "CHALLENGE 02", "title": "BOTH\nHANDS", "desc": "The hardest moment in learning piano — and how to get through it.", "ccIcon": "🎹", "ccTitle": "Rhythm & Patterns", "ccType": "Technique", "ccBody": "The brain finds it difficult to do two independent rhythmic tasks simultaneously. The solution is <strong>radical slowness</strong> — playing so slowly both hands can be completely deliberate. Never practice mistakes.", "chTag": "🎹 PRACTICE", "chTask": "Play the C–G–Am–F progression with left hand bass notes + right hand chords at 60 BPM for 2 full minutes.", "chDetail": "Use a metronome app. If you lose the beat, stop, find the beat, and rejoin. The goal is consistent time — not perfection.", "tips": [{"i": "🐢", "t": "Making a mistake means you are playing too fast — slow down immediately"}, {"i": "🎯", "t": "Practice the hardest 2-bar section 10 times before moving on"}, {"i": "⏱️", "t": "20 minutes daily beats 2 hours weekly"}], "reflect": "\"When did you feel locked to the beat? What helped you get there?\"", "aiFeedback": "The frustration of hand independence is universal. Every pianist alive has been exactly where you are.<br><br>Record yourself playing slowly. Listening back reveals things you cannot feel while playing.", "scores": [{"label": "Rhythmic consistency", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Two-hand coord", "val": "7/10", "pct": 70, "color": "#B8D96E"}, {"label": "Steady tempo", "val": "8/10", "pct": 80, "color": "#ACD8F0"}], "lessonTitle": "Rhythm Is the Heartbeat of Music", "lessonParas": ["Timing separates music from noise. A chord played at the wrong moment — even the right chord — can derail a song. Rhythm is not just about speed; it's about where notes fall relative to the beat. Playing in time, even slowly, sounds musical. Playing fast but inconsistently sounds chaotic.", "Today you'll practice two things together: keeping a steady beat with your left hand while your right hand plays chords. Left-hand bass notes anchor the pulse; right-hand chords carry the harmony. This two-hand coordination is the fundamental skill that unlocks almost every piano style."], "tipTitle": "Building Rhythmic Coordination", "tipSteps": ["Start with a metronome at 60 BPM — slow enough to think. Free metronome apps work perfectly.", "Left hand: play just the root note of each chord (C, G, A, F) on beat 1 of each measure.", "Right hand: play the full chord on beats 1 and 3 (4/4 time). Four beats per measure — play on 1 and 3.", "Practice left hand alone until it's automatic. Then right hand alone. Then combine — but slow down when combining.", "Tap your foot to the beat as you play. It sounds simple but dramatically improves timing."], "tryItTime": "25–35 minutes", "saveItText": "Video of your hands playing the progression with rhythm — 30 seconds minimum.", "aiCriteria": ["Rhythmic consistency", "Two-hand coordination", "Steady tempo"]}, {"num": "CHALLENGE 03", "title": "READ\nSHEET\nMUSIC", "desc": "Notes on a page become sound. The bridge between them is learnable.", "ccIcon": "🎵", "ccTitle": "Play a Short Melody", "ccType": "Theory", "ccBody": "Treble clef lines: <strong>EGBDF</strong> (Every Good Boy Does Fine). Spaces: <strong>FACE</strong>. Read notes as letters before playing anything.", "chTag": "🎵 LEARN", "chTask": "Play a complete melody — either composed or learned — from start to finish with both hands.", "chDetail": "Your melody should be at least 8 bars long (32 beats). If composing, write the notes down so you can repeat it consistently.", "tips": [{"i": "🔤", "t": "Write note names above each note in pencil until fluent"}, {"i": "👆", "t": "Point to each note and say its name aloud before playing"}, {"i": "📱", "t": "NoteRush app makes note-reading into a fast-paced game"}], "reflect": "\"Does your melody have a mood? What would you call it?\"", "aiFeedback": "Learning to read music is like learning a second alphabet. You worked through note identification before playing — that is disciplined practice.<br><br>Learn one new piece per week using the same method.", "scores": [{"label": "Melodic shape", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Hands together", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Expression", "val": "9/10", "pct": 90, "color": "#ACD8F0"}], "lessonTitle": "A Melody Is a Story Without Words", "lessonParas": ["A melody is a single line of notes played in sequence that creates a sense of direction and return. It rises, it falls, it creates tension and then resolves it. Even a four-note melody can be expressive if it moves with intention.", "For this chapter, you'll learn to play a simple melody in the key of C major using the notes C–D–E–F–G–A–B (the white keys from C to B). You can either learn a simple existing melody or compose your own using those notes over the C–G–Am–F chord progression you already know."], "tipTitle": "Creating or Learning a Melody", "tipSteps": ["Play the C major scale (C–D–E–F–G–A–B–C) with your right hand, one finger per note. Do this 10 times.", "Notice which notes feel 'at rest' (C, E, G) and which feel like they want to move somewhere (D, F, A, B).", "To compose: start on C, create a 4-note phrase. Play it 4 times. Then create a second 4-note phrase that feels like an answer.", "To learn an existing melody: use sheet music or a tutorial for any simple song in C major.", "Add your left-hand chord accompaniment once you can play the melody confidently hands-alone."], "tryItTime": "30–45 minutes", "saveItText": "Video recording of your complete melody performance — the full piece from start to finish.", "aiCriteria": ["Melodic shape & direction", "Hands together", "Musical expression"]}], "collage": [{"num": "CHALLENGE 02", "title": "FOUND\nPOETRY", "desc": "Cut words from a magazine and reassemble them into something true.", "ccIcon": "✂️", "ccTitle": "Theme-Based Collage", "ccType": "Technique", "ccBody": "Found poetry — arranging words cut from existing text into new meaning — is the verbal equivalent of collage. The constraint of <strong>only using words that exist</strong> surfaces things you could not have written deliberately.", "chTag": "✂️ CREATE", "chTask": "Create a theme-based collage where every element connects to a single chosen word or concept.", "chDetail": "Include at least 3 text elements (words or phrases). Your theme should be guessable from the finished piece.", "tips": [{"i": "🔠", "t": "Headlines give you bolder type — collect them early"}, {"i": "🔀", "t": "Mix fonts, sizes, and colors for visual rhythm"}, {"i": "📏", "t": "Odd numbers of words (5,7,9) often feel more natural"}], "reflect": "\"Did sticking to a theme feel limiting or freeing? What surprised you about the process?\"", "aiFeedback": "The constraint removes your editor and lets something more honest through.<br><br>Make a series of 5 found poems from the same source. See what themes emerge.", "scores": [{"label": "Theme coherence", "val": "8/10", "pct": 80, "color": "#FF6B6B"}, {"label": "Text integration", "val": "9/10", "pct": 90, "color": "#B8D96E"}, {"label": "Focal point", "val": "8/10", "pct": 80, "color": "#F0C93A"}], "lessonTitle": "Words as Visual Material", "lessonParas": ["Typography in collage is not decoration — it is a primary visual element. Letters have weight, rhythm, and emotional temperature. A single word cut from a magazine headline can completely reframe the meaning of everything around it. The right word becomes the anchor of your composition.", "For a theme-based collage, you're building with intention. Choose one word or concept — memory, growth, home, escape, noise — and collect only materials that connect to that theme. This constraint is creative fuel. Limitation forces you to make decisions, and decisions are what create meaning."], "tipTitle": "Building a Theme-Based Collage", "tipSteps": ["Choose your theme and write it down before you cut anything. Commit to the word.", "Collect only materials that relate to your theme — be selective. Resist the urge to include things just because they look good.", "Use text and typography as visual elements. A word placed boldly across an image changes what both the word and the image mean.", "Create a focal point: one element that draws the eye first. Everything else should support it, not compete with it.", "Test your theme: could a stranger guess your theme from the finished piece? That's a good benchmark."], "tryItTime": "40–60 minutes", "saveItText": "Photo of your theme collage. Include a note of your theme word in the description.", "aiCriteria": ["Theme coherence", "Text integration", "Focal point clarity"]}, {"num": "CHALLENGE 03", "title": "ABSTRACT\nPORTRAIT", "desc": "Make a portrait of someone without using a single photograph of a face.", "ccIcon": "🪞", "ccTitle": "Your Personal Story", "ccType": "Concept", "ccBody": "A portrait is not a likeness — it is an <strong>impression of someone's essence</strong>. What colors feel like them? What textures? Abstraction forces you to think about what a person actually is.", "chTag": "✂️ PORTRAIT", "chTask": "Create a personal narrative collage that captures a current feeling, chapter, or truth in your life.", "chDetail": "This is your most personal piece yet. Take time with it. The materials, composition, and title should all work together.", "tips": [{"i": "🎨", "t": "Start with the color palette that feels most like the person"}, {"i": "🔲", "t": "Texture matters as much as image"}, {"i": "👁️", "t": "Step back 3 feet when assessing — overall impression beats close-up detail"}], "reflect": "\"What did making this collage help you understand about where you are right now?\"", "aiFeedback": "Creating a portrait without a face forces pure association and symbol — the level at which collage is most powerful.<br><br>Try making a self-portrait using the same rules.", "scores": [{"label": "Authenticity", "val": "9/10", "pct": 90, "color": "#FF6B6B"}, {"label": "Depth", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Emotional resonance", "val": "9/10", "pct": 90, "color": "#F0C93A"}], "lessonTitle": "Every Collage Is an Autobiography", "lessonParas": ["The most powerful collages tell a personal story without being literal. They don't show a photo of your childhood home — they capture what it felt like to be there. Fragmented, layered, juxtaposed — collage lets you communicate things that are hard to say directly.", "For this chapter, you'll create a collage about something true in your life right now. A feeling. A season you're in. Something you're holding onto or letting go. The materials you choose will do the talking — your job is to listen to what they're saying when you arrange them together."], "tipTitle": "Making Your Story Collage", "tipSteps": ["Start with a journal prompt, not a visual plan: \"Right now, I am _____.\" Write freely for 5 minutes. Then let what you wrote guide your material search.", "Look for images that feel true — not images that literally illustrate. Trust emotional resonance over logical connection.", "Use color intentionally: cool blues and greens feel still; warm reds and oranges feel active or anxious.", "Layer transparently: use tissue paper or translucent materials over images to create depth and suggest memory or distance.", "Title your piece. The right title does not explain the collage — it opens a door into it."], "tryItTime": "1–1.5 hours", "saveItText": "Photo of your finished narrative collage — with the title written somewhere in the frame or as a caption.", "aiCriteria": ["Personal authenticity", "Compositional depth", "Emotional resonance"]}], "drawing": [{"num": "CHALLENGE 02", "title": "GESTURE\nDRAWING", "desc": "30 seconds per pose. Train your eye faster than your brain can interfere.", "ccIcon": "✏️", "ccTitle": "Light & Shadow", "ccType": "Foundations", "ccBody": "Gesture drawing trains your eye-hand connection at speed. The goal is a <strong>living line</strong> that captures movement. Most beginners draw what they think they see; gesture training makes you draw what you actually see.", "chTag": "✏️ DRAW", "chTask": "Draw a single lit sphere or egg using full tonal range — highlight through cast shadow.", "chDetail": "Spend at least 20 minutes on this single drawing. A convincing sphere is one of the most fundamental exercises in drawing.", "tips": [{"i": "💪", "t": "Draw from the shoulder, not the wrist"}, {"i": "🚫", "t": "No erasing in gesture drawing — commit to every mark"}, {"i": "👁️", "t": "Spend 20 seconds looking, 10 seconds drawing"}], "reflect": "\"Where is the reflected light in your drawing? Can you see all five values?\"", "aiFeedback": "The improvement between your first 10 gestures and your last 10 is already visible — looser, more committed marks.<br><br>Do this every day for 2 weeks. The compounding is dramatic.", "scores": [{"label": "Tonal range", "val": "8/10", "pct": 80, "color": "#FF6B6B"}, {"label": "Shadow rendering", "val": "7/10", "pct": 70, "color": "#B8D96E"}, {"label": "3D form", "val": "8/10", "pct": 80, "color": "#F0C93A"}], "lessonTitle": "Shadow Is What Makes Things Real", "lessonParas": ["Without shadow, a drawing is a map. With shadow, it becomes a world. Light and shadow are what communicate form — the three-dimensional reality of an object existing in space. A sphere is just a circle until you add a shadow that wraps around its curve.", "There are five tonal values in any lit object: highlight (brightest), light, midtone, shadow, and reflected light (a subtle lightening at the edge of the shadow from bounced light). Learning to see and render these five values transforms your drawings from flat diagrams into convincing forms."], "tipTitle": "Rendering Light and Shadow", "tipSteps": ["Set up a single light source (lamp or window) and position it to the side of your subject.", "Squint at your subject. Squinting reduces detail and lets you see the major light/dark masses more clearly.", "Start with the lightest areas (leave them white or barely touched) and work toward the darkest.", "Use hatching for shadows: parallel lines, then cross-hatching for darker areas. Vary pressure for mid-tones.", "Add reflected light at the very edge of the shadow — a slight lightening that separates shadow from cast shadow."], "tryItTime": "25–35 minutes", "saveItText": "Close-up photo of your tonal drawing — photograph in the same lighting as you drew.", "aiCriteria": ["Tonal range", "Shadow rendering", "Three-dimensional form"]}, {"num": "CHALLENGE 03", "title": "STILL LIFE\nSHADING", "desc": "Three objects. One light source. The illusion of depth on flat paper.", "ccIcon": "🔦", "ccTitle": "Draw a Scene", "ccType": "Rendering", "ccBody": "Three-dimensional form on flat paper is created entirely by value. Every object has a <strong>light side, shadow side, and cast shadow</strong>. The darkest area is where shadow side meets cast shadow.", "chTag": "✏️ DRAW", "chTask": "Draw a full scene — a room corner, a street view, or an outdoor space — using basic perspective.", "chDetail": "Your scene should include at least 5 distinct elements. Use light and shadow from Chapter 2.", "tips": [{"i": "😑", "t": "Squint constantly — shows only value pattern, removes distracting detail"}, {"i": "📐", "t": "Observe the exact angle of cast shadows — they anchor objects"}, {"i": "⬜", "t": "Leave highlights completely untouched"}], "reflect": "\"What does the scene you chose say about what you find worth drawing?\"", "aiFeedback": "Moving from outline to value-based drawing is a significant technical leap. Committing to dark darks, rather than timid medium values, gives this piece its sense of light.<br><br>Move the lamp to a different position and observe how every shadow changes completely.", "scores": [{"label": "Perspective", "val": "7/10", "pct": 70, "color": "#FF6B6B"}, {"label": "Composition", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Tonal depth", "val": "8/10", "pct": 80, "color": "#F0C93A"}], "lessonTitle": "A Scene Has a Point of View", "lessonParas": ["Drawing a scene is not about drawing everything you see — it's about choosing what to include and what to leave out. Every drawing is edited. The window you don't draw is as important as the table you do. This editorial choice is where your personal vision as an artist begins to emerge.", "Perspective is the framework that makes scenes feel real. One-point perspective — where all horizontal lines converge to a single vanishing point on the horizon — is enough to draw convincing rooms, streets, and architectural scenes. The horizon line is always at eye level when you're standing or sitting."], "tipTitle": "Drawing a Scene with Depth", "tipSteps": ["Choose your viewpoint and sit or stand consistently. Your eye level determines your horizon line — draw it lightly across the page.", "Pick a single vanishing point on your horizon line. All receding horizontal lines (table edges, window frames, road edges) point to it.", "Draw the biggest shapes and largest spaces first. Details come last.", "Vary line weight: heavier lines for foreground objects, lighter lines for distant ones. This creates atmospheric depth.", "Edit deliberately: decide what to include and what to omit. You're not making a photo — you're making a statement."], "tryItTime": "45–60 minutes", "saveItText": "Photo of your complete scene drawing — photograph straight-on to minimize distortion.", "aiCriteria": ["Perspective accuracy", "Scene composition", "Tonal depth"]}], "dancing": [{"num": "CHALLENGE 02", "title": "FIND\nYOUR\nRHYTHM", "desc": "Dancing starts before your feet move.", "ccIcon": "🥁", "ccTitle": "A Step Pattern", "ccType": "Rhythm", "ccBody": "Musicality — moving in deliberate relationship to the music — separates dancers from people who move to music. You can be <strong>on the beat, ahead, or behind</strong> as an artistic choice.", "chTag": "💃 LISTEN", "chTask": "Learn one step pattern and perform it consistently for 2 full minutes to music.", "chDetail": "Choose: the side step with rock back, a basic salsa step (1-2-3-pause), or any 8-count pattern from an online tutorial. Practice until it feels automatic.", "tips": [{"i": "👂", "t": "Listen to the same song 10 times before dancing to it. Really hear it."}, {"i": "🥁", "t": "Find the kick drum first — it marks beat 1"}, {"i": "🎵", "t": "Music has 8 or 16 beat phrases — movement that matches phrases looks musical"}], "reflect": "\"When did the pattern stop feeling like counting and start feeling like dancing?\"", "aiFeedback": "Developing a conscious relationship with rhythm makes a dancer feel musical rather than mechanical.<br><br>Learn the rhythm of one 8-bar phrase in a song you love.", "scores": [{"label": "Pattern accuracy", "val": "8/10", "pct": 80, "color": "#E040FB"}, {"label": "Beat timing", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Body control", "val": "7/10", "pct": 70, "color": "#ACD8F0"}], "lessonTitle": "Steps Are Just Rhythm You Can See", "lessonParas": ["A step pattern is a specific, repeatable sequence of foot movements set to a beat. Step patterns are the vocabulary of dance — once you learn a few, you can combine and rearrange them into something that feels like your own style. Learning one solid step pattern well is more useful than knowing ten patterns poorly.", "The side step with a rock back is one of the most universal patterns in social dancing: step right, close left, step left, close right — then rock forward and back. It appears in salsa, swing, hip-hop, and many other styles. Mastering it teaches you weight transfer, which is the foundation of all footwork."], "tipTitle": "Learning a Step Pattern", "tipSteps": ["Learn the pattern at half speed without music first. Count out loud: 1-2-3-4.", "Add the music at a slow tempo (60–70 BPM if possible). Many streaming apps have speed control.", "Focus on landing each step on the correct beat, not on how it looks.", "Practice the pattern in front of a mirror — not to critique yourself, but to understand what your body is doing.", "Once comfortable, try adding arm movement: let your arms swing naturally with your steps, then add intentional shapes."], "tryItTime": "30–40 minutes", "saveItText": "Video of you performing your step pattern to music — at least 60 seconds.", "aiCriteria": ["Pattern accuracy", "Beat timing", "Body control"]}, {"num": "CHALLENGE 03", "title": "LEARN\nA PIECE", "desc": "Memorize and perform 30 seconds of choreography. Fully committed.", "ccIcon": "🎭", "ccTitle": "Your Mini Choreography", "ccType": "Performance", "ccBody": "Learning choreography by heart — to the point where you do not have to think — is when dance becomes expression. <strong>Muscle memory</strong> frees attention from the steps so you can focus on quality and feeling.", "chTag": "💃 PERFORM", "chTask": "Create and perform an original mini choreography of 16–32 counts to a song of your choice.", "chDetail": "Your choreography should use the step pattern from Chapter 2 plus at least 2 additional moves. Know it well enough to perform without stopping.", "tips": [{"i": "🔁", "t": "Repetition until boredom, then 20 more — that is when it enters muscle memory"}, {"i": "📹", "t": "Recording yourself is brutal and necessary"}, {"i": "🐢", "t": "Learn at half speed first. Slow practice makes fast execution clean"}], "reflect": "\"What does your choreography say about how you experience this song?\"", "aiFeedback": "Committing to a single take without stopping changes everything. You crossed from technical to expressive.<br><br>Perform the same piece again in a week. You will be surprised how much muscle memory has solidified.", "scores": [{"label": "Musical interpretation", "val": "8/10", "pct": 80, "color": "#E040FB"}, {"label": "Creativity", "val": "9/10", "pct": 90, "color": "#B8D96E"}, {"label": "Confidence", "val": "8/10", "pct": 80, "color": "#ACD8F0"}], "lessonTitle": "Choreography Is Personal Handwriting", "lessonParas": ["Choreography is not copying steps — it's translating music into body language that means something to you. When you choreograph, you make choices: which part of the song gets big movement, which part gets stillness, when to face forward versus turn away. Every choice expresses something.", "A mini choreography of 16–32 counts (4–8 bars of music) is a complete, performable thing. It has a beginning, a middle, and an end. It doesn't need to be complex — a simple routine done with conviction is more powerful than a complex one done tentatively."], "tipTitle": "Creating Your Choreography", "tipSteps": ["Choose a section of a song you love — 16 to 32 counts. Pick something that makes you want to move.", "Listen to that section 5 times without moving. Notice where the energy builds, where it releases.", "Map the big moments: what movement happens at the loudest beat? At the drop? At the quiet part?", "Build in layers: create the footwork first, then add arm movements, then add facing changes.", "Run it 10 times in a row. Repetition is how choreography becomes yours."], "tryItTime": "45–60 minutes", "saveItText": "Video of your complete choreography performance — one take, start to finish.", "aiCriteria": ["Musical interpretation", "Choreographic creativity", "Performance confidence"]}], "knitting": [{"num": "CHALLENGE 02", "title": "PURL &\nRIB", "desc": "One new stitch, infinite new patterns.", "ccIcon": "🧶", "ccTitle": "Build Your Rows", "ccType": "Technique", "ccBody": "Purl is the knit stitch in reverse. <strong>Knit one row, purl one row</strong> creates stockinette — the classic V-pattern of all commercial knitwear.", "chTag": "🧶 KNIT", "chTask": "Knit a 20-stitch, 20-row swatch in stockinette stitch (alternating knit and purl rows).", "chDetail": "This swatch teaches you to switch between knit and purl consistently. The right side should be smooth; the wrong side should be bumpy.", "tips": [{"i": "🔢", "t": "Count stitches at the end of every row"}, {"i": "🧵", "t": "Stockinette curls at edges — this is normal. Blocking fixes it"}, {"i": "👁️", "t": "Learn to read your knitting: V = knit, bump = purl"}], "reflect": "\"Can you see the difference between your knit rows and purl rows in the finished fabric?\"", "aiFeedback": "The stockinette you made is the foundation of almost every garment ever knitted.<br><br>Try 1x1 rib: alternate knit 1, purl 1. Compare the elasticity to your stockinette swatch.", "scores": [{"label": "Purl quality", "val": "7/10", "pct": 70, "color": "#FF6B6B"}, {"label": "Fabric consistency", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Pattern following", "val": "8/10", "pct": 80, "color": "#ACD8F0"}], "lessonTitle": "Purl Changes Everything", "lessonParas": ["The purl stitch is the knit stitch in reverse — the needle goes in from the back, the yarn stays in front. Together, knit and purl create the full vocabulary of knitting. Stockinette stitch (alternating rows of knit and purl) creates the classic flat, smooth fabric you see in T-shirts and sweaters. Ribbing (knit 2, purl 2 repeated) creates elastic edges used in cuffs and waistbands.", "Learning to read your knitting — to see whether the next stitch is a knit or a purl from looking at the fabric — is the skill that separates beginners from confident knitters. Look at the stitch on the needle: if it has a bump at the base, it's a purl. If it's smooth, it's a knit."], "tipTitle": "Working the Purl Stitch", "tipSteps": ["For purl: move yarn to the front of your work, insert needle from right to left into the front of the stitch.", "Wrap yarn counterclockwise around the right needle, pull through toward the back, slip old stitch off.", "For stockinette: knit one row, purl one row, alternating.", "For ribbing (K2P2): knit 2, bring yarn forward, purl 2, bring yarn back, repeat. The yarn movement is critical.", "Count your stitches every few rows. Rib stitches are easy to drop or add accidentally."], "tryItTime": "30–45 minutes", "saveItText": "Photo of your stockinette swatch — show both the smooth side and the bumpy side.", "aiCriteria": ["Purl stitch quality", "Fabric consistency", "Pattern following"]}, {"num": "CHALLENGE 03", "title": "FINISH\nSOMETHING", "desc": "The gap between a project and a finished object is just one skill.", "ccIcon": "🎁", "ccTitle": "Knit a Small Object", "ccType": "Completion", "ccBody": "Casting off creates the final edge. <strong>Weaving in ends</strong> is what separates a finished object from a project. Both take 10 minutes and transform the result.", "chTag": "🧶 FINISH", "chTask": "Complete a small knit object — dishcloth, coaster, or small pouch — from cast-on to cast-off with ends woven in.", "chDetail": "This is a finished object. It should be ready to use or give away when you're done.", "tips": [{"i": "💧", "t": "Wet blocking dramatically improves the appearance of hand knitting"}, {"i": "🪡", "t": "Cast off loosely — tight bind-offs restrict stretch"}, {"i": "✂️", "t": "Trim ends after weaving and blocking, not before"}], "reflect": "\"What was the moment you realized it was going to become a real thing?\"", "aiFeedback": "Finishing is the skill most knitters undervalue. Blocking shows real craft awareness.<br><br>You now have all the skills to make a simple dishcloth or scarf. Make something with a purpose.", "scores": [{"label": "Construction quality", "val": "8/10", "pct": 80, "color": "#FF6B6B"}, {"label": "Finished edges", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Completeness", "val": "9/10", "pct": 90, "color": "#ACD8F0"}], "lessonTitle": "A Finished Object Changes Everything", "lessonParas": ["The psychology of finishing a knit object — however small — is dramatically different from knitting swatches. A completed dishcloth, coaster, or small pouch is a real thing that exists in the world. It can be used, given away, or kept. It carries the hours you put into it.", "A dishcloth is one of the best first finished objects: it's flat, rectangular, has no shaping, and is completely useful. A 30-stitch, 40-row dishcloth in cotton yarn is completely achievable in one or two sessions and will last for years."], "tipTitle": "Finishing Your First Object", "tipSteps": ["Choose cotton or cotton-blend yarn for a dishcloth — it's more forgiving than wool and has practical value.", "Cast on 30 stitches. Knit every row (garter stitch) for the simplest finish, or alternate knit/purl for stockinette.", "Knit until your piece is roughly square (measure against the width). Cast off: knit 2, lift the first stitch over the second, knit one more, repeat.", "Weave in your ends with a yarn needle: thread the yarn through the eye, and weave through several stitches on the wrong side in alternating directions.", "Wash and block your finished piece: get it wet, gently squeeze out water, and lay flat to dry. It will relax and even out."], "tryItTime": "1.5–3 hours total", "saveItText": "Photo of your finished object — flat and fully complete with ends woven in.", "aiCriteria": ["Construction quality", "Finished edges", "Functional completeness"]}], "journaling": [{"num": "CHALLENGE 02", "title": "MORNING\nPAGES", "desc": "3 pages. Every morning. Without editing. The practice that changes everything.", "ccIcon": "🌅", "ccTitle": "Reflective Storytelling", "ccType": "Practice", "ccBody": "Morning Pages — 3 handwritten pages done immediately upon waking — empty the mind before the day starts. Artists and executives cite this as the single most transformative daily practice.", "chTag": "📓 WRITE", "chTask": "Write a reflective entry (400–600 words) about a specific experience from the past month.", "chDetail": "One specific moment — a conversation, a decision, a small event that meant more than it looked like. Write what happened, then write what it meant.", "tips": [{"i": "📵", "t": "No phone before morning pages"}, {"i": "✋", "t": "Handwriting reaches different parts of the mind than typing"}, {"i": "🔒", "t": "Never re-read morning pages from the same week"}], "reflect": "\"What did you understand about the experience at the end that you didn't understand at the beginning?\"", "aiFeedback": "Five days is enough to feel the effect. The surprising content is the practice working exactly as intended.<br><br>Commit to 30 days. By day 21, the resistance before writing disappears.", "scores": [{"label": "Narrative specificity", "val": "8/10", "pct": 80, "color": "#F0C93A"}, {"label": "Reflective depth", "val": "9/10", "pct": 90, "color": "#B8D96E"}, {"label": "Authentic voice", "val": "8/10", "pct": 80, "color": "#ACD8F0"}], "lessonTitle": "Story Is How We Make Sense of What Happened", "lessonParas": ["Free writing surfaces raw material. Reflective writing shapes it into meaning. When you tell the story of something that happened — not just what happened, but why it mattered, what you felt, what you learned — you transform experience into understanding. This is the difference between a diary and a journal.", "Good reflective writing uses specific, concrete detail. 'I was nervous' is flat. 'My hands were cold even though the room was warm' puts the reader inside the experience. Specificity is what makes writing feel true, because vague writing could describe anyone's experience while specific writing can only describe yours."], "tipTitle": "Writing With Reflection", "tipSteps": ["Start with one specific moment, not a summary. 'Last Tuesday, walking to the subway at 7am' — not 'recently I've been thinking about...'", "Use sensory detail: what did you see, hear, smell, feel? One concrete sensory detail grounds the reader in the scene.", "After describing what happened, ask: what did I make this mean? That question unlocks reflection.", "Write toward surprise. If you end the entry knowing exactly what you thought at the start, you haven't gone deep enough.", "End with a question, not a conclusion. Journals don't have to resolve — they can hold things open."], "tryItTime": "30–40 minutes", "saveItText": "Photo of your reflective entry — handwritten or typed, your choice.", "aiCriteria": ["Narrative specificity", "Reflective depth", "Authentic voice"]}, {"num": "CHALLENGE 03", "title": "THE\nLETTER", "desc": "Write a letter to someone you have something unsaid with.", "ccIcon": "✉️", "ccTitle": "Letter to Future Self", "ccType": "Depth", "ccBody": "Writing about emotional events produces measurable improvements in mood and cognitive clarity. <strong>Narrative structure imposes meaning</strong> on raw experience — processing it in a way unstructured thinking never does.", "chTag": "📓 WRITE", "chTask": "Write a letter to yourself to be opened in one to five years — minimum 500 words.", "chDetail": "Be honest. Be specific. Tell your future self what they need to know about who you are right now.", "tips": [{"i": "🔓", "t": "Knowing you will not send it changes what you allow yourself to write"}, {"i": "⏱️", "t": "Set a timer for 30 minutes. Do not stop until it ends."}, {"i": "📬", "t": "You may decide to send it, rewrite it, or burn it after. All are valid."}], "reflect": "\"What was the hardest thing to write honestly? Why?\"", "aiFeedback": "The discomfort before writing and the relief after is the process working. You gave shape to something formless.<br><br>Wait 48 hours before reading it back. The distance changes what you see.", "scores": [{"label": "Honesty", "val": "9/10", "pct": 90, "color": "#F0C93A"}, {"label": "Present-moment detail", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Emotional depth", "val": "9/10", "pct": 90, "color": "#ACD8F0"}], "lessonTitle": "Writing Across Time", "lessonParas": ["A letter to your future self is one of the most powerful writing exercises that exists. It requires you to be honest about where you are right now — your fears, your hopes, your confusions — because your future self deserves the truth. It also forces you to think about what you actually want for your life, which is a harder question than it sounds.", "The best letters to future self are not advice. They're dispatches: this is where I am, this is what I'm carrying, this is what I hope is different (or the same) when you read this. They are time capsules of a specific moment of consciousness — irreplaceable once that moment has passed."], "tipTitle": "Writing Your Letter", "tipSteps": ["Decide on a delivery date: one year? Five years? Ten? The time frame changes everything you write.", "Describe your life right now in concrete terms: where you live, what you do each day, who is in your life.", "Write about what you're working on, what you're afraid of, and what you hope for.", "Ask your future self a question — something you genuinely don't know the answer to yet.", "Seal it. Literally, if handwritten. Schedule a reminder to open it on the delivery date. FutureMe.org can send it by email."], "tryItTime": "45–60 minutes", "saveItText": "Photo of your sealed letter — or a screenshot of the FutureMe.org draft.", "aiCriteria": ["Honesty & vulnerability", "Specificity of present-moment detail", "Emotional depth"]}], "woodworking": [{"num": "CHALLENGE 02", "title": "SHARP\nEDGES", "desc": "A sharp chisel does 80% of the work. A dull one does none of it.", "ccIcon": "🔪", "ccTitle": "Tool Sharpening", "ccType": "Maintenance", "ccBody": "Sharp tools are <strong>safer</strong> than dull ones — they require less force and cut predictably. A chisel should shave hair from your arm. If it cannot, it is not sharp enough for fine work.", "chTag": "🪵 SHARPEN", "chTask": "Flatten the back of one chisel on sandpaper (120→220→400 grit). Hone the bevel at 25-30°. Test: can it shave arm hair?", "chDetail": "Flatten back: sandpaper on glass, circular motion. Bevel: consistent angle, forward strokes, 120→220→400→600→strop.", "tips": [{"i": "📐", "t": "Consistent angle is everything — a sharpening guide removes the guesswork"}, {"i": "💧", "t": "Keep whetstone wet throughout"}, {"i": "🔄", "t": "Strop on leather at the end for a razor edge"}], "reflect": "\"What was the difference before and after? What surprised you?\"", "aiFeedback": "Sharpening your own tools is meditative and foundational. A chisel that passes the arm-hair test will cut joints a dull chisel cannot.<br><br>Sharpen every tool before every session for a month.", "scores": [{"label": "Edge Quality", "val": "8/10", "pct": 80, "color": "#8B6914"}, {"label": "Technique", "val": "7/10", "pct": 70, "color": "#ACD8F0"}, {"label": "Consistency", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "A Sharp Tool Is a Safe Tool", "lessonParas": ["More woodworking accidents happen with dull tools than sharp ones. A dull tool requires excessive force — and when it slips, it's uncontrolled. A <strong>sharp tool bites into wood predictably</strong>, requires less force, and leaves a cleaner surface.", "Sharpening is a skill woodworkers historically spent years developing. Modern sharpening stones and systems have made it more accessible — but the principle remains the same: you're creating a consistent, thin, polished edge at a precise angle.", "The test: a sharp chisel shaves arm hair cleanly. A sharp plane iron creates a continuous ribbon of wood, not dust and chunks. These tests tell you more than any visual inspection."], "tipTitle": "Sharpen to a consistent angle — use a honing guide until you can feel it freehand.", "tipSteps": ["Flatten your sharpening stone first on a glass plate with wet-dry sandpaper.", "Set your chisel or plane iron in a honing guide at 25–30 degrees.", "Work through grits: 220, then 400, then 1000, then 4000.", "Finish with a leather strop loaded with polishing compound.", "Test on end grain: a truly sharp tool will slice cleanly without tearing fibers."], "tryItTime": "30–45 minutes", "saveItText": "Photograph the polished edge and a test cut on end grain."}, {"num": "CHALLENGE 03", "title": "CUT A\nJOINT", "desc": "The joint that has held furniture together for 5,000 years.", "ccIcon": "🔧", "ccTitle": "Wood Joinery", "ccType": "Technique", "ccBody": "The <strong>mortise and tenon</strong>: a rectangular hole that receives a matching peg. When fitted correctly, it is stronger than the wood itself.", "chTag": "🪵 BUILD", "chTask": "Cut a bridle joint in scrap wood. Mark with a gauge, saw the tenon cheeks, chisel the mortise. Aim for snug but not forced.", "chDetail": "Mark all lines first. Saw just outside the line. Chisel mortise in layers. Fit. Adjust. Repeat.", "tips": [{"i": "📐", "t": "Mark before you cut. Always."}, {"i": "✂️", "t": "Saw outside the line — you can remove more wood, never add"}, {"i": "🪚", "t": "Sharp chisel + mallet is more accurate than a router for learning"}], "reflect": "\"How many attempts to get a snug fit? What kept going wrong?\"", "aiFeedback": "Cutting your first joint is a benchmark. The gap between design and execution in joinery is honest — there is nowhere to hide.<br><br>Cut the same joint 5 more times in scrap. The fifth will be dramatically better.", "scores": [{"label": "Accuracy", "val": "7/10", "pct": 70, "color": "#8B6914"}, {"label": "Technique", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Persistence", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "How Pieces of Wood Become a Structure", "lessonParas": ["Joinery is the language of woodworking — the vocabulary of ways pieces can connect. A mortise and tenon joint has been used for thousands of years. A dovetail joint is both <strong>mechanical elegance and visual signature</strong>. Joinery is where craft and art meet.", "The strength of a joint comes from mechanical interlocking, glue surface area, and wood grain orientation. A butt joint (end to face) is the simplest and weakest. A through-tenon locks in all three dimensions — nearly impossible to pull apart.", "Most beginning woodworkers avoid joinery because it requires accuracy. But accuracy comes from process: marking, test fitting, and cutting to a line rather than to a measurement."], "tipTitle": "Cut to the waste side of your marked line — you can take more off; you can't add it back.", "tipSteps": ["Mark a simple half-lap joint on two pieces of scrap wood.", "Score the line with a marking knife before cutting — this prevents tearout.", "Saw to the waste side of the knife line.", "Chisel from both faces toward the center to avoid blowout.", "Test fit before gluing — a well-fitted joint should slide in with hand pressure, not mallet force."], "tryItTime": "60–90 minutes", "saveItText": "Photograph the joint assembled — show the face, the edge, and the fit."}], "videography": [{"num": "CHALLENGE 02", "title": "SHOOT\nFOR\nSOUND", "desc": "The ear forgives bad images. The eye never forgives bad sound.", "ccIcon": "🎙️", "ccTitle": "Audio Production", "ccType": "Sound", "ccBody": "Viewers tolerate average video but abandon bad audio within seconds. <strong>Get the microphone close to the source. Monitor with headphones. Record room tone.</strong> These three habits separate amateur from professional audio.", "chTag": "🎬 RECORD", "chTask": "Record a 60-second monologue focusing entirely on audio. Mic within 30cm of subject. Monitor with headphones. Record 10 seconds of silence first.", "chDetail": "Mic placement: 20-30cm from mouth, just outside frame. Close doors, turn off fans. Room tone = 10 seconds of silence before speaking.", "tips": [{"i": "🎧", "t": "Always monitor with headphones — you cannot hear what the mic hears with your ears"}, {"i": "🚪", "t": "Close doors, turn off fans, move from windows"}, {"i": "🏃", "t": "Room tone: 10 seconds of silence is essential for audio editing later"}], "reflect": "\"What audio problems did you only notice when monitoring with headphones?\"", "aiFeedback": "Monitoring with headphones immediately changes what you can catch. Room tone will save you in editing.<br><br>Watch your 60 seconds with video hidden. Then without sound. Then both. This teaches you exactly how much each element carries.", "scores": [{"label": "Audio Quality", "val": "8/10", "pct": 80, "color": "#0D1117"}, {"label": "Mic Technique", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Monitoring", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "Why Bad Audio Ruins Good Video", "lessonParas": ["Viewers will watch low-quality video with good audio. They will not watch high-quality video with bad audio. Sound is the <strong>invisible half of filmmaking</strong> — neglect it and everything else you do is undermined.", "The primary problem is room noise. Every space has a 'room tone' — a hum, a hiss, a frequency that the room resonates at. Professional sound recording starts with treating the space: removing reflective surfaces, getting the microphone close to the source, and recording the room tone alone for later use.", "A good lavalier microphone clipped 6 inches from the mouth will outperform an expensive camera microphone every time. Proximity beats quality."], "tipTitle": "Get the microphone as close to the subject as possible without it being in frame.", "tipSteps": ["Record one minute of silence in your shooting space — this is your room tone.", "Listen back with headphones: what do you hear that you didn't notice before?", "Reduce reflective surfaces: hang a blanket, close doors to adjacent rooms.", "Record your subject at arm's length with your camera mic, then 6 inches with a separate mic.", "Compare the two in editing — the difference makes the principle clear."], "tryItTime": "45–60 minutes", "saveItText": "Submit a 60-second clip that demonstrates clean audio you're happy with."}, {"num": "CHALLENGE 03", "title": "EDIT A\nSCENE", "desc": "Film is made in the edit. What you leave out is more important than what you include.", "ccIcon": "✂️", "ccTitle": "Editing & Pacing", "ccType": "Post-Production", "ccBody": "<strong>Cut on action</strong>, <strong>cut to reaction</strong>, and trust that <strong>shorter is almost always better</strong>. Walter Murch's rule: the best cut advances story, reveals character, and maintains rhythm simultaneously.", "chTag": "🎬 EDIT", "chTask": "Take 5 minutes of footage and edit it to 60 seconds or less. Every cut must have a reason. Use DaVinci Resolve (free).", "chDetail": "Watch everything once. Identify 3 most interesting moments. Build around those. Cut on movement. Remove silences.", "tips": [{"i": "✂️", "t": "If you are debating whether to cut something, cut it"}, {"i": "🎵", "t": "Try your edit without music first — music hides editing problems"}, {"i": "😴", "t": "Watch the edit the next morning. Fresh eyes catch what tired eyes miss."}], "reflect": "\"What surprised you about what made the final cut?\"", "aiFeedback": "Holding to the 60-second limit shows editorial courage.<br><br>Make a 30-second version from the same footage. Compression at this level teaches you what the scene is actually about.", "scores": [{"label": "Story Clarity", "val": "8/10", "pct": 80, "color": "#0D1117"}, {"label": "Pacing", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Restraint", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "The Edit Is Where the Film Is Actually Made", "lessonParas": ["Shooting gives you raw material. <strong>Editing is where the film happens</strong>. The same footage can be shaped into completely different emotional experiences depending on the pacing, sequence, and which shots are chosen.", "Pacing is not just cut frequency — it's the relationship between the rhythm of edits and the rhythm of the music, speech, or action. A fast edit to a slow song creates tension. A long take in a fast scene creates dread.", "The 180-degree rule, J and L cuts, and cutting on action are tools — but they exist to serve one goal: keeping the audience inside the scene without noticing the cuts."], "tipTitle": "Cut on action — movement that starts in one shot should continue in the next.", "tipSteps": ["Take 3–5 minutes of raw footage from any source.", "Assemble a rough cut without music — work with the natural sound.", "Identify every cut that feels uncomfortable or calls attention to itself.", "Try cutting earlier or later within each shot to find the natural cut point.", "Add music last — let it comment on the edit, not drive it."], "tryItTime": "60–90 minutes", "saveItText": "Export a 90-second edit and note the three editing choices you're most proud of."}], "hiking": [{"num": "CHALLENGE 02", "title": "PLANT\nID WALK", "desc": "Every trail is a field guide waiting to be read.", "ccIcon": "🌿", "ccTitle": "Navigating Harder Terrain", "ccType": "Naturalism", "ccBody": "Learning to identify plants, trees, and fungi by name transforms any walk into a <strong>rich layered experience</strong>. iNaturalist makes this immediately accessible — photograph anything, get an identification within seconds from a global community of naturalists.", "chTag": "🥾 IDENTIFY", "chTask": "Complete a hike with at least one technical section (steep incline, rocky scramble, or uneven terrain) and document your navigation decisions.", "chDetail": "Write 3–5 notes about specific terrain decisions you made: where you chose to step, how you managed a difficult section, what you learned.", "tips": [{"i": "📱", "t": "iNaturalist is free — your observations contribute to real scientific research"}, {"i": "🍂", "t": "Leaves in autumn show structure more clearly than summer foliage"}, {"i": "🔍", "t": "Photographing underside of leaves and bark gives better ID results"}], "reflect": "\"When did you feel most in control on technical terrain? What helped?\"", "aiFeedback": "Beginning to name what you walk past changes the entire quality of attention you bring to a trail. What was background becomes foreground.<br><br>Return to the same trail in a different season. The list of identifiable species will be completely different.", "scores": [{"label": "Trail reading", "val": "8/10", "pct": 80, "color": "#B8D96E"}, {"label": "Terrain confidence", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Safety awareness", "val": "9/10", "pct": 90, "color": "#ACD8F0"}], "lessonTitle": "Reading the Trail", "lessonParas": ["Every trail tells you how to walk it. Switchbacks on a steep slope exist to reduce angle and prevent erosion. Rock cairns mark the way where trail markings are absent. A trail that widens and flattens usually signals a viewpoint or rest area ahead. Learning to read these signals makes you a more confident hiker.", "Technical terrain — loose rock, roots, wet surfaces — requires active foot placement rather than automatic walking. Each foot placement on difficult terrain is a small decision. Good hikers look 3–4 steps ahead on technical sections, planning foot placement before arriving, not while arriving."], "tipTitle": "Moving Through Technical Terrain", "tipSteps": ["Look ahead, not down at your feet. Your peripheral vision handles foot placement; your focus should scan ahead.", "On loose rock: take shorter steps and lower your center of gravity by slightly bending your knees.", "On roots and wet surfaces: step on the widest part of a root, not across it. Wet roots have zero grip.", "Descending is harder than ascending — slow down going down. More accidents happen on descent.", "Use trekking poles if available: plant them before a step, not during. They should precede your feet, not follow."], "tryItTime": "1.5–3 hours", "saveItText": "Photo from the most technically challenging section of your hike.", "aiCriteria": ["Trail reading", "Terrain confidence", "Safety awareness"]}, {"num": "CHALLENGE 03", "title": "READ THE\nTRAIL", "desc": "Experienced hikers see a trail as a story. Here is how to start reading it.", "ccIcon": "🗺️", "ccTitle": "Your Hiking Photo Story", "ccType": "Skills", "ccBody": "Trail reading is the skill of interpreting landscape features: <strong>drainage patterns, aspect, soil type, micro-climates</strong>. North-facing slopes are shadier and hold more moisture — different plant communities live there. Reading contour lines translates to knowing where the steeps are before you hit them.", "chTag": "🥾 NAVIGATE", "chTask": "Hike and create a 3-photo story that captures the arc of your experience: beginning, journey, destination.", "chDetail": "Each photo should be intentionally composed — not a quick snap. Edit lightly for exposure and color.", "tips": [{"i": "☀️", "t": "Sun position gives you rough direction: rises east, sets west, peaks south at noon"}, {"i": "🌿", "t": "Moss grows on all sides of trees in wet climates — the north side myth is unreliable"}, {"i": "💧", "t": "Follow any drainage downhill in an emergency — leads to human infrastructure"}], "reflect": "\"Which photo best captures how the hike felt, not just how it looked?\"", "aiFeedback": "Predicting terrain from a map then verifying it in person is how navigation skill is built. The mismatches teach more than the matches.<br><br>Plan and complete a trail you have not done before using only a downloaded map — no live GPS navigation.", "scores": [{"label": "Narrative arc", "val": "9/10", "pct": 90, "color": "#B8D96E"}, {"label": "Composition", "val": "8/10", "pct": 80, "color": "#6B4EFF"}, {"label": "Emotional presence", "val": "8/10", "pct": 80, "color": "#ACD8F0"}], "lessonTitle": "A Photo Story Has a Beginning, Middle, and End", "lessonParas": ["A hiking photo story is not a random selection of nice landscape shots. It follows a narrative: departure (leaving behind the ordinary world), journey (the walk itself, with its challenges and discoveries), and arrival (the destination or turning point, and the return). Every great outdoor photo essay follows this arc.", "The most powerful outdoor photography is not about scenery — it's about presence. A photo of your boots on a mossy log says something different than a panorama. Both have value; the boots are more intimate. Mix wide environmental shots with close-up detail shots and mid-range human-scale shots."], "tipTitle": "Telling a Story Through Photos", "tipSteps": ["Plan your shots in three categories: wide (landscape, establishing), medium (trail, human scale), close (detail, texture).", "Shoot the beginning: your car, the trailhead sign, your feet on the first step. Set the scene.", "Capture the journey: the hard section, the rest stop, the discovery. This is where the story lives.", "The destination photo should feel like release — wide, open, earned.", "Edit your 3 best photos to tell the arc: beginning, journey, destination. Order matters."], "tryItTime": "2–4 hours", "saveItText": "Your 3 selected story photos in order: beginning, journey, destination.", "aiCriteria": ["Narrative arc", "Compositional quality", "Emotional presence"]}], "interior": [{"num": "CHALLENGE 02", "title": "LIGHT\nMAPPING", "desc": "Light is the material that changes every room without moving furniture.", "ccIcon": "💡", "ccTitle": "Lighting Layers", "ccType": "Technique", "ccBody": "Professional designers use three lighting layers: <strong>ambient</strong> (general fill light), <strong>task</strong> (functional work light), and <strong>accent</strong> (drama and focus). Most homes rely on one overhead fixture — adding floor lamps and table lamps at lower levels transforms the entire feel of a space.", "chTag": "🛋️ OBSERVE", "chTask": "Map your room's light at three times of day: morning, afternoon, evening. Photograph each. Then add one floor lamp or change one bulb to warmer temperature (2700K). Photograph again.", "chDetail": "Warm white: 2700-3000K. Cool white: 4000-5000K. Bedrooms and living rooms benefit from warm. Kitchens and bathrooms from cool. Lower light sources at eye level when seated create intimacy.", "tips": [{"i": "🕯️", "t": "Candles at eye level create warmth no overhead light can match"}, {"i": "🌡️", "t": "Replace any bulb above 3500K in living spaces — too clinical"}, {"i": "💡", "t": "Dimmers cost $15 and transform a room more than any piece of furniture"}], "reflect": "\"Which time of day did your room look best? What light quality made it work?\"", "aiFeedback": "Light mapping before making changes is a professional habit that prevents costly mistakes. You noticed light quality rather than just quantity — that awareness is the foundation of everything else in interior design.<br><br>Now experiment with adding a single accent light on a plant, artwork, or architectural feature.", "scores": [{"label": "Light Awareness", "val": "8/10", "pct": 80, "color": "#C4956A"}, {"label": "Observation", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Application", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Three Types of Light and Why You Need All of Them", "lessonParas": ["Amateur interior design uses one light source per room — usually a ceiling fixture. Professional design uses <strong>three layers of light</strong>: ambient (overall illumination), task (for specific activities), and accent (for atmosphere and visual interest).", "Ambient light fills the room evenly and prevents shadows in active areas. Task light is directional and bright — over a kitchen counter, beside a reading chair. Accent light creates drama — behind a sofa, inside a bookcase, under a floating shelf.", "The mistake most people make: relying entirely on ambient overhead light, then wondering why the room feels institutional. Lower the overhead, add layers, and the room transforms."], "tipTitle": "Turn off every overhead light in one room — live with only lamps for a week.", "tipSteps": ["Identify every light source currently in the room.", "Categorize each as ambient, task, or accent.", "For one week, avoid using overhead lights in one room — use only lamps.", "Note what feels missing and where — this tells you where you need new light.", "Plan one new accent light source: a lamp behind furniture, under-shelf lighting, or a candle grouping."], "tryItTime": "30–45 minutes to audit and plan", "saveItText": "Photograph the room with only lamps on — and again with overhead on. Submit both."}, {"num": "CHALLENGE 03", "title": "ONE\nROOM,\nONE STORY", "desc": "Every well-designed room communicates something specific. What does yours say?", "ccIcon": "🖼️", "ccTitle": "Cohesive Design", "ccType": "Concept", "ccBody": "Great interior design tells a <strong>coherent story</strong> — materials, colors, and objects in conversation with each other. The exercise: define your room's story in one sentence, then audit every object to ask whether it belongs in that story.", "chTag": "🛋️ DESIGN", "chTask": "Write one sentence describing the feeling you want your room to create. Audit every object: does it belong? Remove 3 things. Reposition 3 things. Add nothing.", "chDetail": "Sentences that work: \"Calm place to think, inspired by Scandinavian cabins.\" \"Colorful, maximalist den for creative work.\" Start with the feeling, design toward it.", "tips": [{"i": "📦", "t": "Removing things costs nothing and usually improves a room more than adding"}, {"i": "🔁", "t": "Reposition before buying — try a chair in 4 different spots before concluding it is wrong"}, {"i": "📷", "t": "Photograph your room before and after any change. Comparison teaches more than memory."}], "reflect": "\"What 3 things did you remove, and why did they not belong? What does that tell you about your actual taste?\"", "aiFeedback": "Writing the story first and designing toward it is the professional process. Most people shop for rooms instead of designing them. You are starting to design.<br><br>Give your room that one-sentence brief for 30 days. Every purchase decision becomes easy when you have a brief.", "scores": [{"label": "Concept Clarity", "val": "9/10", "pct": 90, "color": "#C4956A"}, {"label": "Editing", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Cohesion", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "How to Make a Room Feel Intentional", "lessonParas": ["Cohesion doesn't require everything to match — it requires everything to <strong>belong to the same conversation</strong>. A cohesive room has consistent values across color, scale, texture, and material. Objects can be different styles if they share a quality.", "The most common cause of incoherence: accumulation without curation. Rooms that feel cluttered or confusing usually have pieces from too many different visual languages competing for attention.", "A useful test: stand at the door and squint. Do the colors and shapes resolve into a unified feeling? Or are individual pieces demanding separate attention? Cohesion means the room wins over the objects."], "tipTitle": "Remove half the objects in the room — notice what breathes.", "tipSteps": ["Choose one room to redesign.", "Remove every decorative object and place them on the floor or a different surface.", "Study the empty room — note the architecture, natural light, and fixed elements.", "Return only the objects that earn their place by adding something the room needs.", "Stop when the room feels complete — not when the shelf is full."], "tryItTime": "60–90 minutes", "saveItText": "Photograph the room before and after the editing process."}], "fashion": [{"num": "CHALLENGE 02", "title": "THE\nCAPSULE", "desc": "33 items. 3 months. Complete outfits every day.", "ccIcon": "👗", "ccTitle": "Capsule Wardrobe", "ccType": "Editing", "ccBody": "A capsule wardrobe — a small collection of versatile, high-quality pieces that all work together — eliminates decision fatigue and reveals your actual style. The <strong>constraint forces clarity</strong>: you discover which pieces you genuinely love and which were impulse decisions.", "chTag": "👗 EDIT", "chTask": "Lay out everything you own. Sort into: Love (wear constantly), Maybe (occasional), and Never. Bag the Never pile immediately. Count what remains. Aim for under 50 pieces.", "chDetail": "The Love pile is your real wardrobe. The Never pile should go to a friend or charity today — not next month. The Maybe pile: if you haven't worn it in 6 months, it belongs in Never.", "tips": [{"i": "📦", "t": "Bag the Never pile before you change your mind — decisiveness is the skill"}, {"i": "🔢", "t": "After editing, identify the 3 outfit combinations you wear 80% of the time"}, {"i": "🪞", "t": "Photograph your 10 favourite outfits. Pattern recognition across them reveals your actual style."}], "reflect": "\"What patterns do you see in your Love pile? What does your taste actually look like?\"", "aiFeedback": "The editing process reveals more about your actual taste than any shopping trip ever could. What you remove is as much a design decision as what you keep.<br><br>Wear only items from your Love pile for 30 days. Notice what you reach for first every morning.", "scores": [{"label": "Editing Discipline", "val": "8/10", "pct": 80, "color": "#2D2D2D"}, {"label": "Self-Knowledge", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Clarity", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "The Architecture of a Functional Wardrobe", "lessonParas": ["A capsule wardrobe is a small collection of <strong>high-use, versatile pieces</strong> that work together in many combinations. The idea is that fewer, better choices beat more, worse choices — and that most people wear 20% of their clothes 80% of the time.", "The capsule principle starts with neutrals — pieces that work with almost anything. From a neutral base, you add seasonal or personality pieces that express more specific preferences. The ratio matters: too many statement pieces and nothing combines.", "The discipline of a capsule is knowing what you actually wear versus what you bought in optimism. The honest audit — pulling everything out, looking at what gets reached for — is the only reliable way to see your real wardrobe."], "tipTitle": "Turn every hanger backward — rehang only what you wear. After 3 months, review what's still backward.", "tipSteps": ["Remove everything from your wardrobe and place it on the bed.", "Sort into three piles: wear regularly, haven't worn in 6 months, never wear.", "Examine the 'wear regularly' pile — note the colors, silhouettes, and materials.", "These are your core preferences. Build future purchases around them.", "Remove the 'never wear' pile permanently — donate or sell."], "tryItTime": "60–90 minutes", "saveItText": "Photograph your 'wear regularly' pile laid out flat — this is your actual capsule."}, {"num": "CHALLENGE 03", "title": "STUDY\nA DECADE", "desc": "Style fluency starts with knowing where it came from.", "ccIcon": "📸", "ccTitle": "Fashion History", "ccType": "Context", "ccBody": "Every contemporary aesthetic is a remix of something that came before. Understanding <strong>where styles come from</strong> gives you the ability to reference intentionally rather than accidentally. The 70s, 90s, and Y2K all exist in current fashion simultaneously — the question is whether you are wearing them knowingly.", "chTag": "👗 STUDY", "chTask": "Pick one decade (60s-00s). Spend one hour researching its fashion. Find 5 images. Identify 3 specific elements from that decade in something you currently own.", "chDetail": "Resources: Vogue archive online (some free), Pinterest decade searches, documentary films. Look for: silhouette, color palette, specific garment types, cultural context.", "tips": [{"i": "🎬", "t": "Fashion documentaries: \"The First Monday in May,\" \"Unzipped,\" \"Valentino: The Last Emperor\""}, {"i": "🔍", "t": "Search: \"[decade] fashion editorial\" on Pinterest for curated reference"}, {"i": "🔄", "t": "Identify the decade reference in 3 things in your current wardrobe — it is always there"}], "reflect": "\"Which decade's aesthetic resonates most with you? Which elements keep appearing in what you are drawn to?\"", "aiFeedback": "Placing your own taste in historical context is what transforms style intuition into style intelligence. Knowing you are referencing the 90s intentionally is entirely different from accidentally wearing it.<br><br>Build a reference board of 20 images from your studied decade. It becomes a design brief for future shopping.", "scores": [{"label": "Research", "val": "8/10", "pct": 80, "color": "#2D2D2D"}, {"label": "Pattern Recognition", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Application", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Where Today's Clothes Came From", "lessonParas": ["Every piece of clothing you wear has a history. The T-shirt was underwear until Marlon Brando. Jeans were workwear until James Dean. The <strong>political and social context of clothes</strong> is inseparable from why they look the way they do.", "Understanding fashion history gives you a framework for everything you see — why something feels dated or timeless, what a silhouette is reacting against, why certain things cycle back every decade.", "The most influential garment of the 20th century is arguably the trench coat: designed for WWI trenches, repurposed by Burberry, made iconic by Humphrey Bogart, and still relevant today. One garment, multiple lives."], "tipTitle": "Pick one piece of clothing and research its full history — origin to today.", "tipSteps": ["Choose one piece from your wardrobe that you wear often.", "Research its origin: when was it invented, by whom, for what purpose?", "Find three significant cultural moments where this garment played a role.", "Note how the original design has changed and what's stayed the same.", "Wear it with that history in mind — see if it changes how you experience the piece."], "tryItTime": "45–60 minutes of research", "saveItText": "Write a short paragraph: the garment, its history, and why you wear it."}], "ai": [{"num": "CHALLENGE 02", "title": "CHAIN\nPROMPTS", "desc": "One prompt is a question. A chain of prompts is a system.", "ccIcon": "🔗", "ccTitle": "Prompt Chaining", "ccType": "Technique", "ccBody": "The most powerful AI workflows use <strong>prompt chaining</strong> — the output of one prompt becomes the input of the next. This lets you break complex tasks into manageable stages, each with its own quality check. Experts rarely write one long prompt; they write a sequence of focused ones.", "chTag": "🤖 BUILD", "chTask": "Build a 3-prompt chain to accomplish a complex task: (1) generate a rough draft, (2) critique it with specific criteria, (3) rewrite it incorporating that critique.", "chDetail": "Example: write a product description → critique for clarity and emotional appeal → rewrite incorporating critique. The critique prompt is the key: ask for specific, actionable feedback, not generic comments.", "tips": [{"i": "📝", "t": "Save your chains in a text file — great chains are reusable assets"}, {"i": "🎯", "t": "Each prompt should have one job. Clarity per step beats complexity in one prompt"}, {"i": "🔄", "t": "Add a \"self-check\" prompt at the end: ask the AI to find flaws in its own output"}], "reflect": "\"Which step in the chain produced the biggest improvement? What made that prompt effective?\"", "aiFeedback": "Prompt chaining is the shift from using AI as a tool to using it as a workflow. The critique prompt is almost always the highest-value step — most people skip straight to the final output and miss the refinement cycle.<br><br>Build a chain for a task you do repeatedly at work. The investment in building it once pays off every time.", "scores": [{"label": "Chain Design", "val": "8/10", "pct": 80, "color": "#0F172A"}, {"label": "Critique Quality", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Output Improvement", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Connecting Prompts into a Multi-Step Workflow", "lessonParas": ["A single prompt gets a single response. A <strong>chain of prompts</strong> builds a workflow — each response feeds into the next question, building complexity and refinement that no single prompt could achieve.", "Prompt chaining is the difference between asking an AI to write an essay and using AI to help you research, outline, draft, critique, and revise that essay — four different tasks, four different prompts, each building on the last.", "The skill is knowing how to hand off between steps: what output from step one becomes the input for step two? This design thinking about information flow is the core of effective AI use."], "tipTitle": "Map your process on paper before prompting — what are the steps?", "tipSteps": ["Choose a multi-step task: research, write, edit, or analyze something.", "Write out the steps on paper before opening any AI tool.", "Write a prompt for each step separately — don't combine them.", "Use the output of each prompt explicitly in the next prompt: 'Based on the above...'", "After completing the chain, identify which step produced the most unexpected value."], "tryItTime": "45–60 minutes", "saveItText": "Submit your final output and the chain of 4+ prompts that produced it."}, {"num": "CHALLENGE 03", "title": "BUILD A\nSYSTEM\nPROMPT", "desc": "The difference between a tool and a collaborator is the system prompt.", "ccIcon": "⚙️", "ccTitle": "System Prompts", "ccType": "Advanced", "ccBody": "A system prompt is the instruction you give an AI about <strong>who it is and how it should behave</strong> before any conversation begins. Mastering system prompts lets you create custom AI tools for specific jobs — a strict editor, a Socratic tutor, a devil's advocate, a business advisor.", "chTag": "🤖 BUILD", "chTask": "Write a system prompt that turns an AI into a specific expert persona. Test it with 5 different questions. Refine it until the AI consistently gives responses that match your intended persona.", "chDetail": "System prompt structure: role (who you are), goal (what you help with), constraints (what you never do), style (how you communicate), and a key example of the ideal response.", "tips": [{"i": "🎭", "t": "Name your persona and give it a specific background — it dramatically affects output quality"}, {"i": "❌", "t": "Include \"never do\" constraints — they are as important as positive instructions"}, {"i": "✅", "t": "Include one example of the ideal response in your system prompt — show, don't just tell"}], "reflect": "\"What constraint or instruction made the biggest difference to the output? Why?\"", "aiFeedback": "Building a working system prompt is the point at which AI use becomes AI engineering. The \"never do\" constraints and the example output are almost always the highest-leverage additions.<br><br>Build system prompts for 3 roles you regularly need: editor, researcher, and brainstorm partner. These become permanent tools.", "scores": [{"label": "Persona Design", "val": "8/10", "pct": 80, "color": "#0F172A"}, {"label": "Constraint Clarity", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Iteration", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Teaching an AI to Think Like Someone Specific", "lessonParas": ["A system prompt sets the context, persona, constraints, and style for an entire conversation. It's the <strong>instruction manual for a custom AI assistant</strong>. The same underlying model behaves very differently with different system prompts.", "Good system prompts specify: the role ('You are a senior product designer at a tech startup'), the task ('Your job is to critique design decisions with specific, actionable feedback'), the format ('Respond in bullet points'), and the constraints ('Do not use generic praise — only specific observations').", "The most powerful system prompts combine role, expertise level, communication style, and explicit constraints. Think of it as hiring someone and writing their job description before the first day."], "tipTitle": "Write your system prompt as if you're writing a job description.", "tipSteps": ["Choose a task you do regularly that an AI could help with.", "Write a system prompt with four elements: role, task, format, and constraints.", "Test the same conversation twice: once with the system prompt, once without.", "Note the differences: what changed about the quality, tone, or usefulness?", "Refine the system prompt based on what was missing in the first test."], "tryItTime": "30–45 minutes", "saveItText": "Submit your system prompt and a sample of the conversation it produced."}], "gaming": [{"num": "CHALLENGE 02", "title": "STUDY\nSTRATEGY", "desc": "The player who understands the game beneath the game wins.", "ccIcon": "♟️", "ccTitle": "Game Theory Basics", "ccType": "Strategy", "ccBody": "Every strategy game has a <strong>hidden meta</strong> — the optimal strategies that experienced players have discovered. Understanding dominant strategies, counter-play, and resource allocation theory transforms how you see any game. In chess: control the center. In Catan: control roads early. The principle generalizes.", "chTag": "🎲 STUDY", "chTask": "Pick one game you play. Spend 30 minutes reading strategy guides or watching analysis videos (YouTube: \"How to win at [game]\"). Play one game applying specifically what you learned.", "chDetail": "Look for: opening strategy, resource prioritization, win conditions, common mistakes. Apply one new concept deliberately per game session — not everything at once.", "tips": [{"i": "📹", "t": "Watching expert play in your game for 20 min teaches more than 5 hours of unguided play"}, {"i": "📝", "t": "Write down what you learned before playing. Recall improves application"}, {"i": "🎯", "t": "Focus on one strategic concept per session. Master it before adding the next"}], "reflect": "\"What did you notice about other players' moves that you never saw before?\"", "aiFeedback": "Studying the game beneath the game is the shift from player to student of the game. The patterns you noticed in others' play are exactly the kind of meta-awareness that improves your own game.<br><br>Watch a recorded game of a player much better than you. Narrate what they are doing and why.", "scores": [{"label": "Strategic Thinking", "val": "8/10", "pct": 80, "color": "#1E1B4B"}, {"label": "Application", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Pattern Recognition", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "The Hidden Strategy Underneath Every Game", "lessonParas": ["Game theory is the mathematical study of decision-making in situations where <strong>the outcome depends on the choices of others</strong>. It appears in economics, politics, and biology — but understanding it makes you a better player of any strategic game.", "The Prisoner's Dilemma is the most famous game theory problem: two players who can cooperate or defect. If both cooperate, both win moderately. If one defects and one cooperates, the defector wins big. If both defect, both lose. The 'rational' choice leads to mutual loss.", "In games, this translates to: pure aggression invites retaliation; pure cooperation invites exploitation. The most successful strategies — in game theory and in games — combine conditional cooperation with reliable retaliation."], "tipTitle": "Play your next game thinking about your opponent's incentives, not just your moves.", "tipSteps": ["Before your next session of any strategy game, identify the two or three key decisions the game presents.", "For each decision, ask: what does my opponent need? What are they incentivized to do?", "Design one move that forces your opponent into a difficult choice — not just one that helps you.", "After the game, identify one moment where you misread an opponent's incentive.", "Write down what you'd do differently now."], "tryItTime": "One full game session (60–90 minutes)", "saveItText": "Write a short post-game analysis: one good decision and one mistake, and why."}, {"num": "CHALLENGE 03", "title": "HOST\nA GAME\nNIGHT", "desc": "The best games are played with the right people, with the right rules.", "ccIcon": "🎯", "ccTitle": "Teaching & Facilitation", "ccType": "Social", "ccBody": "Teaching a game to new players is the most rigorous test of how well you understand it yourself. The ability to explain rules clearly, manage player engagement, and pace the session — especially with mixed-experience groups — is a distinct and valuable skill.", "chTag": "🎲 HOST", "chTask": "Host a game night with at least 4 players, including at least one first-timer. Teach the rules. Run the session from start to finish. Debrief what worked and what confused people.", "chDetail": "Teaching rules: start with the goal (how do you win?), then turn structure, then special cases. Never teach special rules first. Pause after setup for questions before beginning.", "tips": [{"i": "🏆", "t": "Start with \"here is how you win\" — everything else makes more sense in that context"}, {"i": "⏱️", "t": "Offer a practice round before the real game — removes first-timer anxiety dramatically"}, {"i": "🍕", "t": "Food and beverages dramatically improve game night engagement — not optional"}], "reflect": "\"Which rule was hardest to explain? What does that reveal about the game's design?\"", "aiFeedback": "Hosting reveals gaps in your own understanding that playing never exposes. The questions first-timers ask are always the most revealing.<br><br>Play the same game with the same group a second time. The difference in quality of play — and conversation — between session 1 and 2 is remarkable.", "scores": [{"label": "Teaching Clarity", "val": "8/10", "pct": 80, "color": "#1E1B4B"}, {"label": "Facilitation", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Engagement", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "Teaching a Game Is the Best Way to Understand It", "lessonParas": ["If you can't explain the core tension of a game in two sentences, you don't fully understand it yet. <strong>Teaching forces clarity</strong>. It reveals which rules you actually know versus which rules you've been faking your way through.", "Good game facilitation is different from reading the rulebook aloud. It involves: setting expectations ('This game rewards patience'), teaching only enough to start ('Learn the full rules after your first round'), and managing momentum ('Let's resolve this ambiguity and keep moving').", "The best teachers of any game help new players understand the feeling of the game before the rules — why it's interesting, what creates the tension, what makes it worth learning."], "tipTitle": "Teach the experience before the rules — start with 'here's what makes this game great.'", "tipSteps": ["Choose a game you know well and teach it to someone who has never played.", "Before touching rules, describe the core tension in one sentence.", "Teach only the rules needed for the first turn — defer exceptions.", "Narrate your own decisions during the game so the new player understands your thinking.", "After the game, ask: what was confusing? Improve your explanation for next time."], "tryItTime": "60–90 minutes", "saveItText": "Write your one-sentence core tension description and your 'teach before rules' opening."}], "travel": [{"num": "CHALLENGE 02", "title": "EAT\nLOCAL", "desc": "The best meal is always the one the tourists don't know about.", "ccIcon": "🍜", "ccTitle": "Food as Culture", "ccType": "Immersion", "ccBody": "Food is the most direct entry point into a culture's values, history, and daily life. <strong>What a place eats for breakfast</strong> tells you more about its people than any museum. The local market, the neighborhood spot, the grandmother's recipe — these are the authentic experiences that trip advisor ratings cannot capture.", "chTag": "✈️ EXPLORE", "chTask": "In your next trip or neighborhood exploration: find one meal eaten exclusively by locals. No tourist menus. Use Google Maps \"local favorites\" filter or simply walk until you see no English on the menu.", "chDetail": "Indicators of authentic local eating: no photos on the menu, staff unsurprised to see you, prices that seem impossibly low, the food arrives fast because they make it constantly.", "tips": [{"i": "🗺️", "t": "Google Maps reviews sorted by \"local guide\" find places tourists miss"}, {"i": "⏰", "t": "Eat at local mealtimes, not tourist hours — different food, better quality, lower prices"}, {"i": "🤌", "t": "Point at what someone else is eating and say \"that, please\" — works everywhere"}], "reflect": "\"What did this meal tell you about the place that nothing else had?\"", "aiFeedback": "Eating where locals eat is cultural immersion without a tour guide. The discomfort of a menu you cannot read is the discomfort of genuine encounter.<br><br>Research the history of one dish you ate. Food history is the most interesting kind.", "scores": [{"label": "Cultural Immersion", "val": "9/10", "pct": 90, "color": "#0C4A6E"}, {"label": "Adventure", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Curiosity", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Eating as the Most Direct Form of Cultural Exchange", "lessonParas": ["Every cuisine is a record of history, geography, and agriculture. What people eat tells you what grows where, what was traded, what was conquered or colonized, and what was preserved through generations. <strong>Food is edible culture</strong>.", "The most revealing food experiences happen outside tourist zones: the lunch counter where workers eat, the market where grandmothers shop, the street stall open only on certain days. These are the places where food hasn't been adapted for foreign palates.", "Eating what locals eat — even when you don't know what it is — is an act of respect. It says: I trust you to feed me well. That trust is often the beginning of real connection."], "tipTitle": "Eat one meal a day wherever locals eat — not where tourists eat.", "tipSteps": ["Find one local market, food hall, or neighborhood lunch spot — not in the tourist district.", "Order by pointing at what other people have — or by letting the server choose.", "Ask the name of what you're eating. Write it down.", "Research the dish after the meal: its history, its region, its occasion.", "Photograph it before eating and write two sentences about what you tasted."], "tryItTime": "60–90 minutes per meal experience", "saveItText": "Photograph your meal and submit the dish name and two things you learned about it."}, {"num": "CHALLENGE 03", "title": "SLOW\nTRAVEL", "desc": "Stay longer. See more. Spend less.", "ccIcon": "🏘️", "ccTitle": "Deep Immersion", "ccType": "Approach", "ccBody": "Slow travel — spending a week or more in one place rather than rushing through multiple cities — produces <strong>deeper cultural understanding and lower stress</strong>. You start seeing the same people, learning the shopkeeper's name, noticing which café fills up at 8am. This is the travel that changes you.", "chTag": "✈️ PLAN", "chTask": "Plan a 5-day itinerary for one neighborhood or small town — not a city of highlights. Include: one local market, one recurring spot to return to daily, one conversation with a non-tourist local.", "chDetail": "Slow travel budget hack: accommodation cost drops dramatically for 7+ day stays. Cook some meals. Walk everywhere. The money saved on rushing goes toward better experiences.", "tips": [{"i": "🏘️", "t": "Rent an apartment, not a hotel — you will immediately live more like a local"}, {"i": "☕", "t": "Find your café on day 1. Return every morning. By day 3 they will know your order."}, {"i": "📵", "t": "One day per trip with no planned itinerary produces the best stories"}], "reflect": "\"What did you notice on day 4 or 5 that you would have missed on a 2-day visit?\"", "aiFeedback": "Planning for depth rather than coverage is the philosophical shift at the center of meaningful travel. What you described noticing by day 4 or 5 is exactly what fast travel systematically prevents.<br><br>Plan your next trip with half the locations and twice the time in each.", "scores": [{"label": "Depth", "val": "9/10", "pct": 90, "color": "#0C4A6E"}, {"label": "Local Connection", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Intentionality", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "Slow Travel Changes What You See", "lessonParas": ["The most common travel mistake is covering too much ground too fast. <strong>Three days in one neighborhood beats one day in three cities</strong>. Depth creates understanding; breadth creates a highlight reel.", "Slow travel means returning to the same café, the same market, the same street corner. The first visit gives you impressions. The third visit gives you observations. Regulars start to recognize you. Patterns become visible.", "The opposite of tourism is not budget travel — it's attention. You can travel with almost no money and have richer experiences than someone on a luxury tour, if you are willing to stay longer and look more carefully."], "tipTitle": "Choose one neighborhood and don't leave it for two full days.", "tipSteps": ["On your next trip, pick one neighborhood of the city to base yourself in for 2 days.", "Walk every street in that neighborhood at least once.", "Return to one place twice — a café, a park bench, a market stall.", "Talk to one person who lives or works there — ask what they love about the neighborhood.", "Note what you noticed on day two that you missed on day one."], "tryItTime": "Two full days", "saveItText": "Submit a photograph and one paragraph: what you saw on day two that you missed on day one."}], "streetphoto": [{"num": "CHALLENGE 02", "title": "FIND\nYOUR\nCORNER", "desc": "The best street photographers return to the same spot for years.", "ccIcon": "📍", "ccTitle": "The Waiting Game", "ccType": "Patience", "ccBody": "Cartier-Bresson called it the <strong>decisive moment</strong> — the fraction of a second when form, light, and meaning align. But that moment is prepared by patience. Experienced street photographers find a location with interesting light and composition, then wait for the human element to complete the picture.", "chTag": "📷 WAIT", "chTask": "Find one location with strong light and interesting geometry. Stand there for 30 minutes. Photograph only when a person enters the frame and completes the composition. Minimum 10 frames.", "chDetail": "Set your composition first — the street, the shadow, the doorway. Your only job then is to wait. The person who walks through your pre-set composition is your subject, not your starting point.", "tips": [{"i": "⚙️", "t": "Zone focus: preset focus at 3 meters, aperture f/8 — everything 2-5m is sharp without looking through the viewfinder"}, {"i": "😐", "t": "Appear uninterested in your camera while you wait. Observation without performance."}, {"i": "🌅", "t": "Afternoon light throws long shadows — shadows are as interesting as people"}], "reflect": "\"Which frame did the person complete the image most perfectly? What made that one right?\"", "aiFeedback": "Pre-setting your composition and waiting for the decisive moment is the technique that separates reactive snapshot photography from intentional street work. The 30-minute wait teaches you to see potential in a location before anything happens in it.<br><br>Return to the same corner at a different time of day. The same spot is a completely different photograph.", "scores": [{"label": "Patience", "val": "9/10", "pct": 90, "color": "#18181B"}, {"label": "Composition", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Decisiveness", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Finding the Shot by Standing Still", "lessonParas": ["Most street photography novices walk constantly, covering distance. Experienced street photographers often find a <strong>compelling location and wait</strong>. They let the world walk into their frame rather than chasing it.", "Henri Cartier-Bresson called it 'the decisive moment' — the instant when all elements in a scene align into a perfect image. He sometimes waited hours at the same spot for that alignment. The street is patient. You have to be too.", "A good location has elements working for you: interesting light, a clean background, natural traffic patterns. Your job is to put yourself there and pay attention."], "tipTitle": "Find one location with interesting light and stay there for 30 minutes.", "tipSteps": ["Find a spot with good light — side-lit, not flat. Early morning and late afternoon are best.", "Stand or sit at that spot for 30 full minutes. Do not walk away.", "Pre-focus your camera at a fixed distance — zone focus at 2–3 meters.", "Shoot only when a subject enters your pre-focused zone.", "Afterward, review: did the images improve as you waited? Why?"], "tryItTime": "60–90 minutes on location", "saveItText": "Choose your single best image from the waiting session."}, {"num": "CHALLENGE 03", "title": "MAKE A\nZINE", "desc": "12 photos. One story. Printed and held in your hands.", "ccIcon": "📄", "ccTitle": "Editing & Sequencing", "ccType": "Curation", "ccBody": "A zine — a small, self-published photo book — forces the most important skill in photography: <strong>editing</strong>. Selecting 12 images from hundreds and sequencing them into a coherent story requires understanding each photo's relationship to the ones before and after it.", "chTag": "📷 EDIT", "chTask": "From your last month of shooting, select exactly 12 photographs that tell a story. Sequence them. Export as a PDF. Print at home on A4 paper folded and stapled. Hold it.", "chDetail": "Sequence rules: vary your distances (wide/close), avoid repeating the same quality of light back-to-back, start with something that hooks and end with something that lands.", "tips": [{"i": "✂️", "t": "Select 30 candidates first, then cut to 20, then 12. Never start with 12."}, {"i": "📐", "t": "Canva has free zine templates — design takes 20 minutes"}, {"i": "🖨️", "t": "Home printing on photo paper looks better than you expect. Try it before ordering prints."}], "reflect": "\"What story do these 12 photos tell that you did not intend when you shot them?\"", "aiFeedback": "The edit is the photograph. The 12 images you selected reveal your visual sensibility more clearly than any single image could. The story that emerged is the one your eye was collecting without your knowing it.<br><br>Show the zine to someone who was not there when you shot it. Their reading of the story is the definitive one.", "scores": [{"label": "Editing", "val": "9/10", "pct": 90, "color": "#18181B"}, {"label": "Sequencing", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Story", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "The Images You Don't Show Are as Important as the Ones You Do", "lessonParas": ["Every serious photographer has thousands of images and shows dozens. <strong>Editing is a skill separate from taking pictures</strong> — it requires distance, honesty, and a different set of eyes than the ones behind the camera.", "The first step in editing street work: remove every technically flawed image. Out of focus, badly exposed, cut off awkwardly. No sentiment — these are not usable. What remains is your raw material.", "Sequencing is how individual images become a body of work. Images that don't seem related individually can create a conversation when placed in sequence — tension, echo, contrast, progression."], "tipTitle": "Wait 48 hours before editing — emotional distance reveals quality.", "tipSteps": ["Import all images and wait 48 hours before looking at them.", "First pass: delete technically flawed images without sentiment.", "Second pass: identify the 10% that genuinely interest you.", "Third pass: select the 5 images that speak to each other — sequence them.", "Show the sequence to someone and ask: what story do these tell together?"], "tryItTime": "60–90 minutes editing session", "saveItText": "Submit your sequenced edit of 4–6 images as a series."}], "sneakers": [{"num": "CHALLENGE 02", "title": "CUSTOM\nSOLES", "desc": "Learn the chemistry of paint on rubber and leather.", "ccIcon": "🎨", "ccTitle": "Sole Customization", "ccType": "Technique", "ccBody": "Sole customization — painting midsoles and outsoles in custom colors — is the most forgiving starting point for sneaker customization. The right preparation is everything: <strong>acetone deglaze, primer, flexible paint</strong>. Skip any step and the paint cracks within weeks.", "chTag": "👟 CUSTOMIZE", "chTask": "Find a beater pair of sneakers. Deglaze the sole with acetone. Apply 3 thin coats of Angelus paint in a new color. Finish with matte or gloss finisher.", "chDetail": "Step 1: clean with acetone (removes factory coating). Step 2: 3 thin coats, each fully dry before next. Step 3: 2 coats Angelus finisher to seal. Thin coats = no cracking.", "tips": [{"i": "⏳", "t": "Thin coats dry in 15 minutes. Thick coats peel. Patience is the technique."}, {"i": "🖌️", "t": "Angelus leather paint is the industry standard — do not substitute"}, {"i": "💨", "t": "Never use a heat gun to speed drying — it causes immediate cracking"}], "reflect": "\"What surprised you about how the paint behaved? What would you do differently?\"", "aiFeedback": "Sole customization teaches the fundamental principle of all sneaker work: preparation determines outcome. The acetone step that feels like unnecessary caution is what makes the paint last.<br><br>Try a second pair using tape to create a clean two-tone split on the midsole.", "scores": [{"label": "Prep Work", "val": "8/10", "pct": 80, "color": "#FF5733"}, {"label": "Paint Technique", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Patience", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "The Sole Is the Foundation of the Design", "lessonParas": ["In sneaker customization, the sole unit is often overlooked — but it <strong>anchors the visual weight of the entire shoe</strong>. The sole color, material finish, and any painted details set the tone for everything above it.", "Sole swaps are the highest-impact customization: replacing an aged yellow sole with a clean white, or transplanting a sole from a different shoe entirely. The technical skill is sole preparation — cleaning, roughing, priming, and bonding with the right adhesive.", "Sole icing — the frosted translucent treatment — is a popular technique that requires UV-reactive paint and consistent layering. The depth of the icy effect comes from multiple thin coats, not one thick application."], "tipTitle": "Prep the sole before any treatment — adhesion failures come from inadequate prep.", "tipSteps": ["Clean the sole with acetone to remove all factory coatings and dirt.", "Sand lightly with 220-grit sandpaper to create tooth for adhesion.", "Apply one thin coat of primer designed for rubber surfaces.", "Apply your paint or treatment in multiple thin layers — dry completely between coats.", "Finish with a flexible sealant — rigid sealants crack with flex."], "tryItTime": "60–90 minutes (plus drying time)", "saveItText": "Photograph the sole from below and from the side showing the finish."}, {"num": "CHALLENGE 03", "title": "STITCH\nAND\nLACE", "desc": "Details make the difference between a custom sneaker and a painted one.", "ccIcon": "🧵", "ccTitle": "Details & Finishing", "ccType": "Craft", "ccBody": "Custom lacing patterns, hand-stitched details, and hardware swaps are the finishing touches that elevate a custom shoe from painted to crafted. <strong>Lace swapping</strong> is the fastest, cheapest transformation in sneaker customization — different lace colors completely change a silhouette's balance.", "chTag": "👟 DETAIL", "chTask": "Order 3 different colored/textured lace sets for one pair. Lace all 3 using different patterns (straight bar, over-under, lattice). Photograph each. Choose the one that makes the shoe look best.", "chDetail": "Lace patterns: straight bar lacing (clean, minimal), display lacing (shows pattern clearly), over-under (security, sport). Different patterns read differently from a distance vs close.", "tips": [{"i": "🪡", "t": "Rope laces add texture and dimension that flat laces cannot"}, {"i": "📐", "t": "Lace length determines which patterns are possible — check before ordering"}, {"i": "🔩", "t": "Aglet wrapping with embroidery thread customizes the very tip of the lace for under $2"}], "reflect": "\"Which lace choice changed the shoe's character most? What specifically changed?\"", "aiFeedback": "Understanding how lacing pattern changes visual weight and proportion is the observation that distinguishes a sneaker customizer from someone who changes laces. You are now reading silhouette.<br><br>Take a silhouette you do not usually like. Change only the laces and photograph it. You may change your mind.", "scores": [{"label": "Detail Eye", "val": "8/10", "pct": 80, "color": "#FF5733"}, {"label": "Craft", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Visual Sense", "val": "9/10", "pct": 90, "color": "#B8D96E"}], "lessonTitle": "How Small Details Make or Break a Custom", "lessonParas": ["The difference between a custom that looks amateur and one that looks professional is almost always in the <strong>finishing details</strong>: clean edge transitions, sharp lines, consistent coverage, and proper sealing.", "Taping is the most undervalued skill in sneaker customization. Good tape application — with burnished edges and careful geometry — creates crisp lines that feel intentional. Bad tape creates bleeds and soft edges that look accidental.", "The final sealant is not optional. Paint on leather or canvas will crack and peel without proper finishing. Multiple thin coats of a flexible finisher protect the design and also affect the final sheen — matte, satin, or gloss."], "tipTitle": "Apply painter's tape and burnish every edge with a fingernail before painting.", "tipSteps": ["Apply all tape to areas you want to protect.", "Run your fingernail firmly along every tape edge — this prevents paint bleed.", "Test your color on paper before applying to the shoe.", "Apply 3–4 thin coats, allowing full dry time between each.", "Remove tape while the final coat is still slightly tacky — cleaner edges."], "tryItTime": "90 minutes (plus drying)", "saveItText": "Photograph the finished detail area and the full shoe — show the edge quality."}], "collectibles": [{"num": "CHALLENGE 02", "title": "GRADE &\nCONDITION", "desc": "The difference between a $10 card and a $1000 card is millimeters of centering.", "ccIcon": "🔍", "ccTitle": "Grading Standards", "ccType": "Knowledge", "ccBody": "Professional grading (PSA, BGS, SGC) evaluates cards and collectibles on <strong>centering, corners, edges, and surface</strong>. A card graded 10 (gem mint) can be worth 10-100x a grade 7. Learning to evaluate condition transforms how you shop, store, and display your collection.", "chTag": "🃏 GRADE", "chTask": "Take 5 cards or collectibles from your collection. Grade each one yourself using PSA criteria. Photograph each under good light. Note your grade and your reasoning for each.", "chDetail": "PSA scale: 10 (gem mint), 9 (mint), 8 (near mint-mint), 7 (near mint). Centering: front and back. Corners under 5x magnification. Surface under raking light (45-degree angle reveals scratches).", "tips": [{"i": "🔦", "t": "Raking light (45-degree angle) reveals surface scratches invisible under direct light"}, {"i": "🔍", "t": "A $10 loupe (jeweler's magnifier) shows corners accurately — essential for grading"}, {"i": "📐", "t": "Centering: measure the border on each side. Perfect 50/50 is gem territory"}], "reflect": "\"What condition issue appeared most often across your collection? What does that tell you about how you have been storing things?\"", "aiFeedback": "Self-grading your collection changes how you see every future purchase. The condition issue you found most often reveals a storage or handling habit to change now before it affects more pieces.<br><br>Re-sleeve everything that matters tonight. The cost of penny sleeves is nothing compared to grade loss.", "scores": [{"label": "Grading Accuracy", "val": "7/10", "pct": 70, "color": "#7C2D12"}, {"label": "Observation", "val": "9/10", "pct": 90, "color": "#ACD8F0"}, {"label": "Knowledge", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Condition Is Everything in Collecting", "lessonParas": ["In the collectibles market, a one-grade difference in condition can mean a 10× difference in value. <strong>Grading is the universal language of collectors</strong> — a standardized system for describing condition that lets buyers and sellers transact across distances.", "Professional grading services (PSA, BGS, CGC) have formalized standards with specific criteria for each grade level. But most collectors need to assess raw (ungraded) items themselves first — knowing what to look for prevents expensive mistakes.", "The most important lesson: grade conservatively when selling, critically when buying. The items you think are Near Mint are usually Very Fine. The items you're offered as Very Fine are often Fine or below."], "tipTitle": "Always grade under strong, raking light — surface defects hide in flat light.", "tipSteps": ["Source strong directional lighting — a single bright bulb from 45 degrees reveals surface texture.", "Examine the item systematically: corners first, then edges, then surface, then back.", "Note every flaw, however small — grade to the worst defect, not the best area.", "Compare to a published grading guide before assigning a grade.", "Photograph every flaw — if you're selling, disclosure protects your reputation."], "tryItTime": "30–45 minutes", "saveItText": "Photograph one item with your condition notes and your assigned grade."}, {"num": "CHALLENGE 03", "title": "BUILD\nYOUR\nFOCUS", "desc": "The best collections tell a story. Random accumulation tells nothing.", "ccIcon": "🏆", "ccTitle": "Collection Strategy", "ccType": "Curation", "ccBody": "The most valuable collections — financially and personally — are <strong>focused</strong>. Collector strategy: define your niche (one player, one era, one graded condition range), become deeply knowledgeable about it, and buy the best examples you can afford. Focused collectors almost always outperform generalists.", "chTag": "🃏 CURATE", "chTask": "Write a one-paragraph collecting thesis: what specifically you collect, why it matters to you, and what the ideal version of your collection looks like in 3 years.", "chDetail": "Collecting thesis structure: focus (what exactly), personal significance (why this), condition standard (what grade minimum you accept), budget ceiling per item, and the white whale (the one piece that would complete this chapter).", "tips": [{"i": "📝", "t": "A written thesis means every purchase either fits or it does not — decisions become easy"}, {"i": "🐋", "t": "Identifying your white whale focuses research and builds expertise around the pieces that matter"}, {"i": "💰", "t": "One great piece is always a better investment than ten mediocre ones"}], "reflect": "\"What does this collection say about what matters to you? What story are you building?\"", "aiFeedback": "Writing a collecting thesis is the moment random accumulation becomes intentional curation. The white whale you identified gives every eBay search, every card show, and every trade a direction.<br><br>Research your white whale in depth this week — its history, its print run, its market. Expertise always precedes the best acquisition.", "scores": [{"label": "Focus", "val": "9/10", "pct": 90, "color": "#7C2D12"}, {"label": "Strategic Thinking", "val": "8/10", "pct": 80, "color": "#ACD8F0"}, {"label": "Self-Knowledge", "val": "8/10", "pct": 80, "color": "#B8D96E"}], "lessonTitle": "Collecting With Intention Instead of Accumulation", "lessonParas": ["Most collectors start by accumulating — buying broadly because everything is interesting. Experienced collectors specialize — building <strong>depth in a defined area</strong> where knowledge creates real advantage.", "Specialization means you know the market better than most sellers. You know which variants are scarce versus common, which grades command premiums, which sellers are reliable. This knowledge is worth more than capital.", "The best collections tell a story. They have a thesis — a specific aspect of the category being explored deeply. A collection of every issue of a particular series is different from a collection of key issues from the same series. One is complete; the other is curated."], "tipTitle": "Define what you're collecting in one sentence — if you can't, you're accumulating.", "tipSteps": ["Write a one-sentence definition of your collection: what it includes and what it excludes.", "Audit your current collection against this definition — what doesn't fit?", "Identify three grails: the most significant items your collection doesn't yet have.", "Research the acquisition path for each grail: where they come up, what they trade for, what condition is acceptable.", "Sell one item that doesn't fit your defined focus — use the proceeds toward a grail."], "tryItTime": "60–90 minutes (audit + planning)", "saveItText": "Submit your collection definition sentence and your three grails with brief explanations."}]};

// ── PROJECT STEPS ────────────────────────────────────────────
const PROJECT_STEPS = {
  photography: [
    'Choose one walk route — a street you pass daily but never actually look at.',
    'Open your camera app. Set it to 2× zoom or portrait mode to force intentional framing.',
    'Walk slowly. Stop whenever something catches your eye: light, shadow, texture, shape, coincidence.',
    'For each shot, try three angles before pressing the shutter — far, medium, close.',
    'Shoot 30-40 frames total. Edit ruthlessly down to your 10 strongest.',
    'Look at your 10 photos together. What subject kept pulling you in? That\'s your instinct telling you something.'
  ],
  painting: [
    'Squeeze out 3 colors + white onto your palette. That\'s your full range — no more.',
    'Wet your brush slightly and thin your first layer with water until it\'s translucent.',
    'Block in the largest shapes first with flat, loose strokes. Do not add detail yet.',
    'Let each layer dry at least 2 minutes. Painting wet-on-wet at this stage muddles everything.',
    'Work background to foreground: fill the backdrop first, then midground, then your subject.',
    'Detail pass last. Add specifics only in the 2-3 areas where your eye naturally lands.'
  ],
  writing: [
    'Read your prompt once, set it aside, and write for 5 minutes without stopping or correcting.',
    'Read back what you wrote and find one sentence or image that feels alive — even if just a fragment.',
    'Start a second draft from that image. It\'s your real beginning, even if it\'s on line 4.',
    'Cut everything in the opening that doesn\'t immediately pull a reader in.',
    'Read the whole piece aloud. Fix anything that sounds wrong to your ear — awkwardness is audible.',
    'Cut 10% of the final word count. Tighter is always better.'
  ],
  cooking: [
    'Read the full recipe before starting. Confirm you have every ingredient and tool.',
    'Prep everything first (mise en place): chop, measure, and set out ingredients in small bowls.',
    'Heat your pan before adding oil — and your oil before adding food. This prevents sticking.',
    'Turn the heat lower than you think you need. Most beginners burn food with too much heat.',
    'Taste at the midpoint — not just at the end. Adjust salt, acid, or heat before you plate.',
    'Plate intentionally before eating. Even a rough arrangement makes the meal feel considered.'
  ],
  baking: [
    'Weigh everything in grams if you can. Volume measurements (cups) are inconsistent.',
    'Bring butter and eggs to room temperature before starting — cold fat won\'t cream properly.',
    'Cream butter and sugar for a full 3-4 minutes until pale and noticeably fluffy.',
    'Add eggs one at a time, letting each fully incorporate before adding the next.',
    'Fold dry ingredients with a spatula, not a mixer. Stop as soon as the flour disappears.',
    'Check doneness 5 minutes before the recipe says — every oven runs differently.'
  ],
  yoga: [
    'Sit cross-legged and take 5 slow breaths: 4 counts in, 6 counts out.',
    'Move through 5 cat-cow cycles. Match each inhale to an arch, each exhale to a round.',
    'Hold child\'s pose for 60 full seconds. Let your hips sink without forcing them.',
    'Come to downward dog. Pedal your heels one at a time to release your calves.',
    'Flow through 3 sun salutations at your own pace. There is no correct speed.',
    'Close lying flat on your back for 2 minutes. Notice what feels different from when you started.'
  ],
  ceramics: [
    'Wedge your clay on the table for 2 minutes in a rhythmic push-and-fold motion to remove air bubbles.',
    'Center the clay on the wheel with both hands, pressing inward and slightly downward as the wheel spins.',
    'Open the clay: press both thumbs straight down through the center, leaving a 1/4 inch base.',
    'Pull the walls up in slow, even passes from base to rim — thin gradually, not all at once.',
    'Use a wooden rib against the outside wall to shape the form and compress the clay.',
    'Cut free with a wire tool and let it rest uncovered for 20-30 minutes before moving.'
  ],
  gardening: [
    'Choose a spot with at least 4-6 hours of direct sun per day.',
    'Clear existing weeds fully — pull from the root, not just the top.',
    'Loosen the soil 6-8 inches deep with a fork. Compacted soil blocks root growth.',
    'Mix in a bag of compost per square meter. This matters more than any fertilizer.',
    'Plant seeds at twice their diameter in depth. Too shallow dries out; too deep won\'t germinate.',
    'Water at the base (not on leaves) and check soil moisture daily for the first two weeks.'
  ],
  birdwatching: [
    'Download Merlin Bird ID (free, Cornell Lab) and open the Sound ID feature.',
    'Step outside and stand completely still for 2 full minutes. Your movement initially disperses birds.',
    'Look at edges: where trees meet open ground, where water meets land. Birds work transitions.',
    'When you spot movement, track it with your eyes for 5 seconds before raising binoculars.',
    'Note size (sparrow or pigeon scale?), color pattern, beak shape, and what the bird is doing.',
    'Log the sighting in eBird. Even common birds count and build your awareness over time.'
  ],
  reading: [
    'Choose a book you own but haven\'t started. Pick the longest one with no bookmark in it.',
    'Find a consistent time and place — the same chair at the same hour each day trains the habit.',
    'Turn your phone fully off (not silent) for the session duration.',
    'Mark any passage that makes you stop: underline it, fold the corner, use a sticky note.',
    'After finishing, sit still for 2 minutes before reaching for your phone. Let it settle.',
    'Write 2 sentences about what you read. Even one observation. This doubles retention.'
  ],
  piano: [
    'Sit with the bench at the right height: forearms roughly parallel to the floor, elbows slightly elevated.',
    'Find middle C — the white key just left of center, immediately before the 2-black-key group.',
    'Place your right hand in 5-finger position: thumb on C, index on D, middle on E, ring on F, pinky on G.',
    'Practice right hand alone: play C-D-E-F-G up and back down. Slowly, 10 times.',
    'Now left hand alone, an octave lower. Same pattern, 10 times.',
    'Put both hands together at the slowest possible tempo — slower than feels necessary. This is how accuracy is built.'
  ],
  collage: [
    'Gather your materials: scissors or hands (for tearing), a glue stick, thick base paper, and source images.',
    'Browse your sources quickly and pull 15-20 images that catch your eye. Follow instinct — don\'t edit yet.',
    'Lay everything on the base paper without gluing. Experiment with overlaps, scale, and angles.',
    'Apply your 3-color rule: remove or flip over anything that breaks your palette. This is the edit.',
    'Once the composition feels right, glue from the bottom layer up — background elements first.',
    'Press flat under a heavy book for 15 minutes while the glue sets fully.'
  ],
  drawing: [
    'Set your reference where you can see it without moving your head.',
    'Start with the largest outer shape: draw its boundary in light, loose lines. No detail yet.',
    'Check proportions: how wide is the subject relative to its height? Map each major part against the whole.',
    'Add inner shapes next. Keep building structure — don\'t render detail until the structure is right.',
    'Identify your lightest and darkest areas before adding any shading.',
    'Shade with consistent strokes from dark to light. Step back and compare to your reference every few minutes.'
  ],
  dancing: [
    'Find a 3-minute song with a clear, steady beat (pop or R&B works well).',
    'Clap along to find the downbeat — the kick drum, usually on counts 1 and 3.',
    'Feet only first: step left on 1, feet together on 2, step right on 3, feet together on 4.',
    'Once the feet feel automatic, add a small knee bend on each beat.',
    'Let your hips follow the knee movement naturally — that\'s where style begins.',
    'Add one arm swing: the opposite arm to your stepping foot, relaxed at the elbow. That\'s a full basic.'
  ],
  knitting: [
    'Cast on 20 stitches using the long-tail method — watch the technique 3 times before trying.',
    'Hold the needle with stitches in your left hand, empty needle in your right.',
    'Insert the right needle tip into the first stitch from front to back.',
    'Wrap the working yarn counter-clockwise around the right needle tip.',
    'Pull the new loop through the stitch and slide the old stitch off the left needle.',
    'Repeat across the row. At the end, turn the work — now the other needle holds the stitches.'
  ],
  journaling: [
    'Date the top of the page. This always matters more later than it does now.',
    'Write the first thing you notice about how you feel right now — physical, emotional, or both.',
    'Let that observation lead somewhere. When did it start? Where do you feel it in your body?',
    'Write without stopping for 10 minutes. No editing, no re-reading mid-session.',
    'Re-read once at the end. Underline one sentence that surprises you — often your own writing surprises you.',
    'Close the journal. Don\'t re-read it for at least 3 days. Distance is part of the practice.'
  ],
  woodworking: [
    'Mark your cut line clearly with a pencil and a combination square — accuracy now prevents all errors downstream.',
    'Clamp your workpiece securely so both hands remain free for the tool.',
    'Start your saw cut on the waste side of the line — not on the line itself. The blade has thickness.',
    'Use long, smooth strokes with light pressure. Let the saw do the cutting, not your arm.',
    'Dry-fit all pieces before applying any glue. Test the fit with hand pressure.',
    'Apply glue sparingly, clamp for at least 30 minutes, and wipe squeeze-out with a damp cloth immediately.'
  ],
  videography: [
    'Choose one location and shoot only there for the whole session. Constraints create focus.',
    'Set your phone to the highest video quality and lock your exposure (tap and hold on iPhone or Android).',
    'Film everything on a stable surface or tripod. Handheld is a creative choice, not a default.',
    'Shoot each moment at least three ways: a wide shot establishing where we are, a medium shot, and a close-up.',
    'Record each shot at least 10 seconds longer than you think you need. Edit needs handles.',
    'Import to CapCut or iMovie (both free). Cut to 30 seconds without adding music yet. Let the cuts breathe first.'
  ],
  hiking: [
    'Pack the essentials: 2L of water, a snack, your phone with an offline AllTrails map, and a warm layer.',
    'Start with a trail clearly shorter than your maximum — blisters and knee strain hit on the way back.',
    'Walk at a pace where you can hold a full conversation without pausing for breath.',
    'Stop at every viewpoint and turn around to see where you came from. The view back is always different.',
    'Eat something every 90 minutes before you feel hungry. Energy drops are always delayed.',
    'Start heading back at exactly the halfway time — regardless of how far you\'ve gone.'
  ],
  interior: [
    'Empty one surface completely (a shelf, a mantle, a table). Experience the blank space.',
    'Photograph the empty space as a reference before adding anything back.',
    'Return only items you actively love or that have a real function in that spot.',
    'Apply the odd-number rule: group objects in 3s or 5s — even numbers feel static.',
    'Vary the heights within each group: one tall, one medium, one low.',
    'Step back to the doorway and photograph the result. The camera reveals what your eye misses.'
  ],
  fashion: [
    'Empty your entire closet onto your bed — everything must leave.',
    'Sort into three piles: wear regularly, keep but rarely reach for, never wear.',
    'Try on every item in the "rarely wear" pile. Ask yourself: what has stopped me from wearing this?',
    'Remove anything with a clear answer: wrong fit, wrong color, belongs to a past version of you.',
    'Build 3 complete outfits from what remains. These are your core looks.',
    'Photograph each outfit flat or on a hanger. This becomes your reference.'
  ],
  ai: [
    'Pick one specific task you do repeatedly — writing a first draft, summarizing, brainstorming.',
    'Write a prompt describing the task in concrete terms: include context, format, tone, and constraints.',
    'Run the prompt. Read the output and note precisely where it succeeded and where it missed.',
    'Rewrite the prompt based on the gaps — be more specific about length, format, or style.',
    'Run the revised prompt and compare outputs side by side.',
    'Save the better prompt. This is your first reusable template — the foundation of your workflow.'
  ],
  gaming: [
    'Choose a game designed for newcomers: cozy, puzzle, or story-driven games lower the barrier.',
    'Play the tutorial fully. Don\'t skip it. Tutorials reveal what the designer considers most important.',
    'For the first 30 minutes, focus on understanding the systems — not winning.',
    'When you fail, wait 60 seconds before retrying. Was it a knowledge gap or a reflex gap?',
    'Play one full session without switching games. The learning curve breaks at 45-90 minutes.',
    'After the session, write one sentence about the most interesting choice you had to make.'
  ],
  travel: [
    'Choose one specific neighbourhood, not an entire city. Go deep, not broad.',
    'Leave your phone in your pocket for the first 30 minutes of any walk. Navigate by instinct.',
    'Enter one shop or café you wouldn\'t normally enter. Order the smallest thing on the menu.',
    'Find where locals eat at 12:30pm on a weekday. That place — not the tourist spots — is the real answer.',
    'Ask one person you interact with what they\'d show a friend visiting for one day only.',
    'Photograph what surprises you, not the famous things. Your surprises are your story.'
  ],
  streetphoto: [
    'Walk at 70% of your normal pace. Most street shots are missed by walking past them.',
    'For your first 10 minutes, shoot from the hip — camera at waist height, no viewfinder.',
    'Find a spot with strong directional light (a building gap, a window, a doorway) and wait there for 10 minutes.',
    'Pre-frame your shot and let subjects walk through it rather than chasing them.',
    'Shoot when something makes you look twice — immediately, before your brain overrides your eye.',
    'Do not delete in the field. Edit later, with time and distance between you and the moment.'
  ],
  sneakers: [
    'Choose one specific sneaker model to research. Look up its original release year and colorway history.',
    'Compare current asking prices across three platforms: GOAT, StockX, and eBay completed sales.',
    'If you have a pair in hand: assess condition — sole yellowing, upper creasing, lace condition, box quality.',
    'Find 3 visual authentication points specific to this model. Each silhouette fakes differently.',
    'Research what makes this particular colorway valuable or rare within the model\'s history.',
    'Write your assessment: what makes this pair worth owning — or not.'
  ],
  collectibles: [
    'Choose one specific sub-category — not "vintage toys" but "1978-1985 Kenner Star Wars vehicles."',
    'Spend 30 minutes on eBay looking only at completed sales (not listings) to understand real market values.',
    'Find one item in fair-to-good condition priced at or below recent comps.',
    'Inspect before buying: what is the condition grade? What affects value most in this category?',
    'Store your piece properly: UV-blocking sleeve or box, away from direct light and humidity.',
    'Document it immediately: photograph front, back, any markings, any defects. This is your permanent record.'
  ]
};

// ── HOBBY FRICTION ───────────────────────────────────────────
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
  videography: [
    'Good video requires camera work, audio, lighting, and editing — four disciplines to develop together.',
    'Editing takes 2–3x longer than shooting. Your first project will take far longer than you expect.',
    'Phone cameras are genuinely good enough. Most limitations come from framing and audio, not the sensor.'
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

// ── FREE TOOLS ───────────────────────────────────────────────
const HOBBY_TOOLS_FREE = {
  photography: [
    {icon:"📱", name:"Your smartphone",    note:"Already in your pocket. iPhone/Android cameras are excellent for every assignment.", source:"home"},
    {icon:"🪟", name:"Window light",       note:"Free softbox. Position your subject 2 feet from a window, facing out.",             source:"home"},
    {icon:"🏠", name:"Household subjects", note:"Fruit, plants, hands, shoes — any object at home completes every exercise.",        source:"home"},
  ],
  painting: [
    {icon:"🛒", name:"Dollar store kit",   note:"Acrylic paint ($1), foam brushes ($1), cardboard from recycling = full setup under $3.", source:"store"},
    {icon:"🏠", name:"Kitchen tools",      note:"Credit card for scraping, fork for texture, fingers for blending. No painting tools needed.", source:"home"},
    {icon:"🌿", name:"Paint outside",      note:"Take the $3 kit outside. Natural light shows colour truer than any lamp.",          source:"outside"},
  ],
  writing: [
    {icon:"🏠", name:"Pen + any paper",    note:"Notebook, printer paper, back of a receipt. Writing needs nothing digital.",        source:"home"},
    {icon:"🌿", name:"Write somewhere new",note:"Take your notebook to a park, café, or bench. New space = new ideas.",              source:"outside"},
    {icon:"🌐", name:"Google Docs",        note:"Free, auto-saves, works on any phone. Use it to hit word-count assignments.",       source:"web"},
  ],
  cooking: [
    {icon:"🏠", name:"Your pantry right now", note:"Pasta, canned beans, eggs, oil, salt. Complete the first 3 assignments today.", source:"home"},
    {icon:"🛒", name:"Dollar store basics",   note:"Salt, pepper, garlic powder, oil, pasta. Full starter kit for under $5.",       source:"store"},
    {icon:"🔥", name:"One pan",               note:"Every beginner assignment works with a single pan. No special equipment.",       source:"home"},
  ],
  baking: [
    {icon:"🏠", name:"Flour, sugar, eggs, butter", note:"The first 4 assignments need only these. Check your pantry before buying anything.", source:"home"},
    {icon:"🛒", name:"Dollar store kit",            note:"Mixing bowl, wooden spoon, measuring cups — all available at dollar stores.",       source:"store"},
    {icon:"🌐", name:"Recipe scaler (recipescale.app)", note:"Adjust any recipe to your pan size for free. Use it for scaling assignments.", source:"web"},
  ],
  yoga: [
    {icon:"🏠", name:"Carpet or rug",        note:"No mat needed to start. A soft carpet or folded blanket works for every beginner pose.", source:"home"},
    {icon:"🌿", name:"Grass outside",        note:"Morning grass is the best mat. Bare feet on the ground is the traditional way.",        source:"outside"},
    {icon:"🧺", name:"Folded towel/blanket", note:"Use as a block substitute for most beginner modifications. Already in your home.",       source:"home"},
  ],
  ceramics: [
    {icon:"🛒", name:"Air-dry clay (~$3)",   note:"No kiln, no wheel needed. Dollar store air-dry clay works for every hand-building assignment.", source:"store"},
    {icon:"🏠", name:"Kitchen tools",        note:"Butter knife for cutting, fork for texture, rolling pin for slabs. No ceramics tools needed.", source:"home"},
    {icon:"🌿", name:"Natural clay",         note:"Near a riverbank or clay-rich soil? Dig some up. Real clay, zero cost.",                       source:"outside"},
  ],
  gardening: [
    {icon:"🏠", name:"Any container",        note:"Yogurt tub, old mug, plastic bag with holes. Any container works for assignment 1.", source:"home"},
    {icon:"🛒", name:"Dollar store seeds",   note:"Seed packets ($0.50–1) and basic potting mix — both at dollar stores.",             source:"store"},
    {icon:"🌿", name:"Ground outside",       note:"A patch of dirt in a yard or community garden is the most complete setup.",         source:"outside"},
  ],
  birdwatching: [
    {icon:"🌿", name:"Go outside right now",      note:"Stand still near trees or water for 15 minutes. That's the whole first assignment.", source:"outside"},
    {icon:"🌐", name:"Merlin Bird ID (free)",      note:"Upload a photo of any bird and get an instant ID. Use it for every identification assignment.", source:"web"},
    {icon:"🏠", name:"Look out your window",       note:"Birds visit yards constantly. A window and patience is a complete beginner setup.",           source:"home"},
  ],
  reading: [
    {icon:"📚", name:"Any book you own",            note:"Start with something already on your shelf. Every unread book counts.",        source:"home"},
    {icon:"🌐", name:"Project Gutenberg",           note:"Thousands of free classics online. No account needed at gutenberg.org.",      source:"web"},
    {icon:"🌐", name:"Libby (free library ebooks)", note:"Connect your library card and borrow any book free on your phone.",           source:"web"},
  ],
  piano: [
    {icon:"🌐", name:"Virtual Piano (virtualpiano.net)", note:"Play real piano keys on your keyboard or touchscreen. Use it to complete every note and melody assignment.", source:"web"},
    {icon:"🌐", name:"Musicca.com",                      note:"Free interactive ear training. Use for listening and interval assignments.",                                  source:"web"},
    {icon:"🏠", name:"Paper keyboard",                   note:"Draw the keys on paper and tap to feel the spacing. Free muscle-memory drill.",                              source:"home"},
  ],
  collage: [
    {icon:"🏠", name:"Old magazines + glue",   note:"Raid the recycling bin. Magazines, catalogues, junk mail = free collage supply.",  source:"home"},
    {icon:"🛒", name:"Dollar store kit",       note:"Glue stick ($1), scissors ($1), poster board ($1). Full setup for $3.",            source:"store"},
    {icon:"🌿", name:"Nature materials",       note:"Leaves, pressed flowers, bark, stones. Glue to paper. Zero cost.",                 source:"outside"},
  ],
  drawing: [
    {icon:"🏠", name:"Pen + printer paper",    note:"The cheapest possible tools. Every beginner assignment works with a ballpoint and printer paper.", source:"home"},
    {icon:"🛒", name:"Dollar store sketchbook",note:"~$1.25 at Dollar Tree. Fill it fast — that's the goal.",                                          source:"store"},
    {icon:"🌿", name:"Draw outside from life", note:"Take paper and pen outside. Drawing real things beats drawing from photos.",                      source:"outside"},
  ],
  dancing: [
    {icon:"🏠", name:"Your living room",       note:"Push back the furniture. 6 square feet is enough for every beginner routine.", source:"home"},
    {icon:"🌿", name:"Outside",                note:"Patio, driveway, park. Any flat surface. Outdoors is freeing.",                source:"outside"},
    {icon:"🌐", name:"Online metronome",       note:"Set the beat for rhythm assignments. Free at metronome-online.com.",           source:"web"},
  ],
  knitting: [
    {icon:"🛒", name:"Dollar store yarn + needles", note:"Yarn ($1.25) and plastic needles ($1.50) at Dollar Tree. Everything you need.", source:"store"},
    {icon:"🏠", name:"Two pencils as needles",       note:"For practice swatches, two pencils work as size-7 needles. Already at home.", source:"home"},
    {icon:"🏠", name:"Unravel an old sweater",       note:"A thrift-store sweater = free yarn. Cut a seam and pull the thread.",          source:"home"},
  ],
  journaling: [
    {icon:"🏠", name:"Any paper + pen",     note:"Back of an envelope, printer paper, a spiral notebook. Journaling needs nothing special.", source:"home"},
    {icon:"📱", name:"Your Notes app",      note:"Free, always with you, syncs automatically. Every assignment works here.",               source:"home"},
    {icon:"🌿", name:"Write outside",       note:"Take your notebook to a park or porch. Different environment = different thoughts.",     source:"outside"},
  ],
  woodworking: [
    {icon:"🏠", name:"Cardboard practice first", note:"Practice all cutting and joining techniques on cardboard before touching wood. Free, zero waste.", source:"home"},
    {icon:"🛒", name:"Dollar store craft wood",  note:"Wooden craft sticks, dowels, small boards. Dollar stores carry everything for first projects.",    source:"store"},
    {icon:"🌿", name:"Fallen branches",          note:"Deadfall wood in a park or yard is free. Check local rules for collection.",                       source:"outside"},
  ],
  videography: [
    {icon:"📱", name:"Your smartphone",    note:"Shoot every assignment on your phone. Modern phones rival cinema cameras at 4K 60fps.", source:"home"},
    {icon:"🪟", name:"Window light",       note:"Position your subject facing a window. Free, directional, cinematic natural light.",    source:"home"},
    {icon:"🌐", name:"CapCut (web, free)", note:"Free browser-based editor at capcut.com. Use it to cut and export every assignment.",  source:"web"},
  ],
  hiking: [
    {icon:"🌿", name:"Walk outside right now", note:"Any street, park, or trail counts for assignment 1. Start with 20 minutes.",      source:"outside"},
    {icon:"🌐", name:"AllTrails (free tier)",  note:"Find trails near you. Use it to pick and log your assignment hikes.",             source:"web"},
    {icon:"🏠", name:"Wear what you have",     note:"Sneakers work fine. You don't need hiking boots for the first month.",            source:"home"},
  ],
  interior: [
    {icon:"🏠", name:"Rearrange what you have", note:"Move furniture, flip rugs, swap frames. The first 4 assignments cost nothing.",   source:"home"},
    {icon:"🌐", name:"RoomSketcher (free)",     note:"Draw your room to scale in a browser. Plan layouts before moving anything.",      source:"web"},
    {icon:"🛒", name:"Dollar store styling",    note:"Candles, fake plants, frames, vases. Dollar stores are full of interior props.",  source:"store"},
  ],
  fashion: [
    {icon:"🏠", name:"Your existing wardrobe",   note:"Every assignment in month 1 uses only what you already own. No shopping yet.",  source:"home"},
    {icon:"🛒", name:"Thrift store",             note:"Goodwill, Salvation Army. $5–10 can completely change a look.",                 source:"store"},
    {icon:"🌿", name:"Natural light for photos", note:"Window or outside light makes every outfit photo look editorial. Free.",        source:"outside"},
  ],
  ai: [
    {icon:"🌐", name:"Claude.ai (free tier)",  note:"Complete every prompt, generation, and summarisation assignment here.",  source:"web"},
    {icon:"🌐", name:"Perplexity.ai (free)",   note:"Use for research and source-comparison assignments.",                    source:"web"},
    {icon:"🌐", name:"Google Gemini (free)",   note:"Use for image analysis and multimodal assignments.",                    source:"web"},
  ],
  gaming: [
    {icon:"🌐", name:"Board Game Arena (free)", note:"100+ board games in your browser, no download. Use for strategy assignments.", source:"web"},
    {icon:"🏠", name:"A deck of cards",         note:"Covers dozens of beginner games. Most houses already have one.",              source:"home"},
    {icon:"🌐", name:"Chess.com (free tier)",   note:"Play and get analysis. Use for the chess-specific assignments.",             source:"web"},
  ],
  travel: [
    {icon:"🌿", name:"Explore your own neighbourhood", note:"Walk in a direction you've never been. Assignment 1 is free and starts today.", source:"outside"},
    {icon:"🌐", name:"Google Street View",              note:"Explore anywhere in the world virtually. Use for cultural observation assignments.", source:"web"},
    {icon:"🏠", name:"Plan a day trip",                 note:"1 hour from home = a new place. Gas only, no flights needed.",                    source:"home"},
  ],
  streetphoto: [
    {icon:"📱", name:"Your smartphone",          note:"Less intimidating than a big camera. Perfect for street work. Use it for every assignment.", source:"home"},
    {icon:"🌿", name:"Walk your neighbourhood",  note:"The first 5 assignments are all within 1 mile of your house.",                             source:"outside"},
    {icon:"🏠", name:"Practice still life first",note:"Shoot objects at home to nail exposure before hitting the street.",                        source:"home"},
  ],
  sneakers: [
    {icon:"🏠", name:"Photograph what you own",     note:"Catalog and research your existing collection. Assignment 1 costs nothing.",        source:"home"},
    {icon:"🌐", name:"StockX price history (free)", note:"Look up any shoe's sales history. Use it for the valuation assignments.",           source:"web"},
    {icon:"🛒", name:"Thrift store hunting",         note:"Low-stakes practice. Learn condition-grading without financial risk.",             source:"store"},
  ],
  collectibles: [
    {icon:"🏠", name:"Start with what you own",      note:"Sort, photograph, and research items you already have. Zero cost.",                source:"home"},
    {icon:"🌐", name:"eBay sold listings (free)",     note:"Search any item + 'sold' to see real market prices. Use for valuation assignments.", source:"web"},
    {icon:"🛒", name:"Dollar store + thrift shops",  note:"Low-stakes training ground. Practice spotting quality without risk.",              source:"store"},
  ],
};

// ── STARTER KIT ──────────────────────────────────────────────
const HOBBY_STARTER_KIT = {
  photography: {
    budget:'Free – $500', time:'1-2 hrs/week',
    items:[
      {name:'Smartphone camera', price:'Free', note:'Start here, seriously'},
      {name:'Lightroom Mobile (free tier)', price:'Free', note:'Essential editing'},
      {name:'Used entry DSLR or mirrorless', price:'$150-350', note:'Optional step-up', url:'https://www.amazon.com/s?k=entry+level+mirrorless+camera'},
      {name:'50mm lens (nifty fifty)', price:'$100-200', note:'Sharpest value lens', url:'https://www.amazon.com/s?k=50mm+lens+nifty+fifty'}
    ]
  },
  painting: {
    budget:'$40–$150', time:'2-3 hrs/week',
    items:[
      {name:'Student acrylic set (12 colors)', price:'$15-30', note:'Start with acrylics', url:'https://www.amazon.com/s?k=student+acrylic+paint+set+12+colors'},
      {name:'3-5 brushes (flat + round)', price:'$10-20', note:'Any decent brand', url:'https://www.amazon.com/s?k=artist+paint+brush+set+flat+round'},
      {name:'Canvas pad (10-pack)', price:'$12-20', note:'Cheaper than canvases', url:'https://www.amazon.com/s?k=canvas+pad+10+pack'},
      {name:'Palette + water cup', price:'$5-10', note:'Basic setup', url:'https://www.amazon.com/s?k=artist+palette+water+cup+set'}
    ]
  },
  writing: {
    budget:'Free – $30', time:'30 min/day',
    items:[
      {name:'Google Docs or Notion', price:'Free', note:'All you need to start'},
      {name:'Notebook + pen', price:'$5-15', note:'Offline first drafts', url:'https://www.amazon.com/s?k=writing+notebook+pen+set'},
      {name:'Hemingway Editor', price:'Free', note:'Clarity and readability'},
      {name:'Scrivener', price:'$49 one-time', note:'For long-form projects', url:'https://www.amazon.com/s?k=scrivener+writing+software'}
    ]
  },
  cooking: {
    budget:'$50–$180', time:'2-4 hrs/week',
    items:[
      {name:'Chef knife (8 inch)', price:'$30-60', note:'Most important tool', url:'https://www.amazon.com/s?k=chef+knife+8+inch'},
      {name:'Large cutting board', price:'$15-25', note:'Bigger than you think', url:'https://www.amazon.com/s?k=large+wood+cutting+board'},
      {name:'Cast iron skillet (10 in)', price:'$25-40', note:'Lasts forever', url:'https://www.amazon.com/s?k=cast+iron+skillet+10+inch'},
      {name:'Pantry staples (oils, acid)', price:'$40-60', note:'One-time investment', url:'https://www.amazon.com/s?k=cooking+oils+vinegar+pantry+staples'}
    ]
  },
  baking: {
    budget:'$30–$150', time:'2-4 hrs/weekend',
    items:[
      {name:'Digital kitchen scale', price:'$12-20', note:'Non-negotiable for baking', url:'https://www.amazon.com/s?k=digital+kitchen+scale+baking'},
      {name:'Heavy gauge sheet pans x2', price:'$15-25', note:'Thin pans = burnt bottoms', url:'https://www.amazon.com/s?k=heavy+gauge+half+sheet+pan'},
      {name:'Instant-read thermometer', price:'$10-15', note:'For bread and caramel', url:'https://www.amazon.com/s?k=instant+read+kitchen+thermometer'},
      {name:'Stand mixer (used)', price:'$80-150', note:'Optional but transformative', url:'https://www.amazon.com/s?k=stand+mixer+kitchen+aid'}
    ]
  },
  yoga: {
    budget:'Free – $80', time:'20-45 min/day',
    items:[
      {name:'Basic yoga mat', price:'$20-35', note:'Manduka PRO if you commit', url:'https://www.amazon.com/s?k=yoga+mat+non+slip'},
      {name:'Yoga with Adriene (YouTube)', price:'Free', note:'Best beginner resource'},
      {name:'Two yoga blocks', price:'$10-20', note:'For support in poses', url:'https://www.amazon.com/s?k=yoga+blocks+set+of+2'},
      {name:'Yoga strap', price:'$8-12', note:'Extends your reach', url:'https://www.amazon.com/s?k=yoga+strap+stretch'}
    ]
  },
  ceramics: {
    budget:'$40–$200/mo', time:'4-6 hrs/week',
    items:[
      {name:'Community studio membership', price:'$40-80/mo', note:'Includes kiln access'},
      {name:'Basic tool set (wire, loop, rib)', price:'$15-25', note:'Essential 5-piece set', url:'https://www.amazon.com/s?k=pottery+ceramics+tool+set'},
      {name:'Apron (clay-specific)', price:'$15-25', note:'Clay destroys clothes', url:'https://www.amazon.com/s?k=pottery+apron+waxed+canvas'},
      {name:'Notebook for glaze notes', price:'$5', note:'Track your glazing experiments', url:'https://www.amazon.com/s?k=small+notebook+journal'}
    ]
  },
  gardening: {
    budget:'$20–$100 start', time:'30 min/day',
    items:[
      {name:'Seed starting kit', price:'$15-25', note:'Or direct sow after frost', url:'https://www.amazon.com/s?k=seed+starting+kit+trays'},
      {name:'Trowel + hand fork', price:'$10-20', note:'Fiskars brand holds up', url:'https://www.amazon.com/s?k=garden+trowel+hand+fork+set'},
      {name:'Potting mix (2 cu ft)', price:'$10-15', note:'Never use garden soil in pots', url:'https://www.amazon.com/s?k=premium+potting+mix+soil'},
      {name:'Long-spout watering can', price:'$10-20', note:'Precision matters for seedlings', url:'https://www.amazon.com/s?k=long+spout+watering+can+indoor'}
    ]
  },
  drawing: {
    budget:'Free – $50', time:'30-60 min/day',
    items:[
      {name:'Sketchbook (A5 size)', price:'$8-15', note:'Carry it everywhere', url:'https://www.amazon.com/s?k=A5+sketchbook+hardcover'},
      {name:'Pencil set (2H to 6B range)', price:'$8-15', note:'Staedtler Mars recommended', url:'https://www.amazon.com/s?k=drawing+pencil+set+2H+6B+graphite'},
      {name:'Kneaded eraser', price:'$3-5', note:'Much cleaner than rubber', url:'https://www.amazon.com/s?k=kneaded+eraser+art'},
      {name:'Blending stump x3', price:'$3-6', note:'Smooth shading essential', url:'https://www.amazon.com/s?k=blending+stump+tortillon+set'}
    ]
  },
  knitting: {
    budget:'$30–$80 start', time:'1-2 hrs/day',
    items:[
      {name:'US size 7-8 straight needles', price:'$8-15', note:'Bamboo for beginners', url:'https://www.amazon.com/s?k=bamboo+knitting+needles+size+7+8'},
      {name:'Worsted weight yarn x2 balls', price:'$10-20', note:'Acrylic is fine to start', url:'https://www.amazon.com/s?k=worsted+weight+yarn+acrylic'},
      {name:'Darning needle', price:'$3-5', note:'For weaving in ends', url:'https://www.amazon.com/s?k=darning+needle+yarn+tapestry'},
      {name:'Stitch markers (ring type)', price:'$3-8', note:'Simple and essential', url:'https://www.amazon.com/s?k=knitting+stitch+markers+ring'}
    ]
  }
};

// ── HOBBY TRAITS ─────────────────────────────────────────────
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
  videography:  {creative:9,analytical:7,physical:3,expressive:9,social:6},
  fitness:      {creative:3,analytical:5,physical:10,expressive:4,social:6},
  hiking:       {creative:4,analytical:4,physical:9,expressive:5,social:5},
  fashion:      {creative:9,analytical:4,physical:3,expressive:10,social:7},
  gaming:       {creative:5,analytical:10,physical:2,expressive:4,social:6}
};

// ── CONSTRAINT ATTRIBUTES (new in v2) ────────────────────────
const HOBBY_CONSTRAINTS = {
  photography:  { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['creating','learning'],      budgetMin:0   },
  painting:     { timeRequirement:'medium', resultsSpeed:'slow',   social:'solo',  motivations:['creating'],                 budgetMin:20  },
  writing:      { timeRequirement:'low',    resultsSpeed:'slow',   social:'solo',  motivations:['creating','learning'],      budgetMin:0   },
  cooking:      { timeRequirement:'medium', resultsSpeed:'fast',   social:'mixed', motivations:['creating','learning'],      budgetMin:15  },
  baking:       { timeRequirement:'medium', resultsSpeed:'fast',   social:'mixed', motivations:['creating','learning'],      budgetMin:15  },
  yoga:         { timeRequirement:'low',    resultsSpeed:'medium', social:'solo',  motivations:['learning'],                 budgetMin:0   },
  ceramics:     { timeRequirement:'high',   resultsSpeed:'slow',   social:'mixed', motivations:['creating'],                 budgetMin:40  },
  gardening:    { timeRequirement:'medium', resultsSpeed:'slow',   social:'solo',  motivations:['creating','learning'],      budgetMin:10  },
  birdwatching: { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['learning','collecting'],    budgetMin:0   },
  reading:      { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['learning'],                 budgetMin:0   },
  piano:        { timeRequirement:'high',   resultsSpeed:'slow',   social:'solo',  motivations:['creating','learning'],      budgetMin:0   },
  collage:      { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['creating','collecting'],    budgetMin:3   },
  drawing:      { timeRequirement:'low',    resultsSpeed:'medium', social:'solo',  motivations:['creating','learning'],      budgetMin:0   },
  dancing:      { timeRequirement:'medium', resultsSpeed:'fast',   social:'group', motivations:['creating','competing'],     budgetMin:0   },
  knitting:     { timeRequirement:'medium', resultsSpeed:'slow',   social:'solo',  motivations:['creating'],                 budgetMin:10  },
  journaling:   { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['learning'],                 budgetMin:0   },
  woodworking:  { timeRequirement:'high',   resultsSpeed:'slow',   social:'solo',  motivations:['creating'],                 budgetMin:30  },
  videography:  { timeRequirement:'medium', resultsSpeed:'fast',   social:'mixed', motivations:['creating','learning'],      budgetMin:0   },
  hiking:       { timeRequirement:'medium', resultsSpeed:'fast',   social:'mixed', motivations:['learning'],                 budgetMin:0   },
  interior:     { timeRequirement:'low',    resultsSpeed:'medium', social:'solo',  motivations:['creating'],                 budgetMin:0   },
  fashion:      { timeRequirement:'low',    resultsSpeed:'fast',   social:'mixed', motivations:['creating','collecting'],    budgetMin:0   },
  ai:           { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['learning'],                 budgetMin:0   },
  gaming:       { timeRequirement:'medium', resultsSpeed:'fast',   social:'mixed', motivations:['competing','learning'],     budgetMin:20  },
  travel:       { timeRequirement:'high',   resultsSpeed:'slow',   social:'mixed', motivations:['learning','collecting'],    budgetMin:50  },
  streetphoto:  { timeRequirement:'medium', resultsSpeed:'fast',   social:'solo',  motivations:['creating','learning'],      budgetMin:0   },
  sneakers:     { timeRequirement:'medium', resultsSpeed:'medium', social:'mixed', motivations:['creating','collecting'],    budgetMin:30  },
  collectibles: { timeRequirement:'low',    resultsSpeed:'medium', social:'mixed', motivations:['collecting'],               budgetMin:20  },
  design:       { timeRequirement:'low',    resultsSpeed:'fast',   social:'solo',  motivations:['creating','learning'],      budgetMin:0   },
};


// ── HOBBY TREE — niche sub-categories per hobby ─────────────────────────────
const HOBBY_TREE = {
  photography:[
    {id:'portrait',icon:'👤',label:'Portrait',desc:'People as subjects. Natural light, expression, connection between lens and face.'},
    {id:'street',icon:'🏙️',label:'Street',desc:'Candid moments in public. Timing over technique. The decisive moment.'},
    {id:'landscape',icon:'🌄',label:'Landscape',desc:'Light over land. Golden hour, composition, patience waiting for conditions.'},
    {id:'macro',icon:'🔍',label:'Macro',desc:'The world at 1:1. Insects, textures, droplets — things the eye overlooks.'},
    {id:'film',icon:'🎞️',label:'Film/Analog',desc:'Shooting on 35mm or medium format. Slow, intentional, irreversible frames.'},
    {id:'documentary',icon:'📰',label:'Documentary',desc:'Visual storytelling across a series. A project that says something specific.'},
  ],
  painting:[
    {id:'watercolor',icon:'💧',label:'Watercolor',desc:'Transparent layers and happy accidents. Water does half the work.'},
    {id:'oil',icon:'🎨',label:'Oil',desc:'Rich, slow-drying, blendable. The classical medium. Forgiving and luminous.'},
    {id:'gouache',icon:'⬜',label:'Gouache',desc:'Opaque watercolor. Flat graphic color. Used in illustration and animation.'},
    {id:'acrylic',icon:'🖌️',label:'Acrylic',desc:'Fast-drying, versatile. Can mimic oils or watercolors depending on dilution.'},
    {id:'pleinair',icon:'🌿',label:'Plein Air',desc:'Painting outdoors from life. Capturing light as it changes. Racing the sun.'},
    {id:'abstract',icon:'🔷',label:'Abstract',desc:'Emotion and structure without representation. Color and form as language.'},
  ],
  writing:[
    {id:'fiction',icon:'📖',label:'Fiction',desc:'Characters, scene, conflict. Short stories before novels. Show, don\'t tell.'},
    {id:'essay',icon:'📝',label:'Personal Essay',desc:'True stories, your perspective. The form where voice matters most.'},
    {id:'poetry',icon:'✨',label:'Poetry',desc:'Compression and image. Saying the most with the fewest words.'},
    {id:'screenwriting',icon:'🎬',label:'Screenwriting',desc:'Writing for the screen. Scene descriptions, dialogue, structure. Action only.'},
    {id:'nature',icon:'🌱',label:'Nature Writing',desc:'Observation of the natural world turned into prose. Precise and sensory.'},
    {id:'flash',icon:'⚡',label:'Flash Fiction',desc:'Complete stories in 100–500 words. Constraint forces precision.'},
  ],
  cooking:[
    {id:'french',icon:'🥘',label:'French Technique',desc:'Mother sauces, mise en place, classical methods. The foundation of western cooking.'},
    {id:'fermentation',icon:'🫙',label:'Fermentation',desc:'Kimchi, miso, kombucha, sourdough starters. Patience as an ingredient.'},
    {id:'japanese',icon:'🍣',label:'Japanese',desc:'Umami, balance, restraint. Dashi, rice, knife skills, seasonal thinking.'},
    {id:'grilling',icon:'🔥',label:'Grilling & Fire',desc:'Maillard reaction, smoke, direct and indirect heat. Fire as a cooking tool.'},
    {id:'pasta',icon:'🍝',label:'Fresh Pasta',desc:'Flour and egg. Rolling, cutting, shaping by hand. A skill with a physical feel.'},
    {id:'spice',icon:'🌶️',label:'Spice Blending',desc:'Building flavor from whole spices. Toasting, grinding, proportions.'},
  ],
  baking:[
    {id:'sourdough',icon:'🍞',label:'Sourdough',desc:'Wild yeast, long fermentation, scoring and baking in a dutch oven.'},
    {id:'pastry',icon:'🥐',label:'Laminated Pastry',desc:'Croissants, pains au chocolat. Layers of butter and dough. Precise and rewarding.'},
    {id:'cookies',icon:'🍪',label:'Cookies',desc:'Drop, rolled, sandwich — cookies teach ratios, texture, and browning.'},
    {id:'cake',icon:'🎂',label:'Layer Cake',desc:'Crumb coats, buttercream, decorating. Architecture you can eat.'},
    {id:'tarts',icon:'🥧',label:'Tarts & Pies',desc:'Blind baking, curd fillings, crust texture. Precision pastry work.'},
    {id:'bread',icon:'🫓',label:'Enriched Bread',desc:'Brioche, challah, milk bread. Eggs and butter make dough tender and rich.'},
  ],
  ceramics:[
    {id:'wheel',icon:'🏺',label:'Wheel Throwing',desc:'Clay centered on a spinning wheel. The most meditative form of making.'},
    {id:'handbuilding',icon:'🤲',label:'Hand Building',desc:'Pinch pots, slab construction, coiling. No wheel required. More sculptural.'},
    {id:'glazing',icon:'✨',label:'Glazing & Surface',desc:'The chemistry of color. How minerals transform under heat. Testing and surprise.'},
    {id:'raku',icon:'🔥',label:'Raku',desc:'Fast-fired, removed glowing hot, smoked. Dramatic, unpredictable, Japanese-origin.'},
    {id:'sculpture',icon:'🗿',label:'Sculpture',desc:'Form without function. Clay as three-dimensional drawing. No rules.'},
    {id:'porcelain',icon:'⚪',label:'Porcelain',desc:'The most demanding clay. Translucent when thin. Unforgiving but beautiful.'},
  ],
  gardening:[
    {id:'herbs',icon:'🌿',label:'Herb Garden',desc:'Basil, rosemary, thyme — plants you grow and eat. Kitchen-connected gardening.'},
    {id:'container',icon:'🪴',label:'Container Gardening',desc:'Balconies, patios, small spaces. High yield in limited soil.'},
    {id:'native',icon:'🌼',label:'Native Plants',desc:'Plants native to your region. Low water, wildlife habitat, ecological good.'},
    {id:'bonsai',icon:'🎋',label:'Bonsai',desc:'Miniature trees shaped over years. Patience, wiring, seasonal care.'},
    {id:'hydroponics',icon:'💧',label:'Hydroponics',desc:'Growing in water, not soil. Fast growth, year-round, indoor-capable.'},
    {id:'cutflowers',icon:'💐',label:'Cut Flowers',desc:'Growing flowers for arranging. Dahlia, sweet pea, zinnia. Seasonal abundance.'},
  ],
  birdwatching:[
    {id:'ear',icon:'👂',label:'Birding by Ear',desc:'Identifying species purely by song. The highest skill in birding.'},
    {id:'raptors',icon:'🦅',label:'Raptors',desc:'Hawks, eagles, falcons. Shape, wingbeat, soaring behavior. Field marks at distance.'},
    {id:'migration',icon:'🧭',label:'Migration Tracking',desc:'Seasonal movement patterns. Hotspots, timing, weather correlation.'},
    {id:'journaling',icon:'📔',label:'Field Journaling',desc:'Sketching and noting observations on site. The naturalist tradition.'},
    {id:'shorebirds',icon:'🦢',label:'Shorebirds',desc:'The most challenging group. Subtle plumage, variable by season and age.'},
    {id:'habitat',icon:'🌲',label:'Habitat Study',desc:'Understanding which birds live where and why. Ecology over checklists.'},
  ],
  reading:[
    {id:'literary',icon:'📚',label:'Literary Fiction',desc:'Language-forward fiction. Prose style as much as plot. Prize-winners and debuts.'},
    {id:'classics',icon:'🏛️',label:'Classics',desc:'Work that survived centuries. Why it lasted, what it means now.'},
    {id:'nonfiction',icon:'🔬',label:'Narrative Nonfiction',desc:'True stories told with novelistic technique. History, science, biography.'},
    {id:'poetry',icon:'✍️',label:'Poetry',desc:'Reading slowly. One poem at a time. Memorization as a practice.'},
    {id:'graphic',icon:'🎭',label:'Graphic Novels',desc:'Sequential art as literature. Maus, Persepolis, building the canon.'},
    {id:'shortform',icon:'⚡',label:'Short Stories',desc:'The most demanding form for writers. Chekhov, Carver, O\'Connor, Munro.'},
  ],
  piano:[
    {id:'classical',icon:'🎹',label:'Classical',desc:'Repertoire from Bach to Debussy. Technical precision and musical depth.'},
    {id:'jazz',icon:'🎷',label:'Jazz',desc:'Chord extensions, improvisation, the ii-V-I. A different musical language.'},
    {id:'composition',icon:'📝',label:'Composition',desc:'Writing original music. Melody, harmony, structure. Making something new.'},
    {id:'improvisation',icon:'✨',label:'Improvisation',desc:'Playing freely, in the moment. Scales, modes, musical conversation.'},
    {id:'theory',icon:'📐',label:'Music Theory',desc:'Understanding why music works. Scales, intervals, harmony, voice leading.'},
    {id:'pop',icon:'🎵',label:'Pop/Contemporary',desc:'Playing songs you actually know. Chord charts, ear training, feel.'},
  ],
  collage:[
    {id:'paper',icon:'✂️',label:'Paper Cutting',desc:'Scissors and exacto knife as drawing tools. Positive and negative space.'},
    {id:'magazine',icon:'📰',label:'Magazine Collage',desc:'Cut, rearrange, recontextualize. Found images get new meaning.'},
    {id:'digital',icon:'💻',label:'Digital Collage',desc:'Photoshop or Procreate. Blending modes, erasure, texture overlays.'},
    {id:'vision',icon:'🌟',label:'Vision Board',desc:'Intentional image selection as a clarity practice. What you\'re building toward.'},
    {id:'mixedmedia',icon:'🎨',label:'Mixed Media',desc:'Collage plus paint, drawing, fabric, found objects. Layered surfaces.'},
    {id:'bookbinding',icon:'📕',label:'Artist Books',desc:'Making books as objects. Accordion folds, pamphlet stitch, altered books.'},
  ],
  drawing:[
    {id:'figure',icon:'🧍',label:'Figure Drawing',desc:'The human body as the ultimate drawing challenge. Proportion, gesture, anatomy.'},
    {id:'urban',icon:'🏛️',label:'Urban Sketching',desc:'Drawing on location in cities. Architecture, people, life as it happens.'},
    {id:'botanical',icon:'🌺',label:'Botanical',desc:'Scientific illustration tradition. Plants rendered with accuracy and beauty.'},
    {id:'comics',icon:'💬',label:'Comics/Manga',desc:'Sequential storytelling. Panel composition, character design, visual narrative.'},
    {id:'portrait',icon:'👤',label:'Portraiture',desc:'Likeness from life. The eyes, the light, the specific person before you.'},
    {id:'gesture',icon:'⚡',label:'Gesture Drawing',desc:'30-second to 2-minute figure poses. Speed that captures energy, not detail.'},
  ],
  dancing:[
    {id:'salsa',icon:'💃',label:'Salsa/Latin',desc:'Partner dancing with Cuban motion. On-2 timing, turns, body movement.'},
    {id:'hiphop',icon:'🎤',label:'Hip-Hop',desc:'Groove, isolation, freestyle. Rooted in music and street culture.'},
    {id:'contemporary',icon:'🩰',label:'Contemporary',desc:'Modern movement vocabulary. Floor work, improvisation, physical storytelling.'},
    {id:'ballet',icon:'🩱',label:'Ballet Basics',desc:'Barre work, turnout, port de bras. Foundation for all western dance.'},
    {id:'swing',icon:'🎷',label:'Swing/Lindy Hop',desc:'Partner dancing to jazz. Charleston roots, aerial possibilities, pure joy.'},
    {id:'contact',icon:'🤝',label:'Contact Improv',desc:'Weight sharing with a partner. Listening through touch. Dance as conversation.'},
  ],
  knitting:[
    {id:'colorwork',icon:'🌈',label:'Colorwork',desc:'Fair isle, stranded knitting, intarsia. Multiple colors in one row.'},
    {id:'lace',icon:'🕸️',label:'Lace',desc:'Yarn-overs and decreases creating patterns with holes. Delicate and complex.'},
    {id:'socks',icon:'🧦',label:'Socks',desc:'Knitting in the round, turning a heel. The gateway to technical knitting.'},
    {id:'cables',icon:'🔀',label:'Cables',desc:'Crossing stitches to create braided texture. Tactile and architectural.'},
    {id:'brioche',icon:'🍞',label:'Brioche',desc:'Two-color slipped-stitch technique. Squishy, reversible, surprisingly simple.'},
    {id:'entrelac',icon:'◇',label:'Entrelac',desc:'Interlocking squares worked at angles. Looks harder than it is. Stunning.'},
  ],
  journaling:[
    {id:'bullet',icon:'•',label:'Bullet Journal',desc:'Rapid logging, collections, migration. An analog productivity and reflection system.'},
    {id:'morning',icon:'☀️',label:'Morning Pages',desc:'Three longhand pages, every morning, no editing. Julia Cameron\'s method.'},
    {id:'dream',icon:'🌙',label:'Dream Journal',desc:'Recording dreams immediately on waking. Patterns, symbols, the subconscious.'},
    {id:'artjournal',icon:'🎨',label:'Art Journal',desc:'Visual and written together. Collage, paint, handwriting. No rules.'},
    {id:'gratitude',icon:'🙏',label:'Gratitude Practice',desc:'Specific, detailed gratitude — not generic. Changes what you notice.'},
    {id:'letters',icon:'✉️',label:'Letters',desc:'Writing to specific people (sent or unsent). The oldest journaling form.'},
  ],
  woodworking:[
    {id:'handtools',icon:'🪚',label:'Hand Tool Joinery',desc:'Mortise and tenon, dovetail. No power tools. The loudest skill is silence.'},
    {id:'turning',icon:'🌀',label:'Lathe Turning',desc:'Bowls and spindles from spinning blanks. Watching form emerge from a block.'},
    {id:'furniture',icon:'🪑',label:'Furniture Making',desc:'Functional pieces. Chairs, tables, shelves. Design meets craft.'},
    {id:'carving',icon:'🗡️',label:'Carving',desc:'Chisels and gouges shaping relief or sculpture. Slow, meditative, precise.'},
    {id:'finishing',icon:'✨',label:'Finishing & Staining',desc:'Sanding, grain raising, oil, wax, lacquer. How wood becomes beautiful.'},
    {id:'marquetry',icon:'🔲',label:'Marquetry',desc:'Inlaid wood veneer patterns. Puzzle-like precision creating pictures in wood.'},
  ],
  videography:[
    {id:'documentary',icon:'📰',label:'Documentary',desc:'Real subjects, real stories. Observational, participatory, poetic modes.'},
    {id:'narrative',icon:'🎭',label:'Narrative Short',desc:'Fiction with actors, script, locations. The full filmmaking pipeline in miniature.'},
    {id:'videoessay',icon:'💬',label:'Video Essay',desc:'Ideas expressed through editing, narration, and image. YouTube\'s native form.'},
    {id:'cinematography',icon:'📷',label:'Cinematography',desc:'Composition, light, camera movement. The image before the edit.'},
    {id:'editing',icon:'✂️',label:'Editing Theory',desc:'Rhythm, continuity, montage. How cuts create meaning and emotion.'},
    {id:'sound',icon:'🎵',label:'Sound Design',desc:'Foley, music, silence. Half the emotional power of any film lives in audio.'},
  ],
    hiking:[
    {id:'trailrunning',icon:'🏃',label:'Trail Running',desc:'Running on dirt, elevation change, technical terrain. Fitness meets nature.'},
    {id:'naturejournaling',icon:'📔',label:'Nature Journaling',desc:'Sketching and noting what you observe while moving through wild spaces.'},
    {id:'survival',icon:'🔥',label:'Wilderness Skills',desc:'Navigation, fire-starting, shelter. Confidence in the backcountry.'},
    {id:'foraging',icon:'🍄',label:'Foraging',desc:'Identifying edible plants and fungi. Mushrooms, berries, greens. Do the research.'},
    {id:'backpacking',icon:'🎒',label:'Backpacking',desc:'Multi-day trips carrying everything. Gear selection, route planning, endurance.'},
    {id:'plantid',icon:'🌿',label:'Plant ID',desc:'Knowing what grows where and why. Botany through close attention.'},
  ],
  fashion:[
    {id:'vintage',icon:'🕰️',label:'Vintage Hunting',desc:'Thrift stores, estate sales, eBay. Dating garments, spotting quality, building vocabulary.'},
    {id:'tailoring',icon:'✂️',label:'Tailoring Basics',desc:'Hemming, taking in seams, replacing zippers. Making clothes fit perfectly.'},
    {id:'capsule',icon:'🗂️',label:'Capsule Wardrobe',desc:'20-30 pieces that work together. Intentional reduction. Quality over quantity.'},
    {id:'dyeing',icon:'🎨',label:'Natural Dyeing',desc:'Indigo, avocado skins, onion peels. Ancient color from plants and minerals.'},
    {id:'decades',icon:'📺',label:'Decade Study',desc:'Deep research into a specific era\'s silhouette, fabrication, and social context.'},
    {id:'accessories',icon:'💍',label:'Accessories',desc:'Bags, shoes, jewelry as the punctuation of an outfit. Finishing the look.'},
  ],
  gaming:[
    {id:'tabletop',icon:'🎲',label:'Tabletop RPG',desc:'Dungeons and Dragons, Pathfinder. Collaborative storytelling with rules.'},
    {id:'boardgame',icon:'♟️',label:'Board Game Design',desc:'Designing mechanics, playtesting, iterating. Making the game, not just playing it.'},
    {id:'solo',icon:'🃏',label:'Solo Games',desc:'Designed for one. Journaling RPGs, solitaire systems, single-player board games.'},
    {id:'strategy',icon:'🏆',label:'Strategy Deep Dive',desc:'Chess, Go, Agricola, Twilight Imperium. Games with genuine depth.'},
    {id:'vintage',icon:'👾',label:'Retro/Vintage',desc:'Arcade, Atari, early console. Games as cultural artifacts and design history.'},
    {id:'design',icon:'⚙️',label:'Game Design Theory',desc:'Reading on mechanics, systems, player psychology. Understanding why games work.'},
  ],
  travel:[
    {id:'streetfood',icon:'🍜',label:'Street Food',desc:'Eating where locals eat. Market stalls, carts, small shops. Flavor over ambiance.'},
    {id:'architecture',icon:'🏛️',label:'Architecture',desc:'Reading buildings as history. What was built when, for whom, and why.'},
    {id:'slow',icon:'🐢',label:'Slow Travel',desc:'One place for weeks, not many places for days. Depth over coverage.'},
    {id:'pilgrimage',icon:'🚶',label:'Pilgrimage Routes',desc:'Camino de Santiago, Kumano Kodo. Walking with intention and community.'},
    {id:'solo',icon:'🧳',label:'Solo Travel',desc:'The decisions, risks, and freedoms of traveling completely alone.'},
    {id:'documenting',icon:'📷',label:'Travel Documentary',desc:'Building a visual or written record of a place. Journalism as tourism.'},
  ],
  streetphoto:[
    {id:'documentary',icon:'📰',label:'Documentary',desc:'Long-form photographic projects about specific communities or subjects.'},
    {id:'flash',icon:'⚡',label:'Flash Photography',desc:'On-camera flash in daylight. Hard shadows, saturated color. A bold aesthetic.'},
    {id:'colorpalette',icon:'🎨',label:'Color Theory',desc:'Shooting for specific palettes. Monochrome days. Complementary color hunting.'},
    {id:'zines',icon:'📄',label:'Zine Making',desc:'Self-publishing your work. Layout, printing, distribution. Your editorial voice.'},
    {id:'bw',icon:'⬛',label:'Black & White',desc:'Removing color forces attention to light, form, and contrast. Timeless.'},
    {id:'archive',icon:'🗂️',label:'Archive Practice',desc:'Organizing, editing, and sequencing your body of work. Thinking like a curator.'},
  ],
  sneakers:[
    {id:'custompaint',icon:'🖌️',label:'Custom Painting',desc:'Angelus leather paint, prep, sealing. Turning a blank canvas into original art.'},
    {id:'restoration',icon:'✨',label:'Restoration',desc:'Cleaning, sole re-gluing, midsole repainting. Bringing dead shoes back to life.'},
    {id:'lacing',icon:'👟',label:'Lace Art',desc:'Zipper lacing, display lacing, bar lacing. A small change with outsized effect.'},
    {id:'collection',icon:'🏆',label:'Collection Building',desc:'Focus, restraint, curation. A collection is a point of view, not just accumulation.'},
    {id:'grading',icon:'📊',label:'Condition Grading',desc:'DS, VNDS, beaters. Learning the standards that determine value.'},
    {id:'history',icon:'📚',label:'Sneaker History',desc:'Air Max, Jordan, Yeezy. Understanding the stories and cultural moments behind silhouettes.'},
  ],
  collectibles:[
    {id:'sportscards',icon:'⚾',label:'Sports Cards',desc:'Grading, print runs, rookie cards. PSA vs BGS. Investing or collecting?'},
    {id:'vinyl',icon:'🎵',label:'Vinyl Records',desc:'First pressings, labels, condition grading. Music as physical artifact.'},
    {id:'vintagetoys',icon:'🧸',label:'Vintage Toys',desc:'Star Wars, GI Joe, Transformers. Original vs reproduction. Condition obsession.'},
    {id:'coins',icon:'🪙',label:'Coins & Currency',desc:'Numismatics. Historical coins as portable history. Grading and authentication.'},
    {id:'autographs',icon:'✍️',label:'Autographs',desc:'Authentication, COAs, in-person vs. TTM. Provenance matters completely.'},
    {id:'books',icon:'📗',label:'Books & Ephemera',desc:'First editions, signed copies, dust jackets. Condition is everything.'},
  ],
  interior:[
    {id:'minimalism',icon:'⬜',label:'Minimalism',desc:'Less as the point. Negative space, intentional objects, visual quiet.'},
    {id:'maximalism',icon:'🎪',label:'Maximalism',desc:'Pattern, color, layering. More as the point. Every surface has a story.'},
    {id:'vintage',icon:'🛋️',label:'Vintage/Thrift',desc:'Sourcing preloved furniture. Quality over newness. The thrill of the find.'},
    {id:'biophilic',icon:'🌿',label:'Biophilic Design',desc:'Bringing nature in. Plants, wood, stone, light. Spaces that feel alive.'},
    {id:'lighting',icon:'💡',label:'Lighting Design',desc:'Layers of light. Ambient, task, accent. Temperature and direction matter.'},
    {id:'colortheory',icon:'🎨',label:'Color Theory',desc:'How colors interact in a room. Undertones, saturation, the 60-30-10 rule.'},
  ],
  ai:[
    {id:'prompting',icon:'💬',label:'Prompt Engineering',desc:'Writing instructions that reliably produce desired outputs. Precision matters.'},
    {id:'imageai',icon:'🖼️',label:'Image Generation',desc:'Midjourney, Stable Diffusion, Flux. Style prompting, seeds, CFG settings.'},
    {id:'agents',icon:'🤖',label:'AI Agents',desc:'Systems that take actions, use tools, plan and execute multi-step tasks.'},
    {id:'creative',icon:'✍️',label:'Creative AI',desc:'Using AI as a collaborator for writing, art, music. The human stays in the loop.'},
    {id:'ethics',icon:'⚖️',label:'AI Ethics',desc:'Bias, alignment, impact. Understanding the real costs and risks of AI systems.'},
    {id:'building',icon:'⚙️',label:'Building with AI',desc:'APIs, embeddings, RAG, fine-tuning. Making things that use AI, not just use AI.'},
  ],
};
