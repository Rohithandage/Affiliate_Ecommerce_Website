import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import CategoryProduct from '../pages/CategoryProduct'
import SearchProduct from '../pages/SearchProduct'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
        ]
    }
])


export default router