import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default UserList;
