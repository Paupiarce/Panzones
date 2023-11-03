
function VentanaDesplegable({ toggleForm }) {

    return (
    
    <div className="formulario">
          <h2>Registro de Usuarios</h2>
          <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Registrarse</button>
        </form>
        </div>
         
        
      );
      
    }
    
   
