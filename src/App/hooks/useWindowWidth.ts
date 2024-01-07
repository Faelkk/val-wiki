import { useEffect, useState } from "react"


const useWindowWidth = () => {
    const [width,setWidth] = useState(window.innerWidth)


    useEffect(() => {
      
        window.addEventListener('resize',handleResize)
        function handleResize()  {
            window.addEventListener('resize',() => {
                setWidth(window.innerWidth)
            })
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])

    return width
  
}

export default useWindowWidth