export default function TBSAbout({text_container, h_text, body_text}) {
  return (
    <section className={text_container}>
      <h2 className={h_text}>
        About
      </h2>
      <p className={body_text}>
        "The Bitter Shot" is a narrative focused game, where the player takes the role of a bartender to listen and serve a hand of particular clients, by hand-making their drinks.
      </p>
    </section>
  );
}