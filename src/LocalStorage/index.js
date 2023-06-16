export const LocalSt = (action, data) => {
  if (action === "addLST") {
    if (data) {
      localStorage.setItem("userdata", JSON.stringify(data));
    } else {
      console.log("From LST no userdata for add in LST");
    }
  }
  if(action === "removeLST"){
    localStorage.removeItem("userdata");
  }
  if(action === "getLST"){
    if(localStorage.getItem("userdata")){
        return localStorage.getItem("userdata")
    }else{
        return null
    }
    
  }
};
