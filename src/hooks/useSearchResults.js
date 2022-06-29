import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'
import yepl from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const getSearchResults = async (searchTerms) => {
    setErrorMessage('')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 10,
          term: searchTerms,
          location: 'london',
        },
      })
      setResults(response.data)
    } catch (e) {
      console.log(e)
      setErrorMessage('Something went wrong')
    }
  }
  return [getSearchResults, results, errorMessage]
}
