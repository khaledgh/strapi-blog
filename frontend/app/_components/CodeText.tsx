import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
 import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import { monokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

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
        <div
          style={{
            position: "relative",
            borderRadius: "1px",
            overflow: "hidden",
          }}
        >
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            customStyle={{
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "rgba(59, 130, 246, 0.3) transparent", // Firefox
            }}
          >
            {decodeEntities(code.trim())}
          </SyntaxHighlighter>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: "15px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <CopyButton value={decodeEntities(code.trim())} timeout={3000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="right"
                >
                  <ActionIcon
                    color={copied ? "teal" : "gray"}
                    variant="subtle"
                    onClick={copy}
                  >
                    {copied ? (
                      <IconCheck style={{ width: 18 }} />
                    ) : (
                      <IconCopy style={{ width: 18 }} />
                    )}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        </div>
      );

      return "";
    });

    return { processedHTML, highlightedCodeMap };
  };

  const [copied, setCopied] = useState(false);
  const { processedHTML, highlightedCodeMap } = highlightCodeBlocks(html);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: processedHTML }} />
      {Object.values(highlightedCodeMap)}
    </div>
  );
};

export default HighlightedText;
