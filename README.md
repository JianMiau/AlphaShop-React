# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 目前專案畫面
<img width="993" alt="A4-basic" src="https://user-images.githubusercontent.com/71853581/200102178-2387845b-9023-4577-a5c3-d7b962044e2f.png">        
# 本次專案進度(A5)-表單頁面切換和購物車總價計算    
1. 表單頁面切換的useState狀態設在App.js，再傳遞到Main.js，還有下一層的RegisForm和ProgressControll進行畫面變換。  
2. 購物車useState狀態設定在ShopCart集中管理，並以商品資料作為起始預設資料。  
3. 購物品項小於0時，會從購物車當中移除。  
4. 加減按鈕事件設計很類似，所以合併成一個事件再分派。

## Available Scripts

In the project directory, you can run:
### `npm install`

安裝package.json相關套件

### `npm start`

啟動React專案和本地端伺服器 port3000，即可打開主頁

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
