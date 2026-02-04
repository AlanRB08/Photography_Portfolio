import { BlurIn } from "./Blurin";
import gomita2_800 from '../assets/pau_productos/gomita2_800.webp';
import gomita1_800 from '../assets/pau_productos/gomita1_800.webp';
export default function InfiniteDraggableCarousel() {
  const images = [gomita2_800, gomita1_800];
  return (
    <div className="pt-10 w-screen">
        <div 
        id="productos"
        className="h-screen text-center flex justify-center items-center"
        >
          <BlurIn>FOTOGRAFIA DE <br /> PRODUCTO</BlurIn>          
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 md:px-10 h-full md:h-[70vh] overflow-hidden">
      {images.map((e,index)=>{
        return (<div key={index}
        className="h-full w-full aspect-square">
          <img src={e} alt="" className="w-full h-full object-cover"/>
        </div>)
      })}
    </div>
    </div>
  );
}
