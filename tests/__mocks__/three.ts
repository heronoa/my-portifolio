// Mock básico para atender ao código fornecido
export class WebGLRenderer {
  constructor(options: { antialias: boolean; alpha: boolean }) {
    this.domElement = document.createElement('canvas'); // Mock para o canvas
  }
  setSize = jest.fn();
  setClearColor = jest.fn(); // Adiciona suporte ao setClearColor
  render = jest.fn();
  domElement: HTMLCanvasElement;
}

export class Scene {
  add = jest.fn();
  remove = jest.fn();
}

export class PerspectiveCamera {
  constructor(
    public fov: number,
    public aspect: number,
    public near: number,
    public far: number
  ) {}
  position = { z: 0, set: jest.fn() };
  lookAt = jest.fn();
}

export class TextureLoader {
  load = jest.fn((url: string, onLoad?: (texture: unknown) => void) => {
    const texture = { url }; // Mock de textura simples
    if (onLoad) onLoad(texture);
    return texture;
  });
}

export class BoxGeometry {
  constructor(public width: number, public height: number, public depth: number) {}
}

export class MeshBasicMaterial {
  constructor(public parameters: Record<string, unknown>) {}
}

export class Mesh {
  constructor(public geometry: BoxGeometry, public material: MeshBasicMaterial[]) {}
  position = { x: 0, y: 0, z: 0 };
  rotation = { y: 0 };
}
