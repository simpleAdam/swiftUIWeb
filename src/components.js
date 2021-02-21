/***
* jsdoc?
*/
function vStack(...args) {
  let vstackView = new Swift(args);
  vstackView
    .init("div")
    .css({
      display: "flex",
      flexDirection: "column",
      height: "100%;",
      width: "100%",
    });

  return vstackView;
}
module.exports=vStack

function hStack(...args) {
  let hstackView = new Swift(args);
  hstackView
  .init("div")
  .css({ display: "flex", flexDirection: "row" });

  return hstackView;
}

function text(args) {
  let textView = new Swift(args);
  textView.init("p");
  textView.css({ margin: 0, padding: 0 });
  return textView;
}
function label(msg,icon,args) {
  
}
function h(args) {
  let hView = new Swift(args);
  hView.init("h2");
  hView.css({ margin: 0, padding: 0 });
  return hView;
}
function input(opts, args) {
  let inputView = new Swift(args);
  inputView.init("input");
  inputView.css({ margin: 0, padding: "5px" });
  if (opts.type === "search") {
    inputView.attr({ class: "searchBox" });
  } else if (opts.type === "checkbox") {
    inputView.attr({ type: "checkbox" });
  } else if (opts.type === "text") {
    inputView.attr({ type: "textBox" });
  }
  return inputView;
}

function image(src, w) {
  let imageView = new Swift();
  imageView.init("img");
  src ? imageView.attr({ src: src }) : "";
  w ? imageView.css({ width: w + "px" }) : "";

  return imageView;
}
function spacer() {
  let spacerView = new Swift();
  spacerView.init("div");
  spacerView.css({ flex: 1, height: "100%",width:"100%" });

  return spacerView;
}

function header(...args) {
  let headerView = new Swift(args);
  headerView.init("header")
  .css({
    display: "flex",
    padding: "0px 12px",
    justifyContent: "space-between",
  });

  return headerView;
}
function footer(...args) {
  let footerView = new Swift(args);
  footerView.init("footer").css({
    display: "flex",
    justifyContent: "space-around",
    background: "#333",
    color: "#fffa",
  });

  return footerView;
}
function nav(...args) {
  let navView = new Swift(args);
  navView.init("nav");
  navView.css({ display: "flex" });

  return navView;
}
function Link(url, txt, ...args) {
  let anchorView = new Swift(args);
  anchorView.init("a").css({ margin: "0px 12px" });
  anchorView.attr({ href: url });
  anchorView.el.textContent = txt;

  return anchorView;
}
function select(opts, ...args) {
  let selectView = new Swift(args);
  selectView.init("select");
  selectView.css({});
  selectView.attr({ name: opts.name || "", id: opts.id || "" });
  select.el.onchange = (e) => {
    opts.action(e, selectView);
  };
  return selectView;
}
function option(opts, val, ...args) {
  let optionView = new Swift(args);
  optionView.init("option");
  optionView.css({});
  optionView.attr({ value: opts.val });
  optionView.el.textContent = opts.val;

  optionView.selected = function () {
    this.attr({ selected: "true" });
  };

  if (opts.selected) {
    optionView.selected();
  }

  return optionView;
}
function form(opts, ...args) {
  let formView = new Swift(args);
  formView.init("form");
  formView.el.onsubmit = function (e) {
    e.preventDefault();
    let fdata = new FormData(this);
    opts.action(e, formView);
  };
  return formView;
}

function button(opts, str, ...args) {
  let buttonView = new Swift(args);
  buttonView.init("button");
  buttonView.el.textContent = str;
  buttonView.css({ cursor: "pointer" });
  buttonView.el.onchange = (e) => {
    opts.action(e, buttonView);
  };
  return buttonView;
}

function scrollable(type, ...args) {
  let stackView = new Swift(args);
  stackView.init("div")
  .css({ display: "flex", height: "100%;", width: "100%" });

  if (type === "vstack" || type === "vStack") {
    stackView.css({ flexDirection: "column", overflowY: "scroll" });
  } else if (type === "hstack" || type === "hStack") {
    stackView.css({ overflowX: "scroll" });
  }

  /**
  * i tried to make a scrollable view component. its not too great
  */
  function addScroll() {
    var curYPos, curXPos, curDown;

    let ref = stackView.el;

    ref.addEventListener("mousemove", function (e) {
      if (curDown) {
        ref.scrollBy(curXPos - e.pageX, (curYPos - e.pageY) / 4);
      }
    });

    ref.addEventListener("mousedown", function (e) {
      curYPos = e.pageY;
      curXPos = e.pageX;
      curDown = true;
    });

    ref.addEventListener("mouseup", function (e) {
      curDown = false;
    });
  }

  addScroll();

  return stackView;
}
