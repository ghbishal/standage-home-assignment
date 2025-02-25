export type MessageType = {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
};

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
      'Thankyou for the coding test. How long should I take to submit this code?',
    timestamp: '2025-02-16T22:58:00+09:00',
  },
  {
    id: 3,
    sender: 'Germineau Nicolas',
    message: 'Take your time but 2 weeks sounds reasonable ',
    timestamp: '2025-02-16T23:00:00+09:00',
  },
  {
    id: 4,
    sender: 'Bishal',
    message: 'Sounds good! Thanks.',
    timestamp: '2025-02-16T23:02:00+09:00',
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
  },
];
