---
title: Inserting Data 
sidebar_position: 2
---

# Inserting Data into a DocType

This tutorial will guide you through the process of inserting data into an existing **DocType**. You'll learn about the required payload structure, key terminologies, and the backend functions involved.


## Payload for Inserting Data

To insert data into a **DocType**, you need to send a JSON payload in the following format:

```json
{
  "table_name": "",
  "payload": null
}
```

### Terminologies

- **`table_name`** : The name of the DocType into which the data will be inserted.
- **`payload`** : A dictionary that contains the fields and their respective values, corresponding to the DocType's structure.

### **Example**

```json
{
  "table_name": "Invoice",
  "payload": {
    "customer_name": "John Doe",
    "total_amount": 1500.00
  }
}
```


## Backend Functions Used

### **1. `DocTypeController.insert_data()`**
- **Purpose**:  
  Handles the high-level logic for data insertion.

- **Key Steps**:
  - Extracts `table_name` and `payload` from the request.
  - Validates and processes the `payload` (e.g., converting timestamps or relationships).
  - Delegates the insertion to `DynamicDataOperation.insert_table_value()`.


### **2. `PayloadProcessor.convert_to_timestamp()`**
- **Purpose**:  
  Converts fields in the payload (e.g., `Datetime` fields) into a timestamp format compatible with the database.

- **Role in Insertion**:
  - Processes the payload and applies transformations for fields like `created_at`, `updated_at`, etc., based on the DocType schema.


### **3. `DynamicDataOperation.insert_table_value()`**
- **Purpose**:  
  Handles the actual insertion of data into the database.

- **Key Responsibilities**:
  - Resolves the ORM model for the given `table_name` using `PiccoloHelper.get_table_class()`.
  - Processes relationships (e.g., inserting child table records recursively if `payload` contains nested data).
  - Inserts the record into the database using the resolved ORM model.

- **Example Flow**:
  - Validates the existence of the `table_name`.
  - For nested child tables, loops through the child records and inserts them with a `parent` reference.
  - Saves the main record using Piccolo ORM.


### **4. `PiccoloHelper.get_table_class()`**
- **Purpose**:  
  Dynamically resolves the ORM class for the specified `table_name`.

- **Role in Insertion**:
  - Ensures the correct table schema is used during the insertion process.



### **5. `DocTypeController.fetch_table_data()`** (Post-Insertion Verification)
- **Purpose**:  
  Fetches the inserted data for validation or returning it in the response.

- **Role in Insertion**:
  - Verifies that the data was correctly inserted by querying the database.


