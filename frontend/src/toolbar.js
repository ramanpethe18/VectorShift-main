import React from 'react';
import { DraggableNode } from './draggableNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faKeyboard, faUpload, faBrain, faCloud, faBoxes } from '@fortawesome/free-solid-svg-icons';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode 
                    type='input' 
                    label='Input' 
                    icon={<FontAwesomeIcon icon={faBoxes} />} 
                />
                <DraggableNode 
                    type='file' 
                    label='File' 
                    icon={<FontAwesomeIcon icon={faFile} />} 
                />
                <DraggableNode 
                    type='output' 
                    label='Output' 
                    icon={<FontAwesomeIcon icon={faUpload} />} 
                />
                <DraggableNode 
                    type='text' 
                    label='Text' 
                    icon={<FontAwesomeIcon icon={faKeyboard} />} 
                />
                <DraggableNode 
                    type='openAi' 
                    label='OpenAi' 
                    icon={<FontAwesomeIcon icon={faBrain} />} 
                />
                <DraggableNode 
                    type='integration' 
                    label='Integration' 
                    icon={<FontAwesomeIcon icon={faCloud} />} 
                />
            </div>
        </div>
    );
};
