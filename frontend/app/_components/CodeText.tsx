"use client"
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
 import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import { monokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyBlock, vs2015} from "react-code-blocks"; 

interface HighlightedTextProps {
  html: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ html }) => {
  const decodeEntities = (html: string) => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return element.textContent || element.innerText || "";
  };

  const highlightCodeBlocks = (html: string) => {
    const codeRegex =
      /<pre><code class="language-([a-zA-Z]+)">(.*?)<\/code><\/pre>/gs;

    let currentIndex = 0;
    const highlightedCodeMap: Record<string, React.ReactNode> = {};

    const processedHTML = html.replace(codeRegex, (_, language, code) => {
      const key = `REACT_SYNTAX_HIGHLIGHTER_${currentIndex++}`;

      highlightedCodeMap[key] = (
        <CopyBlock 
              text={decodeEntities(code)}
              language={language}
              showLineNumbers={false}
              theme={vs2015} 
              copied={false}
              wrapLongLines
            /> 

      );

      return "";
    });

    return { processedHTML, highlightedCodeMap };
  };

  const { processedHTML, highlightedCodeMap } = highlightCodeBlocks(html);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: processedHTML }} />
      {Object.values(highlightedCodeMap)}
    </div>
  );
};

export default HighlightedText;
