export default function TBSOutcome({text_container, h_text, body_text}) {
  return (
    <section className={text_container}>
      <h2 className={h_text}>The Result</h2>
      <p className={body_text}>
        Currently, the game is still in development, <br/>
        but as it stands, it is a drink making game, with a murder mystery in the background.
      </p>
      <p className={body_text}>
        The player must make the cocktails the clients request, and in the process, listen to them reveal their part of the story, find out what happened, and who is the mysterious 6th character.
      </p>
    </section>
  );
}