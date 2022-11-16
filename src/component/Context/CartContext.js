import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
// 創建ShopCart用到的Context，靜態資料和事件管理各一個
const CartContext = createContext(null);
const CartDispatchContext = createContext(null);
// 初始化購物車資料
const initialCartStatus = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  },
]
// 新增種子資料沒有的總價
let totalPrice = 0
initialCartStatus.forEach(item => {
  totalPrice += item.quantity * item.price
})
initialCartStatus.push({ id: 'total', totalPrice: totalPrice })
// 將CartContext包裝成Provider元件
export function CartProvider(props) {
  // useReducer 參數1=reducer function 參數2=初始狀態
  const [cartData, dispatch] = useImmerReducer(cartReducer, initialCartStatus)
  return (
    <CartContext.Provider value={cartData}>
      <CartDispatchContext.Provider value={dispatch}>
        {props.children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}
// 導出自定義的use function，提供給內層元件使用，資料流=useCartData，事件流=useCartDispatch
export function useCartData() {
  return useContext(CartContext)
}
export function useCartDispatch() {
  return useContext(CartDispatchContext)
}

function cartReducer(draft, action) {
  switch (action.type) {
    case 'plus': {
      // draft更新該商品品項加1
      const productId = action.id
      // 商品數量加1
      const targetItem = draft.find(item => item.id === productId)
      targetItem.quantity++
      break
    }
    case 'minus': {
      // draft更新該商品品項減1
      const productId = action.id
      // 商品數量加1
      const targetItem = draft.find(item => item.id === productId)
      targetItem.quantity--
      break
    }
    case 'updateTotalPrice': {
      let totalPrice = 0
      draft.forEach(item => {
        if (item.id !== 'total') {
          totalPrice += item.quantity * item.price
        }
      })
      // 更新新的總價
      const newTotal = draft.find(item => item.id === 'total')
      newTotal.totalPrice = totalPrice
      break
    }

    // 需要給defalut value 沒有對應dispatch時會出錯
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }

}