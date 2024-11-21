---
title: Deleting a Document
sidebar_position: 4
---

# Deleting a Document

This section explains the backend processes, schemas, and functions involved in deleting a document (record) from a **DocType** in the **Panorah Framework**.


## Backend Schemas Used

### **1. `ConditionDictSchema`**
- **Purpose**:  
  Defines the structure for specifying conditions for deleting records.
- **Fields**:
  - **`condition_dict`**: A dictionary of field-value pairs to identify the records to delete.

### **2. `DataFetchResponseSchema`**
- **Purpose**:  
  Defines the structure of the response after deletion.
- **Fields**:
  - **`status`**: Indicates success or failure of the deletion operation.
  - **`message`**: Describes the outcome.
  - **`data`**: Contains additional information about the deleted records, if applicable.


## Backend Functions Used

### **1. `DocTypeController.delete_data()`**
- **Purpose**:  
  Handles the deletion request and delegates the operation to the appropriate utility functions.
- **Key Steps**:
  - Validates and extracts the `table_name` and `condition_dict` from the request.
  - Passes the `table_name` and `condition_dict` to `DynamicDataOperation.delete_table_value()` for database deletion.
  - Returns the result in the `DataFetchResponseSchema` format.


### **2. `DynamicDataOperation.delete_table_value()`**
- **Purpose**:  
  Performs the actual deletion of records from the database.
- **Key Responsibilities**:
  - Resolves the ORM model for the specified `table_name` using `PiccoloHelper.get_table_class()`.
  - Builds database filters from the `condition_dict` to identify matching records.
  - Deletes related child records if the DocType has hierarchical relationships.
  - For hierarchical data (`is_tree`), calls `NestedSets.delete_child()` to handle tree-specific deletions.

- **Key Steps**:
  1. **Validate `condition_dict`**:  
     Ensures it contains valid field-value pairs.
  2. **Build Filters**:  
     Constructs filters based on the provided conditions.
  3. **Handle Child Records**:  
     For child tables, deletes related child records recursively.
  4. **Tree-Specific Deletion**:  
     For `is_tree` DocTypes, deletes hierarchical data using `NestedSets.delete_child()`.
  5. **Execute Deletion**:  
     Executes the delete query on the database for matching records.



### **3. `NestedSets.delete_child()`**
- **Purpose**:  
  Handles deletion of nodes in hierarchical (tree) DocTypes.
- **Role in Deletion**:
  - Ensures that all child nodes under a specified parent node are deleted correctly.
  - Updates the tree structure to maintain consistency.



## Example Payload

### Delete Using Conditions
```json
{
  "table_name": "Invoice",
  "condition_dict": {
    "name": ["CRI-11-78","CRI-11-80"]
  }
}
