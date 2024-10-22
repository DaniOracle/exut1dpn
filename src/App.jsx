import { useState } from 'react'
import './App.css'
import Noticia from './components/Noticia'

function App() {

  const persons = [
    { id: '001', 
      avatar: '/avatar01.png',
      title: 'Título 1', 
      subTitle: '19 de octubre de 2024', 
      imageUrl: '/sky.jpg', 
      text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
      imageDescription: "Theres a sunset on the background",
      likes: 24
    },
    { id: '002', 
        avatar: '/avatar02.png',
        title: 'Título 2', 
        subTitle: '19 de octubre de 2024', 
        imageUrl: '/sea.jpg', 
        text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
        imageDescription: "There's the sea at the bottom",
        likes: 247,
      },
      { id: '003', 
        avatar: '/avatar03.png',
        title: 'Título 3', 
        subTitle: '19 de octubre de 2024', 
        imageUrl: '/tux.jpg', 
        text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
        imageDescription: "I love linux",
        likes: 90,
      },
      { id: '004', 
        avatar: '/avatar04.png',
        title: 'Título 4', 
        subTitle: '19 de octubre de 2024', 
        imageUrl: '/mario.jpg', 
        text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
        imageDescription: "I love linux",
        likes: 678
      },
    
]

  return (

    <>
      {persons.map((personItem) => (
        <Noticia
          avatar={personItem.avatar}
          key={personItem.id}
          title={personItem.title}
          imageUrl={personItem.imageUrl}
          subTitle={personItem.subTitle}
          text={personItem.text}
          description={personItem.description}
          likes={personItem.likes}
        />
      ))}
    </>
  )
}

export default App
