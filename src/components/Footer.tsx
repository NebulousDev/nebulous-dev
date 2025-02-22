import { StyleMode } from "./StyleMode";

export default function Footer({styleMode}: any) {

  let bgStyle = "";
  let textStyle = "";
      
  switch(styleMode)
  {
      case StyleMode.DARK_MODE:
          bgStyle = "bg-black"; 
          textStyle = "text-white";
          break;
      case StyleMode.LIGHT_MODE:
          bgStyle = "bg-white";
          textStyle = "text-black";
          break;
  }

  return (
    <div className={`flex flex-row h-[200px] w-full justify-center content-center ${bgStyle}`}>
        <div className='flex-col justify-center content-center'>
            <h2 className={`${textStyle} text-center content-center m-2`}>All icons from <a className='hover:underline' href='https://fontawesome.com/'>FontAwesome</a>, <a className='hover:underline' href="https://icons8.com/">Icons8</a>, <a className='hover:underline' href="https://vecta.io/">Vecta</a>, and <a className='hover:underline' href="https://www.svgrepo.com/">SVGRepo</a></h2>
            <h2 className={`${textStyle} text-center content-center m-2`}>© Ben Ratcliff 2024</h2>
        </div>
    </div>
  )
}
