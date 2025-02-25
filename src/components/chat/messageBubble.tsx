import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { ActionModal } from './actionModal';
import { ReplyMessage } from './replyMessage';
import { cn } from '@/lib/utils';
import { useMessageStore } from '@/store/useMessageStore';
import { useUserStore } from '@/store/useUserStore';
import { type MessageType } from '@/types/chat';

type MessageBubbleProps = {
  message: MessageType;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'chat_item' });

  const { defaultUser } = useUserStore();
  const isUser = message.sender === defaultUser.name;
  const { setReplyMessage } = useMessageStore();

  // TODO: options Actions
  return (
    <View className={cn('flex-col', isUser ? 'self-end' : 'self-start')}>
      <ActionModal
        options={[
          {
            label: t('copy'),
            onSelect: () => console.log('message', message.message),
          },
          {
            label: t('translate'),
            onSelect: () => console.log('Translate:', message.message),
          },
          {
            label: t('reply'),
            onSelect: () =>
              setReplyMessage({
                id: message.id,
                sender: message.sender,
                message: message.message,
              }),
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
        <ReplyMessage replyMessage={message.replyTo} />
        <Text className="text-sm font-bold">{message.sender}</Text>
        <Text className="text-base">{message.message}</Text>
        <Text className="text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
}
