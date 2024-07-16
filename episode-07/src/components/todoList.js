import {useState, useEffect,useRef} from 'react';


const todoApp = () => {
    const [list,setList] = useState([])
    const inputRef = useRef(null);
    useEffect(()=>{
        fetchList()
    },[]);

    const fetchList = async () =>{
        try{
            const data = await fetch('https://dummyjson.com/todos');
            let listJson  = await  data.json();
            listJson = listJson.todos;

            setList(listJson)
            console.log(list)
        }catch(error){

        }
    }

    const addTodo = () => {
        console.log(inputRef.current.value)
        const newList ={
            completed: false,
            id: list.length +1,
            todo:inputRef.current.value ,
            userId: Math.floor(Math.random() * 100) + 1

        }
        setList(list => [newList,...list])

    }

    return(
        <>
            <h1>TODO LIST APP 2024 REACT</h1>
            <input type="text" ref={inputRef} />

            <button onClick={addTodo}>Add</button>
            <ul>
                {list.map((el) => <li key={el.id}>{el.c_title}  </li> )  }
            </ul>
        </>


    )
}
export default todoApp;