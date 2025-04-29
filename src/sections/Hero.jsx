import { PiHandWavingFill } from "react-icons/pi";
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.js";
import HackerRoom from "../components/HackerRoom.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import UnityLogo from "../components/UnityLogo.jsx";
import UnrealLogo from "../components/UnrealLogo.jsx";
import BlenderIcon from "../components/BlenderIcon.jsx";
import GithubLogo from "../components/GithubLogo.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    /*const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },

        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },

        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },

        rotationX: {
            value: 0,
            min: -10,
            max: 10,
        },

        rotationY: {
            value: 0,
            min: -10,
            max: 10,
        },

        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },

        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        }
    })*/

    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({maxWidth:768})
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Tin <span className="waving-hand"><PiHandWavingFill /></span>
                </p>

                <p className="hero_tag text-gray_gradient">
                    Building Games with Heart & Code
                </p>

                <div className="w-full h-full absolute indent-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                            <HeroCamera isMobile={isMobile} isTablet={isTablet} isSmall={isSmall}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    scale={sizes.deskScale}
                                    rotation={[0.1, -Math.PI, 0]}
                                />
                            </HeroCamera>

                            <group>
                                <BlenderIcon position = {sizes.ringPosition} />
                                <UnityLogo position = {sizes.reactLogoPosition} />
                                <GithubLogo position = {sizes.targetPosition} />
                                <UnrealLogo position = {sizes.cubePosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href = "#about" className="w-hit">
                        <Button name = "Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
