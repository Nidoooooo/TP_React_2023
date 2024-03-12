import './App.css'
import Gallery from './Components/Gallery'

function App() {
  const pics = [
    {
      id: "20",
      author: "Aleks Dorohovich",
      width: 367,
      height: 246,
      url: "https://unsplash.com/photos/nJdwUHmaY8A",
      download_url: "https://picsum.photos/id/20/3670/2462"
    },
    {
      id: "21",
      author: "Alejandro Escamilla",
      width: 300,
      height: 200,
      url: "https://unsplash.com/photos/jVb0mSn0LbE",
      download_url: "https://picsum.photos/id/21/3008/2008"
    },
    {
      id: "22",
      author: "Alejandro Escamilla",
      width: 443,
      height: 372,
      url: "https://unsplash.com/photos/du_OrQAA4r0",
      download_url: "https://picsum.photos/id/22/4434/3729"
    },
    {
      id: "23",
      author: "Alejandro Escamilla",
      width: 388,
      height: 489,
      url: "https://unsplash.com/photos/8yqds_91OLw",
      download_url: "https://picsum.photos/id/23/3887/4899"
    },
    {
      id: "24",
      author: "Alejandro Escamilla",
      width: 485,
      height: 180,
      url: "https://unsplash.com/photos/cZhUxIQjILg",
      download_url: "https://picsum.photos/id/24/4855/1803"
    },
    {
      id: "25",
      author: "Alejandro Escamilla",
      width: 500,
      height: 333,
      url: "https://unsplash.com/photos/Iuq0EL4EINY",
      download_url: "https://picsum.photos/id/25/5000/3333"
    },
    {
      id: "26",
      author: "Vadim Sherbakov",
      width: 429,
      height: 276,
      url: "https://unsplash.com/photos/tCICLJ5ktBE",
      download_url: "https://picsum.photos/id/26/4209/2769"
    },
    {
      id: "27",
      author: "Yoni Kaplan-Nadel",
      width: 326,
      height: 183,
      url: "https://unsplash.com/photos/iJnZwLBOB1I",
      download_url: "https://picsum.photos/id/27/3264/1836"
    },
    {
      id: "28",
      author: "Jerry Adney",
      width: 492,
      height: 326,
      url: "https://unsplash.com/photos/_WiFMBRT7Aw",
      download_url: "https://picsum.photos/id/28/4928/3264"
    },
    {
      id: "29",
      author: "Go Wild",
      width: 400,
      height: 267,
      url: "https://unsplash.com/photos/V0yAek6BgGk",
      download_url: "https://picsum.photos/id/29/4000/2670"
    }
  ]

  return (
    <div>
      <Gallery param={pics}/>
    </div>
  );
}

export default App