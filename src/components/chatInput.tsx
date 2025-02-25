import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput('');
  };
  return (
    <View className="pt-2">
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
