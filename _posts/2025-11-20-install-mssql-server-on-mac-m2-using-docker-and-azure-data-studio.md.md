---
layout: post
title: Install Microsoft SQL Server on Mac M2 Air using Docker and Azure Data Studio
date: 2025-11-20 00:01:00
description: Complete guide to setting up MSSQL Server using Docker on Mac M2 with Azure Data Studio and AdventureWorks sample database
tags: mssql mac-m2 docker azure-data-studio
categories: setup
thumbnail: assets/img/mssql-00.png
toc:
  sidebar: left
images:
  lightbox2: true
---

This guide walks you through setting up Microsoft SQL Server on Mac M2 Air using Docker containers and connecting via Azure Data Studio with the AdventureWorks sample database.

## Prerequisites

Install the required tools:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) for Mac
- [Azure Data Studio](https://go.microsoft.com/fwlink/?linkid=2282286) for Mac

## Setting Up SQL Server Container

Create and run the MSSQL Server container with the following command:

```bash
docker run --platform linux/amd64 -e "ACCEPT_EULA=Y" -e 'MSSQL_SA_PASSWORD=StrongPa55w0rd!' -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest
```

## Connecting with Azure Data Studio

Open Azure Data Studio and create a new connection using "SQL Username and Password":

<a href="{{ '/assets/img/mssql-01.png' | relative_url }}" data-lightbox="mssql-setup"><img src="{{ '/assets/img/mssql-01.png' | relative_url }}" style="max-width: 200px; height: auto;" /></a>

_Click image to enlarge - Connection setup in Azure Data Studio_

## Setting Up Sample Database

Download the [AdventureWorks sample database](https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorks2016.bak) and import it to your container using Docker Desktop GUI.

Open Docker Desktop and upload the `AdventureWorks2016.bak` file to `/var/opt/mssql/` directory:

<a href="{{ '/assets/img/mssql-02.png' | relative_url }}" data-lightbox="mssql-setup"><img src="{{ '/assets/img/mssql-02.png' | relative_url }}" style="max-width: 200px; height: auto;" /></a>

_Click image to enlarge - Uploading database backup file to Docker container_

## Database Restoration

### Enable Preview Features

First, go to Azure Data Studio settings and enable "unreleased preview features":

<a href="{{ '/assets/img/mssql-03.png' | relative_url }}" data-lightbox="mssql-setup"><img src="{{ '/assets/img/mssql-03.png' | relative_url }}" style="max-width: 200px; height: auto;" /></a>

_Click image to enlarge - Enable preview features in Azure Data Studio settings_

### Restore Database

Right-click on "Databases" folder and select "Restore Database (Preview)":

<a href="{{ '/assets/img/mssql-04.png' | relative_url }}" data-lightbox="mssql-setup"><img src="{{ '/assets/img/mssql-04.png' | relative_url }}" style="max-width: 200px; height: auto;" /></a>

_Click image to enlarge - Access the restore database feature_

Select the `AdventureWorks2016.bak` file from `/var/opt/mssql/` and complete the restoration:

<a href="{{ '/assets/img/mssql-05.png' | relative_url }}" data-lightbox="mssql-setup"><img src="{{ '/assets/img/mssql-05.png' | relative_url }}" style="max-width: 200px; height: auto;" /></a>

_Click image to enlarge - Restore AdventureWorks database from backup file_

## Running Queries

You can now execute SQL queries against the AdventureWorks database in Azure Data Studio:

<a href="{{ '/assets/img/mssql-06.png' | relative_url }}" data-lightbox="mssql-setup"><img src="{{ '/assets/img/mssql-06.png' | relative_url }}" style="max-width: 200px; height: auto;" /></a>

_Click image to enlarge - Successfully connected and running queries on AdventureWorks database_

## Summary

You now have a fully functional Microsoft SQL Server running on your Mac M2 Air with:

- MSSQL Server 2022 running in Docker container
- Azure Data Studio connected for database management
- AdventureWorks sample database for testing and learning

The setup is perfect for development, learning SQL, or testing database applications locally.
