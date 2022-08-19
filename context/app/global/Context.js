import React from 'react';

const PratciseContext = React.createContext();

const PractiseProvider = ({children}) => {
  const [val, setVal] = React.useState(0);
  const [val1, setVal1] = React.useState(1);
  const [val2, setVal2] = React.useState(2);
  const [mode, setMode] = React.useState(false);
  const toggleSwitch = () => {
    setMode(!mode);
  };
  return (
    <PratciseContext.Provider
      value={{
        val,
        setVal,
        val2,
        setVal2,
        val1,
        setVal1,
        mode,
        setMode,
        toggleSwitch,
      }}>
      {children}
    </PratciseContext.Provider>
  );
};

export {PractiseProvider, PratciseContext};
