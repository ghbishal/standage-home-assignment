import { type MessageType } from '@/types/chat';

export const messages: MessageType[] = [
  {
    id: 1,
    sender: 'Germineau Nicolas',
    message:
      "Let's create some simple views to replicate this code.\n\nYou may use either **React Native** or a **PWA** in an appropriate native wrapper.\n\n## Requirements:\n- Follow the instructions in the gist\n- Use your best judgment to fill in the blanks\n\nGood luck!\n\nNote: we use **tailwindcss**. Attaching files (or taking photos and attaching them) should be supported.",
    timestamp: '2025-02-16T22:58:00+09:00',
  },
  {
    id: 2,
    sender: 'Bishal',
    message:
      'Thank you for the coding test. How long should I take to submit this code?',
    timestamp: '2025-02-16T22:59:00+09:00',
  },
  {
    id: 3,
    sender: 'Germineau Nicolas',
    message: 'Take your time, but 2 weeks sounds reasonable.',
    timestamp: '2025-02-16T23:00:00+09:00',
    replyTo: {
      id: 2,
      sender: 'Bishal',
      message: 'How long should I take to submit this code?',
    },
  },
  {
    id: 4,
    sender: 'Bishal',
    message: 'Sounds good! Thanks.',
    timestamp: '2025-02-16T23:02:00+09:00',
    replyTo: {
      id: 3,
      sender: 'Germineau Nicolas',
      message: 'Take your time, but 2 weeks sounds reasonable.',
    },
  },
  {
    id: 5,
    sender: 'Bishal',
    message: 'By the way, do we need to support dark mode?',
    timestamp: '2025-02-16T23:05:00+09:00',
  },
  {
    id: 6,
    sender: 'Germineau Nicolas',
    message: "It's up to you. If we have time, we can add it.",
    timestamp: '2025-02-16T23:06:00+09:00',
    replyTo: {
      id: 5,
      sender: 'Bishal',
      message: 'Do we need to support dark mode?',
    },
  },
  {
    id: 7,
    sender: 'Bishal',
    message: "Got it! I'll focus on the core features first.",
    timestamp: '2025-02-16T23:07:00+09:00',
    replyTo: {
      id: 6,
      sender: 'Germineau Nicolas',
      message: "It's up to you. If we have time, we can add it.",
    },
  },
  {
    id: 8,
    sender: 'Germineau Nicolas',
    message: 'Sounds like a plan! Let me know if you need any clarifications.',
    timestamp: '2025-02-16T23:08:00+09:00',
  },
  {
    id: 9,
    sender: 'Bishal',
    message: 'Will do! Thanks again.',
    timestamp: '2025-02-16T23:10:00+09:00',
  },
];
