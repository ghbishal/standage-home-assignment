'use dom';

import '../../../global.css';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { LinkNode } from '@lexical/link';
import { ListNode, ListItemNode } from '@lexical/list';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { QuoteNode } from '@lexical/rich-text';
import { $getRoot } from 'lexical';
import React from 'react';
import ToolbarPlugin from './domComponents/toolbarPlugin';

const placeholder = 'Enter some rich text...';

const theme = {
  text: {
    bold: 'font-bold',
    italic: 'italic',
  },
};

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    LinkNode,
  ],
  onError(error: Error) {
    throw error;
  },
  theme: theme,
};

export default function Editor({
  setPlainText,
  setEditorState,
}: {
  setPlainText: React.Dispatch<React.SetStateAction<string>>;
  setEditorState: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="flex-1 flex-col bg-transparent">
        <ToolbarPlugin />
        <div className="relative min-h-[60px] w-full rounded-lg border border-gray-300">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="min-h-[60px] flex-1 p-2 focus:outline-none"
                aria-placeholder={placeholder}
                placeholder={
                  <div className="absolute left-2 top-2 z-[-1] text-gray-400">
                    {placeholder}
                  </div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin
            onChange={(editorState) => {
              editorState.read(() => {
                setPlainText($getRoot().getTextContent());
              });
              setEditorState(JSON.stringify(editorState.toJSON()));
            }}
            ignoreHistoryMergeTagChange
            ignoreSelectionChange
          />
          <ListPlugin />
          <LinkPlugin />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
