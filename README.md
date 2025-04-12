# 📊 KPI Dashboard
Este projeto é um exemplo simples de dashboard em React que exibe KPIs (Indicadores-Chave de Desempenho) com informações como rótulo, valor atual, ícone e variação percentual.

## 🚀 Tecnologias
- React

- TypeScript

- Tailwind CSS (utilizado nas classes CSS utilitárias)

## 📦 Estrutura do Projeto
```
src/
├── components/
│   └── KPI.tsx
├── App.tsx
└── index.tsx

```

## ⚙️ Instalação

1- Clone o repositório:
```
git clone https://github.com/seu-usuario/kpi-dashboard.git

```

2- Instale as dependências:
```
npm install

```

3- Inicie o projeto:
```
npm start

```

## 🧩 Componente <KPI />

Componente reutilizável que exibe um cartão de indicador de desempenho com:
- label: nome do indicador

- value: valor principal a ser exibido

- icon (opcional): emoji ou ícone para representar visualmente o indicador

- trend (opcional): variação percentual (positiva ou negativa)

Exemplo de Uso:
```
<KPI label="Conversões" value={128} icon="📈" trend={12.5} />
<KPI label="Leads" value={89} icon="📬" trend={-7.2} />
<KPI label="Visitantes" value={1023} icon="👥" />

```

## 🛠 Implementação

### 1. Criar o Componente
Crie o arquivo KPI.tsx em src/components/ com o seguinte conteúdo:
```
import React from 'react';

interface KPIProps {
  label: string;
  value: number;
  icon?: string;
  trend?: number; // Variação percentual
}

const KPI: React.FC<KPIProps> = ({ label, value, icon = '📊', trend }) => {
  const isPositive = trend !== undefined && trend >= 0;

  return (
    <div className="border p-4 rounded shadow-sm w-full bg-white hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-1 text-gray-500 text-sm">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      {trend !== undefined && (
        <div
          className={`mt-1 text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? '🔺' : '🔻'} {trend > 0 ? '+' : ''}
          {trend.toFixed(1)}%
        </div>
      )}
    </div>
  );
};

export default KPI;

```

### 2. Usar o Componente
Modifique o arquivo src/App.tsx:
```
import React from 'react';
import KPI from './components/KPI';

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

```
## ✅ Resultado
A aplicação renderiza cards com informações visuais intuitivas de desempenho, variando o ícone e cor da tendência conforme o valor informado.

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

