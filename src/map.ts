import {CustomHandler} from "./model";

interface Number {
  number: number
}

interface Numbers {
  numbers: number[]
}

export const init: CustomHandler<Number, Numbers> = ({number}, context, callback) => {
  const numbers = [...Array(number + 1).keys()];
  callback(null, {numbers});
}

export const execute: CustomHandler<number, Number> = (number, context, callback) => {
  const newNumber = number + Math.floor(Math.random() * 3) - 1;
  console.log(number, newNumber);
  callback(null, {number: newNumber});
}

export const end: CustomHandler<Number[], Number> = async (event, context, callback) => {
  callback(null, {
    number: await event.reduce((sum, {number}) => sum + number, 0)
  });
}
