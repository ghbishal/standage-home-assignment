## 🛠️ Basic Setup

### ✅ **Additional Setup Steps**

1️⃣ **Check Node.js Version**

- Ensure you have **Node.js 20 or later** installed:

```sh
node -v
```

- If not installed, [Download Node.js](https://nodejs.org/)

2️⃣ **Install Expo CLI (if not installed)**

- If Expo CLI is missing, install it globally:

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

Please make sure you have the appropriate environment

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## 🛠️ Installation & Running in Dev Mode

### 1️⃣ **Clone the repository**

```bash
git clone https://github.com/ghbishal/standage-home-assignment.git
```

### 2️⃣ **Install dependencies**

```bash
cd standage-home-assignment
npm install
```

### 3️⃣ **Run the development server**

```sh
npm start
```

### 4️⃣ **Run on Android/iOS**

- **For Android:**

  ```sh
  npm run android
  ```

- **For iOS (Mac Only):**

  ```sh
  npm run ios
  ```
