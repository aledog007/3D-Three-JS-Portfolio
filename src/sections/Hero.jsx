import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import Typewriter from 'typewriter-effect';
import Button from '../components/Button.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, Ich bin Alessio <span className="waving-hand">👋</span>
        </p>
        <div className="hero_tag text-gray_gradient flex justify-center items-center">
          <span>Ich bin&nbsp;</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('software developer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('im zweiten Lehrjahr')
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{ loop: true }}
          />
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#aboutme" className="w-fit">
          <Button name="Finde mehr heraus" isBeam containerClass="sm:w-fit w-full sm:min-w-96 min-w-64" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
