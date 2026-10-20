/* =====================================================================
   data.js — 网站所有「文字」和「图片路径」都在这个文件里
   ---------------------------------------------------------------------
   · 改文字：直接改引号里的内容即可（注意保留引号和逗号）
   · 换图片：最简单的方式是用同名高清图覆盖 images/ 里的文件，
     这里完全不用改。想换成别的文件名时，才需要改这里的路径。
   · img('aura', 2)  等于  'images/aura/aura-02.jpg'
   · imgs('aura', 3, 6) 等于 aura-03 到 aura-06 四张图
   ===================================================================== */

const img = (slug, n) => `images/${slug}/${slug}-${String(n).padStart(2, '0')}.jpg`;
const imgs = (slug, from, to) => Array.from({ length: to - from + 1 }, (_, i) => img(slug, from + i));

const SITE = {
  name: 'Ming Lu',
  nameCn: '路铭',
  role: 'Transdisciplinary artist — London',
  email: 'luumingg@gmail.com',
  instagram: 'luislu929',
  youtube: '', // 如有 YouTube 频道主页，填在这里，例如 'https://www.youtube.com/@xxx'

  /* ---------- 首屏 HERO ---------- */
  hero: {
    image: img('aura', 2),
    lines: ['How to see,', 'how to be seen.'],
    kicker: 'Moving Image · Performance Photography · Digital Embodiment',
    sub: 'Selected works and research grounded in embodiment — through body language, movement and virtual presence.',
  },

  /* ---------- PHILOSOPHY 三个关键词（对应参考站的 Bold / Confident / Quiet） ---------- */
  philosophy: [
    {
      word: 'Presence',
      text: 'Grounded in dance and movement, I explore embodiment and presence: what does it mean to be present when the body is digitised and reconstructed?',
    },
    {
      word: 'Fold',
      text: 'I see mediation not as a barrier that keeps us from reality itself, but as a fold: we can reach the world through it, though only ever in part.',
    },
    {
      word: 'Moha',
      text: 'Moha (痴) and avidyā (无明), from Buddhist thought, name a state of cognitive delusion and obscured perception of reality — an unawareness of one\'s own situation. Moha, then, is this: we cannot see clearly, or, driven by desire and attachment, we are unwilling to. Can we see who we are, and where the line between the real and the virtual falls — and recognise the limits of our own seeing?',
    },
  ],

  /* ---------- APPROACH 方法论（对应参考站 Our Approach） ---------- */
  approach: {
    rotating: ['see', 'move', 'fold', 'be seen'],
    headline: ['For Merleau-Ponty, the body is not an object to be observed', 'but the subject through which experience arises.'],
    intro: 'Drawing on Kantian epistemology, phenomenology, digital media theory and Buddhist thought, my work sits between physical sensation and algorithmic mediation.',
    steps: [
      {
        label: 'Body',
        title: 'The Body',
        text: 'Drawing on Merleau-Ponty, it treats the body not as a tool for expression but as existence itself. When the body is discretised into data, copied and edited, where does the self reside?',
        work: 'i-am-my-body',
      },
      {
        label: 'Moment',
        title: 'Aura, Here-and-Now',
        text: 'The moment of the shutter cannot return, and the reproduced image does not replace it. Yet each time the image is copied, circulated, shown and viewed again, a new layer of narrative is written onto that original moment.',
        work: 'aura',
      },
      {
        label: 'Mediation',
        title: 'Not a Cut, but a Fold',
        text: 'A photograph is often described as a cut: one instant lifted out of continuous time. Here, I think of it as a fold. The frame does not sever the moment from what came before and after; it presses that duration into a single surface.',
        work: 'camera-folds',
      },
      {
        label: 'Code',
        title: 'Moha and the Discrete',
        text: 'When continuous reality is cut into 0 and 1, and flesh is discretised, can the body still honestly carry something of the person, their consciousness, perhaps their soul? Or is the discretised reality we see in latent space still reality?',
        work: 'how-to-be-seen',
      },
    ],
  },

  /* ---------- ABOUT ---------- */
  about: {
    portrait: img('about', 1),
    caption: 'Artist & Researcher — London',
    intro: 'A London-based artist from China, working across moving image, spatial narrative, photography and digital media. Focuses on experimental performance photography and experimental film with mixed media.',
    statement: [
      'Amid the rapid rise of AI, immersive media and an endless flood of images, my practice asks how we perceive reality and the virtual, and where the boundary between them lies.',
      'Underneath is one question: how do we see ourselves, and how are we seen, in an age of discrete code? When continuous reality is cut into 0 and 1, and flesh is discretised, can the body still honestly carry something of the person, their consciousness, perhaps their soul? Or is the discretised reality we see in latent space still reality?',
    ],
    education: [
      { school: 'Goldsmiths, University of London', degree: 'MA Digital Media: Image Making' },
      { school: 'University of Sheffield', degree: 'MA Architectural Design' },
    ],
    background: 'Previously in VFX, branded content and PR in Shanghai.',
  },
};

/* =====================================================================
   SERIES 系列（三个大章节）
   ===================================================================== */
const SERIES = [
  {
    id: '001',
    title: 'Embodiment and Presence',
    kind: 'Experimental Performance Photography',
    cover: img('home', 1),
    text: 'Photographs of dancers in live performance and studio sessions. For Merleau-Ponty, the body is not an object to be observed but the subject through which experience arises. These images stay with presence: a body moving in front of the camera, before interpretation arrives.',
  },
  {
    id: '002',
    title: 'Virtual Embodiment',
    kind: 'Experimental Moving Image',
    cover: img('virtual', 1),
    text: 'Two moving-image works made with dance, motion capture and digital humans. There might not be a distinct line between reality and virtual reality. It may be only a matter of degree. The virtual is no longer simply the opposite of the real; it becomes part of the reality we live in, reshaping how we perceive it.',
  },
  {
    id: '003',
    title: 'The Fold of Moha',
    kind: 'Documentary Photography',
    cover: img('moha', 1),
    text: 'Temples in Hangzhou and Shenzhen: desire, devotion and the quiet traces people leave in space, at the edge of modernisation and AI.',
  },
];

/* =====================================================================
   WORKS 作品（每个作品一页）
   blocks 是作品页里从上到下的内容：
     { type: 'text',  title: '可选小标题', body: ['段落1', '段落2'] }
     { type: 'full',  src: 图片 }                  —— 通栏大图
     { type: 'grid',  cols: 2|3, srcs: [图片…] }   —— 2列或3列
     { type: 'pair',  srcs: [大图, 小图], text: '可选旁注' } —— 一大一小 + 文字
     { type: 'row',   srcs: [图片, 图片] }          —— 一行多张，按原比例并排、高度对齐（横竖图混排用这个）
     { type: 'quote', body: '引文' }
     { type: 'video', youtube: 'YouTube视频ID' }   —— 也可以用 vimeo: '数字ID'
     单张图片会自动「大 → 中靠右 → 中靠左」交替，留出空白。
     想手动指定：{ type: 'full', src: …, size: 'l'|'m'|'s', align: 'left'|'right'|'center' }
   ===================================================================== */
const WORKS = [
  /* ------------------------- 001 ------------------------- */
  {
    slug: 'aura',
    series: '001',
    no: '01',
    title: "It's Aura, Here-and-Now",
    year: '2026',
    cover: img('aura', 2),
    tags: 'Seeing and Being Seen / Documentation and the Real / The Meaning of Presence',
    credits: [
      ['Dancer', 'Darby Ward'],
      ['Photographer / Videographer', 'Ming Lu'],
      ['Video Editor', 'Claire Zheng'],
      ['Date', 'April 2026'],
      ['Location', 'London'],
      ['Camera', 'Sony α7R II'],
    ],
    blocks: [
      { type: 'text', body: [
        "A series of experimental photographs and moving images of improvised dance. The aim is to catch the natural flow of the dancer's emotion, together with everything the space holds: sunlight, architecture, and the energy passing between photographer and dancer. Captured by the lens, all of this unfolds into a narrative of micro-expressions and unfinished gestures that might otherwise go unnoticed.",
        'Nothing is directed or imposed. No pose, theme or state is asked of the dancer; the body is left to stretch and settle at its own pace. Yet the process is never neutral: even she (the dancer) improvises freely, but she knows she is facing a camera. While the emotion and energy pass in both me and her is real, its energy between photographer and the dancer. Maybe the one of the presence of the shoot itself becomes part of the meaning.',
      ] },
      { type: 'full', src: img('aura', 1) },
      { type: 'grid', cols: 2, srcs: imgs('aura', 3, 6) },
      { type: 'quote', body: 'We capture what will never return, yet in this very frame, it breathes with its own eternal aura — here and now.' },
      { type: 'grid', cols: 3, srcs: imgs('aura', 7, 12) },
      { type: 'pair', srcs: [img('aura', 13), img('aura', 14)], text: 'I am drawn to the unexpected and unguarded facets of those I photograph — moments where masks slip away to reveal raw, multidimensional truths. These fleeting intersections of light, shadow, and emotion can never be replicated or recaptured; they exist only in a singular continuum.' },
      { type: 'pair', srcs: [img('aura', 16), img('aura', 18)], text: 'Benjamin saw aura withering under reproduction. The moment of the shutter cannot return, and the reproduced image does not replace it. No one can recreate everything that happened in that moment.' },
      { type: 'full', src: img('aura', 19) },
      { type: 'text', body: [
        'Yet each time the image is copied, circulated, shown and viewed again, a new layer of narrative is written onto that original moment.',
        'Distance does not necessarily drain the aura of the here-and-now. It allows the moment to accumulate new encounters, meanings and ways of seeing, becoming richer rather than diminished.',
      ] },
      { type: 'grid', cols: 3, srcs: imgs('aura', 20, 25) },
      { type: 'pair', srcs: [img('aura', 27), img('aura', 30)], text: 'Perhaps aura lies not only in the moment of its occurrence, but also in how it is viewed, understood and circulated, how it forms connections with its viewers, and how it generates new narratives and shapes new realities.' },
      { type: 'video', youtube: 'gN-febdVZZU', label: 'Sequences of Movement / Moving Image', meta: 'Experimental Performance Video' },
      { type: 'full', src: img('aura-video', 13) },
      { type: 'grid', cols: 3, srcs: imgs('aura-video', 25, 30) },
      { type: 'full', src: img('aura-video', 24) },
    ],
  },
  {
    slug: 'camera-folds',
    series: '001',
    no: '02',
    title: 'The Camera Folds',
    year: '2026',
    cover: img('camera-folds', 1),
    tags: 'Studio sessions / Cut and Fold',
    credits: [
      ['Dancer', 'María Fernanda Frisch Jacobo'],
      ['Photographer', 'Ming Lu'],
      ['Creative Director / Lighting', 'Claire Zheng'],
      ['Make-up', 'Claire Zheng, Ming Lu, Fer Frisch'],
      ['Date', 'June 2026'],
      ['Location', 'Central Saint Martins, London'],
    ],
    blocks: [
      { type: 'text', body: [
        'Studio lighting is controlled; the body is not. The camera traces the flow of bodily tension. The frames I keep are not the posed ones, but those where the hesitation, the shift, and the unfinished gesture remain legible: markers we can return to. The process of making photography is not a "cut" but a "fold".',
      ] },
      { type: 'pair', srcs: [img('camera-folds', 2), img('camera-folds', 4)], text: 'A photograph is often described as a cut: one instant lifted out of continuous time. Here, I think of it as a fold. The frame does not sever the moment from what came before and after; it presses that duration into a single surface. A guarded body, a sudden loosening, an attempt to give me what she thinks I want — all of it is folded in rather than cut away.' },
      { type: 'grid', cols: 2, srcs: [img('camera-folds', 5), img('camera-folds', 6)] },
      { type: 'full', src: img('camera-folds', 8) },
      { type: 'full', src: img('camera-folds', 9) },
      { type: 'grid', cols: 2, srcs: [img('camera-folds', 10), img('camera-folds', 11)] },
      { type: 'grid', cols: 2, srcs: [img('camera-folds', 12), img('camera-folds', 13)] },
      { type: 'pair', srcs: [img('camera-folds', 14), img('camera-folds', 15)] },
    ],
  },
  {
    slug: 'no-business',
    series: '001',
    no: '03',
    title: 'What Had No Business Being Seen',
    year: '2026',
    cover: img('no-business', 2),
    tags: 'Long Exposure / Dance Studio, Natural Light',
    credits: [
      ['Dancer', 'Yingxin Lyu'],
      ['Photographer / Creative Director', 'Ming Lu'],
      ['Date', 'April 2026'],
      ['Location', 'The Place, London'],
      ['Camera', 'Sony α7R II'],
    ],
    blocks: [
      { type: 'text', body: [
        'What "had no business being seen" in photographs of the people I know? The emotions they swallow, the micro-movements that accompany speech, the energy between dancer and photographer.',
        'Long exposure folds time, space, narrative and feeling into the frame. The "improper" moments, the ones that don\'t fit, are usually treated as mistakes, glitches, noise. I use long exposure to make them visible.',
      ] },
      { type: 'row', srcs: [img('no-business', 4), img('no-business', 5)] },
      { type: 'full', src: img('no-business', 14), size: 'm', align: 'left' },
      { type: 'row', srcs: [img('no-business', 3), img('no-business', 15), img('no-business', 6)] },
      { type: 'text', body: ['We started in her dance studio. As she began to move, I forgot the experiment altogether and simply photographed her. A body trained to move with precision leaves a different trace from one driven by excitement or instinct.'] },
      { type: 'row', srcs: [img('no-business', 8), img('no-business', 9)] },
      { type: 'full', src: img('no-business', 10), size: 'l', align: 'center' },
      { type: 'row', srcs: [img('no-business', 11), img('no-business', 12)] },
      { type: 'full', src: img('no-business', 16), size: 'm', align: 'left' },
      { type: 'full', src: img('no-business', 13), size: 'm', align: 'right' },
      // 备用：no-business-07（镜子前）暂未放上，原图文件夹里没找到高清版
    ],
  },
  {
    slug: 'on-site',
    series: '001',
    no: '04',
    title: 'Performance On-Site',
    year: '2026',
    cover: img('on-site', 17),
    tags: 'Trinity Laban Degree Show 2026',
    credits: [
      ['Choreography', 'Haley Andrews, Jiayu Zhou'],
      ['Performers', 'Haley Andrews, Manou Leentjes, Fadi Giha, Nick Hodos, Araceli Ramos, Jiayu Zhou, Hanqi Huang, Laura Castiblanco'],
      ['Photographer', 'Ming Lu'],
      ['Date', 'July 2026'],
      ['Location', 'Laban Theatre, London'],
    ],
    blocks: [
      { type: 'text', body: [
        'Photographed live at the Trinity Laban degree show 2026. ON-SITE is about presence: not only people in a place, but the relationship between people, time, space, light and mood. Space is not a backdrop. It is part of the narrative. When the work unfolds, the viewer is not handed a message but invited to stand inside the room and let the space speak.',
      ] },
      { type: 'full', src: img('on-site', 2) },
      { type: 'grid', cols: 3, srcs: imgs('on-site', 4, 6) },
      { type: 'full', src: img('on-site', 3) },
      { type: 'grid', cols: 3, srcs: imgs('on-site', 7, 9) },
      { type: 'full', src: img('on-site', 10) },
      { type: 'grid', cols: 2, srcs: [img('on-site', 11), img('on-site', 12)] },
      { type: 'full', src: img('on-site', 13) },
      { type: 'grid', cols: 2, srcs: [img('on-site', 15), img('on-site', 16)] },
      { type: 'full', src: img('on-site', 17) },
      { type: 'text', title: 'Am I Allowed to Sound Like This — Jiayu Zhou', body: [
        'Under relentless competition, anxiety becomes a default undertone, and a question follows: am I living for myself, or performing to an external standard? The work brings together four dancers to embody two voices living within a single individual — the composed exterior and the turbulent interior. From struggle and collision to eruption and rebuilding, the body becomes the only honest language.',
        'Choreography: Jiayu Zhou · Dancers: Jiayu Zhou, Hanqi Huang, Araceli Ramos, Laura Castiblanco · Sound Design: Shan Lyu · Voice Recording: Jiayu Zhou, Haley Andrews · Photographer: Ming Lu · 23 July 2026, Laban Theatre, Trinity Laban, London',
      ] },
      { type: 'grid', cols: 2, srcs: imgs('allowed', 1, 4) },
      { type: 'full', src: img('allowed', 5) },
      { type: 'full', src: img('allowed', 7) },
    ],
  },

  /* ------------------------- 002 ------------------------- */
  {
    slug: 'i-am-my-body',
    series: '002',
    no: '01',
    title: 'I Am My Body',
    year: '2025',
    cover: img('i-am-my-body', 1),
    thumb: 'images/i-am-my-body/i-am-my-body-thumb.jpg',   // 首页作品列表里显示的图（不填就用 cover）
    tags: 'Motion capture / 3D animation / Particle effects',
    credits: [
      ['Medium', 'Single-channel video, black-and-white live action with colour animation, sound'],
      ['Technology', 'Motion capture, 3D animation, particle effects'],
      ['Duration', '2 min 43 s'],
    ],
    blocks: [
      { type: 'text', body: [
        'An experimental moving-image work investigating the shifting threshold between the physical body and its digital counterpart through dance and motion capture.',
        'The choreography is for two dancers, one performing as herself and the other as her digital double, so the interplay between flesh and virtual flesh is embedded in the movement. The footage is mostly black and white, with the animation rendered in colour, to emphasise the misalignment between the real and the virtual.',
      ] },
      // ↓ 视频：YouTube 视频ID（链接里 v= 后面那串）
      { type: 'video', youtube: 'UJS4Q18erbs', poster: img('i-am-my-body', 6), label: 'I Am My Body (2025)', meta: '2 min 43 s', note: 'Full video available on request' },
      { type: 'full', src: img('i-am-my-body', 6), size: 'l', align: 'center' },
      // 真实 / 虚拟 对照：黑白真眼睛 ↔ 银色液态眼睛
      { type: 'row', srcs: [img('i-am-my-body', 5), img('i-am-my-body', 2)] },
      { type: 'row', srcs: [img('i-am-my-body', 3), img('i-am-my-body', 4)] },
      { type: 'text', body: [
        'Working across mixed media, including Blender and TouchDesigner, AI tool, the work visualises the body breaking into particles, a metaphor for its being broken into data. Drawing on Merleau-Ponty, it treats the body not as a tool for expression but as existence itself. When the body is discretised into data, copied and edited, where does the self reside?',
      ] },
      // 真实 / 虚拟 对照：黑白的手 ↔ 彩色的手
      { type: 'row', srcs: [img('i-am-my-body', 7), img('i-am-my-body', 8)] },
      { type: 'row', srcs: [img('i-am-my-body', 9), img('i-am-my-body', 10), img('i-am-my-body', 11)] },
      { type: 'full', src: img('i-am-my-body', 12), size: 'm', align: 'right' },
    ],
  },
  {
    slug: 'how-to-be-seen',
    series: '002',
    no: '02',
    title: 'How to Be Seen',
    year: '2026',
    cover: img('how-to-be-seen', 4),
    tags: 'MOHA · 痴 — MetaHuman / UE5 / ComfyUI',
    credits: [
      ['Medium', 'Single-channel video, sound'],
      ['Technology', 'Motion capture, 3D animation, ComfyUI, UE5 MetaHuman'],
      ['Duration', '6 min 30 s'],
      ['Dancer', 'Jiayu Zhou'],
    ],
    blocks: [
      { type: 'text', body: [
        'An experimental moving-image work that takes moha (avidyā), delusion, as a filter through which we perceive reality, truth and the self. In virtual space we multiply endlessly, swapping faces and scenes in a fleeting cyber-samsara. Through motion capture, the body is encoded into data: more of "me" appears, yet less of me remains. The face dissolves into JOJO, a MetaHuman built from a dancer\'s data. "Being seen" is always mediated.',
      ] },
      { type: 'video', youtube: '7Sa9ZESUOug', label: 'How to Be Seen (2026)', meta: '6 min 30 s' },
      { type: 'full', src: img('how-to-be-seen', 4) },
      { type: 'text', title: 'Here, the plastic is a filter.', body: [
        'In virtual space, we are multiplied endlessly — we can change faces, swap spaces, as if we could appear in any scene imaginable. It is almost a fleeting digital reincarnation: a cyber-samsara. But in the end, I only input data, a skeleton left behind by motion capture. It looks as if more of me is seen, and yet what is seen is less of me.',
        'The indexicality of the face is reduced to data and video, input and synthesized into a Metahuman. I then capture the motion, import it into UE5, and feed the depth maps — together with prompts — into Comfy UI, letting the dancer move anywhere, at any time.',
        'This Metahuman is my dancer\'s digital double. You see her — but she is only a "digital phantom". She can simulate human behaviors through data input, yet she can never know the feeling of loss, or how to love… (well, this situation is just for now because I am not sure if she will possess a soul in the future)',
        'And what we call "being seen": what is seen is a "reality" that has already passed through the filter, through mediation. You no longer know what is real; and these virtual realities, in turn, begin to shape reality. I am not offering a critique, nor am I claiming that we must draw a sharp boundary between the virtual and the real — it is more a question of degree, of how we coexist with it. Or rather: we were never able to truly see the thing-in-itself at all.',
      ] },
      { type: 'pair', srcs: [img('how-to-be-seen', 6), img('how-to-be-seen', 7)], text: 'Technical workflow — final CGI render of Metahuman in UE5.' },
      { type: 'full', src: img('how-to-be-seen', 9) },
      { type: 'pair', srcs: [img('how-to-be-seen', 10), img('how-to-be-seen', 11)], text: 'The digital human I made works this way. JOJO\'s existence does not mean she is Jiayu or can stand for Jiayu, but her digital existence is already a reality — one entangled and connected with Jiayu, and one that has some effect on those who have seen her. This was a reflection that came while making the second project, and it revised what I had thought in I am my body. In How to be Seen I therefore edited Jiayu and JOJO together in montage: two faces, parts of features, or face and body intercut across several passages, so that the boundary between them could not simply be cut clean.' },
      { type: 'full', src: img('how-to-be-seen', 12) },
      { type: 'full', src: img('how-to-be-seen', 13) },
      { type: 'text', title: 'From Filter to Fold', body: [
        'We make contact within a reality that is tangled and continuous, and what we touch is always a folded world. Moha, then, is this: we cannot see clearly, or, driven by desire and attachment, we are unwilling to.',
        'There is a correspondence in How to be Seen. In the work, the dancer becomes entangled with plastic sheeting and tries to break through it, which is something like our own interaction with reality. We sometimes take ourselves to be looking at the world transparently, but there is mediation between us and the world, there is an interface — it looks transparent, but it is there, and we are in contact with it; and the surface of that interface is folded, full of creases. The struggle in the choreography, the approaching and the drawing away, presents our connection with reality, and also stands for our struggle with ourselves under the drive of a desire for truth and for transcendent experience.',
      ] },
      { type: 'grid', cols: 2, srcs: imgs('how-to-be-seen', 14, 19) },
      { type: 'pair', srcs: [img('how-to-be-seen', 20), img('how-to-be-seen', 21)], text: 'JOJO (the digital human) says, "I am from you" — she comes from a Jiayu who has been made discrete. Then, after a montage of real and virtual faces, Jiayu asks her whether she can cry. The digital human tries, and answers: It seems I can\'t. The tears failed to retarget. And then, tears appear on JOJO\'s face. JOJO declares that she cannot, and the tears come anyway. The virtual is also a form of reality — not on the other side of the real, but part of what constitutes it.' },
      { type: 'grid', cols: 2, srcs: [img('how-to-be-seen', 23), img('how-to-be-seen', 24)] },
      { type: 'quote', body: 'If technology makes the virtual more real, what have we transcended — or have we only sunk deeper into the illusions these technologies produce, drawn there by our own desire and longing?' },
      { type: 'full', src: img('how-to-be-seen', 25) },
      { type: 'text', title: 'Moha and Avidyā', body: [
        'This project related to two concepts from Buddhist thought, moha (痴) and avidyā (无明), to name a state of cognitive delusion and obscured perception of reality — an unawareness of one\'s own situation. There are three fundamental defilements of the mind according to Buddhist thought: greed (rāga, lobha), aversion (dveṣa/dosa), and delusion (moha, avidyā/avijjā). In this sense, Buddhist thought sees the human as drawn by greed and ignorance into constructing all manner of views, opinions, attachments, and notions of self (Gethin, 1998, p. 74).',
        'If the world is constituted by countless appearances — shifting endlessly, like layers of filters — do we have the capacity to see through these filters to whatever lies beneath? Or is cognition itself an innate filter, impossible to remove, as Kant put it: we can only access phenomena, not the thing in itself?',
        'One set of motion capture data with different prompts fed into the ComfyUI pipeline generate different scenes and different figures. The metaphor is this: after layers of filtering and mediation, the images vary, while the motion data underneath them stays the same.',
      ] },
      { type: 'text', title: 'Cyber-Samsara', body: [
        'In Buddhism, samsara is the process by which beings carry karma into the next life through greed, aversion and delusion. I use "cyber-samsara" as an analogy rather than a claim of equivalence. Buddhist samsara spans the length of a life; here, within five or ten minutes, a set of prompts and motion capture data can bring about a rebirth in another "time, space and individual."',
        'I think of it as a "discrete reincarnation" — mechanical, discrete, a copying in numbers and code. Samsara deals with continuous causation; the pipeline deals in discrete data: skeletons, frames, depth maps. Continuous reality is cut into transmissible units at the moment it enters the pipeline (Stalder, 2018, p. 62), and what results cannot express a reality that is complex and continuous.',
      ] },
      { type: 'full', src: img('how-to-be-seen', 27) },
      { type: 'grid', cols: 3, srcs: imgs('how-to-be-seen', 28, 33) },
      { type: 'full', src: img('how-to-be-seen', 26) },
      { type: 'quote', body: 'It seems, I can dance anywhere. Yet the more I\'ve been seen, the less of \'me\' remains.' },
      { type: 'full', src: img('how-to-be-seen', 34) },
      { type: 'text', body: [
        'For me, making creative work is a struggle, full of detours — a constant rebuilding of my relationship with myself. I work mostly from inspiration and intuition, and when I cannot be honest with myself, I can no longer go on. I want my work to be seen; and if it isn\'t — if it isn\'t even seen by me — then it loses its meaning for me. I would rather be honest with myself than settle for a "hypocritical correctness." But honestly, that part is really hard.',
      ] },
    ],
  },

  /* ------------------------- 003 ------------------------- */
  {
    slug: 'prayer-of-desire',
    series: '003',
    no: '01',
    title: 'The Prayer of Desire',
    year: '2019',
    cover: img('moha', 2),
    tags: 'Lingyin Temple, Hangzhou',
    credits: [
      ['Date', '31 December 2019'],
      ['Location', 'Lingyin Temple, Hangzhou, China'],
      ['Camera', 'Fujifilm X-T5, XF 35mm f/1.4 R'],
    ],
    blocks: [
      { type: 'full', src: img('moha', 2) },
      { type: 'text', body: [
        'Walking up the stone stairs to the Main Hall of Lingyin Temple, I looked back at the praying crowd beneath a heavy haze of incense. I raised my camera and wondered: does Buddha exist? And if he hears these prayers, what does he make of them? Are they merely reflections of our desires and attachments?',
        'I cannot know what each person is asking for, yet they seem linked together, extras in the same great circle of life. Only weeks after I took this photograph, COVID-19 spread across China — a reminder of how impermanent and unpredictable that circle can be.',
      ] },
      { type: 'full', src: img('moha', 1) },
      { type: 'full', src: img('moha', 3) },
    ],
  },
  {
    slug: 'monk-with-phone',
    series: '003',
    no: '02',
    title: 'The Monk with His Phone',
    year: '2024',
    cover: img('moha', 4),
    tags: 'Prajna Temple, Shenzhen',
    credits: [
      ['Date', 'July 2024'],
      ['Location', 'Prajna Temple, Longgang District, Shenzhen'],
      ['Camera', 'Sony α7R II, Zeiss FE 24–70mm f/4'],
    ],
    blocks: [
      { type: 'full', src: img('moha', 4) },
      { type: 'text', body: [
        'Prajna Temple is a small temple in Shenzhen. In an alley inside, a man practised tai chi while onlookers watched, and a monk stood nearby, absorbed in his phone. Front to back, the figures fall into a quiet order, and the red shirt cuts against the green.',
        'It made me wonder where the line between traditional religion and technology lies, in the fast pace of modernisation and AI. Is the monk "modernising the dharma", or simply looking at his phone?',
      ] },
    ],
  },
  {
    slug: 'eternal-now',
    series: '003',
    no: '03',
    title: 'The Eternal Now',
    year: '2024',
    cover: img('moha', 5),
    tags: 'Prajna Temple, Shenzhen',
    credits: [
      ['Date', 'July 2024'],
      ['Location', 'Prajna Temple, Longgang District, Shenzhen'],
      ['Camera', 'Sony α7R II, Zeiss FE 24–70mm f/4'],
    ],
    blocks: [
      { type: 'full', src: img('moha', 5) },
      { type: 'text', body: [
        'Photography may be a way for me to hold a particular time and space, because there are no second takes. Even if I return to the same place, I cannot recreate that moment. It is one of the reasons I picked up a camera.',
        'I usually look at how people meet space, and at how light and shadow shape it. Here, I waited for the worshippers to leave, then photographed the cushion still marked by those who had knelt on it. Rather than telling the story directly, I let subtle traces carry the passing of time, leaving room to wonder what the last person might have prayed for. People come and go; the place carries on as the sun rises and sets. This moment is all we have.',
      ] },
      { type: 'grid', cols: 2, srcs: [img('moha', 6), img('moha', 7)] },
    ],
  },
  {
    slug: 'sun-kissed',
    series: '003',
    no: '04',
    title: 'Sun Kissed with Love',
    year: '2024',
    cover: img('moha', 8),
    tags: 'Shenzhen Bay',
    credits: [
      ['Date', 'July 2024'],
      ['Location', 'Shenzhen'],
      ['Camera', 'Sony α7R II, Zeiss FE 24–70mm f/4'],
    ],
    blocks: [
      { type: 'full', src: img('moha', 8) },
      { type: 'text', body: [
        'On a sunny afternoon, I was walking along the lawn at Shenzhen Bay. The quiet beauty of the moment took hold of me. When I stopped worrying about what others might think, or whether I was taking the photograph as well as I should, something more genuine emerged.',
        'Truths and answers are not always easy to see. We keep correcting ourselves through twists and turns, pain, regression and moving forward. I am reminded of a line from Hsin-yao Huang\'s film Classmates Minus: "The answer to life is chaos." But perhaps the answer does not matter all that much; the attempts themselves may already be meaningful.',
      ] },
    ],
  },
];
