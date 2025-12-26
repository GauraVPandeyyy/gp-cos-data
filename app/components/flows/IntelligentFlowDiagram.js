"use client";

import { useEffect, useState } from "react";
import ReactFlow, { Background, Handle, Position, MarkerType } from "reactflow";
import "reactflow/dist/style.css";

const nodeData = [
  {
    label: "Landing Page",
    sublabel: "First Touch",
    color: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    label: "Signup",
    sublabel: "Account Created",
    color: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
  {
    label: "Onboarding",
    sublabel: "Profile Setup",
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
  },
  {
    label: "Activation",
    sublabel: "First Action",
    color: "bg-teal-100",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
  },
  {
    label: "Engagement",
    sublabel: "Regular Usage",
    color: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-200",
  },
  {
    label: "Retention",
    sublabel: "Week 2+",
    color: "bg-emerald-100",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
];


function FlowNode({ data }) {
  const {
    label,
    sublabel,
    color,
    textColor,
    borderColor,
    sourcePosition,
    targetPosition,
    idx,
  } = data;

  return (
    <div
      className={`relative w-[170px] rounded-xl border ${borderColor} ${color} px-4 py-3 text-center shadow-sm`}
    >
      {/* Target */}
      <Handle
        type="target"
        position={targetPosition}
        className="!w-2 !h-2 !bg-gray-500 opacity-0 !border-none"
      />

<div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-700 shadow-sm">
  {idx + 1}
</div>
      <div className={`text-sm font-semibold ${textColor}`}>{label}</div>
      <div className="text-[11px] text-gray-600 mt-1">{sublabel}</div>

      {/* Source */}
      <Handle
        type="source"
        position={sourcePosition}
        className="!w-2 !h-2 !bg-gray-50 opacity-0 !border-none"
      />
    </div>
  );
}

const nodeTypes = { flowNode: FlowNode };

export default function IntelligentFlowDiagram() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    let layout;

    if (isMobile) {
      // Mobile — two columns
      layout = [
        // Column 1 (1 → 2 → 3)
        { id: "1", x: 0, y: 0, s: Position.Bottom, t: Position.Top },
        { id: "2", x: 0, y: 120, s: Position.Bottom, t: Position.Top },
        { id: "3", x: 0, y: 240, s: Position.Right, t: Position.Top },

        // Column 2 (4 → 5 → 6)
        { id: "4", x: 220, y: 240, s: Position.Top, t: Position.Left },
        { id: "5", x: 220, y: 120, s: Position.Top, t: Position.Bottom },
        { id: "6", x: 220, y: 0, s: Position.Top, t: Position.Bottom },
      ];
    } else {
      // Desktop / Tablet — two rows
      layout = [
        // Row 1 (1 → 2 → 3)
        { id: "1", x: 0, y: 0, s: Position.Right, t: Position.Left },
        { id: "2", x: 200, y: 0, s: Position.Right, t: Position.Left },
        { id: "3", x: 400, y: 0, s: Position.Bottom, t: Position.Left },

        // Row 2 (6 ← 5 ← 4)
        { id: "4", x: 400, y: 160, s: Position.Left, t: Position.Top },
        { id: "5", x: 200, y: 160, s: Position.Left, t: Position.Right },
        { id: "6", x: 0, y: 160, s: Position.Left, t: Position.Right },
      ];
    }

    const labels = ["Node 1", "Node 2", "Node 3", "Node 4", "Node 5", "Node 6"];

    setNodes(
      layout.map((l, i) => ({
        id: l.id,
        type: "flowNode",
        position: { x: l.x, y: l.y },
        data: {
          label: nodeData[i].label,
          sublabel: nodeData[i].sublabel,
          color: nodeData[i].color,
          textColor: nodeData[i].textColor,
          borderColor: nodeData[i].borderColor,
          sourcePosition: l.s,
          targetPosition: l.t,
          idx: i,
        },
      }))
    );


    setEdges(
      [
        ["1", "2"],
        ["2", "3"],
        ["3", "4"],
        ["4", "5"],
        ["5", "6"],
      ].map(([source, target]) => ({
        id: `e-${source}-${target}`,
        source,
        target,
        type: "straight",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 16,
          height: 16,
          color: "#6e7175",
        },
        style: {
          strokeWidth: 2,
          stroke: "#bbbfc7",
        },
      }))
    );
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[360px] overflow-hidden rounded-xl touch-pan-x touch-pan-y">

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        nodesDraggable={false}
        nodesConnectable={false}
        /* 👇 ENABLE INTERACTION */
        panOnDrag
        zoomOnScroll
        zoomOnPinch
        panOnScroll
        preventScrolling={false}
        minZoom={0.5}
        maxZoom={1.6}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={24} color="#e5e7eb" />
      </ReactFlow>
    </div>
  );
}
