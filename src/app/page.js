import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import TechStackSection from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Roadmap from "@/components/RoadMap";
import HomeAccordion from "@/components/HomeAccordion";
// import ContactFormClient from "@/components/ContactForm2";

export default function Home() {
    return (

        <div className={"w-full grid  grid-cols-4 grid-4   mx-auto"}>

            <div className="col-span-4">
                <Hero/>
            </div>

            <div className="col-span-4 ">
                <HeroSlider/>
                {/*<h1 className={"text-xl m-2"}>Top Post</h1>*/}

            </div>

            <div className={"col-span-4 "}>
                <TechStackSection/>
                <ContactForm/>

            </div>

            <div className={"col-span-4 "}>

                <Roadmap/>

            </div>

            <div className={"col-span-4 "}>

                <HomeAccordion/>

            </div>




            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi culpa eligendi est, facere id illum impedit incidunt ipsam iusto labore minus mollitia nemo nisi nulla officia perferendis possimus quibusdam quis quisquam reiciendis rem reprehenderit temporibus totam veniam. Atque debitis et minus perferendis placeat quam sint sit unde ut vel? Delectus hic, illum libero numquam obcaecati pariatur rem unde. Accusamus autem consequatur debitis deleniti deserunt doloremque earum, eius eligendi inventore iste molestiae necessitatibus nihil odio odit pariatur quas sapiente sunt tempora temporibus velit. A accusamus amet animi dolorem, doloremque dolorum explicabo harum hic iste iusto laboriosam modi nobis nostrum, porro provident, ratione repudiandae sed voluptates! Assumenda fugit iusto maiores perspiciatis saepe vitae. Beatae, deleniti, expedita! Ab aperiam aut, consequuntur, culpa delectus expedita minus molestias nam nesciunt nisi, nostrum quis rerum sequi vel vero. Deleniti, eos fuga itaque natus velit veritatis! Accusamus at consequatur consequuntur, cum cumque delectus deserunt dicta ea eum fugiat ipsum magnam mollitia natus necessitatibus nesciunt nobis nostrum numquam obcaecati odit perferendis quaerat quos recusandae reiciendis repellat reprehenderit rerum sed sunt tempore, temporibus veritatis. Commodi doloribus est hic nostrum quas suscipit. Animi fugit molestias nostrum sapiente sit! Ab alias aut ea nisi quasi quis sapiente sit tenetur voluptatem.</p>*/}


        </div>

    );
}


// <Image
//     className="dark:invert"
//     src="/next.svg"
//     alt="Next.js logo"
//     width={100}
//     height={20}
//     priority
// />