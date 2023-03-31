const fecher = async (url: string) => {
    return await fetch(url, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    });
  }
  
  export const getWithAuth = async (url: string) => {
  
    url=  "http://apigenerator.sistemaagil.net:8091/api/"+url+"/";
    
    let data;
    let error;
    try{
      const response = await fecher(url)
      if (response.ok){
        data = await response.json();
      }else {
        console.log(url)
        error = "Servidor: "+ ((await response.json()).trace);
      }
    }catch (e){
      error = "Cliente: "+e;
    }
  
    return {
      data,
      error
    }
  
  }