import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Download from './pages/Download'
import Community from './pages/Community'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="interactivity" element={<About />} />
      <Route path="download" element={<Download />} />
      <Route path="community" element={<Community />} />
    </Route>
  ),
  { basename: "/reactexplained" }
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
