import { useReducer,Reducer } from 'react'
import { produce } from 'immer'


interface Data {
  dataObj: {
    count: number
  }
}

interface Action {
  type: 'add'|'minus',
  payload: number
}

const reducer = (state: Data, action: Action) => {
  switch (action.type) {
    case 'add':
      return  produce(state, draft => {
        draft.dataObj.count += action.payload
      }) 
    case 'minus':
      return produce(state, draft => {
        draft.dataObj.count -= action.payload
      })
    default:
      return state
  }
}

function ReducerTmp() {
  
  const [state, dispatch] = useReducer<Reducer<Data,Action>,string>(reducer, 'zero',(params:string)=>{
    return {
      dataObj:{
        count: params === 'zero' ? 0 : 1
      }
    }
  })

  console.log(state);

  return (
    <>
      <h2>{state.dataObj.count}</h2>
      <button onClick={()=>dispatch({type:'add',payload:1})}>+</button>
      <button onClick={()=>dispatch({type:'minus',payload:1})}>-</button>
    </>
  )
}

export default ReducerTmp
