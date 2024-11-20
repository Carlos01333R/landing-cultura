export default function ChuLiEmbed() {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-14">
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Chu-Li"
          frameBorder="0"
          allowFullScreen
          width={500}
          height={500}
          mozAllowFullScreen="true"
          webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/9e531d16769f464d84227d1ef7b8c291/embed"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/chu-li-9e531d16769f464d84227d1ef7b8c291?utm_medium=embed&utm_campaign=share-popup&utm_content=9e531d16769f464d84227d1ef7b8c291"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Chu-Li
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/GinKern?utm_medium=embed&utm_campaign=share-popup&utm_content=9e531d16769f464d84227d1ef7b8c291"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Gin Kern Creative Cloud
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9e531d16769f464d84227d1ef7b8c291"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </section>
  );
}
