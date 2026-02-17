import React from "react";
import { CircleX } from "lucide-react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function ErrorRegister({ onClose }) {
  return (
    <InfoTooltip
      onClose={onClose}
      message="Uy, algo salió mal. Por favor, inténtalo de nuevo."
    >
      <CircleX className="infotooltip__error-icon" alt="Error" />
    </InfoTooltip>
  );
}

export default ErrorRegister;
