import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function FlagSelect() {
  const [selected, setSelected] = useState("");

  return (
    <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
  />
  )
};

