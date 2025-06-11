import axios from "../../utilis/Axios"
import { loadperson} from "../reducers/personSlice"
export {removeperson} from "../reducers/personSlice"

export const  asyncloadperson = (id)=> async(dispatch , getState)=>{
    try{
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits= await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
       

        let theultimateDetails = {
          detail: detail.data,
          externalid: externalid.data,
          combinedcredits: combinedcredits.data,
          tvCredits: tvCredits.data,
          movieCredits : movieCredits.data
        };
        dispatch(loadperson(theultimateDetails));
        console.log(theultimateDetails)

    }catch(err){
        console.log("Error : " , err);
    }
}
