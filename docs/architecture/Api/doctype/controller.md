---
title: controller.py
sidebar_position: 2
---

# Controllers Module Overview

The `controllers.py` file serves as the central hub for managing and executing backend operations within the **Panorah Framework**. It defines the logic for interacting with database tables, handling dynamic operations, and supporting the creation, retrieval, and manipulation of data through various controller methods.



## Key Responsibilities

1. **DocType Management**:
   - Facilitates the creation, updating, and deletion of `DocType` entities.
   - Dynamically generates metadata files, ORM classes, and handles migrations for new or modified `DocType` structures.

2. **Dynamic Data Operations**:
   - Enables operations like data insertion, updates, deletion, and retrieval from database tables.
   - Supports filtering and joining data across related tables.

3. **File Management**:
   - Provides methods for file uploads and linking uploaded files to specific database records.

4. **Configuration and Migration**:
   - Automates the rewriting of Piccolo configuration files (`piccolo_app.py` and `piccolo_conf.py`) to reflect changes in the application's data structure.
   - Manages database migrations and hooks for schema updates.



## Highlights of Features

### 1. **Dynamic ORM Class Generation**
- Dynamically generates Piccolo ORM models based on the provided schema fields.
- Supports complex scenarios like hierarchical data (`is_tree`) and child tables (`is_child`).

### 2. **Type-Safe Data Handling**
- Leverages schemas (`DocTypeRequestSchema`, `DataFetchResponseSchema`, etc.) to ensure structured and validated data processing.

### 3. **Error Handling and Logging**
- Provides detailed error handling for database transactions and unexpected exceptions.
- Integrates with `loguru` for comprehensive logging and debugging.

### 4. **File Metadata Management**
- Handles metadata generation, ensuring fields like `created_at`, `updated_at`, and `status` are consistently maintained.


## Modular Functionality

### **Key Methods**
1. **DocType Operations**:
   - `create()`: Creates a new `DocType`, its metadata, and related ORM class.
   - `add_column()`, `delete_column()`, `rename_column()`: Manages schema alterations for `DocType`.

2. **Data Operations**:
   - `fetch_table_data()`, `insert_data()`, `update_data()`, `delete_data()`: Performs CRUD operations on tables.

3. **Configuration Updates**:
   - `rewrite_piccolo_app_config()`, `rewrite_piccolo_config()`: Updates application configurations for Piccolo migrations.

4. **File Handling**:
   - `upload_files()`: Handles uploading and linking of files to records.

5. **Utility Methods**:
   - `generate_orm_class()`: Dynamically generates ORM models.
   - `build_fields()`: Converts schema definitions into Piccolo-compatible field structures.



## Purpose

The `controllers.py` module is a cornerstone of the Panorah Framework, providing the logic required to bridge the gap between database interactions and high-level framework features. Its modular and extensible design ensures it can support complex workflows while maintaining type safety and flexibility.

