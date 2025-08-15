import { DndContext } from "@dnd-kit/core";
import { useId, useState } from "react";
import Draggable from "~/components/Draggable";
import Droppable from "~/components/Droppable";
import type { Route } from "./+types/dnd";

export const meta = ({ }: Route.MetaArgs) => {
  return [{
    title: 'Dnd',
    description: 'A drag and drop example using DndKit',
  }];
}

export default function DndRoute() {
  const id = useId();
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd} id={id}>
      <div className="w-2/3 mx-auto">
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}