
import { createContext, useState, useContext } from "react";

const PCBuilderContext = createContext();

export function usePCBuilderContext() {
  return useContext(PCBuilderContext);
}

export function PCBuilderProvider({ children }) {
const [selectedComponents, setSelectedComponents] = useState({
  "cpu-processor": [],
  motherboard: [],
  ram: [],
  "power-supply-unit": [],
  "storage-device": [],
  monitor: [],
  others:[]
});


  return (
    <PCBuilderContext.Provider
      value={{ selectedComponents, setSelectedComponents }}
    >
      {children}
    </PCBuilderContext.Provider>
  );
}

export default PCBuilderContext;
