(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["707"],{46023:function(e,t,s){"use strict";s.r(t),s.d(t,{default:()=>j,frontMatter:()=>u,metadata:()=>n,assets:()=>f,toc:()=>g,contentTitle:()=>m});var n=JSON.parse('{"id":"spec/data/code","title":"Code \uD83D\uDD2C","description":"A code type.","source":"@site/docs/spec/data/code.mdx","sourceDirName":"spec/data","slug":"/spec/data/code","permalink":"/nr-pies/docs/spec/data/code","draft":false,"unlisted":false,"editUrl":"https://github.com/bcgov/nr-pies/tree/main/docs/spec/data/code.mdx","tags":[{"inline":false,"label":"Developer","permalink":"/nr-pies/docs/tags/developer","description":"Content related to technical structure and implementation"}],"version":"current","lastUpdatedBy":"Jeremy Ho","lastUpdatedAt":1740534327000,"frontMatter":{"id":"code","title":"Code \uD83D\uDD2C","description":"A code type.","tags":["developer"]},"sidebar":"docSidebar","previous":{"title":"Primitive Types","permalink":"/nr-pies/docs/spec/data/primitive_types"},"next":{"title":"Event \uD83D\uDD2C","permalink":"/nr-pies/docs/spec/data/event"}}'),i=s("85893"),r=s("50065"),a=s("31705"),c=s("42415"),o=s.n(c),d=s("58168"),l=s("97645"),h=s("19453"),p=JSON.parse('{"$id":"https://raw.githubusercontent.com/bcgov/nr-pies/refs/heads/main/docs/spec/data/code.schema.json","$schema":"https://json-schema.org/draft-07/schema","title":"Code","description":"Code Data Type","type":"string","pattern":"^[^\\\\s]+( [^\\\\s]+)*$"}');let u={id:"code",title:"Code \uD83D\uDD2C",description:"A code type.",tags:["developer"]},m=void 0,f={},g=[{value:"Structure",id:"structure",level:2},{value:"Specification",id:"specification",level:2},{value:"Implementation Notes",id:"implementation-notes",level:2},{value:"References",id:"references",level:2}];function v(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"../overview#maturity",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/Maturity-Trial-green",alt:"Maturity"})})}),"\n",(0,i.jsx)(t.p,{children:"Indicates that the value is taken from a set of controlled strings defined elsewhere. Technically, a code is restricted\nto a string which has at least one character and no leading or trailing whitespace, and where there is no whitespace\nother than single spaces in the contents."}),"\n",(0,i.jsx)(t.p,{children:"This data type is intended to represent a finite set of controlled strings which represents a specific, discrete\nconcept, element or idea."}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description & Constraints"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{children:["Shall be represented in UTF-8 format, as specified in ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc3629",children:"RFC 3629"}),", which is an extension of the ",(0,i.jsx)(t.a,{href:"https://www.iso.org/standard/76835.html",children:"ISO 10646-1"})," standard."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Regex Pattern"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"^[^\\s]+( [^\\s]+)*$"})}),(0,i.jsx)(t.td,{children:"String which has at least one character and no leading or trailing whitespace, and where there is no whitespace other than single spaces in the contents."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsxs)(d.default,{queryString:"tab",children:[(0,i.jsx)(l.default,{value:"schema",label:"Schema",default:!0,children:(0,i.jsx)(o(),{resolverOptions:(0,h.tw)({remote:!0}),schema:p,viewerOptions:{showExamples:!0}})}),(0,i.jsx)(l.default,{value:"source",label:"Source",children:(0,i.jsx)(a.default,{language:"json",showLineNumbers:!0,children:JSON.stringify(p,null,2)})})]}),"\n",(0,i.jsx)(t.h2,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,i.jsxs)(t.p,{children:["This data structure is mainly meant to illustrate and restrict what is allowed to be encoded for an arbitrary code\nvalue. This is meant to only be used as a semantic reference point. This data structure is loosely inspired by the\n",(0,i.jsx)(t.a,{href:"https://www.hl7.org/fhir/datatypes.html#code",children:"FHIR Code Type"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.hl7.org/fhir/datatypes.html#code",children:"FHIR Code Type"})}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},73586:function(e,t,s){var n={"./img/interoperable.svg":["69358","5386"],"./img/logo.svg":["92107","1587"],"./img/cc-by.png":["93551","884"],"./img/favicon.ico":["59854","2054"],"./img/opensource.svg":["21983","5583"],"./img/BCID_H_rgb_rev.png":["49638","5467"],"./img/docusaurus.png":["38970","154"],"./img/BCID_H_rgb_pos.png":["60057","8151"],"./img/easytouse.svg":["61954","6817"],"./img/favicon.png":["36178","1034"]};function i(e){if(!s.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return s.e(t[1]).then(function(){return s(i)})}i.keys=()=>Object.keys(n),i.id="73586",e.exports=i},19453:function(e,t,s){"use strict";function n(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],{resolve:e=>new Promise((t,s)=>{fetch(e.toString(),{headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>t(e)).catch(e=>s(e))})}}function i(e){let{basePath:t,jsonPointer:i,remote:r}=e,a={};return t&&(a.resolvers={file:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{resolve:t=>new Promise((n,i)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=e.toString().split("/"),n=t;for(let e=0;e<s.length;e++)if(".."===s[e])n=n.split("/").slice(0,-1).join("/");else{if("."===s[e])continue;n=`${n}/${s[e]}`}return n}(t,e);s(73586)(`./${r.substring(1)}`).then(e=>n(e.default)).catch(e=>i(e))})}}(t)}),r&&(void 0===a.resolvers&&(a.resolvers={}),a.resolvers.http=n("http"),a.resolvers.https=n("https")),i&&(a.jsonPointer=i),a}s.d(t,{tw:()=>i})}}]);