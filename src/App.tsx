import React, { useEffect, useState } from 'react';
import './App.css';
import { Config, VatsimData } from './types';


interface AppProps {
  config: Config
}

const getVatsimData = (backend: string, resultSetter: (data: VatsimData) => void) =>
  fetch(backend).then(r => r.json()).then(resultSetter);

const App: React.FC<AppProps> = ({ config }) => {

  const [vatsimData, setVatsimData] = useState<VatsimData>()

  useEffect(() => {
    const workflow = () => {
      getVatsimData(config.backend, setVatsimData);
      setTimeout(workflow, 10000);
    }
    workflow()
  }, [config, setVatsimData]);


  const finControllers = vatsimData?.controllers.filter(c => c.callsign.startsWith("EF"));
  const finPilots = vatsimData?.pilots.filter(p => p.flight_plan?.arrival.startsWith("EF") || p.flight_plan?.departure.startsWith("EF"));

  return (
    <div className="App">
    <h1>Finland</h1>
      <div>
      <h2>Controllers</h2>
      <ul>
      {finControllers?.map(c => <li>{c.callsign}</li>)}
      </ul>
      </div>
      <div>
        <h2>Pilots</h2>
      <ul>
      {finPilots?.map(p => <li>{p.callsign}</li>)}
      </ul>
      </div>
    </div>
  );
}

export default App;
