import { ArrowDownUp } from "lucide-react";

function SortDropdown({ sortBy, setSortBy }) {

    return (

        <div className="sort-container">

            <ArrowDownUp size={18} />

            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >

                <option value="recommended">
                    Recommended
                </option>

                <option value="price-low">
                    Price: Low to High
                </option>

                <option value="price-high">
                    Price: High to Low
                </option>

                <option value="rating">
                    Highest Rated
                </option>

                <option value="popular">
                    Most Popular
                </option>

            </select>

        </div>

    );

}

export default SortDropdown;