import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const TamasContext = createContext();

export function TamasProvider({ children }) {
  const [tamas, setTamas] = useState([
    {
      tamilotchi_id: null,
      user_id: null,
      name: null,
      satiety: null,
      happiness: null,
      health: null,
      age: null,
      background: null,
      sprite: null,
    },
  ]);
  const tamilotchi = useMemo(() => ({ tamas, setTamas }), [tamas, setTamas]);

  return (
    <TamasContext.Provider value={tamilotchi}>{children}</TamasContext.Provider>
  );
}

TamasProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
