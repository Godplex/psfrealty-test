import Banner from "../components/Banner";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Banner />
      <div className="container">
        <div className="col-12 py-4 d-flex flex-column align-items-center d-md-block d-none text-center">
          <span className="display-6 text-uppercase">Lo acompañamos durante todo el proceso</span>
          <div className="col-12 d-flex justify-content-evenly pt-5">
            <Image
              src={img1}
              alt="img1"
              width={155}
              height={162}
            />
            <Image
              src={img2}
              alt="img2"
              width={155}
              height={162}
            />
            <Image
              src={img3}
              alt="img3"
              width={155}
              height={162}
            />
            <Image
              src={img4}
              alt="img4"
              width={155}
              height={162}
            />
            <Image
              src={img5}
              alt="img5"
              width={155}
              height={162}
            />
          </div>
        </div>
      </div>
    </>
  )
}