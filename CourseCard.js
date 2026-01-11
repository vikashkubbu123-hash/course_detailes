function CourseCard({ course }) {
    const handleClick = () => {
        // Navigate to details page with course ID
        window.location.href = `course-details.html?id=${course.id}`;
    };

    return (
        <div 
            onClick={handleClick}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-95 transition-transform duration-200 cursor-pointer h-full flex flex-col"
            data-name="course-card" 
            data-file="components/CourseCard.js"
        >
            <div className="relative aspect-video w-full">
                <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-[var(--primary-color)] shadow-sm">
                    New Batch
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 flex-1">{course.title}</h3>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-[var(--primary-color)] font-extrabold text-xl">{course.price}</span>
                    <button className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-colors text-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}