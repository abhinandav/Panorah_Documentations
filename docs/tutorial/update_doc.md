---
title: Updating a Document
sidebar_position: 5
---

# Updating a Document

This section explains the backend processes, schemas, and functions involved in updating a document (record) in a **DocType** in the **Panorah Framework**.


## Backend Schemas Used

### **1. `UpdateDataRequestSchema`**
- **Purpose**:  
  Defines the structure for updating a document.
- **Fields**:
  - **`table_name`**: The name of the DocType (table) where the data will be updated.
  - **`payload`**: A dictionary containing the updated field names and their new values.
  - **`condition_dict`**: A dictionary specifying the conditions to identify which records to update.

### **2. `DataFetchResponseSchema`**
- **Purpose**:  
  Defines the structure of the response after updating data.
- **Fields**:
  - **`status`**: Indicates success or failure of the operation.
  - **`message`**: Describes the outcome.
  - **`data`**: Contains additional information about the updated records, if applicable.


## Backend Functions Used

### **1. `DocTypeController.update_data()`**
- **Purpose**:  
  Handles the update request and orchestrates the update process.

- **Key Steps**:
  - Validates and extracts the `table_name`, `payload`, and `condition_dict` from the request.
  - Delegates the update operation to `DynamicDataOperation.update_table_value()`.


### **2. `DynamicDataOperation.update_table_value()`**
- **Purpose**:  
  Executes the update operation on the database.

- **Key Responsibilities**:
  - Resolves the ORM model for the specified `table_name` using `PiccoloHelper.get_table_class()`.
  - Builds database filters from the `condition_dict` to identify matching records.
  - Updates parent records using the provided `payload`.
  - If the DocType has child tables, updates related child records recursively.

- **Key Steps**:
  1. **Build Filters**:  
     Constructs filters from the `condition_dict` to identify the records to update.
  2. **Update Parent Records**:  
     Updates the parent table using the provided `payload`.
  3. **Update Child Records** (if applicable):  
     Loops through child records in the `payload` and updates them with a reference to their parent.



## Example Payload
```json
{
  "table_name": "",
  "payload": null,
  "condition_dict": null
}
```

### Update Using Conditions
```json
{
  "table_name": "Invoice",
  "payload": {
    "customer_name": "Jane Doe",
    "total_amount": 2000.00
  },
  "condition_dict": {
    "invoice_id": 123
  }
}
