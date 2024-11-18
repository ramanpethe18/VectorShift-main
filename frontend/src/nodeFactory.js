import { NodeComponent } from "./components/nodeComponent";
import { nodeConfig } from "./nodes/nodeConfig";


export const NodeFactory = ({ id, nodeType, onClose }) => {
  const config = nodeConfig[nodeType];

  if (!config) {
    console.error(`No configuration found for node type: ${nodeType}`);
    return null;
  }

  return <NodeComponent id={id} nodeConfig={config} onClose={onClose} />;
};
