import axios from 'axios'
import { useEffect, useState } from 'react';
import { endpoint, params } from './api'
import { ReactComponent as Search } from './imgs/search.svg'
import wiki from './imgs/wikipedia-logo.png'
import * as C from './styles'
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
    <C.Container>
          <C.Search>
            <img src={wiki} alt="a" />

            <div>
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
                required
              />
              <button onClick={getData} > <Search /> </button>
            </div>
          </C.Search>

        {datas === undefined ? '' :
         
         <C.Results>
            {datas.map(e => (
              
                <div>
                  <a
                    href={`https://en.wikipedia.org/?curid=${e.pageid}`}
                    target='_blank'>
                      <h1>{e.title}</h1>
                      <p>{e.extract}</p>
                  </a>
                </div>
              
            ))   }
          </C.Results>
         }
    </C.Container>
  );
}

export default App;
