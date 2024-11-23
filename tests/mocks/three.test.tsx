import * as THREE from "three";

describe("Three.js Mock", () => {
  it("should mock Scene and PerspectiveCamera", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1.5, 0.1, 1000);

    expect(scene).toBeDefined();
    expect(camera).toBeDefined();
  });
});
