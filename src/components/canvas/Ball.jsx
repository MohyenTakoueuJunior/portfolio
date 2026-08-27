import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Decal, Float, Preload, useTexture } from '@react-three/drei';
import Loader from '../Loader';

const Ball = ({ imgUrl, position, scale }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={2.5}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}>
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Lays the balls out on a grid sized from the canvas viewport. The wrapping
// element is given the matching columns/rows aspect ratio, so cells come out
// square and each ball keeps the same size relative to its cell at any width.
const BallGrid = ({ technologies, columns }) => {
  const { viewport } = useThree();

  const rows = Math.ceil(technologies.length / columns);
  const cell = viewport.width / columns;

  return technologies.map((technology, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    // Short final rows stay centred rather than hugging the left edge.
    const inRow = Math.min(columns, technologies.length - row * columns);

    return (
      <Ball
        key={technology.name}
        imgUrl={technology.icon}
        position={[
          (column - (inRow - 1) / 2) * cell,
          -(row - (rows - 1) / 2) * cell,
          0,
        ]}
        scale={cell * 0.27}
      />
    );
  });
};

// One WebGL context for every ball. Mobile browsers cap live contexts at
// around 8, so the previous one-canvas-per-ball approach blanked the oldest
// balls on phones. No OrbitControls and pointerEvents none, so the balls
// animate but never swallow a scroll.
const BallsCanvas = ({ technologies, columns }) => {
  return (
    <Canvas
      frameloop="always"
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ pointerEvents: 'none' }}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <Suspense fallback={<Loader />}>
        <BallGrid technologies={technologies} columns={columns} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallsCanvas;
