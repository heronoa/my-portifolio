"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props {
  items?: any[];
  gap?: number;
}

const DraggableGrid: React.FC<Props> = ({
  items = [
    {
      img: "/images/dev-manager.png",
      title: "Dev Manager",
      description:
        "Web app to manager developers team, with analytics, login system and projects creation",
      tech: [
        "nextjs",
        "tailwindcss",
        "framermotion",
        "firebase",
        "react",
        "typescript",
      ],
      url: "https://github.com/heronoa/developer_manager",
    },
    {
      img: "/images/payments-api.png",
      title: "Payments Api",
      description: "Web app to manager debts",
      tech: ["nodejs", "mongodb", "express", "typescript", "prisma"],
      url: "https://github.com/heronoa/payments-api",
    },
    {
      img: "/images/portifolio.png",
      title: "Portifolio",
      description: "This current website. If you are curious on how I make it",
      tech: [
        "nextjs",
        "tailwindcss",
        "threejs",
        "react",
        "eslint",
        "typescript",
      ],
      url: "https://github.com/heronoa/my-portifolio",
    },
    {
      img: "/images/vuejs-turnbased-game.png",
      title: "Vuejs Turn-Based Game",
      description:
        "A turn based game where you can create character play against bots or real players created to pratice vuejs",
      tech: ["vuejs", "tailwindcss", "cypressio", "eslint", "typescript"],
      url: "https://github.com/heronoa/vuejs-turnbased-game",
    },
    {
      img: "/images/turnbased-game-server.png",
      title: "Node Turn-Based Game Server",
      description:
        "The server-side of a turn based game, featuring matchmaking and socket connection, also build login and sign systems",
      tech: ["nodejs", "mongodb", "express", "typescript", "prisma"],
      url: "https://github.com/heronoa/colyseus-turngame",
    },
    {
      img: "/images/rabbitmq.png",
      title: "RabbitMQ MicroServices Example",
      description:
        "A sample on how to build a microservices architecture using RabbitMQ and practice clean architecture",
      tech: [
        "nodejs",
        "mongodb",
        "express",
        "javascript",
        "mongoose",
        "rabbitmq",
      ],
      url: "https://github.com/heronoa/rabbitmq-getting-start",
    },
  ],
  gap = 30,
}: Props) => {
  const gridRef = useRef<any>(null);
  const gridWidth = 400;
  const gridHeight = 600;

  const positionsRef = useRef<{ x: number; y: number; id: string }[]>([]);
  const gapArrX = Array.from({ length: Math.ceil(items.length / 2) })
    .fill(0)
    .map((_, idx) => idx * (gap / 2));
  const gapArrY = Array.from({ length: Math.ceil(items.length / 2 - 1) })
    .fill(0)
    .map((_, idx) => idx * (gap / 2));

  const calculateGridSize = () => {
    const grid = gridRef.current!;
    const columns = 3; // Number of columns
    const rows = 2; // Number of columns
    const gridWidth = grid.offsetWidth;
    const gridHeight = grid.offsetHeight;
    const gridCellWidth = gridWidth / columns; // Keep cells square
    const gridCellHeight = gridHeight / rows; // Keep cells square
    return [gridCellWidth, gridCellHeight];
  };

  const calculatePositions = (items: any[]) => {
    const positions: any[] = items.map((_, index) => ({
      x: (index % 3) * gridWidth + gapArrX[index % 3],
      y: Math.floor(index / 3) * gridHeight + gapArrY[Math.floor(index / 3)],
      id: `grid-item_${index}`,
    }));
    positionsRef.current = positions;
    return positions;
  };

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const grid = gridRef.current;

    const [gridWidth, gridHeight] = calculateGridSize();

    const items: (Element & { dataset: { index?: number } })[] = Array.from(
      grid.children,
    );

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
          const col = Math.round(endX / gridWidth);
          return col * gridWidth;
        },
        y: endY => {
          // Calcula a posição mais próxima em Y
          const row = Math.round(endY / gridHeight);
          return row * gridHeight;
        },
      },
      onDragEnd: function () {
        const draggedIndex = parseInt(this.target.dataset.index!, 10);

        // Verifica a nova posição
        const targetX = Math.round(this.x / gridWidth) * gridWidth;
        const targetY = Math.round(this.y / gridHeight) * gridHeight;

        // Encontra o índice da célula no grid
        const targetIndex = positionsRef.current.findIndex(pos => {
          const index = Number(pos.id.split("_")[1]);

          console.log({
            pos,
            targetX,
            targetY,
            range: {
              x: [pos.x - gapArrX[index % 3], pos.x + gapArrX[index % 3]],
              y: [
                pos.y - gapArrY[Math.floor(index / 3)],
                pos.y + gapArrY[Math.floor(index / 3)],
              ],
            },
            check:
              pos.x - gapArrX[index % 3] < targetX &&
              pos.x + gapArrX[index % 3] > targetX &&
              pos.y - gapArrY[Math.floor(index / 3)] < targetY &&
              pos.y + gapArrY[Math.floor(index / 3)] > targetY,
          });

          return (
            pos.x - gapArrX[index % 3] <= targetX &&
            pos.x + gapArrX[index % 3] >= targetX &&
            pos.y - gapArrY[Math.floor(index / 3)] <= targetY &&
            pos.y + gapArrY[Math.floor(index / 3)] >= targetY
          );
        });

        if (isNaN(draggedIndex) || !positionsRef.current[draggedIndex]) {
          console.error("Invalid dragged index:", draggedIndex);
          return;
        }

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
      Array.from(grid.children as Element[]).forEach(i => {
        if (i.id) Draggable.get("#" + i.id)?.kill();
      });
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-3 w-full h-full relative "
      style={{
        // width: gridWidth * 3 + gap * 3,
        // height: gridHeight * 2 + gap * 2,
        width: "100vw",
        height: "300vh",
      }}
    >
      {items.map((index, i) => (
        <div
          key={i}
          id={`grid-item_${i}`}
          style={{
            width: gridWidth,
            height: gridHeight,
            // margin: gap / 2,
            // transform: `translate(${positionsRef.current[i].x}px, ${positionsRef.current[i].y}px)
          }}
          className="bg-accent-purple flex justify-center items-between  rounded-lg cursor-grab absolute"
        >
          <div className="justify-between !h-full !w-full text-base flex flex-col p-6 dark:text-primary-light text-dark">
            {index?.img && (
              <div className="justify-between items-center h-full w-full  text-base flex flex-col p-6 dark:text-primary-light text-dark">
                {index?.img && (
                  <div className="relative">
                    <Image
                      src={index.img}
                      width={180}
                      height={90}
                      alt={`${index.title} image`}
                    />
                  </div>
                )}
                <div className="h-[50%] w-full">
                  <h2 className="text-xl text-left ">{index.title}</h2>
                  <p className="text-base text-dark-gray dark:text-dark">
                    {index.description}
                  </p>
                </div>
                {index?.url && (
                  <div className="text-xs">
                    <Link rel="noreferrer" href={index?.url} passHref>
                      Click To Open <OpenInNewIcon />
                    </Link>
                  </div>
                )}
                <div>
                  {index.tech && (
                    <div className="flex relative gap-2 mt-2 w-[180px] h-[90]">
                      {index.tech.map((tech: any) => (
                        <Image
                          key={tech}
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
                          width={30}
                          height={30}
                          alt={tech}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DraggableGrid;
