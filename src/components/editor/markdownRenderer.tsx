import React, { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Linking } from 'react-native';
import Markdown, { MarkdownIt } from 'react-native-markdown-display';

interface Attachment {
  name: string;
  url: string;
  type: 'pdf' | 'image' | 'doc' | 'other';
}

interface MarkdownRendererProps {
  children: ReactNode;
  attachments?: Attachment[];
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  children,
  attachments = [],
}) => {
  const { t } = useTranslation();
  const onLinkPress = (url: string): boolean => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url).catch((err) =>
            console.error('Failed to open URL:', err)
          );
        }
      })
      .catch((err) => console.error('Error checking URL support:', err));

    return false;
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'https://cdn-icons-png.flaticon.com/128/80/80942.png';
      case 'image':
        return 'https://cdn-icons-png.flaticon.com/128/1829/1829552.png';
      case 'doc':
        return 'https://cdn-icons-png.flaticon.com/128/2991/2991112.png';
      default:
        return 'https://cdn-icons-png.flaticon.com/128/3767/3767084.png';
    }
  };

  return (
    <View>
      <Markdown
        style={{
          heading1: {
            fontWeight: 'bold',
            marginBottom: 8,
            color: 'rgb(17 24 39)',
          },
          heading2: {
            fontWeight: '600',
            marginBottom: 6,
            color: 'rgb(17 24 39)',
          },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          link: { color: 'rgb(59 130 246)', textDecorationLine: 'underline' },
        }}
        onLinkPress={onLinkPress}
        markdownit={MarkdownIt({ typographer: true }).disable(['image'])}
      >
        {children}
      </Markdown>

      {attachments.length > 0 && (
        <View className="mt-4 border-t border-gray-300 pt-2">
          <Text className="mb-2 font-semibold text-gray-500">
            {t('attachments')}
          </Text>
          {attachments.map((file, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Linking.openURL(file.url)}
              className="my-1 flex-row items-center rounded-lg border border-gray-300 p-2"
              activeOpacity={0.7}
            >
              <Image
                source={{ uri: getFileIcon(file.type) }}
                className="mr-3 size-6"
                resizeMode="contain"
              />
              <Text className="font-medium text-gray-800">{file.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
