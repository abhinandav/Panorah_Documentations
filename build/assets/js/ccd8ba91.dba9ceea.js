"use strict";(self.webpackChunkpanorah_documentation=self.webpackChunkpanorah_documentation||[]).push([[376],{826:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(4848),r=n(8453);const i={title:"dto.py",sidebar_position:5},d="DTO Module Overview",o={id:"architecture/Api/doctype/dto",title:"dto.py",description:"The DTO (Data Transfer Object) module in the Panorah Framework bridges the gap between schemas and business logic. It utilizes MsgspecDTO from Litestar to convert, validate, and manage data transfer efficiently between the framework's components and external systems.",source:"@site/docs/architecture/Api/doctype/dto.md",sourceDirName:"architecture/Api/doctype",slug:"/architecture/Api/doctype/dto",permalink:"/docs/architecture/Api/doctype/dto",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/Api/doctype/dto.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"dto.py",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"schema.py",permalink:"/docs/architecture/Api/doctype/schema"}},c={},a=[{value:"Purpose of DTOs",id:"purpose-of-dtos",level:2},{value:"<strong>What are DTOs?</strong>",id:"what-are-dtos",level:3},{value:"<strong>Why Use DTOs?</strong>",id:"why-use-dtos",level:3},{value:"Why Use <code>MsgspecDTO</code>?",id:"why-use-msgspecdto",level:2},{value:"<strong>1. Schema Validation</strong>",id:"1-schema-validation",level:3},{value:"<strong>2. Serialization and Deserialization</strong>",id:"2-serialization-and-deserialization",level:3},{value:"<strong>3. Type-Safe Operations</strong>",id:"3-type-safe-operations",level:3},{value:"<strong>4. Reusability</strong>",id:"4-reusability",level:3},{value:"Key Components",id:"key-components",level:2},{value:"<strong>DTO Definitions</strong>",id:"dto-definitions",level:3},{value:"Benefits of Using DTOs",id:"benefits-of-using-dtos",level:2},{value:"<strong>1. Centralized Validation</strong>",id:"1-centralized-validation",level:3},{value:"<strong>2. Consistent Interfaces</strong>",id:"2-consistent-interfaces",level:3},{value:"<strong>3. Performance Optimization</strong>",id:"3-performance-optimization",level:3},{value:"<strong>4. Easy Integration</strong>",id:"4-easy-integration",level:3},{value:"Example: Using a DTO",id:"example-using-a-dto",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"dto-module-overview",children:"DTO Module Overview"})}),"\n",(0,t.jsxs)(s.p,{children:["The DTO (Data Transfer Object) module in the ",(0,t.jsx)(s.strong,{children:"Panorah Framework"})," bridges the gap between schemas and business logic. It utilizes ",(0,t.jsx)(s.code,{children:"MsgspecDTO"})," from ",(0,t.jsx)(s.strong,{children:"Litestar"})," to convert, validate, and manage data transfer efficiently between the framework's components and external systems."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"purpose-of-dtos",children:"Purpose of DTOs"}),"\n",(0,t.jsx)(s.h3,{id:"what-are-dtos",children:(0,t.jsx)(s.strong,{children:"What are DTOs?"})}),"\n",(0,t.jsx)(s.p,{children:"Data Transfer Objects (DTOs) are specialized objects that facilitate data exchange:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Between different layers of the framework (e.g., controllers and services)."}),"\n",(0,t.jsx)(s.li,{children:"Between the framework and external systems (e.g., APIs)."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"why-use-dtos",children:(0,t.jsx)(s.strong,{children:"Why Use DTOs?"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Validation"}),": Ensures that the data exchanged adheres to the expected structure."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Decoupling"}),": Separates business logic from data representation, promoting maintainability."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Performance"}),": ",(0,t.jsx)(s.code,{children:"MsgspecDTO"})," enhances performance by leveraging ",(0,t.jsx)(s.code,{children:"msgspec"}),"\u2019s serialization and validation capabilities."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.h2,{id:"why-use-msgspecdto",children:["Why Use ",(0,t.jsx)(s.code,{children:"MsgspecDTO"}),"?"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Litestar DTO system"})," allows the framework to define custom DTOs using ",(0,t.jsx)(s.code,{children:"MsgspecDTO"}),". This provides the following advantages:"]}),"\n",(0,t.jsx)(s.h3,{id:"1-schema-validation",children:(0,t.jsx)(s.strong,{children:"1. Schema Validation"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"MsgspecDTO"})," automatically validates data against the associated schema (",(0,t.jsx)(s.code,{children:"Struct"}),") before passing it to or from the framework."]}),"\n",(0,t.jsx)(s.h3,{id:"2-serialization-and-deserialization",children:(0,t.jsx)(s.strong,{children:"2. Serialization and Deserialization"})}),"\n",(0,t.jsx)(s.p,{children:"Handles the conversion of data to and from JSON or other formats efficiently."}),"\n",(0,t.jsx)(s.h3,{id:"3-type-safe-operations",children:(0,t.jsx)(s.strong,{children:"3. Type-Safe Operations"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Ensures data type consistency throughout the framework."}),"\n",(0,t.jsx)(s.li,{children:"Reduces runtime errors by enforcing schema-defined types."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"4-reusability",children:(0,t.jsx)(s.strong,{children:"4. Reusability"})}),"\n",(0,t.jsx)(s.p,{children:"DTOs can be reused across multiple components (e.g., controllers, services), reducing redundancy."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"key-components",children:"Key Components"}),"\n",(0,t.jsx)(s.h3,{id:"dto-definitions",children:(0,t.jsx)(s.strong,{children:"DTO Definitions"})}),"\n",(0,t.jsxs)(s.p,{children:["Each schema in the ",(0,t.jsx)(s.code,{children:"schema.py"})," file is paired with a corresponding DTO for validation and transformation."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DTO Class"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Schema"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DocTypeRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DocTypeRequestSchema"})}),(0,t.jsx)(s.td,{children:"For creating or managing DocTypes."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DocTypeResponseDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DocTypeResponseSchema"})}),(0,t.jsx)(s.td,{children:"For responses related to DocType operations."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DataFetchResponseDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DataFetchResponseSchema"})}),(0,t.jsx)(s.td,{children:"For returning fetched data."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"InsertDataRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"InsertDataRequestSchema"})}),(0,t.jsx)(s.td,{children:"For inserting data into tables."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"UpdateDataRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"UpdateDataRequestSchema"})}),(0,t.jsx)(s.td,{children:"For updating table data."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ConditionDictSchemaDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ConditionDictSchema"})}),(0,t.jsx)(s.td,{children:"For specifying query conditions."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PolicyRequestSchemaDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PolicyRequestSchema"})}),(0,t.jsx)(s.td,{children:"For creating or managing policies."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PolicyResponseSchemaDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PolicyResponseSchema"})}),(0,t.jsx)(s.td,{children:"For responses related to policy operations."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FilterRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FilterRequestSchema"})}),(0,t.jsx)(s.td,{children:"For applying filters to data queries."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FilterResponseDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DataFetchResponseSchema"})}),(0,t.jsx)(s.td,{children:"For responses related to filtered data."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"JoinRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"JoinTableRequestSchema"})}),(0,t.jsx)(s.td,{children:"For specifying table join operations."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"AlterRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"AlterTableRequestSchema"})}),(0,t.jsx)(s.td,{children:"For altering table schemas."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"AlterColumnNameRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"AlterColumnNameRequestSchema"})}),(0,t.jsx)(s.td,{children:"For renaming columns."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"AddColumnRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"AddColumnRequestSchema"})}),(0,t.jsx)(s.td,{children:"For adding columns to tables."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DeleteColumnRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"DeleteColumnRequestSchema"})}),(0,t.jsx)(s.td,{children:"For deleting columns from tables."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FileUploadRequestDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FileUploadRequestSchema"})}),(0,t.jsx)(s.td,{children:"For handling file upload requests."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FileUploadResponseDTO"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FileUploadResponseSchema"})}),(0,t.jsx)(s.td,{children:"For responses related to file uploads."})]})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"benefits-of-using-dtos",children:"Benefits of Using DTOs"}),"\n",(0,t.jsx)(s.h3,{id:"1-centralized-validation",children:(0,t.jsx)(s.strong,{children:"1. Centralized Validation"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"All data is validated and transformed consistently using the defined DTOs."}),"\n",(0,t.jsx)(s.li,{children:"Reduces duplication of validation logic across different parts of the framework."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"2-consistent-interfaces",children:(0,t.jsx)(s.strong,{children:"2. Consistent Interfaces"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Ensures that data passed to and from controllers adheres to a strict contract."}),"\n",(0,t.jsx)(s.li,{children:"Makes the framework\u2019s API predictable and easier to work with."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"3-performance-optimization",children:(0,t.jsx)(s.strong,{children:"3. Performance Optimization"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"MsgspecDTO"})," leverages ",(0,t.jsx)(s.code,{children:"msgspec"}),", a high-performance serialization library, ensuring efficient data handling."]}),"\n",(0,t.jsx)(s.li,{children:"Ideal for large-scale applications requiring low-latency operations."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"4-easy-integration",children:(0,t.jsx)(s.strong,{children:"4. Easy Integration"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"DTOs integrate seamlessly with Litestar controllers, simplifying request and response management."}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"example-using-a-dto",children:"Example: Using a DTO"}),"\n",(0,t.jsx)(s.p,{children:"Here\u2019s an example of how a DTO integrates with a controller:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'from src.panorah_framework.api.doctype.dto import DocTypeRequestDTO\r\nfrom src.panorah_framework.api.doctype.schema import DocTypeResponseSchema\r\n\r\nclass DocTypeView(Controller):\r\n    path = "/document"\r\n\r\n    @post("/", dto=DocTypeRequestDTO, return_dto=DocTypeResponseDTO)\r\n    async def create(self, data: DocTypeRequestSchema) -> DocTypeResponseSchema:\r\n        # Use the validated schema (data) for further operations\r\n        return await DocTypeController.create(data)\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(6540);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);