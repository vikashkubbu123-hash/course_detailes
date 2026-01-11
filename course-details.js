function CourseDetailsApp() {
    const [course, setCourse] = React.useState(null);

    React.useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const courseId = parseInt(params.get('id'));
            const foundCourse = COURSES_DATA.find(c => c.id === courseId);
            setCourse(foundCourse);
        } catch (error) {
            console.error("Error finding course", error);
        }
    }, []);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin">
                    <div className="icon-loader text-2xl text-gray-400"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f2f4f7] min-h-screen flex flex-col" data-name="course-details" data-file="course-details.js">
            <DetailsHeader />
            
            {/* Main Content */}
            <div className="max-w-6xl mx-auto w-full px-4 pt-6 pb-24 lg:pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column (Image & Info) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Course Hero Card (Image + Mobile Info) */}
                        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                            {/* Desktop Image Wrapper (with padding) */}
                            <div className="hidden lg:block p-4 pb-0">
                                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                            </div>

                            {/* Mobile Image (Full Bleed) */}
                            <div className="lg:hidden w-full aspect-video relative">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Mobile Only Info Section (Merged here) */}
                            <div className="lg:hidden p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-red-100">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                        </span>
                                        LIVE BATCH
                                    </span>
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                        Daily Classes Auto Update
                                    </span>
                                </div>

                                <h1 className="text-xl font-extrabold text-gray-900 leading-tight mb-2">
                                    {course.title}
                                </h1>
                                
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                                        <div className="icon-star text-[10px] fill-current"></div>
                                        4.8
                                    </div>
                                    <span className="text-gray-400 text-sm">•</span>
                                    <span className="text-gray-500 text-sm">English/Hindi</span>
                                </div>

                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-black text-[var(--primary-color)]">
                                        {course.price}
                                    </span>
                                    <span className="text-gray-400 text-lg line-through mb-1">
                                        ₹999
                                    </span>
                                    <span className="text-green-600 text-sm font-bold mb-1.5 bg-green-50 px-2 py-0.5 rounded-full">
                                        90% OFF
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* About Course */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                                <div className="icon-info text-[var(--primary-color)]"></div>
                                About Course
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                {course.description}
                            </p>
                        </div>

                        {/* Subjects Grid */}
                        {course.subjects && (
                            <div className="bg-white p-6 rounded-3xl shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2 text-lg">
                                    <div className="icon-book-open text-[var(--primary-color)]"></div>
                                    Subjects Covered
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {course.subjects.map((subject, index) => (
                                        <div key={index} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-[var(--primary-color)] hover:shadow-md transition-all cursor-default">
                                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--primary-color)]">
                                                <div className="icon-bookmark text-xl"></div>
                                            </div>
                                            <span className="text-sm font-bold text-gray-700 line-clamp-2">
                                                {subject}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column (Desktop Sidebar) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-20 space-y-6">
                            {/* Course Purchase Card */}
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-red-100">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                        </span>
                                        LIVE BATCH
                                    </span>
                                </div>
                                
                                <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-4">
                                    {course.title}
                                </h1>

                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-4xl font-black text-[var(--primary-color)]">
                                        {course.price}
                                    </span>
                                    <span className="text-gray-400 text-lg line-through mb-1">
                                        ₹9,999
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <a 
                                        href={course.buyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
                                    >
                                        Buy Now
                                        <div className="icon-arrow-right"></div>
                                    </a>
                                    <a 
                                        href={course.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block text-center bg-[var(--secondary-color)] text-[var(--primary-color)] font-bold py-3.5 rounded-xl transition-colors hover:bg-indigo-100"
                                    >
                                        Watch Demo Class
                                    </a>
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-xs text-gray-400">
                                        Secure Payment • 30-Day Money Back Guarantee
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Bottom Action Bar (Hidden on LG) */}
            <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
                <div className="max-w-lg mx-auto flex gap-3">
                    <a 
                        href={course.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 block text-center bg-[var(--secondary-color)] text-[var(--primary-color)] font-bold py-3.5 rounded-xl transition-colors active:scale-95 flex items-center justify-center"
                    >
                        Demo Class
                    </a>
                    <a 
                        href={course.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-[2] bg-black text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        Buy Now
                        <div className="icon-arrow-right text-lg"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CourseDetailsApp />);