import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Card, CardActionArea, CardActions,
  CardContent, IconButton, Typography } from '@mui/material';
// import { grey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import api from '../service/api';
import ButtonNavigate from './buttons/ButtonNavigate';

const routeCreate = '/character/create';

const del = (character, setCharacters) => {
  api.delete(`character/${character.id}`).then(() => api
    .post('/character/user', { id: character.userId })
    .then((response) => setCharacters(response.data)));
};

function CharactersAll(prop) {
  const navigate = useNavigate();
  const { characters, setCharacters } = prop;

  return (characters || characters.length >= 1) ? (
    <CardActionArea>
      <CardContent>
        <IconButton onClick={ () => navigate(routeCreate) }>
          <AddIcon />
        </IconButton>
        {characters.map((c) => (
          <Card
            key={ c.id }
            sx={ { minWidth: 275, maxWidth: 300, margin: 1 } }
          >
            <CardContent>
              <Typography sx={ { fontSize: 20 } } variant="h5">
                {c.name}
              </Typography>
              <Typography sx={ { fontSize: 15 } } color="text.primary">
                {`Hp ${c.healthPoints}/${c.maxHealthPoints}`}
              </Typography>
              <Typography sx={ { fontSize: 15 } } color="text.primary">
                {`Sanidade ${c.sanity}/${c.maxSanity}`}
              </Typography>
              <Typography sx={ { fontSize: 15 } } color="text.primary">
                {`Pe ${c.effortPoints}`}
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonNavigate route={ `/character/${c.id}` } name="Detalhes" />
              <Button color="error" onClick={ () => del(c, setCharacters) }>
                Deletar
              </Button>
            </CardActions>
          </Card>)) }
      </CardContent>
    </CardActionArea>
  ) : <p>Não tem persnagens</p>;
}

export default CharactersAll;
