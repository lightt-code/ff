const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
let s={bet:.5,win:.5,lvl:0,active:false};
const $=x=>document.getElementById(x);
function draw(){$('win').textContent=s.win.toFixed(3);$('lvl').textContent=s.lvl+' / 20'}
$('up').onclick=()=>{
if(!s.active){s.bet=+$('bet').value;s.win=s.bet;s.active=true}
if(s.lvl>=20)return;
document.querySelector('.scene').classList.add('move');setTimeout(()=>document.querySelector('.scene').classList.remove('move'),400);
let ok=Math.random()<Math.max(.035,.78-s.lvl*.037);
if(ok){s.lvl++;s.win*=1.07;$('msg').textContent='Камень поднят'}
else{s.active=false;s.lvl=0;s.win=0;$('msg').textContent='Падение. Начни заново'}
draw()};
$('take').onclick=()=>{if(s.active){$('msg').textContent='Забрано '+s.win.toFixed(3)+' GRAM';s.active=false;s.lvl=0;s.win=s.bet;draw()}};
draw();