import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { cn } from '@/lib/utils';

type ActionModalProps = {
  options: { label: string; onSelect: () => void }[];
  className?: string;
};

export function ActionModal({ options, className }: ActionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<View>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const calculatePosition = (px: number, py: number, height: number) => {
    const menuWidth = 160;
    const menuHeight = options.length * 50 + 16;

    const x = px + menuWidth > screenWidth ? screenWidth - menuWidth - 10 : px;
    const y =
      py + height + menuHeight > screenHeight
        ? py - menuHeight + 50
        : py + height + 3;

    return { x, y };
  };

  const toggleMenu = () => {
    if (!isOpen) {
      buttonRef.current?.measure((_, __, ___, height, px, py) => {
        setMenuPosition(calculatePosition(px, py, height));
      });
    }
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <View className={cn(className)}>
      <View className="relative">
        <TouchableOpacity ref={buttonRef} onPress={toggleMenu}>
          <Text className="text-lg">...</Text>
        </TouchableOpacity>

        <Modal
          visible={isOpen}
          transparent
          animationType="fade"
          onRequestClose={closeMenu}
        >
          <TouchableWithoutFeedback onPress={closeMenu}>
            <View className="flex-1 bg-transparent">
              <View
                className={cn(
                  'absolute w-40 rounded-lg bg-white p-3 shadow-lg'
                )}
                style={{
                  top: menuPosition.y,
                  left: menuPosition.x,
                }}
              >
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      option.onSelect();
                      closeMenu();
                    }}
                    className="border-b border-gray-300 py-2 last:border-0"
                  >
                    <Text className="text-black">{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
}
