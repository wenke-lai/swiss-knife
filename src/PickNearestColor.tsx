import { useEffect, useRef, useState } from "react";
import { Color } from "./utils/colors";

const color = new Color();

export const PickNearestColor = () => {
  const [value, setValue] = useState<string>("#ffffff");

  const refInput = useRef<HTMLDivElement>(null);
  const refNearest = useRef<HTMLDivElement>(null);

  const nearest = color.nearest(value);

  const handleColorChange = (e) => {
    let colorValue = e.target.value;
    if (!colorValue.startsWith("#")) {
      colorValue = "#" + colorValue;
    }
    setValue(colorValue.toUpperCase());
  };

  useEffect(() => {
    if (value.startsWith("#")) {
      refInput.current?.style.setProperty("background-color", value);
    }
    refNearest.current?.style.setProperty(
      "background-color",
      nearest.color.value
    );
  }, [nearest]);

  return (
    <div className="grid w-full h-full place-content-center">
      <input
        className="border border-gray-600 rounded-sm"
        type="text"
        value={value}
        onChange={handleColorChange}
        autoFocus
        onFocus={(e) => e.target.select()}
      />
      <div className="grid grid-cols-2">
        <div ref={refInput} className="border border-black size-36">
          <div className="text-black bg-white">
            <p>{value}</p>
            <p
              className={nearest.distance > 30 ? "text-red-500" : "text-black"}
            >
              {nearest.distance}
            </p>
          </div>
        </div>

        <div ref={refNearest} className="border border-black size-36">
          <div className="text-black bg-white">
            <p>{nearest.color.name}</p>
            <p>{nearest.color.value.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
