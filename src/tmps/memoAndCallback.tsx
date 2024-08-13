import { memo, useCallback, useEffect, useMemo, useState } from "react";

interface BbbProps {
  count: number;
}

// memo 是防止 props 没变时的重新渲染，useMemo 和 useCallback 是防止 props 的不必要变化。

function Bbb(props: BbbProps) {
  console.log('bbb render');

  return <h2>{props.count}</h2>
}

function Ccc(props: {data:{count: number}}) {
console.log('ccc render');
  return <h2>ccc {props.data.count}</h2>
}

// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件。浅比较

const MemoCcc = memo(Ccc)

function Ddd(props: {callback: () => void}) {
  console.log(props);
  console.log('ddd render');

  return <h2>ddd</h2>
}

const MemoDdd = memo(Ddd)

function Aaa() {
    const [,setNum] = useState(1);

    const [data,setData] = useState({
      count: 1
    });


    // 缓存函数只有在依赖变化的时候才会重新创建
    const callback = useCallback(() => {
      return ()=>{}
    },[]);

    // 缓存一段逻辑，只有依赖变化的时候才会重新计算
    const momoData = useMemo(()=>{
      return 1
    },[]);


    useEffect(() => {
        setInterval(()=> {
            setNum(Math.random());
            setData(
              {
                count: 1
              }
            )
        }, 2000)
        
    },[]);

    return <div>
        <Bbb count={momoData}></Bbb>
        <MemoCcc data={data}></MemoCcc>
        <MemoDdd callback={callback}></MemoDdd>
    </div>
} 




export default Aaa;
