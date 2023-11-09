import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../service/api';

const deleteItem = (id, setInventory, characterId) => {
  api.delete(`/inventory/${id}`)
    .then(() => api.get(`/inventory/${characterId}`)
      .then((i) => setInventory(i.data)).catch((r) => r));
};

function Inventory(prop) {
  const { characterId } = prop;
  const [inventory, setInventory] = useState([]);
  const { handleSubmit, register } = useForm();

  const addInventory = (data) => {
    const { item, weight, description } = data;
    api.post('/inventory', { item, weight, characterId, description })
      .then((response) => setInventory([...inventory, response.data]));
  };

  useEffect(() => {
    if (characterId) {
      api.get(`/inventory/${characterId}`)
        .then((i) => setInventory(i.data)).catch((r) => r);
    }
  }, []);

  return (
    <>
      <h1>Inventario</h1>
      <form
        onSubmit={ handleSubmit(addInventory) }
      >
        <input { ...register('item') } name="item" />
        <input { ...register('weight') } name="weight" />
        <input { ...register('description') } name="description" />
        <button type="submit">Adicionar</button>
      </form>
      {inventory.length < 1 ? <p>Não tem itens no inventario</p> : inventory.map((i) => (
        <>
          <p>{i.item}</p>
          <p>{i.weight}</p>
          <p>{i.description}</p>
          <button
            type="button"
            onClick={ () => deleteItem(i.id, setInventory, characterId) }
          >
            Deletar
          </button>
        </>
      ))}
    </>
  );
}

export default Inventory;
