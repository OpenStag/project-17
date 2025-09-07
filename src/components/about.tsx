import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Left Side - Video */}
      <div className={styles.videoWrapper}>
       
         
      <iframe
        className={styles.video}
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/Nu8kIIL-CDA?autoplay=1&mute=1&controls=0&loop=1&playlist=Nu8kIIL-CDA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>


      </div>
      
      


      {/* Right Side - Text */}
      <div className={styles.textWrapper}>
        <h2 className={styles.mainTitle}>
          Best Coffee House In Your Hometown
        </h2>
        <p className={styles.paragraph}>
          Our heritage lies not just in tea, but in a time when rolling hills
          of Ceylon bloomed with coffee. In the 1800s, Sri Lanka—then Ceylon—
          rivaled Brazil in global coffee exports, until a blight devastated
          the plantations.
        </p>
        <p className={styles.paragraph}>
          Nearly lost, Ceylon Coffee is now reborn—in the highland farms of
          Kandy, Nuwara Eliya, and Badulla—cultivated by smallholder farmers
          embracing specialty arabica, restoring a legacy one bean at a time.
        </p>
      </div>
    </div>
  );
}
