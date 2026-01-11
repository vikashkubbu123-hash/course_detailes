// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-2">Kuch galat ho gaya</h1>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              Refresh karein
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredCourses = COURSES_DATA.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col" data-name="app" data-file="app.js">
      <SearchBar onSearch={setSearchTerm} />
      
      <div className="flex-1 p-4 pb-10">
        {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        ) : (
            <div className="text-center py-10 text-gray-500">
                <div className="icon-search-x text-4xl mb-2 mx-auto text-gray-300"></div>
                <p>Koi course nahi mila.</p>
            </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);