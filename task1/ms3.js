function pegaTempo() {
    const agora = new Date();
    const tempoAtual = agora.toLocaleTimeString();
    document.getElementById("tempo").textContent = "Tempo: " + tempoAtual;
}
setInterval(pegaTempo, 1000);