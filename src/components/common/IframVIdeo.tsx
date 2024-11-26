import { useState } from "react";

export default function IframVideo({
  videoKey,
  width,
  height,
}: {
  videoKey: string;
  width?: string;
  height?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-16 h-16 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        className={`rounded-lg ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        width={width || "915"}
        height={height || "515"}
        src={`https://www.youtube.com/embed/${videoKey}?mute=1`}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        onLoad={() => setIsLoading(false)}
        allowFullScreen
      ></iframe>
    </div>
  );
}
