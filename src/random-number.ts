import {CustomHandler} from "./model";

interface Response {
  number: number
}

export const handler: CustomHandler<{}, Response> = (event, context, callback) => {
  const number = Math.floor(Math.random() * 15) + 1;
  if (number === 13) {
    callback("UNLUCKY_13");
  } else {
    callback(null, {number});
  }
}
