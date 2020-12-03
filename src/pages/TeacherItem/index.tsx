import React from 'react';
import './styles.css'
import wppIcon from '../../assets/images/icons/whatsapp.svg';


const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/19842670?s=400&u=f63262f64a11abcf1dfbbc696ef7a048dbfbdda0&v=4" alt="Luiz"/>
                <div>
                    <strong>Luiz Gustavo</strong>
                    <span>Filosofia</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                <br/>
                Posuere sollicitudin aliquam ultrices sagittis orci a. Purus sit amet luctus venenatis. Nam at lectus urna duis. Venenatis urna cursus eget nunc scelerisque viverra. Eget magna fermentum iaculis eu non diam. Imperdiet massa tincidunt nunc pulvinar sapien. At augue eget arcu dictum. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.
            </p>
            <footer>
                <p>Preço/hora:
                    <strong>R$50,00</strong>
                </p>
                <button>
                    <img src={wppIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
                
            </footer>
        </article>
    )
}

export default TeacherItem;