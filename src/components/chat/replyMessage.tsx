import { Text, View } from 'react-native';
import { IconButton } from '../icons/iconButton';
import { cn } from '@/lib/utils';
import { type ReplyMessageType } from '@/types/chat';

type ReplyMessageProps = {
  replyMessage?: ReplyMessageType | null;
  clearReply?: () => void;
  className?: string;
};

export function ReplyMessage({
  clearReply,
  replyMessage,
  className,
}: ReplyMessageProps) {
  if (!replyMessage) return null;

  return (
    <View
      className={cn(
        'mx-3 mb-2 flex-row items-center rounded-lg p-2',
        clearReply
          ? 'border border-gray-400 border-l-4 bg-gray-100'
          : 'border-l-4 border-gray-500 bg-gray-100 w-[200px]',
        className
      )}
      style={{ maxWidth: clearReply ? '100%' : 220 }}
    >
      <View className="flex-1">
        <Text className="text-xs font-semibold">{replyMessage.sender}:</Text>
        <Text className="text-xs italic">{replyMessage.message}</Text>
      </View>

      {clearReply && <IconButton name="Cancel" onPress={clearReply} />}
    </View>
  );
}
