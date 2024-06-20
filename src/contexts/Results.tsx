import { createContext, useContext, useReducer, type Dispatch } from "react";
import type { ResultActionType, ResultStateType } from "../types/contexts";
import type { Pokemon } from "../types/apiResponse";

const ResultsContext = createContext<{
    state: ResultStateType;
    dispatch: Dispatch<ResultActionType>;
    search?: (query: string) => Array<Pokemon> | undefined
}>({
    state: undefined as ResultStateType,
    dispatch: () => {},
});

export const resultReducer = (
    state: ResultStateType,
    action: ResultActionType
) => {
    switch (action.type) {
        case "SET":
            return action.payload;
        case "RESET":
            return undefined;
        default:
            return state;
    }
};

export const useResultContext = () => {
    const context = useContext(ResultsContext);
    return context;
};

export const ResultContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(
        resultReducer,
        undefined as ResultStateType
    );

    const search = (query: string) => {
        const results = state?.results?.filter((result) => {
            return result.name.includes(query);
        });

        return results;
    };
    return (
        <ResultsContext.Provider
            value={{
                state,
                dispatch,
                search
            }}
        >
            {children}
        </ResultsContext.Provider>
    );
};
