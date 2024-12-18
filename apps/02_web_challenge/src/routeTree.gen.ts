/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as SearchImport } from './routes/search';
import { Route as IndexImport } from './routes/index';
import { Route as OrgIndexImport } from './routes/$org/index';

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const OrgIndexRoute = OrgIndexImport.update({
  id: '/$org/',
  path: '/$org/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/search': {
      id: '/search';
      path: '/search';
      fullPath: '/search';
      preLoaderRoute: typeof SearchImport;
      parentRoute: typeof rootRoute;
    };
    '/$org/': {
      id: '/$org/';
      path: '/$org';
      fullPath: '/$org';
      preLoaderRoute: typeof OrgIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/search': typeof SearchRoute;
  '/$org': typeof OrgIndexRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/search': typeof SearchRoute;
  '/$org': typeof OrgIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/search': typeof SearchRoute;
  '/$org/': typeof OrgIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/search' | '/$org';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/search' | '/$org';
  id: '__root__' | '/' | '/search' | '/$org/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  SearchRoute: typeof SearchRoute;
  OrgIndexRoute: typeof OrgIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SearchRoute: SearchRoute,
  OrgIndexRoute: OrgIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/search",
        "/$org/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/$org/": {
      "filePath": "$org/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */