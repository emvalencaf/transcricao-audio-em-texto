# Reconhecimento de Fala em Tempo Real

## Descrição

Este projeto é uma aplicação web que utiliza a Web Speech API para reconhecimento de fala em tempo real. A aplicação permite que os usuários iniciem e parem o reconhecimento de fala, limpem o histórico de transcrições e exportem o histórico como um arquivo de texto. A aplicação também apresenta um efeito de máquina de escrever para mostrar as transcrições de maneira dinâmica.

## Conceito de Speech-to-Text

**Speech-to-Text (STT)** é uma tecnologia que converte a fala humana em texto. Utilizando algoritmos avançados e modelos de aprendizado de máquina, o sistema processa os sinais de áudio e os transforma em texto legível. O reconhecimento de fala é amplamente utilizado em assistentes virtuais, sistemas de legendagem automática e aplicativos de transcrição, facilitando a interação com dispositivos por meio da voz.

## Features

- **Início do Reconhecimento de Fala**: Clique no botão "Iniciar" para começar a transcrição em tempo real.
- **Parada do Reconhecimento de Fala**: Clique no botão "Parar" para interromper o reconhecimento de fala.
- **Exibição de Status**: Mensagem de status atualizada para informar se o reconhecimento está ativo ou parado.
- **Efeito de Máquina de Escrever**: As transcrições são exibidas com um efeito de máquina de escrever dinâmico.
- **Limpeza do Histórico**: Clique no botão "Limpar Registros" para apagar todas as transcrições do histórico.
- **Exportação do Histórico**: Exporte o histórico de transcrições como um arquivo de texto (.txt) clicando no botão "Exportar Registros".
- **Indicador de Carregamento**: Um indicador de carregamento é exibido enquanto o reconhecimento de fala está em andamento.
- **Progressive Web App (PWA)**: Funcionalidade de PWA adicionada para permitir que a aplicação seja instalada e executada como um aplicativo standalone.
- **Suporte Offline**: A aplicação utiliza Service Worker para funcionar offline.

## Estrutura do Projeto

O projeto é dividido nos seguintes arquivos:

### `index.html`

Define a estrutura da página web e inclui:

- Botões para iniciar, parar, limpar e exportar o reconhecimento de fala.
- Um parágrafo para exibir o status do reconhecimento de fala.
- Um contêiner para exibir o histórico de transcrições.

### `js/index.js`

Script principal que gerencia a funcionalidade do reconhecimento de fala e interações do usuário. Inclui:

- Verificação de compatibilidade com a Web Speech API.
- Configuração e controle da `SpeechRecognition` para iniciar e parar o reconhecimento de fala.
- Funções para adicionar entradas ao log, exportar o log e manipular o status do reconhecimento de fala.

### `css/style.css`

Estilos para a página, incluindo:

- Layout e aparência dos botões.
- Estilos para o log de transcrições e indicadores de carregamento.
- Animação para o efeito de máquina de escrever.

### `manifest.json`

Define as propriedades da Progressive Web App (PWA), como nome, ícones e cores. Permite que a aplicação seja instalada e executada como um aplicativo standalone.

### `sw.js`

Arquivo de Service Worker responsável pelo cache de arquivos e gerenciamento do armazenamento offline. Permite que a aplicação funcione mesmo quando o usuário está offline.

## Como Executar

1. **Clone o repositório**:
    ```bash
    git clone <URL-DO-REPOSITORIO>
    ```

2. **Abra o arquivo `index.html` em um navegador compatível com a Web Speech API**.

3. **Inicie o reconhecimento de fala** clicando no botão "Iniciar".

4. **Interaja com os botões** para parar o reconhecimento, limpar o histórico ou exportar o log.

## Recursos Utilizados

- **Web Speech API**: Utilizada para reconhecimento de fala.
- **TypewriterJS**: Biblioteca para criar o efeito de máquina de escrever.
- **Bootstrap**: Framework CSS para estilizar os componentes.
- **FontAwesome**: Para ícones e botões interativos.

## Notas

- A Web Speech API é suportada principalmente em navegadores baseados em Chromium, como o Google Chrome.
- Certifique-se de ter uma conexão com a internet para utilizar o reconhecimento de fala.
