import "./App.css";
import React from "react";
import KPI from "./components/KPI";

const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <KPI label="Conversões" value={128} icon="📈" trend={12.5} />
      <KPI label="Leads" value={89} icon="📬" trend={-7.2} />
      <KPI label="Visitantes" value={1023} icon="👥" />
    </div>
  );
};

export default App;
