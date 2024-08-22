import { Button, ListItem, Overlay, SearchBar, Text } from '@rneui/themed';
import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native';

const AxiosEjemplo = () => {
 const [data, setData] = useState([]);
 const [search, setSearch] = useState('');
 const [filteredData, setFilteredData] = useState([]);
 const [selectedItem, setSelectedItem] = useState(null);
 const [visible, setVisible] = useState(false);

  useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setData(response.data);
            setFilteredData(response.data);
        })
        .catch(error => console.error(error));
    }, []);

  const updateSearch = (search) => {
    setSearch(search);
    setFilteredData(
      data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    );
  };

  const toggleOverlay = (item) => {
    setSelectedItem(item);
    setVisible(!visible);
  };

  return (
    <View>
        <SearchBar
          round
          placeholder="Buscar..."
          onChangeText={updateSearch}
          value={search}
        />
        <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            <ListItem bottomDivider onPress={() => toggleOverlay(item)}>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
        )}
        />
        {selectedItem && (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} 
                        style={{ width: 300, height: 250, padding: 10 }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedItem.name}</Text>
            <Text>Email: {selectedItem.email}</Text>
            <Text>Phone: {selectedItem.phone}</Text>
            <Button title="Cerrar" onPress={toggleOverlay} />
          </View>
        </Overlay>
      )}
    </View>
  )
}
export default AxiosEjemplo