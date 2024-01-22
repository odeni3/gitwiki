import { useState } from "react";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ItemRepo } from '../../components/ItemRepo';
import gitLogo from '../../assets/githubLogo.png';

import './styles.css';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
      const response = await fetch(`https://api.github.com/repos/${currentRepo}`);
      
      if (response.ok) {
        const data = await response.json();
        const isExist = repos.find(repo => repo.id === data.id)
        
        if(!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo('')
          return
        }
      } 
        alert('Erro ao buscar o repositório:');

    }

  return (
    <div className="Container">
      <img src={gitLogo} alt="GitHub Logo" width={90} height={90} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} />)}
    </div>
  );
}

export default App;
