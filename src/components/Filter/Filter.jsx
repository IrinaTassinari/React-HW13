// Поток данных:
// Input → setFilter → reducer → store → filtered users

// Filter — управляет состоянием
// UserList — отображает данные

// Как всё работает вместе
// Поток данных:
// 1.Пользователь вводит текст в Filter
// 2.setFilter → dispatch
// 3.reducer обновляет textFilter
// 4.UserList получает обновлённый textFilter
// 6.Список пользователей фильтруется
// 7.UserItem отображает имена

import {connect} from 'react-redux'
import {setFilter} from '../../redux/actions'
// import style from './Filter.module.css'

function Filter({setFilter}){
    const handleChange = (e) => {
        setFilter(e.target.value) 
        //✔ при каждом вводе текста
        //✔ диспатчится action
        //✔ редьюсер обновляет textFilter
    }
return(
    <div>
        <h1>User List</h1>
        <input type="text" 
        placeholder="Filter by name"
        onChange={handleChange}/>
    </div>
)
}

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
    return{
        setFilter: (text) => dispatch(setFilter(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

