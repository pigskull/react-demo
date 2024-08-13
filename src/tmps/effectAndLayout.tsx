import { FunctionComponent,useEffect,useLayoutEffect,useState } from 'react';

interface TmpProps {
  a?: string;
}

const getDataApi = ()=>{
  return new Promise<number>((resolve)=>{
    setTimeout(()=>{
      resolve(Math.random());
    },1000)
  })
}
 
const Tmp: FunctionComponent<TmpProps> = () => {
  const [data,setData] = useState(0);

  const [data1,setData1] = useState(0);


  useState(()=>{
    getDataApi().then((data)=>{
      setData(data);
    })
  })

  // useEffect是异步的,所以可能会在渲染页面之前执行setData,也可能会在渲染页面之后执行setData,之后执行可能会引起页面闪烁
  // useEffect 第一个参数 
  // 不传每次组件Render都会执行 
  // 传空数组只会执行一次 
  // 传入一个变量只有这个变量变化时才会执行
  // useEffect 内部不支持async await,所以要用promise的then方法或者在外面声明一个async函数
  // useEffect 内部可以返回一个函数用来清除副作用,比如定时器,事件监听器等 执行顺序是在下一次执行useEffect之前执行

  useEffect(()=>{
    getDataApi().then((data)=>{
      setData(data);
    })
  },[])

  // useLayoutEffect 跟 useEffect 一样,只是执行时机不一样,useLayoutEffect会在页面渲染之前执行(同步执行),所以会阻塞页面渲染(不会引起页面闪烁)
  // 如果是长任务不建议使用(执行时间>50ms)

  useLayoutEffect(()=>{
    getDataApi().then((data)=>{
      setData1(data);
    })
  },[])


  return ( 
    <>
    <h2>{data}</h2>
    <h2>{data1}</h2>
    </>
   );
}
 
export default Tmp;