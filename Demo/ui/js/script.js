let editorElement = document.getElementById('editor-container');
let monacoEditor; 

require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.41.0/min/vs' } });

window.onload = function() {
    require(['vs/editor/editor.main'], function () {
        monacoEditor = monaco.editor.create(editorElement, {
            value: '',
            language: 'javascript',
            theme: 'vs-dark',
        });
    });
}