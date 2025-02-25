import { create } from 'zustand';
import { useUserStore } from './useUserStore';
import { messages as initialMessages } from '@/lib/chatData';
import { type MessageType, type ReplyMessageType } from '@/types/chat';

type MessageStore = {
  messages: MessageType[];
  replyMessage: ReplyMessageType | null;
  addMessage: (message: string, sender: string) => void;
  setReplyMessage: (reply: ReplyMessageType | null) => void;
  clearReplyMessage: () => void;
};

export const useMessageStore = create<MessageStore>((set) => ({
  messages: initialMessages,
  replyMessage: null,

  addMessage: (message) => {
    const { defaultUser } = useUserStore.getState();
    set((state) => {
      const newMessage: MessageType = {
        id: state.messages.length + 1,
        sender: defaultUser.name,
        message,
        timestamp: new Date().toISOString(),
        replyTo: state.replyMessage,
      };
      return { messages: [...state.messages, newMessage], replyMessage: null };
    });
  },

  setReplyMessage: (reply) => set({ replyMessage: reply }),

  clearReplyMessage: () => set({ replyMessage: null }),
}));
