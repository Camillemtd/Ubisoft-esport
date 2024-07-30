import {
  Text3D,
  Center,
  PerspectiveCamera,
  useMatcapTexture,
} from "@react-three/drei"

import { useEffect, useState } from "react"

export default function Experience() {
  const [matcapTexture] = useMatcapTexture("CBCBCB_595959_8C8C8C_747474", 256)

  function useResponsiveFOV() {
    const [fov, setFov] = useState(() =>
      window.innerWidth <= 768 ? 100 : window.innerWidth <= 1024 ? 82 : 75
    );

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setFov(100); // Mobile
        } else if (window.innerWidth <= 1380) {
          setFov(80); // Tablette
        } else {
          setFov(52); // Desktop
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize(); 

      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return fov;
  }

  const fov = useResponsiveFOV();

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={fov}/>
      <Center>
        <Text3D
          font={"/helvetiker_regular.typeface.json"}
          size={0.7}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Ubisoft Legends
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </>
  )
}
