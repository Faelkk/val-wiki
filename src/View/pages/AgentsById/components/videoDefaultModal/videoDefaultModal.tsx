import { useState } from "react";

interface VideoDefaultModalProps {
  className: string;
  src: string;
}

const VideoDefaultModal = ({ src, className }: VideoDefaultModalProps) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({
    target,
  }: React.SyntheticEvent<HTMLVideoElement, Event>) {
    setSkeleton(false);
    if (target instanceof HTMLVideoElement) {
      target.style.opacity = "1";
    }
  }

  return (
    <div className="grid">
      {skeleton && (
        <div
          className="skeleton h-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,20,26,1) 0%, rgba(21,35,52,1) 100%)",
            backgroundSize: "200%",
            gridArea: "1/1",
          }}
        ></div>
      )}
      <video
        src={src}
        onLoad={handleLoad}
        className={className}
        style={{ gridArea: "1/1" }}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList="nodownload"
      />
    </div>
  );
};

export default VideoDefaultModal;
