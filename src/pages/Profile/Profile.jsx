import React, { useContext } from 'react'
import { Layout, Card, Typography } from 'antd'
import { UserContext } from '../../context/userContext';

const { Content } = Layout;
const { Title, Text } = Typography;

const Profile = () => {
   const { user } = useContext(UserContext);

   console.log(user)
   return (
      <Content style={{margin: '0 15rem'}}>
         <Card>
            <Title>{ user ? user.user.fname +' '+ user.user.lname: 'Loading'}</Title>
            <Text>{ user ? user.user.email : 'Loading'} </Text>
         </Card>
      </Content>
   )
}

export default Profile