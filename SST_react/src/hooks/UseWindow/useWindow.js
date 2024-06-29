import { useEffect, useState } from "react"

function useWindow() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const size = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',size);
        return () => {
            window.removeEventListener('resize',size);
        }
    },[])
    
    return [height,width];
}

export default useWindow;