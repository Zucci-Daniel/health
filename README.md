Link to the apk for android => https://drive.google.com/file/d/1EcZHg9edsyN-PRm_r2MCHqmOGiVUz3DG/view?usp=sharing

## Getting Started

main branch has the updated code.

To start using the application, follow these steps:

1. Download the code or clone the repository:
   
   ```bash
   git clone https://github.com/Zucci-Daniel/health.git
   ```

2. Install the necessary dependencies using either npm or Yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Navigate to the iOS directory, install CocoaPods dependencies, and return to the root directory:

   ```bash
   cd ios && pod install && cd ..
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. To run the app on Android, use one of the following commands:

   ```bash
   npm run android
   # or
   yarn android
   ```

6. To run the app on iOS, use one of the following commands:

   ```bash
   npm run ios
   # or
   yarn ios
   ```

## About the App

This application is designed to optimize and simplify the core assessment process. You can find the basic flowchart of the app in the `src/images` folder.

## App Overview

Experience a well-structured and organized codebase that enhances scalability and robustness. The code includes detailed comments and explanations, along with a basic flowchart of the app's structure. The user interface is designed to be user-friendly and efficient, making the app straightforward to use.

## Key Features

- **Focused Functionality:** The app prioritizes core assessment features, ensuring a seamless user experience.

- **Scalability:** While the current version focuses on essentials, the app's architecture allows for easy integration of additional functionalities using Redux.

- **Testing Confidence:** Dedicated tests for general helpers can be found in the `general.test.ts` file, enhancing the app's reliability.

- **Intuitive UI:** The app's interface is designed to simplify problem-solving for users, promoting an effortless experience.

## Technical Approach

The app follows the Component-Based Architecture pattern and employs the Atomic Structure, chosen for their flexibility and effective separation of concerns.

Enjoy the efficiency and simplicity of the app's assessment approach!
