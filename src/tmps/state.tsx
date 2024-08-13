import { FunctionComponent,useState } from 'react';

interface TmpProps {
  a?: string;
}


const Tmp: FunctionComponent<TmpProps> = () => {

  const [count, setCount] = useState(0);

  console.log(1);

  const addOne = () => {
    setCount(count + 1);

  }

  const addOnes = () => {
    setCount(count + 1);
    setCount(count + 1);
    // 异步批处理 第二次和第一次的count一样
  }

  const addFOnes = ()=>{
    setCount((nowCount:number)=>{
      return nowCount + 1;
    })
    setCount((nowCount:number)=>{
      return nowCount + 1;
    })
  }

  const addHy = ()=>{
    setCount(count + 1);
    setCount((nowCount:number)=>{
      return nowCount + 1;
    })
    setCount(count + 2);

    setCount((nowCount:number)=>{
      return nowCount + 1;
    })
  }
  return (  
    <div>
      <h2>{count}</h2>
     <button onClick={()=>addOne()}>一次加一</button>
      <button onClick={()=>addOnes()}>多次加一</button>
      <button onClick={()=>addFOnes()}>函数回调多次加一</button>
      <button onClick={()=>addHy()}>混合</button>
    </div>
  );
}
 
export default Tmp;