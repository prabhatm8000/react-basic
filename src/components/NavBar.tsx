import type { FormEvent } from "react";

const NavBar = ({
    setIsSearchQueryEmpty,
    handleSubmit,
}: {
    setIsSearchQueryEmpty: (val: boolean) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
    return (
        <nav className="bg-amber-200 fixed w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 container mx-auto p-6">
                <h1 className="text-5xl text-black/80 font-semibold">
                    Pokemon
                </h1>
                <form
                    className="flex items-center gap-1"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Search"
                        className="py-2 px-4 bg-amber-300 placeholder:text-black/60 font-semibold focus:outline-none"
                        onChange={(e) => {
                            setIsSearchQueryEmpty(e.target.value.length === 0);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-amber-400 hover:bg-amber-400"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;
