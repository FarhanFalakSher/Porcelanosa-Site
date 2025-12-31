import React from "react";
import { useLocation } from "react-router-dom";
import PorcelainTiles from "../components/products/PorcelainTiles";
import CeramicTiles from "../components/products/CeramicTiles";
import WallTiles from "../components/products/WallTiles";
import LargeFormat from "../components/products/LargeFormat";
import Sanitaryware from "../components/products/Sanitaryware";
import Showers from "../components/products/Showers";
import Washbasins from "../components/products/Washbasins";
import Furniture from "../components/products/Furniture";
import KitchenSystems from "../components/products/KitchenSystems";
import Facades from "../components/products/Facades";
import OutdoorSolutions from "../components/products/OutdoorSolutions";
import TechnicalMaterials from "../components/products/TechnicalMaterials";
// import ArchitectsDropdown from "../components/professional/ArchitectsDropdown";
// import InteriorDesignProgram from "../components/professional/InteriorDesignProgram";
// import PorcelanosaDevelopers from "../components/professional/PorcelanosaDevelopers";
// import PorcelanosaDistributors from "../components/professional/PorcelanosaDistributors";
// import PorcelanosaContractors from "../components/professional/PorcelanosaContractors";

const Products = () => {
  const { pathname } = useLocation();

  const isPorcelainTiles = pathname.includes("/porcelain-tiles");
  const isCeramicTiles = pathname.includes("/ceramic-tiles");
  const isWallTiles = pathname.includes("wall-tiles");
  const isLargeFormat = pathname.includes("/large-format");
  const isSanitaryware = pathname.includes("/sanitaryware");
  const isShowers = pathname.includes("/showers");
  const isWashbasins = pathname.includes("/washbasins");
  const isFurniture = pathname.includes("/furniture");
  const isKitchenSystems = pathname.includes("/kitchen-systems");
  const isFacades = pathname.includes("/facades");
  const isOutdoorSolutions = pathname.includes("/outdoor-solutions");
  const isTechnicalMaterials = pathname.includes("/technical-materials");







  return (
    <div className="w-full">
      {/* ✅ Main Professionals page → show ALL */}
      {pathname === "/products" && (
        <>
          <PorcelainTiles />
          <CeramicTiles/>
          <WallTiles/>
          <LargeFormat/>
          <Sanitaryware/>
          <Showers/>
          <Washbasins/>
          <Furniture/>
          <KitchenSystems/>
          <Facades/>
          <OutdoorSolutions/>
          <TechnicalMaterials/>
          
         
        </>
      )}

      {/* ✅ Architects */}
      {isPorcelainTiles && <PorcelainTiles />}

      ✅ Interior Designers
      {isCeramicTiles && <CeramicTiles />}

      {/* ✅ Developers */}
      {isWallTiles && <WallTiles />}

      {/* ✅ Distributors */}
      {isLargeFormat && <LargeFormat />}
      {isSanitaryware && <Sanitaryware />}
      {isShowers && <Showers />}
      {isWashbasins && <Washbasins />}
      {isFurniture && <Furniture />}
      {isKitchenSystems && <KitchenSystems />}
      {isFacades && <Facades />}
      {isOutdoorSolutions && <OutdoorSolutions />}
      {isTechnicalMaterials && <TechnicalMaterials />}






    </div>
  );
};

export default Products;
