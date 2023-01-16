import { List, ListItem } from "@mui/material";
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';

const UserList = (props) => {
    let users = props.users.map((user, idx) => {
        return (
            <ListItem key={idx} style={{ padding: "1px" }}>
                <PersonPinOutlinedIcon
                    style={{
                        color: user.colour,
                        height: 18,
                        width: 18,
                        paddingRight: "10px",
                    }}
                />
                {user.name} is in room {user.room}
            </ListItem>
        );
    });

    return <List>{users}</List>;
};
export default UserList;