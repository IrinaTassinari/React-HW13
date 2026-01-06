// Создайте компонент `UserList`, который будет подключен к Redux store.
// В компоненте `UserList` используйте функцию `setFilter` из пропсов для установки нового фильтра.

import {connect} from 'react-redux'
import UserItem from '../UserItem/UserItem.jsx'

//{ usersList, textFilter } пришли из Redux store через функцию mapStateToProps.
function UserList({usersList, textFilter}){
    const filteredUsers = usersList.filter(user => user.name.toLowerCase().includes(textFilter.toLowerCase()))

    return(
        <div>
            {filteredUsers.map(user => (
                <UserItem key={user.id} name={user.name}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    usersList: state.usersList,
    textFilter: state.textFilter
})

export default connect (mapStateToProps)(UserList);

// connect(mapStateToProps)(UserList)
// делает примерно вот так: 
// <UserList
//   usersList={state.usersList}
//   textFilter={state.textFilter}
// />


// Главное правило Redux (запомни!)
//  Имена должны совпадать ВЕЗДЕ
// reducer → mapStateToProps → props компонента