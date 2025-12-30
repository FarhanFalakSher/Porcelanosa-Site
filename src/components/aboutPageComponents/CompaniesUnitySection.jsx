import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import UnityCard from "./UnityCard";

function CompaniesUnitySection() {
  const allCards = [
    {
      bgImgURL: "https://picsum.photos/600/400?random=1",
      year: "1973",
      discription:
        "PORCELANOSA is the leading company in the ceramic wall and floor tile sector. Employing almost 1000 workers, it enjoys an excellent worldwide reputation thanks to its ongoing efforts and developments in research and quality. It specialises in the production of porous single-fired wall and floor tiles, stoneware tiles and porcelain tiles in a wide range of formats and finishes. Its products are characterised by their high tech features, innovative design and unbeatable quality.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=2",
      year: "1986",
      discription:
        "VENIS was born in 1986 to revolutionize the ceramic sector with innovative and contemporary collections aimed at the most demanding spaces. After more than three decades as a benchmark in the manufacture of flooring and wall coverings, in 2021 the company merged with Porcelanosa to optimize resources.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=3",
      year: "1987",
      discription:
        "GAMADECOR was set up in 1987 with the aim of producing kitchen and bathroom furniture offering maximum quality, technology and the very latest designs. Its facilities are equipped with state-of-the-art technology for the production of kitchen and bathroom furniture, wardrobes and dressing rooms guaranteeing maximum quality and contemporary designs.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=4",
      year: "1993",
      discription:
        "The progress and improvements that KRION® has incorporated since 2010 have consolidated the image of the brand. The transformation carried out by its R + D + I team has allowed Krion to be a product of the future and a company of a sustainable nature. Its two product lines: Krion Porcelanosa Baths and Krion Unlimited Surfaces have boosted the internationalization of the firm. The first of these is linked to the bathroom equipment and the second to the manufacture of large surfaces for professionals and for projects related to residential constructions and contract.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=5",
      year: "1999",
      discription:
        "L'ANTIC COLONIAL has consistently sought to satisfy the demand for top quality natural products. Stone and marble in tumbled, satin and polished finishes, traditional ceramics, glass mosaics, wood, wash basins, vanity tops and mosaics all are part of the product range of one of the sector’s most forward-thinking companies. Quality which is increasingly reflected in the technical and aesthetic features of this company’s products, both in private and public spaces.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=6",
      year: "2001",
      discription:
        "BUTECH, founded for the development of quality materials for installing PORCELANOSA Group’s ceramic wall and floor tiles, has evolved in recent years into an architectural consulting company specialising in facades. Currently, it offers from a wide range of construction solutions such as adhesives, grouting materials, profiles, shower trays, or waterproofing systems, to technical floors and facade systems; always with the same PORCELANOSA Group quality criteria.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=7",
      year: "2001",
      discription:
        "NOKEN entered the market with its innovative designs in bathroom furnishings, always committed to the care of each detail. A firm commitment to design, quality and superb standards of customer service have positioned Noken amongst the sector’s leading companies. Today its products are exported to more than 118 countries.",
    },
    {
      bgImgURL: "https://picsum.photos/600/400?random=8",
      year: "2004",
      discription:
        "XTONE offers solutions to projects with more advanced technical requirements, with its full-body technical ceramics. The company has also developed two brands of technical porcelain for large-scale architectural projects. The large format, fine pieces can withstand even the most adverse weather conditions, especially the large sheets such as XTone (154 cm x 328 cm, 154 cm x 344 cm and 120 cm x 120 cm) and XLight (100 cm x 300 cm, 120 cm x 250 cm), in thicknesses ranging from 3 mm to 20 mm.",
    },
  ];

  // Index based state (0 to 7)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f4f4f4] py-16 md:py-20 w-full overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 flex flex-col lg:grid lg:grid-cols-[65%_35%] items-end mb-10">
        <div>
          <h1 className="text-[#2d3748] text-3xl md:text-4xl font-light mb-4">
            A group formed by multiple companies
          </h1>
          <p className="text-[#939fba] text-base leading-relaxed max-w-2xl">
            Diversifying production has played a key role in the growth of a
            business group that started off manufacturing a single product:
            ceramic tiles. Today, the Group’s seven brands offer a vast
            selection of products ranging from kitchen and bathroom equipment to
            high-tech materials and state-of-the-art building solutions for
            contemporary architecture.
          </p>
        </div>

        {/* Laptop Buttons Only */}
        <div className="hidden lg:flex justify-end mt-6 lg:mt-0">
          <div className="flex items-center border border-gray-300 bg-white overflow-hidden">
            <button
              onClick={() => setActiveIndex(0)}
              disabled={activeIndex === 0}
              className={`p-5 transition ${
                activeIndex === 0
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-px h-10 bg-gray-200"></div>
            <button
              onClick={() => setActiveIndex(4)}
              disabled={activeIndex === 4}
              className={`p-5 transition ${
                activeIndex === 4
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="slider-container relative w-full">
        <UnityCard
          data={allCards}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
}

export default CompaniesUnitySection;
