import "./Styles/NewsFeed.css"
function NewsFeed() {
    return (
        <div className="news-slideshow">
      <section className="p-6 bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Latest News</h2>
        <div className="news-container">
        <div className="overflow-hidden w-full h-40 bg-white shadow-lg p-4">
          <>Breaking: Market surges | Tech stocks rise | Economy updates...</>
        </div>
        </div>
      </section>
      </div>
    );
  }
  
  export default NewsFeed;
  