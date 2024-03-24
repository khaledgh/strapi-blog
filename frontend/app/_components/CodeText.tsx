import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import xss from "xss";
// import Prism from "prismjs";
import "prismjs/themes/prism.css";
import he from "he"; // Import the 'he' library
import ReactDOMServer from "react-dom/server";
interface HighlightedTextProps {
  html: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ html }) => {
  const decodeEntities = (htmlString: string) => {
    return he.decode(htmlString); // Use he.decode to decode HTML entities
  };

  const highlightCodeBlocks = (html: string) => {
    const codeRegex =
      /<pre><code class="language-([a-zA-Z]+)">(.*?)<\/code><\/pre>/gs;

    let currentIndex = 0;
    let processedHTML = html;

    processedHTML = processedHTML.replace(codeRegex, (_, language, code) => {
      const highlightedCode = ReactDOMServer.renderToString(
        <div key={`REACT_SYNTAX_HIGHLIGHTER_${currentIndex++}`}>
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={true}
            customStyle={{
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "rgba(59, 130, 246, 0.3) transparent", // Firefox
            }}
          >
            {decodeEntities(code)}
          </SyntaxHighlighter>
        </div>
      );

      return `<div>${highlightedCode}</div>`;
    });

    return processedHTML;
  };
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  const processedHTML = highlightCodeBlocks(html);

  return <div dangerouslySetInnerHTML={{ __html: processedHTML }} />;
};

export default HighlightedText;
