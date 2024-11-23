import { OrbitControls, GLTFLoader } from "three-stdlib";
import * as THREE from "three";

describe("three-stdlib mock", () => {
  it("should mock OrbitControls", () => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const controls = new OrbitControls(
      camera,
      document.createElement("canvas"),
    );
    expect(controls.update).toBeDefined();
    expect(controls.dispose).toBeDefined();
  });

  it("should mock GLTFLoader", () => {
    const loader = new GLTFLoader();
    const onLoad = jest.fn();
    loader.load("model.gltf", onLoad);
    expect(onLoad).toHaveBeenCalled();
  });
});
