import PFTitle from "../Components/Cards/PF/PFTitle"
import PFTitle2 from "../Components/Cards/PF/PFTitle2"
import PFTBS from "../Components/Cards/PF/PFTBS"
import { useState } from "react";

function Portfolio() {
  
  const [isAkarryon, setIsAkarryon] = useState(false);


  const bg = isAkarryon
    ? "bg-[var(--dark-ak-color)]"
    : "bg-[var(--dark-normal-color)]";

  return (
    <div className={`h-screen transition-colors ${bg} p-6`}>

      <div className="h-full overflow-hidden rounded-lg border-2 border-[var(--light-color)] flex flex-col md:flex-row">


        <aside className="h:1/5 md:w-1/5 flex items-center justify-center flex-col border-b-2 md:border-r-2 border-[var(--light-color)]">
            <div className="w-full">
              {isAkarryon === false ? <PFTitle /> :<PFTitle2 />}
            </div>
        </aside>

        <section className="flex-1 flex-col items-center justify-center overflow-y-auto md:p-6 space-y-4">
          <PFTBS setIsAkarryon={setIsAkarryon}/>
        </section>

      </div>

    </div>
  );
}

export default Portfolio;