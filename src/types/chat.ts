export type ReplyMessageType = {
  id: number;
  sender: string;
  message: string;
};
export type Attachment = {
  name: string;
  url: string;
  type: 'pdf' | 'image' | 'doc' | 'other';
};

export type MessageType = {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
  replyTo?: ReplyMessageType | null;
  attachments?: Attachment[];
};
