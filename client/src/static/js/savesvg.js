const save = function() {
  var image = new Image();
  var svg = document.querySelector("svg");

  var svgData = new XMLSerializer().serializeToString(svg);

  var canvas = document.createElement("canvas");

  canvas.width = svg.width.baseVal.value;
  canvas.height = svg.height.baseVal.value;

  var ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0); //空要素の作成
  var a = document.createElement("a"); //aタグを作成
  a.href = canvas.toDataURL("image/png"); //aタグのリンクに関数を設定
  a.setAttribute("download", "chart.png"); //属性:downloadと属性値:chart.pngを設定
  a.dispatchEvent(new MouseEvent("click")); //aタグにクリックイベントを送信(発火)

  image.src =
    "data:image/svg+xml;charset=utf-8;base64," +
    btoa(unescape(encodeURIComponent(svgData)));
};

export default { save };
