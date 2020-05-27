import {Callback} from "aws-lambda";

export type CustomHandler<E,R> = (event: E, context: any, callback: Callback<R>) => void;
