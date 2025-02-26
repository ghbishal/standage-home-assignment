## 🛠️ Standage Home Assignment - Chat UI App

Welcome to the **Standage Home Assignment** project! This is a **React Native** app built using **Expo** that replicates a chat UI with essential features like markdown rendering, language translation, message interactions, and a tab-based navigation system.

## 🚀 Features

- **Chat Interface**: Displays chat messages with markdown rendering.
- **Tabs Navigation**: Implements an "External Chat" tab, while the others remain placeholders.
- **Contextual Menu**: Allows users to copy messages, translate them, and reply.
- **Multilingual Support**: Supports English and Japanese translations.
- **Session-based Messaging**: Messages persist only during a session.
- **Platform Compatibility**: Works on both **iOS and Android** devices.
- **State Management**: Utilizes Zustand for managing global state.
- **Tailwind Styling**: Uses NativeWind for UI consistency.

---

## 🛠️ Basic Setup

### ✅ **Prerequisites**

Ensure your system is set up correctly before running the project.

1️⃣ **Check Node.js Version**

- Ensure you have **Node.js 20 or later** installed:

```sh
node -v
```

- If not installed, [Download Node.js](https://nodejs.org/)

2️⃣ **Install Expo CLI** (if not installed)

- Install Expo globally:

```sh
npm install -g expo-cli
```

3️⃣ **Verify Expo Installation**

- Check if Expo CLI is properly installed:

```sh
expo --version
```

4️⃣ **Run Expo Doctor (Optional but Recommended)**

- Helps detect environment issues before running the app:

```sh
npx expo doctor
```

### 📲 **Ensure you have the appropriate development environment**

- [Development Build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go) (a limited sandbox for running Expo apps)

---

## 🏰️ Installation & Running in Dev Mode

### 1️⃣ **Clone the repository**

```sh
git clone https://github.com/ghbishal/standage-home-assignment.git
```

### 2️⃣ **Navigate to the project directory**

```sh
cd standage-home-assignment
```

### 3️⃣ **Install dependencies**

```sh
npm install
```

### 4️⃣ **Run the development server**

```sh
npm start
```

### 5️⃣ **Run on Android/iOS**

- **For Android:**

  ```sh
  npm run android
  ```

- **For iOS (Mac Only):**

  ```sh
  npm run ios
  ```

---

## 🏰️ Technologies Used

This project follows a modern **React Native + Expo** stack with the following key technologies:

- **[Expo](https://expo.dev/)** - React Native development framework
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[Lottie Animation](https://airbnb.io/lottie/#/react-native)** - Smooth animations
- **[React Navigation](https://reactnavigation.org/docs/material-top-tab-navigator/)** - Tab-based navigation
- **[Expo Router](https://expo.github.io/router/)** - File-based routing for Expo projects
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **[i18next](https://react.i18next.com/latest/usetranslation-hook)** - Internationalization and language support

---

## 📂 Project Structure

```plaintext
standage-home-assignment/
👉 .
  ├── app
  │   ├── (chatList)
  │   │   ├── _layout.tsx
  │   │   ├── details.tsx
  │   │   ├── externalChat.tsx
  │   │   └── internalChat.tsx
  │   ├── _layout.tsx
  │   ├── index.tsx
  │   └── modal
  │       └── status.tsx
  ├── assets
  │   ├── images
  │   └── lottiefiles
  │       └── loading.json
  ├── components
  │   ├── chat
  │   │   ├── actionModal.tsx
  │   │   ├── chatInput.tsx
  │   │   ├── index.ts
  │   │   ├── inputArea.tsx
  │   │   ├── messageBubble.tsx
  │   │   └── replyMessage.tsx
  │   ├── editor
  │   │   ├── domComponents
  │   │   │   └── toolbarPlugin.tsx
  │   │   ├── editor.tsx
  │   │   └── markdownRenderer.tsx
  │   ├── icons
  │   │   ├── action
  │   │   │   ├── arrowRight.tsx
  │   │   │   ├── cancle.tsx
  │   │   │   ├── chevronRight.tsx
  │   │   │   ├── index.ts
  │   │   │   ├── plus.tsx
  │   │   │   └── send.tsx
  │   │   ├── contents
  │   │   │   ├── bold.tsx
  │   │   │   ├── index.ts
  │   │   │   ├── italic.tsx
  │   │   │   ├── live.tsx
  │   │   │   ├── personFill.tsx
  │   │   │   └── setting.tsx
  │   │   ├── iconButton.tsx
  │   │   ├── styledIcon.tsx
  │   │   └── types.ts
  │   ├── standageLogo.tsx
  │   ├── status
  │   │   ├── constants.ts
  │   │   ├── statusItem.tsx
  │   │   └── statusSelector.tsx
  │   └── ui
  │       ├── button.tsx
  │       ├── loading.tsx
  │       ├── styledText.tsx
  │       └── toolChip.tsx
  ├── i18n
  │   ├── dictionary
  │   │   ├── en.js
  │   │   └── ja.js
  │   └── i18n.ts
  ├── lib
  │   ├── chatData.ts
  │   └── utils.ts
  ├── store
  │   ├── useMessageStore.ts
  │   └── useUserStore.ts
  ├── stories
  │   └── assets
  └── types
      ├── chat.ts
      └── user.ts

👉 Other directories:
   ├── .expo/        # Expo-specific files, caching, and configurations.
   ├── .github/      # GitHub-related files (CI/CD workflows, issue templates, etc.).
   ├── .husky/       # Git hooks for enforcing code quality before commits and pushes.
   ├── .vscode/      # VSCode-specific settings and configurations for better development experience.
   ├── android/      # Android-specific native files for running the project on Android devices.
   ├── ios/          # iOS-specific native files for running the project on iOS devices.
   ├── node_modules/ # Installed npm dependencies.
   ├── package.json  # Metadata about the project and dependencies.
   ├── tailwind.config.js # Configuration for Tailwind CSS.
   ├── README.md     # Documentation for the project.
```

---

🚀 **Happy Coding!** 🎉
