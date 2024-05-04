import { useEffect, useState } from "react";
const useOnline = () => {
    //set default value as offline
    const [isOnline, setIsOnline] = useState(true);
    
    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
            console.log("Online");
        }
        const handleOffline = () => {
            setIsOnline(false);
            console.log("offline");
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return ()=>{
            window.removeEventListener("online" ,handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);


    return isOnline;
}

export default useOnline;