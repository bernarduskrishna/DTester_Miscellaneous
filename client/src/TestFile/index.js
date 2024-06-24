import "./index.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function TestFile({testFile, currTest, labelNoFocalMethod, data, focalFilePath, currTestIndex}) {
  const startLine = currTest && currTest[0];
  const endLine = currTest && currTest[1];
  return (
    <div className="test_file">
      <div className="horizontalFlex">
        <h3>Test Case</h3>
        <button onClick={() => labelNoFocalMethod()}>No Focal Method</button>
        {data && focalFilePath in data && currTestIndex < data[focalFilePath]["tests"].length && "label" in data[focalFilePath]["tests"][currTestIndex] && 
          <span>Current Label: {data[focalFilePath]["tests"][currTestIndex]["label"]}</span>}
      </div>
      <br/>
      {testFile && <SyntaxHighlighter language="java" theme={docco} wrapLongLines={true}>
        {testFile.slice(startLine, endLine).join('')}
      </SyntaxHighlighter>}
    </div>
  );
  }
  
  export default TestFile;