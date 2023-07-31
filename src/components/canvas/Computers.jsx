import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./astro.glb");
  const { ref, actions, names } = useAnimations(animations)

  useEffect(() => {
    // Reset and fade in animation after an index has been changed

      actions[names[0]].play()

  
  }, [])

  return (
    <mesh >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={ref}
        object={scene}
        scale={isMobile ? 1.50 : 2.5}
        position={isMobile ? [-3.3, -4.2, -2.2] : [0, -6.50, -1.5]}
        rotation={[-0.12, 0.8, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      //add eventlistener to change screen size
      const mediaQuery = window.matchMedia('(max-width: 500px)');

      //set initial value of isMobile state variable
      setIsMobile(mediaQuery.matches);

      //callback function to handle changes in media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }

      //add callback function as a listener for changes to the media query
      mediaQuery.addEventListener('change', handleMediaQueryChange);

      //remove event listener when component is unmounted
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    
    }, [])
    

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
