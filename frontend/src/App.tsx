import { useEffect, useState, useRef, FormEvent } from 'react'
import { FiTrash } from 'react-icons/fi'
import { api } from './services/api'

interface MovieProps
{
  id: string;
  name: string;
  evaluation: string;
  rating: string;
}

export default function App()
{
  const [movies, setMovies] = useState<MovieProps[]>([])
  const nameRef = useRef<HTMLInputElement | null>(null)
  const evaluationRef = useRef<HTMLInputElement | null>(null)
  const ratingRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    loadMovies();
  }, [])

  async function loadMovies()
  {
    const response = await api.get("/movies")
    setMovies(response.data)
  }

  async function handleSubmit(event: FormEvent)
  {
    event.preventDefault();

    if(!nameRef.current?.value || !evaluationRef.current?.value || !ratingRef.current?.value) return;

    const response = await api.post("/movie",
    {
      name: nameRef.current?.value,
      evaluation: evaluationRef.current?.value,
      rating: ratingRef.current?.value
    })

    setMovies(allMovies => [...allMovies, response.data])

    nameRef.current.value = ""
    evaluationRef.current.value = ""
    ratingRef.current.value = ""
  }

  async function handleDelet(id: string)
  {
    await api.delete("/movie", {
      params:
      {
        id: id
      }
    })

    const allMovies = movies.filter( (movie) => movie.id !== id)
    setMovies(allMovies)
  }

  return(
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white flex justify-center">Resenhas</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome:</label>
          <input
          type="text" 
          placeholder="Digite o nome do filme..."
          className="w-full mb-5 p-2 rounded"
          ref={nameRef}
          />

          <label className="font-medium text-white">Avaliação:</label>
          <input
          type="text" 
          placeholder="Digite sua avaliação..."
          className="w-full mb-5 p-2 rounded"
          ref={evaluationRef}
          />

          <label className="font-medium text-white">Nota:</label>
          <input
          type="text" 
          placeholder="Digite sua nota..."
          className="w-full mb-5 p-2 rounded"
          ref={ratingRef}
          />

          <input
          type="submit"
          value="Cadastrar"
          className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"/>
        </form>

        <section className="flex flex-col gap-4">
          {movies.map( (movie) => (
          <article
            key={movie.id}
            className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
          >
            <p><span className="font-medium">Nome:</span> {movie.name} </p>
            <p><span className="font-medium">Avaliação:</span> {movie.evaluation} </p>
            <p><span className="font-medium">Nota:</span> {movie.rating} </p>

            <button
            className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
            onClick={ () => handleDelet(movie.id)}
            >
              <FiTrash size={18} color='#FFF'/>
            </button>
          </article>
          ))}
        </section>
      </main>      
    </div>
  )
}