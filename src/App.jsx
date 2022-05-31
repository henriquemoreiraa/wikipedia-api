import axios from 'axios'
import { useEffect, useState } from 'react';
import { endpoint, params } from './api'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('') 
  const [datas, setDatas] = useState()

  const dataArray = (pages) => {
     setDatas(Object.values(pages))
  }
  
  const getData = async () => {
    if (inputValue === '') return false;
    
    params.gsrsearch = inputValue
    
    try {
      const { data } = await axios.get(endpoint, { params });
      if (data.error) {
        throw new Error (data.error.info)
      }   
      dataArray(data.query.pages)
    } catch (error) {
      alert(error)
      
    } finally {
      setInputValue('')
    }
    
  }
  useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
          document.removeEventListener('keydown', handleKeyPress)
      }
  }, [inputValue]);
  
  const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          getData();
      }
  }

  return (
    <div>
        <input type='text' name='test' value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus required/>
        <button id='submit' type='button' onClick={getData}>Search</button>

        {datas === undefined ? <h1>carr</h1> :
         
          datas.map(e => (
            <a href={`https://en.wikipedia.org/?curid=${e.pageid}`}  target='_blank'>
              <div>
                <h1>{e.title}</h1>
                <p>{e.extract}</p>
              </div>
            </a>
          ))
         
         
         }
    </div>
  );
}

export default App;
