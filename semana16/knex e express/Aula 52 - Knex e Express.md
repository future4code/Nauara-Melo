#### Exercicio 1
a) Devolve diretamente o que o banco devolveu, exatamente o que o banco MySQL devolveu, ou seja, devolve um array com os nossos dados e outras informações. Os dados que queremos estão na primeira posição do array, para acessá-los é só pegar a primeira posição da resposta da query.

b) 
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

  return result[0][0]
}
c) 
const countActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
  `)

  return result
}

#### Exercicio 2
a) 
const updateSalaryActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};


b) 
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where(id, id)
}

c) 
const averageSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor").avg('salary').where({ gender });

  return result[0].salary
}

#### Exercicio 3 
a) Porque esta sendo passado através da URL como parametro. 
b) res.status(200).send(actor): Responde/devolve o status 200(ok) e retorna o ator. 
res.status(400).send({...}: Retorna o código do status 400(erro) e envia uma mensagem com o erro.
c) 
app.get("/actor/", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({quantify: count})
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

#### Exercicio 4 
a) 
const updateSalaryActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalaryActor(
      req.body.id,
      req.body.salary
    );
    res.status(200).send()
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})
b) 
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where(id, id)
} 

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id)
  } catch (error) {
    res.status(400).send({ message: error.message})
  }
  
})

#### Exercicio 5 
const createMovie = async (id: string, name: string, sipnose: Text, releaseDate: Date , rating: number, playingLimitDate: Date) => {
  await connection
  .insert({id: id, name: name, sipnose: sipnose, release_date: releaseDate, playing_limit_date: playingLimitDate})
  .into("Movie")
}

app.post("/movie", async (req: Request, res: Response) => {
  
  try {
    await createMovie(
      req.body.id,
      req.body.name,
      req.body.sipnose,
      req.body.releaseDate,
      req.body.rating,
      req.body.playingLimitDate
    );
    res.status(200).send()
  } catch (error) {
    res.status(400).send({ message: error.message})
  }
})

#### Exercicio 6 
const getMoviesQueryBuild = async() => {
  const result = await connection
  .select('*').from('Movie');

  return result
}

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await getMoviesQueryBuild();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

#### Exercicio 7
const searchMovie = async (term: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie 
    WHERE title LIKE '%${term}%' OR synposis LIKE '%${term}%'
    ORDER BY release_date
  `);

  return result[0];
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});