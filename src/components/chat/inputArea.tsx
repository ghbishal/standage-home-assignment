import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import Editor from '../editor/editor';
import { IconButton } from '../icons/iconButton';
import { StyledIcon } from '../icons/styledIcon';
import { ReplyMessage } from './replyMessage';
import { useMessageStore } from '@/store/useMessageStore';
import { type Attachment } from '@/types/chat';

type TextNode = {
  type: 'text';
  text: string;
  format?: number;
};

type LinkNode = {
  type: 'link';
  url: string;
  children: Node[];
};

type Node = {
  children?: Node[];
} & (TextNode | LinkNode);

export function InputArea() {
  const [editorState, setEditorState] = useState<string | null>(null);
  const [plainText, setPlainText] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const { replyMessage, clearReplyMessage, addMessage } = useMessageStore();

  const convertToMarkdown = () => {
    if (!editorState) return plainText;

    try {
      const parsedState = JSON.parse(editorState);
      let markdown = '';

      const rootChildren = parsedState.root.children;

      for (const node of rootChildren) {
        markdown += processNodeContent(node) + '\n';
      }

      return markdown.trim();
    } catch (error) {
      console.error('Error converting to markdown:', error);
      return plainText;
    }
  };

  const processNodeContent = (node: Node): string => {
    if (!node.children) return '';

    return node.children
      .map((child) => {
        if (child.type === 'text') {
          let text = child.text;
          if (child.format && child.format & 1) text = `**${text}**`; // Bold
          if (child.format && child.format & 2) text = `*${text}*`; // Italic
          return text;
        }
        return '';
      })
      .join('');
  };

  const handleSend = () => {
    if (!plainText.trim() && attachments.length === 0) return;

    const markdownContent = convertToMarkdown();

    addMessage(markdownContent, attachments);

    setPlainText('');
    setEditorState('');

    setAttachments([]);
  };
  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ multiple: true });
      if (!result.canceled && result.assets?.length) {
        const newFiles: Attachment[] = result.assets.map((file) => ({
          url: file.uri,
          name: file.name,
          type: file.mimeType?.startsWith('image/')
            ? 'image'
            : file.mimeType?.includes('pdf')
              ? 'pdf'
              : 'other',
        }));
        setAttachments((prev) => [...prev, ...newFiles]);
      }
    } catch (error) {
      console.error('Document picking error:', error);
    }
  };

  return (
    <View className="bg-transparent pb-2">
      <ReplyMessage
        clearReply={clearReplyMessage}
        replyMessage={replyMessage}
      />
      <View className="mx-3 h-[120px] flex-row items-center  rounded-lg border border-gray-300 bg-white p-2">
        <IconButton name="Plus" onPress={() => handleFilePicker()} />

        <View className="flex-1 px-2 ">
          <Editor setPlainText={setPlainText} setEditorState={setEditorState} />
        </View>

        <TouchableOpacity
          onPress={handleSend}
          className={`p-2 ${!plainText.trim() && attachments.length === 0 ? 'opacity-50' : ''}`}
          disabled={!plainText.trim() && attachments.length === 0}
        >
          <StyledIcon name="Send" />
        </TouchableOpacity>
      </View>
      {attachments.length > 0 && (
        <View className="mt-2 px-3">
          <FlatList
            data={attachments}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            renderItem={({ item }) => (
              <View className="mr-2 rounded bg-gray-200 p-2">
                <Text className="text-sm text-gray-700">{item.name}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
