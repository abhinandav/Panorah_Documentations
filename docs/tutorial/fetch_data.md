---
title: Fetching Data 
sidebar_position: 3
---

# Fetching Data from a DocType

This section explains the backend processes, schemas, and functions involved in fetching data from a **DocType** in the **Panorah Framework**. There are two methods for fetching data:
1. **Fetch Table Data**: Retrieves data based on specified conditions.
2. **Fetch Data by ID**: Retrieves a single record by its unique ID.


## Backend Schemas Used

### **1. `ConditionDictSchema`**
- **Purpose**:  
  Defines the structure for specifying conditions when fetching data.
- **Fields**:
  - **`condition_dict`**: A dictionary of field-value pairs for filtering records.

### **2. `DataFetchResponseSchema`**
- **Purpose**:  
  Defines the structure of the response when fetching data.
- **Fields**:
  - **`status`**: Indicates success or failure.
  - **`message`**: Describes the outcome.
  - **`data`**: Contains the fetched records as a list of dictionaries or a single dictionary.


## Fetch Data

### **Backend Functionality**

#### **1. `DocTypeController.fetch_table_data()`**
- **Purpose**:  
  Retrieves multiple records from a table (DocType) based on specified conditions.
- **Key Steps**:
  - Extracts the `table_name` and `condition_dict` from the request.
  - Resolves the ORM model for the `table_name` using `PiccoloHelper.get_table_class()`.
  - If the DocType is hierarchical (`is_tree`), it calls `DynamicDataOperation.build_tree()` to fetch hierarchical data.
  - Applies filters based on the `condition_dict`.
  - Returns the fetched records in the `DataFetchResponseSchema` format.


#### **2. `DynamicDataOperation.fetch_data()`**
- **Purpose**:  
  Handles the core logic for fetching records from the database.
- **Key Responsibilities**:
  - Retrieves the metadata and fields for the specified `table_name` using `MetaDataService.get_table_fields()`.
  - Processes conditions in the `condition_dict` to build database filters.
  - For hierarchical DocTypes (`is_tree`), builds a tree structure starting from the specified parent node using `DynamicDataOperation.build_tree()`.


#### **3. `DynamicDataOperation.build_tree()`**
- **Purpose**:  
  Recursively builds a hierarchical tree structure for `is_tree` DocTypes.
- **Role in Fetching**:
  - Fetches child records for each node and nests them under their parent nodes.


### **Example Payload for Fetching Data**

```json
{
  "table_name": "Invoice",
  "condition_dict": {
    "name": "CRI-11-78"
  }
}
