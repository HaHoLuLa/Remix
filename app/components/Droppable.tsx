import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ children }: { children?: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  })
  return (
    <div ref={setNodeRef} className={isOver ? "text-green-400" : ""}>
      {children}
    </div>
  );
}
