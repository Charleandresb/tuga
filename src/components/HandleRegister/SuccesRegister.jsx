import React from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { CircleCheck } from "lucide-react";

function SuccesRegister({ onClose }) {
  return (
    <InfoTooltip onClose={onClose} message="Correcto! ya estás registrado">
      <CircleCheck className="infotooltip__succes-icon" alt="Éxito" />
    </InfoTooltip>
  );
}

export default SuccesRegister;
