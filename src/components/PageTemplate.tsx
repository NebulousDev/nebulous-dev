import Footer from './Footer'
import Header from './Header'

export default function PageTemplate({children} : any) {
  return (
    <>
        <Header disableAnim={true} />
        <div className="flex bg-zinc-950 justify-center">
            <div className="flex-col w-full 2xl:w-[100rem] p-10 justify-center">
                {children}
            </div>
        </div>
        <Footer />
    </>
  )
}
