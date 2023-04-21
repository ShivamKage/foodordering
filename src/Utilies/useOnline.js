import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnilne = () => {
      setIsOnline(true);
    };
    const handleOffilne = () => {
      setIsOnline(false);
    };
    window.addEventListener("offline", handleOffilne);
    window.addEventListener("online", handleOnilne);
    return () => {
      window.removeEventListener("offline", handleOffilne);
      window.removeEventListener("online", handleOnilne);
    };
  }, []);
  return isOnline;
};
export default useOnline;
