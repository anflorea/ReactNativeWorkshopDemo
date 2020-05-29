import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {GiftedChat, MessageText} from 'react-native-gifted-chat';

export default function ChatScreen(props) {
  const {passedName} = props.navigation.state.params;
  const [messages, setMessages] = useState([]);

  const user = {
    _id: 1,
    name: passedName,
  };

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'This is an image',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'Other',
          avatar: 'https://placeimg.com/140/140/any',
        },
        image: 'https://miro.medium.com/max/1400/1*QDQvlCg420lzRElCK4AYhw.png',
      },
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  let onSend = (newMessages) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  let renderActions = (actionPros) => {
    return <Text style={{fontWeight: 'bold'}}>Upload</Text>;
  };

  return (
    <GiftedChat
      messages={messages}
      renderUsernameOnMessage
      user={user}
      onSend={onSend}
      renderActions={renderActions}
    />
  );
}
