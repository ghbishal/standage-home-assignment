import React from 'react';
import { View, Text } from 'react-native';
import { ActionModal } from './actionModal';
import { type MessageType } from '@/lib/chatData';
import { cn } from '@/lib/utils';

type ChatItemProps = {
  message: MessageType;
};

export function ChatItem({ message }: ChatItemProps) {
  const isUser = message.sender === 'Germineau Nicolas';
  // TODO: options Actions
  return (
    <View className={cn('flex-col', isUser ? 'self-end' : 'self-start')}>
      <ActionModal
        options={[
          {
            label: '📋 Copy',
            onSelect: () => console.log('message', message.message),
          },
          {
            label: '🌐 Translate',
            onSelect: () => console.log('Translate:', message.message),
          },
          {
            label: '↩️ Reply',
            onSelect: () => console.log('Reply to:', message.message),
          },
        ]}
        className={cn(
          'absolute bottom-0 ',
          isUser ? 'left-[-20px]' : 'right-[-20px]'
        )}
      />
      <View
        className={`rounded-lg p-3 ${isUser ? 'self-end bg-white' : 'bg-gray-200'}`}
        style={{ maxWidth: 350 }}
      >
        <Text className="text-sm font-bold">{message.sender}</Text>
        <Text className="text-base">{message.message}</Text>
        <Text className="text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
}
