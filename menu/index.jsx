import SwearDetectorfile from './dino-files/SwearDetector.dino';
import DinoClickerfile from './dino-files/DinoClicker.dino';

const menuItems = [
    {
        name: 'Profanity Detector',
        description: 'a simple project that detects if your message has profanity in it.',
        file: SwearDetectorfile,
    },
    {
        name: 'DinoClicker',
        description: 'a boring game where you C L I C K on the dinosaur.',
        file: DinoClickerfile,
    },
];

export default menuItems;