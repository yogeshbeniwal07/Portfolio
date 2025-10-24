import Navbar from "@/app/components/navbar";
import Home from "@/app/components/home";
import Work from "@/app/components/work";
import Skills from "@/app/components/skills";
import Education from "./components/education";
import Footer from "./components/footer";
import MouseGlow from "./components/MouseGlow";

export default function Page() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <MouseGlow/>
      <Work/>
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  );
}
