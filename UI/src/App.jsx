
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import logo from './assets/images/kbalogo.png'
import Nevbar from './components/Nevbar.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import Button from './components/Button.jsx'
import Homepage from "./pages/Homepage.jsx"
import Notfoundpage from "./pages/Notfoundpage.jsx"
import Courses from "./pages/Courses.jsx"
import MainLayout from "./Layout/MainLayout.jsx"
import Addcourse from "./pages/Addcourse.jsx"
import Contact from "./pages/Contact.jsx"
import Learnmore, { Coursesloader }  from "./pages/Learnmore.jsx"
import Editcoursepage from "./pages/Editcoursepage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import AuthLayout from "./Layout/AuthLayout.jsx"



function App() {
  // const [count, setCount] = useState(0)

  const router=createBrowserRouter(
    createRoutesFromElements(

<>
      <Route path="/" element={<AuthLayout/>} >
        <Route index element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignupPage/>}/>
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/addcourse" element={<Addcourse/>}/>
        
        <Route path="/learnmore/:id" element={<Learnmore />} loader={Coursesloader}/>
        <Route path="/contact" element={<Contact />} />

        <Route path="/editcourse/:id" element={<Editcoursepage />}  />

        <Route path="*" element={<Notfoundpage />} />
      </Route>

      </>
    )
  )
  return (
    <>
    {/* console.log(courses) */}

    {/* <Nevbar />
    <Hero />
    <Cards />
    <Button /> */}

    <RouterProvider router={router} />
    </>
  )
}

export default App
