import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorizarion: 
      'Bearer 23aCsEoXFny7sfyGHixD0JLGn1pNo0DGm1EAV0XYudeOLRKFzilkh1lNPcxxX6GBCStPptgxCuln8OoFLXvfvqqiBgZdMtaAXUm5DALkGdBAbSdFcaesGAqHGEaBXXYx'
  }
});
