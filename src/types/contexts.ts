import type { ApiResponse } from "./apiResponse";

export type ResultStateType = ApiResponse | undefined;

export type ResultActionType =
    | {
          type: "SET";
          payload: ApiResponse;
      }
    | { type: "RESET" };
