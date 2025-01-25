import { useEffect } from "react";
export default function MariaCars() {
  const redirectUrl = "https://www.maria-cars.com/";
  useEffect(() => {
    window.open(redirectUrl, "_blank");
  }, []);
  return <div>Loading...</div>;
}
