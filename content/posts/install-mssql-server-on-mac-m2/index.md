---
title: "Install Microsoft SQL Server on Mac M2 Air using Docker and Azure Data Studio"
date: 2025-11-20T00:01:00+08:00
description: "Complete guide to setting up MSSQL Server using Docker on Apple Silicon Mac with Azure Data Studio and AdventureWorks sample database."
summary: "Step-by-step setup guide for running Microsoft SQL Server on Mac M2 Air with Docker emulation, Azure Data Studio, and restoring AdventureWorks database."
tags: ["MSSQL", "Mac M2", "Docker", "Azure Data Studio", "SQL", "Database"]
categories: ["Tips & Tricks"]
showTableOfContents: true
---

This guide walks you through setting up Microsoft SQL Server on Apple Silicon (Mac M2 Air) using Docker containers, connecting via Azure Data Studio, and restoring the AdventureWorks sample database.

---

## Prerequisites

Install the following tools on your Mac:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Mac
- [Azure Data Studio](https://go.microsoft.com/fwlink/?linkid=2282286) for Mac

---

## Check Docker Settings (Apple Silicon)

Before launching the container, verify that Docker Desktop is properly configured for x86 emulation on Apple Silicon:

1. Open Docker Desktop &rarr; **Settings** &rarr; **General** tab.
2. Ensure **"Use the Apple Virtualization framework"** is checked.
3. Enable **"Use Rosetta for x86_64/amd64 emulation on Apple Silicon"** to run amd64 container images smoothly.

{{< figure src="mssql-00.png" alt="Docker Desktop Settings for Apple Silicon" caption="Docker Desktop settings for Apple Silicon and Rosetta emulation" class="rounded-lg shadow my-4" >}}

---

## Setting Up the SQL Server Container

Run the official Microsoft SQL Server Linux image using `linux/amd64` emulation:

```bash
docker run --platform linux/amd64 \
  -e "ACCEPT_EULA=Y" \
  -e 'MSSQL_SA_PASSWORD=StrongPa55w0rd!' \
  -p 1433:1433 \
  --name sqlserver \
  -d mcr.microsoft.com/mssql/server:2022-latest
```

---

## Connecting with Azure Data Studio

Launch Azure Data Studio and create a new connection:
- **Connection type:** Microsoft SQL Server
- **Server:** `localhost,1433`
- **Authentication type:** SQL Login
- **User name:** `sa`
- **Password:** `StrongPa55w0rd!`

{{< figure src="mssql-01.png" alt="Connection setup in Azure Data Studio" caption="Connection configuration in Azure Data Studio" class="rounded-lg shadow my-4" >}}

---

## Setting Up Sample Database

Download the [AdventureWorks sample database backup](https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorks2016.bak).

Open Docker Desktop, select your `sqlserver` container, navigate to the **Files** tab, and upload `AdventureWorks2016.bak` into the `/var/opt/mssql/` directory:

{{< figure src="mssql-02.png" alt="Uploading database backup file to Docker container" caption="Uploading AdventureWorks2016.bak into /var/opt/mssql/ inside the container" class="rounded-lg shadow my-4" >}}

---

## Database Restoration

### 1. Enable Preview Features

In Azure Data Studio, open Settings and search for **"unreleased preview features"** to enable database restore tools:

{{< figure src="mssql-03.png" alt="Enable preview features in Azure Data Studio" caption="Enabling preview features in Azure Data Studio settings" class="rounded-lg shadow my-4" >}}

### 2. Restore Database from Backup

In the Connections sidebar, right-click the **Databases** folder and select **Restore Database (Preview)**:

{{< figure src="mssql-04.png" alt="Access restore database feature" caption="Selecting Restore Database (Preview)" class="rounded-lg shadow my-4" >}}

Under **Restore from**, switch to **Backup file**:

{{< figure src="mssql-05.png" alt="Select backup file option" caption="Selecting Backup file as the source" class="rounded-lg shadow my-4" >}}

Browse to `/var/opt/mssql/AdventureWorks2016.bak` and complete the restoration:

{{< figure src="mssql-06.png" alt="Complete database restoration" caption="Restoring AdventureWorks database from the container filesystem" class="rounded-lg shadow my-4" >}}

---

## Running Queries

You can now open a new query editor and execute T-SQL queries directly against the restored AdventureWorks database:

{{< figure src="mssql-07.png" alt="Running queries in Azure Data Studio" caption="Querying AdventureWorks database tables in Azure Data Studio" class="rounded-lg shadow my-4" >}}

{{< figure src="mssql-08.png" alt="Query results view" caption="Viewing execution results and table records" class="rounded-lg shadow my-4" >}}

---

## Summary

You now have a fully functional Microsoft SQL Server 2022 instance running locally on your Apple Silicon Mac:
- **Server:** MSSQL 2022 running containerized via Docker on Apple Silicon Rosetta emulation
- **Management:** Azure Data Studio native client
- **Data:** Full AdventureWorks sample database ready for analytics, SQL practice, and testing
