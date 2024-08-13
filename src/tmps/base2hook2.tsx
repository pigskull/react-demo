import { useMergeState } from "../hooks/base";
import { useState } from "react";
interface CalendarProps{
  value?: number;
  defaultValue?: number;
  onChange?: (data: number) => void;
}

function Calendar(props: CalendarProps) {
  const {
    value: propsValue,
    defaultValue,
    onChange
  } = props;

  const [mergedValue, setValue] = useMergeState(1, {
    value: propsValue,
    defaultValue,
    onChange
  });

  return <div>
    {mergedValue}
    <div onClick={()=> {setValue(mergedValue+1)}}>+</div>
    <div onClick={()=> {setValue(mergedValue-1)}}>-</div>
  </div>
}

function App() {
  const [value, setValue] = useState(1);

  return <Calendar value={value} onChange={(data) => {
    console.log(data);
    setValue(data);
  }}/>
  // return <Calendar defaultValue={1} onChange={(data) => {
  //   console.log(data);
  // }}/>
}

export default App
