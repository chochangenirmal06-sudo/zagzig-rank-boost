import { useEffect } from "react";

const MEDIA_ID = "whn8oj40sp";

function loadScript(src: string, module = false) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  if (module) s.type = "module";
  document.head.appendChild(s);
}

export function VslPlayer() {
  useEffect(() => {
    loadScript("https://fast.wistia.com/player.js");
    loadScript(`https://fast.wistia.com/embed/${MEDIA_ID}.js`, true);
  }, []);

  return (
    <div className="vsl-frame mx-auto w-full">
      <style>{`
        wistia-player[media-id='${MEDIA_ID}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }
        .vsl-frame { border-radius: 8px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); background: transparent; }
        .vsl-frame wistia-player { display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; }
      `}</style>
      {/* @ts-expect-error custom element */}
      <wistia-player media-id={MEDIA_ID} aspect="1.7777777777777777"></wistia-player>
    </div>
  );
}
