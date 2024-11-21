---
title: API Overview
sidebar_position: 1
---
# API Overview

This section provides a detailed look into the core components of the `api` module, its architecture, and how it powers the framework.

## Structure of the API Module

The `api` module is structured into key components to ensure modularity, scalability, and maintainability:

```bash
src/
├── panorah_framework/
│   │ 
│   ├── api/
│   │   ├── applications.py
│   │   ├── granian_app.py
│   │   ├── hypercorn_app.py
│   │   ├── lifespan.py
│   │   └── doctype/
│   │       ├── views.py
│   │       ├── controller.py
│   │       ├── dao.py
│   │       ├── dto.py
│   │       └── schema.py

```

### Top-Level Files
- **`applications.py`**: Manages application lifecycle, including initialization, middleware, and routing.
- **`granian_app.py`**: Provides integration with the Granian ASGI server, enabling high-performance request handling.
- **`lifespan.py`**: 
- **`hypercorn_app.py`**: 

### Doctype Submodule
The `doctype` submodule is a critical part of the framework's backend, handling various operations like views, controllers, data access, and data transfer.

- **`views.py`**: Defines the presentation logic for interacting with clients.
- **`controller.py`**: Implements business logic and handles request processing.
- **`dao.py`**: Manages database interactions and queries.
- **`dto.py`**: Defines Data Transfer Objects for consistent data exchange.
- **`schema.py`**: Handles data validation and serialization.

## How to Use This Documentation

This section is divided into the following parts:

1. **Top-Level Modules**:  
   Detailed descriptions of ` applications.py ` , ` granian_app.py `, ` lifespan.py ` and ` granian_app.py `  including their purpose, key functions, and usage examples.

2. **Doctype Submodule**:  
   Comprehensive documentation for each file in the `doctype` folder, explaining its role and providing code snippets.

Navigate through the sidebar to explore each file and learn how it fits into the overall architecture of the Panorah Framework.

## Quick Links
- [Applications Module](./applications.md)
- [Granian App Module](./granian_app.md)
- [Doctype Submodule](./doctype/views.md)
