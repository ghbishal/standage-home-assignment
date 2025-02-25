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
import { messages, type MessageType } from '@/lib/chatData';

export default function ChatList() {
  const [messageList, setMessageList] = useState<MessageType[]>(messages);
  const messageRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollToEnd({ animated: true });
    }
  }, [messageList]);

  const handleSendMessage = (newMessage: string) => {
    if (!newMessage.trim()) return;

    const newMsg: MessageType = {
      id: messageList.length + 1,
      sender: 'Germineau Nicolas',
      message: newMessage,
      timestamp: new Date().toISOString(),
    };
    setMessageList((prev) => [...prev, newMsg]);
  };

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
          <View className="mt-3 flex-1 gap-3 px-3">
            {messageList.map((item) => (
              <ChatItem message={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
        <ChatInput onSendMessage={handleSendMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
