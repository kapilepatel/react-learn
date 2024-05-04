import { useEffect, useState} from "react";
const useOnline = ()=>{
    //set default value as offline
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",(event)=>{
            setIsOnline(true);
            console.log(event);
        });
        window.addEventListener("offline", (event)=>{
            setIsOnline(false);
            console.log(event);
        });
    },[]);
    

    return isOnline;
}

export default useOnline;