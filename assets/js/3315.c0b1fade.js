"use strict";(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["3315"],{79068:function(t,e,r){r.d(e,{A:function(){return i}});var a=r(74146),i=class{constructor(t){this.init=t,this.records=this.init()}static{(0,a.eW)(this,"ImperativeState")}reset(){this.records=this.init()}}},18010:function(t,e,r){function a(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}r.d(e,{A:function(){return a}}),(0,r(74146).eW)(a,"populateCommonDb")},17321:function(t,e,r){r.d(e,{diagram:function(){return tp}});var a=r(18010),i=r(79068),o=r(68394),c=r(74146),n=r(3194),s=r(27818),h={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},d=c.vZ.gitGraph,l=(0,c.eW)(()=>(0,o.Rb)({...d,...(0,c.iE)().gitGraph}),"getConfig"),$=new i.A(()=>{let t=l(),e=t.mainBranchName,r=t.mainBranchOrder;return{mainBranchName:e,commits:new Map,head:null,branchConfig:new Map([[e,{name:e,order:r}]]),branches:new Map([[e,null]]),currBranch:e,direction:"LR",seq:0,options:{}}});function m(){return(0,o.MX)({length:7})}function g(t,e){let r=Object.create(null);return t.reduce((t,a)=>{let i=e(a);return r[i]||(r[i]=!0,t.push(a)),t},[])}(0,c.eW)(m,"getID"),(0,c.eW)(g,"uniqBy");var y=(0,c.eW)(function(t){$.records.direction=t},"setDirection"),p=(0,c.eW)(function(t){c.cM.debug("options str",t),t=(t=t?.trim())||"{}";try{$.records.options=JSON.parse(t)}catch(t){c.cM.error("error while parsing gitGraph options",t.message)}},"setOptions"),f=(0,c.eW)(function(){return $.records.options},"getOptions"),x=(0,c.eW)(function(t){let e=t.msg,r=t.id,a=t.type,i=t.tags;c.cM.info("commit",e,r,a,i),c.cM.debug("Entering commit:",e,r,a,i);let o=l();r=c.SY.sanitizeText(r,o),e=c.SY.sanitizeText(e,o),i=i?.map(t=>c.SY.sanitizeText(t,o));let n={id:r||$.records.seq+"-"+m(),message:e,seq:$.records.seq++,type:a??h.NORMAL,tags:i??[],parents:null==$.records.head?[]:[$.records.head.id],branch:$.records.currBranch};$.records.head=n,c.cM.info("main branch",o.mainBranchName),$.records.commits.set(n.id,n),$.records.branches.set($.records.currBranch,n.id),c.cM.debug("in pushCommit "+n.id)},"commit"),u=(0,c.eW)(function(t){let e=t.name,r=t.order;if(e=c.SY.sanitizeText(e,l()),$.records.branches.has(e))throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);$.records.branches.set(e,null!=$.records.head?$.records.head.id:null),$.records.branchConfig.set(e,{name:e,order:r}),B(e),c.cM.debug("in createBranch")},"branch"),b=(0,c.eW)(t=>{let e=t.branch,r=t.id,a=t.type,i=t.tags,o=l();e=c.SY.sanitizeText(e,o),r&&(r=c.SY.sanitizeText(r,o));let n=$.records.branches.get($.records.currBranch),s=$.records.branches.get(e),d=n?$.records.commits.get(n):void 0,g=s?$.records.commits.get(s):void 0;if(d&&g&&d.branch===e)throw Error(`Cannot merge branch '${e}' into itself.`);if($.records.currBranch===e){let t=Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},t}if(void 0===d||!d){let t=Error(`Incorrect usage of "merge". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["commit"]},t}if(!$.records.branches.has(e)){let t=Error('Incorrect usage of "merge". Branch to be merged ('+e+") does not exist");throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:[`branch ${e}`]},t}if(void 0===g||!g){let t=Error('Incorrect usage of "merge". Branch to be merged ('+e+") has no commits");throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:['"commit"']},t}if(d===g){let t=Error('Incorrect usage of "merge". Both branches have same head');throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},t}if(r&&$.records.commits.has(r)){let t=Error('Incorrect usage of "merge". Commit with id:'+r+" already exists, use different custom Id");throw t.hash={text:`merge ${e} ${r} ${a} ${i?.join(" ")}`,token:`merge ${e} ${r} ${a} ${i?.join(" ")}`,expected:[`merge ${e} ${r}_UNIQUE ${a} ${i?.join(" ")}`]},t}let y={id:r||`${$.records.seq}-${m()}`,message:`merged branch ${e} into ${$.records.currBranch}`,seq:$.records.seq++,parents:null==$.records.head?[]:[$.records.head.id,s||""],branch:$.records.currBranch,type:h.MERGE,customType:a,customId:!!r,tags:i??[]};$.records.head=y,$.records.commits.set(y.id,y),$.records.branches.set($.records.currBranch,y.id),c.cM.debug($.records.branches),c.cM.debug("in mergeBranch")},"merge"),w=(0,c.eW)(function(t){let e=t.id,r=t.targetId,a=t.tags,i=t.parent;c.cM.debug("Entering cherryPick:",e,r,a);let o=l();if(e=c.SY.sanitizeText(e,o),r=c.SY.sanitizeText(r,o),a=a?.map(t=>c.SY.sanitizeText(t,o)),i=c.SY.sanitizeText(i,o),!e||!$.records.commits.has(e)){let t=Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let n=$.records.commits.get(e);if(void 0===n||!n)throw Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(i&&!(Array.isArray(n.parents)&&n.parents.includes(i)))throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");let s=n.branch;if(n.type===h.MERGE&&!i)throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!r||!$.records.commits.has(r)){if(s===$.records.currBranch){let t=Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let t=$.records.branches.get($.records.currBranch);if(void 0===t||!t){let t=Error(`Incorrect usage of "cherry-pick". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let o=$.records.commits.get(t);if(void 0===o||!o){let t=Error(`Incorrect usage of "cherry-pick". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let d={id:$.records.seq+"-"+m(),message:`cherry-picked ${n?.message} into ${$.records.currBranch}`,seq:$.records.seq++,parents:null==$.records.head?[]:[$.records.head.id,n.id],branch:$.records.currBranch,type:h.CHERRY_PICK,tags:a?a.filter(Boolean):[`cherry-pick:${n.id}${n.type===h.MERGE?`|parent:${i}`:""}`]};$.records.head=d,$.records.commits.set(d.id,d),$.records.branches.set($.records.currBranch,d.id),c.cM.debug($.records.branches),c.cM.debug("in cherryPick")}},"cherryPick"),B=(0,c.eW)(function(t){if(t=c.SY.sanitizeText(t,l()),$.records.branches.has(t)){$.records.currBranch=t;let e=$.records.branches.get($.records.currBranch);void 0!==e&&e?$.records.head=$.records.commits.get(e)??null:$.records.head=null}else{let e=Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw e.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},e}},"checkout");function E(t,e,r){let a=t.indexOf(e);-1===a?t.push(r):t.splice(a,1,r)}function k(t){let e=t.reduce((t,e)=>t.seq>e.seq?t:e,t[0]),r="";t.forEach(function(t){t===e?r+="	*":r+="	|"});let a=[r,e.id,e.seq];for(let t in $.records.branches)$.records.branches.get(t)===e.id&&a.push(t);if(c.cM.debug(a.join(" ")),e.parents&&2==e.parents.length&&e.parents[0]&&e.parents[1]){let r=$.records.commits.get(e.parents[0]);E(t,e,r),e.parents[1]&&t.push($.records.commits.get(e.parents[1]))}else if(0==e.parents.length)return;else if(e.parents[0]){let r=$.records.commits.get(e.parents[0]);E(t,e,r)}k(t=g(t,t=>t.id))}(0,c.eW)(E,"upsert"),(0,c.eW)(k,"prettyPrintCommitHistory");var M=(0,c.eW)(function(){c.cM.debug($.records.commits),k([v()[0]])},"prettyPrint"),C=(0,c.eW)(function(){$.reset(),(0,c.ZH)()},"clear"),L=(0,c.eW)(function(){return[...$.records.branchConfig.values()].map((t,e)=>null!==t.order&&void 0!==t.order?t:{...t,order:parseFloat(`0.${e}`)}).sort((t,e)=>(t.order??0)-(e.order??0)).map(({name:t})=>({name:t}))},"getBranchesAsObjArray"),T=(0,c.eW)(function(){return $.records.branches},"getBranches"),W=(0,c.eW)(function(){return $.records.commits},"getCommits"),v=(0,c.eW)(function(){let t=[...$.records.commits.values()];return t.forEach(function(t){c.cM.debug(t.id)}),t.sort((t,e)=>t.seq-e.seq),t},"getCommitsArray"),R={commitType:h,getConfig:l,setDirection:y,setOptions:p,getOptions:f,commit:x,branch:u,merge:b,cherryPick:w,checkout:B,prettyPrint:M,clear:C,getBranchesAsObjArray:L,getBranches:T,getCommits:W,getCommitsArray:v,getCurrentBranch:(0,c.eW)(function(){return $.records.currBranch},"getCurrentBranch"),getDirection:(0,c.eW)(function(){return $.records.direction},"getDirection"),getHead:(0,c.eW)(function(){return $.records.head},"getHead"),setAccTitle:c.GN,getAccTitle:c.eu,getAccDescription:c.Mx,setAccDescription:c.U$,setDiagramTitle:c.g2,getDiagramTitle:c.Kr},P=(0,c.eW)((t,e)=>{for(let r of((0,a.A)(t,e),t.dir&&e.setDirection(t.dir),t.statements))A(r,e)},"populate"),A=(0,c.eW)((t,e)=>{let r={Commit:(0,c.eW)(t=>e.commit(I(t)),"Commit"),Branch:(0,c.eW)(t=>e.branch(G(t)),"Branch"),Merge:(0,c.eW)(t=>e.merge(S(t)),"Merge"),Checkout:(0,c.eW)(t=>e.checkout(O(t)),"Checkout"),CherryPicking:(0,c.eW)(t=>e.cherryPick(q(t)),"CherryPicking")}[t.$type];r?r(t):c.cM.error(`Unknown statement type: ${t.$type}`)},"parseStatement"),I=(0,c.eW)(t=>({id:t.id,msg:t.message??"",type:void 0!==t.type?h[t.type]:h.NORMAL,tags:t.tags??void 0}),"parseCommit"),G=(0,c.eW)(t=>({name:t.name,order:t.order??0}),"parseBranch"),S=(0,c.eW)(t=>({branch:t.branch,id:t.id??"",type:void 0!==t.type?h[t.type]:void 0,tags:t.tags??void 0}),"parseMerge"),O=(0,c.eW)(t=>t.branch,"parseCheckout"),q=(0,c.eW)(t=>({id:t.id,targetId:"",tags:t.tags?.length===0?void 0:t.tags,parent:t.parent}),"parseCherryPicking"),H={parse:(0,c.eW)(async t=>{let e=await (0,n.Qc)("gitGraph",t);c.cM.debug(e),P(e,R)},"parse")},z=(0,c.nV)(),Y=z?.gitGraph,D=new Map,N=new Map,j=new Map,_=[],K=0,F="LR",U=(0,c.eW)(()=>{D.clear(),N.clear(),j.clear(),K=0,_=[],F="LR"},"clear"),V=(0,c.eW)(t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");return("string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(t=>{let r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),r.setAttribute("class","row"),r.textContent=t.trim(),e.appendChild(r)}),e},"drawText"),Q=(0,c.eW)(t=>{let e,r,a;return"BT"===F?(r=(0,c.eW)((t,e)=>t<=e,"comparisonFunc"),a=1/0):(r=(0,c.eW)((t,e)=>t>=e,"comparisonFunc"),a=0),t.forEach(t=>{let i="TB"===F||"BT"==F?N.get(t)?.y:N.get(t)?.x;void 0!==i&&r(i,a)&&(e=t,a=i)}),e},"findClosestParent"),X=(0,c.eW)(t=>{let e="",r=1/0;return t.forEach(t=>{let a=N.get(t).y;a<=r&&(e=t,r=a)}),e||void 0},"findClosestParentBT"),Z=(0,c.eW)((t,e,r)=>{let a=r,i=r,o=[];t.forEach(t=>{let r=e.get(t);if(!r)throw Error(`Commit not found for key ${t}`);r.parents.length?i=Math.max(a=tt(r),i):o.push(r),te(r,a)}),a=i,o.forEach(t=>{tr(t,a,r)}),t.forEach(t=>{let r=e.get(t);if(r?.parents.length){let t=X(r.parents);(a=N.get(t).y-40)<=i&&(i=a);let e=D.get(r.branch).pos,o=a-10;N.set(r.id,{x:e,y:o})}})},"setParallelBTPos"),J=(0,c.eW)(t=>{let e=Q(t.parents.filter(t=>null!==t));if(!e)throw Error(`Closest parent not found for commit ${t.id}`);let r=N.get(e)?.y;if(void 0===r)throw Error(`Closest parent position not found for commit ${t.id}`);return r},"findClosestParentPos"),tt=(0,c.eW)(t=>J(t)+40,"calculateCommitPosition"),te=(0,c.eW)((t,e)=>{let r=D.get(t.branch);if(!r)throw Error(`Branch not found for commit ${t.id}`);let a=r.pos,i=e+10;return N.set(t.id,{x:a,y:i}),{x:a,y:i}},"setCommitPosition"),tr=(0,c.eW)((t,e,r)=>{let a=D.get(t.branch);if(!a)throw Error(`Branch not found for commit ${t.id}`);let i=a.pos;N.set(t.id,{x:i,y:e+r})},"setRootPosition"),ta=(0,c.eW)((t,e,r,a,i,o)=>{if(o===h.HIGHLIGHT)t.append("rect").attr("x",r.x-10).attr("y",r.y-10).attr("width",20).attr("height",20).attr("class",`commit ${e.id} commit-highlight${i%8} ${a}-outer`),t.append("rect").attr("x",r.x-6).attr("y",r.y-6).attr("width",12).attr("height",12).attr("class",`commit ${e.id} commit${i%8} ${a}-inner`);else if(o===h.CHERRY_PICK)t.append("circle").attr("cx",r.x).attr("cy",r.y).attr("r",10).attr("class",`commit ${e.id} ${a}`),t.append("circle").attr("cx",r.x-3).attr("cy",r.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${a}`),t.append("circle").attr("cx",r.x+3).attr("cy",r.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${a}`),t.append("line").attr("x1",r.x+3).attr("y1",r.y+1).attr("x2",r.x).attr("y2",r.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${a}`),t.append("line").attr("x1",r.x-3).attr("y1",r.y+1).attr("x2",r.x).attr("y2",r.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${a}`);else{let c=t.append("circle");if(c.attr("cx",r.x),c.attr("cy",r.y),c.attr("r",e.type===h.MERGE?9:10),c.attr("class",`commit ${e.id} commit${i%8}`),o===h.MERGE){let o=t.append("circle");o.attr("cx",r.x),o.attr("cy",r.y),o.attr("r",6),o.attr("class",`commit ${a} ${e.id} commit${i%8}`)}o===h.REVERSE&&t.append("path").attr("d",`M ${r.x-5},${r.y-5}L${r.x+5},${r.y+5}M${r.x-5},${r.y+5}L${r.x+5},${r.y-5}`).attr("class",`commit ${a} ${e.id} commit${i%8}`)}},"drawCommitBullet"),ti=(0,c.eW)((t,e,r,a)=>{if(e.type!==h.CHERRY_PICK&&(e.customId&&e.type===h.MERGE||e.type!==h.MERGE)&&Y?.showCommitLabel){let i=t.append("g"),o=i.insert("rect").attr("class","commit-label-bkg"),c=i.append("text").attr("x",a).attr("y",r.y+25).attr("class","commit-label").text(e.id),n=c.node()?.getBBox();if(n&&(o.attr("x",r.posWithOffset-n.width/2-2).attr("y",r.y+13.5).attr("width",n.width+4).attr("height",n.height+4),"TB"===F||"BT"===F?(o.attr("x",r.x-(n.width+16+5)).attr("y",r.y-12),c.attr("x",r.x-(n.width+16)).attr("y",r.y+n.height-12)):c.attr("x",r.posWithOffset-n.width/2),Y.rotateCommitLabel)){if("TB"===F||"BT"===F)c.attr("transform","rotate(-45, "+r.x+", "+r.y+")"),o.attr("transform","rotate(-45, "+r.x+", "+r.y+")");else{let t=-7.5-(n.width+10)/25*9.5,e=10+n.width/25*8.5;i.attr("transform","translate("+t+", "+e+") rotate(-45, "+a+", "+r.y+")")}}}},"drawCommitLabel"),to=(0,c.eW)((t,e,r,a)=>{if(e.tags.length>0){let i=0,o=0,c=0,n=[];for(let a of e.tags.reverse()){let e=t.insert("polygon"),s=t.append("circle"),h=t.append("text").attr("y",r.y-16-i).attr("class","tag-label").text(a),d=h.node()?.getBBox();if(!d)throw Error("Tag bbox not found");o=Math.max(o,d.width),c=Math.max(c,d.height),h.attr("x",r.posWithOffset-d.width/2),n.push({tag:h,hole:s,rect:e,yOffset:i}),i+=20}for(let{tag:t,hole:e,rect:i,yOffset:s}of n){let n=c/2,h=r.y-19.2-s;if(i.attr("class","tag-label-bkg").attr("points",`
      ${a-o/2-2},${h+2}  
      ${a-o/2-2},${h-2}
      ${r.posWithOffset-o/2-4},${h-n-2}
      ${r.posWithOffset+o/2+4},${h-n-2}
      ${r.posWithOffset+o/2+4},${h+n+2}
      ${r.posWithOffset-o/2-4},${h+n+2}`),e.attr("cy",h).attr("cx",a-o/2+2).attr("r",1.5).attr("class","tag-hole"),"TB"===F||"BT"===F){let c=a+s;i.attr("class","tag-label-bkg").attr("points",`
        ${r.x},${c+2}
        ${r.x},${c-2}
        ${r.x+10},${c-n-2}
        ${r.x+10+o+4},${c-n-2}
        ${r.x+10+o+4},${c+n+2}
        ${r.x+10},${c+n+2}`).attr("transform","translate(12,12) rotate(45, "+r.x+","+a+")"),e.attr("cx",r.x+2).attr("cy",c).attr("transform","translate(12,12) rotate(45, "+r.x+","+a+")"),t.attr("x",r.x+5).attr("y",c+3).attr("transform","translate(14,14) rotate(45, "+r.x+","+a+")")}}}},"drawCommitTags"),tc=(0,c.eW)(t=>{switch(t.customType??t.type){case h.NORMAL:return"commit-normal";case h.REVERSE:return"commit-reverse";case h.HIGHLIGHT:return"commit-highlight";case h.MERGE:return"commit-merge";case h.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),tn=(0,c.eW)((t,e,r,a)=>{let i={x:0,y:0};if(t.parents.length>0){let r=Q(t.parents);if(r){let o=a.get(r)??i;return"TB"===e?o.y+40:"BT"===e?(a.get(t.id)??i).y-40:o.x+40}}else{if("TB"===e)return 30;if("BT"===e)return(a.get(t.id)??i).y-40}return 0},"calculatePosition"),ts=(0,c.eW)((t,e,r)=>{let a="BT"===F&&r?e:e+10,i="TB"===F||"BT"===F?a:D.get(t.branch)?.pos,o="TB"===F||"BT"===F?D.get(t.branch)?.pos:a;if(void 0===o||void 0===i)throw Error(`Position were undefined for commit ${t.id}`);return{x:o,y:i,posWithOffset:a}},"getCommitPosition"),th=(0,c.eW)((t,e,r)=>{if(!Y)throw Error("GitGraph config not found");let a=t.append("g").attr("class","commit-bullets"),i=t.append("g").attr("class","commit-labels"),o="TB"===F||"BT"===F?30:0,n=[...e.keys()],s=Y?.parallelCommits??!1,h=n.sort((0,c.eW)((t,r)=>{let a=e.get(t)?.seq,i=e.get(r)?.seq;return void 0!==a&&void 0!==i?a-i:0},"sortKeys"));"BT"===F&&(s&&Z(h,e,o),h=h.reverse()),h.forEach(t=>{let c=e.get(t);if(!c)throw Error(`Commit not found for key ${t}`);s&&(o=tn(c,F,o,N));let n=ts(c,o,s);if(r){let t=tc(c),e=c.customType??c.type,r=D.get(c.branch)?.index??0;ta(a,c,n,t,r,e),ti(i,c,n,o),to(i,c,n,o)}"TB"===F||"BT"===F?N.set(c.id,{x:n.x,y:n.posWithOffset}):N.set(c.id,{x:n.posWithOffset,y:n.y}),(o="BT"===F&&s?o+40:o+40+10)>K&&(K=o)})},"drawCommits"),td=(0,c.eW)((t,e,r,a,i)=>{let o=("TB"===F||"BT"===F?r.x<a.x:r.y<a.y)?e.branch:t.branch,n=(0,c.eW)(t=>t.branch===o,"isOnBranchToGetCurve"),s=(0,c.eW)(r=>r.seq>t.seq&&r.seq<e.seq,"isBetweenCommits");return[...i.values()].some(t=>s(t)&&n(t))},"shouldRerouteArrow"),tl=(0,c.eW)((t,e,r=0)=>{let a=t+Math.abs(t-e)/2;if(r>5)return a;if(_.every(t=>Math.abs(t-a)>=10))return _.push(a),a;let i=Math.abs(t-e);return tl(t,e-i/5,r+1)},"findLane"),t$=(0,c.eW)((t,e,r,a)=>{let i;let o=N.get(e.id),c=N.get(r.id);if(void 0===o||void 0===c)throw Error(`Commit positions not found for commits ${e.id} and ${r.id}`);let n=td(e,r,o,c,a),s="",d="",l=0,$=0,m=D.get(r.branch)?.index;if(r.type===h.MERGE&&e.id!==r.parents[0]&&(m=D.get(e.branch)?.index),n){s="A 10 10, 0, 0, 0,",d="A 10 10, 0, 0, 1,",l=10,$=10;let t=o.y<c.y?tl(o.y,c.y):tl(c.y,o.y),r=o.x<c.x?tl(o.x,c.x):tl(c.x,o.x);"TB"===F?o.x<c.x?i=`M ${o.x} ${o.y} L ${r-l} ${o.y} ${d} ${r} ${o.y+$} L ${r} ${c.y-l} ${s} ${r+$} ${c.y} L ${c.x} ${c.y}`:(m=D.get(e.branch)?.index,i=`M ${o.x} ${o.y} L ${r+l} ${o.y} ${s} ${r} ${o.y+$} L ${r} ${c.y-l} ${d} ${r-$} ${c.y} L ${c.x} ${c.y}`):"BT"===F?o.x<c.x?i=`M ${o.x} ${o.y} L ${r-l} ${o.y} ${s} ${r} ${o.y-$} L ${r} ${c.y+l} ${d} ${r+$} ${c.y} L ${c.x} ${c.y}`:(m=D.get(e.branch)?.index,i=`M ${o.x} ${o.y} L ${r+l} ${o.y} ${d} ${r} ${o.y-$} L ${r} ${c.y+l} ${s} ${r-$} ${c.y} L ${c.x} ${c.y}`):o.y<c.y?i=`M ${o.x} ${o.y} L ${o.x} ${t-l} ${s} ${o.x+$} ${t} L ${c.x-l} ${t} ${d} ${c.x} ${t+$} L ${c.x} ${c.y}`:(m=D.get(e.branch)?.index,i=`M ${o.x} ${o.y} L ${o.x} ${t+l} ${d} ${o.x+$} ${t} L ${c.x-l} ${t} ${s} ${c.x} ${t-$} L ${c.x} ${c.y}`)}else s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",l=20,$=20,"TB"===F?(o.x<c.x&&(i=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${c.y-l} ${s} ${o.x+$} ${c.y} L ${c.x} ${c.y}`:`M ${o.x} ${o.y} L ${c.x-l} ${o.y} ${d} ${c.x} ${o.y+$} L ${c.x} ${c.y}`),o.x>c.x&&(s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",l=20,$=20,i=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${c.y-l} ${d} ${o.x-$} ${c.y} L ${c.x} ${c.y}`:`M ${o.x} ${o.y} L ${c.x+l} ${o.y} ${s} ${c.x} ${o.y+$} L ${c.x} ${c.y}`),o.x===c.x&&(i=`M ${o.x} ${o.y} L ${c.x} ${c.y}`)):"BT"===F?(o.x<c.x&&(i=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${c.y+l} ${d} ${o.x+$} ${c.y} L ${c.x} ${c.y}`:`M ${o.x} ${o.y} L ${c.x-l} ${o.y} ${s} ${c.x} ${o.y-$} L ${c.x} ${c.y}`),o.x>c.x&&(s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",l=20,$=20,i=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${c.y+l} ${s} ${o.x-$} ${c.y} L ${c.x} ${c.y}`:`M ${o.x} ${o.y} L ${c.x-l} ${o.y} ${s} ${c.x} ${o.y-$} L ${c.x} ${c.y}`),o.x===c.x&&(i=`M ${o.x} ${o.y} L ${c.x} ${c.y}`)):(o.y<c.y&&(i=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${o.x} ${o.y} L ${c.x-l} ${o.y} ${d} ${c.x} ${o.y+$} L ${c.x} ${c.y}`:`M ${o.x} ${o.y} L ${o.x} ${c.y-l} ${s} ${o.x+$} ${c.y} L ${c.x} ${c.y}`),o.y>c.y&&(i=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${o.x} ${o.y} L ${c.x-l} ${o.y} ${s} ${c.x} ${o.y-$} L ${c.x} ${c.y}`:`M ${o.x} ${o.y} L ${o.x} ${c.y+l} ${d} ${o.x+$} ${c.y} L ${c.x} ${c.y}`),o.y===c.y&&(i=`M ${o.x} ${o.y} L ${c.x} ${c.y}`));if(void 0===i)throw Error("Line definition not found");t.append("path").attr("d",i).attr("class","arrow arrow"+m%8)},"drawArrow"),tm=(0,c.eW)((t,e)=>{let r=t.append("g").attr("class","commit-arrows");[...e.keys()].forEach(t=>{let a=e.get(t);a.parents&&a.parents.length>0&&a.parents.forEach(t=>{t$(r,e.get(t),a,e)})})},"drawArrows"),tg=(0,c.eW)((t,e)=>{let r=t.append("g");e.forEach((t,e)=>{let a=e%8,i=D.get(t.name)?.pos;if(void 0===i)throw Error(`Position not found for branch ${t.name}`);let o=r.append("line");o.attr("x1",0),o.attr("y1",i),o.attr("x2",K),o.attr("y2",i),o.attr("class","branch branch"+a),"TB"===F?(o.attr("y1",30),o.attr("x1",i),o.attr("y2",K),o.attr("x2",i)):"BT"===F&&(o.attr("y1",K),o.attr("x1",i),o.attr("y2",30),o.attr("x2",i)),_.push(i);let c=V(t.name),n=r.insert("rect"),s=r.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+a);s.node().appendChild(c);let h=c.getBBox();n.attr("class","branchLabelBkg label"+a).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(Y?.rotateCommitLabel===!0?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),s.attr("transform","translate("+(-h.width-14-(Y?.rotateCommitLabel===!0?30:0))+", "+(i-h.height/2-1)+")"),"TB"===F?(n.attr("x",i-h.width/2-10).attr("y",0),s.attr("transform","translate("+(i-h.width/2-5)+", 0)")):"BT"===F?(n.attr("x",i-h.width/2-10).attr("y",K),s.attr("transform","translate("+(i-h.width/2-5)+", "+K+")")):n.attr("transform","translate(-19, "+(i-h.height/2)+")")})},"drawBranches"),ty=(0,c.eW)(function(t,e,r,a,i){return D.set(t,{pos:e,index:r}),e+=50+(i?40:0)+("TB"===F||"BT"===F?a.width/2:0)},"setBranchPosition"),tp={parser:H,db:R,renderer:{draw:(0,c.eW)(function(t,e,r,a){if(U(),c.cM.debug("in gitgraph renderer",t+"\n","id:",e,r),!Y)throw Error("GitGraph config not found");let i=Y.rotateCommitLabel??!1,n=a.db;j=n.getCommits();let h=n.getBranchesAsObjArray();F=n.getDirection();let d=(0,s.Ys)(`[id="${e}"]`),l=0;h.forEach((t,e)=>{let r=V(t.name),a=d.append("g"),o=a.insert("g").attr("class","branchLabel"),c=o.insert("g").attr("class","label branch-label");c.node()?.appendChild(r);let n=r.getBBox();l=ty(t.name,l,e,n,i),c.remove(),o.remove(),a.remove()}),th(d,j,!1),Y.showBranches&&tg(d,h),tm(d,j),th(d,j,!0),o.w8.insertTitle(d,"gitTitleText",Y.titleTopMargin??0,n.getDiagramTitle()),(0,c.Rw)(void 0,d,Y.diagramPadding,Y.useMaxWidth)},"draw")},styles:(0,c.eW)(t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles")}}}]);