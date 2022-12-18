import Home from '../Components/Home'
import Students from '../Components/Students'
import Teachers from '../Components/Teachers'
import About from '../Components/About'

export const NavInformations = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element: <Home />,
        hover: 'Home Page'
    },
    {
        id: 2,
        title: 'Students',
        path: '/students',
        element: <Students />,
        hover: 'Students Page'
    },
    {
        id: 3,
        title: 'Teachers',
        path: '/teachers',
        element: <Teachers />,
        hover: 'Teachers Page'
    },
    {
        id: 4,
        title: 'About',
        path: '/about',
        element: <About />,
        hover: 'About Page'
    },
    {
        id: 5,
        title: 'Not Found',
        path: '*',
        element: <h1>404 Not Found</h1>,
        hover: 'Not Found Page'
    },
]
