---
sidebar_position: 3
---

# Installation 

Welcome to the **PANORAH Project Setup Guide**! This document will help you get started with your project, from initializing Docusaurus to setting up the database, migrations, and creating a new app.

**Create the Working Directory**

To set up the working directory, navigate to your project’s root directory and run the following command.

```bash
mkdir <folder_name>
cd <folder_name>
```


**Setting Up the PANORAH Framework**

```bash
uv init
uv sync
pip install -e <path_to_framework>
```

**Initializing Database with Postgres**

Set up your database connection for PANORAH with Postgres.

```bash
panorah init -e postgres
```

**Running Database Migrations**

Run the initial database migrations to set up the necessary tables and configurations.

```bash
uv run piccolo migrations new document --auto
uv run piccolo migrations forwards document
```

The new document --auto command creates new migration files, and forwards document applies these migrations, ensuring your database schema is up to date.


**Create New App**

Create apps to organize Doctypes and manage modular parts of your project.

```bash
panorah app new --app myapp
```
This command will create an app with the name myapp. You can define any custom name for the app by replacing myapp with your desired name.



**Starting the Server**

To start the PANORAH server and begin development.

```bash
panorah server start
```
This command starts the development server for your PANORAH application.