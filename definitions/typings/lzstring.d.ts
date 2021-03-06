declare module LZString {
    export function compressToUTF16(str: string): string;
    export function decompressFromUTF16(str: string): string;
    export function compressToBase64(str: string): string;
    export function decompressFromBase64(str: string): string;
}
