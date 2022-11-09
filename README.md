# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 目前專案畫面
<img width="993" alt="A4-basic" src="https://user-images.githubusercontent.com/71853581/200102178-2387845b-9023-4577-a5c3-d7b962044e2f.png"> 

## 本次專案進度(A5)-表單頁面切換和購物車總價計算     
1. 表單頁面切換的useState狀態設在App.js，再傳遞到Main.js，下一層的RegisForm、ProgressControll、以及進度條Stepper樣式變換。  
2. 確認下單後會跳出alert()，並回到首頁表單。
3. 購物車useState狀態設定在ShopCart集中管理，並以商品資料作為起始預設資料。  
4. 購物品項小於0時，會從購物車畫面中移除。  
5. 加減按鈕事件設計很類似，button上面加上data-set屬性，利用事件分派區分內部功能。

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
