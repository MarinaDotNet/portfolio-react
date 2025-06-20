import DesktopLayout from "./components/DesktopLayout.jsx";
import MobileLayout from "./components/MobileLayout.jsx";
import UseMediaQuery from "./components/UseMediaQuery.jsx";

export default function App() {

  const isMobile = UseMediaQuery(601, 500);

  return (
    <>
    {
      isMobile 
      ? <MobileLayout /> 
      : <DesktopLayout/>
    }
    </>
  );
}
