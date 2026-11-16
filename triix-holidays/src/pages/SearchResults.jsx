import { useState, useMemo } from "react";

import { useSearchParams, Link } from "react-router-dom";

import destinations from "../data/destinations";

import SearchBar from "../components/SearchBar";

import FilterSidebar from "../components/FilterSidebar";

import SortDropdown from "../components/SortDropdown";

import DestinationCard from "../components/DestinationCard";

import "./SearchResults.css";


function SearchResults() {

    const [searchParams] = useSearchParams();


    // Search
    const [search, setSearch] = useState(
        searchParams.get("destination") || ""
    );


    // Filters
    const [category, setCategory] = useState("All");

    const [minPrice, setMinPrice] = useState(0);

    const [maxPrice, setMaxPrice] = useState(10000);

    const [minRating, setMinRating] = useState(0);


    // Sorting
    const [sortBy, setSortBy] = useState("recommended");


    // Reset filters
    const resetFilters = () => {

        setSearch("");

        setCategory("All");

        setMinPrice(0);

        setMaxPrice(10000);

        setMinRating(0);

        setSortBy("recommended");

    };


    // Filter and sort destinations
    const filteredDestinations = useMemo(() => {

        let results = destinations.filter((destination) => {

            const searchMatch =
                destination.name.toLowerCase().includes(search.toLowerCase()) ||
                destination.state.toLowerCase().includes(search.toLowerCase());


            const categoryMatch =
                category === "All" ||
                destination.category === category;


            const priceMatch =
                destination.price >= minPrice &&
                destination.price <= maxPrice;


            const ratingMatch =
                destination.rating >= minRating;


            return (
                searchMatch &&
                categoryMatch &&
                priceMatch &&
                ratingMatch
            );

        });


        // Sorting
        switch (sortBy) {

            case "price-low":

                results.sort((a, b) => a.price - b.price);

                break;


            case "price-high":

                results.sort((a, b) => b.price - a.price);

                break;


            case "rating":

                results.sort((a, b) => b.rating - a.rating);

                break;


            case "popular":

                results.sort((a, b) => b.reviews - a.reviews);

                break;


            default:

                break;

        }


        return results;

    }, [
        search,
        category,
        minPrice,
        maxPrice,
        minRating,
        sortBy
    ]);


    return (

        <div className="search-results-page">

            <div className="container">


                {/* PAGE HEADER */}

                <div className="search-page-heading">

                    <span>EXPLORE TRIIX</span>

                    <h1>Find Your Perfect Destination</h1>

                    <p>
                        Discover amazing places and plan your next adventure.
                    </p>

                </div>


                {/* SEARCH BAR */}

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />


                {/* MAIN CONTENT */}

                <div className="search-results-layout">


                    {/* FILTER SIDEBAR */}

                    <aside>

                        <FilterSidebar
                            category={category}
                            setCategory={setCategory}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            minRating={minRating}
                            setMinRating={setMinRating}
                            resetFilters={resetFilters}
                        />

                    </aside>


                    {/* RESULTS */}

                    <main className="search-results-content">


                        {/* RESULTS HEADER */}

                        <div className="results-toolbar">

                            <div>

                                <h3>Explore Destinations</h3>

                                <p>
                                    {filteredDestinations.length} destinations found
                                </p>

                            </div>


                            <SortDropdown
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                            />

                        </div>


                        {/* DESTINATION GRID */}

                        {filteredDestinations.length > 0 ? (

                            <div className="search-destination-grid">

                                {filteredDestinations.map((destination) => (

                                    <DestinationCard
                                        key={destination.id}
                                        destination={destination}
                                    />

                                ))}

                            </div>

                        ) : (

                            <div className="no-results">

                                <h3>No destinations found</h3>

                                <p>
                                    Try changing your search or filters.
                                </p>

                                <button
                                    onClick={resetFilters}
                                >
                                    Clear All Filters
                                </button>

                            </div>

                        )}

                    </main>

                </div>

            </div>

        </div>

    );

}

export default SearchResults;