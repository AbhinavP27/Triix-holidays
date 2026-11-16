import { RotateCcw } from "lucide-react";

function FilterSidebar({
    category,
    setCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    minRating,
    setMinRating,
    resetFilters
}) {

    const categories = [
        "All",
        "Mountains",
        "Beach",
        "Nature",
        "Backwaters"
    ];

    return (

        <div className="filter-sidebar">

            <div className="filter-header">

                <h4>Filters</h4>

                <button onClick={resetFilters}>

                    <RotateCcw size={15} />

                    Reset

                </button>

            </div>


            {/* CATEGORY */}

            <div className="filter-group">

                <h5>Destination Type</h5>

                {categories.map((item) => (

                    <label
                        className="filter-option"
                        key={item}
                    >

                        <input
                            type="radio"
                            name="category"
                            checked={category === item}
                            onChange={() => setCategory(item)}
                        />

                        {item}

                    </label>

                ))}

            </div>


            {/* MINIMUM PRICE */}

            <div className="filter-group">

                <h5>Minimum Budget</h5>

                <select
                    value={minPrice}
                    onChange={(e) =>
                        setMinPrice(Number(e.target.value))
                    }
                >

                    <option value={0}>₹0</option>
                    <option value={1000}>₹1,000</option>
                    <option value={2000}>₹2,000</option>
                    <option value={3000}>₹3,000</option>
                    <option value={4000}>₹4,000</option>
                    <option value={5000}>₹5,000</option>

                </select>

            </div>


            {/* MAXIMUM PRICE */}

            <div className="filter-group">

                <h5>Maximum Budget</h5>

                <select
                    value={maxPrice}
                    onChange={(e) =>
                        setMaxPrice(Number(e.target.value))
                    }
                >

                    <option value={10000}>₹10,000</option>
                    <option value={5000}>₹5,000</option>
                    <option value={4000}>₹4,000</option>
                    <option value={3000}>₹3,000</option>
                    <option value={2000}>₹2,000</option>

                </select>

            </div>


            {/* RATING */}

            <div className="filter-group">

                <h5>Minimum Rating</h5>

                <select
                    value={minRating}
                    onChange={(e) =>
                        setMinRating(Number(e.target.value))
                    }
                >

                    <option value={0}>All Ratings</option>
                    <option value={4}>4.0+</option>
                    <option value={4.5}>4.5+</option>
                    <option value={4.8}>4.8+</option>

                </select>

            </div>

        </div>

    );

}

export default FilterSidebar;