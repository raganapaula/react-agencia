import ButtonTravel from "./components/ButtonTravel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImgGallery from "./components/ImgGallery";
import ImgTravel from "./components/ImgTravel";
import TitleGallery from "./components/TitleGallery";
import TitleTravel from "./components/TitleTravel";
import './globals.css';



export default function Home() {
return(
 <div>
 <Header/>
 <TitleTravel/>
 <ImgTravel/>
<ButtonTravel/>
 <TitleGallery/>
 <ImgGallery/>
 <Footer/>
 </div>
)
}