import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
import { ChatInput, MessageBubble } from '@/components/chat';
import { messages } from '@/lib/chatData';
import { type MessageType, type ReplyMessageType } from '@/types/chat';

export default function ExternalChat() {
  const [messageList, setMessageList] = useState<MessageType[]>(messages);
  const [replyMessage, setReplyMessage] = useState<ReplyMessageType | null>(
    null
  );
  const scrollViewRef = useRef<ScrollView>(null);

  const clearReplyMessage = () => setReplyMessage(null);

  useEffect(() => {
    scrollToEnd();
  }, [messageList, replyMessage]);

  function scrollToEnd() {
    // TODO: fix:- scroll to end not working

    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });
  }

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

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={150}
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
              <MessageBubble
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
