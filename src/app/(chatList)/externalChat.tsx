import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MessageBubble } from '@/components/chat';
import { ChatInput } from '@/components/chat/chatInput';
import { StatusSelector } from '@/components/status/statusSelector';
import { ToolChip } from '@/components/ui/toolChip';
import { formatDate } from '@/lib/utils';
import { useMessageStore } from '@/store/useMessageStore';

// This supports rich text editor
// import { InputArea } from '@/components/chat/inputArea';

export default function ExternalChat() {
  const { messages } = useMessageStore();
  const startDate =
    messages.length > 0
      ? (messages[0]?.timestamp ?? new Date().toISOString())
      : new Date().toISOString();

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={150}
        className="flex-1"
      >
        <View className="flex-row justify-center">
          <StatusSelector />
        </View>

        <ScrollView
          className="flex-1"
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
        >
          <View className="my-2 flex-1 gap-4 px-3">
            <View className="mt-2 flex-row justify-center">
              <ToolChip
                label={formatDate(startDate, 'fullDate')}
                variant="pressed"
                size="md"
              />
            </View>

            {messages.map((item) => (
              <MessageBubble message={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
        <ChatInput />

        {/* // This supports rich text editor but the problem is when you submit message does not clears. */}
        {/* <InputArea /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
