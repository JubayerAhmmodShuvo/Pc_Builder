import { createContext, useState, useContext } from "react";

const PCBuilderContext = createContext();

export function usePCBuilderContext() {
  return useContext(PCBuilderContext);
}

export function PCBuilderProvider({ children }) {
  const initialSelectedComponents = {
    "cpu-processor": [],
    motherboard: [],
    ram: [],
    powersupplyunit: [],
    storagedevice: [],
    monitor: [],
    others: [],
  };

  const [selectedComponents, setSelectedComponents] = useState(
    initialSelectedComponents
  );

  const resetSelectedComponents = () => {
    setSelectedComponents(initialSelectedComponents);
  };

  return (
    <PCBuilderContext.Provider
      value={{
        selectedComponents,
        setSelectedComponents,
        resetSelectedComponents,
      }}
    >
      {children}
    </PCBuilderContext.Provider>
  );
}

export default PCBuilderContext;
