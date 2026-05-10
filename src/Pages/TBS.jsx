import TBSAbout from "../Components/Cards/TBS/TBSAbout"
import TBSTitle from "../Components/Cards/TBS/TBSTitle"
import TBSProblem from "../Components/Cards/TBS/TBSProblem"
import TBSApproach from "../Components/Cards/TBS/TBSApproach"
import TBSOutcome from "../Components/Cards/TBS/TBSOutcome"
import TBSDevelopment from "../Components/Cards/TBS/TBSDevelopment"
import TBSGallery from "../Components/Cards/TBS/TBSGallery"

function TBS() {


  const port_images = import.meta.glob('/src/Assets/images/webp/*.webp',{
    eager: true,
    query: '?url',
    import: 'default'
  })

  const imageList = Object.entries(port_images)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || 0, 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || 0, 10);
    return numA - numB;
  })
  .map(([, url]) => url);

  const div_image_desc_layout = "max-h-sm md:max-h-[1800px] flex flex-col md:flex-row items-center justify-between gap-2 md:gap-12 pt-10";
  const div_desc_layout = "w-full md:h-4/5 max-h-[60vh] flex items-center justify-center";
  const div_image_layout = "max-h-[150px] md:max-h-[60vh] md:h-4/5 md:w-full object-contain" ;

  const text_container = "py-6 md:p-6 flex flex-col justify-center";
  const h_text = "text-[var(--light-color)] font-semibold text-lg md:text-5xl";
  const body_text = "mt-2 text-[var(--light-color)] font-semibold text-xs md:text-2xl";

  return (
    <div className={"bg-[var(--dark-ak-color)] flex justify-center p-6 scroll-container overflow-y-auto"}>

        <section className="w-full max-w-[1800px] md:flex md:flex-col gap-12">

            <div className="max-h-[1800px] flex items-center justify-between md:gap-12">

              <div className="w-1/5 z-10 tracking-wide md:pl-20">
                <TBSTitle/>
              </div>
              
              <img 
              className="h-4/5 object-cover overflow-hidden" 
              src="bannerTBS_16x9.png" 
              alt="The Bitter Shot"
              />
              
            </div>

            <div className={div_image_desc_layout}>

              <img 
              className={`${div_image_layout} order-1 md:order-1`}
              src="TBS_icon.png" 
              alt="The Bitter Shot"
              />

              <div className={`${div_desc_layout} order-2 md:order-2`}>
                <TBSAbout text_container={text_container} h_text={h_text} body_text={body_text}/>
              </div>

            </div>

            <div className={div_image_desc_layout}>

              <img 
              className={`${div_image_layout} order-1 md:order-2`}
              src="TBS_icon.png" 
              alt="The Bitter Shot"
              />

              <div className={`${div_desc_layout} order-2 md:order-1`}>
                <TBSProblem text_container={text_container} h_text={h_text} body_text={body_text} />
              </div>

            </div>

            <div className={div_image_desc_layout}>

              <img 
              className={`${div_image_layout} order-1 md:order-1`}
              src="TBS_icon.png" 
              alt="The Bitter Shot"
              />

              <div className={`${div_desc_layout} order-2 md:order-2`}>
                <TBSApproach text_container={text_container} h_text={h_text} body_text={body_text} />
              </div>

            </div>

            <div className={div_image_desc_layout}>

              <img 
              className={`${div_image_layout} order-1 md:order-2`}
              src="TBS_icon.png" 
              alt="The Bitter Shot"
              />

              <div className={`${div_desc_layout} order-2 md:order-1`}>
                <TBSOutcome text_container={text_container} h_text={h_text} body_text={body_text} />
              </div>

            </div>

            <div className="h-auto flex flex-col items-center justify-between gap-12">

              <div className={div_desc_layout}>
                <TBSDevelopment h_text={h_text} body_text={body_text} />
              </div>

              <div className="h-auto z-50 mt-4 md:mt-10"> 
                <TBSGallery images={imageList}/>
              </div>

            </div>
            

        </section>
    </div>
  );
}

export default TBS;