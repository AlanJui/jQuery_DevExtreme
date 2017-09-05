專案指引
=======

程式示範碼：如何在 jQuery 使用 DevExtreme 。

Web Server 端程式網址：　https://github.com/AlanJui/AspNetCore2-MSSQL-WebAPI

對於採用 ASP.NET Core Web API 技術，實作 RESTful Service 時，除了如官網所說，在 Web Client 端需要使用 CustomStore 來實作 DataScource 外，更重要的是，無論 Web Client 或 Server 端，都需要配合使用 DevExtreme.AspNet.Data 這元件。

細節說明，請參考 GitHub 的 [《DevExtreme ASP.NET Data》](https://github.com/DevExpress/DevExtreme.AspNet.Data)文件。

# 安裝作業

## (1) 事前準備

工作環境須已完成下列軟體之安裝：

  - 版本控管工具： git  

  - NodeJS 平台工具: node, npm 

    欲確認 node、npm 是否已完成安裝，並能正常運作，可在「終端機」輸入如下指令，以便確認：
 
    ```
    $ node -v
    v8.2.1

    $ npm -v
    5.3.0
    ```

## (2) 自 GitHub 下載本專案原始程式碼

依據下列之操作指示，自 GitHub Repo 將檔案複製（Clone）到個人電腦的「工作目錄」中。

    $ cd <工作目錄>
    $ git clone git@github.com:AlanJui/jQuery_DevExtreme.git
    $ cd jQuery_DevExtreme

## (3) 安裝專案使用之 NodeJS Module 檔案

透過 package.json 設定檔，安裝屬專案層級（Local）的 NodeJS 模組檔案。

    $ npm install

# 執行作業

## (1) 啟動 Web Server

    $ npm start

## (2) 使用 Web 瀏覽器觀看輸出結果

    （１）啟動 Web 瀏覽器

    （２）在 URL 網址列輸入：　http://127.0.0.1:3000 

  [附註]：本專案使用的 Local Web Server 為 http-server （使用 NodeJS 技術開發而成），不知是否有 Bug 、還是另有其它因素，若網址改成： http://localhost:3000 ，網頁會是一片空白，且無任何錯誤訊息。


