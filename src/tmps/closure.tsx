import { useEffect, useState, useReducer, Reducer, useRef } from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
  return state;
}

function Tmp() {
  const [count, setCount] = useState(0);

  // const updateCount = () => {
  //   setCount(count + 1);
  // };
  // const ref = useRef(updateCount);

  // ref.current = updateCount;

  // const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count, "setInterval");
      setCount(count + 1);
    }, 3000);
    console.log(count, "effect");

    return () => {
      clearInterval(timer);
    };
  }, []);
  // 第一种
  // useEffect(() => {
  //  const timer =   setInterval(() => {
  //         console.log(count,'setInterval');
  //         setCount(count + 1);
  //     }, 3000);
  //         console.log(count,'effect');

  //         return ()=>{
  //             clearInterval(timeer);
  //         }
  // }, [count]);
  // 第二种
  // useEffect(() => {
  //   const timer =   setInterval(() => {
  //          console.log(count,'setInterval');
  //          setCount((nowCount)=>nowCount + 1);
  //      }, 3000);
  //          console.log(count,'effect');

  //          return ()=>{
  //              clearInterval(timer);
  //          }
  //  }, []);

  // 第三种
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(count, "setInterval");
  //     dispatch({ type: "add", num: 1 });
  //   }, 3000);
  //   console.log(count, "effect");

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // 第四种
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(count, "setInterval");
  //     ref?.current();
  //   }, 3000);
  //   console.log(count, "effect");

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return <div>{count}</div>;
}

export default Tmp;
