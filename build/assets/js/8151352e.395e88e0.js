"use strict";(self.webpackChunkpanorah_documentation=self.webpackChunkpanorah_documentation||[]).push([[739],{7914:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(4848),i=s(8453);const r={title:"Inserting Data",sidebar_position:2},o="Inserting Data into a DocType",l={id:"tutorial/insert_to_doctype",title:"Inserting Data",description:"This tutorial will guide you through the process of inserting data into an existing DocType. You'll learn about the required payload structure, key terminologies, and the backend functions involved.",source:"@site/docs/tutorial/insert_to_doctype.md",sourceDirName:"tutorial",slug:"/tutorial/insert_to_doctype",permalink:"/docs/tutorial/insert_to_doctype",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/insert_to_doctype.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Inserting Data",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating a DocType",permalink:"/docs/tutorial/create_doctype"},next:{title:"Fetching Data",permalink:"/docs/tutorial/fetch_data"}},a={},c=[{value:"Payload for Inserting Data",id:"payload-for-inserting-data",level:2},{value:"Terminologies",id:"terminologies",level:3},{value:"<strong>Example</strong>",id:"example",level:3},{value:"Backend Functions Used",id:"backend-functions-used",level:2},{value:"<strong>1. <code>DocTypeController.insert_data()</code></strong>",id:"1-doctypecontrollerinsert_data",level:3},{value:"<strong>2. <code>PayloadProcessor.convert_to_timestamp()</code></strong>",id:"2-payloadprocessorconvert_to_timestamp",level:3},{value:"<strong>3. <code>DynamicDataOperation.insert_table_value()</code></strong>",id:"3-dynamicdataoperationinsert_table_value",level:3},{value:"<strong>4. <code>PiccoloHelper.get_table_class()</code></strong>",id:"4-piccolohelperget_table_class",level:3},{value:"<strong>5. <code>DocTypeController.fetch_table_data()</code></strong> (Post-Insertion Verification)",id:"5-doctypecontrollerfetch_table_data-post-insertion-verification",level:3}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"inserting-data-into-a-doctype",children:"Inserting Data into a DocType"})}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial will guide you through the process of inserting data into an existing ",(0,t.jsx)(n.strong,{children:"DocType"}),". You'll learn about the required payload structure, key terminologies, and the backend functions involved."]}),"\n",(0,t.jsx)(n.h2,{id:"payload-for-inserting-data",children:"Payload for Inserting Data"}),"\n",(0,t.jsxs)(n.p,{children:["To insert data into a ",(0,t.jsx)(n.strong,{children:"DocType"}),", you need to send a JSON payload in the following format:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n  "table_name": "",\r\n  "payload": null\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"terminologies",children:"Terminologies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"table_name"})})," : The name of the DocType into which the data will be inserted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"payload"})})," : A dictionary that contains the fields and their respective values, corresponding to the DocType's structure."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n  "table_name": "Invoice",\r\n  "payload": {\r\n    "customer_name": "John Doe",\r\n    "total_amount": 1500.00\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"backend-functions-used",children:"Backend Functions Used"}),"\n",(0,t.jsx)(n.h3,{id:"1-doctypecontrollerinsert_data",children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"DocTypeController.insert_data()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Handles the high-level logic for data insertion."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Steps"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Extracts ",(0,t.jsx)(n.code,{children:"table_name"})," and ",(0,t.jsx)(n.code,{children:"payload"})," from the request."]}),"\n",(0,t.jsxs)(n.li,{children:["Validates and processes the ",(0,t.jsx)(n.code,{children:"payload"})," (e.g., converting timestamps or relationships)."]}),"\n",(0,t.jsxs)(n.li,{children:["Delegates the insertion to ",(0,t.jsx)(n.code,{children:"DynamicDataOperation.insert_table_value()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-payloadprocessorconvert_to_timestamp",children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"PayloadProcessor.convert_to_timestamp()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Converts fields in the payload (e.g., ",(0,t.jsx)(n.code,{children:"Datetime"})," fields) into a timestamp format compatible with the database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Role in Insertion"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Processes the payload and applies transformations for fields like ",(0,t.jsx)(n.code,{children:"created_at"}),", ",(0,t.jsx)(n.code,{children:"updated_at"}),", etc., based on the DocType schema."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-dynamicdataoperationinsert_table_value",children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"DynamicDataOperation.insert_table_value()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Handles the actual insertion of data into the database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Responsibilities"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Resolves the ORM model for the given ",(0,t.jsx)(n.code,{children:"table_name"})," using ",(0,t.jsx)(n.code,{children:"PiccoloHelper.get_table_class()"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Processes relationships (e.g., inserting child table records recursively if ",(0,t.jsx)(n.code,{children:"payload"})," contains nested data)."]}),"\n",(0,t.jsx)(n.li,{children:"Inserts the record into the database using the resolved ORM model."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example Flow"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Validates the existence of the ",(0,t.jsx)(n.code,{children:"table_name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For nested child tables, loops through the child records and inserts them with a ",(0,t.jsx)(n.code,{children:"parent"})," reference."]}),"\n",(0,t.jsx)(n.li,{children:"Saves the main record using Piccolo ORM."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-piccolohelperget_table_class",children:(0,t.jsxs)(n.strong,{children:["4. ",(0,t.jsx)(n.code,{children:"PiccoloHelper.get_table_class()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Dynamically resolves the ORM class for the specified ",(0,t.jsx)(n.code,{children:"table_name"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Role in Insertion"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures the correct table schema is used during the insertion process."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"5-doctypecontrollerfetch_table_data-post-insertion-verification",children:[(0,t.jsxs)(n.strong,{children:["5. ",(0,t.jsx)(n.code,{children:"DocTypeController.fetch_table_data()"})]})," (Post-Insertion Verification)"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Fetches the inserted data for validation or returning it in the response."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Role in Insertion"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verifies that the data was correctly inserted by querying the database."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);