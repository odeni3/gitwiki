import { ButtonContainer } from './styles.js'

const Button = ({onClick}) => {
    return(
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
    );
};

export { Button };