import { create } from 'zustand';
import i18n from '@/i18n/i18n';
import { messages as initialMessages } from '@/lib/chatData';
import { useUserStore } from '@/store/useUserStore';
import { type MessageType, type ReplyMessageType } from '@/types/chat';

interface MessageStore {
  messages: MessageType[];
  replyMessage: ReplyMessageType | null;
  translations: Record<number, { en: string; ja: string }>;
  addMessage: (message: string) => void;
  setReplyMessage: (reply: ReplyMessageType | null) => void;
  clearReplyMessage: () => void;
  getTranslatedMessage: (messageId: number) => string;
}

const preloadedTranslations: Record<number, { en: string; ja: string }> = {
  1: {
    en: "Let's create some simple views to replicate this code.\n\nYou may use either **React Native** or a **PWA** in an appropriate native wrapper.\n\n## Requirements:\n- Follow the instructions in the gist\n- Use your best judgment to fill in the blanks\n\nGood luck!\n\nNote: we use **tailwindcss**. Attaching files (or taking photos and attaching them) should be supported.",
    ja: 'このコードを再現するために、簡単なビューを作ってみよう。\n\n適切なネイティブ・ラッパーで **React Native** または **PWA** を使用することができます。\n\n## 要件:\n- gist の指示に従ってください。\n- あなたの最善の判断で空白を埋めてください。\n\n幸運を祈る！\n\n注: **tailwindcss** を使用しています。ファイルの添付（または写真を撮って添付） はサポートされているはずです。',
  },
  3: {
    en: 'Take your time, but 2 weeks sounds reasonable.',
    ja: '時間をかけてください。ただ、2週間が妥当に思えます。',
  },
};

export const useMessageStore = create<MessageStore>((set, get) => ({
  messages: initialMessages,
  replyMessage: null,
  translations: preloadedTranslations,

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
      return {
        messages: [...state.messages, newMessage],
        replyMessage: null,
      };
    });
  },

  setReplyMessage: (reply) => set({ replyMessage: reply }),

  clearReplyMessage: () => set({ replyMessage: null }),

  getTranslatedMessage: (messageId) => {
    const { translations, messages } = get();
    const currentLang = i18n.language;

    if (translations[messageId]) {
      return (
        translations[messageId][currentLang as 'en' | 'ja'] ||
        messages.find((m) => m.id === messageId)?.message ||
        ''
      );
    }
    return currentLang === 'ja'
      ? '翻訳はまだ利用できません'
      : 'Translation not available yet';
  },
}));
