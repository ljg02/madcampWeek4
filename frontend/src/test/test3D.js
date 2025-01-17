import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useFrame, ThreeElements } from "@react-three/fiber";
import { useState, useRef } from "react";
import { IFCLoader } from 'web-ifc-three';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, Box } from '@react-three/drei';

function Test3D() {
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    //camera setting
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 0, 3);

    //renderer
    const renderer = new THREE.WebGLRenderer({
        //안티엘리어싱
        antialias: true,
        //아무것도 없는 공간은 투명하게
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1.5;
    scene.add(plane);

    // // IFC 로더 초기화
    // const ifcLoader = new IFCLoader();
    // ifcLoader.ifcManager.setWasmPath('/wasm/');

    // // IFC 모델 로드
    // ifcLoader.load('/models/Building-Architecture.ifc', (ifcModel) => {
    //   console.log(ifcModel);
    //   scene.add(ifcModel);
    //   ifcModel.scale.set(1, 1, 1); // 모델 크기 조정 (필요에 따라 조정)
    //   ifcModel.position.set(0, 0, 0);
    // });

    const AL = new THREE.AmbientLight(0xffffff, 1);
    scene.add(AL);

    // OrbitControls 추가
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true; // 부드러운 움직임
    // controls.dampingFactor = 0.05;

    function animate() {
        requestAnimationFrame(animate);

        // 컨트롤 업데이트
        //controls.update();

        renderer.render(scene, camera);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
    animate();

    // 반응형 처리
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // return (
    //     <Canvas>
    //         {/* 카메라 설정 */}
    //         <PerspectiveCamera makeDefault position={[0, 5, 10]} />

    //         {/* 조명 추가 */}
    //         <ambientLight intensity={0.5} />
    //         <directionalLight position={[10, 10, 5]} intensity={1} />

    //         {/* 3D 객체 추가 */}
    //         <Box position={[0, 0.5, 0]}>
    //             <meshStandardMaterial attach="material" color="orange" />
    //         </Box>

    //         {/* 카메라 컨트롤 추가 */}
    //         <OrbitControls />
    //     </Canvas>
    // );
}

export default Test3D;