import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRs3q-Qv6A__sfIpxtTwaPOnzuO-LqdD0",
  authDomain: "meuprimeirofirestore-9da72.firebaseapp.com",
  projectId: "meuprimeirofirestore-9da72",
  storageBucket: "meuprimeirofirestore-9da72.appspot.com",
  messagingSenderId: "286327931808",
  appId: "1:286327931808:web:aeb81959bc02f9a0d19ac5"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('pessoas');
      const snapshot = await pessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} {item.sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
