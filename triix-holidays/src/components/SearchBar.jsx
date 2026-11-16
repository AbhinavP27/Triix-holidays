import { Search, X } from "lucide-react";

function SearchBar({ search, setSearch }) {

    return (
        <div className="advanced-search-bar">

            <Search size={21} />

            <input
                type="text"
                placeholder="Search destinations, states..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
                <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="clear-search"
                >
                    <X size={19} />
                </button>
            )}

        </div>
    );
}

export default SearchBar;