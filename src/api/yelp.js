import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer THcfgbQdhzlKsvOVSh88ukrxYlhKr9hxRByaK20oQQHXiW1vOT4sUsTct__UMCTxfsKE6bdtwhU__kGNb7g3lpRmVrW5hq1YqPwlWUcMjtG43MnUs50iQbFTKrNgXnYx',
    }
});