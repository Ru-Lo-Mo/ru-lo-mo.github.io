export default function TBSApproach({text_container, h_text, body_text}) {
  return (
    <section className={text_container}>
      <h2 className={h_text}>The How</h2>
      <p className={body_text}>
        To do this, I chose to create 6 characters, of which only 5 exist in the actual game.<br/>
        Each character was to represent some question / trait that intrigued me, and that I couldn't process alone.
      </p>
      <p className={body_text}>
        Along with this, I decided that the most interesting option was to have them reveal their stories, for the player to judge themselves, through one of the most historical and documented vices: alcohol.
      </p>
    </section>
  );
}