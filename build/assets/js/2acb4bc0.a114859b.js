"use strict";(self.webpackChunkpanorah_documentation=self.webpackChunkpanorah_documentation||[]).push([[456],{2773:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var t=s(4848),i=s(8453);const d={title:"Deleting a Document",sidebar_position:4},l="Deleting a Document",r={id:"tutorial/delete_document",title:"Deleting a Document",description:"This section explains the backend processes, schemas, and functions involved in deleting a document (record) from a DocType in the Panorah Framework.",source:"@site/docs/tutorial/delete_document.md",sourceDirName:"tutorial",slug:"/tutorial/delete_document",permalink:"/docs/tutorial/delete_document",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/delete_document.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Deleting a Document",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Fetching Data",permalink:"/docs/tutorial/fetch_data"},next:{title:"Updating a Document",permalink:"/docs/tutorial/update_doc"}},c={},o=[{value:"Backend Schemas Used",id:"backend-schemas-used",level:2},{value:"<strong>1. <code>ConditionDictSchema</code></strong>",id:"1-conditiondictschema",level:3},{value:"<strong>2. <code>DataFetchResponseSchema</code></strong>",id:"2-datafetchresponseschema",level:3},{value:"Backend Functions Used",id:"backend-functions-used",level:2},{value:"<strong>1. <code>DocTypeController.delete_data()</code></strong>",id:"1-doctypecontrollerdelete_data",level:3},{value:"<strong>2. <code>DynamicDataOperation.delete_table_value()</code></strong>",id:"2-dynamicdataoperationdelete_table_value",level:3},{value:"<strong>3. <code>NestedSets.delete_child()</code></strong>",id:"3-nestedsetsdelete_child",level:3},{value:"Example Payload",id:"example-payload",level:2},{value:"Delete Using Conditions",id:"delete-using-conditions",level:3}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deleting-a-document",children:"Deleting a Document"})}),"\n",(0,t.jsxs)(n.p,{children:["This section explains the backend processes, schemas, and functions involved in deleting a document (record) from a ",(0,t.jsx)(n.strong,{children:"DocType"})," in the ",(0,t.jsx)(n.strong,{children:"Panorah Framework"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"backend-schemas-used",children:"Backend Schemas Used"}),"\n",(0,t.jsx)(n.h3,{id:"1-conditiondictschema",children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"ConditionDictSchema"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Defines the structure for specifying conditions for deleting records."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fields"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"condition_dict"})}),": A dictionary of field-value pairs to identify the records to delete."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-datafetchresponseschema",children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"DataFetchResponseSchema"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Defines the structure of the response after deletion."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fields"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"status"})}),": Indicates success or failure of the deletion operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"message"})}),": Describes the outcome."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})}),": Contains additional information about the deleted records, if applicable."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"backend-functions-used",children:"Backend Functions Used"}),"\n",(0,t.jsx)(n.h3,{id:"1-doctypecontrollerdelete_data",children:(0,t.jsxs)(n.strong,{children:["1. ",(0,t.jsx)(n.code,{children:"DocTypeController.delete_data()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Handles the deletion request and delegates the operation to the appropriate utility functions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Key Steps"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Validates and extracts the ",(0,t.jsx)(n.code,{children:"table_name"})," and ",(0,t.jsx)(n.code,{children:"condition_dict"})," from the request."]}),"\n",(0,t.jsxs)(n.li,{children:["Passes the ",(0,t.jsx)(n.code,{children:"table_name"})," and ",(0,t.jsx)(n.code,{children:"condition_dict"})," to ",(0,t.jsx)(n.code,{children:"DynamicDataOperation.delete_table_value()"})," for database deletion."]}),"\n",(0,t.jsxs)(n.li,{children:["Returns the result in the ",(0,t.jsx)(n.code,{children:"DataFetchResponseSchema"})," format."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-dynamicdataoperationdelete_table_value",children:(0,t.jsxs)(n.strong,{children:["2. ",(0,t.jsx)(n.code,{children:"DynamicDataOperation.delete_table_value()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Performs the actual deletion of records from the database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Responsibilities"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Resolves the ORM model for the specified ",(0,t.jsx)(n.code,{children:"table_name"})," using ",(0,t.jsx)(n.code,{children:"PiccoloHelper.get_table_class()"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Builds database filters from the ",(0,t.jsx)(n.code,{children:"condition_dict"})," to identify matching records."]}),"\n",(0,t.jsx)(n.li,{children:"Deletes related child records if the DocType has hierarchical relationships."}),"\n",(0,t.jsxs)(n.li,{children:["For hierarchical data (",(0,t.jsx)(n.code,{children:"is_tree"}),"), calls ",(0,t.jsx)(n.code,{children:"NestedSets.delete_child()"})," to handle tree-specific deletions."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Key Steps"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Validate ",(0,t.jsx)(n.code,{children:"condition_dict"})]}),":",(0,t.jsx)(n.br,{}),"\n","Ensures it contains valid field-value pairs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Build Filters"}),":",(0,t.jsx)(n.br,{}),"\n","Constructs filters based on the provided conditions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Handle Child Records"}),":",(0,t.jsx)(n.br,{}),"\n","For child tables, deletes related child records recursively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tree-Specific Deletion"}),":",(0,t.jsx)(n.br,{}),"\n","For ",(0,t.jsx)(n.code,{children:"is_tree"})," DocTypes, deletes hierarchical data using ",(0,t.jsx)(n.code,{children:"NestedSets.delete_child()"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Execute Deletion"}),":",(0,t.jsx)(n.br,{}),"\n","Executes the delete query on the database for matching records."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-nestedsetsdelete_child",children:(0,t.jsxs)(n.strong,{children:["3. ",(0,t.jsx)(n.code,{children:"NestedSets.delete_child()"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),":",(0,t.jsx)(n.br,{}),"\n","Handles deletion of nodes in hierarchical (tree) DocTypes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role in Deletion"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensures that all child nodes under a specified parent node are deleted correctly."}),"\n",(0,t.jsx)(n.li,{children:"Updates the tree structure to maintain consistency."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-payload",children:"Example Payload"}),"\n",(0,t.jsx)(n.h3,{id:"delete-using-conditions",children:"Delete Using Conditions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n  "table_name": "Invoice",\r\n  "condition_dict": {\r\n    "name": ["CRI-11-78","CRI-11-80"]\r\n  }\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(6540);const i={},d=t.createContext(i);function l(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);