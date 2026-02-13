// ╔══════════════════════════════════════════════════════╗
// ║       VALENTINE'S EE GAME HUB — V3 SCRIPT          ║
// ╚══════════════════════════════════════════════════════╝

const $=id=>document.getElementById(id);
const rnd=(a,b)=>Math.random()*(b-a)+a;
const rndI=(a,b)=>Math.floor(rnd(a,b+1));

// ───────────────── BACKGROUND ─────────────────
(function(){
  const s=$('stars');
  for(let i=0;i<80;i++){
    const el=document.createElement('div');el.className='star';
    const z=rnd(.4,2.8);
    el.style.cssText=`width:${z}px;height:${z}px;left:${rnd(0,100)}%;top:${rnd(0,100)}%;--d:${rnd(2,5).toFixed(1)}s;--dl:${rnd(0,6).toFixed(1)}s`;
    s.appendChild(el);
  }
  const fh=$('fhearts');
  const emo=['♥','♥','♡','✦','✧','⚡'];
  for(let i=0;i<14;i++){
    const h=document.createElement('div');h.className='fh';
    h.textContent=emo[i%emo.length];
    h.style.cssText=`--x:${rnd(1,95)}%;--fs:${rnd(.9,1.5).toFixed(1)}rem;--dur:${rnd(9,17).toFixed(1)}s;--dl:${rnd(0,15).toFixed(1)}s;color:${['#2979ff','#7c3aed','#f06292'][i%3]}`;
    fh.appendChild(h);
  }
})();

// ───────────────── 1. COLOR PALETTES ─────────────────
const PB_PAL = {
  crown: '#fde047', // Yellow
  jewel: '#3b82f6', // Blue
  hair: '#ff6bb5',  // Bright pink
  face: '#ffd5e8',  // Light pink
  eyes: '#000000',  // Black
  dress: '#d01c8b'  // Darker pink
};

const DINO_PAL = {
  skin: '#4ade80',   // Green
  spike: '#14b8a6',  // Teal
  blush: '#fb7185',  // Pink
  eye: '#000000',    // Black
  line: '#000000'    // Black outline
};

const CAT_B={hr:'#1e293b',hd:'#1e293b',ey:'#fbbf24',bd:'#0f172a',b2:'#020617',sk:'#f8fafc',pt:'#0f172a',bt:'#020617'};
const CAT_O={hr:'#fb923c',hd:'#fb923c',ey:'#065f46',bd:'#f97316',b2:'#ea580c',sk:'#fed7aa',pt:'#c2410c',bt:'#9a3412'};
const CAT_W={hr:'#f8fafc',hd:'#f8fafc',ey:'#0ea5e9',bd:'#e2e8f0',b2:'#cbd5e1',sk:'#ffffff',pt:'#94a3b8',bt:'#64748b'};

// ───────────────── 2. RENDER HELPER ─────────────────
function renderMatrix(matrix, scale, cols, className = 'pchar') {
  const el = document.createElement('div');
  el.className = className;
  el.style.display = 'grid';
  el.style.gridTemplateColumns = `repeat(${cols}, ${scale}px)`;

  matrix.forEach(row => row.forEach(c => {
    const d = document.createElement('div');
    d.className = 'px';
    d.style.cssText = `width:${scale}px;height:${scale}px;`;
    if (c !== '_') {
      d.style.background = c;
      d.style.boxShadow = `0 0 2px ${c}88`;
    } else {
      d.style.background = 'transparent';
    }
    el.appendChild(d);
  }));
  return el;
}

// ───────────────── 3. CHARACTER BUILDERS ─────────────────

function buildPrincess(scale) {
  const p = PB_PAL;
  const _ = '_';
  const m = [
    [_, _, _, _, p.jewel, p.jewel, _, _, _, _],
    [_, _, p.hair, p.hair, p.crown, p.crown, p.hair, p.hair, _, _],
    [_, p.hair, p.hair, p.crown, p.crown, p.crown, p.crown, p.hair, p.hair, _],
    [p.hair, p.hair, p.hair, p.crown, p.crown, p.crown, p.crown, p.hair, p.hair, p.hair],
    [p.hair, p.hair, p.face, p.face, p.face, p.face, p.face, p.face, p.hair, p.hair],
    [p.hair, p.hair, p.face, p.eyes, p.face, p.face, p.eyes, p.face, p.hair, p.hair],
    [p.hair, p.hair, p.face, p.face, p.face, p.face, p.face, p.face, p.hair, p.hair],
    [p.hair, p.hair, p.face, p.face, p.face, p.face, p.face, p.face, p.hair, p.hair],
    [p.hair, p.hair, p.face, p.dress, p.dress, p.dress, p.dress, p.face, p.hair, p.hair],
    [p.hair, p.hair, p.dress, p.dress, p.dress, p.dress, p.dress, p.dress, p.hair, p.hair],
    [_, _, p.dress, p.dress, p.dress, p.dress, p.dress, p.dress, _, _],
    [_, _, p.dress, p.dress, p.dress, p.dress, p.dress, p.dress, _, _]
  ];
  return renderMatrix(m, scale, 10);
}

function buildDino(scale) {
  const d = DINO_PAL;
  const _ = '_';
  const m = [
    [_, _, _, d.line, d.line, d.line, _, _, _, _, _, _, _, _],
    [_, _, d.line, d.spike, d.spike, d.line, _, _, _, _, _, _, _, _],
    [_, d.line, d.spike, d.spike, d.line, d.line, d.line, d.line, d.line, _, _, _, _, _],
    [d.line, d.spike, d.spike, d.line, d.skin, d.skin, d.skin, d.skin, d.skin, d.line, _, _, _, _],
    [d.line, d.line, d.line, d.skin, d.skin, d.skin, d.skin, d.skin, d.skin, d.skin, d.line, _, _, _],
    [_, d.line, d.skin, d.skin, d.eye, d.skin, d.skin, d.skin, d.eye, d.skin, d.line, _, _, _],
    [_, d.line, d.skin, d.blush, d.skin, d.line, d.line, d.skin, d.blush, d.skin, d.line, _, _, _],
    [_, d.line, d.skin, d.skin, d.skin, d.skin, d.skin, d.skin, d.skin, d.skin, d.line, _, _, _],
    [_, _, d.line, d.skin, d.skin, d.skin, d.skin, d.skin, d.skin, d.line, _, _, _, _],
    [_, _, _, d.line, d.line, d.line, d.line, d.line, d.line, _, _, _, _, _],
    [_, d.line, d.line, d.line, d.skin, d.skin, d.line, _, _, _, _, _, _, _],
    [d.line, d.skin, d.skin, d.line, d.skin, d.skin, d.line, _, _, _, _, _, _, _],
    [d.line, d.line, d.line, d.line, d.line, d.line, d.line, _, _, _, _, _, _, _]
  ];
  return renderMatrix(m, scale, 14);
}

function buildCat(pal, scale) {
  const {hr, ey, bd, b2, sk} = pal;
  const _ = '_';
  const m = [
    [hr,_,_,_,_,hr],
    [hr,hr,_,_,hr,hr],
    [hr,bd,bd,bd,bd,hr],
    [bd,ey,bd,bd,ey,bd],
    [bd,bd,sk,sk,bd,bd],
    [bd,bd,bd,bd,bd,bd],
    [_,b2,bd,bd,b2,_],
    [_,b2,_,_,b2,_]
  ];
  return renderMatrix(m, scale, 6);
}

function buildHouse() {
  const w = '#8b4513'; const r = '#dc2626'; const wn = '#fbbf24'; 
  const dr = '#7c2d12'; const _ = '_';
  const m = [
    [_,_,_,_,r,r,_,_,_,_],[_,_,_,r,r,r,r,_,_,_],[_,_,r,r,r,r,r,r,_,_],
    [_,r,r,r,r,r,r,r,r,_],[r,r,r,r,r,r,r,r,r,r],[w,w,w,w,w,w,w,w,w,w],
    [w,wn,wn,w,w,w,w,wn,wn,w],[w,wn,wn,w,w,w,w,wn,wn,w],[w,w,w,w,w,w,w,w,w,w],
    [w,w,w,w,dr,dr,w,w,w,w],[w,w,w,w,dr,dr,w,w,w,w],[w,w,w,w,dr,dr,w,w,w,w]
  ];
  const el = document.getElementById('pixel-house');
  if(!el) return;
  m.forEach(row => row.forEach(c => {
    const d = document.createElement('div');
    d.className = 'px';
    d.style.cssText = 'width:6px;height:6px;';
    if(c !== '_') {
        d.style.background = c;
        d.style.boxShadow = `0 0 2px ${c}66`;
    }
    el.appendChild(d);
  }));
}

// ───────────────── 4. INITIALIZATION ─────────────────
function initPixelScene() {
  const cont = document.getElementById('pixel-chars');
  if(!cont) return;

  const characters = [
    { type: 'pb', scale: 8, dur: 28, delay: 0, rev: false },
    { type: 'dino', scale: 8, dur: 32, delay: 8, rev: true },
    { pal: CAT_B, type: 'cat', scale: 6, dur: 22, delay: 3, rev: false },
    { pal: CAT_O, type: 'cat', scale: 6, dur: 25, delay: 12, rev: true },
    { pal: CAT_W, type: 'cat', scale: 6, dur: 20, delay: 18, rev: false }
  ];

  characters.forEach(ch => {
    let el;
    if (ch.type === 'pb') el = buildPrincess(ch.scale);
    else if (ch.type === 'dino') el = buildDino(ch.scale);
    else el = buildCat(ch.pal, ch.scale);

    el.style.animationDuration = ch.dur + 's';
    el.style.animationDelay = ch.delay + 's';
    if (ch.rev) el.classList.add('reverse');
    cont.appendChild(el);
  });

  buildHouse();
}

initPixelScene();

// ───────────────── AUDIO ─────────────────
let actx=null;
function getCtx(){if(!actx)try{actx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}return actx}
function beep(f,v,d){
  const c=getCtx();if(!c)return;
  try{
    const o=c.createOscillator(),g=c.createGain();
    o.connect(g);g.connect(c.destination);
    o.frequency.value=f;g.gain.setValueAtTime(v||.08,c.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,c.currentTime+(d||.14));
    o.start();o.stop(c.currentTime+(d||.14));
  }catch(e){}
}
function playWin(){[523,659,784,1047,784,1047,1319].forEach((f,i)=>setTimeout(()=>beep(f,.1,.14),i*130))}

// ───────────────── PARTICLES ─────────────────
function burst(cx,cy,n){
  const cols=['#2979ff','#7c3aed','#f44336','#f06292','#c4b5fd','#ffd54f'];
  for(let i=0;i<(n||30);i++){
    const p=document.createElement('div');p.className='pt';
    const sz=rnd(5,12);
    p.style.cssText=`width:${sz}px;height:${sz}px;left:${cx}px;top:${cy}px;
      background:${cols[i%cols.length]};
      --tx:${(rnd(-1,1)*170).toFixed(0)}px;--ty:${(rnd(-.9,.1)*250).toFixed(0)}px;
      --dur:${rnd(.6,1.3).toFixed(2)}s;--r:${rndI(-360,360)}deg;
      animation-delay:${rnd(0,.2).toFixed(2)}s`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1600);
  }
}

// ───────────────── NAVIGATION ─────────────────
let curGame=null;
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  $('s-'+id).classList.add('active');
  window.scrollTo(0,0);
}
function goWelcome(){
  if(cbRunning)cbStop();
  if(cmTimerID)clearInterval(cmTimerID);
  show('welcome');
}
function enterHub(){show('hub')}
function goHub(){
  if(cbRunning)cbStop();
  if(cmTimerID)clearInterval(cmTimerID);
  show('hub');
}
function launch(g){
  curGame=g;
  if(g==='a'){caInit();show('a')}
  else if(g==='b'){cbInit();show('b')}
  else if(g==='c'){cmInit();show('c')}
}

// ───────────────── WIN SCREEN ─────────────────
const WINS={
  a:{title:'Circuit Complete!',
     msg:`Happy Valentine's Day, my love! ♥<br><br>
Just like a completed circuit lights up — <strong>you light up my entire world</strong>.
Being with you feels like finding the missing component that makes everything work perfectly.
I love your sexy and intelligent mind, your passion for learning, your non-stop curiosity and study session,
and the way you explore every world — even pixelated ones.<br><br>
<strong>You're my favorite frequency. ⚡</strong>`,sl:'LOVE VOLTAGE'},
  b:{title:'Hearts Collected!',
     msg:`Catching hearts is easy when they remind me of you ♥<br><br>
Every heart you collected is one more reason I love you.
You catch everything in life with the same dedication —
me when I'm happy, me when I'm sad, or my heart.<br><br>
<strong>You always catch me when I fall and always accept me with open arms. ♥</strong>`,sl:'HEARTS CAUGHT'},
  c:{title:'Perfect Match!',
     msg:`You matched them all — just like we matched. ♥<br><br>
Of all the components in this world,
you are the one I always want to be paired with.
Our love is the best circuit — <strong>you're my perfect match</strong>. ⚡<br><br>
Happy Valentine's Day, my EE engineer. I love you, Engr Alfaro. ♥`,sl:'PAIRS MATCHED'}
};

function showWin(g,val){
  const w=WINS[g]||WINS.a;
  $('win-title').innerHTML=w.title;
  $('win-msg').innerHTML=w.msg;
  $('win-sv').textContent=val;
  $('win-sl').textContent=w.sl;
  $('win-again').onclick=()=>launch(g);
  show('win');
  burst(window.innerWidth/2,window.innerHeight/3,45);
  playWin();
}

// ╔══════════════════════════════════════════════════════╗
// ║  GAME A — CIRCUIT PUZZLE                            ║
// ╚══════════════════════════════════════════════════════╝
let caR=0,caSc=0,caOK=0,caEr=0,caV=0,caSelW=null,caSelEl=null;

const CA_ROUNDS=[
  {title:'Connect the Basic Circuit',sub:'Route blue power from source to heart! 💙',
   rows:[
     {ln:'⚡\n+V', lw:[{id:'w1',n:'bw'},{id:'w2',n:'bw'}], comp:{i:'💡',l:'LED'}, rw:[{id:'w3',n:'bw'}], rn:'❤️\nOut'},
     {ln:'⏚\nGND',lw:[{id:'w4',n:'vw'}],             comp:{i:'⚙️',l:'R1'},  rw:[{id:'w5',n:'vw'},{id:'w6',n:'vw'}], rn:'⏚\nGND'},
   ],
   tray:['bw','bw','bw','vw','vw','vw','vw']},
  {title:'Power the Amplifier',sub:'Boost the Love Signal! 📡',
   rows:[
     {ln:'VCC\n⚡',lw:[{id:'w1',n:'bw'},{id:'w2',n:'bw'}],comp:{i:'📻',l:'AMP'},rw:[{id:'w3',n:'pw'},{id:'w4',n:'pw'}],rn:'💜\nOut'},
     {ln:'SIG\n~',lw:[{id:'w5',n:'vw'},{id:'w6',n:'vw'}],comp:{i:'🔧',l:'CAP'},rw:[{id:'w7',n:'bw'}],rn:'⏚\nGND'},
   ],
   tray:['bw','bw','bw','vw','vw','vw','pw','pw','pw']},
  {title:'Final: Love Transmitter',sub:'Connect You → Heart → Me! 💙❤️💜',
   rows:[
     {ln:'💙\nYou',lw:[{id:'w1',n:'bw'},{id:'w2',n:'pw'},{id:'w3',n:'bw'}],comp:{i:'❤️',l:'LOVE'},rw:[{id:'w4',n:'vw'},{id:'w5',n:'pw'},{id:'w6',n:'vw'}],rn:'💜\nMe'},
   ],
   tray:['bw','bw','bw','vw','vw','vw','pw','pw']},
];

function caInit(){
  caR=0;caSc=0;caOK=0;caEr=0;caV=0;caSelW=null;caSelEl=null;
  caUpdStats();caLoad();
}

function caLoad(){
  caSelW=null;caSelEl=null;
  const r=CA_ROUNDS[caR];
  r.rows.forEach(row=>{row.lw.forEach(w=>w.c=null);row.rw.forEach(w=>w.c=null)});
  $('ca-rtitle').textContent=`ROUND ${caR+1} OF 3`;
  $('ca-ins').innerHTML=`<b>${r.title}</b><br>${r.sub}`;
  for(let i=0;i<3;i++)
    $('rd'+i).className='rdot'+(i<caR?' done':i===caR?' cur':'');
  caBoard(r);caTray(r);$('ca-fb').textContent='';
}

function caBoard(r){
  const bd=$('ca-board');bd.innerHTML='';
  r.rows.forEach((row,ri)=>{
    const el=document.createElement('div');el.className='crow';
    // left node
    el.append(caNode(`ca-ln${ri}`,row.ln));
    // left wires
    row.lw.forEach((w,wi)=>el.append(caSlot(w.id,r,ri,'l',wi)));
    // comp
    const cc=document.createElement('div');cc.className='ccomp-col';
    const ci=document.createElement('div');ci.className='ccomp';ci.id=`ca-ci${ri}`;ci.textContent=row.comp.i;
    const cl=document.createElement('div');cl.className='ccomp-lbl';cl.textContent=row.comp.l;
    cc.append(ci,cl);el.append(cc);
    // right wires
    row.rw.forEach((w,wi)=>el.append(caSlot(w.id,r,ri,'r',wi)));
    // right node
    el.append(caNode(`ca-rn${ri}`,row.rn));
    bd.append(el);
  });
}

function caNode(id,lbl){
  const n=document.createElement('div');n.className='node';n.id=id;
  n.innerHTML=lbl.replace('\n','<br>');return n;
}
function caSlot(wid,r,ri,side,wi){
  const sl=document.createElement('div');sl.className='wslot';
  const tr=document.createElement('div');tr.className='wtrack';tr.id='ca-tr-'+wid;
  sl.appendChild(tr);sl.onclick=()=>caClick(wid,r,ri,side,wi);return sl;
}

function caTray(r){
  const tray=$('ca-tray');tray.innerHTML='';
  const lbl={bw:'💙 Blue',vw:'💜 Violet',pw:'💗 Love'};
  [...r.tray].sort(()=>rnd(-1,1)).forEach((t,i)=>{
    const b=document.createElement('div');
    b.className=`wp ${t}`;b.id=`ca-wp${i}`;
    b.textContent=lbl[t];b.dataset.t=t;
    b.onclick=()=>caPick(b,t);
    tray.append(b);
  });
}

function caPick(el,t){
  if(el.classList.contains('used'))return;
  if(caSelEl)caSelEl.classList.remove('sel');
  if(caSelEl===el){caSelW=null;caSelEl=null;$('ca-fb').textContent='';return}
  caSelW=t;caSelEl=el;el.classList.add('sel');
  const n={bw:'💙 Blue',vw:'💜 Violet',pw:'💗 Love'};
  $('ca-fb').innerHTML=`✔ Selected: <b style="color:var(--blue-l)">${n[t]}</b> — click a dashed slot!`;
}

function caClick(wid,r,ri,side,wi){
  if(!caSelW){$('ca-fb').textContent='⚡ Pick a wire first!';return}
  const pool=side==='l'?r.rows[ri].lw:r.rows[ri].rw;
  const spec=pool[wi];
  if(spec.c){$('ca-fb').textContent='🔧 Already connected!';return}
  const tr=$('ca-tr-'+wid);
  if(caSelW===spec.n){
    spec.c=caSelW;tr.classList.add('ok');
    caSc+=15;caOK++;
    caSelEl.classList.add('used');caSelEl.classList.remove('sel');
    caSelW=null;caSelEl=null;
    $('ca-fb').innerHTML='✅ Correct connection! +15 ⚡';
    caUpdStats();caUpdVolt(r);caChkRow(r,ri);caChkDone(r);
    beep(880,.08);
  } else {
    caEr++;caSc=Math.max(0,caSc-5);
    tr.classList.add('bad');setTimeout(()=>tr.classList.remove('bad'),450);
    $('ca-fb').innerHTML='❌ Wrong wire! −5 pts';
    caUpdStats();beep(180,.07);
  }
}

function caChkRow(r,ri){
  const row=r.rows[ri];
  const ld=row.lw.every(w=>w.c),rd=row.rw.every(w=>w.c);
  if(ld){const n=$(`ca-ln${ri}`);if(n)n.classList.add('powered')}
  if(rd){const n=$(`ca-rn${ri}`);if(n)n.classList.add('powered')}
  if(ld&&rd){const c=$(`ca-ci${ri}`);if(c)c.classList.add('lit')}
}

function caChkDone(r){
  if(!r.rows.every(row=>row.lw.every(w=>w.c)&&row.rw.every(w=>w.c)))return;
  caSc+=25;caUpdStats();
  setTimeout(()=>{
    if(caR<CA_ROUNDS.length-1){
      caR++;caLoad();$('ca-fb').innerHTML=`🎉 Round done! +25 bonus! → Round ${caR+1}`;
    } else {
      caV=100;$('ca-vf').style.width='100%';$('ca-vl').textContent='100% ⚡';
      setTimeout(()=>showWin('a',caSc),500);
    }
  },420);
}

function caUpdVolt(r){
  const tot=r.rows.reduce((a,row)=>a+row.lw.length+row.rw.length,0);
  const fil=r.rows.reduce((a,row)=>a+row.lw.filter(w=>w.c).length+row.rw.filter(w=>w.c).length,0);
  caV=Math.min(99,(caR/CA_ROUNDS.length)*100+(fil/tot)*(100/CA_ROUNDS.length));
  $('ca-vf').style.width=caV.toFixed(0)+'%';
  $('ca-vl').textContent=caV.toFixed(0)+'% ⚡';
}
function caUpdStats(){
  $('ca-sc').textContent=caSc;$('ca-ok').textContent=caOK;$('ca-er').textContent=caEr;
}

// ╔══════════════════════════════════════════════════════╗
// ║  GAME B — HEART CATCHER (Canvas)                    ║
// ╚══════════════════════════════════════════════════════╝
let cbCvs,cbCtx,cbAF,cbRunning=false;
let cbSc=0,cbLv=1,cbHt=0,cbLives=3,cbBl=0,cbVi=0,cbPk=0;
let cbPly,cbItems=[],cbPtcls=[],cbFrames=0,cbOver=false;
const CW=520,CH=360;
const CITEMS=[
  {t:'heart',e:'❤️',pts:10,col:'#f44336',spd:1.5},
  {t:'blue', e:'💙',pts:15,col:'#2979ff',spd:1.6},
  {t:'vio',  e:'💜',pts:20,col:'#7c3aed',spd:1.4},
  {t:'bomb', e:'💣',pts:-1,col:'#374151',spd:2.4},
  {t:'bolt', e:'⚡',pts:-1,col:'#ffd54f',spd:2.6},
];

function cbInit(){
  cbCvs=$('cb-canvas');cbCtx=cbCvs.getContext('2d');
  cbSc=0;cbLv=1;cbHt=0;cbLives=3;cbBl=0;cbVi=0;cbPk=0;
  cbItems=[];cbPtcls=[];cbFrames=0;cbOver=false;
  cbPly={x:CW/2-20,y:CH-50,w:40,h:44,mv:0,spd:6};
  cbUpdUI();cbLivesUI();
  $('cb-rbtn').style.display='none';
  cbBindCtrl();
  if(cbAF)cancelAnimationFrame(cbAF);
  cbRunning=true;cbLoop();
}
function cbStop(){cbRunning=false;if(cbAF)cancelAnimationFrame(cbAF)}
function cbLoop(){if(!cbRunning)return;cbAF=requestAnimationFrame(cbLoop);cbUpdate();cbDraw()}

function cbBindCtrl(){
  document.onkeydown=e=>{if(e.key==='ArrowLeft')cbPly.mv=-1;if(e.key==='ArrowRight')cbPly.mv=1};
  document.onkeyup=e=>{if((e.key==='ArrowLeft'&&cbPly.mv===-1)||(e.key==='ArrowRight'&&cbPly.mv===1))cbPly.mv=0};
  cbCvs.onmousemove=e=>{
    const rc=cbCvs.getBoundingClientRect(),sx=CW/rc.width;
    cbPly.x=(e.clientX-rc.left)*sx-cbPly.w/2;
    cbPly.x=Math.max(0,Math.min(CW-cbPly.w,cbPly.x));
  };
  const touch=e=>{
    e.preventDefault();
    const rc=cbCvs.getBoundingClientRect(),sx=CW/rc.width;
    cbPly.x=(e.touches[0].clientX-rc.left)*sx-cbPly.w/2;
    cbPly.x=Math.max(0,Math.min(CW-cbPly.w,cbPly.x));
  };
  cbCvs.ontouchstart=touch;cbCvs.ontouchmove=touch;
}

function cbUpdate(){
  if(cbOver)return;
  cbFrames++;
  // keyboard move
  if(cbPly.mv){
    cbPly.x+=cbPly.spd*cbPly.mv;
    cbPly.x=Math.max(0,Math.min(CW-cbPly.w,cbPly.x));
  }
  // spawn
  const sr=Math.max(30,55-cbLv*3);
  if(cbFrames%sr===0){
    const goods=CITEMS.filter(t=>t.t!=='bomb'&&t.t!=='bolt');
    const bads=CITEMS.filter(t=>t.t==='bomb'||t.t==='bolt');
    const g=goods[rndI(0,goods.length-1)];
    cbItems.push({x:rnd(8,CW-40),y:-24,w:26,h:26,t:g.t,e:g.e,col:g.col,pts:g.pts,spd:(g.spd+cbLv*.12)*rnd(.88,1.12),alive:true});
    if(Math.random()<.28+cbLv*.035){
      const b=bads[rndI(0,bads.length-1)];
      cbItems.push({x:rnd(8,CW-40),y:-24,w:24,h:24,t:b.t,e:b.e,col:b.col,pts:b.pts,spd:(b.spd+cbLv*.18)*rnd(.9,1.15),alive:true});
    }
  }
  // move items + collision
  cbItems.forEach(it=>{
    it.y+=it.spd;
    if(it.alive&&it.x<cbPly.x+cbPly.w-4&&it.x+it.w>cbPly.x+4&&it.y+it.h>cbPly.y&&it.y<cbPly.y+cbPly.h){
      it.alive=false;
      if(it.pts>0){
        cbSc+=it.pts;cbHt++;
        if(it.t==='blue')cbBl++;else if(it.t==='vio')cbVi++;else cbPk++;
        cbSparkle(it.x+it.w/2,it.y+it.h/2,it.col);beep(500+cbHt*8,.06);
      } else {
        cbLives--;cbLivesUI();cbShake();beep(140,.08);
        if(cbLives<=0){cbEndGame();return}
      }
      cbUpdUI();
    }
  });
  cbItems=cbItems.filter(i=>i.alive&&i.y<CH+30);
  // particles
  cbPtcls.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.life--;p.r+=3});
  cbPtcls=cbPtcls.filter(p=>p.life>0);
  // level up
  if(cbHt>0&&cbHt%12===0&&cbLv<9){cbLv++;beep(900,.06);cbUpdUI()}
}

function cbSparkle(x,y,col){
  for(let i=0;i<9;i++)cbPtcls.push({x,y,vx:rnd(-3.5,3.5),vy:rnd(-4.5,-1),life:rndI(14,28),col,r:0,sz:rnd(2.5,7)});
}
function cbShake(){
  cbCvs.style.transform='translateX(7px)';
  setTimeout(()=>{cbCvs.style.transform='translateX(-7px)'},75);
  setTimeout(()=>{cbCvs.style.transform='none'},155);
}

function cbDraw(){
  const ctx=cbCtx;ctx.clearRect(0,0,CW,CH);
  // BG
  const g=ctx.createLinearGradient(0,0,0,CH);
  g.addColorStop(0,'#060c1a');g.addColorStop(1,'#0d1528');
  ctx.fillStyle=g;ctx.fillRect(0,0,CW,CH);
  // Grid
  ctx.strokeStyle='rgba(41,121,255,.045)';ctx.lineWidth=1;
  for(let x=0;x<CW;x+=24){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,CH);ctx.stroke()}
  for(let y=0;y<CH;y+=24){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(CW,y);ctx.stroke()}
  // Particles
  cbPtcls.forEach(p=>{
    ctx.save();ctx.globalAlpha=p.life/28;ctx.fillStyle=p.col;
    ctx.translate(p.x,p.y);ctx.rotate(p.r*Math.PI/180);
    ctx.fillRect(-p.sz/2,-p.sz/2,p.sz,p.sz);ctx.restore();
  });
  // Items
  ctx.textBaseline='top';
  cbItems.forEach(it=>{
    if(!it.alive)return;
    ctx.save();ctx.font=`${it.w+2}px serif`;
    ctx.shadowColor=it.col;ctx.shadowBlur=14;
    ctx.fillText(it.e,it.x,it.y);ctx.restore();
  });
  // Player (pixel Minecraft guy)
  cbDrawPly(ctx,cbPly.x,cbPly.y,cbPly.w,cbPly.h);
  // Ground
  ctx.strokeStyle='rgba(41,121,255,.25)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(0,CH-3);ctx.lineTo(CW,CH-3);ctx.stroke();
  // Game over overlay
  if(cbOver){
    ctx.fillStyle='rgba(6,12,26,.85)';ctx.fillRect(0,0,CW,CH);
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.shadowColor='#2979ff';ctx.shadowBlur=24;
    ctx.fillStyle='#82b1ff';ctx.font='bold 26px Courier New';
    ctx.fillText('GAME OVER 💔',CW/2,CH/2-28);
    ctx.font='15px Courier New';ctx.fillStyle='#c4b5fd';ctx.shadowBlur=12;
    ctx.fillText(`Score: ${cbSc}  •  Hearts: ${cbHt}`,CW/2,CH/2+10);
    ctx.font='11px Courier New';ctx.fillStyle='#546e7a';ctx.shadowBlur=0;
    ctx.fillText('Use Restart to try again',CW/2,CH/2+36);
    ctx.textAlign='left';
  }
}

function cbDrawPly(ctx,x,y,w,h){
  const u=Math.floor(w/4);
  ctx.shadowColor='#2979ff';ctx.shadowBlur=10;
  // Body
  ctx.fillStyle='#2979ff';ctx.fillRect(x+u,y+u*2,w-u*2,h-u*2);
  // Head
  ctx.fillStyle='#f5cba7';ctx.shadowBlur=4;ctx.fillRect(x+u,y,w-u*2,u*2);
  // Hair
  ctx.fillStyle='#1a3a6b';ctx.fillRect(x+u,y,w-u*2,u*.65);
  // Eyes
  ctx.fillStyle='#0d47a1';
  ctx.fillRect(x+u*1.3,y+u*.75,u*.55,u*.5);
  ctx.fillRect(x+u*2.2,y+u*.75,u*.55,u*.5);
  // Pants
  ctx.fillStyle='#1e3a5f';ctx.shadowBlur=0;
  ctx.fillRect(x+u,y+h-u,u*.85,u);ctx.fillRect(x+w-u*1.85,y+h-u,u*.85,u);
  ctx.shadowBlur=0;
}

function cbUpdUI(){
  $('cb-sc').textContent=cbSc;$('cb-ht').textContent=cbHt;$('cb-lv').textContent=cbLv;
  $('cb-bl').textContent=cbBl;$('cb-vi').textContent=cbVi;$('cb-pk').textContent=cbPk;
}
function cbLivesUI(){
  const el=$('cb-lives');el.innerHTML='';
  for(let i=0;i<3;i++){const h=document.createElement('div');h.className='life';h.textContent=i<cbLives?'❤️':'🖤';el.appendChild(h)}
}
function cbEndGame(){
  cbOver=true;cbRunning=false;
  $('cb-rbtn').style.display='inline-flex';
  if(cbHt>=8)setTimeout(()=>showWin('b',cbHt),1400);
}

// ╔══════════════════════════════════════════════════════╗
// ║  GAME C — MEMORY MATCH (FIXED 3D FLIP)             ║
// ╚══════════════════════════════════════════════════════╝

// All symbol pairs — EE + Valentine themed
const CM_SYMS=[
  '⚡','🔌','💡','🔋','📻','⚙️','🔧','🧲',
  '❤️','💙','💜','💗','💘','💕','🌹','✨',
  '⛏️','🏀','🏋️','🎮'
];

let cmCards=[],cmFlipped=[],cmMatched=0,cmMoves=0,cmTotal=0;
let cmTimerID=null,cmSecs=0,cmDiff='easy',cmLocked=false;

function setDiff(d){
  cmDiff=d;
  document.querySelectorAll('.dbtn').forEach(b=>b.classList.remove('on'));
  $('d-'+d).classList.add('on');
  cmInit();
}

function cmInit(){
  if(cmTimerID)clearInterval(cmTimerID);
  cmFlipped=[];cmMatched=0;cmMoves=0;cmSecs=0;cmLocked=false;
  const pairs=cmDiff==='hard'?10:8;
  cmTotal=pairs;
  const pool=[...CM_SYMS].sort(()=>rnd(-1,1)).slice(0,pairs);
  const deck=[...pool,...pool].sort(()=>rnd(-1,1));
  // Build card objects
  cmCards=deck.map((sym,i)=>({id:i,sym,state:'hidden'})); // state: hidden | flipped | matched
  cmRender();
  $('cm-mv').textContent=0;
  $('cm-pr').textContent=0;
  $('cm-tt').textContent=pairs;
  $('cm-tm').textContent='0s';
  $('cm-fb').textContent='';
  // Set up grid columns for hard mode
  $('cm-grid').style.gridTemplateColumns=cmDiff==='hard'?'repeat(5,1fr)':'repeat(4,1fr)';
  // Peek: show all briefly, then hide
  setTimeout(()=>{
    cmCards.forEach(c=>{
      if(c.state!=='matched'){
        c.state='hidden';
        const el=$('cm-'+c.id);
        if(el)el.classList.remove('flipped');
      }
    });
    // Start timer after peek
    cmTimerID=setInterval(()=>{
      cmSecs++;$('cm-tm').textContent=cmSecs+'s';
    },1000);
  },1200);
}

function cmRender(){
  const grid=$('cm-grid');grid.innerHTML='';
  cmCards.forEach(card=>{
    // Outer wrapper (the scene)
    const outer=document.createElement('div');
    outer.className='mcard';outer.id='cm-'+card.id;
    outer.onclick=()=>cmFlip(card.id);
    // Inner (flips)
    const inner=document.createElement('div');
    inner.className='mcard-inner';
    // Front face (face-down pattern)
    const front=document.createElement('div');
    front.className='mcard-front';
    const ico=document.createElement('div');
    ico.className='mcard-front-ico';ico.textContent='⚡';
    front.appendChild(ico);
    // Back face (emoji symbol)
    const back=document.createElement('div');
    back.className='mcard-back';
    back.textContent=card.sym;
    inner.append(front,back);
    outer.appendChild(inner);
    // Start with all cards shown (peek phase)
    outer.classList.add('flipped');
    grid.appendChild(outer);
  });
}

function cmFlip(id){
  if(cmLocked)return;
  const card=cmCards[id];
  if(!card||card.state!=='hidden')return;
  if(cmFlipped.length>=2)return;
  // Flip this card
  card.state='flipped';
  const el=$('cm-'+id);
  el.classList.add('flipped');
  cmFlipped.push(id);
  beep(660,.05);
  if(cmFlipped.length===2){
    cmMoves++;$('cm-mv').textContent=cmMoves;
    cmLocked=true;
    setTimeout(cmCheck,650);
  }
}

function cmCheck(){
  const [a,b]=cmFlipped;
  const ca=cmCards[a],cb=cmCards[b];
  if(ca.sym===cb.sym){
    // Match!
    ca.state='matched';cb.state='matched';
    const ea=$('cm-'+a),eb=$('cm-'+b);
    ea.classList.add('matched');eb.classList.add('matched');
    cmMatched++;
    $('cm-pr').textContent=cmMatched;
    $('cm-fb').innerHTML=`✅ ${ca.sym} Match! &nbsp;${cmMatched}/${cmTotal} pairs`;
    beep(880,.08,.18);
    // small burst at card position
    const r=ea.getBoundingClientRect();
    burst(r.left+r.width/2,r.top+r.height/2,12);
    if(cmMatched===cmTotal){
      clearInterval(cmTimerID);
      setTimeout(()=>showWin('c',`${cmMatched}/${cmTotal}`),600);
    }
  } else {
    // No match — flip back
    const ea=$('cm-'+a),eb=$('cm-'+b);
    ea.classList.add('wrong');eb.classList.add('wrong');
    $('cm-fb').innerHTML='❌ No match — try again!';
    beep(200,.05,.18);
    setTimeout(()=>{
      ea.classList.remove('flipped','wrong');
      eb.classList.remove('flipped','wrong');
      ca.state='hidden';cb.state='hidden';
      $('cm-fb').textContent='';
    },850);
  }
  cmFlipped=[];
  // Unlock after a moment so rapid clicks don't break state
  setTimeout(()=>{cmLocked=false},900);
}

// ══════════════════════════════════════
// PIXEL CHARACTERS INITIALIZATION
// ══════════════════════════════════════

function initPixelChars() {
  const charsContainer = document.getElementById('pixel-chars');
  
  // Princess Bubblegum
  const princess = createCharacter('princess', [
    { cls: 'crown' },
    { cls: 'head' },
    { cls: 'body' },
    { cls: 'leg leg-left' },
    { cls: 'leg leg-right' }
  ]);
  charsContainer.appendChild(princess);
  
  // Dinosaur
  const dino = createCharacter('dino', [
    { cls: 'tail' },
    { cls: 'body' },
    { cls: 'spikes' },
    { cls: 'head' },
    { cls: 'eye' },
    { cls: 'leg leg-left' },
    { cls: 'leg leg-right' }
  ]);
  charsContainer.appendChild(dino);
  
  // Black Cat with White Parts
  const blackCat = createCharacter('cat-black', [
    { cls: 'tail' },
    { cls: 'body' },
    { cls: 'white-patch' },
    { cls: 'head' },
    { cls: 'ear ear-left' },
    { cls: 'ear ear-right' },
    { cls: 'leg leg-left' },
    { cls: 'leg leg-right' },
    { cls: 'white-paw white-paw-1' },
    { cls: 'white-paw white-paw-2' }
  ]);
  charsContainer.appendChild(blackCat);
  
  // Orange Cat
  const orangeCat = createCharacter('cat-orange', [
    { cls: 'tail' },
    { cls: 'body' },
    { cls: 'stripe' },
    { cls: 'head' },
    { cls: 'ear ear-left' },
    { cls: 'ear ear-right' },
    { cls: 'leg leg-left' },
    { cls: 'leg leg-right' }
  ]);
  charsContainer.appendChild(orangeCat);
  
  // White Cat
  const whiteCat = createCharacter('cat-white', [
    { cls: 'tail' },
    { cls: 'body' },
    { cls: 'head' },
    { cls: 'ear ear-left' },
    { cls: 'ear ear-right' },
    { cls: 'ear-pink ear-pink-left' },
    { cls: 'ear-pink ear-pink-right' },
    { cls: 'leg leg-left' },
    { cls: 'leg leg-right' }
  ]);
  charsContainer.appendChild(whiteCat);
  
  // Add house details
  addHouseDetails();
}

function createCharacter(type, parts) {
  const char = document.createElement('div');
  char.className = `pixel-char char-${type}`;
  
  parts.forEach(part => {
    const el = document.createElement('div');
    el.className = part.cls;
    char.appendChild(el);
  });
  
  return char;
}

function addHouseDetails() {
  const house = document.getElementById('pixel-house');
  
  // Window 1
  const win1 = document.createElement('div');
  win1.className = 'house-window';
  win1.style.bottom = '25px';
  win1.style.left = '15px';
  house.appendChild(win1);
  
  // Window 2
  const win2 = document.createElement('div');
  win2.className = 'house-window';
  win2.style.bottom = '25px';
  win2.style.right = '15px';
  house.appendChild(win2);
  
  // Door
  const door = document.createElement('div');
  door.className = 'house-door';
  house.appendChild(door);
  
  // Door knob
  const knob = document.createElement('div');
  knob.style.cssText = 'position:absolute;bottom:12px;right:3px;width:2px;height:2px;background:#ffd700;border-radius:50%';
  door.appendChild(knob);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initPixelChars);