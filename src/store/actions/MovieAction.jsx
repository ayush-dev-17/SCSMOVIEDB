export {removemovie} from "../reducers/MovieSlice"
import axios from "../../utilis/Axios"
import { loadmovie} from "../reducers/MovieSlice"

export const  asyncloadmovie = (id)=> async(dispatch , getState)=>{
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
        const translations = await axios.get(`/movie/${id}/translations`)

        let theultimateDetails ={
            detail:detail.data,
            recommendations:recommendations.data.results,
            externalid:externalid.data,
            similar:similar.data.results,
            videos:videos.data.results.find(m =>m.type ==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
            translations : translations.data.translations.map((t)=>t.english_name)
        }
        dispatch(loadmovie(theultimateDetails));
        // console.log(theultimateDetails)

    }catch(err){
        console.log("Error : " , err);
    }
}