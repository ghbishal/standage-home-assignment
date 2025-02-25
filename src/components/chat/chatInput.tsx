import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ReplyMessage } from './replyMessage';
import { type ReplyMessageType } from '@/types/chat';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  scrollToEnd: () => void;
  replyMessage: ReplyMessageType | null;
  clearReply: () => void;
};

export function ChatInput({
  onSendMessage,
  scrollToEnd,
  clearReply,
  replyMessage,
}: ChatInputProps) {
  const [input, setInput] = useState('');
  const { t } = useTranslation('translation', { keyPrefix: 'chat_input' });

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
    scrollToEnd();
  };
  return (
    <View className="bg-transparent">
      <ReplyMessage clearReply={clearReply} replyMessage={replyMessage} />
      <View className="mx-3 flex-row items-center justify-between">
        <View className="flex-row justify-between rounded-lg border border-neutral-300 bg-white p-3">
          <TextInput
            editable
            value={input}
            multiline
            onChangeText={setInput}
            placeholder={t('placeholder')}
            className="mr-3 flex-1"
          />
          <TouchableOpacity onPress={handleSend} className="rounded-full">
            <Image
              className="size-5"
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/876/876777.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
