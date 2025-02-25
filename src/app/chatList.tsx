import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import { ChatInput } from '@/components/chatInput';
import { ChatItem } from '@/components/chatItem';
import {
  messages,
  type ReplyMessageType,
  type MessageType,
} from '@/lib/chatData';

export default function ChatList() {
  const [messageList, setMessageList] = useState<MessageType[]>(messages);
  const [replyMessage, setReplyMessage] = useState<ReplyMessageType | null>(
    null
  );
  const messageRef = useRef<ScrollView>(null);

  const clearReplyMessage = () => setReplyMessage(null);

  useEffect(() => {
    scrollToEnd();
  }, [messageList, replyMessage]);

  const handleSendMessage = (newMessage: string) => {
    if (!newMessage.trim()) return;

    const newMsg: MessageType = {
      id: messageList.length + 1,
      sender: 'Germineau Nicolas',
      message: newMessage,
      timestamp: new Date().toISOString(),
      replyTo: replyMessage,
    };
    setMessageList((prev) => [...prev, newMsg]);
    setReplyMessage(null);
    scrollToEnd();
  };

  function scrollToEnd() {
    // TODO: fix:- scroll to end not working

    setTimeout(() => {
      messageRef?.current?.scrollToEnd({ animated: true });
    }, 100);
  }
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="my-2 flex-1 gap-2 px-3">
            {messageList.map((item) => (
              <ChatItem
                message={item}
                key={item.id}
                setReplyMessage={setReplyMessage}
              />
            ))}
          </View>
        </ScrollView>
        <ChatInput
          replyMessage={replyMessage}
          clearReply={clearReplyMessage}
          onSendMessage={handleSendMessage}
          scrollToEnd={scrollToEnd}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
