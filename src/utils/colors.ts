import colors from "tailwindcss/colors";

const hex2rgb = (color: string) => {
  const hex = color.replace("#", "");

  if (hex.length === 6) {
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }
  if (hex.length === 3) {
    return [
      parseInt(hex[0] + hex[0], 16),
      parseInt(hex[1] + hex[1], 16),
      parseInt(hex[2] + hex[2], 16),
    ];
  }

  throw new Error("Invalid hex color");

  // const r = color.slice(1, 3);
  // const g = color.slice(3, 5);
  // const b = color.slice(5, 7);
  // return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
};

function traversal() {
  // traverse the colors of tailwindcss

  const stack: ColorType[] = [];
  for (const key in colors) {
    switch (key) {
      case "black":
        stack.push({ name: "black", value: colors[key], rgb: [0, 0, 0] });
        break;
      case "white":
        stack.push({ name: "white", value: colors[key], rgb: [255, 255, 255] });
        break;
      case "inherit":
      case "current":
      case "transparent":
        break;
      case "lightBlue": // sky
      case "warmGray": // stone
      case "trueGray": // neutral
      case "coolGray": // gray
      case "blueGray": // slate
        break;
      default:
        // @ts-ignore
        const color = colors[key];
        for (const index in color) {
          stack.push({
            name: `${key}-${index}`,
            value: color[index],
            rgb: hex2rgb(color[index]),
          });
        }
        break;
    }
  }
  return stack;
}

type ColorType = {
  name: string; // tailwindcss color name, e.g. "red-500"
  value: string; // hex color
  rgb: number[];
};

export class Color {
  __colors: ColorType[];

  constructor() {
    this.__colors = traversal();
  }

  public nearest(color: string) {
    const nearestColor = { color: this.__colors[0], distance: Infinity };

    try {
      const current = { rgb: hex2rgb(color) };

      for (const c of this.__colors) {
        const distance =
          Math.abs(current.rgb[0] - c.rgb[0]) +
          Math.abs(current.rgb[1] - c.rgb[1]) +
          Math.abs(current.rgb[2] - c.rgb[2]);

        if (distance < nearestColor.distance) {
          nearestColor.color = c;
          nearestColor.distance = distance;
        }

        if (distance === 0) break;
      }
      // return nearestColor;
    } finally {
      return nearestColor;
    }
  }
}
