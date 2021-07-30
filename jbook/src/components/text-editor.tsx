import './text-editor.css';
import MDEditor from '@uiw/react-md-editor';
import React, { useState, useEffect, useRef } from 'react';

const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('# Header');
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        editorRef.current &&
        event.target &&
        editorRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={editorRef}>
        <MDEditor value={value} onChange={(v) => setValue(v || '')} />
      </div>
    );
  } else {
    return (
      <div className="text-editor card" onClick={() => setEditing(true)}>
        <div className="card-content">
          <MDEditor.Markdown source={value} />
        </div>
      </div>
    );
  }
};

export default TextEditor;
