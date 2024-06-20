import { useEffect, useRef, useState, type FormEvent } from "react";
import * as apiClient from "./apiClient";
import NavBar from "./components/NavBar";
import ResultCard from "./components/ResultCard";
import type { ApiResponse } from "./types/apiResponse";
import { useResultContext } from "./contexts/Results";

function App() {
    const {
        dispatch: resultDispatch,
        state: resultState,
        search,
    } = useResultContext();
    const [fetchResults, setFetchResults] = useState<ApiResponse>();
    const [isSearchQueryEmpty, setIsSearchQueryEmpty] = useState(false);

    useEffect(() => {
        // fetch results, if result state is undefined
        if (resultState) {
            setFetchResults(resultState);
            return;
        }
        apiClient.fetchResults(0, apiClient.FETCH_LIMIT).then((data) => {
            resultDispatch({ type: "SET", payload: data });
            setFetchResults(data);
        });
    }, []);

    useEffect(() => {
        // if search query is empty, set fetch results to result state
        if (isSearchQueryEmpty) {
            setFetchResults(resultState);
        }
    }, [isSearchQueryEmpty]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchQueryInputElement = e.currentTarget[0] as HTMLInputElement;
        const searchQuery = searchQueryInputElement.value;

        if (searchQuery.length === 0 || !search) {
            return;
        }

        const searchResult = search(searchQuery);
        setFetchResults({
            count: searchResult ? searchResult.length : 0,
            next: "",
            previous: "",
            results: searchResult,
        });
    };

    return (
        <>
            <NavBar
                handleSubmit={handleSubmit}
                setIsSearchQueryEmpty={setIsSearchQueryEmpty}
            />
            <div className="container mx-auto pt-24">
                <div className=" flex items-center gap-1 my-2">
                    <span className="italic">Result counts:</span>
                    <span>{fetchResults?.count}</span>
                </div>

                <div className="flex flex-col gap-1">
                    {fetchResults?.results?.map((resultData, index) => {
                        return (
                            <div key={index}>
                                <ResultCard resultData={resultData} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
