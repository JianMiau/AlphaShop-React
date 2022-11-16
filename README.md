# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 目前專案畫面
<img width="993" alt="A4-basic" src="https://user-images.githubusercontent.com/71853581/200102178-2387845b-9023-4577-a5c3-d7b962044e2f.png"> 


## 本次專案進度(A6)- 使用useContext做全域變數管理，useReducer做狀態管理     
1. Component資料夾中新增Context，存放兩個全域變數管理檔案FormContext.js和CartContext.js  
2. Context檔案中包裝成Provider元件 Component供給App.jsx調用。
3. 利用useReducer Hook作動態事件管理，靜態資料由data context檔案去傳送。  
4. 表單元件設定成自己有狀態的受控元件(controlled component)，即時記錄變動input值。
5. 再用useEffect()設定input為相依變數，input有變動時推至Context檔案作資料更新。

## 專案基本功能
1. 最後點選送出表單時，會出現使用者名稱、寄送地址和方式、題目要求的卡片資訊和商品總價。
2. 表單按上一步時，原本輸入資料不會重置。
3. shipping表單點選DHL時，右方購物車運費顯示500，總價加500。


## Available Scripts

下載完這個專案到本地端後，您可以利用以下npm指令進行啟動
### `npm install`

安裝本專案package.json相關套件

### `npm start`

啟動React專案和本地端伺服器 port3000，即可打開主頁

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
