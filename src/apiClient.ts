import type { ApiResponse } from "./types/apiResponse";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const FETCH_LIMIT = 1302;

export const fetchResults = async (
    offset: number,
    limit: number = 10
): Promise<ApiResponse> => {
    const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data;
};
