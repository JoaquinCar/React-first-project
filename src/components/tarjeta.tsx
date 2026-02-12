import './tarjeta.css';  
import Button from './button'
                                                                                                                                     
  interface TarjetaProps {                                                                                                           
    titulo: string;                                                                                                                  
  }                                                                                                                                  
                                                                                                                                     
  function Tarjeta({ titulo }: TarjetaProps) {                                                                                       
    return (                                                                                                                         
      <div className="tarjeta">                                                                                                                          
        <h3>{titulo}</h3>                                                                                                            
        <Button text="Ver horarios" />                                                                                               
      </div>                                                                                                                         
    );                                                                                                                               
  }                                                                                                                                  
                                                                                                                                     
  export default Tarjeta;     
