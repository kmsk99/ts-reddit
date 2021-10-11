import Navbar from './components/Navbar';
import RedditCard from './components/RedditCard';
import Subreddits from './components/Subreddits';

export default function App() {
    return (
        <div className="grid grid-cols-1 gap-5 bg-gray-50 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto">
            <Navbar />
            <RedditCard />
            <Subreddits />
        </div>
    );
}
