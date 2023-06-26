(function () {
    const messages = document.querySelector('#messages');
    const wsButton = document.querySelector('#wsButton');
    const wsSendButton = document.querySelector('#wsSendButton');
   
  
    function showMessage(message) {
      messages.textContent += `\n${message}`;
      messages.scrollTop = messages.scrollHeight;
    }
    
    let ws;
  
    wsButton.onclick = function () {
      if(!document.getElementById("fromId").value || document.getElementById("fromId").value === ""){
        alert("请录入你的id")
        return 
      }
      if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
      }
  
      ws = new WebSocket(`ws://${location.host}?id=${document.getElementById("fromId").value}`);
      ws.onerror = function () {
        showMessage('WebSocket error');
      };
      ws.onopen = function () {
        showMessage('WebSocket connection established');
      };
      ws.onclose = function () {
        showMessage('WebSocket connection closed');
        ws = null;
      };
      ws.onmessage = (res) => {
        console.log(res)
        showMessage(res.data);
      }
    };
  
    wsSendButton.onclick = function () {
      if (!ws) {
        showMessage('No WebSocket connection');
        return;
      }
  
      ws.send(JSON.stringify({
        fromId:document.getElementById("fromId").value,
        toId:document.getElementById("toId").value,
        content:document.getElementById("content").value
      }));
      showMessage(`Sent "${document.getElementById("content").value}"`);
    };
  })();