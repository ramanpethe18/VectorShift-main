export const nodeConfig = {
    text: {
      nodeType: "text",
      inputFields: [
        { name: 'inputName', placeholder: 'Name', type: 'select', options: ['Text', 'Prompt'] },
        { name: 'textInput', placeholder: 'Enter text...', type: 'largeTextArea' }
      ],
      outputFields: ['text'],
      targetHandleNames: [],
      sourceHandleNames: ['text']
    },
    integration: {
      nodeType: "integration",
      inputFields: [
        { name: 'socialMediaApp', placeholder: 'Select App', type: 'select', options: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'] },
        { name: 'appFunctionality', placeholder: 'Select Functionality', type: 'select', options: ['Upload Image'] },
        { name: 'caption', placeholder: 'Write a caption...', type: 'text' }
      ],
      outputFields: ['value'],
      targetHandleNames: ['image', 'caption'],
      sourceHandleNames: ['value']
    },
    input: {
      nodeType: "input",
      inputFields: [
        { name: 'inputName', placeholder: 'Name', type: 'text' },
        { name: 'inputType', placeholder: 'Type', type: 'select', options: ['Text', 'File'] }
      ],
      outputFields: ['value'],
      targetHandleNames: [],
      sourceHandleNames: ['value']
    },
    output: {
      nodeType: "output",
      inputFields: [
        { name: 'outputName', label: 'Name', type: 'text' },
        { name: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'] }
      ],
      outputFields: ['value'],
      targetHandleNames: ['value'],
      sourceHandleNames: []
    },
    file: {
      nodeType: "file",
      inputFields: [
        { name: 'inputType', placeholder: 'Type', type: 'select', options: ['PDF', 'Image', 'Docs'] },
        { name: 'inputImage', placeholder: 'Type', type: 'file' }
      ],
      outputFields: ['value'],
      targetHandleNames: [],
      sourceHandleNames: ['value']
    },
    openAi: {
      nodeType: "openAi",
      inputFields: [
        { name: 'inputType', placeholder: 'Model', type: 'select', options: ['generate text', 'generate image'] },
        { name: 'inputModel', placeholder: 'Model', type: 'select', options: ['gpt 3.5 turbo', 'gpt 4.0', 'gpt 3.0'] }
      ],
      outputFields: ['value'],
      targetHandleNames: ['context'],
      sourceHandleNames: ['value']
    }
  };
  