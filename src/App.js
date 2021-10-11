import Navbar from './components/Navbar';
import RedditCard from './components/RedditCard';
import Subreddits from './components/Subreddits';

function App() {
    return (
        <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-5">
            <Navbar />
            <RedditCard />
            <Subreddits />
        </div>
    );
}

export default App;
