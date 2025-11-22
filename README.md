📝 Expo Task ManagerUm aplicativo de lista de tarefas moderno, minimalista e persistente.O Expo Task Manager é uma aplicação mobile desenvolvida para ajudar na organização diária. Com foco em simplicidade e eficiência, o app permite criar, gerenciar e excluir tarefas com uma interface limpa e agradável, utilizando gradientes e animações sutis.📸 Preview<!-- Adicione um GIF ou Imagem aqui futuramente --><div align="center"><img src="https://www.google.com/search?q=https://via.placeholder.com/300x600.png%3Ftext%3DApp%2BScreenshot" alt="App Screenshot" width="300" /></div>🚀 Tecnologias UtilizadasO projeto foi desenvolvido utilizando as principais tecnologias do ecossistema React Native:React Native - Framework principal.Expo - Plataforma de desenvolvimento.TypeScript - Tipagem estática e segurança.AsyncStorage - Persistência de dados local.Expo Linear Gradient - UI moderna com gradientes.Expo Router - Navegação baseada em arquivos.📦 Instalação e ExecuçãoSiga os passos abaixo para rodar o projeto localmente:1. Pré-requisitosCertifique-se de ter instalado:Node.jsGitApp Expo Go no seu celular (Android ou iOS).2. Clonar o repositóriogit clone [https://github.com/SEU-USUARIO/NOME-DO-PROJETO.git](https://github.com/SEU-USUARIO/NOME-DO-PROJETO.git)
cd NOME-DO-PROJETO
3. Instalar dependênciasnpm install
# ou
yarn install
4. Rodar o projetonpx expo start
Um QR Code aparecerá no terminal. Escaneie-o com o app Expo Go no seu celular.📱 Funcionalidades e Como UsarAdicionar TarefaToque no botão flutuante (+) no canto inferior direito.Digite o nome da tarefa no modal e confirme.Concluir TarefaToque na tarefa para marcar/desmarcar como concluída.Tarefas concluídas ficam com o texto riscado e ícone verde.Excluir TarefaToque no ícone de lixeira (🗑️) ao lado da tarefa para removê-la permanentemente.ConfiguraçõesNavegue até a aba de configurações para ver informações do app ou apagar todos os dados de uma vez.📂 Estrutura de PastasA estrutura do projeto segue o padrão do Expo Router:/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx        # Tela Principal (Home)
│   │   └── settings.tsx     # Tela de Configurações
│   └── _layout.tsx          # Configuração global de rotas
├── components/
│   ├── TodoCard.tsx         # Card de tarefa individual
│   ├── TaskInput.tsx        # Modal de input
│   └── EmpityTasks.tsx      # Estado vazio (Empty State)
└── README.md
🤝 ContribuiçãoContribuições são bem-vindas!Faça um fork do projeto.Crie uma nova branch: git checkout -b minha-nova-feature.Faça as alterações e o commit: git commit -m 'Adiciona X funcionalidade'.Envie para o GitHub: git push origin minha-nova-feature.Abra um Pull Request.📄 LicençaEste projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.Feito com 💙 por Seu Nome.
