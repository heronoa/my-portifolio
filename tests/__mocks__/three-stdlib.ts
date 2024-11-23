// Mock básico para utilitários comuns do three-stdlib
export class OrbitControls {
  constructor(camera: unknown, domElement: unknown) {}
  update = jest.fn();
  dispose = jest.fn();
}

export class GLTFLoader {
  load = jest.fn(
    (
      url: string,
      onLoad: (gltf: unknown) => void,
      onProgress?: () => void,
      onError?: () => void,
    ) => {
      onLoad({
        scene: { add: jest.fn(), remove: jest.fn() },
      });
    },
  );
}

export class EffectComposer {
  constructor(renderer: unknown) {}
  addPass = jest.fn();
  render = jest.fn();
}

export class RenderPass {
  constructor(scene: unknown, camera: unknown) {}
}

export class UnrealBloomPass {
  constructor(
    resolution: [number, number],
    strength: number,
    radius: number,
    threshold: number,
  ) {}
  dispose = jest.fn();
}
