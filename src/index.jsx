import SwearDetectorfile from './dino-files/SwearDetector.dino';
import DinoClickerfile from './dino-files/DinoClicker.dino';
import ChatGPTfile from './dino-files/ChatGPT.dino';

const menuItems = [
    {
        name: 'Profanity Detector',
        description: 'a simple project that detects if your message has profanity in it.',
        file: SwearDetectorfile,
    },
    {
        name: 'DinoClicker',
        description: 'a boring game where you C L I C K on a dinosaur.',
        file: DinoClickerfile,
    },
    {
        name: 'ChatGPT',
        description: 'A Project where you interact with ChatGPT!',
        file: ChatGPTfile,
    },
];

export default menuItems;