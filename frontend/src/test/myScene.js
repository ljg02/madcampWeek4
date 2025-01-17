
import React, { useEffect, useState } from 'react';
import WallScene from './wallScene.js';

function MyScene() {
  // 실제로는 서버(API)에서 가져올 수 있겠지만, 여기서는 하드코딩/샘플 데이터라고 가정
  const [wallSegments, setWallSegments] = useState([]);

  useEffect(() => {
    // 예: 파이썬 detect_walls.py의 결과를 직접 가져왔다고 가정
    // x1, y1, x2, y2가 픽셀 좌표
    const dummyData = [
      [100, 100, 300, 100],  // 가로 벽
      [300, 100, 300, 300],  // 세로 벽
      [100, 100, 100, 300],  // 세로 벽
      [100, 300, 300, 300],  // 가로 벽
    ];
    setWallSegments(dummyData);
  }, []);

  return (
    <div>
      <h1>Wall Rendering Example</h1>
      <WallScene wallSegments={wallSegments} />
    </div>
  );
}

export default MyScene;
