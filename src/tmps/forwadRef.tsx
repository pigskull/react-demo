import { useRef } from 'react';
import { useEffect } from 'react';
import React from 'react';

const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (_props, ref) => {
  return <div>
    <input ref={ref} defaultValue={123}></input>
  </div>
}

const WrapedGuang = React.forwardRef(Guang);

function Tmp() {
  const ref = useRef<HTMLInputElement>(null);
 
  useEffect(()=> {
    console.dir(ref.current)
    ref.current?.focus()
  }, []);

  return (
    <div className="App">
      <WrapedGuang ref={ref} />
    </div>
  );
}

export default Tmp;
