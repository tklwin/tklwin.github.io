# Install Microsoft SQL Server on Mac M2 Air using Docker and Azure Data Studio

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) on Mac
2. Install [Azure Data Studio](https://go.microsoft.com/fwlink/?linkid=2282286) on Mac
3. Create Docker Container for Microsoft SQL Server

   ```bash
   docker run --platform linux/amd64 -e "ACCEPT_EULA=Y" -e 'MSSQL_SA_PASSWORD=StrongPa55w0rd!' -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest

   ```

4. Open ‘Azure Data Studio’ to connect Microsoft SQL Server Docker Container using “SQL Username and Password”

   ![image.png](assets/img/mssql-01.png)

5. Download “Adventure Work Sample Database” from [Microsoft](https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorks2016.bak)
6. Upload downloaded database in Microsoft SQL Docker Container
   1. Open Docker Desktop and import `AdventureWorks2016.bak` file to `/var/opt/mssql/` using Docker Desktop GUI

      ![image.png](assets/img/mssql-02.png)
7. After uploading database backup file to docker container, open Azure Data Studio and restore.
   1. Go to Setting and enable “unreleased preview features”

      ![image.png](assets/img/mssql-03.png)

   2. Right-click on “Databases” folder and click “Restore Database (Preview)”

      ![image.png](assets/img/mssql-04.png)

   3. Choose `AdventureWorks2016.bak` file under `/var/opt/mssql/` and restore

      ![image.png](assets/img/mssql-05.png)
8. Now you can run query in Azure Data Studio

   ![image.png](assets/img/mssql-06.png)
