import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const TamaContext = createContext();

export function TamaProvider({ children }) {
  const [tama, setTama] = useState([
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
  const tamilotchi = useMemo(() => ({ tama, setTama }), [tama, setTama]);

  return <TamaContext.Provider value={tamilotchi}>{children}</TamaContext.Provider>;
}

TamaProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
