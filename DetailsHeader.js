function DetailsHeader() {
    return (
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <button 
                    onClick={() => window.history.back()}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 transition-all"
                >
                    <div className="icon-arrow-left text-gray-700 text-xl"></div>
                </button>
                
                <h1 className="font-bold text-lg text-gray-900 truncate mx-4 flex-1 text-center">
                    Course Details
                </h1>
                
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95 transition-all">
                    <div className="icon-share-2 text-gray-700 text-xl"></div>
                </button>
            </div>
        </div>
    );
}