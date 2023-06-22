import { Box, TextField, Button } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  useEffect(() => {
    const quillInstance = editorRef.current.getEditor();
    quillInstance.root.style.height = '30em'; // Adjust the height as needed
  }, []);

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleButtonClick = () => {
    // Perform the desired action with the content
    alert("want to save me eh?")
    console.log(content);
  };

  return (
      <Box sx={{
        mt:"20px",
        p:"10px"
      }}>

          <TextField label="Blog Title"
          sx={{
                width: '100%',
                mb:"20px"
          }}
          />
          <ReactQuill
              ref={editorRef}
              value={content}
              onChange={handleEditorChange}
              modules={{
                  toolbar: [
                      [{ header: [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['link', 'image'],
                      ['clean'],
                  ],
              }}
          />
          <Button
              onClick={handleButtonClick}
              sx={{
                  mt: "10px"
              }}
              variant='contained'>
              Press me eh
          </Button>
      </Box>
  );
};

export default Editor;
