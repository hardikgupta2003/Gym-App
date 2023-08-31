export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '7d4328e613mshb56358225c7b304p1546aejsn11927735ac8b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };