import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ReplyMessage } from './replyMessage';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  scrollToEnd: () => void;
  replyMessage: any;
  clearReply: any;
};

export function ChatInput({
  onSendMessage,
  scrollToEnd,
  clearReply,
  replyMessage,
}: ChatInputProps) {
  const [input, setInput] = useState('');

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
            value={input}
            onChangeText={setInput}
            placeholder="Type message ..."
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
