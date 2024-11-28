"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

const DraggableGrid = () => {
  const gridRef = useRef<any>(null);
  const gridSize = 100; // Tamanho de cada célula (100x100px)
  const positionsRef = useRef<{ x: number; y: number; id: string }[]>([]);

  const calculatePositions = (items: any[]) => {
    const positions: any[] = items.map((_, index) => ({
      x: (index % 3) * gridSize,
      y: Math.floor(index / 3) * gridSize,
      id: `grid-item_${index}`,
    }));
    positionsRef.current = positions;
    return positions;
  };

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const grid = gridRef.current;
    const items: (Element & { dataset: { index?: number } })[] = Array.from(
      grid.children,
    );

    const gridSize = 100; // Tamanho de cada célula (100x100px)
    const positions: any[] = []; // Armazena as posições válidas do grid

    // Calcula as posições válidas com base na grade (3 colunas)
    calculatePositions(items);

    // Posiciona os itens inicialmente
    items.forEach((item, index) => {
      const position = positionsRef.current[index];
      if (position) {
        gsap.set(item, { x: position.x, y: position.y });
        item.dataset.index = Number(index);
      }
    });

    // Cria a lógica de Draggable com snapping
    Draggable.create(items, {
      bounds: grid,
      type: "x,y",
      edgeResistance: 0.65,
      inertia: true,
      snap: {
        x: endX => {
          // Calcula a posição mais próxima em X
          const col = Math.round(endX / gridSize);
          return col * gridSize;
        },
        y: endY => {
          // Calcula a posição mais próxima em Y
          const row = Math.round(endY / gridSize);
          return row * gridSize;
        },
      },
      onDragEnd: function () {
        const draggedIndex = parseInt(this.target.dataset.index!, 10);

        // Verifica a nova posição
        const targetX = Math.round(this.x / gridSize) * gridSize;
        const targetY = Math.round(this.y / gridSize) * gridSize;

        // Encontra o índice da célula no grid
        const targetIndex = positionsRef.current.findIndex(
          pos => pos.x === targetX && pos.y === targetY,
        );

        if (isNaN(draggedIndex) || !positionsRef.current[draggedIndex]) {
          console.error("Invalid dragged index:", draggedIndex);
          return;
        }

        console.log({
          dragging: this.target,
          target: Array.from(grid.children)[targetIndex],
          draggedIndex,
          targetIndex,
        });

        if (targetIndex !== -1 && targetIndex !== draggedIndex) {
          // Atualiza os índices e troca os itens
          // Troca os itens no array `positions`
          swapPositions(draggedIndex, targetIndex);
          reorderGrid(items);
        } else {
          // Reverte para a posição original se inválido
          gsap.to(this.target, {
            x: positionsRef.current[draggedIndex].x,
            y: positionsRef.current[draggedIndex].y,
            duration: 0.5,
          });
        }
      },
    });

    const swapPositions = (draggedIndex: number, targetIndex: number) => {
      const temp = positionsRef.current[draggedIndex];
      positionsRef.current[draggedIndex] = positionsRef.current[targetIndex];
      positionsRef.current[targetIndex] = temp;
    };

    const reorderGrid = (items: any[]) => {
      items.forEach((item, index) => {
        const position = positionsRef.current[index];
        if (position) {
          item.dataset.index = String(index);
          gsap.to(item, { x: position.x, y: position.y, duration: 0.5 });
        }
      });
    };

    return () => {
      Array.from(grid.children as Element[]).forEach(i =>
        Draggable.get("#" + i.id).kill(),
      );
    };
  }, []);

  return (
    <div
      ref={gridRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          id={`grid-item_${i}`}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#61dafb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            cursor: "grab",
            position: "absolute",
          }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default DraggableGrid;
