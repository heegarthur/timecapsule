function haalAlleItemsOp() {
    const key = "linkkk";
    return JSON.parse(localStorage.getItem(key)) || [];
}
function postlinks() {
    const items = haalAlleItemsOp();
    const postplace = document.getElementById("postI");
    postplace.innerHTML = (items);

}
function click_link() {
    const items = haalAlleItemsOp();
    console.log(items);

    const win = window.open('', '_blank'); // Open een nieuw venster/tab
    win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>links</title>
</head>
<body>
    <h1>al links ever created by you</h1>
    <button onclick='returnhome()' class="logo">return to home</button>
    <div class="windows">
        <div>${items}</div>
    </div>
  <style>
    body {
      margin: 0;
      background: linear-gradient(to bottom right, #aee0f7, #3aa8d4);
      font-family: "Segoe UI", "Frutiger", sans-serif;
      color: #fff;
    }

    .window {
      margin: 80px auto;
      padding: 20px;
      max-width: 500px;
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(12px);
      border-radius: 15px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.4);
    }

    h1 {
      text-align: center;
      font-size: 2rem;
      color: #ffffff;
      text-shadow: 1px 1px 3px #000;
    }

    p {
      font-size: 1rem;
      color: #f0f0f0;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
    }

    .aero-button {
      display: inline-block;
      margin-top: 15px;
      padding: 10px 20px;
      background: linear-gradient(to bottom, #c1e9ff, #5db6e0);
      border-radius: 8px;
      border: 1px solid #ffffff;
      box-shadow: inset 0 1px 0 #ffffff, 0 4px 8px rgba(0, 0, 0, 0.2);
      color: #003e5c;
      text-decoration: none;
      font-weight: bold;
      text-align: center;
    }

    .aero-button:hover {
      background: linear-gradient(to bottom, #e0f5ff, #70c6ee);
    }

    .logo {
      width: 100px;
      display: block;
      margin: 0 auto 20px;
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.7));
    }
  </style>
  <script>
        function returnhome(){
            window.location.reload();
        }
  </script>
</body>
</html>`);

}
