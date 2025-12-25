'use client';

import { useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  MarkerType,
  Handle,
  Position,
  getBezierPath,
  BaseEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

/* -------------------- CUSTOM NODE -------------------- */
const CustomNode = ({ data }) => (
  <div className="group relative px-6 py-4 shadow-2xl rounded-2xl border border-white/30 bg-white/80 backdrop-blur-xl transition-all hover:border-blue-400 hover:shadow-blue-500/10 w-[180px]">
    {/* Subtle Glow Background */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
    
    <Handle type="target" position={Position.Top} className="!bg-blue-400 !border-white !w-3 !h-3 opacity-0 group-hover:opacity-100" />
    
    <div className="relative flex flex-col items-center">
      <div className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest mb-1">Step 0{data.id}</div>
      <div className="text-sm font-bold text-slate-700 text-center leading-tight">{data.label}</div>
    </div>

    <Handle type="source" position={Position.Bottom} className="!bg-blue-400 !border-white !w-3 !h-3 opacity-0 group-hover:opacity-100" />
  </div>
);

const nodeTypes = { journey: CustomNode };

/* -------------------- COMPONENT -------------------- */
export default function IntelligentFlowDiagram() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const xGap = isMobile ? 200 : 240;
    const yGap = 160;

    // S-CURVE LOGIC: Row 1 (L to R), Row 2 (R to L)
    const layout = [
      { id: '1', x: 0, y: 0 },           // Top Left
      { id: '2', x: xGap, y: 0 },
      { id: '3', x: xGap * 2, y: 0 },
      { id: '4', x: xGap * 3, y: 0 },    // Top Right
      { id: '5', x: xGap * 3, y: yGap }, // Bottom Right (Directly under 4)
      { id: '6', x: xGap * 2, y: yGap }, // Moving Left
      { id: '7', x: xGap, y: yGap },     // Moving Left
    ];

    const newNodes = layout.map((pos) => ({
      id: pos.id,
      type: 'journey',
      position: { x: pos.x, y: pos.y },
      data: { 
        label: ['Landing Page', 'Signup', 'Onboarding', 'Activation', 'Engagement', 'Retention', 'Advocacy'][parseInt(pos.id) - 1],
        id: pos.id 
      },
    }));

    const newEdges = [
      ['1', '2'], ['2', '3'], ['3', '4'], 
      ['4', '5'], // Vertical drop
      ['5', '6'], ['6', '7'] // Right to Left
    ].map(([source, target]) => ({
      id: `e-${source}-${target}`,
      source,
      target,
      animated: true,
      interactionWidth: 20,
      style: {
        stroke: 'url(#edge-gradient)', 
        strokeWidth: 3,
        filter: 'drop-shadow(0px 0px 5px rgba(59, 130, 246, 0.5))',
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#3b82f6',
        width: 15,
        height: 15,
      },
    }));

    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-2xl overflow-hidden relative">
 
      <svg style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }}>
        <defs>
          <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        zoomOnScroll={false}
        panOnDrag
        proOptions={{ hideAttribution: true }}
      >
        <Background variant="lines" color="#f1f5f9" gap={40} />
      </ReactFlow>
      
      
      <div className="absolute top-6 left-6 pointer-events-none">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">User Intelligence Flow</h3>
        <p className="text-xs text-slate-400 font-medium">Automated Progression Pipeline</p>
      </div>
    </div>
  );
}