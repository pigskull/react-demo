import { FunctionComponent,useRef,useEffect, useState } from 'react';

interface RefTmpProps {
  a?: string
}
 
const RefTmp: FunctionComponent<RefTmpProps> = () => {

  const  inputRef = useRef<HTMLInputElement>(null);

  const  countRef = useRef<number>(0);

  const [,forceUpdate] = useState(0);

  useEffect(()=>{
    inputRef.current?.focus();
  },[])
  return (
    <>
    <input type="text" ref={inputRef} />

    <h2>{countRef?.current}</h2>

    <button onClick={()=>{
      countRef.current += 1;
      forceUpdate(Math.random());
    }}>重新渲染</button>
    </>
    );
}
 
export default RefTmp;