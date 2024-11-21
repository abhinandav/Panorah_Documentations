---
title: Execute Function
sidebar_position: 8
---

# Execute Function

This section explains the **Remote Procedure Call (RPC)** mechanism implemented by the **Execute Function** feature in the **Panorah Framework**.


## What is RPC?

**Remote Procedure Call (RPC)** is a protocol or mechanism that allows executing a function or procedure on a remote system or server as if it were a local function. RPC simplifies client-server communication by abstracting the complexities of the underlying network communication.

### Key Characteristics of RPC
1. **Transparency**:  
   The client interacts with the server function as if it were a local method, with the complexity of communication hidden.

2. **Flexibility**:  
   RPC allows dynamic execution of functions, enabling a single endpoint to handle various backend operations.

3. **Reduced Overhead**:  
   Instead of creating individual APIs for every function, RPC consolidates function execution into one flexible interface.



## How the Panorah Framework Uses RPC

The **Execute Function** API in the **Panorah Framework** acts as an RPC mechanism by:
- Allowing dynamic specification of functions using their fully qualified names.
- Supporting both positional (`args`) and keyword arguments (`kwargs`) for function calls.
- Returning the function's results directly to the client.
- Handling errors and providing descriptive error responses in case of issues.

By using this feature, the framework reduces the need for repetitive endpoint creation, making it ideal for modular and scalable applications.






## Example Payload for Execute Function

To dynamically execute a function, send a request with the following payload:

```json
{
  "fn": "module.path.to.function",
  "args": [],
  "kwargs": {}
}
```

## Explanation of the Payload

- **fn**
  - The fully qualified name of the function to execute, including the module and path.
  - Example: `"src.panorah_framework.api.doctype.DocTypeController.create"`

- **args**
  - A list of positional arguments to pass to the function.
  - Example: `[1, 2, 3]`

- **kwargs**
  - A dictionary of keyword arguments to pass to the function.
  - Example: `{"key": "value"}`


## Backend Schemas Used

### **1. ExecuteFunctionRequestSchema**
- **Purpose**:
  - Validates the request payload for dynamic function execution.
- **Fields**:
  - **`fn`**: The fully qualified name of the function to execute.
  - **`args`**: List of positional arguments for the function.
  - **`kwargs`**: Dictionary of keyword arguments for the function.


## Backend Functions Used

### **1. FunctionExecutionView.execute_function()**
- **Purpose**:
  - Orchestrates the dynamic execution of a specified function.

- **Key Responsibilities**:
  - Extracts the `fn`, `args`, and `kwargs` from the request.
  - Validates the existence of the specified function using `getattr()`.
  - Dynamically calls the function with the provided arguments.


### **2. src.panorah_framework.call()**
- **Purpose**:
  - Dynamically resolves and executes the specified function.

- **Key Responsibilities**:
  - Splits the `fn` string to extract the module and function.
  - Imports the module using Python’s `importlib`.
  - Retrieves the function using `getattr()`.
  - Executes the function with the provided `args` and `kwargs`.
  - Handles exceptions and returns appropriate error messages.


## Example Payload

- **example for creating doctype**

``` json

{
  "fn": "create",
  "args": [],
  "kwargs": {
    "app": "myapp",
    "doc_type_name": "eg_doctype",
    "is_child_table": 0,
    "is_tree": 0,
    "is_single": 0,
    "is_submittable": 0,
    "fields": [
      {
        "name": "doc_name",
        "field_type": "Data",
        "label": "label",
        "permlevel": 0,
        "options": null
      }
    ]
  }
}

```

- **example for filtering documents**


``` json

{
    "fn": "filter_data",
    "args": ["eg_doc"], 
    "kwargs": {
        "filters": [
            {
                "field": "id",
                "value": 1,
                "action": ">="
            },{
                "field": "name",
                "value": "CRI-11-54",
                "action": "not_equals"
            }
        ],
          "sort": {
            "field": "id", //using which field we want to filter
            "order": "asc"
        },
        "limit":10,
        "offset":0
    }
}

```