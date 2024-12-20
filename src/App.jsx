import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantList from './components/RestaurantList/RestaurantList'; 
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';
import axios from 'axios';

const restaurantLoader = async () => {
  const response = await axios.get('/restaurant.json');
  return response.data;  
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantList />,
    loader: restaurantLoader,
  },
  {
    path: "/restaurant/:restaurantId",
    element: <RestaurantDetails />,
    loader: restaurantLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
