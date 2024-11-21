"use strict";(self.webpackChunkpanorah_documentation=self.webpackChunkpanorah_documentation||[]).push([[542],{5763:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=i(4848),a=i(8453);const r={title:"dao.py",sidebar_position:3},l="DAO Module Overview",t={id:"architecture/Api/doctype/dao",title:"dao.py",description:"The dao.py (Data Access Object) module in the Panorah Framework provides an abstraction layer for interacting with the framework\u2019s data layer. It encapsulates database operations, handles hierarchical data, manages metadata, and performs complex queries, making it a critical component for streamlined and reusable data management.",source:"@site/docs/architecture/Api/doctype/dao.md",sourceDirName:"architecture/Api/doctype",slug:"/architecture/Api/doctype/dao",permalink:"/docs/architecture/Api/doctype/dao",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/Api/doctype/dao.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"dao.py",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"controller.py",permalink:"/docs/architecture/Api/doctype/controller"},next:{title:"schema.py",permalink:"/docs/architecture/Api/doctype/schema"}},d={},c=[{value:"Key Responsibilities",id:"key-responsibilities",level:2},{value:"<strong>1. Data Fetching</strong>",id:"1-data-fetching",level:3},{value:"<strong>2. Data Manipulation</strong>",id:"2-data-manipulation",level:3},{value:"<strong>3. Filtering and Sorting</strong>",id:"3-filtering-and-sorting",level:3},{value:"<strong>4. Table Joins</strong>",id:"4-table-joins",level:3},{value:"<strong>5. Hierarchical Data Handling</strong>",id:"5-hierarchical-data-handling",level:3},{value:"<strong>6. File Uploads</strong>",id:"6-file-uploads",level:3},{value:"<strong>7. Metadata Management</strong>",id:"7-metadata-management",level:3},{value:"Utility Functions",id:"utility-functions",level:2},{value:"<strong>Dynamic Operations</strong>",id:"dynamic-operations",level:3},{value:"Error Handling and Logging",id:"error-handling-and-logging",level:2},{value:"Purpose",id:"purpose",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dao-module-overview",children:"DAO Module Overview"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"dao.py"})," (Data Access Object) module in the ",(0,s.jsx)(n.strong,{children:"Panorah Framework"})," provides an abstraction layer for interacting with the framework\u2019s data layer. It encapsulates database operations, handles hierarchical data, manages metadata, and performs complex queries, making it a critical component for streamlined and reusable data management."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"key-responsibilities",children:"Key Responsibilities"}),"\n",(0,s.jsx)(n.h3,{id:"1-data-fetching",children:(0,s.jsx)(n.strong,{children:"1. Data Fetching"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fetch_data()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieves data from a specified table based on conditions."}),"\n",(0,s.jsx)(n.li,{children:"Supports both flat and hierarchical (tree-like) structures."}),"\n",(0,s.jsx)(n.li,{children:"Incorporates child table data if specified in the metadata."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fetch_data_by_id()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fetches data for a specific record by its ID."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fetch_all_app_doctypes()"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fetch_all_app_names()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Retrieves all ",(0,s.jsx)(n.code,{children:"DocTypes"})," or application names for a given app."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"2-data-manipulation",children:(0,s.jsx)(n.strong,{children:"2. Data Manipulation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"insert_table_value()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Handles the insertion of data into tables, including handling child table data recursively for hierarchical relationships."}),"\n",(0,s.jsxs)(n.li,{children:["Ensures naming consistency using the ",(0,s.jsx)(n.code,{children:"NameGeneratorService"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"update_table_value()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updates data in a table based on conditions."}),"\n",(0,s.jsx)(n.li,{children:"Manages parent-child relationships when updating hierarchical data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"delete_table_value()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deletes data from a table based on conditions."}),"\n",(0,s.jsx)(n.li,{children:"Handles cascading deletions for child tables and nested structures."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"3-filtering-and-sorting",children:(0,s.jsx)(n.strong,{children:"3. Filtering and Sorting"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"filter_data()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Applies filters on a table to fetch data with advanced operations such as ",(0,s.jsx)(n.code,{children:"equals"}),", ",(0,s.jsx)(n.code,{children:"not_equals"}),", ",(0,s.jsx)(n.code,{children:"like"}),", ",(0,s.jsx)(n.code,{children:"in"}),", ",(0,s.jsx)(n.code,{children:"is_null"}),", etc."]}),"\n",(0,s.jsx)(n.li,{children:"Supports sorting by field and order (ascending or descending)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"apply_sorting()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adds sorting to queries based on a specified field and order."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"4-table-joins",children:(0,s.jsx)(n.strong,{children:"4. Table Joins"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"join_tables()"})}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Joins two tables based on a specified column."}),"\n",(0,s.jsx)(n.li,{children:"Facilitates combining related data for complex queries."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"5-hierarchical-data-handling",children:(0,s.jsx)(n.strong,{children:"5. Hierarchical Data Handling"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"build_tree()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recursively builds a tree structure for hierarchical data."}),"\n",(0,s.jsx)(n.li,{children:"Fetches child data and nests it under parent nodes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"fetch_child_data()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieves and organizes child table data for a specific node."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"6-file-uploads",children:(0,s.jsx)(n.strong,{children:"6. File Uploads"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"upload_files()"})}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Handles file uploads and associates them with specified database records."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"7-metadata-management",children:(0,s.jsx)(n.strong,{children:"7. Metadata Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"MetaDataService"})}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrieves metadata (fields, configurations) for a table from its associated metadata file."}),"\n",(0,s.jsx)(n.li,{children:"Ensures that child relationships and field attributes are respected during operations."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,s.jsx)(n.h3,{id:"dynamic-operations",children:(0,s.jsx)(n.strong,{children:"Dynamic Operations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"get_table_class()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Resolves and returns the ORM class for a specified table."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"get_doctype_folder()"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Resolves the folder location for a ",(0,s.jsx)(n.code,{children:"DocType"})," and its metadata files."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"error-handling-and-logging",children:"Error Handling and Logging"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Comprehensive error handling for invalid inputs, missing metadata files, and database exceptions."}),"\n",(0,s.jsxs)(n.li,{children:["Integrates with ",(0,s.jsx)(n.code,{children:"loguru"})," for detailed logging of exceptions and operations."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"dao.py"})," module provides a flexible and robust foundation for interacting with the database. It abstracts away complex database operations, making it easier to manage hierarchical data, handle dynamic table schemas, and ensure consistent and efficient data access throughout the framework."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var s=i(6540);const a={},r=s.createContext(a);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);