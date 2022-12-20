import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import News from "./pages/News"
import Search from "./pages/Search"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
       
     
    <div className="App">
    <BrowserRouter>
    <nav>
    <h1 id="websitName">Hacker News</h1>
    <Link className="link" to="/">News</Link>
    <Link className="link" to="/search">Search</Link>
    </nav>
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
      
    </div>
    </QueryClientProvider>
  );
}

export default App;
