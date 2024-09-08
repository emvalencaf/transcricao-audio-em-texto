// Verifica se o navegador suporta a Web Speech API
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Definir a língua para o reconhecimento
    recognition.lang = 'pt-BR';
    recognition.continuous = true;

    // Capturar os botões e elementos da página
    const startButton = document.getElementById('start-rec');
    const stopButton = document.getElementById('stop-rec');
    const clearButton = document.getElementById('clear-log');
    const exportButton = document.getElementById('export-log');
    const statusParagraph = document.getElementById('status-text');
    const loadingIndicator = document.getElementById('loading');
    const logContainer = document.getElementById('transcription-log');

    // Função para adicionar uma nova entrada no log
    function addLogEntry(text) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';

        const typewriterSpan = document.createElement('span');
        typewriterSpan.className = 'typewriter';

        logEntry.innerHTML = `<strong>[${timestamp}]:</strong> `;
        logEntry.appendChild(typewriterSpan);
        logContainer.appendChild(logEntry);

        // Inicializar o efeito de máquina de escrever
        const typewriter = new Typewriter(typewriterSpan, {
            loop: false,
            delay: 75,
        });

        typewriter
        .typeString(text)
        .callFunction(() => {
            // Remove o cursor ao terminar o efeito
            typewriterSpan.querySelector('.Typewriter__cursor').style.display = 'none';
        })
        .start();

        // Rolagem automática para a última mensagem
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    // Função para exportar o log como arquivo .txt
    function exportLog() {
        let logText = '';
        const entries = logContainer.querySelectorAll('.log-entry');
        entries.forEach(entry => {
            logText += entry.innerText + '\n';
        });

        const blob = new Blob([logText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'transcricoes.txt';
        a.click();
        URL.revokeObjectURL(url);
    }

    // Quando clicar no botão, iniciar o reconhecimento de fala
    startButton.addEventListener('click', () => {
        recognition.start();
        statusParagraph.textContent = 'Estou ouvindo...';
        loadingIndicator.classList.remove('d-none');
    });

    // Quando clicar no botão, parar o reconhecimento de fala
    stopButton.addEventListener('click', () => {
        recognition.stop();
        statusParagraph.textContent = 'Reconhecimento parado.';
        loadingIndicator.classList.add('d-none');
    });

    // Quando o reconhecimento de fala detectar a fala
    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        addLogEntry(transcript);
        // O indicador de carregamento deve desaparecer após o processamento
        loadingIndicator.classList.add('d-none');
    };

    // Lidar com erros
    recognition.onerror = (event) => {
        statusParagraph.textContent = 'Erro no reconhecimento: ' + event.error;
        loadingIndicator.classList.add('d-none');
    };

    // O que fazer quando parar o reconhecimento
    recognition.onend = () => {
        statusParagraph.textContent += ' (Reconhecimento parado)';
        loadingIndicator.classList.add('d-none');
    };

    // Limpar log
    clearButton.addEventListener('click', () => {
        logContainer.innerHTML = '';
    });

    // Exportar log
    exportButton.addEventListener('click', exportLog);
} else {
    alert('Seu navegador não suporta a Web Speech API.');
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.error('Falha ao registrar o Service Worker:', error);
        });
    });
  }
  