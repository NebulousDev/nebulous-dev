import Footer from './Footer'
import Header from './Header'
import { StyleMode } from './StyleMode';

export default function PageTemplate({styleMode, setStyleMode, children} : any) {

  let bgStyle = "";
    
  switch(styleMode)
  {
    case StyleMode.DARK_MODE:
      bgStyle = "bg-gradient-to-t from-black to-zinc-950";
      break;
    case StyleMode.LIGHT_MODE:
      bgStyle = "bg-gray-200";
      break;
  }

  return (
    <>
      <Header styleMode={styleMode} setStyleMode={setStyleMode} disableAnim={true} />
        <div className={`flex ${bgStyle} justify-center`}>
          <div className="flex-col w-full 2xl:w-[100rem] p-10 justify-center">
            {children}
          </div>
        </div>
      <Footer styleMode={styleMode} />
    </>
  )
}
