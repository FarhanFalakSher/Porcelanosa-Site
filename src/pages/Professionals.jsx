import React from "react";
import { useLocation } from "react-router-dom";
import ArchitectsDropdown from "../components/professional/ArchitectsDropdown";
import InteriorDesignProgram from "../components/professional/InteriorDesignProgram";
import PorcelanosaDevelopers from "../components/professional/PorcelanosaDevelopers";
import PorcelanosaDistributors from "../components/professional/PorcelanosaDistributors";
import PorcelanosaContractors from "../components/professional/PorcelanosaContractors";

const Professionals = () => {
  const { pathname } = useLocation();

  const isArchitects = pathname.includes("/architects");
  const isInterior = pathname.includes("/interior-designers");
  const isDevelopers = pathname.includes("/developers");
  const isDistributors = pathname.includes("/distributors");
  const isContractors = pathname.includes("/contractors");


  return (
    <div className="w-full">
      {/* ✅ Main Professionals page → show ALL */}
      {pathname === "/professionals" && (
        <>
          <ArchitectsDropdown />
          <InteriorDesignProgram />
          <PorcelanosaDevelopers />
          <PorcelanosaDistributors />
          <PorcelanosaContractors/>
        </>
      )}

      {/* ✅ Architects */}
      {isArchitects && <ArchitectsDropdown />}

      {/* ✅ Interior Designers */}
      {isInterior && <InteriorDesignProgram />}

      {/* ✅ Developers */}
      {isDevelopers && <PorcelanosaDevelopers />}

      {/* ✅ Distributors */}
      {isDistributors && <PorcelanosaDistributors />}
      {isContractors && <PorcelanosaContractors />}

    </div>
  );
};

export default Professionals;
