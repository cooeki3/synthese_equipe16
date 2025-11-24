 import { GridProvider } from "../../_context/gridContext";
import ClientPage from "./clientPage";
export default function App() {

    const initialNodes = [
    {
      id: "id-un",
      position: { x: 0, y: 0 },
      deletable: false,
      draggable: false,
    },
    { id: "id-deux", position: { x: 0, y: 70 } },
    { id: "id-trois", position: { x: 200, y: 0 } },
  ];
  const initialEdges = [{ id: "edge-un", source: "id-un", target: "id-deux" }];
  
  return (

    <div>
        <h2>My React Flow Diagram</h2>
        {/* <FormNode /> */}


    <GridProvider initialNodes={initialNodes} initialEdges={initialEdges}>
        <ClientPage />
    </GridProvider>

    </div>
    
    );
}