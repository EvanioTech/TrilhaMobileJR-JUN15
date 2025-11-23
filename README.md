# 📋 ToDo List

## 📖 Descrição
Uma aplicação simples e objetiva para o gerenciamento de tarefas. Desenvolvida para pessoas que desejam se organizar e alcançar seus objetivos com praticidade no dia a dia.

## 🚀 Tecnologias Utilizadas
As principais ferramentas e bibliotecas utilizadas na construção deste projeto:
* **Expo**
* **React Native**
* **TypeScript**
* **Expo Router**
* **Async Storage** (@react-native-async-storage/async-storage)
* **Linear Gradient** (expo-linear-gradient)
* **React Hooks**

## 📦 Instalação
Siga o passo a passo abaixo para rodar o projeto em sua máquina local:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/EvanioTech/TrilhaMobileJR-JUN15](https://github.com/EvanioTech/TrilhaMobileJR-JUN15)

Acesse a pasta do projeto:
Bash

cd TrilhaMobileJR-JUN15

Instale as dependências:
Bash

npm install

Inicie o servidor Expo:
Bash

    npx expo start
    # ou
    npm run start

    Nota: Abra o aplicativo no seu dispositivo físico utilizando o app Expo Go ou utilize um emulador Android/iOS.
---


📱 Como Usar (Funcionalidades)

Abaixo estão as principais funcionalidades disponíveis no aplicativo:

    ✔️ Adicionar Tarefas: Crie novas tarefas de forma rápida.

    ✔️ Excluir Tarefas: Remova itens que não são mais necessários.

    ✔️ Listagem: Visualize todas as suas tarefas salvas em uma lista limpa.

    ✔️ Persistência de Dados: O app utiliza o AsyncStorage, garantindo que suas tarefas continuem salvas mesmo após fechar o aplicativo.

---

📂 Estrutura de Pastas

A organização do projeto segue o padrão do Expo Router:

TrilhaMobileJR-JUN15/
 ├── app/                 # Rotas e telas (Expo Router)
 │    ├── (tabs)/         # Telas da navegação principal (Home, Settings)
 │    └── _layout.tsx     # Configuração global de layout/rotas
 ├── assets/              # Imagens e ícones
 ├── components/          # Componentes reutilizáveis
 │    ├── EmptyTasks.tsx  # Exibição quando não há tarefas
 │    ├── TaskInput.tsx   # Campo de entrada de tarefas
 │    └── TodoCard.tsx    # Card visual da tarefa
 ├── node_modules/        # Dependências do projeto
 ├── app.json             # Configurações do Expo
 └── package.json         # Dependências e scripts
---

🤝 Contribuição

Contribuições são muito bem-vindas! Se você tem sugestões de melhoria ou novas funcionalidades:

    Faça um Fork do projeto.

    Crie uma Branch para sua feature (git checkout -b feature/NovaFeature).

    Faça o Commit de suas mudanças (git commit -m 'Adicionando nova feature').

    Faça o Push para a Branch (git push origin feature/NovaFeature).

    Abra um Pull Request.

📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---


