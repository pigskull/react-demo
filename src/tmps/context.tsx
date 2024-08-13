import { createContext, useContext } from 'react';

const countContext = createContext(0);

function Aaa() {
  return <div>
      <countContext.Provider value={1}>
        <Bbb></Bbb>
      </countContext.Provider>
  </div>
} 

function Bbb() {
  return <div><Ccc></Ccc></div>
}

// 类组件使用countContext.Consumer 的render props 绑定在props上使用
// 有相同的provider，会取最近的那个

function Ccc() {
  const count = useContext(countContext);
  return <h2>context 的值为：{count}</h2>
}



export default Aaa;
