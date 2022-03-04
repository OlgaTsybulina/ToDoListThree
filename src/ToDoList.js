import { Component } from 'react';
import icons from './icons.png';
export class ToDoList extends Component{
    state = {
        userInput:"",
        toDoList:[]
    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    addItem(buttonAdd){
        if(buttonAdd===''){
            alert("Пожалуйста, заполните графу")
        }
        else{
        let listAray = this.state.toDoList;
        listAray.push(buttonAdd);
        this.setState({
            toDoList:listAray,
            userInput:""
        })
      }
    }
    crossedOut(event){
        const letter = event.target;
        letter.classList.toggle('crossed');
    }
    deleteItem(){
        let listAray = this.state.toDoList;
        listAray=[];
        this.setState({toDoList:listAray})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text" placeholder='Итак, какие дела на сегодня?'  onChange ={(e) => {this.onChangeEvent(e.target.value)}} value = {this.state.userInput}/>
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className='add'>В список</button>
                </div>
                <ul>
                    {this.state.toDoList.map((item,index) =>(
                    <li onClick={this.crossedOut} key={index} alt="case">
                        <img src={icons} width="40px"/>
                        {item}
                    </li>))}
                </ul>
                <div className="container">
                <button onClick={()=> this.deleteItem()} className='delete'>Удалить список</button>
                </div>
                </form>
            </div>
        )
    }
}