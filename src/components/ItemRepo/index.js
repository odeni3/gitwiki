import { ItemContainer } from './styles.js'

const ItemRepo = ({repo}) => {
    return(
        <ItemContainer> 
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">Ver Repositório</a> <br />
            <a href="#" rel="noreferrer" className="remover">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export { ItemRepo }