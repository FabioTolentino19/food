import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Tentando busca Yelp');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'sao paulo'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
      }
  };

  // Call searchApi when component is first rendered
  // Bad code !!
  // searchApi('pasta')
  useEffect(() => {
    searchApi('vegetariano');
  }, []);

  return [searchApi, results, errorMessage];
};