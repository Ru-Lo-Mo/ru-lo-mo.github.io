export default function TBSProblem({text_container, h_text, body_text}) {
  return (
    <section className={text_container}>
      <h2 className={h_text}>The Why</h2>
      <p className={body_text}>
        I first started working on this game because I wanted challenge myself to create a full game from start to finish, alone, to learn everything in the production pipeline that I could.
      </p>
      <p className={body_text}>
        Eventually, I became ambitious, and the scope expanded so the experience could answer a very complicated question: 
      </p>
      <p className={body_text}>
        "How do we judge eachother, and where, for each of us, lies the line that defines what gray is black or white?"
      </p>
    </section>
  );
}