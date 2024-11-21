---
title: applications.py
sidebar_position: 2
---

# Application Overview

The application entry point initializes and configures the **Panorah Framework** by defining routes, middleware, and plugins. It uses **Litestar** as the underlying framework for handling requests and responses, providing a modular and extensible architecture.



## Key Components

### **1. Application Initialization**
The `construct_app()` function builds and configures the Litestar application. This includes:
- **Debugging**: Controlled by the `settings.app.DEBUG` configuration.
- **CORS**: Configured via `Config.CORS_CONFIG` to define allowed origins.
- **Response Headers**: Injects custom headers from `Config.RESPONSE_HEADERS`.



### **2. Plugins**
The application integrates the **GranianPlugin** for optimized ASGI performance, enabling high-concurrency scenarios.

```python
plugins=[
    GranianPlugin(),
]
