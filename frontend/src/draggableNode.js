import React from 'react';

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
        const appData = { nodeType };
        event.target.style.cursor = 'grabbing';
        event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div
            className={type}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = 'grab')}
            style={{ 
                cursor: 'grab', 
                minWidth: '60px', 
                height: '60px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexDirection: 'column',
                borderRadius: '8px',
                backgroundColor: '#1C2536',
                padding: '10px', 
                color: '#fff'
            }}
            draggable
        >
            <div style={{ marginBottom: '5px' }}>
                {icon}
            </div>
            <span>{label}</span>
        </div>
    );
};
