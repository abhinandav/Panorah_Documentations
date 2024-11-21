import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/architecture',
    component: ComponentCreator('/architecture', '8a2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/panorah-architecture',
    component: ComponentCreator('/panorah-architecture', '3d3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2b4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '218'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '927'),
            routes: [
              {
                path: '/docs/architecture/Api/applications',
                component: ComponentCreator('/docs/architecture/Api/applications', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Api/doctype/controller',
                component: ComponentCreator('/docs/architecture/Api/doctype/controller', '4d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Api/doctype/dao',
                component: ComponentCreator('/docs/architecture/Api/doctype/dao', '60d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Api/doctype/dto',
                component: ComponentCreator('/docs/architecture/Api/doctype/dto', 'cd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Api/doctype/schema',
                component: ComponentCreator('/docs/architecture/Api/doctype/schema', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Api/doctype/views',
                component: ComponentCreator('/docs/architecture/Api/doctype/views', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/Api/indtroduction',
                component: ComponentCreator('/docs/architecture/Api/indtroduction', 'b4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/start',
                component: ComponentCreator('/docs/architecture/start', '06f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/architecture',
                component: ComponentCreator('/docs/category/architecture', '6d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial',
                component: ComponentCreator('/docs/category/tutorial', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/introduction',
                component: ComponentCreator('/docs/getting-started/introduction', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/Prerequisites',
                component: ComponentCreator('/docs/getting-started/Prerequisites', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/create_doctype',
                component: ComponentCreator('/docs/tutorial/create_doctype', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/delete_document',
                component: ComponentCreator('/docs/tutorial/delete_document', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/exeute_function',
                component: ComponentCreator('/docs/tutorial/exeute_function', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/fetch_data',
                component: ComponentCreator('/docs/tutorial/fetch_data', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/file_upload',
                component: ComponentCreator('/docs/tutorial/file_upload', '1ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/filter_sort',
                component: ComponentCreator('/docs/tutorial/filter_sort', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/insert_to_doctype',
                component: ComponentCreator('/docs/tutorial/insert_to_doctype', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/update_doc',
                component: ComponentCreator('/docs/tutorial/update_doc', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
