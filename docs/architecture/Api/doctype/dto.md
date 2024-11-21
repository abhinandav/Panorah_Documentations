---
title: dto.py
sidebar_position: 5
---

# DTO Module Overview

The DTO (Data Transfer Object) module in the **Panorah Framework** bridges the gap between schemas and business logic. It utilizes `MsgspecDTO` from **Litestar** to convert, validate, and manage data transfer efficiently between the framework's components and external systems.

---

## Purpose of DTOs

### **What are DTOs?**
Data Transfer Objects (DTOs) are specialized objects that facilitate data exchange:
- Between different layers of the framework (e.g., controllers and services).
- Between the framework and external systems (e.g., APIs).

### **Why Use DTOs?**
- **Validation**: Ensures that the data exchanged adheres to the expected structure.
- **Decoupling**: Separates business logic from data representation, promoting maintainability.
- **Performance**: `MsgspecDTO` enhances performance by leveraging `msgspec`’s serialization and validation capabilities.

---

## Why Use `MsgspecDTO`?

The **Litestar DTO system** allows the framework to define custom DTOs using `MsgspecDTO`. This provides the following advantages:

### **1. Schema Validation**
`MsgspecDTO` automatically validates data against the associated schema (`Struct`) before passing it to or from the framework.

### **2. Serialization and Deserialization**
Handles the conversion of data to and from JSON or other formats efficiently.

### **3. Type-Safe Operations**
- Ensures data type consistency throughout the framework.
- Reduces runtime errors by enforcing schema-defined types.

### **4. Reusability**
DTOs can be reused across multiple components (e.g., controllers, services), reducing redundancy.

---

## Key Components

### **DTO Definitions**
Each schema in the `schema.py` file is paired with a corresponding DTO for validation and transformation.

| **DTO Class**                  | **Schema**                        | **Description**                                   |
|--------------------------------|-----------------------------------|-------------------------------------------------|
| `DocTypeRequestDTO`            | `DocTypeRequestSchema`            | For creating or managing DocTypes.              |
| `DocTypeResponseDTO`           | `DocTypeResponseSchema`           | For responses related to DocType operations.    |
| `DataFetchResponseDTO`         | `DataFetchResponseSchema`         | For returning fetched data.                     |
| `InsertDataRequestDTO`         | `InsertDataRequestSchema`         | For inserting data into tables.                 |
| `UpdateDataRequestDTO`         | `UpdateDataRequestSchema`         | For updating table data.                        |
| `ConditionDictSchemaDTO`       | `ConditionDictSchema`             | For specifying query conditions.                |
| `PolicyRequestSchemaDTO`       | `PolicyRequestSchema`             | For creating or managing policies.              |
| `PolicyResponseSchemaDTO`      | `PolicyResponseSchema`            | For responses related to policy operations.     |
| `FilterRequestDTO`             | `FilterRequestSchema`             | For applying filters to data queries.           |
| `FilterResponseDTO`            | `DataFetchResponseSchema`         | For responses related to filtered data.         |
| `JoinRequestDTO`               | `JoinTableRequestSchema`          | For specifying table join operations.           |
| `AlterRequestDTO`              | `AlterTableRequestSchema`         | For altering table schemas.                     |
| `AlterColumnNameRequestDTO`    | `AlterColumnNameRequestSchema`    | For renaming columns.                           |
| `AddColumnRequestDTO`          | `AddColumnRequestSchema`          | For adding columns to tables.                   |
| `DeleteColumnRequestDTO`       | `DeleteColumnRequestSchema`       | For deleting columns from tables.               |
| `FileUploadRequestDTO`         | `FileUploadRequestSchema`         | For handling file upload requests.              |
| `FileUploadResponseDTO`        | `FileUploadResponseSchema`        | For responses related to file uploads.          |

---

## Benefits of Using DTOs

### **1. Centralized Validation**
- All data is validated and transformed consistently using the defined DTOs.
- Reduces duplication of validation logic across different parts of the framework.

### **2. Consistent Interfaces**
- Ensures that data passed to and from controllers adheres to a strict contract.
- Makes the framework’s API predictable and easier to work with.

### **3. Performance Optimization**
- `MsgspecDTO` leverages `msgspec`, a high-performance serialization library, ensuring efficient data handling.
- Ideal for large-scale applications requiring low-latency operations.

### **4. Easy Integration**
- DTOs integrate seamlessly with Litestar controllers, simplifying request and response management.

---

## Example: Using a DTO

Here’s an example of how a DTO integrates with a controller:

```python
from src.panorah_framework.api.doctype.dto import DocTypeRequestDTO
from src.panorah_framework.api.doctype.schema import DocTypeResponseSchema

class DocTypeView(Controller):
    path = "/document"

    @post("/", dto=DocTypeRequestDTO, return_dto=DocTypeResponseDTO)
    async def create(self, data: DocTypeRequestSchema) -> DocTypeResponseSchema:
        # Use the validated schema (data) for further operations
        return await DocTypeController.create(data)
