---
title: Filtering and Sorting
sidebar_position: 6
---

# Filtering and Sorting

This section explains the backend processes, schemas, and functions involved in applying **filters** and **sorting** while fetching data from a **DocType** in the **Panorah Framework**.


## Example Payload

To filter and sort data from a **DocType**, you need to send a JSON payload in the following format:

```json
{
  "table_name": "",
  "filters": [
    {"field": " ", "value":  , "action": " "}
  ],
  "sort": {
    "field": " ",
    "order": " "
  },
  "limit": 10,
  "offset": 0
}
 ```



## Explanation of the Payload

- **table_name**
The name of the DocType (table) to apply filtering and sorting.

### filters
A list of conditions to filter the data. You can include multiple filter conditions.

- **Attributes**:

    - **`field`**: The name of the field to apply the filter on.
    - **`value`**: The value to compare against.
    - **`action`**: The comparison operator for the filter.

- **Supported Actions**:

    - **`equals`**: Matches records where the field value equals the given value.
    - **`not_equals`**: Matches records where the field value does not equal the given value.
    - **`like`**: Matches records where the field value contains the given substring.
    - **`not_like`**: Matches records where the field value does not contain the given substring.
    - **`in`**: Matches records where the field value is within a list of values.
    - **`not_in`**: Matches records where the field value is not within a list of values.
    - **`is`**: Matches records where the field value is null.
    - **`not_is`**: Matches records where the field value is not null.
    - **`<`**: Matches records where the field value is less than the given value.
    - **`<=`**: Matches records where the field value is less than or equal to the given value.
    - **`>`**: Matches records where the field value is greater than the given value.
    - **`>=`**: Matches records where the field value is greater than or equal to the given value.

### sort
Specifies the field and order to sort the results.

- **Attributes**:

    - **`field`**: The name of the field to sort on.
    - **`order`**: The sorting order, either "asc" (ascending) or "desc" (descending).

### limit
The maximum number of records to fetch. Default is 10
### offset
The number of records to skip before starting to fetch. Default is 0



## Backend Schemas Used
### **1. `FilterRequestSchema`**
Validates the filtering and sorting request payload.


### **2. `FilterFetchResponseSchema`**
Defines the structure of the response after applying filtering and sorting.


## Backend Functions Used
### **1. ` DocTypeController.filter_data()`**
- **Purpose**: 
    Orchestrates the filtering and sorting operation.

- **Key Responsibilities**:

    - Validates the request using `FilterRequestSchema`.
    - Delegates the filtering logic to `DynamicDataOperation.filter_data()`.

### **2. `DynamicDataOperation.filter_data()`**
- **Purpose**: 
    Executes the filtering and sorting query on the database.

- **Key Responsibilities**:

    - Resolves the ORM model for the specified table_name using `PiccoloHelper.get_table_class()`.
    - Iterates through the filters to build database conditions.
    - Applies the sorting configuration using `DynamicDataOperation.apply_sorting()`.
    - Fetches data from the database with the specified `limit` and `offset`.

### **3. `DynamicDataOperation.apply_sorting()`**
- **Purpose**: 
    Adds sorting logic to the database query.

- **Key Responsibilities**:

    - Validates the field in the sort configuration to ensure it exists in the DocType schema.
    - Applies the sorting order (asc or desc) to the query.
