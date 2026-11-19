/* Animated cracker art (no images). Shared by index.html and admin.html.
   fxArt(name, category, colour) picks an animation from the product name (then category). */
(function () {
  var COL = { accent: '#FF7A2F', gold: '#FFC857', rose: '#FF4D6D', teal: '#3DDBC0', sky: '#5AB0FF' };

  var css = [
    '.fx{position:relative;width:100%;height:100%;overflow:hidden}',
    '.fx i{position:absolute;display:block}',
    '.fx.off *{animation-play-state:paused !important}',
    '.pimg{width:100%;height:100%;object-fit:cover;display:block}',

    /* radial sparks (sparkler, chakkar, rocket) */
    '.fx .sp{left:var(--ox,50%);top:var(--oy,44%);width:16px;height:2px;margin-top:-1px;transform-origin:0 50%;border-radius:2px;background:linear-gradient(90deg,transparent,var(--c));animation:fxspark 1.1s ease-out infinite var(--d,0s);opacity:0}',
    '@keyframes fxspark{0%{transform:rotate(var(--a)) translateX(2px) scaleX(.3);opacity:0}15%{opacity:1}100%{transform:rotate(var(--a)) translateX(var(--r,52px)) scaleX(1);opacity:0}}',
    '@keyframes fxspin{to{transform:rotate(360deg)}}',
    '@keyframes fxfade{50%{opacity:.45}}',

    /* sparkler */
    '.fx-sparkler .stick{left:50%;top:44%;width:2px;height:62%;background:linear-gradient(#d7dbe8,#5d6479);transform-origin:top center;transform:rotate(-16deg)}',
    '.fx-sparkler .core{left:50%;top:44%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 12px 6px var(--c),0 0 30px 12px var(--c);animation:fxflick .2s steps(2) infinite}',
    '@keyframes fxflick{50%{transform:scale(.7);opacity:.85}}',

    /* flower pot fountain */
    /* original bulb-shaped clay urn: flared rim, narrow neck, round belly with a gold lotus band in the item colour, small foot */
    '.fx-flowerpot .fpg{left:50%;bottom:3px;width:100px;height:20px;margin-left:-50px;border-radius:50%;background:radial-gradient(ellipse,var(--c),transparent 68%);opacity:.5;animation:fxfade 1.2s ease-in-out infinite}',
    '.fx-flowerpot .fpc{left:50%;bottom:60px;width:18px;height:96px;margin-left:-9px;border-radius:50% 50% 0 0;background:linear-gradient(to top,var(--c),transparent);filter:blur(5px);transform-origin:50% 100%;animation:fxcol .3s ease-in-out infinite alternate}',
    '@keyframes fxcol{0%{transform:scaleY(.78);opacity:.35}100%{transform:scaleY(1.08);opacity:.7}}',
    '.fx-flowerpot .fpf{left:50%;bottom:8px;width:24px;height:7px;margin-left:-12px;border-radius:2px 2px 5px 5px;background:linear-gradient(90deg,#2c120a,#9a4a26 40%,#2c120a);box-shadow:inset 0 1.5px 0 #FFC857}',
    '.fx-flowerpot .fpb{left:50%;bottom:13px;width:48px;height:35px;margin-left:-24px;border-radius:50% 50% 46% 46%/42% 42% 58% 58%;overflow:hidden;background:radial-gradient(ellipse at 33% 28%,rgba(255,255,255,.4),transparent 46%),linear-gradient(90deg,rgba(0,0,0,.55),transparent 38%,rgba(0,0,0,.6)),linear-gradient(#d2643a,#7f2a14)}',
    '.fx-flowerpot .fpb::before{content:"";position:absolute;left:0;right:0;top:34%;height:8px;background:repeating-linear-gradient(90deg,#FFC857 0 2px,transparent 2px 6px),linear-gradient(rgba(0,0,0,.25),transparent 50%,rgba(0,0,0,.3)),var(--c);box-shadow:0 -1.5px 0 #FFC857,0 1.5px 0 #FFC857}',
    '.fx-flowerpot .fpb::after{content:"";position:absolute;left:0;right:0;top:62%;height:10px;background:radial-gradient(circle at 50% 0,#FFC857 0 3.6px,transparent 4.1px) 1px 0/9px 10px repeat-x}',
    '.fx-flowerpot .fpn{left:50%;bottom:44px;width:24px;height:10px;margin-left:-12px;background:linear-gradient(90deg,rgba(0,0,0,.55),transparent 40%,rgba(0,0,0,.6)),linear-gradient(#b8502c,#7a2812);clip-path:polygon(10% 0,90% 0,100% 100%,0 100%)}',
    '.fx-flowerpot .fpr{left:50%;bottom:52px;width:36px;height:8px;margin-left:-18px;border-radius:4px;background:linear-gradient(90deg,#2a1208,#d06a34 35%,#2a1208);box-shadow:inset 0 1.5px 0 #FFC857}',
    '.fx-flowerpot .mouth{left:50%;bottom:55px;width:26px;height:9px;margin-left:-13px;border-radius:50%;background:#fff;box-shadow:0 0 14px 6px var(--c);animation:fxflick .25s steps(2) infinite}',
    '.fx-flowerpot .pt{left:50%;bottom:62px;width:var(--s,4px);height:var(--s,4px);margin-left:calc(var(--s,4px)/-2);border-radius:50%;box-shadow:0 0 6px var(--c);opacity:0;animation:fxfount 1.5s ease-out infinite var(--d,0s)}',
    '@keyframes fxfount{0%{transform:translate(0,0);opacity:1}50%{transform:translate(calc(var(--x)*.55),calc(var(--y)*-1));opacity:1}100%{transform:translate(var(--x),calc(var(--y)*.2));opacity:0}}',

    /* chakkar (ground spinner) */
    '.fx-chakkar .whl{left:50%;top:50%;width:100px;height:100px;margin:-50px 0 0 -50px;border-radius:50%;background:repeating-conic-gradient(var(--c) 0 8deg,transparent 8deg 45deg);-webkit-mask:radial-gradient(circle,transparent 0 16%,#000 17% 68%,transparent 70%);mask:radial-gradient(circle,transparent 0 16%,#000 17% 68%,transparent 70%);filter:drop-shadow(0 0 5px var(--c));animation:fxspin .8s linear infinite}',
    '.fx-chakkar .whl.b{width:62px;height:62px;margin:-31px 0 0 -31px;background:repeating-conic-gradient(var(--c2,var(--c)) 0 8deg,transparent 8deg 60deg);animation-direction:reverse;animation-duration:1.1s}',
    '.fx-chakkar .hub{left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 12px 5px var(--c)}',

    /* rocket: rises, then bursts */
    '.fx-rocket{--oy:30%}',
    '/* (old plain streak replaced by the rocket drawn below) */',
    '@keyframes fxrk{0%{transform:translateY(40px);opacity:1}38%{transform:translateY(-54px);opacity:1}40%,100%{transform:translateY(-54px);opacity:0}}',
    '.fx-rocket .sp{animation:fxrkb 3s ease-out infinite}',
    '@keyframes fxrkb{0%,39%{transform:rotate(var(--a)) translateX(2px) scaleX(.3);opacity:0}41%{opacity:1}100%{transform:rotate(var(--a)) translateX(var(--r,50px)) scaleX(1);opacity:0}}',

    /* aerial / double shot: shells rise and bloom */
    '.fx .u{position:absolute;left:var(--x);top:var(--y);width:var(--z,100px);height:var(--z,100px);transform:translate(-50%,-50%)}',
    '.fx .u .tr{left:50%;top:50%;width:3px;height:22px;margin-left:-1.5px;border-radius:2px;background:linear-gradient(transparent,#fff 70%,var(--c));opacity:0;animation:fxriseu 2.6s ease-in infinite var(--t,0s)}',
    '@keyframes fxriseu{0%{transform:translateY(100px);opacity:1}34%{transform:translateY(0);opacity:1}35%,100%{transform:translateY(0);opacity:0}}',
    '.fx .u .bl{inset:0;border-radius:50%;background:repeating-conic-gradient(var(--c) 0 3deg,transparent 3deg 15deg);-webkit-mask:radial-gradient(circle,transparent 0 20%,#000 21% 62%,transparent 64%);mask:radial-gradient(circle,transparent 0 20%,#000 21% 62%,transparent 64%);opacity:0;animation:fxpop 2.6s ease-out infinite var(--t,0s)}',
    '@keyframes fxpop{0%,34%{opacity:0;transform:scale(.2)}37%{opacity:1;transform:scale(.4)}100%{opacity:0;transform:scale(1.15)}}',

    /* bang (bombs, garlands) */
    '.fx-bang .gl{left:50%;top:50%;width:90px;height:90px;margin:-45px 0 0 -45px;border-radius:50%;background:radial-gradient(circle,var(--c),transparent 68%);animation:fxglow 1.2s ease-out infinite}',
    '@keyframes fxglow{0%{transform:scale(.2);opacity:1}100%{transform:scale(1.5);opacity:0}}',
    '.fx-bang .fl{left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;background:#fff;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);animation:fxflash 1.2s ease-out infinite}',
    '@keyframes fxflash{0%{transform:scale(.2) rotate(0);opacity:1}40%{transform:scale(1.4) rotate(20deg);opacity:1}100%{transform:scale(1.8) rotate(30deg);opacity:0}}',
    '.fx-bang .rg{left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border:3px solid var(--c);border-radius:50%;opacity:0;animation:fxring 1.2s ease-out infinite var(--d,0s)}',
    '@keyframes fxring{0%{transform:scale(.3);opacity:1}100%{transform:scale(3.2);opacity:0}}',

    /* shower / waterfall: sparks pour down */
    '.fx-shower .src{left:50%;top:10%;width:34px;height:8px;margin-left:-17px;border-radius:50%;background:#fff;box-shadow:0 0 14px 6px var(--c);animation:fxflick .25s steps(2) infinite}',
    '.fx-shower .dr{left:50%;top:12%;width:4px;height:4px;margin-left:-2px;border-radius:50%;box-shadow:0 0 6px var(--c);opacity:0;animation:fxdrop 1.4s ease-in infinite var(--d,0s)}',
    '@keyframes fxdrop{0%{transform:translate(0,0);opacity:0}10%{opacity:1}100%{transform:translate(var(--x),var(--y));opacity:0}}',

    '/* repeating shots: many small shells popping one after another */',
    '.fx-repeat .u .tr{animation-duration:1.8s}',
    '.fx-repeat .u .bl{animation-duration:1.8s}',
    '',
    '/* digital lar / garland: a string of pops rolling along */',
    '.fx-lar .ln{left:5%;right:5%;top:58%;height:2px;margin-top:-1px;background:linear-gradient(90deg,transparent,#6b7392,transparent)}',
    '.fx-lar .lg{left:var(--x);top:var(--y);width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;background:radial-gradient(circle,#fff 0 14%,var(--c) 30%,transparent 70%);opacity:0;animation:fxlar 1.9s ease-out infinite var(--d,0s)}',
    '.fx-lar .lf{left:var(--x);top:var(--y);width:20px;height:20px;margin:-10px 0 0 -10px;background:#fff;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);opacity:0;animation:fxlar 1.9s ease-out infinite var(--d,0s)}',
    '@keyframes fxlar{0%{transform:scale(.2);opacity:0}5%{opacity:1}12%{transform:scale(1.5);opacity:1}28%,100%{transform:scale(.6);opacity:0}}',
    '',
    '/* peacock: feathers fan open */',
    '.fx-peacock .fe{left:50%;bottom:16%;width:9px;height:60%;margin-left:-4.5px;border-radius:50% 50% 0 0/22% 22% 0 0;transform-origin:50% 100%;background:linear-gradient(to top,transparent,var(--c) 45%);opacity:0;animation:fxfan 3.2s ease-out infinite var(--d,0s)}',
    '.fx-peacock .fe::after{content:"";position:absolute;left:50%;top:-4px;width:18px;height:24px;margin-left:-9px;border-radius:50%;background:radial-gradient(ellipse,#fff 0 12%,var(--e,var(--c)) 16% 42%,var(--c) 46% 72%,transparent 76%)}',
    '@keyframes fxfan{0%{transform:rotate(0) scaleY(0);opacity:0}25%{opacity:1}50%,78%{transform:rotate(var(--a)) scaleY(1);opacity:1}100%{transform:rotate(var(--a)) scaleY(1);opacity:0}}',
    '.fx-peacock .pbody{left:50%;bottom:7%;width:20px;height:28px;margin-left:-10px;border-radius:50% 50% 45% 45%;background:linear-gradient(#3DDBC0,#1b6f63)}',
    '',
    '/* pencil / candle / torch / twinkling star: burning with sparkle */',
    '.fx-candle{--oy:34%}',
    '.fx-candle .cd{left:50%;bottom:9%;width:12px;height:46%;margin-left:-6px;border-radius:3px;background:linear-gradient(90deg,#d7dbe8,var(--c) 50%,#5d6479)}',
    '.fx-candle .fl2{left:50%;bottom:55%;width:16px;height:28px;margin-left:-8px;border-radius:50% 50% 50% 50%/62% 62% 38% 38%;background:radial-gradient(ellipse at 50% 70%,#fff 0 18%,var(--c2,var(--c)) 40%,var(--c) 75%,transparent 100%);box-shadow:0 0 16px 6px var(--c);transform-origin:50% 100%;animation:fxflame .35s ease-in-out infinite alternate}',
    '@keyframes fxflame{0%{transform:scale(1,1) rotate(-3deg)}100%{transform:scale(.86,1.14) rotate(3deg)}}',
    '.fx-candle .tw{left:var(--x);top:var(--y);width:var(--z,12px);height:var(--z,12px);margin:-6px 0 0 -6px;background:var(--k,#fff);clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);opacity:0;animation:fxtw 1.5s ease-in-out infinite var(--d,0s)}',
    '@keyframes fxtw{0%,100%{transform:scale(0) rotate(0);opacity:0}50%{transform:scale(1) rotate(45deg);opacity:1}}',
    '',
    '/* big pipe aerial: shoots up, huge bloom, glitter falls */',
    '.fx-pipe .pipe{left:50%;bottom:6%;width:26px;height:30px;margin-left:-13px;border-radius:4px 4px 2px 2px;background:linear-gradient(90deg,#3a4059,#6b7392 45%,#2a3047);border-top:4px solid var(--c)}',
    '.fx-pipe .pmo{left:50%;bottom:calc(6% + 28px);width:26px;height:12px;margin-left:-13px;border-radius:50%;background:#fff;box-shadow:0 0 16px 8px var(--c);opacity:0;animation:fxpflash 3.4s ease-out infinite}',
    '@keyframes fxpflash{0%{opacity:1;transform:scale(1.2)}8%,100%{opacity:0;transform:scale(.4)}}',
    '.fx-pipe .pt1{left:50%;width:3px;height:24px;margin-left:-1.5px;border-radius:2px;background:linear-gradient(transparent,#fff 70%,var(--c));opacity:0;animation:fxprise 3.4s ease-out infinite}',
    '@keyframes fxprise{0%{bottom:22%;opacity:1}30%{bottom:60%;opacity:1}32%,100%{bottom:60%;opacity:0}}',
    '.fx-pipe .pb1,.fx-pipe .pb2{left:50%;top:38%;border-radius:50%;opacity:0;-webkit-mask:radial-gradient(circle,transparent 0 20%,#000 21% 62%,transparent 64%);mask:radial-gradient(circle,transparent 0 20%,#000 21% 62%,transparent 64%);animation:fxpbloom 3.4s ease-out infinite}',
    '.fx-pipe .pb1{width:150px;height:150px;margin:-75px 0 0 -75px;background:repeating-conic-gradient(var(--c) 0 2.4deg,transparent 2.4deg 10deg)}',
    '.fx-pipe .pb2{width:92px;height:92px;margin:-46px 0 0 -46px;background:repeating-conic-gradient(var(--c2,var(--c)) 0 3deg,transparent 3deg 15deg);animation-delay:.12s}',
    '@keyframes fxpbloom{0%,31%{opacity:0;transform:scale(.15)}34%{opacity:1;transform:scale(.45)}75%{opacity:.7}100%{opacity:0;transform:scale(1.15)}}',
    '.fx-pipe .gt{left:50%;top:38%;width:3px;height:3px;border-radius:50%;opacity:0;animation:fxglit 3.4s ease-in infinite var(--d,0s)}',
    '@keyframes fxglit{0%,33%{transform:translate(0,0);opacity:0}36%{opacity:1;transform:translate(calc(var(--x)*.5),calc(var(--y)*-.1))}100%{transform:translate(var(--x),var(--y));opacity:0}}',
    '',
    '/* coloured smoke */',
    '.fx-smoke .cone{left:50%;bottom:6%;width:44px;height:34px;margin-left:-22px;background:linear-gradient(#c43d3d,#7c1f1f);clip-path:polygon(15% 0,85% 0,100% 100%,0 100%)}',
    '.fx-smoke .sm{left:50%;bottom:22%;width:44px;height:44px;margin-left:-22px;border-radius:50%;filter:blur(7px);opacity:0;animation:fxsmoke 3s ease-out infinite var(--d,0s)}',
    '@keyframes fxsmoke{0%{transform:translate(0,0) scale(.4);opacity:0}15%{opacity:.85}100%{transform:translate(var(--x),-110px) scale(2.3);opacity:0}}',
    '',
    '/* toys / novelties: bobbing body with a spinning propeller and sparks */',
    '.fx-toy{--oy:50%}',
    '.fx .tg{position:absolute;left:50%;top:50%;width:0;height:0;animation:fxbob 1.4s ease-in-out infinite}',
    '@keyframes fxbob{50%{transform:translateY(-14px)}}',
    '.fx-toy .tb{left:-16px;top:-16px;width:32px;height:32px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--c) 45%,#000 290%);box-shadow:0 0 14px 2px var(--c)}',
    '.fx-toy .tp{left:-36px;top:-24px;width:72px;height:4px;border-radius:3px;background:#fff;animation:fxprop .3s linear infinite}',
    '@keyframes fxprop{50%{transform:scaleX(.1)}}',
    '',
    '/* gift box: a box with bursts coming out of it */',
    '.fx-gift .gb{left:50%;bottom:7%;width:62px;height:36px;margin-left:-31px;border-radius:4px;background:var(--c)}',
    '.fx-gift .gb::before{content:"";position:absolute;left:50%;top:0;bottom:0;width:8px;margin-left:-4px;background:#FFC857}',
    '.fx-gift .gb::after{content:"";position:absolute;left:0;right:0;top:36%;height:8px;background:#FFC857}',

    '/* money: notes and coins fly up and flutter down */',
    '.fx-money .nt{left:50%;bottom:16%;width:28px;height:15px;margin-left:-14px;border-radius:2px;border:1px solid #bfe8c9;background:linear-gradient(135deg,#3f9b5a,#2b7a44);opacity:0;animation:fxnote 2.6s ease-out infinite var(--d,0s)}',
    '.fx-money .nt::after{content:"";position:absolute;left:50%;top:50%;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:#bfe8c9}',
    '.fx-money .cn{left:50%;bottom:16%;width:11px;height:11px;margin-left:-5.5px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--c2,var(--c)) 45%,#000 300%);box-shadow:0 0 8px var(--c);opacity:0;animation:fxnote 2.6s ease-out infinite var(--d,0s)}',
    '@keyframes fxnote{0%{transform:translate(0,0) rotate(0);opacity:0}8%{opacity:1}40%{transform:translate(calc(var(--x)*.6),-92px) rotate(calc(var(--r)*.5))}100%{transform:translate(var(--x),34px) rotate(var(--r));opacity:0}}',
    '.fx-money .mg{left:50%;bottom:8%;width:70px;height:26px;margin-left:-35px;border-radius:50%;background:radial-gradient(ellipse,var(--c),transparent 70%);opacity:.55;animation:fxfade 1.6s ease-in-out infinite}',
    '',
    '/* siren: spinning whistle with sound rings */',
    '.fx-siren .sb{left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:5px dotted var(--c);animation:fxspin .5s linear infinite;filter:drop-shadow(0 0 6px var(--c))}',
    '.fx-siren .sw{left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border:3px solid var(--c);border-radius:50%;opacity:0;animation:fxring 1.4s ease-out infinite var(--d,0s)}',
    '.fx-siren .hb{left:50%;top:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#fff;box-shadow:0 0 12px 5px var(--c)}',
    '',
    '/* multi (2 in 1 / 6 in 1): jets take turns, then a big bloom */',
    '.fx-multi .mp{left:var(--bx);bottom:7%;width:30px;height:22px;margin-left:-15px;background:linear-gradient(#9a5430,#5a2f18);clip-path:polygon(10% 0,90% 0,100% 100%,0 100%)}',
    '.fx-multi .mj{left:var(--bx);bottom:calc(7% + 22px);width:4px;height:4px;margin-left:-2px;border-radius:50%;box-shadow:0 0 6px var(--c);opacity:0;animation:fxjet 3s ease-out infinite calc(var(--o) + var(--d))}',
    '@keyframes fxjet{0%{transform:translate(0,0);opacity:0}2%{opacity:1}12%{transform:translate(calc(var(--x)*.55),calc(var(--y)*-1));opacity:1}30%{transform:translate(var(--x),calc(var(--y)*.2));opacity:0}100%{transform:translate(var(--x),calc(var(--y)*.2));opacity:0}}',
    '.fx-multi .mb{left:50%;top:34%;width:130px;height:130px;margin:-65px 0 0 -65px;border-radius:50%;background:repeating-conic-gradient(var(--c) 0 2.4deg,transparent 2.4deg 11deg);-webkit-mask:radial-gradient(circle,transparent 0 22%,#000 23% 62%,transparent 64%);mask:radial-gradient(circle,transparent 0 22%,#000 23% 62%,transparent 64%);opacity:0;animation:fxmb 3s ease-out infinite}',
    '@keyframes fxmb{0%,64%{opacity:0;transform:scale(.2)}68%{opacity:1;transform:scale(.45)}100%{opacity:0;transform:scale(1.1)}}',
    '',
    '/* ball (dragon ball, bat & ball): glowing ball that bounces */',
    '.fx .bw{position:absolute;left:50%;bottom:15%;width:0;height:0;animation:fxbounce 1.2s infinite}',
    '@keyframes fxbounce{0%{transform:translateY(0);animation-timing-function:cubic-bezier(.2,.7,.4,1)}50%{transform:translateY(-72px);animation-timing-function:cubic-bezier(.6,0,.8,.3)}100%{transform:translateY(0)}}',
    '.fx-ball .ob{left:-16px;top:-32px;width:32px;height:32px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--c) 45%,#000 300%);box-shadow:0 0 18px 6px var(--c)}',
    '.fx-ball .ob::after{content:"";position:absolute;left:50%;top:50%;width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--c2,var(--c));clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}',
    '.fx-ball .sh{left:50%;bottom:12%;width:34px;height:8px;margin-left:-17px;border-radius:50%;background:#000;opacity:.5;animation:fxshadow 1.2s ease-in-out infinite}',
    '@keyframes fxshadow{0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(.45);opacity:.2}}',
    '.fx-ball .ip{left:50%;bottom:11%;width:40px;height:10px;margin-left:-20px;border:2px solid var(--c);border-radius:50%;opacity:0;animation:fxip 1.2s ease-out infinite}',
    '@keyframes fxip{0%{transform:scale(.3);opacity:1}45%,100%{transform:scale(1.9);opacity:0}}',

    '/* photo + animation: clear photo, a glowing "See it burst" badge, tap for the full animation */',
    '.mix{position:relative;width:100%;height:100%;overflow:hidden}',
    '.mix-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
    '.mix::after{content:"";position:absolute;left:0;right:0;bottom:0;height:42%;background:linear-gradient(transparent,rgba(8,10,18,.7));pointer-events:none}',
    '.mix-badge{position:absolute;right:8px;bottom:8px;z-index:2;display:flex;align-items:center;gap:8px;min-height:44px;padding:3px 13px 3px 3px;border-radius:999px;border:1.5px solid var(--c,#FF7A2F);background:rgba(10,12,20,.8);color:#F3EFE6;font:600 12px/1 system-ui,-apple-system,"Segoe UI",sans-serif;cursor:pointer;box-shadow:0 0 14px -2px var(--c,#FF7A2F)}',
    '.mix-badge:hover{background:rgba(10,12,20,.92)}',
    '.mb-ring{position:relative;flex:none;width:46px;height:46px;border-radius:50%;overflow:hidden;background:#0D1120}',
    '.mb-fx{position:absolute;left:0;top:0;width:170px;height:170px;transform:scale(.27);transform-origin:0 0;pointer-events:none}',
    '.mix-full{position:absolute;inset:0;z-index:3;background:rgba(8,10,18,.88);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility .25s ease;cursor:pointer}',
    '.mix.play .mix-full{opacity:1;visibility:visible}',
    '.mix.play .mix-badge{opacity:0;pointer-events:none}',
    '.mf-fx{position:absolute;inset:0}',
    '.mf-tag{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);padding:4px 11px;border-radius:999px;background:rgba(10,12,20,.75);color:#A7ABBD;font:600 11px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap}',

    '/* ===== more effects ===== */',
    '/* shells (peony, willow, palm, heart): rising trail, centre flash, stars that fly out and fall */',
    '@keyframes fxrise2{0%{bottom:6%;opacity:1}30%{bottom:47%;opacity:1}32%,100%{bottom:47%;opacity:0}}',
    '.fx .rs{left:50%;width:3px;height:24px;margin-left:-1.5px;border-radius:2px;background:linear-gradient(transparent,#fff 70%,var(--c));opacity:0;animation:fxrise2 3.4s ease-out infinite}',
    '.fx .cf{left:50%;top:38%;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:radial-gradient(circle,#fff 0 12%,var(--c) 32%,transparent 68%);opacity:0;animation:fxcflash 3.4s ease-out infinite}',
    '@keyframes fxcflash{0%,31%{transform:scale(.2);opacity:0}34%{transform:scale(.9);opacity:1}52%,100%{transform:scale(1.5);opacity:0}}',
    '.fx .st{left:50%;top:38%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:50%;opacity:0;animation:fxstar 3.4s ease-out infinite var(--d,0s)}',
    '@keyframes fxstar{0%,31%{transform:translate(0,0) scale(1);opacity:0}34%{opacity:1}62%{transform:translate(var(--x),var(--y));opacity:1}100%{transform:translate(calc(var(--x)*1.06),calc(var(--y) + 48px)) scale(.6);opacity:0}}',
    '.fx .st.ht{animation-name:fxheart}',
    '@keyframes fxheart{0%,31%{transform:translate(0,0) scale(1);opacity:0}34%{opacity:1}64%{transform:translate(var(--x),var(--y));opacity:1}100%{transform:translate(calc(var(--x)*1.03),calc(var(--y) + 30px)) scale(.6);opacity:0}}',
    '.fx .wl{left:50%;top:38%;width:2px;height:7px;margin:-7px 0 0 -1px;border-radius:2px;transform-origin:50% 100%;opacity:0;animation:fxwil 3.4s ease-out infinite var(--d,0s)}',
    '@keyframes fxwil{0%,31%{transform:translate(0,0) scaleY(.4);opacity:0}35%{opacity:1}56%{transform:translate(var(--x),var(--y)) scaleY(1.4);opacity:1}100%{transform:translate(calc(var(--x)*1.14),calc(var(--y) + 100px)) scaleY(4.6);opacity:0}}',
    '.fx .pa{left:50%;top:38%;width:5px;height:6px;margin:-6px 0 0 -2.5px;border-radius:3px;transform-origin:50% 100%;opacity:0;animation:fxpalm 3.4s ease-out infinite var(--d,0s)}',
    '@keyframes fxpalm{0%,31%{transform:translate(0,0) scaleY(.5);opacity:0}35%{opacity:1}58%{transform:translate(var(--x),var(--y)) scaleY(2.2);opacity:1}100%{transform:translate(calc(var(--x)*1.12),calc(var(--y) + 72px)) scaleY(5);opacity:0}}',

    '/* cake box: many shots fired from a box with tubes on top */',
    '.fx-cake .u .tr{animation-duration:2s}',
    '.fx-cake .u .bl{animation-duration:2s}',
    '.fx-cake .cb{left:50%;bottom:6%;width:88px;height:46px;margin-left:-44px;border-radius:3px 3px 4px 4px;background:linear-gradient(90deg,rgba(0,0,0,.35),rgba(255,255,255,.16) 30%,rgba(0,0,0,.4)),linear-gradient(var(--c),#4a1424);box-shadow:0 6px 10px -4px rgba(0,0,0,.6)}',
    '.fx-cake .cb::before{content:"";position:absolute;left:0;right:0;top:0;height:9px;border-radius:3px 3px 0 0;background:repeating-linear-gradient(90deg,#10131f 0 9px,#2d3350 9px 12px)}',
    '.fx-cake .cb::after{content:"";position:absolute;left:9px;right:9px;top:17px;height:21px;border-radius:3px;border:2px solid #FFC857;background:linear-gradient(135deg,rgba(255,200,87,.9) 0 20%,transparent 20% 100%),repeating-linear-gradient(0deg,rgba(255,200,87,.28) 0 3px,transparent 3px 6px)}',

    '/* bomb with a fuse: spark runs down the fuse, then a big bang */',
    '.fx-fusebomb .bd{left:50%;top:56%;width:38px;height:34px;margin:-17px 0 0 -19px;border-radius:5px;background:linear-gradient(90deg,rgba(0,0,0,.38),rgba(255,255,255,.22) 35%,rgba(0,0,0,.42)),linear-gradient(#c0262f,#7f1119);animation:fxbdy 2.6s ease-out infinite}',
    '.fx-fusebomb .bd::before,.fx-fusebomb .bd::after{content:"";position:absolute;left:0;right:0;height:4px;background:#FFC857}',
    '.fx-fusebomb .bd::before{top:6px}',
    '.fx-fusebomb .bd::after{bottom:6px}',
    '@keyframes fxbdy{0%,48%{opacity:1;transform:none}50%,88%{opacity:0;transform:scale(1.3)}93%,100%{opacity:1;transform:none}}',
    '.fx-fusebomb .fs{left:50%;top:calc(56% - 43px);width:2px;height:26px;margin-left:-1px;border-radius:2px;background:linear-gradient(#e3d3ad,#8a6a3a);transform-origin:50% 100%;transform:rotate(14deg);animation:fxfuse 2.6s linear infinite}',
    '@keyframes fxfuse{0%{transform:rotate(14deg) scaleY(1);opacity:1}46%{transform:rotate(14deg) scaleY(.05);opacity:1}48%,88%{opacity:0}92%,100%{transform:rotate(14deg) scaleY(1);opacity:1}}',
    '.fx-fusebomb .fz{left:calc(50% + 6px);top:calc(56% - 42px);width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:#fff;box-shadow:0 0 8px 3px var(--c),0 0 16px 7px var(--c);animation:fxburn 2.6s linear infinite}',
    '@keyframes fxburn{0%{transform:translate(0,0) scale(1);opacity:1}46%{transform:translate(-6px,25px) scale(1);opacity:1}48%,100%{transform:translate(-6px,25px) scale(.2);opacity:0}}',
    '.fx-fusebomb .bf{left:50%;top:56%;width:64px;height:64px;margin:-32px 0 0 -32px;background:#fff;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);opacity:0;animation:fxboom 2.6s ease-out infinite}',
    '@keyframes fxboom{0%,48%{transform:scale(.2) rotate(0);opacity:0}50%{transform:scale(.7) rotate(8deg);opacity:1}64%{transform:scale(1.5) rotate(22deg);opacity:1}92%,100%{transform:scale(1.9) rotate(30deg);opacity:0}}',
    '.fx-fusebomb .bg{left:50%;top:56%;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;background:radial-gradient(circle,var(--c),transparent 68%);opacity:0;animation:fxboom 2.6s ease-out infinite}',
    '.fx-fusebomb .br{left:50%;top:56%;width:40px;height:40px;margin:-20px 0 0 -20px;border:3px solid var(--c);border-radius:50%;opacity:0;animation:fxbring 2.6s ease-out infinite var(--d,0s)}',
    '@keyframes fxbring{0%,48%{transform:scale(.3);opacity:0}50%{opacity:1}100%{transform:scale(3.4);opacity:0}}',
    '.fx-fusebomb .pcs{left:50%;top:56%;width:6px;height:9px;margin:-4px 0 0 -3px;opacity:0;animation:fxbit 2.6s ease-out infinite}',
    '@keyframes fxbit{0%,48%{transform:translate(0,0) rotate(0);opacity:0}50%{opacity:1}100%{transform:translate(var(--x),var(--y)) rotate(var(--r));opacity:0}}',

    '/* ground flower: flat disc on the ground, spinning ring of sparks */',
    '.fx .gs{position:absolute;left:50%;top:70%;width:0;height:0;transform:scaleY(.38)}',
    '.fx-groundbloom .dk{left:50%;top:70%;width:58px;height:24px;margin:-12px 0 0 -29px;border-radius:50%;background:radial-gradient(ellipse,#e0bb83 0 38%,#a07a46 40% 100%);box-shadow:0 6px 0 #6b4a22}',
    '.fx-groundbloom .gw{left:-62px;top:-62px;width:124px;height:124px;border-radius:50%;background:repeating-conic-gradient(var(--c) 0 8deg,transparent 8deg 45deg);-webkit-mask:radial-gradient(circle,transparent 0 16%,#000 17% 68%,transparent 70%);mask:radial-gradient(circle,transparent 0 16%,#000 17% 68%,transparent 70%);filter:drop-shadow(0 0 5px var(--c));animation:fxspin .9s linear infinite}',
    '.fx-groundbloom .gw.b{left:-38px;top:-38px;width:76px;height:76px;background:repeating-conic-gradient(var(--c) 0 3deg,transparent 3deg 15deg);animation-direction:reverse;animation-duration:1.2s}',
    '.fx-groundbloom .pt{left:50%;bottom:30%;width:4px;height:4px;margin-left:-2px;border-radius:50%;box-shadow:0 0 6px var(--c);opacity:0;animation:fxfount 1.5s ease-out infinite var(--d,0s)}',
    '.fx-groundbloom .ct{left:50%;top:70%;width:16px;height:9px;margin:-4px 0 0 -8px;border-radius:50%;background:#fff;box-shadow:0 0 12px 5px var(--c);animation:fxflick .25s steps(2) infinite}',

    '/* snake tablet: ash snake grows out of a glowing tablet */',
    '.fx-snake{--ox:calc(50% - 60px);--oy:66%}',
    '.fx-snake .tb2{left:calc(50% - 60px);top:66%;width:18px;height:9px;margin:-4px 0 0 -9px;border-radius:50%;background:radial-gradient(ellipse,#3a3d46,#101116);box-shadow:0 0 12px 4px var(--c);animation:fxflick .3s steps(2) infinite}',
    '.fx-snake .sg{left:calc(50% + var(--x));top:calc(66% + var(--y));width:var(--z);height:var(--z);margin:calc(var(--z)/-2) 0 0 calc(var(--z)/-2);border-radius:50%;background:radial-gradient(circle at 35% 30%,#7a7f8c,#2a2c33 55%,#0c0d11);box-shadow:0 0 5px -1px var(--c);opacity:0;animation:fxsnake 4.4s ease-out infinite var(--d,0s)}',
    '@keyframes fxsnake{0%{transform:scale(0);opacity:0}2%{transform:scale(1);opacity:1}78%{transform:scale(1);opacity:1}92%,100%{transform:scale(1);opacity:0}}',

    '/* party popper: striped cone, confetti flies out */',
    '.fx-popper .cone2{left:50%;bottom:6%;width:46px;height:58px;margin-left:-23px;background:linear-gradient(90deg,rgba(0,0,0,.3),rgba(255,255,255,.2) 35%,rgba(0,0,0,.35)),repeating-linear-gradient(160deg,var(--c) 0 8px,#fff 8px 13px);clip-path:polygon(0 0,100% 0,62% 100%,38% 100%)}',
    '.fx-popper .mo{left:50%;bottom:calc(6% + 52px);width:46px;height:12px;margin-left:-23px;border-radius:50%;background:#2a1a12;box-shadow:inset 0 2px 0 rgba(255,255,255,.25)}',
    '.fx-popper .cf2{left:50%;bottom:calc(6% + 56px);margin-left:-4px;opacity:0;animation:fxconf 2.8s ease-out infinite var(--d,0s)}',
    '@keyframes fxconf{0%{transform:translate(0,0) rotate(0);opacity:0}5%{opacity:1}34%{transform:translate(calc(var(--x)*.7),calc(var(--y)*-1)) rotate(calc(var(--r)*.5));opacity:1}100%{transform:translate(var(--x),52px) rotate(var(--r));opacity:0}}',
    '.fx-popper .pf{left:50%;bottom:calc(6% + 56px);width:60px;height:60px;margin:0 0 -30px -30px;border-radius:50%;background:radial-gradient(circle,#fff 0 14%,var(--c) 34%,transparent 66%);opacity:0;animation:fxpopf 2.8s ease-out infinite}',
    '@keyframes fxpopf{0%{transform:scale(.2);opacity:1}14%,100%{transform:scale(1.3);opacity:0}}',

    '/* crackling: tiny white pops above a small tube */',
    '.fx-crackle .tube{left:50%;bottom:7%;width:28px;height:40px;margin-left:-14px;border-radius:4px 4px 2px 2px;background:linear-gradient(90deg,rgba(0,0,0,.4),rgba(255,255,255,.2) 35%,rgba(0,0,0,.45)),linear-gradient(#e0b33d,#a97e19)}',
    '.fx-crackle .tube::before{content:"";position:absolute;left:-2px;right:-2px;top:0;height:6px;border-radius:3px;background:#3a2a1c}',
    '.fx-crackle .tube::after{content:"";position:absolute;left:4px;right:4px;top:15px;height:12px;border-radius:2px;background:var(--c)}',
    '.fx-crackle .cg{left:var(--x);top:var(--y);width:calc(var(--z)*2.4);height:calc(var(--z)*2.4);margin:calc(var(--z)*-1.2) 0 0 calc(var(--z)*-1.2);border-radius:50%;background:radial-gradient(circle,var(--g) 0,transparent 68%);opacity:0;animation:fxcrackg 1.5s ease-out infinite var(--d,0s)}',
    '@keyframes fxcrackg{0%{transform:scale(0);opacity:0}6%{transform:scale(1);opacity:.9}30%,100%{transform:scale(1.4);opacity:0}}',
    '.fx-crackle .ck{left:var(--x);top:var(--y);width:var(--z);height:var(--z);margin:calc(var(--z)/-2) 0 0 calc(var(--z)/-2);background:var(--k,#fff);clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);opacity:0;animation:fxcrack 1.5s ease-out infinite var(--d,0s)}',
    '@keyframes fxcrack{0%{transform:scale(0) rotate(0);opacity:0}5%{transform:scale(1.25) rotate(20deg);opacity:1}16%{transform:scale(.5) rotate(40deg);opacity:.9}28%,100%{transform:scale(0) rotate(60deg);opacity:0}}',

    '/* rocket with a body, nose cone, stick and flame (replaces the plain streak) */',
    '.fx-rocket .rk{left:50%;bottom:4%;width:15px;height:78px;margin-left:-7.5px;animation:fxrk 3s ease-in infinite}',
    '.fx-rocket .rk::before{content:"";position:absolute;left:0;top:0;width:15px;height:32px;background:linear-gradient(90deg,rgba(0,0,0,.35),rgba(255,255,255,.3) 35%,rgba(0,0,0,.4)),linear-gradient(var(--c),#6e1520);clip-path:polygon(50% 0,100% 30%,100% 100%,0 100%,0 30%)}',
    '.fx-rocket .rk::after{content:"";position:absolute;left:6.5px;top:32px;width:2px;height:46px;background:linear-gradient(#d9b57a,#8a6a3a)}',
    '.fx-rocket .rk .fm{left:50%;top:31px;width:9px;height:26px;margin-left:-4.5px;border-radius:50%;background:linear-gradient(#fff,var(--c) 40%,transparent);animation:fxflick .12s steps(2) infinite}',
    /* default */
    '.fx-burst .bst{left:50%;top:50%;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;background:repeating-conic-gradient(var(--c) 0 2.2deg,transparent 2.2deg 12deg);-webkit-mask:radial-gradient(circle,transparent 0 24%,#000 25% 60%,transparent 61%);mask:radial-gradient(circle,transparent 0 24%,#000 25% 60%,transparent 61%);animation:fxspin 10s linear infinite,fxfade 2.4s ease-in-out infinite}',

    /* reduced motion: one static burst instead */
    '@media (prefers-reduced-motion:reduce){.fx>*{display:none}.fx::before{content:"";position:absolute;left:50%;top:50%;width:110px;height:110px;margin:-55px 0 0 -55px;border-radius:50%;background:repeating-conic-gradient(var(--c) 0 2.2deg,transparent 2.2deg 12deg);-webkit-mask:radial-gradient(circle,transparent 0 24%,#000 25% 60%,transparent 61%);mask:radial-gradient(circle,transparent 0 24%,#000 25% 60%,transparent 61%)}}'
  ].join('\n');

  var st = document.createElement('style');
  // Spoke rings read their gradient from --rX_Y when an item has several colours (set in fxArt).
  css = css.replace(/repeating-conic-gradient\(var\(--c\) 0 ([\d.]+)deg,transparent \1deg ([\d.]+)deg\)/g, function (m, x, y) {
    return 'var(--r' + x.replace('.', 'p') + '_' + y + ',' + m + ')';
  });
  st.textContent = css;
  document.head.appendChild(st);

  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
  function rng(seed) { var s = seed % 233280 || 1; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }

  // Order matters: the first match wins. Specific things (peacock, gift box, shots, lar) come before general ones.
  // Names are checked first, then category, then description.
  var TYPES = [
    ['peacock',   /peacock|mayil|மயில்/i,                                       'Peacock (feathers open)'],
    ['peony',     /peony|chrysanthem|round\s?shell/i,                            'Peony shell (stars burst and fall)'],
    ['willow',    /willow|golden\s?rain/i,                                       'Willow (golden trails droop down)'],
    ['palm',      /palm|coconut/i,                                               'Palm tree (thick arms open and droop)'],
    ['heart',     /heart|\blove\b|இதய/i,                                          'Heart-shaped burst'],
    ['cake',      /cake|candy\s?box/i,                                           'Cake box (many shots from a box)'],
    ['fusebomb',  /bomb|atom|\bfuse\b|\bthiri\b|திரி/i,                           'Bomb with a fuse, then a big bang'],
    ['groundbloom', /ground\s?(flower|bloom|wheel)|bh?oo\s?chakkar|பூ\s?சக்கர/i,  'Ground flower (flat spinner)'],
    ['snake',     /snake|pambu|பாம்பு/i,                                          'Snake tablet (ash snake grows)'],
    ['popper',    /popper|confetti|party\s?pop|streamer/i,                       'Party popper (confetti)'],
    ['crackle',   /crackle\s?(pot|pots|fountain)|crossette|pop\s?pop/i,          'Crackling pops'],
    ['gift',      /gift\s?box|twitter treat|fire\s?fox|yahoo|android attack|oogle galatta|galaxy grand|facebook fun|whats?up wonder|youtube yours|wifi mega|a to z|kids special|kutti|echo\s?\d+|\bitems\b/i, 'Gift box'],
    ['lar',       /digital|\blar\b|jagajal|yalini|whip|garland|kuruvi|bijili|kungfu|\b100 k\b|chain/i, 'Digital lar / garland (string of pops)'],
    ['money',     /money|currency|millionaire|old is (gold|best)/i,              'Money (notes and coins fly)'],
    ['repeat',    /\b\d+\s?shots?\b|repeat|set\s?out|top\s?\d+\s?x|whistling\s?\d+/i, 'Repeating shots'],
    ['double',    /double\s?(shot|pack|ball)|\b2\s?shot|twin\s?shot|2x/i,       'Double shot'],
    ['rocket',    /rocket|whistl|ராக்கெட்/i,                                     'Rocket'],
    ['chakkar',   /chakkar|chakkara|chakra|wheel|spin|சக்கர/i,                   'Chakkar (spinner)'],
    ['flowerpot', /flower|pot\b|fountain|anar|சட்டி|cone\b|kotti|tri\s?colou?r|mayajaal|oyalo|power puff|asharfi|genie/i, 'Flower pot'],
    ['bang',      /bomb|atom|\bbang\b|sound|\bply\b|bijli|lakshmi|ben 10|hanuman|spider\s?man|hulk|dinosaur|king of king|wala|வெடி/i, 'Bomb / sound cracker'],
    ['pipe',      /pipe|nayagara|niagara|texcas|golden eye|\bwow\b|night king|space war|magic star|silver fall|single ton|glenfid|star war|tower|matrix|airways|emirates|go air|thai air|jet i\b|witcher|insignia|golden boom|wonder la|essel|queens land|black thunder|veega|ever land|zig zag|tik tak|hit o hit|thriller|empower|\bleo\b|dilli|rolex|furious|avengers shot|booty|green beat|fly catcher|\brobin\b|finch|black bird|legend|7 wonders|penta|god of cricket|history of india|fancy/i, 'Big pipe (shoots up, huge bloom)'],
    ['smoke',     /smoke|holi/i,                                                 'Coloured smoke'],
    ['candle',    /pencil|candle|torch|twinkl|selfie|flash\s?light|lolly|cricket bat|\bcsk\b|c s k/i, 'Pencil / candle (burns with sparkle)'],
    ['siren',     /siren|galatta/i,                                              'Siren (whistling spinner)'],
    ['shower',    /water|fall|rain|shower|cascade|jhar|waterfall/i,              'Waterfall (sparks pour down)'],
    ['sparkler',  /spark|kambi|phuljhadi|மத்தாப்/i,                              'Sparkler'],
    ['toy',       /helicopter|butterfly|snake|race car|kinder|kickables|emu egg|top gun|pistal|007|electric stone|kit\s?kat|photo flash|toy\b/i, 'Toy / novelty'],
    ['ball',      /dragon\s?ball|bat\s?&\s?ball|\bball\b/i,                      'Bouncing ball'],
    ['multi',     /tom\s?&\s?jerry|tom and jerry|avengers|temple run|\bdora\b|\d\s?in\s?1\b|\bu\s?s\s?a\b/i, 'Multi effect (jets, then a big bloom)'],
    ['aerial',    /aerial|shot|shell|cake|repeater|sky|fire\s?work|வான/i,        'Aerial shot']
  ];
  var DEFAULT = ['burst', null, 'Starburst (default)'];

  // Plain-language choices for the admin "How does it burst?" dropdown.
  window.FX_TYPES = [
    ['auto',      'Auto (pick from the name)'],
    ['sparkler',  'Hand-held, throws sparks (sparkler)'],
    ['candle',    'Candle / pencil burning with sparkles'],
    ['flowerpot', 'Fountain of sparks going up (flower pot)'],
    ['shower',    'Sparks pour down like a waterfall'],
    ['chakkar',   'Spins on the ground (chakkar / wheel)'],
    ['rocket',    'Flies up and bursts (rocket)'],
    ['aerial',    'Shoots up, big colour bursts in the sky (aerial)'],
    ['pipe',      'Big pipe: shoots up, huge bloom, glitter falls'],
    ['repeat',    'Many shots, one after another (repeating shots)'],
    ['double',    'Two shots, one after another (double shot)'],
    ['lar',       'String of pops (digital lar / garland)'],
    ['peacock',   'Feathers open like a peacock'],
    ['smoke',     'Coloured smoke'],
    ['toy',       'Toy / novelty (helicopter, butterfly)'],
    ['gift',      'Gift box (mix of bursts)'],
    ['money',     'Money: notes and coins fly up'],
    ['siren',     'Whistling spinner with sound rings (siren)'],
    ['multi',     'Multi effect: jets take turns, then a big bloom (2 in 1, 6 in 1)'],
    ['ball',      'Glowing ball that bounces (dragon ball, bat and ball)'],
    ['peony',     'Round shell: stars burst out and fall (peony)'],
    ['willow',    'Golden trails droop down like a willow tree'],
    ['palm',      'Thick arms open and droop (palm tree)'],
    ['heart',     'Heart-shaped burst'],
    ['cake',      'Cake box firing many shots'],
    ['fusebomb',  'Bomb with a burning fuse, then a big bang'],
    ['groundbloom', 'Flat disc spinning on the ground (ground flower)'],
    ['snake',     'Black snake growing from a tablet'],
    ['popper',    'Party popper, confetti flies out'],
    ['crackle',   'Crackling: tiny white pops'],
    ['bang',      'Loud bang with a flash (bomb)'],
    ['burst',     'Simple starburst']
  ];

  function byKey(k) {
    for (var i = 0; i < TYPES.length; i++) if (TYPES[i][0] === k) return TYPES[i];
    return k === 'burst' ? DEFAULT : null;
  }

  // Order: admin's choice > name > category > description > default.
  function detect(name, cat, desc, anim) {
    if (anim && anim !== 'auto') { var f = byKey(anim); if (f) return f; }
    var parts = [String(name || ''), String(cat || ''), String(desc || '')];
    for (var p = 0; p < parts.length; p++) {
      for (var i = 0; i < TYPES.length; i++) if (TYPES[i][1].test(parts[p])) return TYPES[i];
    }
    return DEFAULT;
  }

  // The "tint" value is "colour" or "colour:animation", e.g. "rose:shower".
  function parseTint(t) {
    var p = String(t || '').split(':');
    return { color: p[0], anim: p[1] || 'auto' };
  }

  // Colour part of the tint can be several colours separated by commas:
  // names (accent, gold, rose, teal, sky), hex (#ff0000) or any CSS colour word (red, purple...).
  function resolveColors(str) {
    var out = [];
    String(str || '').split(',').forEach(function (w) {
      w = w.trim().toLowerCase();
      if (!w || out.length >= 20) return;
      if (COL[w]) out.push(COL[w]);
      else if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/.test(w)) out.push(w);
      else if (/^[a-z]+$/.test(w) && window.CSS && window.CSS.supports && window.CSS.supports('color', w)) out.push(w);
    });
    return out.length ? out : [COL.accent];
  }

  // PAL is set only while fxArt builds one animation. null = single colour (original look).
  var PAL = null;
  function c0() { return PAL ? PAL[0] : COL.accent; }
  function pk(def, i) { return PAL ? PAL[i % PAL.length] : def[i % def.length]; }

  var RAYS = [[8, 45], [3, 15], [2.4, 10], [2.4, 11], [2.2, 12]];
  function rayVars() {
    if (!PAL) return '';
    return RAYS.map(function (p) {
      var n = Math.round(360 / p[1]), step = 360 / n, parts = [];
      for (var k = 0; k < n; k++) {
        var a = (k * step).toFixed(2), b = (k * step + p[0]).toFixed(2), e = ((k + 1) * step).toFixed(2);
        parts.push(PAL[k % PAL.length] + ' ' + a + 'deg ' + b + 'deg', 'transparent ' + b + 'deg ' + e + 'deg');
      }
      return ';--r' + String(p[0]).replace('.', 'p') + '_' + p[1] + ':conic-gradient(' + parts.join(',') + ')';
    }).join('');
  }

  function sparks(n, r, extra) {
    var h = '';
    for (var i = 0; i < n; i++) {
      var a = Math.round(i * 360 / n + (i % 2 ? 6 : 0));
      var d = ((i * 0.137) % 1).toFixed(2);
      h += '<i class="sp" style="--a:' + a + 'deg;--d:' + (extra ? 0 : d) + 's;--r:' + r + 'px' + (PAL ? ';--c:' + pk([], i) : '') + '"></i>';
    }
    return h;
  }

  function fountain(seed, k) {
    var r = rng(seed), h = '';
    for (var i = 0; i < 16; i++) {
      var x = Math.round((r() - 0.5) * 90), y = Math.round((70 + Math.round(r() * 60)) * (k || 1)), d = (r() * 1.4).toFixed(2);
      var col = pk([c0()], i);
      h += '<i class="pt" style="--x:' + x + 'px;--y:' + y + 'px;--d:' + d + 's;background:' + col + '"></i>';
    }
    return h;
  }

  // flower pot: a tall white-hot centre jet plus wider coloured arcs of different sizes
  function potSpray(seed) {
    var r = rng(seed), h = '';
    for (var i = 0; i < 28; i++) {
      var core = i < 8;
      var x = Math.round((r() - 0.5) * (core ? 16 : 104));
      var y = (core ? 98 : 60) + Math.round(r() * (core ? 24 : 46));
      var d = (r() * 1.4).toFixed(2), s = core ? 3 : 3 + Math.round(r() * 2);
      var col = core ? '#fff' : pk([c0()], i);
      h += '<i class="pt" style="--x:' + x + 'px;--y:' + y + 'px;--s:' + s + 'px;--d:' + d + 's;background:' + col + '"></i>';
    }
    return h;
  }

  function unit(x, y, col, t, z) {
    return '<div class="u" style="--x:' + x + ';--y:' + y + ';--c:' + col + ';--t:' + t + 's;--z:' + z + 'px"><i class="tr"></i><i class="bl"></i></div>';
  }

  function drops(seed) {
    var r = rng(seed), h = '';
    for (var i = 0; i < 22; i++) {
      var x = Math.round((r() - 0.5) * 150), y = 110 + Math.round(r() * 40), d = (r() * 1.4).toFixed(2);
      var col = pk([c0()], i);
      h += '<i class="dr" style="--x:' + x + 'px;--y:' + y + 'px;--d:' + d + 's;background:' + col + '"></i>';
    }
    return h;
  }

  var GOLD = '#FFC857', ROSE = '#FF4D6D', TEAL = '#3DDBC0', SKY = '#5AB0FF';

  // repeating shots: several small shells popping one after another
  function repeatShots(c) {
    var cols = []; for (var k = 0; k < 8; k++) cols.push(pk([c, GOLD, ROSE, TEAL, SKY], k));
    var xs = ['14%', '30%', '46%', '62%', '78%', '90%', '38%', '70%'];
    var ys = ['40%', '30%', '46%', '28%', '42%', '34%', '58%', '58%'];
    var h = '';
    for (var i = 0; i < 8; i++) h += unit(xs[i], ys[i], cols[i], (i * 0.22).toFixed(2), 66);
    return h;
  }

  // digital lar: a string with pops rolling along it
  function larPops(c) {
    var cols = [c, GOLD, ROSE, TEAL], h = '<i class="ln"></i>';
    for (var i = 0; i < 16; i++) {
      var x = (8 + i * 5.6).toFixed(1) + '%', y = (i % 2 ? 56 : 60) + '%', d = (i * 0.09).toFixed(2) + 's';
      h += '<i class="lg" style="--x:' + x + ';--y:' + y + ';--c:' + pk(cols, i) + ';--d:' + d + '"></i>' +
           '<i class="lf" style="--x:' + x + ';--y:' + y + ';--d:' + d + '"></i>';
    }
    return h;
  }

  // peacock: 13 feathers that fan out, each with an "eye"
  function peacockFeathers() {
    var eyes = [TEAL, GOLD, SKY], h = '';
    for (var i = 0; i < 13; i++) {
      var a = -78 + i * 13, ht = 60 - Math.abs(i - 6) * 2, d = (Math.abs(i - 6) * 0.06).toFixed(2);
      h += '<i class="fe" style="--a:' + a + 'deg;--e:' + pk(eyes, i) + ';--d:' + d + 's;height:' + ht + '%"></i>';
    }
    return h + '<i class="pbody"></i>';
  }

  // candle / pencil: twinkling stars around the flame
  function twinkles(seed) {
    var r = rng(seed), cols = ['#fff', GOLD, 'var(--c)'], h = '';
    for (var i = 0; i < 9; i++) {
      var x = Math.round(12 + r() * 76), y = Math.round(10 + r() * 62), z = 8 + Math.round(r() * 7), d = (r() * 1.5).toFixed(2);
      h += '<i class="tw" style="--x:' + x + '%;--y:' + y + '%;--z:' + z + 'px;--k:' + pk([c0()], i) + ';--d:' + d + 's"></i>';
    }
    return h;
  }

  // big pipe: glitter that falls after the bloom
  function pipeGlitter(seed) {
    var r = rng(seed), cols = ['#fff', GOLD, 'var(--c)'], h = '';
    for (var i = 0; i < 20; i++) {
      var x = Math.round((r() - 0.5) * 150), y = 50 + Math.round(r() * 55), d = (r() * 0.25).toFixed(2);
      h += '<i class="gt" style="--x:' + x + 'px;--y:' + y + 'px;--d:' + d + 's;background:' + pk([c0()], i) + '"></i>';
    }
    return h;
  }

  // coloured smoke puffs rising from a cone
  function smokePuffs(c, seed) {
    var r = rng(seed), cols = [c, GOLD, ROSE, TEAL, SKY], h = '';
    for (var i = 0; i < 8; i++) {
      var x = Math.round((r() - 0.5) * 70), col = pk(cols, i);
      h += '<i class="sm" style="--x:' + x + 'px;--d:' + (i * 0.38).toFixed(2) + 's;background:radial-gradient(circle,' + col + ' 0,transparent 70%)"></i>';
    }
    return h + '<i class="cone"></i>';
  }

  // money: notes and coins thrown up, then they flutter down
  function moneyBits(c, seed) {
    var r = rng(seed), h = '<i class="mg"></i>';
    for (var i = 0; i < 12; i++) {
      var x = Math.round((r() - 0.5) * 130), rot = Math.round((r() - 0.5) * 400), d = (i * 0.2).toFixed(2);
      h += '<i class="' + (i % 3 === 2 ? 'cn' : 'nt') + '" style="--x:' + x + 'px;--r:' + rot + 'deg;--d:' + d + 's"></i>';
    }
    return h;
  }

  // multi: three jets fire one after another, then a bloom
  function multiJets(c, seed) {
    var r = rng(seed), bx = ['24%', '76%', '50%'], h = '';
    for (var j = 0; j < 3; j++) {
      h += '<i class="mp" style="--bx:' + bx[j] + '"></i>';
      for (var i = 0; i < 9; i++) {
        var x = Math.round((r() - 0.5) * 60), y = 60 + Math.round(r() * 50), d = (r() * 0.35).toFixed(2);
        var col = pk([c0()], i);
        h += '<i class="mj" style="--bx:' + bx[j] + ';--x:' + x + 'px;--y:' + y + 'px;--o:' + j + 's;--d:' + d + 's;background:' + col + '"></i>';
      }
    }
    return h + '<i class="mb"></i>';
  }

  // mixed colours for effects that look better multi-coloured (cake, popper)
  function mixcol(i) {
    return PAL.length > 1 ? PAL[i % PAL.length] : [PAL[0], GOLD, ROSE, TEAL, SKY][i % 5];
  }

  // peony: two rings of stars that fly out and then fall
  function peonyStars(seed) {
    var r = rng(seed), h = '', idx = 0;
    [[26, 64], [16, 38]].forEach(function (ring) {
      for (var i = 0; i < ring[0]; i++) {
        var a = (i / ring[0]) * Math.PI * 2 + (ring[1] < 50 ? 0.12 : 0);
        var rr = ring[1] * (0.92 + r() * 0.16);
        var x = Math.round(Math.cos(a) * rr), y = Math.round(Math.sin(a) * rr);
        var col = pk([c0()], idx++);
        h += '<i class="st" style="--x:' + x + 'px;--y:' + y + 'px;--d:' + (r() * 0.12).toFixed(2) + 's;background:' + col + ';box-shadow:0 0 6px ' + col + '"></i>';
      }
    });
    return h;
  }

  // willow: many thin golden trails that droop down
  function willowTrails(seed) {
    var r = rng(seed), h = '';
    for (var i = 0; i < 34; i++) {
      var a = (i / 34) * Math.PI * 2 + r() * 0.1, rr = 38 + r() * 20;
      var x = Math.round(Math.cos(a) * rr), y = Math.round(Math.sin(a) * rr * 0.9);
      var col = pk([c0()], i);
      h += '<i class="wl" style="--x:' + x + 'px;--y:' + y + 'px;--d:' + (r() * 0.15).toFixed(2) + 's;background:linear-gradient(transparent,' + col + ')"></i>';
    }
    return h;
  }

  // palm: a few thick arms that arch out and droop, with a small ring of stars in the middle
  function palmArms(seed) {
    var r = rng(seed), h = '';
    for (var i = 0; i < 9; i++) {
      var a = (-165 + i * 18.75) * Math.PI / 180, rr = 50 + r() * 6;
      var x = Math.round(Math.cos(a) * rr), y = Math.round(Math.sin(a) * rr);
      var col = pk([c0()], i);
      h += '<i class="pa" style="--x:' + x + 'px;--y:' + y + 'px;--d:' + (r() * 0.08).toFixed(2) + 's;background:linear-gradient(transparent,' + col + ' 62%,#fff);box-shadow:0 0 8px ' + col + '"></i>';
    }
    for (var j = 0; j < 8; j++) {
      var b = (j / 8) * Math.PI * 2, col2 = pk([c0()], j + 1);
      h += '<i class="st" style="--x:' + Math.round(Math.cos(b) * 22) + 'px;--y:' + Math.round(Math.sin(b) * 22) + 'px;--d:0s;background:' + col2 + ';box-shadow:0 0 6px ' + col2 + '"></i>';
    }
    return h;
  }

  // heart: stars land on a heart-shaped curve
  function heartStars(k, n, col) {
    var h = '';
    for (var i = 0; i < n; i++) {
      var t = (i / n) * Math.PI * 2;
      var hx = 16 * Math.pow(Math.sin(t), 3);
      var hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      h += '<i class="st ht" style="--x:' + Math.round(hx * k) + 'px;--y:' + Math.round((-hy - 2.5) * k) + 'px;--d:0s;background:' + col + ';box-shadow:0 0 6px ' + col + '"></i>';
    }
    return h;
  }

  // cake box: shells fired one after another from the top of a box
  function cakeShots() {
    var xs = ['22%', '70%', '44%', '84%', '14%', '58%', '34%'];
    var ys = ['30%', '26%', '40%', '42%', '44%', '20%', '24%'];
    var h = '';
    for (var i = 0; i < 7; i++) h += unit(xs[i], ys[i], mixcol(i), (i * 0.27).toFixed(2), 62);
    return h + '<i class="cb"></i>';
  }

  // bomb: paper bits flying out after the bang
  function boomBits(seed) {
    var r = rng(seed), cols = ['#c0262f', '#FFC857', '#fff', '#8a141c'], h = '';
    for (var i = 0; i < 12; i++) {
      var a = r() * Math.PI * 2, d = 40 + r() * 46;
      h += '<i class="pcs" style="--x:' + Math.round(Math.cos(a) * d) + 'px;--y:' + Math.round(Math.sin(a) * d) + 'px;--r:' + Math.round((r() - 0.5) * 600) + 'deg;background:' + cols[i % 4] + '"></i>';
    }
    return h;
  }

  // snake tablet: a winding line of ash segments that appear one by one
  function snakeBody() {
    var h = '';
    for (var i = 0; i < 22; i++) {
      var x = Math.round(-57 + i * 5.4), y = Math.round(Math.sin(i * 0.62) * 10 - i * 0.9);
      h += '<i class="sg" style="--x:' + x + 'px;--y:' + y + 'px;--z:' + (10 - i * 0.11).toFixed(1) + 'px;--d:' + (i * 0.11).toFixed(2) + 's"></i>';
    }
    return h;
  }

  // party popper: confetti thrown up and fluttering down
  function confetti(seed) {
    var r = rng(seed), h = '';
    for (var i = 0; i < 28; i++) {
      var x = Math.round((r() - 0.5) * 150), y = 55 + Math.round(r() * 50), rot = Math.round((r() - 0.5) * 720);
      var w = 5 + Math.round(r() * 4), ht = 8 + Math.round(r() * 5);
      h += '<i class="cf2" style="--x:' + x + 'px;--y:' + y + 'px;--r:' + rot + 'deg;--d:' + (r() * 0.25).toFixed(2) + 's;width:' + w + 'px;height:' + ht + 'px;background:' + mixcol(i) + '"></i>';
    }
    return h;
  }

  // crackling: tiny white star flashes popping at random spots
  function cracklePops(seed) {
    var r = rng(seed), h = '', cols = ['#fff', GOLD, '#fff', '#FFE9A8'];
    for (var i = 0; i < 14; i++) {
      var x = Math.round(20 + r() * 60), y = Math.round(12 + r() * 52), z = 10 + Math.round(r() * 10), d = (r() * 1.4).toFixed(2);
      var st = '--x:' + x + '%;--y:' + y + '%;--z:' + z + 'px;--d:' + d + 's';
      h += '<i class="cg" style="' + st + ';--g:' + pk([c0()], i) + '"></i><i class="ck" style="' + st + ';--k:' + cols[i % 4] + '"></i>';
    }
    return h + '<i class="tube"></i>';
  }

  window.fxLabel = function (name, cat, tint, desc) {
    return detect(name, cat, desc, parseTint(tint).anim)[2];
  };

  window.fxArt = function (name, cat, tint, desc) {
    var pt = parseTint(tint);
    var type = detect(name, cat, desc, pt.anim)[0];
    var cl = resolveColors(pt.color), c = cl[0];
    PAL = cl;
    var seed = hash(String(name || '') + type);
    var others = [1, 2, 3, 4].map(function (k) { return PAL[k % PAL.length]; });
    var body = '';
    switch (type) {
      case 'sparkler':
        body = '<i class="stick"></i>' + sparks(16, 52) + '<i class="core"></i>';
        break;
      case 'flowerpot':
        body = '<i class="fpg"></i><i class="fpc"></i>' + potSpray(seed) + '<i class="fpf"></i><i class="fpb"></i><i class="fpn"></i><i class="fpr"></i><i class="mouth"></i>';
        break;
      case 'chakkar':
        body = '<i class="whl"></i><i class="whl b"></i>' + sparks(10, 60) + '<i class="hub"></i>';
        break;
      case 'rocket':
        body = '<i class="rk"><i class="fm"></i></i>' + sparks(14, 50, true);
        break;
      case 'double':
        body = unit('30%', '42%', c, 0, 100) + unit('70%', '42%', others[0], 1.3, 100);
        break;
      case 'aerial':
        body = unit('28%', '38%', c, 0, 96) + unit('72%', '32%', others[0], 0.9, 104) + unit('50%', '56%', others[1], 1.7, 92);
        break;
      case 'shower':
        body = drops(seed) + '<i class="src"></i>';
        break;
      case 'bang':
        body = '<i class="gl"></i><i class="rg"></i><i class="rg" style="--d:.25s"></i><i class="fl"></i>';
        break;
      case 'repeat':
        body = repeatShots(c);
        break;
      case 'lar':
        body = larPops(c);
        break;
      case 'peacock':
        body = peacockFeathers();
        break;
      case 'candle':
        body = '<i class="cd"></i><i class="fl2"></i>' + sparks(10, 36) + twinkles(seed);
        break;
      case 'pipe':
        body = '<i class="pt1"></i><i class="pb1"></i><i class="pb2"></i>' + pipeGlitter(seed) + '<i class="pipe"></i><i class="pmo"></i>';
        break;
      case 'smoke':
        body = smokePuffs(c, seed);
        break;
      case 'toy':
        body = sparks(8, 42) + '<div class="tg"><i class="tb"></i><i class="tp"></i></div>';
        break;
      case 'gift':
        body = unit('24%', '38%', c, 0, 84) + unit('76%', '34%', pk([GOLD], 1), 0.8, 88) + unit('50%', '22%', pk([ROSE], 2), 1.5, 80) + unit('50%', '52%', pk([TEAL], 3), 2.1, 70) + '<i class="gb"></i>';
        break;
      case 'money':
        body = moneyBits(c, seed);
        break;
      case 'siren':
        body = sparks(10, 52) + '<i class="sw"></i><i class="sw" style="--d:.45s"></i><i class="sw" style="--d:.9s"></i><i class="sb"></i><i class="hb"></i>';
        break;
      case 'multi':
        body = multiJets(c, seed);
        break;
      case 'ball':
        body = '<i class="sh"></i><i class="ip"></i><div class="bw"><i class="ob"></i></div>';
        break;
      case 'peony':
        body = '<i class="rs"></i><i class="cf"></i>' + peonyStars(seed);
        break;
      case 'willow':
        body = '<i class="rs"></i><i class="cf"></i>' + willowTrails(seed);
        break;
      case 'palm':
        body = '<i class="rs"></i><i class="cf"></i>' + palmArms(seed);
        break;
      case 'heart':
        body = '<i class="rs"></i><i class="cf"></i>' + heartStars(3.5, 36, c) + heartStars(1.9, 18, PAL[1 % PAL.length]);
        break;
      case 'cake':
        body = cakeShots();
        break;
      case 'fusebomb':
        body = '<i class="bg"></i><i class="br"></i><i class="br" style="--d:.2s"></i><i class="bf"></i>' + boomBits(seed) + '<i class="bd"></i><i class="fs"></i><i class="fz"></i>';
        break;
      case 'groundbloom':
        body = '<i class="dk"></i><div class="gs"><i class="gw"></i><i class="gw b"></i>' + sparks(14, 68) + '</div>' + fountain(seed, 0.5) + '<i class="ct"></i>';
        break;
      case 'snake':
        body = '<i class="tb2"></i>' + snakeBody() + sparks(7, 26);
        break;
      case 'popper':
        body = '<i class="cone2"></i><i class="mo"></i>' + confetti(seed) + '<i class="pf"></i>';
        break;
      case 'crackle':
        body = cracklePops(seed);
        break;
      default:
        body = '<i class="bst"></i>';
    }
    var outHtml = '<div class="fx fx-' + type + '" style="--c:' + c + ';--c2:' + PAL[1 % PAL.length] + rayVars() + '" aria-hidden="true">' + body + '</div>';
    PAL = null;
    return outHtml;
  };

  function escA(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  // Only https links are used. Google Drive share links are turned into a direct image link
  // (the Drive file must be shared as "Anyone with the link").
  window.fxImgUrl = function (u) {
    u = String(u == null ? '' : u).trim();
    if (!/^https:\/\//i.test(u)) return '';
    var m = u.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || u.match(/drive\.google\.com\/(?:open|uc)\?(?:[^#]*&)?id=([\w-]+)/);
    return m ? 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w800' : u;
  };

  // Photo if the product has a photo link, otherwise the animation.
  window.fxMedia = function (name, cat, tint, desc, img) {
    var u = window.fxImgUrl(img);
    if (!u) return window.fxArt(name, cat, tint, desc);
    return '<img class="pimg" src="' + escA(u) + '" alt="' + escA(name) + '" loading="lazy" referrerpolicy="no-referrer"' +
      ' data-n="' + escA(name) + '" data-c="' + escA(cat) + '" data-t="' + escA(tint) + '" data-d="' + escA(desc) + '">';
  };

  // Photo AND animation. The photo stays clear; a small glowing badge loops the animation,
  // and tapping it plays the full animation over a dimmed photo. No photo link = animation only.
  window.fxBoth = function (name, cat, tint, desc, img) {
    var u = window.fxImgUrl(img), anim = window.fxArt(name, cat, tint, desc);
    if (!u) return anim;
    var c = resolveColors(parseTint(tint).color)[0];
    return '<div class="mix" style="--c:' + c + '" data-n="' + escA(name) + '" data-c="' + escA(cat) + '" data-t="' + escA(tint) + '" data-d="' + escA(desc) + '">' +
      '<img class="mix-img" src="' + escA(u) + '" alt="' + escA(name) + '" loading="lazy" referrerpolicy="no-referrer">' +
      '<button type="button" class="mix-badge" aria-pressed="false" aria-label="See how ' + escA(name) + ' bursts"><span class="mb-ring"><span class="mb-fx" aria-hidden="true">' + anim + '</span></span><span>See it burst</span></button>' +
      '<div class="mix-full" aria-hidden="true"><div class="mf-fx"></div><span class="mf-tag">Tap to go back</span></div></div>';
  };

  function mixSet(mix, on) {
    var full = mix.querySelector('.mf-fx');
    mix.classList.toggle('play', on);
    mix.querySelector('.mix-badge').setAttribute('aria-pressed', String(on));
    mix.querySelector('.mix-full').setAttribute('aria-hidden', String(!on));
    if (on) {
      full.innerHTML = window.fxArt(mix.dataset.n, mix.dataset.c, mix.dataset.t, mix.dataset.d);   // built only when opened, so many cards stay light
      window.fxWatch(mix);
    } else {
      setTimeout(function () { if (!mix.classList.contains('play')) full.innerHTML = ''; }, 300);
    }
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.mix-badge');
    var f = e.target.closest && e.target.closest('.mix-full');
    if (b) { e.preventDefault(); var m = b.closest('.mix'); mixSet(m, !m.classList.contains('play')); }
    else if (f) { mixSet(f.closest('.mix'), false); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.querySelectorAll('.mix.play').forEach(function (m) { mixSet(m, false); });
  });

  // Pause animations that are scrolled out of view (keeps phones smooth with many products).
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle('off', !e.isIntersecting); });
  }, { rootMargin: '80px' }) : null;

  window.fxWatch = function (root) {
    root = root || document;
    // A photo that fails to load falls back to the animation.
    root.querySelectorAll('img.pimg').forEach(function (im) {
      if (im.__fx) return;
      im.__fx = 1;
      function fallback() {
        var p = im.parentNode;
        if (!p) return;
        p.innerHTML = window.fxArt(im.dataset.n, im.dataset.c, im.dataset.t, im.dataset.d);
        window.fxWatch(p);
      }
      im.addEventListener('error', fallback);
      if (im.complete && im.naturalWidth === 0 && im.getAttribute('src')) fallback();
    });
    root.querySelectorAll('.mix-img').forEach(function (im) {
      if (im.__fx) return;
      im.__fx = 1;
      function fallback() {
        var m = im.closest('.mix');
        if (!m || !m.parentNode) return;
        m.parentNode.innerHTML = window.fxArt(m.dataset.n, m.dataset.c, m.dataset.t, m.dataset.d);
        window.fxWatch(document);
      }
      im.addEventListener('error', fallback);
      if (im.complete && im.naturalWidth === 0 && im.getAttribute('src')) fallback();
    });
    if (!io) return;
    root.querySelectorAll('.fx').forEach(function (el) { io.observe(el); });
  };
})();