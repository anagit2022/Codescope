var CATS={1:"Boxes for remembering",2:"Setting things up",3:"Colors and style",4:"Moving and turning",5:"Drawing shapes and words"};
// [code, category, title, explanation, optional try-it tip]
var L=[
["let time = 0;",1,"Make a box called time","<code>let</code> makes a little box with a name on it. This box is called <b>time</b> and it starts with 0 inside. We will use it like a stopwatch.","Imagine changing 0 to 5. Nothing would change! Line 8 sets time again right away. Can you see why?"],
["let x = 0;",1,"Make a box called x","Another box! <b>x</b> will remember where the red ball is, from left to right. 0 means the far left edge."],
["function setup() {",2,"The start-up recipe","<code>function</code> is a recipe with a name. <b>setup</b> is special: the computer follows it just <b>one time</b> when the program starts. The <code>{</code> means: the recipe begins here."],
["  createCanvas(windowWidth, windowHeight);",2,"Get your drawing paper","<b>createCanvas</b> makes your drawing paper. <b>windowWidth</b> and <b>windowHeight</b> mean the paper is as big as the window you are looking at."],
["}",2,"End of the recipe","The <code>}</code> closes the recipe, like a closing door. Everything between <code>{</code> and <code>}</code> belongs to that recipe."],
["function draw() {",2,"The forever recipe","<b>draw</b> is special too. The computer repeats it again and again, about <b>60 times every second</b>. It works like a flip book: every flip is a new picture, so things look like they move!"],
["  background(255);",3,"Paint the paper white","Wipes the whole paper with one color. <b>255</b> means the brightest white (0 would be black). Without this, the old pictures would stay and smear."],
["  time = millis() * 0.001;",1,"Read the stopwatch","<b>millis()</b> tells how many thousandths of a second have passed since you started. Multiplying by <b>0.001</b> turns that into normal seconds. Now <b>time</b> holds 1, then 2, then 3... (with decimals in between).","Change 0.001 to 0.002. The clock runs twice as fast!"],
["  x = (time * 100) % width;",4,"Work out where the ball is","The ball moves <b>100 steps (pixels) every second</b>. The <b>%</b> sign means: when you pass the end of the screen (<b>width</b>), jump back to the start. That is how the ball goes around again and again.","Change 100 to 300. The ball zooms!"],
["  translate(0, height * 0.5);",4,"Move the starting point","Normally (0, 0) is the top-left corner. <b>translate</b> slides it down to the <b>middle</b> of the screen (height times 0.5 is half). After this, up is a negative number and down is positive."],
["  textSize(width * 0.03);",5,"Pick the letter size","Makes letters 3 out of every 100 parts of the screen width. Wider screen, bigger letters!"],
["  noStroke();",3,"Turn off the outline pen","<b>Stroke</b> is the outline. <b>noStroke</b> means: draw with no outline. Letters look nicer without one."],
["  fill(0);",3,"Fill color: black","<b>fill</b> chooses the inside color. 0 is black."],
["  text(time.toFixed(3), 50, -150);",5,"Write the seconds","<b>text</b> writes words on the paper. <b>toFixed(3)</b> keeps 3 numbers after the dot (like 2.481). The <b>50</b> is how far from the left. <b>-150</b> is above the middle line, because up is negative!","Change -150 to -50 to move the number down."],
["  text(round(x), 50, 150);",5,"Write the ball position","<b>round</b> chops off the decimals so you see a whole number. This writes where the ball is, 150 steps below the middle line."],
["  stroke(0);",3,"Turn the outline pen on","Outlines are back on, in black (0)."],
["  noFill();",3,"No color inside","Shapes will be see-through. Only their outlines will show."],
["  push();",4,"Save the settings","<b>push</b> is like pressing a Save button. The computer remembers where the starting point is and which way is straight. We are about to move and spin things, and later we can undo it."],
["  translate(300, -100);",4,"Go to the clock spot","Slides the starting point 300 to the right and 100 up. The spinning clock will be drawn here."],
["  rotate(time % 1 * TWO_PI);",4,"Spin!","<b>time % 1</b> is the part after the dot. It counts from 0 up to 1 and starts over every second. <b>TWO_PI</b> is a full circle in the math computers like (about 6.28). So the hand makes <b>one whole spin every second</b>.","Pick PI in the drop-down box. The hand only turns half a circle each second!"],
["  line(100, 0, 0, 0);",5,"Draw the clock hand","Draws a line from (100, 0) to (0, 0). Because we spun the paper first, the line spins too."],
["  circle(0, 0, 200);",5,"Draw the clock face","A circle at (0, 0), which is the spot we moved to. It is 200 wide."],
["  pop();",4,"Load the saved settings","<b>pop</b> is the Load button. The spin and the move are undone, so the next shapes are drawn in the normal place. Always match each push with a pop!"],
["  stroke(0);",3,"Outline pen: black","Getting ready to draw the track."],
["  line(0, 200, width, 200);",5,"Draw the track","A straight line from the far left (0) to the far right (<b>width</b>), 200 steps below the middle. The ball rolls on it."],
["  noStroke();",3,"Pen off again","The ball will have no outline."],
["  fill(255, 0, 0);",3,"Fill color: red!","Colors are mixed from <b>Red, Green, Blue</b>. (255, 0, 0) means all the red, no green, no blue. That is pure red!","Try fill(0, 0, 255) for blue, or fill(255, 0, 255) for pink."],
["  circle(x, 200, 50);",5,"Draw the red ball","A circle 50 wide. Its left-right spot is <b>x</b>, the box we filled in earlier, so as x changes, the ball moves along the track. This is the magic line!","Change 50 to 120 for a giant ball."],
["}",2,"End of draw","The recipe ends. The computer jumps back to the top of <b>draw</b> and does it all again for the next flip-book page."]
];
var SRC=L.map(function(r){return r[0]}).join("\n");
var cur=0,codeEl=document.getElementById("code");
L.forEach(function(r,i){
  var b=document.createElement("button");b.className="ln k"+r[1];b.type="button";
  b.innerHTML='<span class="n">'+(i+1)+'</span><span class="t"></span>';
  b.querySelector(".t").textContent=r[0];
  b.onclick=function(){show(i)};codeEl.appendChild(b);
});
var lg=document.getElementById("legend");
Object.keys(CATS).forEach(function(k){var s=document.createElement("span");s.style.background="var(--c"+k+")";s.textContent=CATS[k];lg.appendChild(s)});
// Playground: {a}, {b}, {c} are holes in the line that the sliders fill in.
// r = slider [key,label,'r',min,max,step,start]   s = drop-down [key,label,'s',options,start]
var P={
3:["  createCanvas({a});",[["a","How big is the paper?","s",["windowWidth, windowHeight","300, 300","windowWidth / 2, windowHeight"],"windowWidth, windowHeight"]]],
6:["  background({a});",[["a","Paper color (0 black, 255 white)","r",0,255,5,255]]],
7:["  time = millis() * {a};",[["a","Clock speed (0.001 is normal)","r",0.0005,0.005,0.0005,0.001]]],
8:["  x = (time * {a}) % width;",[["a","Ball speed (steps per second)","r",0,600,10,100]]],
9:["  translate(0, height * {a});",[["a","How far down? (0 is top, 1 is bottom)","r",0,1,0.05,0.5]]],
10:["  textSize(width * {a});",[["a","Letter size","r",0.01,0.08,0.005,0.03]]],
12:["  fill({a});",[["a","Text color (0 black, 255 white)","r",0,255,5,0]]],
13:["  text(time.toFixed({a}), 50, {b});",[["a","Numbers after the dot","r",0,5,1,3],["b","Up or down (negative is up)","r",-400,400,10,-150]]],
14:["  text(round(x), {a}, {b});",[["a","Left or right","r",0,600,10,50],["b","Up or down","r",-400,400,10,150]]],
15:["  stroke({a});",[["a","Outline color (0 black, 255 white)","r",0,255,5,0]]],
18:["  translate({a}, {b});",[["a","Clock: left or right","r",0,800,10,300],["b","Clock: up or down","r",-300,300,10,-100]]],
19:["  rotate(time % 1 * {a});",[["a","How far does it turn each second?","s",["TWO_PI","PI","HALF_PI","TWO_PI * 3"],"TWO_PI"]]],
20:["  line({a}, 0, 0, 0);",[["a","Hand length","r",0,200,10,100]]],
21:["  circle(0, 0, {a});",[["a","Clock face size","r",20,400,10,200]]],
23:["  stroke({a});",[["a","Track color (0 black, 255 white)","r",0,255,5,0]]],
24:["  line(0, {a}, width, {a});",[["a","Track height (up or down)","r",-100,400,10,200]]],
26:["  fill({a}, {b}, {c});",[["a","Red","r",0,255,5,255],["b","Green","r",0,255,5,0],["c","Blue","r",0,255,5,0]]],
27:["  circle(x, {a}, {b});",[["a","Ball: up or down","r",-100,400,10,200],["b","Ball size","r",10,200,5,50]]]
};
var V={},tm,foc=0;
Object.keys(P).forEach(function(k){V[k]={};P[k][1].forEach(function(p){V[k][p[0]]=p[2]==="s"?p[4]:p[6]})});
function code(i){var s=P[i][0];P[i][1].forEach(function(p){s=s.split("{"+p[0]+"}").join(NAMED[i+"."+p[0]]||V[i][p[0]])});return s}
function upd(i){var s=code(i);L[i][0]=s;paint(i);document.querySelectorAll('.live[data-i="'+i+'"]').forEach(function(e){e.textContent=s});ta.value=declLines().concat(L.map(function(r){return r[0]})).join("\n")}
function apply(i){upd(i);clearTimeout(tm);tm=setTimeout(function(){runCode(build(cur))},250)}
function group(i,box,title){
  var d=P[i];
  var h=document.createElement("h3");h.textContent=title;box.appendChild(h);
  var lv=document.createElement("div");lv.className="live";lv.dataset.i=i;lv.textContent=code(i);box.appendChild(lv);
  d[1].forEach(function(p){
    var row=document.createElement("label");row.className="prm";
    var sp=document.createElement("span");sp.textContent=p[1];row.appendChild(sp);
    var inp,out=document.createElement("b");out.textContent=V[i][p[0]];
    if(p[2]==="s"){inp=document.createElement("select");p[3].forEach(function(o){var op=document.createElement("option");op.value=o;op.textContent=o;inp.appendChild(op)});inp.value=V[i][p[0]]}
    else{inp=document.createElement("input");inp.type="range";inp.min=p[3];inp.max=p[4];inp.step=p[5];inp.value=V[i][p[0]]}
    inp.oninput=function(){V[i][p[0]]=inp.value;out.textContent=inp.value;apply(i)};
    row.appendChild(inp);if(p[2]!=="s")row.appendChild(out);box.appendChild(row);
  });
  var rb=document.createElement("button");rb.className="ghost";rb.textContent="Put it back";
  rb.onclick=function(){P[i][1].forEach(function(p){V[i][p[0]]=p[2]==="s"?p[4]:p[6]});apply(i);show(foc)};
  box.appendChild(rb);
}
// ===== Optional AI explanations (your own key, called straight from this browser) =====
var AI={prov:"anthropic",key:"",model:""},aiCache={},DEFMODEL={anthropic:"claude-sonnet-5-5",openai:"gpt-4o-mini",gemini:"gemini-2.5-flash"};
var gp=document.getElementById("gprov"),gk=document.getElementById("gkey"),gm=document.getElementById("gmodel");
function gateShow(v){document.getElementById("gate").hidden=!v}
function aiSave(rem){try{var s=JSON.stringify(AI);sessionStorage.setItem("ce_ai",s);if(rem)localStorage.setItem("ce_ai",s);else localStorage.removeItem("ce_ai")}catch(e){}}
try{var sv=sessionStorage.getItem("ce_ai")||localStorage.getItem("ce_ai");if(sv){var so=JSON.parse(sv);AI.prov=so.prov;AI.key=so.key;AI.model=so.model}}catch(e){}
gm.value=DEFMODEL.anthropic;
if(AI.key){gp.value=AI.prov;gm.value=AI.model;gateShow(false)}
gp.onchange=function(){gm.value=DEFMODEL[gp.value]};
document.getElementById("gok").onclick=function(){
  if(!gk.value.trim()){document.getElementById("gmsg").textContent="Paste a key first, or press Skip for now.";return}
  AI.prov=gp.value;AI.key=gk.value.trim();AI.model=gm.value.trim()||DEFMODEL[gp.value];
  aiSave(document.getElementById("grem").checked);gateShow(false);aiUi(foc);
};
document.getElementById("gskip").onclick=function(){gateShow(false)};
document.getElementById("gopen").onclick=function(){gk.value=AI.key;gateShow(true)};
function aiShow(out,t){out.innerHTML="";t.split(/\n+/).forEach(function(p){if(!p.trim())return;var e=document.createElement("p");e.textContent=p;out.appendChild(e)})}
function aiAsk(i,btn,out,ck){
  out.textContent="Thinking...";btn.disabled=true;
  var code=L.map(function(r,j){return (j+1)+": "+r[0]}).join("\n").slice(0,12000);
  var sys="You are a friendly coding teacher for a child learning p5.js (JavaScript). Use simple words and short sentences. Explain only the selected line of the program. Cover what it does, why it is there, and what visibly changes in the picture if its numbers or variables change. If it defines a variable, explain why the variable was needed. Use at most 6 sentences, with no headings or lists.";
  var usr="Whole program (numbered lines):\n"+code+"\n\nExplain line "+(i+1)+": "+L[i][0];
  var an=AI.prov==="anthropic",gem=AI.prov==="gemini";
  var url=an?"https://api.anthropic.com/v1/messages":gem?"https://generativelanguage.googleapis.com/v1beta/models/"+encodeURIComponent(AI.model)+":generateContent":"https://api.openai.com/v1/chat/completions";
  var h=an?{"content-type":"application/json","x-api-key":AI.key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"}:gem?{"content-type":"application/json","x-goog-api-key":AI.key}:{"content-type":"application/json","authorization":"Bearer "+AI.key};
  var b=an?{model:AI.model,max_tokens:500,system:sys,messages:[{role:"user",content:usr}]}:gem?{systemInstruction:{parts:[{text:sys}]},contents:[{role:"user",parts:[{text:usr}]}],generationConfig:{maxOutputTokens:600}}:{model:AI.model,max_tokens:500,messages:[{role:"system",content:sys},{role:"user",content:usr}]};
  fetch(url,{method:"POST",headers:h,body:JSON.stringify(b)})
  .then(function(r){return r.json().then(function(j){if(!r.ok)throw new Error((j.error&&j.error.message)||("Error "+r.status));return j})})
  .then(function(j){var t=an?(j.content||[]).map(function(c){return c.text||""}).join(""):gem?((j.candidates&&j.candidates[0]&&j.candidates[0].content&&j.candidates[0].content.parts)||[]).map(function(c){return c.text||""}).join(""):j.choices[0].message.content;if(!t)throw new Error("The AI sent back no text.");aiCache[ck]=t;aiShow(out,t)})
  .catch(function(e){out.textContent="Could not reach the AI: "+e.message+" (If this page is open inside Claude, the browser blocks the connection. It works from GitHub Pages or when you open the files yourself.)"})
  .then(function(){btn.disabled=false});
}
function aiUi(i){
  var box=document.getElementById("aiBox");if(!box)return;box.innerHTML="";
  var b=document.createElement("button"),out=document.createElement("div"),ck=i+"|"+L[i][0]+"|"+L.length;
  out.id="ai";b.className="ghost";b.style.marginTop="8px";
  b.textContent=AI.key?"Explain this line with AI":"Add an AI key for richer explanations";
  b.onclick=function(){if(!AI.key){gk.value="";gateShow(true);return}aiAsk(i,b,out,ck)};
  box.appendChild(b);box.appendChild(out);
  if(aiCache[ck])aiShow(out,aiCache[ck]);
}
// ===== Analyze ANY code you type in the Edit tab =====
var isDemo=true,DECL={};
var BUILTIN=[/\bwidth\b/,/\bheight\b/,/millis\(\)/,/\bmouseX\b/,/\bmouseY\b/,/\bframeCount\b/,/windowWidth/,/windowHeight/];
var FN={
createCanvas:[2,'Get your drawing paper','Makes the drawing paper. The two numbers are its width and its height.'],
background:[3,'Paint the paper','Fills the whole paper with one color and wipes the old picture. 0 is black, 255 is white, and three numbers mix red, green and blue.'],
fill:[3,'Pick the inside color','The color inside the shapes you draw next. One number is a gray shade, three numbers are red, green and blue.'],
stroke:[3,'Pick the outline color','The color of the outlines and lines you draw next.'],
noFill:[3,'No color inside','Shapes you draw next are see-through, only their outlines show.'],
noStroke:[3,'No outline','Shapes you draw next have no outline.'],
strokeWeight:[3,'Pick the pen thickness','How thick the lines and outlines are.'],
colorMode:[3,'Choose how colors are mixed','Changes how color numbers are understood, for example HSB instead of red, green and blue.'],
circle:[5,'Draw a circle','The first two numbers are where the middle goes (left-right, up-down) and the last number is how wide it is.'],
ellipse:[5,'Draw an oval','The position first, then how wide and how tall.'],
rect:[5,'Draw a rectangle','The first two numbers are the corner position, then the width and the height.'],
square:[5,'Draw a square','The corner position, then the side size.'],
line:[5,'Draw a line','It starts at the first two numbers and ends at the last two.'],
point:[5,'Draw a dot','Puts one dot at the left-right and up-down spot you give.'],
triangle:[5,'Draw a triangle','Three corners, each with a left-right and an up-down number.'],
text:[5,'Write words','Writes the first thing on the paper, at the spot given by the next two numbers.'],
textSize:[5,'Pick the letter size','How big the letters are.'],
translate:[4,'Move the starting point','Slides where (0, 0) is, so everything drawn after is shifted by that much.'],
rotate:[4,'Turn the paper','Turns everything drawn after it. The angle is measured in radians, and TWO_PI is a full circle.'],
scale:[4,'Stretch the paper','Makes everything drawn after it bigger or smaller.'],
push:[4,'Save the settings','Remembers the colors, moves and turns so you can go back later with pop().'],
pop:[4,'Load the saved settings','Goes back to the settings saved by the last push().'],
random:[1,'Pick a surprise number','Gives a different random number each time.'],
noise:[1,'Pick a smooth random number','Random numbers that change gently, like a lazy cloud.'],
sin:[1,'Make a wave','sin gives a smooth wave that swings between -1 and 1 again and again.'],
cos:[1,'Make a wave','cos is like sin but starts at the top of its wave. Together sin and cos make circles.'],
map:[1,'Squeeze a number into a new range','map(value, fromLow, fromHigh, toLow, toHigh) turns a number from one scale into another.'],
constrain:[1,'Keep a number inside limits','Stops a number going under the lowest or over the highest value.'],
dist:[1,'Measure a distance','Tells how far apart two points are.'],
lerp:[1,'Glide between two numbers','Finds a number part of the way between two numbers.'],
floor:[1,'Chop off the decimals','Rounds down to a whole number.'],
round:[1,'Round a number','Rounds to the nearest whole number.'],
abs:[1,'Remove the minus','Makes a number positive.'],
millis:[1,'Read the stopwatch','Tells how many thousandths of a second have passed since the program started.'],
frameRate:[2,'Choose the speed','Sets how many pictures per second draw() makes.'],
noLoop:[2,'Draw only once','Stops draw() from repeating.'],
print:[2,'Print a message','Shows a message in the console.'],
log:[2,'Print a message','Shows a message in the console.'],
rectMode:[3,'Choose where rectangles are placed from','CENTER means the position you give is the middle of the rectangle, not its corner.']
};
var COL=[['red','Red'],['green','Green'],['blue','Blue'],['see-through','Alpha']],COLORFN={fill:1,stroke:1,background:1};
var XY=[['left-right spot','X'],['up-down spot','Y']];
var ARG={circle:XY.concat([['size','Size']]),ellipse:XY.concat([['width','Width'],['height','Height']]),rect:XY.concat([['width','Width'],['height','Height']]),square:XY.concat([['size','Size']]),line:[['start left-right','StartX'],['start up-down','StartY'],['end left-right','EndX'],['end up-down','EndY']],point:XY,text:[null].concat(XY),textSize:[['letter size','Size']],strokeWeight:[['pen thickness','Thickness']],translate:[['move left-right','X'],['move up-down','Y']],rotate:[['turn angle','Angle']],scale:[['stretch amount','Amount']],createCanvas:[['paper width','Width'],['paper height','Height']],frameRate:[['pictures per second','Rate']],fill:COL,stroke:COL,background:COL};
function calls(s){var re=/\b([A-Za-z_]\w*)\s*\(/g,f,o=[];while((f=re.exec(s)))if(FN.hasOwnProperty(f[1])&&o.indexOf(f[1])<0)o.push(f[1]);return o}
function analyze(s0){
  var s=s0.trim(),m,cs=calls(s),more=function(skip){var o=cs.filter(function(c){return c!==skip});return o.length?" It also uses "+o.map(function(c){return c+"() ("+FN[c][2]+")"}).join(" and ")+"":""};
  if(/^\/\//.test(s))return[2,"A comment","Notes for people. The computer ignores everything after the // marks."];
  if(/^\}/.test(s))return[2,"End of a block","The } closes the block that started with a {."];
  if(m=s.match(/^function\s+(\w+)/))return[2,"The recipe called "+m[1],EVT.hasOwnProperty(m[1])?EVT[m[1]]:"A recipe (function) is a named set of steps you can use again and again."];
  if(m=s.match(/^(?:let|const|var)\s+(\w+)/))return[1,"Make a box called "+m[1],"A box with a name that remembers a value. "+m[1]+" starts as "+startsAs(s)+"."+more("")];
  if(/^(if|else)\b/.test(s))return[2,"Make a decision","The lines inside run only when the condition in the brackets is true."+more("")];
  if(m=s.match(/^for\s*\(\s*(?:let|var)?\s*(\w+)\s*=\s*([^;]+);\s*([^;]+);\s*([^)]+)\)/))return[2,'Repeat with a counter','The counter '+m[1]+' starts at '+m[2].trim()+'. The lines inside keep running while '+m[3].trim()+' is true, and after each round '+m[4].trim()+' runs to move the counter on. So the lines inside run once for every value of '+m[1]+'.'+more('')];
  if(/^switch\s*\(/.test(s))return[2,'Choose between cases','switch looks at the value in the brackets and jumps to the case that matches it.'+more('')];
  if(m=s.match(/^case\s+([^:]+):/))return[2,'If the value is '+m[1].trim(),'When the switch value equals '+m[1].trim()+', the lines under this case run until break.'+more('')];
  if(/^break\s*;?/.test(s))return[2,'Stop here','break leaves the switch or loop so the other cases are skipped.'];
  if(m=s.match(/^(\w+(?:\[[^\]]*\])*)\.push\(/))return[1,'Add to the list '+m[1],'push puts a new item at the end of the list '+m[1]+'. Here we add: '+s.replace(/^.*?\.push\(/,'').replace(/\)\s*;?$/,'')+'.'];
  if(m=s.match(/^(\w+)\s*(\+\+|--)/))return[1,(m[2]==='++'?'Add 1 to ':'Take 1 from ')+m[1],m[1]+m[2]+' changes the box '+m[1]+' by 1 each time this line runs, so it works as a counter.'];
  if(/^(for|while)\b/.test(s))return[2,"Repeat","The lines inside run again and again until the condition stops being true."+more("")];
  if(cs.length&&s.indexOf(cs[0]+"(")===0){var d=FN[cs[0]];return[d[0],d[1],d[2]+more(cs[0])]}
  if(m=s.match(/^(\w+(?:\[[^\]]*\])*)\s*([-+*\/]?=)(?!=)/))return[1,m[1].indexOf('[')>0?'Put a value into '+m[1]:'Change the box '+m[1],(m[1].indexOf('[')>0?'Stores a new value in one spot of a list: ':'Puts a new value into '+m[1]+': ')+s.replace(/;$/,'')+'.'+more('')];
  if(cs.length){var d2=FN[cs[0]];return[d2[0],d2[1],d2[2]+more(cs[0])]}
  return[2,"A line of code","This line runs one more step of your program."];
}
var EVT={setup:'setup runs one time when the program starts.',draw:'draw repeats about 60 times every second, like pages in a flip book.',mousePressed:'mousePressed runs one time every time you press the mouse button. Click inside the preview to try it.',mouseClicked:'mouseClicked runs after you click the mouse.',keyPressed:'keyPressed runs one time each time you press a key.',windowResized:'windowResized runs when the window changes size.'};
var HINT={grid:'A grid remembers one value for every cell, like squares on graph paper.',cols:'How many columns (left-right cells) the grid has.',rows:'How many rows (up-down cells) the grid has.',cellSize:'How big each square cell is on the screen.',counter:'A counter that remembers how many steps have happened so far.',rules:'A lookup table: you give it a key and it gives back the matching answer, like a dictionary.',size:'The size used to draw one cell.',blink:'A number that makes the little lights flash on and off.',left:'The value of the neighbour on the left.',center:'The value of the cell right above.',right:'The value of the neighbour on the right.',speed:'How fast something moves.',x:'A left-right position.',y:'An up-down position.',angle:'How far something is turned.',score:'It keeps the score.',time:'It remembers how much time has passed.'};
function depth(s){var d=0;for(var k=0;k<s.length;k++){var c=s.charAt(k);if('([{'.indexOf(c)>=0)d++;else if(')]}'.indexOf(c)>=0)d--}return d}
function mergeLines(raw){
  var out=[],i=0;
  while(i<raw.length){
    var s=raw[i];
    if(/[(\[{]\s*$/.test(s)&&!/^\s*(function|if|for|while|switch|else|class|\})/.test(s)&&!/\)\s*\{\s*$/.test(s)){
      var j=i;while(depth(s)>0&&j+1<raw.length){j++;s+="\n"+raw[j]}
      out.push(s);i=j+1;continue;
    }
    out.push(s);i++;
  }
  return out;
}
function scopes(){var d=0,cur="",out=[];L.forEach(function(r){var s=r[0],m=s.match(/^function\s+(\w+)/);if(d<=0)cur=m?m[1]:"";out.push(d>0||m?cur:"");d+=depth(s);if(d<0)d=0});return out}
function startsAs(s){var v=((s.match(/=\s*([^;]+)/)||[0,'nothing'])[1]).trim();if(v.charAt(0)==='{')return 'a lookup table of key and value pairs';if(v==='[]')return 'an empty list that you fill later';if(v.charAt(0)==='[')return 'a list of values';return v.length>40?v.slice(0,40)+'...':v}
function depsOf(nm){var re=new RegExp("\\b"+nm+"\\b"),o={};L.forEach(function(r){var d=r[0].match(/^\s*(?:let|const|var)?\s*(\w+)\s*=(?!=)\s*([^]*)$/);if(d&&d[1]!==nm&&DECL[d[1]]&&re.test(d[2]))o[d[1]]=1});return Object.keys(o)}
function whyText(nm,i,fnAt,over){
  var re=new RegExp("\\b"+nm+"\\b"),setRe=new RegExp("^\\s*"+nm+"\\s*(?:[-+*\\/]?=(?!=)|\\+\\+|--)"),uses=[],fns={},sets=[],deps={};
  L.forEach(function(r,j){
    var s=r[0];
    if(j!==i&&re.test(s)){uses.push(j+1);fns[fnAt[j]?fnAt[j]+"()":"the main program"]=1;if(setRe.test(s))sets.push(j+1)}
    var d=s.match(/^\s*(?:let|const|var)?\s*(\w+)\s*=(?!=)\s*([^]*)$/);
    if(d&&j!==i&&d[1]!==nm&&DECL[d[1]]&&re.test(d[2]))deps[d[1]]=1;
  });
  var t="<b>Why it is here:</b> "+(HINT.hasOwnProperty(nm)?HINT[nm]+" ":"");
  t+=fnAt[i]?"It is made inside "+fnAt[i]+"(), so only that recipe can use it, and it starts fresh each time "+fnAt[i]+"() runs.":"It is defined at the very top so every recipe can share it. A box made inside a recipe cannot be seen by the others.";
  t+=uses.length?" It is used on line"+(uses.length>1?"s ":" ")+uses.slice(0,8).join(", ")+(uses.length>8?"...":"")+" (in "+Object.keys(fns).join(", ")+").":" Nothing else uses it yet.";
  if(sets.length)t+=" Its value is changed on line"+(sets.length>1?"s ":" ")+sets.slice(0,6).join(", ")+".";
  var dk=Object.keys(deps);if(dk.length)t+=" Other boxes are worked out from it ("+dk.join(", ")+"), so changing it changes them too.";
  if(over)t+=" <b>If you change its starting number:</b> nothing happens, because line "+over+" sets it again. Change the numbers on that line instead.";
  return t;
}
function argInfo(s,pos){
  var d=0,i=pos-1,idx=0,c,none={fn:"",idx:0,n:0};
  for(;i>=0;i--){c=s[i];if(c===")"||c==="]")d++;else if(c==="("||c==="["){if(d===0)break;d--}else if(c===","&&d===0)idx++}
  if(i<0||s[i]!=="(")return none;
  var m=s.slice(0,i).match(/([A-Za-z_]\w*)\s*$/);
  if(!m||/^(if|for|while|switch|return|else)$/.test(m[1]))return none;
  var n=1;d=0;
  for(var j=i+1;j<s.length;j++){c=s[j];if(c==="("||c==="[")d++;else if(c===")"||c==="]"){if(d===0)break;d--}else if(c===","&&d===0)n++}
  return{fn:m[1],idx:idx,n:n};
}
function rng(v,lab){
  var a=Math.abs(v),col=/red|green|blue|shade|see-through/.test(lab),max,step;
  if(col){max=255;step=5}
  else if(!Number.isInteger(v)){if(a<0.1){max=a*5||1;step=a/10||0.01}else if(a<=1){max=1;step=0.01}else{max=Math.ceil(a*3);step=0.1}}
  else if(a<=10){max=20;step=1}
  else if(a<=300){max=Math.max(400,a*2);step=1}
  else{max=a*3;step=10}
  return[v<0?-max:0,max,step];
}
function makeParams(i,used){
  var s=L[i][0];if(/^\s*\/\//.test(s)||s.split("\n").length>8)return;
  var re=/(?<![\w.$])-?\d+(?:\.\d+)?(?![\w.])/g,m,ps=[],tpl="",last=0,keys="abcdefgh";
  var dm=s.match(/^\s*(?:let|const|var)\s+(\w+)/),am=s.match(/^\s*(\w+)\s*[-+*\/]?=/);
  VN[i]=[];V[i]={};
  while(ps.length<8&&(m=re.exec(s))){
    var k=keys[ps.length],v=parseFloat(m[0]),inf=argInfo(s,m.index),lab="number",nm=null;
    if(inf.fn){var arr=ARG[inf.fn];if(arr&&COLORFN[inf.fn]&&inf.n===1)arr=[['shade (0 black, 255 white)','Shade']];var e=arr&&arr[inf.idx];
      if(e){lab=e[0]+" of "+inf.fn+"()";nm=inf.fn+e[1]}else{lab="number in "+inf.fn+"()";nm=inf.fn+"Number"+(inf.idx+1)}}
    else if(dm)lab="starting value of "+dm[1];
    else if(am){lab="number used in "+am[1];nm=am[1]+"Amount"}
    if(nm){used[nm]=(used[nm]||0)+1;if(used[nm]>1)nm+=used[nm]}
    var r=rng(v,lab);
    ps.push([k,lab,"r",r[0],r[1],r[2],v]);V[i][k]=v;
    tpl+=s.slice(last,m.index)+"{"+k+"}";last=m.index+m[0].length;
    if(nm){VN[i].push([k,nm]);EFF[nm]="Changes the "+lab+". Drag its slider and watch what happens."}
  }
  if(!ps.length){delete V[i];delete VN[i];return}
  P[i]=[tpl+s.slice(last),ps];
  if(!VN[i].length)delete VN[i];
}
function rebuildList(){
  codeEl.innerHTML="";
  L.forEach(function(r,i){
    var b=document.createElement("button");b.className="ln k"+r[1];b.type="button";
    b.innerHTML='<span class="n">'+(i+1)+'</span><span class="t"></span>';
    b.onclick=function(){show(i)};codeEl.appendChild(b);paint(i);
  });
}
function loadCode(src){
  var lines=src.split("\n").map(function(s){return s.replace(/\s+$/,"")}).filter(function(s){return s.trim()});
  lines=mergeLines(lines);
  if(!lines.length){log("Type some code first!","err");return}
  stopAuto();isDemo=false;
  SRC=lines.join("\n");NAMED={};P={};V={};VN={};VIS={};NOTE={};PAT={};DECL={};
  EFF={"width":"How wide the paper is, in pixels. Anything placed using width changes when the paper is wider.","height":"How tall the paper is, in pixels.","millis()":"Thousandths of a second since the program started. It only goes up, like a stopwatch.","windowWidth":"The width of your browser window.","windowHeight":"The height of your browser window.","mouseX":"Where your mouse is, from left to right. Move your mouse over the picture and watch it change.","mouseY":"Where your mouse is, from top to bottom.","frameCount":"Counts the pages of the flip book: 1, 2, 3... about 60 every second."};
  L=lines.map(function(s){var a=analyze(s);return [s,a[0],a[1],a[2]]});
  var fnAt=scopes();
  L.forEach(function(r){var m=r[0].match(/^\s*(?:let|const|var)\s+(\w+)/);if(m)DECL[m[1]]=1;var f=r[0].match(/for\s*\(\s*(?:let|var)\s+(\w+)/);if(f&&!DECL[f[1]])DECL[f[1]]="A counter for the loop. It goes up each time around, so the lines inside work on the next item."});
  var used={};
  L.forEach(function(r,i){makeParams(i,used)});
  var over={};
  L.forEach(function(r,i){var m=r[0].match(/^\s*(?:let|const|var)\s+(\w+)/);if(!m||fnAt[i])return;var nm=m[1];
    for(var j=0;j<L.length;j++){if(j===i||fnAt[j]!=="setup")continue;var mm=L[j][0].match(new RegExp("^\\s*"+nm+"\\s*=(?!=)\\s*([^;]*)"));if(mm&&!new RegExp("\\b"+nm+"\\b").test(mm[1])){over[i]=j+1;break}}
    if(over[i]&&P[i]){delete P[i];delete VN[i];delete V[i];NOTE[i]="Changing this starting number shows nothing, because line "+over[i]+" (in setup) gives "+nm+" a new value right away. Play with the numbers on that line instead!"}});
  L.forEach(function(r,i){
    var m=r[0].match(/^\s*(?:let|const|var)\s+(\w+)/);
    if(m){var w=whyText(m[1],i,fnAt,over[i]);r[3]+="<br><br>"+w;DECL[m[1]]=w.replace(/<[^>]+>/g,"")}
    var cc=r[0].match(/^\s*(\w+)\(\)\s*;?\s*$/);
    if(cc&&!FN.hasOwnProperty(cc[1])){var fi=-1;L.forEach(function(q,j){if(new RegExp("^function\\s+"+cc[1]+"\\b").test(q[0]))fi=j});if(fi>=0){r[1]=2;r[2]="Run the recipe "+cc[1];r[3]="Jumps to the recipe "+cc[1]+" (line "+(fi+1)+"), runs all of its steps, then comes back here. This is why the recipe was written: it can be used again and again just by writing its name."}}
    var as=r[0].match(/^\s*(\w+)\s*=(?!=)/);
    if(as&&DECL[as[1]]){var dp=depsOf(as[1]);r[3]+="<br><br><b>What happens if this changes:</b> If you change the numbers on this line, "+as[1]+" changes"+(dp.length?", and so do "+dp.join(" and ")+", which are worked out from it":"")+". Try the slider and watch the preview."}
    var f=r[0].match(/^function\s+(\w+)/);
    if(f&&!EVT.hasOwnProperty(f[1])){var cl=[],cr=new RegExp("\\b"+f[1]+"\\s*\\(");L.forEach(function(q,j){if(j!==i&&!/^function\s/.test(q[0])&&cr.test(q[0]))cl.push((j+1)+" (in "+(fnAt[j]?fnAt[j]+"()":"the main program")+")")});r[3]+="<br><br><b>Where it is used:</b> "+(cl.length?"called on line"+(cl.length>1?"s ":" ")+cl.join(", ")+".":"not called anywhere yet, so it never runs.")}
  });
  L.forEach(function(r,i){var m=r[0].match(/^\s*(?:let|const|var)\s+(\w+)/);if(!m||!P[i])return;var nm=new RegExp("\\b"+m[1]+"\\b");VIS[i]=i;for(var j=i+1;j<L.length;j++)if(nm.test(L[j][0])){VIS[i]=j;break}});
  var pats=Object.keys(DECL).map(function(n){return new RegExp("\\b"+n+"\\b")}).concat(BUILTIN);
  L.forEach(function(r,i){PAT[i]=pats.filter(function(re){return re.test(r[0])})});
  rebuildList();ta.value=SRC;
  mode("learn");sel(L.length-1);
  log("Analyzed "+L.length+" lines of your code. Use Back a line and Run next line to step through it.","info");
}
// Number slots: numbers in a line that can become a variable when clicked
function slots(i){
  var d=P[i];if(!d||!VN[i])return [];
  var re=/\{(\w)\}/g,m,last=0,pos=0,res=[],seen={};
  while((m=re.exec(d[0]))){
    pos+=m.index-last;
    var k=m[1],nm=NAMED[i+"."+k],v=String(nm||V[i][k]);
    var vn=VN[i].filter(function(q){return q[0]===k})[0];
    if(vn&&!nm&&!seen[k]){seen[k]=1;res.push({a:pos,b:pos+v.length,key:k,name:vn[1]})}
    pos+=v.length;last=re.lastIndex;
  }
  return res;
}
function items(i){
  var w=toks(i).map(function(c){return [c[0],c[1],null]});
  slots(i).forEach(function(s){if(!w.some(function(c){return s.a<c[1]&&s.b>c[0]}))w.push([s.a,s.b,s])});
  return w.sort(function(p,q){return p[0]-q[0]});
}
// Hover tips: what each word does to the picture
var EFF={
"time":"The stopwatch in seconds. It drives everything that moves: the ball, the spinning hand and the number on the screen. If time stopped, the whole picture would freeze.",
"x":"The left-right spot of the red ball. A bigger x puts the ball further to the right. At the edge of the screen it goes back to 0, so the ball loops around.",
"width":"How wide the paper is. A wider paper means a longer track, a longer trip for the ball before it jumps back, and bigger letters too.",
"height":"How tall the paper is. The middle line is half of this, so a taller paper moves the whole picture lower.",
"millis()":"Thousandths of a second since the program started. It is the heartbeat of the picture: it only goes up, and everything that moves is built from it.",
"windowWidth":"The width of your browser window. A wider window makes a wider paper the next time the picture restarts.",
"windowHeight":"The height of your browser window. A taller window makes a taller paper the next time the picture restarts.",
"toFixed":"The seconds written as text. The number in the brackets is how many digits show after the dot, so more digits means a longer number on the screen.",
"round(x)":"The ball position with the decimals chopped off. This is the whole number written under the clock.",
"time % 1":"Counts from 0 up to 1 and starts over every second. That is why the clock hand turns once and jumps back to the start each second.",
"PI":"How far the hand turns each second. TWO_PI is a full circle, PI is half a circle and HALF_PI is a quarter.",
"ballSpeed":"Bigger means the red ball races across faster. 0 makes it stop. Click x to watch its numbers change.",
"clockSpeed":"Bigger makes the whole clock run faster, so the ball and the hand speed up and the seconds number races.",
"paperBrightness":"0 is a black paper and 255 is a white paper. Black drawings are hard to see on a dark paper.",
"moveDown":"Slides the whole picture down. 0 puts the middle line at the very top and 1 puts it at the bottom.",
"letterSize":"A bigger number makes bigger letters for the seconds and the ball position.",
"textShade":"0 gives black letters and 255 gives white letters, which you cannot see on a white paper.",
"secondsHeight":"A negative number moves the seconds up and a positive number moves them down.",
"clockLeft":"A bigger number slides the spinning clock to the right.",
"clockUp":"A negative number moves the clock up and a positive number moves it down.",
"handLength":"Makes the clock hand longer or shorter. 100 just touches the edge of the clock circle.",
"clockSize":"The size of the clock circle. Bigger makes a bigger clock face.",
"trackHeight":"Moves the track line up or down. The ball will not follow it unless ballHeight matches!",
"ballRed":"How much red is in the ball color, from 0 to 255. Mix it with green and blue like colored lights.",
"ballGreen":"How much green is in the ball color, from 0 to 255. Red plus green makes yellow!",
"ballBlue":"How much blue is in the ball color, from 0 to 255. Try 255 with the red at 0 for a blue ball.",
"ballHeight":"Moves the ball up or down. Match it to trackHeight to keep the ball on the track.",
"ballSize":"A bigger number makes a bigger ball."
};
function effectFor(t){if(EFF[t])return EFF[t];if(DECL[t])return typeof DECL[t]==="string"?DECL[t]:"A box named "+t+" that your code uses. Change its value and everything that uses it changes.";if(/^time\.toFixed/.test(t))return EFF.toFixed;if(/PI$/.test(t))return EFF.PI;return ""}
var tipEl=null;
function hideTip(){if(tipEl)tipEl.hidden=true}
function tipOn(el,text){
  if(!text)return;
  if(!tipEl){tipEl=document.createElement("div");tipEl.id="tip";tipEl.hidden=true;document.body.appendChild(tipEl)}
  var t2;
  function on(){clearTimeout(t2);tipEl.textContent=text;tipEl.hidden=false;var r=el.getBoundingClientRect(),w=tipEl.offsetWidth,h=tipEl.offsetHeight,top=r.bottom+6;if(top+h>window.innerHeight-8)top=Math.max(8,r.top-h-6);tipEl.style.left=Math.max(8,Math.min(window.innerWidth-w-8,r.left))+"px";tipEl.style.top=top+"px"}
  el.addEventListener("mouseenter",on);el.addEventListener("mouseleave",hideTip);
  el.addEventListener("click",function(){on();t2=setTimeout(hideTip,4500)});
}
// Variables: turn a number into a named variable with its own slider
var NAMED={};
var VN={6:[["a","paperBrightness"]],7:[["a","clockSpeed"]],8:[["a","ballSpeed"]],9:[["a","moveDown"]],10:[["a","letterSize"]],12:[["a","textShade"]],13:[["b","secondsHeight"]],18:[["a","clockLeft"],["b","clockUp"]],20:[["a","handLength"]],21:[["a","clockSize"]],24:[["a","trackHeight"]],26:[["a","ballRed"],["b","ballGreen"],["c","ballBlue"]],27:[["a","ballHeight"],["b","ballSize"]]};
function declLines(){return Object.keys(NAMED).map(function(k){var a=k.split(".");return "let "+NAMED[k]+" = "+V[a[0]][a[1]]+";"})}
function nameRes(i){return Object.keys(NAMED).filter(function(k){return +k.split(".")[0]===i}).map(function(k){return new RegExp("\\b"+NAMED[k]+"\\b")})}
function mkvar(i,key,name){NAMED[i+"."+key]=name;apply(i);mkBtns(i);log("Made a variable: let "+name+" = "+V[i][key]+";","info")}
function unvar(k){var i=+k.split(".")[0];log("Put the number back in place of "+NAMED[k],"info");delete NAMED[k];apply(i);mkBtns(foc)}
function renderVars(){
  var box=document.getElementById("vars"),ks=Object.keys(NAMED);
  hideTip();box.innerHTML="";box.hidden=!ks.length;if(!ks.length)return;
  var h=document.createElement("div");h.className="vh";h.textContent="My variables (added to the top of your program). Drag a slider to change one.";box.appendChild(h);
  ks.forEach(function(k){
    var a=k.split("."),i=+a[0],key=a[1],p=P[i][1].filter(function(q){return q[0]===key})[0];
    var row=document.createElement("div"),cd=document.createElement("code"),inp=document.createElement("input"),del=document.createElement("button");
    row.className="vrow";cd.textContent="let "+NAMED[k]+" = "+V[i][key]+";";tipOn(cd,effectFor(NAMED[k]));
    inp.type="range";inp.min=p[3];inp.max=p[4];inp.step=p[5];inp.value=V[i][key];inp.setAttribute("aria-label",NAMED[k]);
    inp.oninput=function(){V[i][key]=inp.value;cd.textContent="let "+NAMED[k]+" = "+inp.value+";";apply(i)};
    del.textContent="X";del.title="Put the number back";del.setAttribute("aria-label","Put the number back for "+NAMED[k]);del.onclick=function(){unvar(k)};
    row.appendChild(cd);row.appendChild(inp);row.appendChild(del);box.appendChild(row);
  });
}
function mkBtns(i){
  renderVars();
  var box=document.getElementById("mkvars");if(!box)return;box.innerHTML="";
  (VN[i]||[]).forEach(function(v){
    var k=i+"."+v[0];if(NAMED[k])return;
    var b=document.createElement("button");b.className="ghost mk";
    b.textContent="Turn "+V[i][v[0]]+" into a variable called "+v[1];
    tipOn(b,effectFor(v[1]));b.onclick=function(){mkvar(i,v[0],v[1])};box.appendChild(b);
  });
  if(box.children.length){
    var p=document.createElement("p");p.className="mute";
    p.textContent="A variable is a box with a name. Turn the number into one, then drag its slider in My variables to see what changes."+(VIS[i]!==undefined&&VIS[i]>cur?" The picture will not show this yet (it shows on line "+(VIS[i]+1)+"), but click the dotted words to watch the numbers change in the console!":"");
    box.insertBefore(p,box.firstChild);
  }
}
// Watching: click a dotted word in the code to see its live value in the console
var PAT={0:[/\btime\b/],1:[/\bx\b/],3:[/windowWidth/,/windowHeight/],7:[/millis\(\)/,/\btime\b/],8:[/\bx\b/,/\btime\b/,/\bwidth\b/],9:[/\bheight\b/],10:[/\bwidth\b/],13:[/time\.toFixed\(\d+\)/],14:[/round\(x\)/],19:[/time % 1/,/\b(?:TWO_PI|HALF_PI|PI)\b/],24:[/\bwidth\b/],27:[/\bx\b/]};
var WT={},watchTimer=null;
function toks(i){
  var t=L[i][0],ch=[];
  (PAT[i]||[]).concat(nameRes(i)).forEach(function(re){var m=re.exec(t);if(!m)return;var a=m.index,b=a+m[0].length;if(ch.some(function(c){return a<c[1]&&b>c[0]}))return;ch.push([a,b])});
  return ch.sort(function(p,q){return p[0]-q[0]});
}
function paint(i){
  var t=L[i][0],el=codeEl.children[i].querySelector(".t"),pos=0;
  hideTip();el.textContent="";
  items(i).forEach(function(c){
    if(c[0]>pos)el.appendChild(document.createTextNode(t.slice(pos,c[0])));
    var s=document.createElement("span");s.className="tok";s.textContent=t.slice(c[0],c[1]);if(c[2]){var sl=c[2];s.className="tok num";tipOn(s,"Turn "+s.textContent+" into a variable called "+sl.name+"? Click it to do it! "+effectFor(sl.name));s.onclick=function(ev){ev.stopPropagation();show(i);mkvar(i,sl.key,sl.name)}}
    else{tipOn(s,(effectFor(s.textContent)||"")+" (Click to watch its value in the console.)");
    s.onclick=function(ev){ev.stopPropagation();show(i);watch(s.textContent)}}
    el.appendChild(s);pos=c[1];
  });
  if(pos<t.length)el.appendChild(document.createTextNode(t.slice(pos)));
}
function probeSrc(){
  var seen={},parts=[];
  L.forEach(function(r,i){toks(i).forEach(function(c){var e=L[i][0].slice(c[0],c[1]);if(!seen[e]){seen[e]=1;parts.push(JSON.stringify(e)+":function(){return ("+e+")}")}})});
  return "window.__P={"+parts.join(",")+"};";
}
function frameHook(){
  window.addEventListener("message",function(e){
    var d=e.data;if(!d||d.t!=="eval")return;
    var v,ok=true;
    try{v=window.__P[d.expr]()}catch(err){ok=false;v="not available yet ("+(err&&err.message||err)+")"}
    if(ok){if(typeof v==="number")v=Math.round(v*1000)/1000;else if(typeof v==="string")v='"'+v+'"'}
    parent.postMessage({t:"val",expr:d.expr,v:String(v),ok:ok},"*");
  });
}
function ask(){if(!pv.contentWindow)return;Object.keys(WT).forEach(function(k){pv.contentWindow.postMessage({t:"eval",expr:k},"*")})}
function watch(expr){
  if(WT[expr]){log(expr+" is already being watched. Use its X button to remove it.","info");return}
  var box=document.getElementById("watch"),row=document.createElement("div"),txt=document.createElement("span"),del=document.createElement("button");
  row.className="wrow";txt.textContent="Watching "+expr+"...";
  del.textContent="X";del.title="Stop watching "+expr;del.setAttribute("aria-label","Stop watching "+expr);
  del.onclick=function(){row.remove();delete WT[expr];log("Stopped watching "+expr,"info");if(!Object.keys(WT).length){box.hidden=true;clearInterval(watchTimer);watchTimer=null}};
  row.appendChild(txt);row.appendChild(del);box.appendChild(row);box.hidden=false;
  WT[expr]={txt:txt,n:0};
  log("Watching "+expr+" (updates 2 times a second)","info");
  ask();if(!watchTimer)watchTimer=setInterval(ask,500);
}
// VIS[line] = the first line where you can SEE what that line's controls do
var VIS={3:6,6:6,7:13,8:14,9:13,10:13,12:13,13:13,14:14,15:20,18:20,19:20,20:20,21:21,23:24,24:24,26:27,27:27};
var NOTE={0:"Changing this number shows nothing, because line 8 sets time again 60 times every second. To change the clock, wait until line 8 and play with the clock speed when you reach line 14!",1:"Same here: line 9 sets x again right away, so a new starting number is never seen. Play with the ball speed when you reach line 15!"};
function play(i){
  var box=document.getElementById("play");
  if(!P[i]){box.innerHTML='<p class="mute">'+(NOTE[i]||"Nothing to change on this line. Just read it and move on!")+'</p>';return}
  var v=VIS[i];
  if(cur<v){
    box.innerHTML='<p class="mute">You cannot see this change yet, because nothing on the paper uses it so far. Keep running lines until line '+(v+1)+', then come back and play!</p>';
    var gb=document.createElement("button");gb.className="ghost";gb.textContent="Run until line "+(v+1);gb.onclick=function(){sel(v)};box.appendChild(gb);return}
  box.innerHTML="";
  group(i,box,"Play with this line");
  Object.keys(P).forEach(function(k){k=+k;if(k!==i&&VIS[k]===i&&i<=cur)group(k,box,"Line "+(k+1)+" changes this too")});
}
function show(i){
  foc=i;var els=codeEl.children;
  for(var j=0;j<els.length;j++)els[j].classList.toggle("sel",j===i);
  var r=L[i];
  document.getElementById("explain").innerHTML='<h2>Line '+(i+1)+': '+r[2]+'</h2><p>'+r[3]+'</p>'+(r[4]?'<p class="try"><b>Try it:</b> '+r[4]+(VN[i]?' Hover over the number in the code and click it to turn it into a variable (or use the buttons below).':'')+'</p>':'')+'<div id="mkvars"></div><div id="play"></div><div id="aiBox"></div>';
  play(i);mkBtns(i);aiUi(i);
}
function build(n){
  var s=declLines().concat(L.slice(0,n+1).map(function(r){return r[0]})),open=0,pu=0;
  s.forEach(function(l){open+=(l.match(/\{/g)||[]).length-(l.match(/\}/g)||[]).length;if(/push\(\)/.test(l))pu++;if(/pop\(\)/.test(l))pu--});
  for(;pu>0;pu--)s.push("  pop();");
  for(;open>0;open--)s.push("}");
  return s.join("\n");
}
function sel(i){
  cur=Math.max(0,Math.min(L.length-1,i));
  var els=codeEl.children;
  for(var j=0;j<els.length;j++){els[j].hidden=j>cur;els[j].classList.toggle("sel",j===cur)}
  els[cur].scrollIntoView({block:"nearest"});
  var last=cur===L.length-1;
  document.getElementById("more").textContent=last?"That is the whole program. You did it!":"...the rest of the code is hidden until you run it";
  document.getElementById("next").textContent=last?"Finished!":"Run next line";
  var r=L[cur];show(cur);
  log("Ran lines 1 to "+(cur+1)+": "+r[0].trim(),"info");
  runCode(build(cur));
}
document.getElementById("prev").onclick=function(){stopAuto();mode("learn");sel(cur-1)};
document.getElementById("next").onclick=function(){stopAuto();mode("learn");sel(cur+1)};
document.getElementById("top").onclick=function(){stopAuto();sel(0)};
var timer=null,au=document.getElementById("auto");
function stopAuto(){if(timer){clearInterval(timer);timer=null}au.textContent="Auto-play"}
au.onclick=function(){if(timer){stopAuto();return}if(cur>=L.length-1)sel(0);au.textContent="Pause";timer=setInterval(function(){if(cur>=L.length-1){stopAuto();return}sel(cur+1)},4000)};

var con=document.getElementById("con");
function log(m,c){var d=document.createElement("div");if(c)d.className=c;d.textContent="> "+m;con.appendChild(d);con.scrollTop=con.scrollHeight}
document.getElementById("clr").onclick=function(){con.innerHTML=""};

var ta=document.getElementById("ta"),pv=document.getElementById("pv");
ta.value=SRC;
function runIt(){log("Running your code...","info");runCode(ta.value)}
function runCode(src){
  var code=src.replace(/<\/script/gi,"<\\/script");
  var hook='window.onerror=function(m,s,l){parent.postMessage({t:"err",m:String(m)+(l?" (line "+l+")":"")},"*");return true};'+
    '["log","warn","error"].forEach(function(k){var o=console[k];console[k]=function(){parent.postMessage({t:k==="log"?"log":"err",m:[].slice.call(arguments).join(" ")},"*");o.apply(console,arguments)}});';
  pv.srcdoc='<!DOCTYPE html><html><head><style>html,body{margin:0;overflow:hidden;background:#cfc8e6}</style></head><body>'+
    '<script>'+hook+'('+frameHook.toString()+')();<\/script>'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js"><\/script>'+
    '<script>'+code+'<\/script>'+'<script>'+probeSrc()+'<\/script></body></html>';
}
window.addEventListener("message",function(e){
  if(e.source!==pv.contentWindow||!e.data)return;
  if(e.data.t==="val"){
    var w=WT[e.data.expr];if(!w)return;
    w.txt.textContent=e.data.expr+" = "+e.data.v;
    if(w.n<8){w.n++;log(e.data.expr+" = "+e.data.v+(w.n===8?"   (still live in the yellow bar above)":""),e.data.ok?"val":"err")}
    return}
  log(String(e.data.m).slice(0,300),e.data.t==="err"?"err":"");
});
document.getElementById("run").onclick=function(){var t=ta.value;if(isDemo&&t.trim()===SRC.trim()){mode("learn");sel(cur);return}loadCode(t)};
document.getElementById("demo").onclick=function(){location.reload()};
document.getElementById("rerun").onclick=function(){if(document.getElementById("edit").hidden)runCode(build(cur));else runIt()};
document.getElementById("reset").onclick=function(){ta.value=SRC;runIt();log("Back to the original code.","info")};

function mode(m){
  document.getElementById("learn").hidden=m!=="learn";
  document.getElementById("edit").hidden=m!=="edit";
  document.getElementById("tLearn").className=m==="learn"?"on":"ghost";
  document.getElementById("tEdit").className=m==="edit"?"on":"ghost";
}
document.getElementById("tLearn").onclick=function(){mode("learn")};
document.getElementById("tEdit").onclick=function(){mode("edit")};
log("Hi! Run the code line by line. Click a word with a dotted underline to watch its value here.","info");
L.forEach(function(r,i){paint(i)});
var wrap=document.getElementById("pvwrap");
document.getElementById("sS").onclick=function(){wrap.style.height="220px"};
document.getElementById("sM").onclick=function(){wrap.style.height="340px"};
document.getElementById("sL").onclick=function(){wrap.style.height="560px"};
document.getElementById("sW").onclick=function(){var on=document.querySelector("main").classList.toggle("wide");this.textContent=on?"Side by side":"Wide"};
var rz=null,firstSize=true;
if(window.ResizeObserver)new ResizeObserver(function(){if(firstSize){firstSize=false;return}clearTimeout(rz);rz=setTimeout(function(){log("Preview resized, running again...","info");document.getElementById("edit").hidden?runCode(build(cur)):runIt()},450)}).observe(wrap);
sel(0);
