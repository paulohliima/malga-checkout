# Teste Técnico Malga - Front-End

### Realizado por Paulo Lima - Desenvolvedor Web Full-Stack Pleno

# 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — Framework React com suporte a rotas de páginas e API (utilizado para simular os endpoints da API)
- **[React Hook Form](https://react-hook-form.com/)** — Manipulação de formulários
- **[Yup](https://github.com/jquense/yup)** — Validação de dados de formulários
- **[Styled Components](https://styled-components.com/)** — Estilização da aplicação
- **Context API** — Gerenciamento de estado global da aplicação
- **[Vercel](https://vercel.com/)** — Plataforma utilizada para o deploy da aplicação
- **[Jest](https://jestjs.io/pt-BR/)** — Plataforma utilizada para aplicação de testes
- **[VLibras](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras)** — Ferramenta de acessibilidade em libras

# 🧪 Como usar

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

### 2. Instalar dependências -> ´npm install´

### 3. Executar bateria de testes -> ´npm run test´

### 4. Executar o projeto -> ´npm run dev´

### 5. aplicação estará disponível em -> http://localhost:3000

**[Aplicação em Vercel](https://malga-checkout.vercel.app/)**

# Requisitos Funcionais

1. Página de Checkout:
   ○ Exibir lista dos itens do carrinho.
   ○ Seção de informações do cliente.
   ○ Seção de informações de pagamento.
2. Página de Listagem de Transação:
   ○ Deve ser renderizado o ID da transação, Método de pagamento e status.
3. Página de Detalhes de Transação:
   ○ Exibir os itens da compra.
   ○ Informações do cliente.
   ○ Dados referentes ao pagamento: quantidade de parcelas, 4 dígitos iniciais e finais do cartão e nome do portador do cartão.

# Requisitos Técnicos

1. Elaboração da UX/UI.
2. Validação dos dados de cartão na página de Checkout - número do cartão válido e data de vencimento válida.
3. Criação dos mocks simulando chamadas para API, seguindo o contrato disponibilizado.

# Critérios de Avaliação

1. Qualidade do Código:
   ○ Organização, legibilidade e boas práticas de desenvolvimento.
2. Arquitetura:
   ○ Estrutura do projeto e escolhas arquiteturais.
3. Responsividade:
   ○ UI adaptável em qualquer dispositivo
4. Organização:
   ○ Pastas, linters, formatters, etc.
5. Componentização:
   ○ Técnicas e padrões usados para criar e dividir componentes.

# Bônus:

1. Testes automatizados
2. Aplicar conceitos de acessibilidade
3. Prever cenários de erro nos mocks da API e tratar esses erros na UI/UX
4. UX/UI elegante
5. Deploy da aplicação em alguma serviço
