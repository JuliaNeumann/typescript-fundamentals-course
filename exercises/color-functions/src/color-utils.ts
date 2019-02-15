//TODO: Implement hexToRgb
export function hexToRgb(hex: string): {r: number, g: number, b: number} | null {
    const chunkLength: number = hex.length / 3;
    return {
        r: getRgb(0, hex, chunkLength),
        g: getRgb(chunkLength, hex, chunkLength),
        b: getRgb(chunkLength * 2, hex, chunkLength)
    }
}

function getRgb(start: number, hex: string, chunkLength: number): number {
    let subStr: string = hex.substr(start, chunkLength);
    if (chunkLength === 1) {
        subStr += subStr;
    }
    return parseInt(subStr, 16)
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
    return getHexPart(r) + getHexPart(g) + getHexPart(b);
}

function getHexPart(num: number): string {
    if (num > 255) {
        num = 255;
    }
    if (num < 0) {
        num = 0;
    }
    return num.toString(16).padStart(2, '0');
}
