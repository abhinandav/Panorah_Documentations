---
title: Creating a DocType
sidebar_position: 1
---

# Creating a DocType

This tutorial will guide you through the process of creating a **DocType** in your project. We'll explain what a DocType is, why it's needed, how to define its payload, and the backend functions involved in its creation.



## What is a DocType?

A **DocType** is a core concept in the **Panorah Framework** that defines the structure, fields, and behavior of a particular type of record. It serves as the data model and dictates how the framework interacts with the data.

### **Why is a DocType Needed?**

- **Data Modeling**: Defines the fields and data types for records, ensuring consistency.
- **Custom Behavior**: Configures specific behaviors, such as hierarchical structures or single-instance records.
- **Scalability**: Enables modular design by breaking data into reusable components.

For instance, in a **Sales Management System**, you might create a `DocType` for an `Invoice` with fields like `invoice_id`, `customer_name`, and `total_amount`.



## Payload for Creating a DocType

To create a new DocType, you need to send a JSON payload in the following format:

```json
{
  "app": "",
  "doc_type_name": "",
  "fields": [
    {
      "name": "",
      "field_type": "Data",
      "label": "",
      "permlevel": 0,
      "options": null
    }
  ],
  "is_child_table": 0,
  "is_tree": 0,
  "is_single": 0,
  "is_submittable": 0
}
```

### Terminologies

- **`app`** : The application where the DocType is being created.
- **`doc_type_name`** : The name of the DocType.
- **`field`** : Defines the fields for the DocType structure.
    - **`name`** :  Unique identifier for the field.
    - **`field_type`** : Specifies the data type of the field.
    - **`label`** : Human-readable label for the field.
    - **`permlevel`** : Permission level for the field.
    - **`options`** : Additional configuration for certain field types.

- **`is_child_table`** : Indicates if the DocType is a child table (1 for Yes, 0 for No).
- **`is_tree`** : Specifies if the DocType represents hierarchical data.
- **`is_single`** : Indicates if the DocType is a single-instance record
- **`is_submittable`** : Determines if the DocType supports submission workflows.



## Backend Functions Used for DocType Creation
### **Functions Overview**

- **`DocTypeController.create()`** : Processes the payload, creates metadata, and generates the ORM model.
- **`DocTypeController.build_fields()`**: Validates and processes the fields defined in the payload.
- **`DocTypeController.generate_orm_class()`**: Dynamically generates the ORM class for the DocType.
- **`MigrationService.run_migration()`**: Executes database migrations to apply the new DocType schema.
- **`DocTypeController.rewrite_piccolo_app_config()`**: Updates the application's Piccolo configuration.
- **`HookService.post_run_hook()`**: Executes post-creation hooks to finalize the DocType.