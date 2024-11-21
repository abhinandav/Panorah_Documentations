---
title: dao.py
sidebar_position: 3
---

# DAO Module Overview

The `dao.py` (Data Access Object) module in the **Panorah Framework** provides an abstraction layer for interacting with the framework’s data layer. It encapsulates database operations, handles hierarchical data, manages metadata, and performs complex queries, making it a critical component for streamlined and reusable data management.

---

## Key Responsibilities

### **1. Data Fetching**
- **`fetch_data()`**:
  - Retrieves data from a specified table based on conditions.
  - Supports both flat and hierarchical (tree-like) structures.
  - Incorporates child table data if specified in the metadata.

- **`fetch_data_by_id()`**:
  - Fetches data for a specific record by its ID.

- **`fetch_all_app_doctypes()`** and **`fetch_all_app_names()`**:
  - Retrieves all `DocTypes` or application names for a given app.

---

### **2. Data Manipulation**
- **`insert_table_value()`**:
  - Handles the insertion of data into tables, including handling child table data recursively for hierarchical relationships.
  - Ensures naming consistency using the `NameGeneratorService`.

- **`update_table_value()`**:
  - Updates data in a table based on conditions.
  - Manages parent-child relationships when updating hierarchical data.

- **`delete_table_value()`**:
  - Deletes data from a table based on conditions.
  - Handles cascading deletions for child tables and nested structures.

---

### **3. Filtering and Sorting**
- **`filter_data()`**:
  - Applies filters on a table to fetch data with advanced operations such as `equals`, `not_equals`, `like`, `in`, `is_null`, etc.
  - Supports sorting by field and order (ascending or descending).

- **`apply_sorting()`**:
  - Adds sorting to queries based on a specified field and order.

---

### **4. Table Joins**
- **`join_tables()`**:
  - Joins two tables based on a specified column.
  - Facilitates combining related data for complex queries.

---

### **5. Hierarchical Data Handling**
- **`build_tree()`**:
  - Recursively builds a tree structure for hierarchical data.
  - Fetches child data and nests it under parent nodes.

- **`fetch_child_data()`**:
  - Retrieves and organizes child table data for a specific node.

---

### **6. File Uploads**
- **`upload_files()`**:
  - Handles file uploads and associates them with specified database records.

---

### **7. Metadata Management**
- **`MetaDataService`**:
  - Retrieves metadata (fields, configurations) for a table from its associated metadata file.
  - Ensures that child relationships and field attributes are respected during operations.

---

## Utility Functions

### **Dynamic Operations**
- **`get_table_class()`**:
  - Resolves and returns the ORM class for a specified table.

- **`get_doctype_folder()`**:
  - Resolves the folder location for a `DocType` and its metadata files.

---

## Error Handling and Logging
- Comprehensive error handling for invalid inputs, missing metadata files, and database exceptions.
- Integrates with `loguru` for detailed logging of exceptions and operations.

---

## Purpose

The `dao.py` module provides a flexible and robust foundation for interacting with the database. It abstracts away complex database operations, making it easier to manage hierarchical data, handle dynamic table schemas, and ensure consistent and efficient data access throughout the framework.

