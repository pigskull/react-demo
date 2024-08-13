import { useMergeState } from "../hooks/base";
import { useState } from "react";
interface CalendarProps{
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const {
    value: propsValue,
    defaultValue,
    onChange
  } = props;

  const [mergedValue, setValue] = useMergeState(new Date(), {
    value: propsValue,
    defaultValue,
    onChange
  });

  return <div>
    {mergedValue?.toLocaleDateString()}
    <div onClick={()=> {setValue(new Date('2024-5-1'))}}>2023-5-1</div>
    <div onClick={()=> {setValue(new Date('2024-5-2'))}}>2023-5-2</div>
    <div onClick={()=> {setValue(new Date('2024-5-3'))}}>2023-5-3</div>
  </div>
}

function App() {
  const [value, setValue] = useState(new Date('2024-5-1'));

  return <Calendar value={value} onChange={(date) => {
    console.log(date.toLocaleDateString());
    setValue(date);
  }}/>
  // return <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
  //   console.log(date.toLocaleDateString());
  // }}/>
}

export default App
