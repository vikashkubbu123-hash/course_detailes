function SearchBar({ onSearch }) {
    return (
        <div className="sticky top-0 z-10 bg-gray-100 pt-4 pb-2 px-4 shadow-sm" data-name="search-bar" data-file="components/SearchBar.js">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="icon-search text-gray-400 text-lg"></div>
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm shadow-sm transition-all"
                    placeholder="Search Batches..."
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </div>
    );
}