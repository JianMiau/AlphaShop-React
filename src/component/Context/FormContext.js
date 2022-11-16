import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
// 創建Form用到的Context，靜態資料和事件管理各一個
const FormContext = createContext(null);
const FormDispatchContext = createContext(null);
// 初始化表單狀態資料
const initialFormStatus = {
  // 現在表單的頁數
  currentPage: 1,
  // 表單儲存資料用
  form: {
    1: {},
    2: {},
    3: {},
  }
}

// 將FormContext包裝成Provider元件
export function FormProvider(props) {
  // useReducer 參數1=reducer function 參數2=初始狀態
  const [formData, setFormData] = useImmerReducer(formReducer, initialFormStatus)
  return (
    <FormContext.Provider value={formData}>
      <FormDispatchContext.Provider value={setFormData}>
        {props.children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  )

}

// 導出自定義的use function，提供給內層元件使用，資料流=useFormData，事件流=useFormDispatch
export function useFormData() {
  return useContext(FormContext)
}
export function useFormDispatch() {
  return useContext(FormDispatchContext)
}

// Ruducer 判斷dispatch時回傳狀態，改用immer代理的draft
function formReducer(draft, action) {
  switch (action.type) {
    case 'nextPage': {
      // draft更新上一頁pageNumber 
      draft.currentPage = action.pageNumber + 1
      break
    }
    case 'previousPage': {
      // draft更新下一頁pageNumber 
      draft.currentPage = action.pageNumber + 1
      break
    }
    case 'updateForm': {
      // 更新該頁表單資料
      draft.form[draft.currentPage] = action.text
      break
    }
    // 需要給defalut value 沒有對應dispatch時會出錯
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }

}