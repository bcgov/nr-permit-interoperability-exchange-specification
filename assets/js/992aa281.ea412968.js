(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["9277"],{62194:function(e,i,t){"use strict";t.r(i),t.d(i,{default:()=>b,frontMatter:()=>m,metadata:()=>r,assets:()=>g,toc:()=>x,contentTitle:()=>f});var r=JSON.parse('{"id":"spec/data/parcel_id","title":"Parcel Identifier \uD83D\uDCDD","description":"An identifier for a specific area with clear boundaries.","source":"@site/docs/spec/data/parcel_id.mdx","sourceDirName":"spec/data","slug":"/spec/data/parcel_id","permalink":"/nr-pies/docs/spec/data/parcel_id","draft":false,"unlisted":false,"editUrl":"https://github.com/bcgov/nr-pies/tree/main/docs/spec/data/parcel_id.mdx","tags":[{"inline":false,"label":"Developer","permalink":"/nr-pies/docs/tags/developer","description":"Content related to technical structure and implementation"}],"version":"current","lastUpdatedBy":"Jeremy Ho","lastUpdatedAt":1740447021000,"frontMatter":{"id":"parcel_id","title":"Parcel Identifier \uD83D\uDCDD","description":"An identifier for a specific area with clear boundaries.","tags":["developer"]},"sidebar":"docSidebar","previous":{"title":"Header \uD83D\uDCDD","permalink":"/nr-pies/docs/spec/data/header"},"next":{"title":"Process \uD83D\uDD2C","permalink":"/nr-pies/docs/spec/data/process"}}'),n=t("85893"),a=t("50065"),s=t("31705"),l=t("42415"),d=t.n(l),c=t("58168"),o=t("97645"),h=t("19453"),p=JSON.parse('{"legal_description":"legal_description","parcel_name":"parcel_name","pid":[123456789,456789123],"pin":987654321}'),u=JSON.parse('{"$id":"https://raw.githubusercontent.com/bcgov/nr-pies/refs/heads/main/docs/spec/data/parcel_id.schema.json","$schema":"https://json-schema.org/draft-07/schema","title":"Parcel Identifier","description":"An identifier for a specific area with clear boundaries.","type":"object","properties":{"legal_description":{"type":"string","description":"The full legal description of the parcel and is primarily recorded from the Land Title Register. Where recorded only in the Crown Land Registry, this attribute is to be populated from Tantalis for the fabric compilation, but maintained by PMBC during on-going operations.","maxLength":2000},"parcel_name":{"type":"string","description":"The same as the PID, if there is one. If there is a PIN but no PID, then parcel name is the PIN. If there is no PID nor PIN, then it is the parcel class value, e.g., COMMON OWNERSHIP, BUILDING STRATA, AIR SPACE, ROAD, PARK."},"pid":{"type":"array","items":{"type":"integer","description":"Parcel ID is the Land Title Register parcel identifier, a nine-digit number that uniquely identifies a parcel in the land title register of in British Columbia. The registrar assigns PID numbers to parcels for which a title is being entered as a registered title. The Land Title Act refers to the PID as the permanent parcel identifier.","minimum":0,"maximum":999999999},"minItems":1,"uniqueItems":true},"pin":{"type":"integer","description":"The parcel identification number (PIN) is the Crown Land Registry Parcel Identifier.","minimum":0,"maximum":999999999}},"anyOf":[{"title":"pid","required":["pid"]},{"title":"pin","required":["pin"]}]}');let m={id:"parcel_id",title:"Parcel Identifier \uD83D\uDCDD",description:"An identifier for a specific area with clear boundaries.",tags:["developer"]},f=void 0,g={},x=[{value:"Scope",id:"scope",level:2},{value:"Structure",id:"structure",level:2},{value:"Specification",id:"specification",level:2},{value:"Implementation Notes",id:"implementation-notes",level:2},{value:"Parcel ID (PID)",id:"parcel-id-pid",level:3},{value:"References",id:"references",level:2}];function j(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"../overview#maturity",children:(0,n.jsx)(i.img,{src:"https://img.shields.io/badge/Maturity-Draft-yellow",alt:"Maturity"})})}),"\n",(0,n.jsx)(i.p,{children:"An identifier for a specific area with clear boundaries."}),"\n",(0,n.jsx)(i.p,{children:"There a multiple ways to identify a parcel. Most common are the Parcel ID (PID) or Parcel Identification Number (PIN)."}),"\n",(0,n.jsx)(i.h2,{id:"scope",children:"Scope"}),"\n",(0,n.jsx)(i.p,{children:"Parcel ID is the Land Title Register parcel identifier, a nine-digit max number that uniquely identifies a parcel in the\nland title register of in British Columbia. The registrar assigns PID numbers to parcels for which a title is being\nentered as a registered title. The Land Title Act refers to the PID as the permanent parcel identifier."}),"\n",(0,n.jsx)(i.p,{children:"The parcel identification number (PIN) is the Crown Land Registry Parcel Identifier."}),"\n",(0,n.jsx)(i.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A valid Parcel Identifier shall at minimum contain either a ",(0,n.jsx)(i.code,{children:"pin"})," or at least one ",(0,n.jsx)(i.code,{children:"pid"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["A Parcel Identifier may contain a ",(0,n.jsx)(i.code,{children:"legal_description"})," and/or a ",(0,n.jsx)(i.code,{children:"parcel_name"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Cardinality"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Description & Constraints"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"legal_description"}),(0,n.jsx)(i.td,{children:"0..1"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{children:"The full legal description of the parcel and is primarily recorded from the Land Title Register. Where recorded only in the Crown Land Registry, this attribute is to be populated from Tantalis for the fabric compilation, but maintained by PMBC during on-going operations."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"parcel_name"}),(0,n.jsx)(i.td,{children:"0..1"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{children:"The same as the PID, if there is one. If there is a PIN but no PID, then parcel name is the PIN. If there is no PID nor PIN, then it is the parcel class value, e.g., COMMON OWNERSHIP, BUILDING STRATA, AIR SPACE, ROAD, PARK."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"pid"}),(0,n.jsx)(i.td,{children:"0..*"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"integer"})}),(0,n.jsx)(i.td,{children:"Parcel ID is the Land Title Register parcel identifier, a nine-digit number that uniquely identifies a parcel in the land title register of in British Columbia. The registrar assigns PID numbers to parcels for which a title is being entered as a registered title. The Land Title Act refers to the PID as the permanent parcel identifier."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"pin"}),(0,n.jsx)(i.td,{children:"0..1"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"integer"})}),(0,n.jsx)(i.td,{children:"The parcel identification number (PIN) is the Crown Land Registry Parcel Identifier."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"specification",children:"Specification"}),"\n",(0,n.jsxs)(c.default,{queryString:"tab",children:[(0,n.jsx)(o.default,{value:"schema",label:"Schema",default:!0,children:(0,n.jsx)(d(),{resolverOptions:(0,h.tw)({remote:!0}),schema:u,viewerOptions:{showExamples:!0}})}),(0,n.jsx)(o.default,{value:"source",label:"Source",children:(0,n.jsx)(s.default,{language:"json",showLineNumbers:!0,children:JSON.stringify(u,null,2)})}),(0,n.jsx)(o.default,{value:"example",label:"Example",children:(0,n.jsx)(s.default,{language:"json",showLineNumbers:!0,children:JSON.stringify(p,null,2)})})]}),"\n",(0,n.jsx)(i.h2,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,n.jsx)(i.h3,{id:"parcel-id-pid",children:"Parcel ID (PID)"}),"\n",(0,n.jsxs)(i.p,{children:["Parcel IDs are stored as numeric values from ",(0,n.jsx)(i.a,{href:"https://help.ltsa.ca/parcelmap-bc/parcels",children:"ParcelMap BC (PMBC)"}),". During\nthe PMBC adoption in government, business areas voiced that PIDs may be store the presentation format which includes\npadded zeros and/or dashes. The BC Data Service distributes PMBC data on behalf of the provincial government (see ",(0,n.jsx)(i.a,{href:"https://catalogue.data.gov.bc.ca/group/47fa4daf-78d1-4c64-a0d2-51638a04910d",children:"BC Data Catalogue"}),") and makes the Parcel IDs formats available to accommodate this. The following formats may be encountered which includes padded zeros and/or dashes:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"parcel_id_formatted"})," (string, 12): The parcel ID formatted as a left-zero-padded nine-digit number, with dashes between each group of three digits."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"parcel_id_number"})," (numeric, 10): The Parcel ID as a number, without leading zeroes."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Should these alternatives be encountered, they must be transformed into a standard JSON ",(0,n.jsx)(i.code,{children:"integer"})," primitive type."]}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://catalogue.data.gov.bc.ca/group/47fa4daf-78d1-4c64-a0d2-51638a04910d",children:"BC Data Catalogue"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://help.ltsa.ca/parcelmap-bc/parcels",children:"ParcelMap BC - Parcels"})}),"\n"]})]})}function b(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},73586:function(e,i,t){var r={"./img/interoperable.svg":["69358","5386"],"./img/logo.svg":["92107","1587"],"./img/cc-by.png":["93551","884"],"./img/favicon.ico":["59854","2054"],"./img/opensource.svg":["21983","5583"],"./img/BCID_H_rgb_rev.png":["49638","5467"],"./img/docusaurus.png":["38970","154"],"./img/BCID_H_rgb_pos.png":["60057","8151"],"./img/easytouse.svg":["61954","6817"],"./img/favicon.png":["36178","1034"]};function n(e){if(!t.o(r,e))return Promise.resolve().then(function(){var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i});var i=r[e],n=i[0];return t.e(i[1]).then(function(){return t(n)})}n.keys=()=>Object.keys(r),n.id="73586",e.exports=n},19453:function(e,i,t){"use strict";function r(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],{resolve:e=>new Promise((i,t)=>{fetch(e.toString(),{headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>i(e)).catch(e=>t(e))})}}function n(e){let{basePath:i,jsonPointer:n,remote:a}=e,s={};return i&&(s.resolvers={file:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{resolve:i=>new Promise((r,n)=>{let a=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e.toString().split("/"),r=i;for(let e=0;e<t.length;e++)if(".."===t[e])r=r.split("/").slice(0,-1).join("/");else{if("."===t[e])continue;r=`${r}/${t[e]}`}return r}(i,e);t(73586)(`./${a.substring(1)}`).then(e=>r(e.default)).catch(e=>n(e))})}}(i)}),a&&(void 0===s.resolvers&&(s.resolvers={}),s.resolvers.http=r("http"),s.resolvers.https=r("https")),n&&(s.jsonPointer=n),s}t.d(i,{tw:()=>n})}}]);