import { baseConverter, decimalToBinary } from "../others/base-converter";

export default function stackPlayground() {
  console.log('Decimal to Binary ---------------------')
  console.log(decimalToBinary(233));
  console.log(decimalToBinary(10));
  console.log(decimalToBinary(1000));
  
  console.log('');
  
  console.log('Base Converter ---------------------')
  console.log(baseConverter(100345, 2));
  console.log(baseConverter(100345, 8));
  console.log(baseConverter(100345, 16));
  console.log(baseConverter(100345, 35));
}
