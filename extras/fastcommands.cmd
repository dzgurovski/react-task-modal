@ECHO OFF
CLS
:begin
echo Select a task:
echo =============
echo -
echo 1) NPM INSTALL MODULES
echo 2) Start server on port 8080
echo 3) Start build on dist folder(NB:Copy and index.html)
echo -
set /p op=Please Pick Yoti FE Test by Deyan Zgurovski option :
if "%op%"=="1" goto op1
if "%op%"=="2" goto op2
if "%op%"=="3" goto op3


goto begin


:op1
npm install

:op2
npm run server

:op3
npm run build
