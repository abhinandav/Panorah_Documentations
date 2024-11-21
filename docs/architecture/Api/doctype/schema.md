---
title: schema.py
sidebar_position: 4
---

# Schema Module Overview

The `schema.py` file in the **Panorah Framework** defines a set of schemas that serve as data models for validating and organizing data passed to and from the framework's components. It utilizes **`msgspec.Struct`** for its schemas, enabling efficient, type-safe, and structured data validation.


## Why Use `Struct` for Schema Definitions?

The `Struct` class from the **msgspec** library offers several advantages for defining schemas:

### **1. Type Safety**
- Each schema explicitly defines the type of its fields, reducing runtime errors by catching type mismatches during validation.
- Fields like `str`, `int`, `list`, and enums like `FieldTypeEnums` ensure only valid data is passed to the framework.

### **2. Performance**
- **msgspec.Struct** is designed to be fast and efficient. Compared to other serialization or validation libraries like `Pydantic`, it minimizes overhead and improves performance.
- Ideal for high-performance frameworks like **Panorah**, where speed is critical.

### **3. Data Validation**
- Automatically enforces field types and validates input data. For example:
  - Fields like `FieldTypeEnums` ensure only valid enum values are accepted.
  - Optional fields (`None` values) are clearly specified using union types (e.g., `str | None`).

### **4. Lightweight and Clean**
- Compared to verbose class definitions in other libraries, `Struct` provides a clean and lightweight approach to defining schemas.
- Default values can be defined concisely, making the schema easy to read and maintain.


## Key Responsibilities of `schema.py`

The `schema.py` file defines schemas that are used across various modules of the framework, ensuring data integrity and consistency. Here’s a breakdown:

### **1. DocType Management Schemas**
- **`FieldsSchema`**:  
  Defines the fields for a `DocType`, specifying attributes like name, type, label, and options.
- **`DocTypeRequestSchema`**:  
  Represents a request for creating or managing a `DocType`, including its fields and properties like `is_tree` and `is_submittable`.
- **`DocTypeResponseSchema`**:  
  Standardized structure for responses related to `DocType` operations.

### **2. CRUD Operation Schemas**
- **`InsertDataRequestSchema`** and **`UpdateDataRequestSchema`**:  
  Define the structure for inserting or updating data in a table, including payloads and conditions.
- **`DataFetchResponseSchema`**:  
  Returns fetched data with a status and message.

### **3. Policy Management Schemas**
- **`PolicyRequestSchema`**:  
  Specifies attributes for defining policies, such as subject, resource, and action.
- **`PolicyResponseSchema`**:  
  Standardized structure for responses related to policy operations.

### **4. Filtering and Joining Schemas**
- **`FilterRequestSchema`**:  
  Specifies filtering criteria for data retrieval, including sorting, pagination, and filters.
- **`FilterFetchResponseSchema`**:  
  Returns filtered data with a status and message.
- **`JoinTableRequestSchema`**:  
  Represents the structure for joining tables.

### **5. Table Alteration Schemas**
- **`AlterTableRequestSchema`**, **`AlterColumnNameRequestSchema`**, **`AddColumnRequestSchema`**, and **`DeleteColumnRequestSchema`**:  
  Handle schema changes for tables, including column additions, deletions, and renaming.

### **6. File Handling Schemas**
- **`FileUploadRequestSchema`**:  
  Validates file uploads with `UploadFile` support.
- **`FileUploadResponseSchema`**:  
  Standardized structure for responses related to file uploads.


## Benefits of This Approach

### **Consistency**
- Standardizes how data is represented and passed across the framework.
- Ensures that all modules interacting with the same data use a common structure.

### **Reusability**
- Schemas are reusable across multiple modules and functions, reducing duplication.

### **Validation and Error Prevention**
- Invalid data is caught early through type checking and validation, reducing runtime errors.

### **Maintainability**
- The schema definitions are easy to extend and maintain, allowing for future changes without significant refactoring.


## Example: Using a Schema
Here’s an example of how these schemas integrate into the framework:

```python
from src.panorah_framework.api.doctype.schema import DocTypeRequestSchema


doc_type_data = {
    "app": "Sales",
    "doc_type_name": "Invoice",
    "fields": [
        {"name": "invoice_id", "field_type": "Int", "label": "Invoice ID"},
        {"name": "customer_name", "field_type": "Data", "label": "Customer Name"},
    ],
    "is_tree": 0,
    "is_submittable": 1,
}

# Validate the data
doc_type_request = DocTypeRequestSchema(**doc_type_data)
print(doc_type_request)
