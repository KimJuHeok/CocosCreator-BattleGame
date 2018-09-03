
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {

        this.includeJs("https://www.gstatic.com/firebasejs/5.4.2/firebase.js");  
    },
    includeJs(jsFilePath) {
    let js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath;  
    document.head.appendChild(js);
},

    start () {
        var config = {
            apiKey: "AIzaSyDwbkETYxGe8fyOL7W0rESobDEYn3TQsn8",
            authDomain: "asdf-3f328.firebaseapp.com",
            databaseURL: "https://asdf-3f328.firebaseio.com",
            projectId: "asdf-3f328",
            storageBucket: "asdf-3f328.appspot.com",
            messagingSenderId: "827702185283"
          };
          firebase.initializeApp(config);
          window.FireBaseDB = firebase.database();
        
    },

    // update (dt) {},
});
