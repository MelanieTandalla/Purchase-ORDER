import axios from 'axios';

const PucharseBD = axios.create({
    baseURL: 'http://192.95.30.205:8091/api',
})

export const getPurchase = async() => {
    const response = await PucharseBD.get('/purchaseorder/');
    return response;
  };

export const updatePurchase = async(id: number , documentNumber:string, date:string)=>{
    try{
        const response = await PucharseBD.patch(`/purchaseorder/${id}/`,{id,documentNumber, date});
        return response.data;
    }catch (error){
        console.log(error);
    }
}

export const createPurchase = async(documentNumber: string, date: string) => {
    try{
       const response = await PucharseBD.post(`/purchaseorder/`,{documentNumber, date});
       return response.data;
    }catch (error){
    console.log(error);
   }
}
export const deletePurchase = async(id:string)=>{
    try{
        const response = await PucharseBD.delete(`/purchaseorder/${id}/`)
        return response.data;
    }catch(error){
        console.log(error)
    }
}