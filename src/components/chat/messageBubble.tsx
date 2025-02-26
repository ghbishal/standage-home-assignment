import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image } from 'react-native';
import { MarkdownRenderer } from '../editor/markdownRenderer';
import { StyledIcon } from '../icons/styledIcon';
import { ToolChip } from '../ui/toolChip';
import { ActionModal } from './actionModal';
import { ReplyMessage } from './replyMessage';
import { cn, formatDate } from '@/lib/utils';
import { useMessageStore } from '@/store/useMessageStore';
import { useUserStore } from '@/store/useUserStore';
import { type MessageType } from '@/types/chat';

type MessageBubbleProps = {
  message: MessageType;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const { defaultUser } = useUserStore();
  const isUser = message.sender === defaultUser.name;
  const { getTranslatedMessage, setReplyMessage } = useMessageStore();
  const { t } = useTranslation('translation', { keyPrefix: 'chat_item' });

  const [isTranslated, setIsTranslated] = useState(false);

  const handleTranslate = () => {
    setIsTranslated((prev) => !prev);
  };

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <View>
      <View
        className={cn(
          'flex-row items-center gap-2 mb-1',
          isUser ? 'justify-end' : 'justify-start'
        )}
      >
        {!isUser && <StyledIcon name="PersonFill" size="medium" />}
        <Text className="text-sm font-semibold text-gray-500">
          {message.sender}
        </Text>

        <ToolChip
          label={formatDate(message.timestamp, 'timeOnly')}
          variant="pressed"
          size="sm"
        />
        {isUser && (
          <Image
            source={{ uri: defaultUser.avatarUrl }}
            className="size-6 rounded-full"
          />
        )}
      </View>
      <View
        className={cn('flex-col relative', isUser ? 'self-end' : 'self-start')}
      >
        <ActionModal
          options={[
            {
              label: t('copy'),
              onSelect: () => copyToClipboard(message.message),
              icon: <StyledIcon name="Copy" size="xsmall" />,
            },
            {
              label: isTranslated ? t('translate_en') : t('translate_ja'),
              onSelect: handleTranslate,
              icon: <StyledIcon name="Translate" size="xsmall" />,
            },
            {
              label: t('reply'),
              onSelect: () =>
                setReplyMessage({
                  id: message.id,
                  sender: message.sender,
                  message: message.message,
                }),
              icon: <StyledIcon name="Reply" size="xsmall" />,
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
          <Text className="text-base">
            <MarkdownRenderer
              children={
                isTranslated
                  ? getTranslatedMessage(message.id, message.message)
                  : message.message
              }
              attachments={message.attachments}
            />
          </Text>
        </View>
      </View>
    </View>
  );
}
