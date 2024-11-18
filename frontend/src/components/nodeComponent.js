import { useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import './nodes.css'; // Ensure this path is correct

export const NodeComponent = ({
  id,
  nodeType = '', // Default to an empty string if not provided
  inputFields,
  outputFields,
  targetHandles = 0,
  sourceHandles = 0,
  targetHandleNames = [],
  sourceHandleNames = [],
  onClose // Function to handle close action
}) => {
  const nodeRef = useRef(null);

  // Adjust handle positions dynamically
  useEffect(() => {
    if (nodeRef.current) {
      const handleElements = nodeRef.current.querySelectorAll('.react-flow__handle');
      const totalHandles = handleElements.length;
      const containerHeight = nodeRef.current.offsetHeight;

      handleElements.forEach((handle, index) => {
        const handleHeight = handle.offsetHeight;
        handle.style.top = `${(containerHeight / (totalHandles + 1)) * (index + 1) - handleHeight / 2}px`;
      });
    }
  }, [targetHandles, sourceHandles]);

  const renderTargetHandles = () => {
    return targetHandleNames.map((name, index) => (
      <Handle
        key={`target-${name}`}
        type="target"
        position={Position.Left}
        id={`${id}-${name}`}
        style={{ top: `${(100 / (targetHandleNames.length + 1)) * (index + 1)}%` }}
      />
    ));
  };

  const renderSourceHandles = () => {
    return sourceHandleNames.map((name, index) => (
      <Handle
        key={`source-${name}`}
        type="source"
        position={Position.Right}
        id={`${id}-${name}`}
        style={{ top: `${(100 / (sourceHandleNames.length + 1)) * (index + 1)}%` }}
      />
    ));
  };

  return (
    <div className={`node ${nodeType}`}>
      <div className="node-header">
        <span>{nodeType ? nodeType.charAt(0).toUpperCase() + nodeType.slice(1) : 'Unknown'}</span>
        {onClose && (
          <button className="node-close-button" onClick={() => onClose(id)}>
            &times;
          </button>
        )}
      </div>

      {inputFields.map((field) => (
        <div key={field.name} className="input">
          {field.type === 'largeTextArea' ? (
            <textarea
              className="node-input large-textarea"
              placeholder={field.placeholder}
              rows="7"
              style={{ width: '100%', padding: '10px' }}
            />
          ) : field.type === 'select' ? (
            <select className="node-input">
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="node-input"
              type={field.type || 'text'}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}

      {/* Render target handles based on targetHandleNames prop */}
      {targetHandleNames.length > 0 && renderTargetHandles()}

      {/* Render source handles based on sourceHandleNames prop */}
      {sourceHandleNames.length > 0 && renderSourceHandles()}
    </div>
  );
};
