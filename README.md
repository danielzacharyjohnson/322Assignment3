# N322 Homework 3:

## Purpose 
- This week, you’ll build a To-Do List App where users can add and remove tasks. This introduces state management (useState) and list rendering (FlatList).

## Learning Outcomes 
- Use useState to store tasks
- Render lists dynamically with FlatList
- Add and remove items via user input
- Practice clean UI structure

## Instructions
1. Create a new Expo project: Named Todo-List
2. Replace the contents of App.js with a layout that includes:

- A TextInput for entering new tasks.
- A button (Pressable or Button) to add tasks.
- A FlatList to display tasks.
- A delete button/icon for each task.

3. Style your app:

- Input field at the top.
- Tasks are displayed in a list below.
- Each task is styled as a card with padding.

4. Your README file must fully describe what the app does, how to install everything I need, and how to run it on my phone.
5. Upload this to Github as a public repo. 
6. Submit your GitHub repo link and at least one screenshot of the app running in Expo Go.(This link must work or you will receive a 0)

## Installs
- Install Nodejs: https://nodejs.org/Links to an external site.
- Expo: https://expo.dev/homeLinks to an external site.
- Expo Icons: https://icons.expo.fyi/IndexLinks to an external site.
- Install: https://expo.dev/goLinks to an external site.

## How to Create and Run a React Native Expo App
- Here are the standard steps to create, run, and manage a new React Native project using Expo. 

## Prerequisites
- Before you begin, make sure you have the following installed:
- Node.js (LTS version): Download from nodejs.orgLinks to an external site..
- Expo Go App: Install the "Expo Go" app on your iOS or Android phone from the App Store or Google Play Store.

1. Create the Project
- Open your terminal or command prompt.
- Navigate to the directory where you want to create your project folder.
- Run the following command to create a new Expo app. Replace test-app with your desired project name.
- npx create-expo-app test-app

2. Run the Application
- Navigate into your newly created project directory:
- cd test-app
- *Note: if you open up VSC and open the terminal, you do not need to navigate to the directory like the code above suggests.
- Start the development server. This will compile your app and display a QR code in the terminal.
- npx expo start
- Open the app on your device or a simulator:
- On Your Phone (Easiest Method):
- Open the Expo Go app on your phone.
- Scan the QR code shown in your terminal.
- On a Desktop Simulator:
- To run on an Android Emulator, press a in the terminal.
- To run on an iOS Simulator, press i in the terminal (requires a Mac with Xcode).

3. Start Developing
- Open the project folder in your favorite code editor (like Visual Studio Code)
- Find the main entry point of your app, which is usually app/index.tsx (for the default template).
- Make changes to the code and save the file. The app will automatically reload on your device/simulator with the new changes (this is called Fast Refresh).
- Important Commands for Managing Your App
- To add a new library: Always use expo install to ensure you get a compatible version.
- npx expo install react-native-maps
- To upgrade your app's SDK version: Never use npm install expo@latest. The only safe way to upgrade is:
- npx expo upgrade
- To start the server and clear the cache (for troubleshooting):
- npx expo start --clear
