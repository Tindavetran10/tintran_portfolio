/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import {Float, useGLTF} from '@react-three/drei'

const GithubLogo = (props)=> {
    const { nodes, materials } = useGLTF('/models/3d_github_logo.glb')
    return (
        <Float floatIntensity={1}>
            <group {...props} dispose={null}>
                <group scale={4}>
                    <mesh
                        geometry={nodes.Curve002.geometry}
                        material={materials['Material.002']}
                        position={[0.015, 0.117, -0.023]}
                        rotation={[1.658, 0, -Math.PI / 9]}
                        scale={70}
                    />
                    <mesh
                        geometry={nodes.Cylinder.geometry}
                        material={materials['Material.002']}
                        position={[0.02, -0.017, -0.035]}
                        rotation={[0.087, Math.PI / 9, 0]}
                        scale={[0.167, 0.011, 0.124]}
                    />
                    <mesh
                        geometry={nodes.Cylinder001.geometry}
                        material={materials['Material.004']}
                        position={[-0.015, -0.017, -0.12]}
                        rotation={[1.658, 0, -Math.PI / 9]}
                    />
                    <mesh
                        geometry={nodes.Vert.geometry}
                        material={materials['Material.002']}
                        position={[0.005, -0.004, -0.074]}
                        rotation={[0.087, Math.PI / 9, 0]}
                        scale={0.7}
                    />
                </group>
            </group>
        </Float>
    )
}

useGLTF.preload('/models/3d_github_logo.glb')
export default GithubLogo