import React, {useEffect} from 'react' //נייבא את היוז אפקט
import { connect } from "react-redux"; //ניבא את הקונקט לסטור
import { fetchUsers } from "../redux/user/userActions"; //ניבא את הפונקציה של הקריאה לאייפיאיי
import './css/user.css';

//נשים כאן את הפרופס שלנו - מכיוון שיש 2 אנחנו שמים בסוגריים מסולסלים
const UserContainer = ({ fetchUsers, userData }) =>{
    useEffect(() => {
        fetchUsers()
    }, [])

    //אם המידע בשלבי טעינה נחזיר הודעה בהתאם
    return userData.loading ? (
        <h2>Loading</h2>
    )
    //אחרת אם יש שגיאה - נחזיר הודעת שגיאה
    : userData.error ? (
        <h2>{userData.error}</h2>
    )
    //אחרת אם בוצעה הטעינה בהצלחה - נחזיר את המידע
    : (
        <div className = 'users'>
            <h2>Our Customers</h2>
            {/* נחזיר את שמות המשתמשים  */}
            <div> 
                {userData && userData.users && userData.users.map(user => 
                <div  class = 'userDetails'>
                    <h3> {user.company.name}</h3>
                    <p>{user.name}</p>
                    <a href = {user.website}>{user.website} </a>
                    <a href= {`tel: ${(user.phone)}`}>{user.phone}</a>
                </div>
                )}
            </div>
        </div>
    )
}
//המרה של הסטייט הרלוונטי (רשימת היוזרס) לפרופס
const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}

//מקבלת את הדיספאטצ' ומחזירה אובייקט שהוא האקשן קריאטור
const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)