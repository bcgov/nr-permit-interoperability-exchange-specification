"use strict";(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["5088"],{71572:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"spec/data/primitive_types","title":"Primitive Types","description":"Fundamental basic data types supported by JSON Schema","source":"@site/docs/spec/data/primitive_types.md","sourceDirName":"spec/data","slug":"/spec/data/primitive_types","permalink":"/nr-pies/docs/spec/data/primitive_types","draft":false,"unlisted":false,"editUrl":"https://github.com/bcgov/nr-pies/tree/main/docs/spec/data/primitive_types.md","tags":[{"inline":false,"label":"Developer","permalink":"/nr-pies/docs/tags/developer","description":"Content related to technical structure and implementation"}],"version":"current","lastUpdatedBy":"Jeremy Ho","lastUpdatedAt":1740447021000,"sidebarPosition":1,"frontMatter":{"id":"primitive_types","title":"Primitive Types","description":"Fundamental basic data types supported by JSON Schema","sidebar_position":1,"tags":["developer"]},"sidebar":"docSidebar","previous":{"title":"Data Types","permalink":"/nr-pies/docs/category/data-types"},"next":{"title":"Code \uD83D\uDD2C","permalink":"/nr-pies/docs/spec/data/code"}}'),s=t("85893"),i=t("50065");let a={id:"primitive_types",title:"Primitive Types",description:"Fundamental basic data types supported by JSON Schema",sidebar_position:1,tags:["developer"]},d=void 0,c={},o=[{value:"String",id:"string",level:2},{value:"Date and Time",id:"date-and-time",level:3},{value:"Email",id:"email",level:3},{value:"Hostname",id:"hostname",level:3},{value:"IP Address",id:"ip-address",level:3},{value:"Resource Identifier",id:"resource-identifier",level:3},{value:"URI Template",id:"uri-template",level:3},{value:"Regular Expression",id:"regular-expression",level:3},{value:"Numeric",id:"numeric",level:2},{value:"Object",id:"object",level:2},{value:"Array",id:"array",level:2},{value:"Boolean",id:"boolean",level:2},{value:"Null",id:"null",level:2},{value:"References",id:"references",level:2},{value:"Government Standards",id:"government-standards",level:3},{value:"Technical Standards",id:"technical-standards",level:3},{value:"Errata",id:"errata",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"../overview#maturity",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Maturity-Standard-blue",alt:"Maturity"})})}),"\n",(0,s.jsxs)(n.p,{children:["The JSON Schema specifies fundamental\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/type",children:"data types"}),"\nthat can be used and defined within a schema."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string",children:"string"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/numeric#number",children:"number"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/numeric#integer",children:"integer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object",children:"object"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/array",children:"array"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/boolean",children:"boolean"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/null",children:"null"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These types are consistent with what can be expected within the standardized JavaScript Object Notation (JSON) format\n(",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8259",children:"RFC 8259"}),"). Most implementation languages support these constructs, but\nmay represent them with different names. We recommend referring to the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/type",children:"JSON schema data types"})," documentation as a primary\nsource for standards representation guidance, followed by the ",(0,s.jsx)(n.a,{href:"#government-standards",children:"government standards guidance"})," and\nensuring that the content represent meets both."]}),"\n",(0,s.jsx)(n.h2,{id:"string",children:"String"}),"\n",(0,s.jsxs)(n.p,{children:["Strings are used to represent textual information. For most scenarios, strings shall be represented in UTF-8 format, as\nspecified in ",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3629",children:"RFC 3629"}),", which is an extension of the ",(0,s.jsx)(n.a,{href:"https://www.iso.org/standard/76835.html",children:"ISO 10646-1"}),"\nstandard."]}),"\n",(0,s.jsxs)(n.p,{children:["Strings may be optionally constrained by properties such as ",(0,s.jsx)(n.code,{children:"minLength"}),", ",(0,s.jsx)(n.code,{children:"maxLength"})," and by Regular Expression\n",(0,s.jsx)(n.code,{children:"pattern"}),". In addition, there are common\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#built-in-formats",children:"built-in"})," ",(0,s.jsx)(n.code,{children:"format"})," types that a\nstring may represent. While we outline some of the common formats here, please refer to the JSON Schema documentation\nfor more detail on the available built-in format types."]}),"\n",(0,s.jsx)(n.h3,{id:"date-and-time",children:"Date and Time"}),"\n",(0,s.jsxs)(n.p,{children:["Date and/or time formats shall be represented in\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",children:"RFC 3339, section 5.6"})," format, also commonly known as\n",(0,s.jsx)(n.a,{href:"https://www.iso.org/iso-8601-date-and-time-format.html",children:"ISO 8601"}),". Unless otherwise specified, ",(0,s.jsx)(n.code,{children:"date-time"})," shall be\ninternally stored and represented in a format compatible with ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Unix_time",children:"unix/epoch"}),"\ntime."]}),"\n",(0,s.jsxs)(n.p,{children:["If the time is specified, such as when either the ",(0,s.jsx)(n.code,{children:"time"})," or ",(0,s.jsx)(n.code,{children:"date-time"})," formats are used, the time representations\nshall be encoded in UTC time. Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#dates-and-times",children:"JSON Schema documentation"})," for more\nspecific examples."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"duration"})," format is not supported at this time as we are compliant with draft 07 of the JSON Schema standard."]})}),"\n",(0,s.jsx)(n.h3,{id:"email",children:"Email"}),"\n",(0,s.jsxs)(n.p,{children:["Email addresses with format ",(0,s.jsx)(n.code,{children:"email"})," shall be represented in\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2",children:"RFC 5321, section 4.1.2"})," format. Emails may also be\nconveyed in internationalized format ",(0,s.jsx)(n.code,{children:"idn-email"})," which will be compliant to\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6531",children:"RFC 6531"}),". Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#email-addresses",children:"JSON Schema documentation"})," for more\ndetails."]}),"\n",(0,s.jsx)(n.h3,{id:"hostname",children:"Hostname"}),"\n",(0,s.jsxs)(n.p,{children:["Hostnames with format ",(0,s.jsx)(n.code,{children:"hostname"})," shall be represented in\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1123#section-2",children:"RFC 1123, section 2.1"})," format. Hostnames may also be conveyed\nin internationalized format ",(0,s.jsx)(n.code,{children:"idn-hostname"})," which will be compliant to\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc5890#section-2.3.2.3",children:"RFC 5890, section 2.3.2.3"}),". Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#hostnames",children:"JSON Schema documentation"})," for more\ndetails."]}),"\n",(0,s.jsx)(n.h3,{id:"ip-address",children:"IP Address"}),"\n",(0,s.jsxs)(n.p,{children:["IP Addresses may either be formatted in ",(0,s.jsx)(n.code,{children:"ipv4"})," or ",(0,s.jsx)(n.code,{children:"ipv6"})," formats. If IPv4 is used, it shall comply with\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2673#section-3.2",children:"RFC 2673, section 3.2"}),". If IPv6 is used, it shall comply\nwith ",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2373#section-2.2",children:"RFC 2373, section 2.2"}),". Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#ip-addresses",children:"JSON Schema documentation"})," for more\ndetails."]}),"\n",(0,s.jsx)(n.h3,{id:"resource-identifier",children:"Resource Identifier"}),"\n",(0,s.jsxs)(n.p,{children:["Universal resource identifiers will use format ",(0,s.jsx)(n.code,{children:"uri"})," and comply with\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3986",children:"RFC 3986"}),". There are other less commonly used formats described in the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#resource-identifiers",children:"JSON Schema documentation"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"uuid"})," format is not supported at this time as we are compliant with draft 07 of the JSON Schema standard.\nInstead, uuid strings shall be constrained with the equivalent uuid versioned regular expression ",(0,s.jsx)(n.code,{children:"pattern"}),". For most\ncases, uuid v4 will be used. When a uuid is used, it shall comply with\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc4122",children:"RFC 4122"}),". The regular expression to be used when specifying uuids will\nbe ",(0,s.jsx)(n.code,{children:"/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i"})," in order to remain version agnostic and maximize\ncompatibility."]}),(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["While there is ",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc9562",children:"RFC 9562"})," which extends RFC 4122 by adding in uuid\nversions 6-8, these are likely not supportable with the ",(0,s.jsx)(n.code,{children:"uuid"})," format yet and will require further review if and when\nthese newer uuid versions are used."]})})]}),"\n",(0,s.jsx)(n.h3,{id:"uri-template",children:"URI Template"}),"\n",(0,s.jsxs)(n.p,{children:["URI Templates with format ",(0,s.jsx)(n.code,{children:"uri-template"})," provide a way to specify a Unique Resource Identifier that contains parameters\nthat must be substituted in before the URI may be resolved. This should comply with\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6570",children:"RFC 6570"}),". Check the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#uri-template",children:"JSON Schema documentation"})," for\nmore details."]}),"\n",(0,s.jsx)(n.h3,{id:"regular-expression",children:"Regular Expression"}),"\n",(0,s.jsxs)(n.p,{children:["Regular expressions with format ",(0,s.jsx)(n.code,{children:"regex"})," should comply with the\n",(0,s.jsx)(n.a,{href:"https://ecma-international.org/publications-and-standards/standards/ecma-262/",children:"ECMA 262"})," dialect. Check the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/string#regular-expressions",children:"JSON Schema documentation"})," for\nmore details."]}),"\n",(0,s.jsx)(n.h2,{id:"numeric",children:"Numeric"}),"\n",(0,s.jsxs)(n.p,{children:["Decimals or floating-point numbers may be represented as a type of numeric value. Note that JSON lacks the ability to\ndifferentiate between integers and floating-point values. It is not possible to reliably infer if the value is an\ninteger or floating-point value solely based on the presence of a decimal point. As such, we recommend using a ",(0,s.jsx)(n.code,{children:"number"}),"\ntype in lieu of the ",(0,s.jsx)(n.code,{children:"integer"})," type for most scenarios that do not require integer level precision."]}),"\n",(0,s.jsxs)(n.p,{children:["Numbers and integers may be optionally constrained by properties such as ",(0,s.jsx)(n.code,{children:"multipleOf"}),", ",(0,s.jsx)(n.code,{children:"minimum"}),", ",(0,s.jsx)(n.code,{children:"maximum"}),",\n",(0,s.jsx)(n.code,{children:"exclusiveMinimum"})," and ",(0,s.jsx)(n.code,{children:"exclusiveMaximum"}),". Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/numeric",children:"JSON Schema documentation"})," for more specific\nexamples."]}),"\n",(0,s.jsx)(n.h2,{id:"object",children:"Object"}),"\n",(0,s.jsxs)(n.p,{children:["Objects are used for unordered key-value mappings. In JSON, the key shall always be a ",(0,s.jsx)(n.a,{href:"#string",children:"string"}),', and a\nkey-value pair is conventionally called a "property". As objects can have various requirements, nestings, and\nstructuring, there is extensive documentation outlining how objects can constrain the key namings, define the required\nand/or expected properties, as well as define relationships and inclusion of other schemas into its own definition.']}),"\n",(0,s.jsxs)(n.p,{children:["More specific details on what can be done can be found in the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/object",children:"JSON Schema documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"array",children:"Array"}),"\n",(0,s.jsxs)(n.p,{children:["Arrays are used to represent ordered elements. JSON permits array elements to consist of different types. As such,\narray definitions may either constrain the type of elements with the ",(0,s.jsx)(n.code,{children:"items"})," keyword, or use the ",(0,s.jsx)(n.code,{children:"contains"})," keyword to\nprovide a looser expectation of what kinds of elements are expected."]}),"\n",(0,s.jsxs)(n.p,{children:["Other array constraints such as ",(0,s.jsx)(n.code,{children:"uniqueness"}),", ",(0,s.jsx)(n.code,{children:"minContains"}),", ",(0,s.jsx)(n.code,{children:"maxContains"}),", ",(0,s.jsx)(n.code,{children:"minItems"})," and ",(0,s.jsx)(n.code,{children:"maxItems"})," may also be used\nto describe the boundaries of the array. Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/array",children:"JSON Schema documentation"})," for more specific examples."]}),"\n",(0,s.jsx)(n.h2,{id:"boolean",children:"Boolean"}),"\n",(0,s.jsxs)(n.p,{children:["Booleans are used to represent only two possible values: ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"}),". While certain languages may evaluate other\nvalues to true or false, they are not accepted by JSON Schema. Ensure that booleans are evaluated and casted first\nprior to encoding. Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/boolean",children:"JSON Schema documentation"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,s.jsxs)(n.p,{children:["Null is used to represent no value, and can only have a single acceptable value ",(0,s.jsx)(n.code,{children:"null"}),". Note that null does not equate\nto the absence of a value, or undefined. Reference the\n",(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/null",children:"JSON Schema documentation"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.h3,{id:"government-standards",children:"Government Standards"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/address_data_standards_-_mailing_delivery_residential.pdf",children:"Address Data Standards: Mailing, Delivery and Residential"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/date_and_time_standard.pdf",children:"Date and Time Standard"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/health-information-standards/standards-catalogue/date-time",children:"B.C. Health Information Standards for Date and Time"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://bcgov.github.io/data-publication/pages/dsg_naming_describing.html",children:"Naming and Describing"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"technical-standards",children:"Technical Standards"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ecma-international.org/publications-and-standards/standards/ecma-262/",children:"ECMA 262"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://json-schema.org/understanding-json-schema/reference/type",children:"JSON Schema Types"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1123",children:"RFC 1123"})," (Internet Hosts)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2373",children:"RFC 2373"})," (IPv6)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2673",children:"RFC 2673"})," (IPv4)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3339",children:"RFC 3339"})," (Date and Time)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3629",children:"RFC 3629"})," (UTF-8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3986",children:"RFC 3986"})," (URI)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc4122",children:"RFC 4122"})," (UUID v1-5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc5321",children:"RFC 5321"})," (Email/SMTP)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc5890",children:"RFC 5890"})," (Internationalized Domain Names)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6531",children:"RFC 6531"})," (Internationalized Email)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6570",children:"RFC 6570"})," (URI Template)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8259",children:"RFC 8259"})," (JSON)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc9562",children:"RFC 9562"})," (UUID v6-8)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"errata",children:"Errata"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ajv.js.org/guide/schema-language.html#json-schema",children:"JSON Schema Version Comparison"})}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var r=t(67294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);