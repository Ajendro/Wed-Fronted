export function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }

  export function Tabla(){
    return(
      <table>
        <th>Tabla de Ejemplo</th>
        <tr>Es una Columna</tr>
      </table>
    );
  
  }

  export default function componets(){
    return(
        <section>
            <Profile />
            <Profile />
            <Tabla/>
        </section>
    );
  }