---

📋 ToDo List – Expo + TypeScript + Async Storage

Uma aplicação simples e objetiva criada com Expo, React Native e TypeScript, que permite gerenciar tarefas localmente utilizando o Async Storage como solução de persistência.
O projeto foi desenvolvido como parte da Trilha Mobile JR.


---

🚀 Tecnologias utilizadas

Expo

React Native

TypeScript

Async Storage (@react-native-async-storage/async-storage)

React Hooks

Expo Router (se você estiver usando)



---

📱 Funcionalidades

✔️ Adicionar novas tarefas
✔️ Excluir tarefas
✔️ Listar todas as tarefas salvas
✔️ Persistência local com Async Storage
✔️ Interface simples, intuitiva e responsiva
✔️ Código organizado e totalmente tipado em TypeScript


---

🏗️ Estrutura do Projeto

src/
 ├── components/
 │    ├── Header/
 │    ├── TaskItem/
 │    └── ...
 ├── screens/
 │    └── Home/
 ├── storage/
 │    └── tasksStorage.ts
 ├── types/
 ├── utils/
 └── App.tsx


---

📦 Instalação

Clone o repositório:

git clone https://github.com/EvanioTech/TrilhaMobileJR-JUN15

Acesse a pasta do projeto:

cd TrilhaMobileJR-JUN15

Instale as dependências:

npm install
# ou
yarn install


---

▶️ Rodando o projeto

Inicie o servidor Expo:

npx expo start

Abra no seu dispositivo com o Expo Go ou utilize um emulador Android/iOS.


---

💾 Armazenamento – Async Storage

O app utiliza o AsyncStorage para persistir localmente as tarefas.
Isso significa que mesmo fechando o app, as tarefas continuarão salvas.

Exemplo simplificado:

await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));


---

🛠️ Scripts úteis

npm run start   # inicia o Expo
npm run android # abre no emulador Android
npm run ios     # abre no emulador iOS
npm run lint    # executa o linter


---

📸 Screenshots

Adicione imagens aqui quando quiser!


---

📄 Licença

Este projeto é livre para estudo e evolução.
Sinta-se à vontade para contribuir ou criar sua própria versão! 🚀


---

