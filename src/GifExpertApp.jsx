import { useState } from 'react';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    // categories.push('Valorant');
    setCategories([ 'Valorant', ...categories ]);
    // setCategories( cat => [ ...cat, 'Valorant'] );
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}


      {/* Listado de Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { 
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          }) 
        }
        {/* <li>ABC</li> */}
      </ol>
        {/* Gif Item */}

    </>
  )
}
