export const useCounter = () => useState<number>('counter', () => 10);
export const useColor = () => useState<string>('color', () => 'pink');
