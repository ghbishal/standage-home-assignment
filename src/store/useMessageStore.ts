import { create } from 'zustand';
import i18n from '@/i18n/i18n';
import { messages as initialMessages } from '@/lib/chatData';
import { useUserStore } from '@/store/useUserStore';
import {
  type Attachment,
  type MessageType,
  type ReplyMessageType,
} from '@/types/chat';

interface MessageStore {
  messages: MessageType[];
  replyMessage: ReplyMessageType | null;
  translations: Record<number, { en: string; ja: string }>;
  addMessage: (message: string, attachments?: Attachment[]) => void;
  setReplyMessage: (reply: ReplyMessageType | null) => void;
  clearReplyMessage: () => void;
  getTranslatedMessage: (messageId: number, originalMessage: string) => string;
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

// NOTE : This is not a good way of doing, if the message are mixed or any others can cause a problem
function detectLanguage(text: string): 'en' | 'ja' | 'unknown' {
  const japaneseRegex = /[\u3040-\u30FF\u4E00-\u9FFF]/;
  return japaneseRegex.test(text)
    ? 'ja'
    : /[a-zA-Z]/.test(text)
      ? 'en'
      : 'unknown';
}

export const useMessageStore = create<MessageStore>((set, get) => ({
  messages: initialMessages,
  replyMessage: null,
  translations: preloadedTranslations,

  addMessage: (message, attachments = []) => {
    const { defaultUser } = useUserStore.getState();
    set((state) => {
      const newMessage: MessageType = {
        id: state.messages.length + 1,
        sender: defaultUser.name,
        message,
        attachments: attachments,
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

  getTranslatedMessage: (messageId, originalMessage) => {
    const { translations } = get();
    const detectedLanguage = detectLanguage(originalMessage);
    const isJapaneseUI = i18n.language === 'ja';

    if (translations[messageId]) {
      if (detectedLanguage === 'en') {
        return translations[messageId].ja;
      } else if (detectedLanguage === 'ja') {
        return translations[messageId].en;
      }
    }

    return isJapaneseUI
      ? '翻訳はまだ利用できません'
      : 'Translation not available yet';
  },
}));
