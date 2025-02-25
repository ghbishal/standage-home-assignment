import { useEffect, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
import { ChatInput, MessageBubble } from '@/components/chat';
import { useMessageStore } from '@/store/useMessageStore';

export default function ExternalChat() {
  const { messages, replyMessage } = useMessageStore();
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollToEnd();
  }, [messages, replyMessage]);

  function scrollToEnd() {
    // TODO: fix:- scroll to end not working

    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });
  }

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
            {messages.map((item) => (
              <MessageBubble message={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
        <ChatInput />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
