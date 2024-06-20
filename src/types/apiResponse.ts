export type Pokemon = {
    name: string;
    url: string;
};

export type ApiResponse = {
    count: number;
    next: string;
    previous: string;
    results?: Array<Pokemon>;
};
