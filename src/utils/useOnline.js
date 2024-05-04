import { useEffect, useState} from "react";
const useOnline = ()=>{
    //set default value as offline
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",(event)=>{
            setIsOnline(true);
        });
        window.addEventListener("offline", (event)=>{
            setIsOnline(false);
        });
    });
    

    return isOnline;
}

export default useOnline;