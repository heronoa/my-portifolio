import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader, TextGeometry } from "three-stdlib";

const ThreeDLetters: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current!;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Configuração básica
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000,
    // );
    camera.position.z = 2;
    camera.position.x = 1.6;
    camera.position.y = 0.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Adiciona o renderizador ao DOM
    mountRef.current.appendChild(renderer.domElement);

    // Adiciona luzes
    const spotlight = new THREE.PointLight(0xffffff, 1);
    spotlight.castShadow = true;
    // spotlight.angle = Math.PI / 2;
    // spotlight.penumbra = 0.3;
    spotlight.decay = 2;
    spotlight.distance = 20;
    scene.add(spotlight);

    const spotlightTarget = new THREE.Object3D();
    scene.add(spotlightTarget);
    // spotlight.target = spotlightTarget;

    // Adiciona o texto 3D
    const loader = new FontLoader();
    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      font => {
        const textGeometry = new TextGeometry("Heron", {
          font: font,
          size: 1,
          height: 0.5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
        });

        const textMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.castShadow = true;
        scene.add(textMesh);
      },
    );

    // Atualiza a luz com base na posição do mouse
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      spotlight.position.set(mouseX * 10, mouseY * 10, 3);
      spotlightTarget.position.set(mouseX * 10, mouseY * 10, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Renderiza a cena
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup ao desmontar o componente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeDLetters;
