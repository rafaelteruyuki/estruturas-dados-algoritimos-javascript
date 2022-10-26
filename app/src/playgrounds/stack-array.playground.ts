import StackArray from "../data-structures/stack-array";
import { baseConverter, decimalToBinary } from "../others/base-converter";

export default function stackArrayPlayground() {

  const stackArray = new StackArray<number>();
  console.log(stackArray.isEmpty());

  stackArray.push(5);
  stackArray.push(8);
  console.log(stackArray.peek());

  stackArray.push(11);
  console.log(stackArray.size());
  console.log(stackArray.isEmpty());
  
  stackArray.push(15);

  stackArray.pop();
  stackArray.pop();
  console.log(stackArray.size());
}
