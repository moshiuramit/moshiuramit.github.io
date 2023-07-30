import { useReducer } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { AppProvider, ThemeProvider } from './context';
import { Header, Footer } from './components';
import './App.css';
//import Main from './components/Main';
import { Home, BookingPage, ConfirmedBooking } from './pages';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="bookings" element={<BookingPage />}>
        <Route path="thank-you" element={<ConfirmedBooking />} />
      </Route>
    </Route>
  )
);

function App() {
  const initialAppState = {
    previousLocation: ['/'],
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'setPreviousLocation': {
        return {
          // ...state,
          // previousLocation: [...state.previousLocation]
          //   .slice(0, 1)
          //   .push(payload),
        };
      }

      default:
        break;
    }
  };
  const [stateGlobal, dispatchGlobal] = useReducer(reducer, initialAppState);
  return (
    <AppProvider value={{ stateGlobal, dispatchGlobal }}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  );
}
// function App() {
//   return (
//     <>  {/* React fragment tag */}
//     <Header />
//     <Main />
//     <Footer />
//     <div className="App">

//     </div>
//     </>
//   );
// }

export default App;
