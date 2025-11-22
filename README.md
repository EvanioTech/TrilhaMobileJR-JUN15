Expo Task Manager 📝

Um aplicativo de lista de tarefas moderno e intuitivo desenvolvido para ajudar na organização do dia a dia, com persistência de dados e uma interface agradável.

📖 Descrição

Este projeto é um gerenciador de tarefas (To-Do List) desenvolvido mobile-first. Ele permite que o usuário adicione novas tarefas, marque-as como concluídas e as remova da lista. O aplicativo conta com persistência de dados local (as tarefas não somem ao fechar o app), feedback visual para listas vazias e uma interface com gradientes modernos.

Ideal para quem busca simplicidade e eficiência na organização pessoal.

🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

React Native: Framework principal para desenvolvimento mobile.

Expo: Plataforma para agilizar o desenvolvimento e build.

TypeScript: Para tipagem estática e segurança no código.

AsyncStorage: Para persistência de dados local no dispositivo.

Expo Linear Gradient: Para estilização avançada de fundos.

Ionicons (@expo/vector-icons): Para ícones da interface.

📦 Instalação

Siga os passos abaixo para rodar o projeto em sua máquina local:

Clone o repositório:

git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)
cd nome-do-projeto


Instale as dependências:

npm install
# ou
yarn install


Inicie o projeto:

npx expo start


Execute no dispositivo:

Use o aplicativo Expo Go no seu celular para escanear o QR Code gerado no terminal.

Ou pressione a para abrir no emulador Android / i para o simulador iOS.

📱 Como Usar

Adicionar Tarefa: Toque no botão flutuante + no canto inferior direito. Um modal se abrirá; digite sua tarefa e confirme.

Concluir Tarefa: Toque sobre o texto da tarefa ou no ícone de "quadrado" para marcá-la como feita (o texto ficará riscado e o ícone verde).

Excluir Tarefa: Toque no ícone de lixeira vermelha à direita da tarefa para removê-la permanentemente.

Configurações: Acesse a aba de configurações para opções como "Apagar todas as tarefas".

(Opcional: Insira aqui screenshots ou GIFs do app rodando)
![Screenshot da Home](caminho/para/imagem.png)

📂 Estrutura de Pastas

A organização principal do projeto segue a estrutura recomendada pelo Expo Router:

/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx        # Tela Principal (Lista de Tarefas)
│   │   └── settings.tsx     # Tela de Configurações
│   └── _layout.tsx          # Layout global
├── components/
│   ├── TodoCard.tsx         # Componente de visualização da tarefa individual
│   ├── TaskInput.tsx        # Modal para inserção de novas tarefas
│   └── EmpityTasks.tsx      # Componente visual para lista vazia
└── README.md
