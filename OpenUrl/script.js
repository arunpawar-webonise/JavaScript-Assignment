    let openeTab=[];
    let startProcess=false;
    let count=0;
    function multipleTabs() {
        for(let i=0;i<5;i++){
            openeTab.push(window.open(
              "https://www.google.com", "_blank"));
        }
        startProcess=true;
        closeURL();
    }
    function closeURL(){
        let interval=setInterval(()=>{
            if(count>=5){
                clearInterval(interval);
                openedtab=[];
                count=0;
                return;
            }
            openeTab[count].close();
            count++;
        },2000)
    }
    function stop(){
        startProcess=false
    }    

