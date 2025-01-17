// WallScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

/**
 * wallSegments: [(x1, y1, x2, y2), ...] (픽셀 좌표)
 */
function WallScene({ wallSegments }) {
  // 예시) "1 픽셀 = 1 cm" 라고 가정 (원하는 비율로 스케일링 가능)
  const PIXEL_TO_METER = 0.01; // 1픽셀 -> 0.01m = 1cm
  const WALL_HEIGHT = 2.4;     // 벽 높이 (미터)
  const WALL_THICKNESS = 0.2;  // 벽 두께 (미터)

  return (
    <Canvas style={{ width: '100%', height: '600px' }}>
      {/* 카메라 & 조명 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.7} />

      <OrbitControls />

      {wallSegments.map((line, i) => {
        const [x1, y1, x2, y2] = line;

        // 픽셀 -> 미터 변환
        const x1m = x1 * PIXEL_TO_METER;
        const y1m = y1 * PIXEL_TO_METER;
        const x2m = x2 * PIXEL_TO_METER;
        const y2m = y2 * PIXEL_TO_METER;

        // 벽 길이
        const wallLength = Math.sqrt(
          (x2m - x1m) ** 2 + (y2m - y1m) ** 2
        );

        // 벽 중점 (x, z) - Three.js에서는 y가 높이이므로, 여기서는 평면상 좌표를 x,z로 매핑
        const midX = (x1m + x2m) / 2;
        const midZ = (y1m + y2m) / 2;

        // 벽의 회전 각도(2D 상에서)
        const angle = Math.atan2(y2m - y1m, x2m - x1m);

        return (
          <mesh
            key={i}
            position={[midX, WALL_HEIGHT / 2, -midZ]} 
            rotation={[0, -angle, 0]} 
          >
            {/* 
              BoxGeometry args: [width, height, depth]
              여기서는 (length, wallHeight, wallThickness) 
            */}
            <boxGeometry args={[wallLength, WALL_HEIGHT, WALL_THICKNESS]} />
            <meshStandardMaterial color="white" />
          </mesh>
        );
      })}
    </Canvas>
  );
}

export default WallScene;
