import axios from "../../utilis/Axios";
import { loadtv } from "../reducers/TvSlice";
export { removetv } from "../reducers/TvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    const translations = await axios.get(`/tv/${id}/translations`);

    let theultimateDetails = {
      detail: detail.data,
      recommendations: recommendations.data.results,
      externalid: externalid.data,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
      translations: translations.data.translations.map((t) => t.english_name),
    };
    dispatch(loadtv(theultimateDetails));
    console.log(theultimateDetails);
  } catch (err) {
    console.log("Error : ", err);
  }
};
