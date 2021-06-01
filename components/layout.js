import Navbar from "./navbar";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Nprogress from 'nprogress'
import ClassNames from 'classnames'

const Layout = ({children, title, footer = true, light = false }) => {
  const router =useRouter();

  useEffect(() => {
    const handleRouteChange = url =>{
      console.log(url)
      Nprogress.start();
    } 

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', () => Nprogress.done());

    return () =>{
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, []);

  return(
      <div className={ClassNames({'bg-light': light})}> 
      <Navbar />

      <main className="container py-3">
        {
          title &&(
            <h2 className={ClassNames('text-center', {'text-dark': light})}>
              {title}
            </h2>
          )
        }
        {children}
        
      </main>

      {
        footer &&(
          <footer className="bg-dark text-light text-center">
            <div className="container p-2">
              <h4 className="m-0"> &copy; Edison Lopez Portafolio </h4>
              <p className="m-0">2010 - {new  Date().getFullYear()}<span className="ms-1"> All rights Reserved.</span></p>
            </div>
        </footer>
        )
      }
    </div>
  )
};
export default Layout;
