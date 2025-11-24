"use client";

import Swiper from "swiper";
import { useGrid } from "../../_context/gridContext";
import { useEffect } from "react";
import Nav from "../../_components/Nav";
import RecemmentPubliees from "../../_components/RecentlyPublished";
import Footer from "../../_components/Footer";
import { Background, BackgroundVariant, ReactFlow } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

const ClientPage = () => {

      const {
    nodes,
    edges,
    selection,
    addLocalNode,
    internals: { onNodesChange, onEdgesChange, onConnect, onSelectionChange },
  } = useGrid();


    useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <div className="page">
      {/* <img className="bg" src="../../../img/blue-purple_gradient.png" alt="" /> */}
      <header>
        <Nav></Nav>
      </header>


      <div style={{ width: "100%", height:  1000}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onSelectionChange={onSelectionChange}
          onConnect={onConnect}
          // Multi-sélection désactivée pour simplifier votre travail
          multiSelectionKeyCode={null}
          // Suppression par le clavier désactivée pour simplifier votre travail
          deleteKeyCode={null}
          fitView
          >
          <Background variant={BackgroundVariant.Dots} /> 
        </ReactFlow>
      </div>     
      <Footer />
    </div>
  )
}

export default ClientPage
