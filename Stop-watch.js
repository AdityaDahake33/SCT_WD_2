 let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;

    function updateDisplay(time) {
      const hours = Math.floor(time / 3600000);
      const minutes = Math.floor((time % 3600000) / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      document.getElementById("display").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startStopwatch() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay(elapsedTime);
      }, 1000);
    }

    function pauseStopwatch() {
      clearInterval(timerInterval);
    }

    function resetStopwatch() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      updateDisplay(0);
      document.getElementById("lapList").innerHTML = "";
    }

    function lapTime() {
      const lapTime = document.getElementById("display").textContent;
      const li = document.createElement("li");
      li.textContent = lapTime;
      document.getElementById("lapList").appendChild(li);
    }