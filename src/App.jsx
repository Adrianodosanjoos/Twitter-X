import { Sidebar } from "./components/Sidebar"
import { Tweet } from "./components/Tweet"
import { TwitterForm } from "./components/TwitterForm"
import { v4 } from "uuid"
import { getAvatar, getRandomImage } from "./utils/generateImagens"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { TrendItem } from "./components/TrendItem"
import { FollowItem } from "./components/FollowItem"

function App() {
 const [tweets, setTweets] = useState([])

 useEffect (() => {
  const interval = setInterval (() => {
    addNewRandomTweets()
  }, 4000)
      return () => clearInterval(interval)
 }, [])

 const addNewRandomTweets = () => {
  const randomTweets = [
    'Esse filme foi muito melhor do que eu esperava! 🎥👏',
    'Alguém sabe se vai ter sol amanhã? ☀️🌞',
    'Esse restaurante nunca decepciona, a comida é sempre incrível. 🍽️😋',
    'O trânsito hoje estava insuportável! 🚗😩',
    'Estou viciado nessa série, não consigo parar de assistir. 📺😆',
    'Adorei a música nova da banda, é o melhor álbum deles até agora. 🎶🎸',
    'Você já tentou esse novo aplicativo de organização? É incrível! 📱✨',
    'Que foto linda! Onde você tirou? 📸😍',
    'Sério, você precisa experimentar esse sorvete de pistache. 🍦😋',
    'Achei esse livro muito confuso, alguém mais teve a mesma impressão? 📚🤔',
    'Esse jogo foi uma reviravolta total, não esperava aquele final. 🎮😱',
    'A economia está realmente complicada ultimamente, tudo está muito caro. 💸😓',
    'Alguém mais aqui já assistiu ao novo documentário? Muito informativo! 🎬🧐',
    'Esse evento online foi bem organizado, gostei bastante. 💻👍',
    'Estou começando a aprender a cozinhar, e essa receita foi super fácil! 🍳👩‍🍳',
    'Aquela atualização de software deixou tudo muito mais rápido. 💻⚡',
    'Não vejo a hora de viajar para a praia no próximo fim de semana. 🏖️🌞',
    'Eu tentei aquele novo café da esquina, mas achei meio caro. ☕💵',
    'Esse meme me fez rir por horas, é genial! 😂👍',
    'O suporte técnico da empresa foi super rápido e eficiente, estou impressionado. 🖥️💼'
  ]
  const randomTweet = randomTweets [Math.floor(Math.random() * randomTweets.length)]

  addNewTweet (randomTweet, Math.random() > 0.7)
 }

  const addNewTweet = (content, includeImage = false) => {
  const newTweet = {
    id: v4(),
    name: "User",
    username: `user${Math.floor(Math.random() * 1000)}`, 
    avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
    content,
    time: new Date().toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit'
    }),
    image: includeImage ? getRandomImage() : null,
    likes: 0,
    retweets: 0,
    coments: 0
  }

 setTweets ((prevTweets) => [newTweet, ...prevTweets])
     

  }

  return (

    <div className="flex mx-auto max-w-7xl">
      <Sidebar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">
            For You
          </h2>
        </header>
        <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}/>
        <div>
          {tweets.map(tweet =>(
              <Tweet key={tweet.id} tweet={tweet}/>
          ))}
       
        </div>
      </main>
      <aside className="hidden xl:block w-80 px-4">
        <div className="sticky top-0 pt-2">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-500"/>
            <input placeholder="Seacher Twitter" className="w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4"/>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Subscribe to Premium</h2>
            <p className="text-gray-500 mb-4">Unlock the full experience with Premium! Subscribe today and enjoy exclusive features, ad-free content, and early access to new releases. Upgrade now for the best experience!</p>
            <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">Subscribe</button>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold text-xl mb-4">Whats happening</h2>
            <TrendItem category="NFL * LIVE" name="Cardinals at Bills" />
            <TrendItem category="Esport * Trending" name="Anthony Richard" />
            <TrendItem category="Anime * Trending" name="Luíz dos Anjos" tweeCount="10,657"/>
            <TrendItem category="Futebol * LIVE" name="Édna dos Anjos" tweeCount="7,062"/>
            <TrendItem category="Champions League * LIVE" name="Adriano dos Anjos" tweeCount="1,655"/>
            <TrendItem category="MMA * LIVE" name="Bryce Young"tweeCount="2,605"/>
            <TrendItem category="Brasileirão * LIVE" name="Daboll" tweeCount="2,025"/>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-4"> 
          <h2 className="font-bold text-xl mb-4">Who to follow</h2>
          <FollowItem name = "Elon Musk" username="Elonmusk"/>
          <FollowItem name = "Bill Gates" username="BillGates"/>
          </div>
        </div>
      </aside>
    </div>


  )
}

export default App
