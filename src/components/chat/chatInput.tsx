import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { IconButton } from '../icons/iconButton';
import { StyledIcon } from '../icons/styledIcon';
import { ReplyMessage } from './replyMessage';
import { useMessageStore } from '@/store/useMessageStore';
import { type Attachment } from '@/types/chat';

export function ChatInput() {
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const { replyMessage, clearReplyMessage, addMessage } = useMessageStore();
  const { t } = useTranslation('translation', { keyPrefix: 'chat_input' });

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

  const handleSend = () => {
    if (!input.trim() && !attachments) return;
    addMessage(input, attachments);
    setInput('');
    setAttachments([]);
  };
  return (
    <View className="bg-transparent">
      <ReplyMessage
        clearReply={clearReplyMessage}
        replyMessage={replyMessage}
      />
      <View className="mx-3 flex-row items-center justify-between">
        <View className="flex-row justify-between rounded-lg border border-neutral-300 bg-white p-2">
          <IconButton name="Plus" onPress={() => handleFilePicker()} />
          <TextInput
            editable
            value={input}
            multiline
            onChangeText={setInput}
            placeholder={t('placeholder')}
            className="mr-3 flex-1"
          />
          <TouchableOpacity onPress={handleSend} className="rounded-full">
            <StyledIcon name="Send" />
          </TouchableOpacity>
        </View>
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
