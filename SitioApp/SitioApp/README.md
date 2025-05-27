# SitioApp

SitioApp is a React Native application that showcases a selection of emojis. The application allows users to select an emoji from a horizontal list and close the modal after selection.

## Project Structure

```
SitioApp
├── app
│   ├── components
│   │   └── EmojiList.tsx
│   ├── assets
│   │   └── images
│   │       ├── emoji1.png
│   │       ├── emoji2.png
│   │       ├── emoji3.png
│   │       ├── emoji4.png
│   │       ├── emoji5.png
│   │       └── emoji6.png
├── package.json
├── tsconfig.json
├── App.tsx
└── README.md
```

## Installation

To get started with SitioApp, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd SitioApp
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

This will start the Metro bundler. You can then run the app on an emulator or a physical device.

## Components

### EmojiList

The `EmojiList` component displays a horizontal list of emojis. It accepts the following props:

- `onSelect`: A function that is called when an emoji is selected.
- `onCloseModal`: A function that is called to close the modal.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.