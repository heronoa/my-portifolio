"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

const ThreeTechOrbit: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const rotationAmountRef = useRef(0);

  useEffect(() => {
    const mount = mountRef.current!;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Set background to transparent
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const textureLoader = new THREE.TextureLoader();
    const centralTexture = textureLoader.load("/images/me.webp");
    const centralTextureBack = textureLoader.load("/images/realme.jpeg");
    const orbitingTextures = [
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      ),
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      ),
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      ),
    ];
    const secondOrbitingTextures = [
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      ),
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      ),
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      ),
    ];
    const thirdOrbitingTextures = [
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
      ),
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      ),
      textureLoader.load(
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      ),
    ];

    const centralGeometry = new THREE.BoxGeometry(3, 4, 0.01);
    const centralMaterial = [
      new THREE.MeshBasicMaterial({ transparent: true }), // Top face
      new THREE.MeshBasicMaterial({ transparent: true }), // Bottom face
      new THREE.MeshBasicMaterial({ transparent: true }), // Right face
      new THREE.MeshBasicMaterial({ transparent: true }), // Left face
      new THREE.MeshBasicMaterial({ map: centralTexture, transparent: true }), // Front face
      new THREE.MeshBasicMaterial({
        map: centralTextureBack,
        transparent: true,
      }), // Back face
    ];
    const centralCube = new THREE.Mesh(centralGeometry, centralMaterial);
    scene.add(centralCube);

    const orbitingCubes: THREE.Mesh[] = [];
    const secondOrbitingCubes: THREE.Mesh[] = [];
    const thirdOrbitingCubes: THREE.Mesh[] = [];

    orbitingTextures.forEach((texture, index) => {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.00001);
      const materials = [
        new THREE.MeshBasicMaterial({ transparent: true }), // Right face
        new THREE.MeshBasicMaterial({ transparent: true }), // Left face
        new THREE.MeshBasicMaterial({ transparent: true }), // Top face
        new THREE.MeshBasicMaterial({ transparent: true }), // Bottom face
        new THREE.MeshBasicMaterial({ map: texture, transparent: true }), // Front face
        new THREE.MeshBasicMaterial({ map: texture, transparent: true }), // Back face
      ];
      const cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);
      orbitingCubes.push(cube);
    });
    secondOrbitingTextures.forEach((texture, index) => {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.00001);
      const materials = [
        new THREE.MeshBasicMaterial({ transparent: true }), // Right face
        new THREE.MeshBasicMaterial({ transparent: true }), // Left face
        new THREE.MeshBasicMaterial({ transparent: true }), // Top face
        new THREE.MeshBasicMaterial({ transparent: true }), // Bottom face
        new THREE.MeshBasicMaterial({ map: texture, transparent: true }), // Front face
        new THREE.MeshBasicMaterial({ map: texture, transparent: true }), // Back face
      ];
      const cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);
      secondOrbitingCubes.push(cube);
    });
    thirdOrbitingTextures.forEach((texture, index) => {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.00001);
      const materials = [
        new THREE.MeshBasicMaterial({ transparent: true }), // Right face
        new THREE.MeshBasicMaterial({ transparent: true }), // Left face
        new THREE.MeshBasicMaterial({ transparent: true }), // Top face
        new THREE.MeshBasicMaterial({ transparent: true }), // Bottom face
        new THREE.MeshBasicMaterial({ map: texture, transparent: true }), // Front face
        new THREE.MeshBasicMaterial({ map: texture, transparent: true }), // Back face
      ];
      const cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);
      thirdOrbitingCubes.push(cube);
    });

    let orbitSpeed = 0.01;
    const animate = () => {
      requestAnimationFrame(animate);

      if (hoveredRef.current) {
        centralCube.rotation.y += (Math.PI - centralCube.rotation.y) * 0.1; // Smoothly rotate to show the back
      } else {
        centralCube.rotation.x = Math.PI * -0.01;
        centralCube.rotation.z = Math.PI * -0.01;
        centralCube.rotation.y += (0 - centralCube.rotation.y) * 0.1; // Smoothly reset to show the front
      }

      orbitingCubes.forEach((cube, index) => {
        const angle =
          orbitSpeed + (index * 2 * Math.PI) / orbitingTextures.length;
        const distance = 2;
        cube.position.x = distance * Math.cos(angle);
        cube.position.y = distance * Math.cos(angle); // Keep Y position constant
        cube.position.z = distance * Math.sin(angle);
      });
      secondOrbitingCubes.forEach((cube, index) => {
        const angle =
          orbitSpeed + (index * 2 * Math.PI) / orbitingTextures.length;
        const distance = 2;
        cube.position.x = distance * Math.cos(angle);
        cube.position.y = distance * -Math.cos(angle); // Keep Y position constant
        cube.position.z = distance * Math.sin(angle);
      });
      thirdOrbitingCubes.forEach((cube, index) => {
        const angle =
          orbitSpeed + (index * 2 * Math.PI) / orbitingTextures.length;
        const distance = 2;
        cube.position.x = distance * Math.cos(angle);
        0; // Keep Y position constant
        cube.position.z = distance * Math.sin(angle);
      });

      orbitSpeed += hoveredRef.current ? 0.001 : 0.03;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-screen lg:w-full h-screen"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
    />
  );
};

export default ThreeTechOrbit;
