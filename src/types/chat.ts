export type ReplyMessageType = {
  id: number;
  sender: string;
  message: string;
};

export type MessageType = {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
  replyTo?: ReplyMessageType | null;
};
