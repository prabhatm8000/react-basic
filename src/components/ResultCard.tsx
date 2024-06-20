import type { Pokemon } from "../types/apiResponse";

const ResultCard = ({ resultData }: { resultData: Pokemon }) => {
    return (
        <div className="px-2 py-1 border border-black/20 rounded-lg">
            <a href={resultData.url} target="_blank">
                <h4 className="text-lg font-semibold text-blue-600 capitalize">{resultData.name}</h4>
            </a>
        </div>
    );
};

export default ResultCard;
